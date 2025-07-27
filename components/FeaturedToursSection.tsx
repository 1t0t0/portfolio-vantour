// components/FeaturedToursSection.tsx
import Image from 'next/image';

const FeaturedToursSection = () => {
  const tours = [
    {
      id: 1,
      destination: "นครหลวงเวียงจันทน์",
      country: "ลาว",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607188/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_9_xwi5oy.jpg",
      className: "col-span-1 row-span-1"
    },
    {
      id: 2,
      destination: "เมืองเฟือง",
      country: "ลาว", 
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608035/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_9_rjo1am.jpg",
      className: "col-span-1 row-span-2"
    },
    {
      id: 3,
      destination: "เมืองวังเวียง",
      country: "ลาว",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609085/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%A7%E0%BA%B1%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87_vang_Vieng_250727_1_p0lodt.jpg",
      className: "col-span-2 row-span-1"
    },
    {
      id: 4,
      destination: "เมืองไชสมบูรณ์",
      country: "ลาว",
      image: "",
      className: "col-span-1 row-span-1"
    },
    {
      id: 5,
      destination: "เมืองหลวงพระบาง",
      country: "ลาว",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609437/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_10_wqpcts.jpg"
    },
    {
      id: 6,
      destination: "เมืองหนองเขียว",
      country: "ลาว (เมืองงอย)",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609609/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_4_znbw5e.jpg",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 font-prompt">
            สำรวจ
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-prompt">
            ทัวร์เด่นของเรา
          </h2>
        </div>

        {/* Tours Grid - Layout matching the reference image */}
        <div className="grid grid-cols-3 gap-4 h-[600px]">
          {/* Column 1 - 2 cards stacked vertically */}
          <div className="grid grid-rows-2 gap-4">
            {/* เวียงจันทน์ */}
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
                  <h3 className="text-lg lg:text-xl font-bold mb-2 italic font-prompt">
                    {tours[0].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider font-sarabun">
                    {tours[0].country}
                  </p>
                </div>
              </div>
            </div>
            
            {/* ไชสมบูรณ์ */}
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
                  <h3 className="text-lg lg:text-xl font-bold mb-2 italic font-prompt">
                    {tours[3].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider font-sarabun">
                    {tours[3].country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Tall เฟือง card + small หลวงพระบาง card below */}
          <div className="grid grid-rows-3 gap-4">
            {/* เฟือง (tall card) */}
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
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 italic font-prompt">
                    {tours[1].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider font-sarabun">
                    {tours[1].country}
                  </p>
                </div>
              </div>
            </div>
            
            {/* หลวงพระบาง */}
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
                  <h3 className="text-base lg:text-lg font-bold mb-2 italic font-prompt">
                    {tours[4].destination}
                  </h3>
                  <p className="text-xs lg:text-sm font-medium tracking-wider font-sarabun">
                    {tours[4].country}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - วังเวียง wide card on top + หนองเขียว below */}
          <div className="grid grid-rows-2 gap-4">
            {/* วังเวียง (wide card) */}
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
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 italic font-prompt">
                    {tours[2].destination}
                  </h3>
                  <p className="text-sm lg:text-base font-medium tracking-wider font-sarabun">
                    {tours[2].country}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom row - หนองเขียว (เมืองงอย) */}
            <div className="grid grid-cols-1 gap-4">
              {/* หนองเขียว */}
              <div className="group cursor-pointer overflow-hidden rounded-xl relative">
                <div className="w-full h-full relative">
                  <Image
                    src={tours[5].image}
                    alt={`${tours[5].destination}, ${tours[5].country}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                    <h3 className="text-sm lg:text-base font-bold mb-1 italic font-prompt">
                      {tours[5].destination}
                    </h3>
                    <p className="text-xs font-medium tracking-wider font-sarabun">
                      {tours[5].country}
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