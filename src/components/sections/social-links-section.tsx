import Link from 'next/link';
import { Github, Linkedin, TerminalSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/sriyanshjain',
    icon: Github,
    ariaLabel: 'Sriyansh Jain on GitHub',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sriyansh-jain-35b876157/',
    icon: Linkedin,
    ariaLabel: 'Sriyansh Jain on LinkedIn',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/sriyanshjain1997/',
    icon: TerminalSquare,
    ariaLabel: 'Sriyansh Jain on LeetCode',
  },
];

export default function SocialLinksSection() {
  return (
    <section id="social-links" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Follow my journey, explore my code, and connect with me on these platforms.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              size="lg"
              asChild
              className="transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105 group animate-slide-in-up opacity-0 [--slide-in-up-delay:700ms]"
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.ariaLabel}>
                <link.icon className="mr-3 h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
