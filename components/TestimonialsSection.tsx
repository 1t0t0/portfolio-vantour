// components/TestimonialsSection.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/data/testimonialsData';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Show 3 sets of 3 testimonials
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Get current 3 testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonialsData.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full text-base font-medium mb-6 italic">
            ความคิดเห็น

          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
แฟนๆ พูดถึงเราว่าอย่างไร
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="grid md:grid-cols-3 gap-12 mb-16 transition-all duration-500 ease-in-out"
            key={currentSlide}
          >
            {getCurrentTestimonials().map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-8 text-base lg:text-lg">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-base text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                index === currentSlide 
                  ? 'bg-orange-400' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;