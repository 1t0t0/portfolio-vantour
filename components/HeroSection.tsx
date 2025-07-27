import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Mobile and Desktop responsive badge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="flex items-center justify-center bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-full sm:w-auto">
                <span className="text-base sm:text-lg lg:text-2xl flex items-center font-prompt font-medium text-center">
                  เตรียมตัวออกเดินทางได้
                </span>
              </div>

              {/* Hide earth icon on very small screens, show on sm and above */}
              <div className="hidden sm:flex justify-center sm:justify-start">
                <Image src="/earth-icon.png" width={40} height={40} alt="" priority unoptimized className="sm:w-[50px] sm:h-[50px]" />
              </div>
            </div>
            
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-prompt">
                การเดินทางเปิดประตูสู่{' '}
                <span className="text-orange-400">ความทรงจำ</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg font-sarabun text-thai-body">
              บริษัทรถเช่าแรมโบ้ พาเที่ยวแบบถูกกฎหมาย
              บริการพาเที่ยวภายในประเทศและนอกประเทศ
              บริการทุกระดับประทับใจ เที่ยวแบบปลอดภัยราคาเป็นกันเอง
            </p>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {/* Box1 */}
              <div className="relative -top-3 sm:-top-6 h-60 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-yellow-500 group cursor-pointer">
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src="https://cdn.pixabay.com/photo/2016/01/09/18/27/journey-1130732_1280.jpg" 
                    alt="Travel destination - Mountain landscape"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Box2 */}
              <div className="relative h-60 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-yellow-500 group cursor-pointer">
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg" 
                    alt="Travel destination - Tropical beach"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Box3 */}
              <div className="relative -bottom-3 sm:-bottom-6 h-60 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-yellow-500 group cursor-pointer">
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src="https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg" 
                    alt="Travel destination - City exploration"
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;