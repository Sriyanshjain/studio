'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { summarizeFeedback, type SummarizeFeedbackOutput } from '@/ai/flows/summarize-feedback';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const feedbackSchema = z.object({
  feedbackText: z.string().min(10, { message: 'Feedback must be at least 10 characters long.' }).max(2000, {message: 'Feedback must be at most 2000 characters long.'}),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export default function FeedbackSummarizerSection() {
  const [summaryResult, setSummaryResult] = useState<SummarizeFeedbackOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedbackText: '',
    },
  });

  const onSubmit: SubmitHandler<FeedbackFormData> = async (data) => {
    setIsLoading(true);
    setSummaryResult(null);
    try {
      const result = await summarizeFeedback({ feedbackText: data.feedbackText });
      setSummaryResult(result);
      toast({
        title: 'Feedback Summarized!',
        description: 'The AI has processed your feedback.',
        variant: 'default',
      });
    } catch (error) {
      console.error('Error summarizing feedback:', error);
      toast({
        title: 'Error',
        description: 'Failed to summarize feedback. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="feedback" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">AI Feedback Analyzer</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Have some feedback about this website? Let my AI assistant summarize it for me!
            This tool uses generative AI to extract key insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg animate-slide-in-up opacity-0 [--slide-in-up-delay:1100ms]">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><Wand2 className="mr-2 h-6 w-6 text-primary" />Submit Your Feedback</CardTitle>
              <CardDescription>
                Enter your thoughts about this portfolio website below. The AI will process it to identify key improvement points and positive highlights.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="feedbackText"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="feedbackText">Your Feedback</FormLabel>
                        <FormControl>
                          <Textarea
                            id="feedbackText"
                            placeholder="Tell me what you think about my portfolio, any suggestions, or features you liked..."
                            className="min-h-[150px] resize-none"
                            {...field}
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Summarize with AI'
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {isLoading && !summaryResult && (
            <div className="flex flex-col items-center justify-center min-h-[300px] bg-card p-6 rounded-lg shadow-lg">
              <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
              <p className="text-lg text-muted-foreground">AI is thinking...</p>
              <p className="text-sm text-muted-foreground">Please wait while your feedback is being analyzed.</p>
            </div>
          )}

          {summaryResult && (
            <Card className="shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">AI Summary</CardTitle>
                <CardDescription>{summaryResult.summary}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Key Improvement Points:</h3>
                  {summaryResult.improvementPoints.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {summaryResult.improvementPoints.map((point, index) => (
                        <li key={`improvement-${index}`}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">No specific improvement points identified.</p>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-accent mb-2">Positive Highlights:</h3>
                   {summaryResult.positiveHighlights.length > 0 ? (
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {summaryResult.positiveHighlights.map((point, index) => (
                        <li key={`positive-${index}`}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">No specific positive highlights identified.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
