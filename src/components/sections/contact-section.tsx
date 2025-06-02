import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-1 gap-8">
          <Card className="shadow-lg animate-slide-in-up opacity-0 [--slide-in-up-delay:900ms]">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-muted-foreground">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
              </p>
              <div className="flex items-center justify-center space-x-3 text-lg">
                <Mail className="h-6 w-6 text-primary" />
                <Link href="mailto:sriyanshjain1997@gmail.com" className="hover:text-primary transition-colors">
                  sriyanshjain1997@gmail.com
                </Link>
              </div>
               {/* Optional: Add Phone and Location if desired by user. For now, focusing on email.
              <div className="flex items-center justify-center space-x-3 text-lg">
                <Phone className="h-6 w-6 text-primary" />
                <span>+1 (234) 567-8900 (Placeholder)</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-lg">
                <MapPin className="h-6 w-6 text-primary" />
                <span>Noida, India (Placeholder)</span>
              </div>
              */}
              <div className="pt-4">
                <Button size="lg" asChild className="transition-transform hover:scale-105">
                  <Link href="mailto:sriyanshjain1997@gmail.com">Send an Email</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
