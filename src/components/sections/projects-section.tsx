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
    title: 'MunchMate',
    description: 'Munchmate is a feature-rich Swiggy clone that transforms food ordering with a sleek, responsive interface and advanced functionality. The app offers a visually engaging Shimmer UI, location-aware restaurant listings via the Swiggy API, intuitive search and top-rated filters, and detailed menus. Built with React and TailwindCSS, Munchmate leverages custom hooks, Redux-Toolkit for state management, and robust testing with Jest, all bundled efficiently using Parcel. The result is a modern, seamless food ordering experience across all devices',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    projectUrl: 'https://swiggyclonesriyansh.vercel.app/',
    repoUrl: 'https://github.com/Sriyanshjain/MunchMate',
    tags: [ 'React', 'Tailwind CSS', 'Redux-toolkit', 'Jest'],
  },
  {
    id: '2',
    title: 'Funflix',
    description: 'A movie streaming web application similar to Netflix that leverages generative AI to suggest various types of content depending upon your mood.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai content',
    projectUrl: 'https://funflixsriyansh.vercel.app/',
    repoUrl: 'https://github.com/Sriyanshjain/netflixGPT',
    tags: [ 'React','Tailwind CSS', 'Redux-toolkit','OpenAI API'],
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
                    <Badge key={tag} variant="secondary" className="bg-accent/80 text-accent-foreground hover:bg-accent">{tag}</Badge>
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
