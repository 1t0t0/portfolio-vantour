// components/GallerySection.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GallerySection = () => {
  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      alt: "Mountain landscape"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      alt: "Pamukkale thermal pools"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=300&fit=crop",
      alt: "Mountain view with person"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&h=300&fit=crop",
      alt: "Tropical beach with palm"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Mountain hiker"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
      alt: "Tropical island resort"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop",
      alt: "Krakow church with camera"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      alt: "Limestone karsts and boat"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?w=400&h=300&fit=crop",
      alt: "Lagoon landscape"
    }
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...galleryImages, ...galleryImages];

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

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * galleryImages.length],
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
              width: `${duplicatedImages.length * 400}px`,
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
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

        {/* Second Row - Reverse Direction */}
        <div className="relative overflow-hidden mt-8">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-100 * galleryImages.length, 0],
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
              width: `${duplicatedImages.length * 400}px`,
            }}
          >
            {duplicatedImages.map((image, index) => (
              <motion.div
                key={`reverse-${image.id}-${index}`}
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