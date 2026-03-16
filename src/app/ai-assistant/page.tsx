import { ProjectOptimizer } from "@/components/ai/ProjectOptimizer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'AI Assistant | SAMAR.',
  description: 'Leverage generative AI to craft compelling project descriptions and optimize your professional portfolio.',
};

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-12">
      <ProjectOptimizer />
    </div>
  );
}
