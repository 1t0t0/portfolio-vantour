// components/TourModal.tsx
'use client';
import Image from 'next/image';

interface TourModalProps {
  tour: any;
  isOpen: boolean;
  onClose: () => void;
}

const TourModal = ({ tour, isOpen, onClose }: TourModalProps) => {
  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Hero Image */}
          <div className="relative h-64 lg:h-80">
            <Image
              src={tour.image}
              alt={tour.destination}
              fill
              className="object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-t-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold font-prompt mb-2">
                {tour.destination}
              </h2>
              <p className="text-lg font-sarabun">{tour.country}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Description & Basic Info */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-prompt">เกี่ยวกับสถานที่</h3>
              <p className="text-gray-600 leading-relaxed font-sarabun">
                {tour.description}
              </p>
            </div>

            {/* Highlights Section */}
            {tour.highlights && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-prompt">จุดเด่นของการท่องเที่ยว</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-sarabun">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price & Duration */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2 font-prompt">ระยะเวลา</h4>
                <p className="text-orange-600 font-medium font-sarabun">{tour.duration}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2 font-prompt">ราคา</h4>
                <p className="text-green-600 font-medium font-sarabun">{tour.price}</p>
              </div>
            </div>

            {/* Includes Section */}
            {tour.includes && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-prompt">รวมในแพ็คเกจ</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {tour.includes.map((item: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700 text-sm font-sarabun">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-prompt">ติดต่อสอบถามเพิ่มเติม</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/8562077801819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 font-prompt">WhatsApp</h4>
                    <p className="text-sm text-gray-600 font-sarabun">แชตสดๆ ตอบเร็ว</p>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/share/1GGB4HGpKB/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 font-prompt">Facebook</h4>
                    <p className="text-sm text-gray-600 font-sarabun">ข้อเสนอพิเศษ</p>
                  </div>
                </a>

                {/* Line */}
                <a 
                  href="line://ti/p/Lambo_0365?text=สวัสดีครับ%20สนใจสอบถามเรื่องการเช่ารถครับ"
                  className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 5.85 2 10.5c0 1.49.53 2.87 1.44 4.03L2 20l5.64-1.22C8.84 19.55 10.37 20 12 20c5.52 0 10-3.85 10-8.5S17.52 2 12 2z"/>
                      <text x="12" y="13" textAnchor="middle" fontSize="6" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">LINE</text>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 font-prompt">Line</h4>
                    <p className="text-sm text-gray-600 font-sarabun">สะดวกง่าย</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Additional Images Gallery */}
            {tour.additionalImages && tour.additionalImages.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-prompt">ภาพบรรยากาศเพิ่มเติม</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {tour.additionalImages.map((image: string, index: number) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                      <Image
                        src={image}
                        alt={`${tour.destination} ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 font-sarabun mb-4">
                สนใจทัวร์นี้? ติดต่อเราได้เลยผ่านช่องทางด้านบน
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;