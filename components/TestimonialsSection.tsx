// components/TestimonialsSection.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Bugg",
      role: "Travel Enthusiast",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
      testimonial: "Amazing experience! The tour was perfectly organized and our guide was knowledgeable. I highly recommend this travel agency for anyone looking for adventure and cultural experiences."
    },
    {
      id: 2,
      name: "John Deep",
      role: "Adventure Seeker", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face",
      testimonial: "Best travel experience ever! The destinations were breathtaking and the service was top-notch. Every detail was taken care of, making our trip stress-free and memorable."
    },
    {
      id: 3,
      name: "Ally Gomez",
      role: "Frequent Traveler",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b176?w=120&h=120&fit=crop&crop=face", 
      testimonial: "Incredible journey! The team went above and beyond to ensure we had the perfect vacation. The attention to detail and personalized service made all the difference."
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Family Vacationer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
      testimonial: "Perfect family vacation! The kids loved every moment and we parents could relax knowing everything was well-organized. Great value for money and unforgettable memories."
    },
    {
      id: 5,
      name: "Mike Chen",
      role: "Solo Traveler",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
      testimonial: "Outstanding solo travel experience! I felt safe and supported throughout my journey. The local guides were fantastic and showed me hidden gems I never would have found alone."
    },
    {
      id: 6,
      name: "Emma Wilson",
      role: "Honeymoon Traveler",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face",
      testimonial: "Dream honeymoon came true! Every romantic detail was perfectly planned. The destinations were magical and the service exceeded our expectations. Thank you for making our trip so special!"
    },
    {
      id: 7,
      name: "David Rodriguez",
      role: "Business Traveler",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=120&h=120&fit=crop&crop=face",
      testimonial: "Excellent service for business and leisure! Even my work trips became enjoyable with their professional planning. Highly efficient and always reliable for all my travel needs."
    },
    {
      id: 8,
      name: "Lisa Thompson",
      role: "Group Leader",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&crop=face",
      testimonial: "Managed our group of 15 people flawlessly! Everyone had an amazing time and the logistics were handled perfectly. Great communication and support throughout our adventure."
    },
    {
      id: 9,
      name: "James Miller",
      role: "Cultural Explorer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
      testimonial: "Authentic cultural experiences! They took us beyond typical tourist spots and gave us real insights into local culture. Professional, friendly, and truly passionate about travel."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Show 3 sets of 3 testimonials
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Get current 3 testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-400 text-white px-6 py-3 rounded-full text-base font-medium mb-6 italic">
            Fans Love
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What our fans say about us
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