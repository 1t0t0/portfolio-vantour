// components/GallerySection.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { galleryImages } from '@/data/galleryData';

const GallerySection = () => {
  // Split images into two different sets for variety
  const firstRowImages = galleryImages.slice(0, 15); 
  const secondRowImages = galleryImages.slice(16, 31); 
  
  const duplicatedFirstRow = [...firstRowImages, ...firstRowImages];
  const duplicatedSecondRow = [...secondRowImages, ...secondRowImages];

 return (
    <section className="py-24 lg:py-25 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Gallery
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-prompt">
            Visit our customers tour gallery
          </h2>
        </div>

        {/* First Row - Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * firstRowImages.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedFirstRow.length * 400}px`,
            }}
          >
            {duplicatedFirstRow.map((image, index) => (
              <motion.div
                key={`first-${image.id}-${index}`}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Reverse Direction with Different Images */}
        <div className="relative overflow-hidden mt-8">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-100 * secondRowImages.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
            style={{
              width: `${duplicatedSecondRow.length * 400}px`,
            }}
          >
            {duplicatedSecondRow.map((image, index) => (
              <motion.div
                key={`second-${image.id}-${index}`}
                className="flex-shrink-0 w-80 h-60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;