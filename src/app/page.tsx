// app/page.tsx
import AOSInitializer from '@/components/AOSInitializer';
import type { NextPage } from 'next';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialSection';
import BlogSection from '@/components/BlogSection';
import CallToActionSection from '@/components/CallToActionSection';

const HomePage: NextPage = () => {
  return (
    <div>
      <AOSInitializer />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;