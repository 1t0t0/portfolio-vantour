// components/Header.tsx
'use client';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 0; // ความสูงของ header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // เปลี่ยน active state
      setActiveSection(sectionId);
      
      // ปิด mobile menu หลังจากกด
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // ตรวจสอบ section ไหนอยู่ในหน้าจอตอนนี้
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'contact', 'about', 'tours'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // เรียกครั้งแรกเมื่อโหลดหน้า

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl md:text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('home')}>
                <span className="text-gray-800">
                  <span className='text-orange-400'>LAMBO</span> 
                  <span className="hidden sm:inline"> CAR RENTAL</span>
                  <span className="sm:hidden"> RENTAL</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeSection === 'home' 
                    ? 'text-white bg-orange-400' 
                    : 'text-gray-700 hover:text-orange-400 hover:bg-orange-50'
                }`}
              >
                หน้าหลัก
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeSection === 'contact' 
                    ? 'text-white bg-orange-400' 
                    : 'text-gray-700 hover:text-orange-400 hover:bg-orange-50'
                }`}
              >
                ติดต่อเรา
              </button>

              <button 
                onClick={() => scrollToSection('about')}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeSection === 'about' 
                    ? 'text-white bg-orange-400' 
                    : 'text-gray-700 hover:text-orange-400 hover:bg-orange-50'
                }`}
              >
                เกี่ยวกับเรา
              </button>
              <button 
                onClick={() => scrollToSection('tours')}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeSection === 'tours' 
                    ? 'text-white bg-orange-400' 
                    : 'text-gray-700 hover:text-orange-400 hover:bg-orange-50'
                }`}
              >
                ทัวร์
              </button>
              
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Background overlay */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu panel */}
          <div className="fixed top-0 left-0 right-0 bg-white shadow-2xl animate-slide-down border-b-2 border-orange-400">
            {/* Header area */}
            <div className="bg-white px-6 py-8 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div className="text-3xl font-bold text-gray-800">
                  <span className="text-orange-400">LAMBO</span> <span className="font-light">RENTAL</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation area */}
            <div className="px-8 py-10 bg-white">
              <nav className="flex flex-col space-y-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className={`px-8 py-5 rounded-lg font-semibold transition-all duration-300 text-center text-xl shadow-lg ${
                    activeSection === 'home'
                      ? 'bg-orange-400 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-orange-400 hover:text-white'
                  }`}
                >
                  หน้าหลัก
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className={`px-8 py-5 text-left rounded-lg text-xl font-medium transition-all duration-300 ${
                    activeSection === 'about'
                      ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-400'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-orange-400'
                  }`}
                >
                  เกี่ยวกับเรา
                </button>
                <button 
                  onClick={() => scrollToSection('tours')}
                  className={`px-8 py-5 text-left rounded-lg text-xl font-medium transition-all duration-300 ${
                    activeSection === 'tours'
                      ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-400'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-orange-400'
                  }`}
                >
                  ทัวร์
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-5 text-left rounded-lg text-xl font-medium transition-all duration-300 ${
                    activeSection === 'contact'
                      ? 'text-orange-500 bg-orange-50 border-l-4 border-orange-400'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50 border-l-4 border-transparent hover:border-orange-400'
                  }`}
                >
                  ติดต่อเรา
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes slide-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};

export default Header;