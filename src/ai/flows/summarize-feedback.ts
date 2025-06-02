// Summarize feedback into key improvement points and positive highlights.
'use server';

/**
 * @fileOverview A feedback summarization AI agent.
 *
 * - summarizeFeedback - A function that handles the feedback summarization process.
 * - SummarizeFeedbackInput - The input type for the summarizeFeedback function.
 * - SummarizeFeedbackOutput - The return type for the summarizeFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFeedbackInputSchema = z.object({
  feedbackText: z.string().describe('The user feedback text to summarize.'),
});
export type SummarizeFeedbackInput = z.infer<typeof SummarizeFeedbackInputSchema>;

const SummarizeFeedbackOutputSchema = z.object({
  summary: z.string().describe('A summary of the user feedback, including key improvement points and positive highlights.'),
  improvementPoints: z.array(z.string()).describe('Key areas for improvement identified from the feedback.'),
  positiveHighlights: z.array(z.string()).describe('Positive aspects of the website highlighted in the feedback.'),
});
export type SummarizeFeedbackOutput = z.infer<typeof SummarizeFeedbackOutputSchema>;

export async function summarizeFeedback(input: SummarizeFeedbackInput): Promise<SummarizeFeedbackOutput> {
  return summarizeFeedbackFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeFeedbackPrompt',
  input: {schema: SummarizeFeedbackInputSchema},
  output: {schema: SummarizeFeedbackOutputSchema},
  prompt: `You are a website feedback summarization tool. Analyze the user feedback provided and identify key improvement points and positive highlights. Provide a concise summary of the feedback, a list of improvement points, and a list of positive highlights.

Feedback: {{{feedbackText}}}`,
});

const summarizeFeedbackFlow = ai.defineFlow(
  {
    name: 'summarizeFeedbackFlow',
    inputSchema: SummarizeFeedbackInputSchema,
    outputSchema: SummarizeFeedbackOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
