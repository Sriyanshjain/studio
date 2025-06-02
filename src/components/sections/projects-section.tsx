import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  projectUrl?: string;
  repoUrl?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'This very portfolio, built with Next.js, Tailwind CSS, ShadCN UI, and featuring a GenAI-powered feedback summarizer.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    projectUrl: '#',
    repoUrl: 'https://github.com/sriyanshjain-official/portfolio',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'GenAI', 'TypeScript'],
  },
  {
    id: '2',
    title: 'AI-Powered Content Generator',
    description: 'A web application that leverages generative AI to create various types of content, such as blog posts, marketing copy, and social media updates.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai content',
    repoUrl: 'https://github.com/sriyanshjain-official/ai-content-generator',
    tags: ['Python', 'Flask', 'OpenAI API', 'React', 'NLP'],
  },
  {
    id: '3',
    title: 'Real-time Collaborative Whiteboard',
    description: 'A collaborative whiteboard application allowing multiple users to draw and brainstorm in real-time, built using WebSockets and Canvas API.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'whiteboard collaboration',
    projectUrl: '#',
    repoUrl: 'https://github.com/sriyanshjain-official/collaborative-whiteboard',
    tags: ['Node.js', 'Express', 'Socket.IO', 'React', 'Canvas'],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-up opacity-0 [--slide-in-up-delay:500ms]">
              <CardHeader className="p-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-2xl mb-2 font-headline">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4 h-20 overflow-y-auto">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-accent/20 text-accent-foreground hover:bg-accent/30">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 border-t">
                <div className="flex justify-between w-full">
                  {project.projectUrl && (
                    <Button variant="outline" asChild>
                      <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="ghost" asChild>
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Source Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
