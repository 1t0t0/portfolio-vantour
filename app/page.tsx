// app/page.tsx
import ContactSection from '@/components/ContactSection';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContactSection/>
      </main>
    </div>
  );
};

export default Home;