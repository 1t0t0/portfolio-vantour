// components/FeaturedToursSection.tsx
import Image from 'next/image';

const FeaturedToursSection = () => {
  const tours = [
    {
      id: 1,
      destination: "Big Ben",
      country: "LONDON",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
      className: "col-span-1 row-span-1"
    },
    {
      id: 2,
      destination: "Bali",
      country: "INDONESIA", 
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=800&fit=crop",
      className: "col-span-1 row-span-2"
    },
    {
      id: 3,
      destination: "Sydney",
      country: "Australia",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
      className: "col-span-2 row-span-1"
    },
    {
      id: 4,
      destination: "Dubai",
      country: "UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      className: "col-span-1 row-span-1"
    },
    {
      id: 5,
      destination: "Phetchabun",
      country: "THAILAND",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      className: "col-span-1 row-span-1"
    },
    {
      id: 6,
      destination: "Paris",
      country: "FRANCE",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop",
      className: "col-span-1 row-span-1"
    },
    {
      id: 7,
      destination: "Wuxi",
      country: "CHINA",
      image: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=800&h=600&fit=crop",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Explore
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Our featured tours
          </h2>
        </div>

        {/* Tours Grid - Layout matching the reference image */}
        <div className="grid grid-cols-3 gap-4 h-[600px]">
          {/* Column 1 - 2 cards stacked vertically */}
          <div className="grid grid-rows-2 gap-4">
            {/* Big Ben - London */}
            <div className="group cursor-pointer overflow-hidden rounded-xl relative">
              <div className="w-full h-full relative">
                <Image
                  src={tours[0].image}
                  alt={`${tours[0].destination}, ${tours[0].country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 italic">
                    {tours[0].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider">
                    {tours[0].country}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Dubai - UAE */}
            <div className="group cursor-pointer overflow-hidden rounded-xl relative">
              <div className="w-full h-full relative">
                <Image
                  src={tours[3].image}
                  alt={`${tours[3].destination}, ${tours[3].country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 italic">
                    {tours[3].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider">
                    {tours[3].country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Tall Bali card + small Thailand card below */}
          <div className="grid grid-rows-3 gap-4">
            {/* Bali - Indonesia (tall card) */}
            <div className="row-span-2 group cursor-pointer overflow-hidden rounded-xl relative">
              <div className="w-full h-full relative">
                <Image
                  src={tours[1].image}
                  alt={`${tours[1].destination}, ${tours[1].country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 italic">
                    {tours[1].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider">
                    {tours[1].country}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Phetchabun - Thailand */}
            <div className="group cursor-pointer overflow-hidden rounded-xl relative">
              <div className="w-full h-full relative">
                <Image
                  src={tours[4].image}
                  alt={`${tours[4].destination}, ${tours[4].country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 italic">
                    {tours[4].destination}
                  </h3>
                  <p className="text-xs lg:text-sm font-medium tracking-wider">
                    {tours[4].country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Sydney wide card on top + Paris and Wuxi below */}
          <div className="grid grid-rows-2 gap-4">
            {/* Sydney - Australia (wide card) */}
            <div className="group cursor-pointer overflow-hidden rounded-xl relative">
              <div className="w-full h-full relative">
                <Image
                  src={tours[2].image}
                  alt={`${tours[2].destination}, ${tours[2].country}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 italic">
                    {tours[2].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider">
                    {tours[2].country}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom row - Paris and Wuxi side by side */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Wuxi - China */}
              <div className="group cursor-pointer overflow-hidden rounded-xl relative">
                <div className="w-full h-full relative">
                  <Image
                    src={tours[6].image}
                    alt={`${tours[6].destination}, ${tours[6].country}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h3 className="text-lg lg:text-xl font-bold mb-1 italic">
                      {tours[6].destination}
                    </h3>
                    <p className="text-xs font-medium tracking-wider">
                      {tours[6].country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedToursSection;