'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating compelling and concise project descriptions.
 *
 * - aidProjectDescriptionGeneration - A function that generates a project description.
 * - AidProjectDescriptionGenerationInput - The input type for the aidProjectDescriptionGeneration function.
 * - AidProjectDescriptionGenerationOutput - The return type for the aidProjectDescriptionGeneration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AidProjectDescriptionGenerationInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  technologiesUsed: z
    .array(z.string())
    .describe('A list of technologies and frameworks used in the project.'),
  keyFeatures: z
    .array(z.string())
    .describe('A list of the main features or functionalities of the project.'),
  projectGoal: z.string().describe('The primary goal or objective of the project.'),
  targetAudience: z
    .string()
    .optional()
    .describe('The intended audience or users of the project.'),
  myRole: z
    .string()
    .optional()
    .describe('Your role in the project development.'),
  additionalContext: z
    .string()
    .optional()
    .describe('Any additional context or details about the project that might be helpful.'),
});
export type AidProjectDescriptionGenerationInput = z.infer<
  typeof AidProjectDescriptionGenerationInputSchema
>;

const AidProjectDescriptionGenerationOutputSchema = z.object({
  description: z.string().describe('A concise and compelling project description.'),
});
export type AidProjectDescriptionGenerationOutput = z.infer<
  typeof AidProjectDescriptionGenerationOutputSchema
>;

export async function aidProjectDescriptionGeneration(
  input: AidProjectDescriptionGenerationInput
): Promise<AidProjectDescriptionGenerationOutput> {
  return aidProjectDescriptionGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aidProjectDescriptionGenerationPrompt',
  input: {schema: AidProjectDescriptionGenerationInputSchema},
  output: {schema: AidProjectDescriptionGenerationOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling and concise project descriptions for professional portfolios. Your goal is to highlight the project's essence, key features, technologies, and impact to impress potential clients or employers.\n\nGenerate a compelling project description based on the following details:\n\nProject Name: {{{projectName}}}\nTechnologies Used: {{#each technologiesUsed}}- {{{this}}}\n{{/each}}\nKey Features: {{#each keyFeatures}}- {{{this}}}\n{{/each}}\nProject Goal: {{{projectGoal}}}\n{{#if targetAudience}}Target Audience: {{{targetAudience}}}\n{{/if}}{{#if myRole}}My Role: {{{myRole}}}\n{{/if}}{{#if additionalContext}}Additional Context: {{{additionalContext}}}\n{{/if}}\n\nPlease ensure the description is:\n- Concise (around 100-150 words, but adapt if needed for clarity).\n- Engaging and professional.\n- Highlights the unique value or achievement of the project.\n- Suitable for a web development portfolio.\n\nProvide only the description in your response, without any introductory or concluding remarks.`,
});

const aidProjectDescriptionGenerationFlow = ai.defineFlow(
  {
    name: 'aidProjectDescriptionGenerationFlow',
    inputSchema: AidProjectDescriptionGenerationInputSchema,
    outputSchema: AidProjectDescriptionGenerationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
