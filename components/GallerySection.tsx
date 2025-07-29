// components/GallerySection.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GallerySection = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519009/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_6_r0gchu.jpg",
      alt: "Mountain landscape"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519009/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_4_b84xek.jpg",
      alt: "Pamukkale thermal pools"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519009/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_2_my7dd7.jpg",
      alt: "Mountain view with person"
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519009/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_5_p6jr4r.jpg",
      alt: "Tropical beach with palm"
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519009/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_1_lrcokr.jpg",
      alt: "Beautiful travel destination with scenic views"
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519010/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_10_ys11no.jpg",
      alt: "Tropical island resort"
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519010/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_9_wpzmff.jpg",
      alt: "Krakow church with camera"
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519010/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_11_ndtoow.jpg",
      alt: "Limestone karsts and boat"
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519010/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_7_pddgtx.jpg",
      alt: "Lagoon landscape"
    },
     {
      id: 10,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519010/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_8_lg0aan.jpg",
      alt: "Tourist destination with natural scenery"
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519010/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_3_jwummi.jpg",
      alt: "Travel adventure photography"
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519011/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_16_ldrfuw.jpg",
      alt: "Memorable tour experience"
    },
    {
      id: 13,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519011/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_14_iyrueb.jpg",
      alt: "Cultural tourism destination"
    },
    {
      id: 14,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519011/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_12_orjo85.jpg",
      alt: "Scenic travel photography"
    }
    ,
    {
      id: 15,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519011/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_13_aow4xb.jpg",
      alt: "Scenic travel photography"
    },
    {
      id: 16,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519011/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_15_gautby.jpg",
      alt: "Scenic travel photography"
    },
    {
      id: 17,
      src: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753519012/LINE_ALBUM_%E0%BA%AE%E0%BA%B9%E0%BA%9A%E0%BA%88%E0%BA%B2%E0%BA%81_%E0%BA%A5%E0%BA%B9%E0%BA%81%E0%BA%84%E0%BB%89%E0%BA%B2%E0%BA%97%E0%BA%B5%E0%BB%88%E0%BB%80%E0%BA%84%E0%BA%B5%E0%BA%8D%E0%BA%A1%E0%BA%B2%E0%BB%83%E0%BA%8A%E0%BB%89%E0%BA%9A%E0%BB%8D%E0%BA%A5%E0%BA%B4%E0%BA%81%E0%BA%B2%E0%BA%99_Gallery_250726_17_jh71ni.jpg",
      alt: "Scenic travel photography"
    }
  ];

// Split images into two different sets for variety
  const firstRowImages = galleryImages.slice(0, 9); // First 9 images
  const secondRowImages = galleryImages.slice(8, 17); // Images 9-17 for second row
  
  // Duplicate each set for seamless infinite scroll
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
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