// components/ExperienceSection.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const ExperienceSection = () => {
  // เรียกใช้ Environment Variable
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  
  const stats = [
    {
      number: 12000,
      suffix: "+",
      label: "การเดินทางที่สำเร็จ"
    },
    {
      number: 2000,
      suffix: "+", 
      label: "ลูกค้าประจำ"
    },
    {
      number: 15,
      suffix: "",
      label: "ปีแห่งประสบการณ์"
    }
  ];

  // สร้าง Cloudinary URL
  const logoImageUrl = `https://res.cloudinary.com/dmt2zysfc/image/upload/v1753507216/logo_uzqrpw.jpg`;

  // State สำหรับ animated counters
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Function สำหรับนับขึ้น
  const animateNumber = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max((endTime - now) / duration, 0);
      const value = Math.round(end - (remaining * (end - start)));
      
      callback(value);
      
      if (value === end) {
        clearInterval(timer);
      }
    }, 16); // 60fps
  };

  // Intersection Observer สำหรับตรวจจับว่า section เข้ามาในหน้าจอ
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // เริ่มการนับสำหรับแต่ละ stat
            stats.forEach((stat, index) => {
              // ความเร็วแตกต่างกันตาม index
              const duration = 2000 + (index * 500); // 2 วินาที, 2.5 วินาที, 3 วินาที
              
              animateNumber(0, stat.number, duration, (value) => {
                setAnimatedStats(prev => {
                  const newStats = [...prev];
                  newStats[index] = value;
                  return newStats;
                });
              });
            });
          }
        });
      },
      {
        threshold: 0.3, // เริ่มเมื่อ section เข้ามา 30%
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  // Format ตัวเลขให้มี comma
  const formatNumber = (num: number) => {
    return num.toLocaleString('th-TH');
  };

  return (
    <section ref={sectionRef} className="py-20 lg:pt-[10rem] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium font-prompt">
                ประสบการณ์
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-prompt">
                ด้วยประสบการณ์ทั้งหมดของเรา เราจะให้บริการคุณ
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed font-sarabun text-thai-body">
                บริษัทของเราให้บริการด้วยประสบการณ์อันยาวนาน 
                พร้อมทีมงานมืออาชีพที่จะดูแลการเดินทางของคุณอย่างใส่ใจ
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-400 rounded-lg p-4 mb-3 hover:bg-orange-500 transition-colors duration-300">
                    <span className="text-2xl lg:text-3xl font-bold text-white font-prompt">
                      {formatNumber(animatedStats[index])}{stat.suffix}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium font-sarabun text-thai-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              {/* Main circular background */}
              <div className="w-96 h-96 bg-orange-400 rounded-full mx-auto relative overflow-hidden hover:scale-105 transition-transform duration-500">
                {/* ใช้ Cloudinary URL พร้อม Environment Variable */}
                <Image
                  src={logoImageUrl}
                  width={400}
                  height={400}
                  alt="Lambo Car Rental Experience"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
              
              {/* Decorative dots with animation */}
              <div className="absolute -top-8 left-1/4 w-5 h-5 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -bottom-4 right-1/4 w-5 h-5 bg-orange-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-orange-200 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;