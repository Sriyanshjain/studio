import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white">
    
      <div className="absolute inset-0 z-0 animate-gradient-pulse opacity-20"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg animate-slide-in-from-bottom animation-delay-300ms">
            Hi, I&apos;m <span className="text-primary-light hover:text-accent cursor-pointer inline-block group">Sriyansh Jain <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300">✨</span></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-in-from-bottom animation-delay-500ms">
            A passionate Full Stack Developer specializing in creating modern, responsive, and user-friendly web applications. I love turning ideas into reality with code.
          </p>
          <div className="flex justify-center gap-4 animate-slide-in-from-bottom animation-delay-700ms">
            <Button size="lg" asChild className="transition-transform hover:scale-105 shadow-lg animate-slide-in-from-bottom animation-delay-900ms">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button size="lg" asChild className="transition-transform hover:scale-105 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 animate-slide-in-from-bottom animation-delay-1100ms">
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
