// components/ExperienceSection.tsx

const ExperienceSection = () => {
  const stats = [
    {
      number: "12k+",
      label: "Successful trip"
    },
    {
      number: "2k+", 
      label: "Regular clients"
    },
    {
      number: "15",
      label: "Year experience"
    }
  ];

  return (
    <section className="py-24 lg:py-[20rem] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                Experience
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                With our all experience we will serve you
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipiscing elit. 
                Quas aliquam, hic tempora inventore suscipit unde.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-400 rounded-lg p-4 mb-3">
                    <span className="text-2xl lg:text-3xl font-bold text-white">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative">
              {/* Main circular background */}
              <div className="w-96 h-96 bg-orange-400 rounded-full mx-auto relative overflow-hidden">
                {/* Main traveler image */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Happy traveler giving thumbs up"
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-orange-400 font-bold">✈️</span>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=40&h=40&fit=crop"
                      alt="Destination"
                      className="w-10 h-10 rounded object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold text-gray-800">Mountain Hiking</p>
                      <p className="text-xs text-gray-500">See details • Join Now</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 bg-white rounded-lg p-2 shadow-lg">
                  <p className="text-xs font-semibold text-gray-800">Los Angeles</p>
                  <div className="flex space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xs">⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative dots */}
              <div className="absolute -top-8 left-1/4 w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="absolute -bottom-4 right-1/4 w-3 h-3 bg-orange-300 rounded-full"></div>
              <div className="absolute top-1/4 -right-8 w-2 h-2 bg-orange-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;