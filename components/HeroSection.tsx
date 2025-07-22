import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="grid grid-cols-2">
            <div className="flex items-center justify-center bg-orange-100 text-orange-800 px-2 rounded-full text-sm font-medium">
              <span className="text-2xl flex items-center">Know before you go</span>
            </div>

            <Image src="/earth-icon.png" width={50} height={50} alt="" priority  />

            </div>
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Traveling opens the door to creating{' '}
                <span className="text-orange-400">memories</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam 
              ipsum nobis asperiores soluta voluptas quas voluptates. Molestae 
              temporibus dignissimos, animi praesentium molestias perferendis 
              porro expedita delectus. Soluta natus porro.
            </p>
          </div>

          {/* Right Content - Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">

                {/* Box1 */}
              <div className="relative -top-6 h-80 rounded-2xl overflow-hidden border-2 border-yellow-500">
                <div className="absolute z-10" />
                <div className="w-full h-full items-center justify-center">
                  
                </div>
              </div>

                {/* Box2 */}
              <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-yellow-500">
                <div className="absolute z-10" />
                <div className="w-full h-full items-center justify-center">
                  
                </div>
              </div>

                {/* Box3 */}
                <div className="relative -bottom-6 h-80 rounded-2xl overflow-hidden border-2 border-yellow-500">
                <div className="absolute z-10" />
                <div className="w-full h-full items-center justify-center">
                  
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