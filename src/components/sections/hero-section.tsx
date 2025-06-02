import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-slide-in-up opacity-0 [--slide-in-up-delay:300ms]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Sriyansh Jain</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A passionate Full Stack Developer specializing in creating modern, responsive, and user-friendly web applications. I love turning ideas into reality with code.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild className="transition-transform hover:scale-105">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="transition-transform hover:scale-105">
              <Link href="#contact">
                Get in Touch <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
