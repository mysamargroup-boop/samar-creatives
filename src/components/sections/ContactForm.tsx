
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Phone, MapPin, Send } from "lucide-react";
import * as React from "react";

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">Get In Touch</h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or just want to say hi? I'm always open to 
                discussing new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email me at</p>
                  <p className="font-bold">hello@pixelcanvas.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call me at</p>
                  <p className="font-bold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-2xl shadow-sm">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-bold">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-white/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Full Name</label>
                  <Input placeholder="John Doe" required className="bg-secondary/20 border-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email Address</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-secondary/20 border-none focus-visible:ring-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Subject</label>
                <Input placeholder="Inquiry about new project" required className="bg-secondary/20 border-none focus-visible:ring-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Your Message</label>
                <Textarea 
                  placeholder="Tell me more about your project goals..." 
                  required 
                  className="min-h-[150px] bg-secondary/20 border-none focus-visible:ring-primary" 
                />
              </div>
              <Button type="submit" size="lg" disabled={loading} className="w-full h-14 rounded-xl gap-2 font-bold">
                {loading ? "Sending..." : "Send Message"} <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
