// components/Footer.tsx
'use client';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 0;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <h3 className="text-2xl font-bold text-gray-800 font-prompt">
                  <span className="text-orange-400">LAMBO</span> CAR RENTAL
                </h3>
                
              </div>
              <p className="text-sm text-gray-500 italic font-sarabun">
                ถึงเวลาเดินทางท่องโลกแล้ว
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-6 font-sarabun">
              บริษัทรถเช่าแรมโบ้ พาเที่ยวแบบถูกกฎหมาย 
              บริการพาเที่ยวภายในประเทศและนอกประเทศ 
              บริการทุกระดับประทับใจ เที่ยวแบบปลอดภัย
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/8562077801819" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                </svg>
              </a>
              
              <a 
                href="line://ti/p/Lambo_0365?text=สวัสดีครับ%20สนใจสอบถามเรื่องการเช่ารถครับ" 
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 5.85 2 10.5c0 1.49.53 2.87 1.44 4.03L2 20l5.64-1.22C8.84 19.55 10.37 20 12 20c5.52 0 10-3.85 10-8.5S17.52 2 12 2z"/>
                  <text x="12" y="13" textAnchor="middle" fontSize="6" fill="orange" fontFamily="Arial, sans-serif" fontWeight="bold">LINE</text>
                </svg>
              </a>
              
              <a 
                href="https://www.facebook.com/share/1GGB4HGpKB/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* หมวดหมู่ (Discover) Links */}
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-6 font-prompt">หมวดหมู่</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-600 hover:text-orange-400 transition-colors font-sarabun text-left"
                >
                  หน้าหลัก
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-orange-400 transition-colors font-sarabun text-left"
                >
                  เกี่ยวกับเรา
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('tours')}
                  className="text-gray-600 hover:text-orange-400 transition-colors font-sarabun text-left"
                >
                  ทัวร์
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-orange-400 transition-colors font-sarabun text-left"
                >
                  ติดต่อเรา
                </button>
              </li>
            </ul>
          </div>



          {/* ติดต่อ (Contact) */}
          <div>
            <h4 className="font-bold text-gray-900 text-lg mb-6 font-prompt">ติดต่อ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-orange-400 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-900 font-prompt">ที่อยู่ :</span>
                  <p className="text-gray-600 font-sarabun">หลวงพระบาง, ลาว</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-orange-400 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-900 font-prompt">อีเมล :</span>
                  <p className="text-gray-600 font-sarabun">lambocarrental@mail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-orange-400 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-medium text-gray-900 font-prompt">โทรศัพท์ :</span>
                  <p className="text-gray-600 font-sarabun">+856 20 7780 1819</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm font-sarabun">
            © 2025 <span className="text-orange-400 font-medium font-prompt">LAMBO CAR RENTAL</span>. สงวนลิขสิทธิ์ทั้งหมด
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;