import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import SocialLinksSection from '@/components/sections/social-links-section';
import ContactSection from '@/components/sections/contact-section';
import FeedbackSummarizerSection from '@/components/sections/feedback-summarizer-section';

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <SocialLinksSection />
        <FeedbackSummarizerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
