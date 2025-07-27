import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="grid grid-cols-2">
              <div className="flex items-center justify-center bg-orange-100 text-orange-800 px-2 rounded-full text-sm font-medium">
                <span className="text-2xl flex items-center">เตรียมตัวออกเดินทางได้</span>
              </div>

              <Image src="/earth-icon.png" width={50} height={50} alt="" priority unoptimized />
            </div>
            
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                การเดินทางเปิดประตูสู่{' '}
                <span className="text-orange-400">ความทรงจำ</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              บริษัทรถเช่าแรมโบ้  พาเที่ยวแบบถูกกฎหมาย
บริการพาเที่ยวภายในประเทศและนอกประเทศ
บริการทุกระดับประทับใจ เที่ยวแบบปลอดภัยราคาเป็นกันเอง
            </p>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {/* Box1 */}
              <div className="relative -top-6 h-80 rounded-2xl overflow-hidden border-2 border-yellow-500 group cursor-pointer">
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
              <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-yellow-500 group cursor-pointer">
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
              <div className="relative -bottom-6 h-80 rounded-2xl overflow-hidden border-2 border-yellow-500 group cursor-pointer">
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