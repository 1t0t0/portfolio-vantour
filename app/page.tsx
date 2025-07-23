// app/page.tsx
import ContactSection from '@/components/ContactSection';
import FeaturedToursSection from '@/components/FeaturedToursSection';
import ExperienceSection from '@/components/ExperienceSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ContactSection/>
        <FeaturedToursSection/>
        <ExperienceSection/>
        <GallerySection/>
        <TestimonialsSection/>
      </main>
    </div>
  );
};

export default Home;