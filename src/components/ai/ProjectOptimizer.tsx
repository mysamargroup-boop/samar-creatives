
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Sparkles, Copy, RefreshCcw, Wand2, Loader2, Check } from "lucide-react";
import { aidProjectDescriptionGeneration } from "@/ai/flows/aid-project-description-generation";
import { useToast } from "@/hooks/use-toast";

export function ProjectOptimizer() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const [formData, setFormData] = React.useState({
    projectName: "",
    technologiesUsed: "",
    keyFeatures: "",
    projectGoal: "",
    myRole: "",
  });

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    try {
      const output = await aidProjectDescriptionGeneration({
        projectName: formData.projectName,
        technologiesUsed: formData.technologiesUsed.split(",").map(t => t.trim()),
        keyFeatures: formData.keyFeatures.split(",").map(f => f.trim()),
        projectGoal: formData.projectGoal,
        myRole: formData.myRole,
      });
      setResult(output.description);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "There was an error generating the description. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Description copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex p-3 bg-accent/10 rounded-2xl mb-4">
          <Sparkles className="h-8 w-8 text-accent" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold">AI Project Assistant</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Leverage generative AI to craft compelling project descriptions for your portfolio. 
          Just provide the core details and let the assistant do the heavy lifting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card className="border-none shadow-xl bg-white rounded-3xl">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>Enter the basic info about your project.</CardDescription>
          </CardHeader>
          <CardContent>
            <form id="ai-form" onSubmit={handleGenerate} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Project Name</label>
                <Input 
                  placeholder="e.g. PixelCanvas Portfolio" 
                  value={formData.projectName}
                  onChange={e => setFormData({...formData, projectName: e.target.value})}
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Technologies (comma separated)</label>
                <Input 
                  placeholder="Next.js, Tailwind, TypeScript" 
                  value={formData.technologiesUsed}
                  onChange={e => setFormData({...formData, technologiesUsed: e.target.value})}
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Key Features (comma separated)</label>
                <Textarea 
                  placeholder="AI integration, Responsive design, Dynamic grid..." 
                  value={formData.keyFeatures}
                  onChange={e => setFormData({...formData, keyFeatures: e.target.value})}
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Primary Goal</label>
                <Textarea 
                  placeholder="What problem does it solve?" 
                  value={formData.projectGoal}
                  onChange={e => setFormData({...formData, projectGoal: e.target.value})}
                  required 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Your Role (Optional)</label>
                <Input 
                  placeholder="Lead Developer / Solo Architect" 
                  value={formData.myRole}
                  onChange={e => setFormData({...formData, myRole: e.target.value})}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button 
              type="submit" 
              form="ai-form" 
              className="w-full h-12 gap-2 rounded-xl"
              disabled={loading}
            >
              {loading ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Generating...</>
              ) : (
                <><Wand2 className="h-4 w-4" /> Craft Description</>
              )}
            </Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card className={`border-none shadow-xl bg-primary text-primary-foreground rounded-3xl min-h-[400px] flex flex-col transition-all duration-500 ${result ? 'scale-100' : 'scale-95 opacity-50'}`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Result</span>
                {result && (
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={copyToClipboard}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center p-8">
              {result ? (
                <p className="text-lg leading-relaxed whitespace-pre-wrap">{result}</p>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="h-8 w-8 text-white/40" />
                  </div>
                  <p className="text-white/60">Your generated description will appear here.</p>
                </div>
              )}
            </CardContent>
            {result && (
              <CardFooter className="bg-white/5 p-4 justify-center">
                <p className="text-xs text-white/60">Generated by Gemini-powered Project Assistant</p>
              </CardFooter>
            )}
          </Card>
          
          {result && (
            <Button variant="outline" className="w-full h-12 gap-2 rounded-xl border-primary text-primary hover:bg-primary/5" onClick={() => setResult("")}>
              <RefreshCcw className="h-4 w-4" /> Reset and Start Over
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
