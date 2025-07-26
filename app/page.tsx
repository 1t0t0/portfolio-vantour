// app/page.tsx
import ContactSection from '@/components/ContactSection';
import FeaturedToursSection from '@/components/FeaturedToursSection';
import ExperienceSection from '@/components/ExperienceSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Home Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>

        {/* About Section (Experience + Gallery + Testimonials) */}
        <section id="about">
          <ExperienceSection />
        </section>

        {/* Tours Section */}
        <section id="tours">
          <FeaturedToursSection />
            <GallerySection />
          <TestimonialsSection />
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Home;