import { LandingHeader } from './components/LandingHeader';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { TemplateGallery } from '@/components/landing/TemplateGallery';
import { Testimonials } from '@/components/landing/Testimonials';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
export default async function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <LandingHeader />

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
