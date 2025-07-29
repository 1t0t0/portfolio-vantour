// components/PackageDetailModal.tsx
'use client';
import Image from 'next/image';

interface PackageDetailModalProps {
  package: any;
  isOpen: boolean;
  onClose: () => void;
  onContact: (packageName: string) => void;
}

const PackageDetailModal = ({ package: selectedPackage, isOpen, onClose, onContact }: PackageDetailModalProps) => {
  if (!isOpen || !selectedPackage) return null;

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
              src={selectedPackage.image}
              alt={selectedPackage.name}
              fill
              className="object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-black/40 rounded-t-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold font-prompt mb-2">
                📋 {selectedPackage.name}
              </h2>
              <p className="text-lg font-sarabun">{selectedPackage.duration}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Detailed Itinerary */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-prompt">📅 รายการเที่ยวโดยละเอียด</h3>
              
              {selectedPackage.detailItinerary.day1 && (
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-800 mb-3 font-prompt text-lg">
                      {selectedPackage.detailItinerary.day1.title}
                    </h4>
                    <ul className="space-y-2">
                      {selectedPackage.detailItinerary.day1.activities.map((activity: string, index: number) => (
                        <li key={index} className="flex items-start text-sm font-sarabun">
                          <span className="text-orange-500 mr-2 mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Day 2 */}
                  {selectedPackage.detailItinerary.day2 && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-bold text-blue-800 mb-3 font-prompt text-lg">
                        {selectedPackage.detailItinerary.day2.title}
                      </h4>
                      <ul className="space-y-2">
                        {selectedPackage.detailItinerary.day2.activities.map((activity: string, index: number) => (
                          <li key={index} className="flex items-start text-sm font-sarabun">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Day 3 */}
                  {selectedPackage.detailItinerary.day3 && (
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-bold text-green-800 mb-3 font-prompt text-lg">
                        {selectedPackage.detailItinerary.day3.title}
                      </h4>
                      <ul className="space-y-2">
                        {selectedPackage.detailItinerary.day3.activities.map((activity: string, index: number) => (
                          <li key={index} className="flex items-start text-sm font-sarabun">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* For packages without day-by-day structure */}
              {selectedPackage.detailItinerary.overview && (
                <div className="space-y-4">
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-bold text-purple-800 mb-2 font-prompt text-lg">
                      📍 {selectedPackage.detailItinerary.overview}
                    </h4>
                    <p className="text-purple-700 font-sarabun">
                      {selectedPackage.detailItinerary.duration}
                    </p>
                    <p className="text-purple-600 font-sarabun text-sm mt-2">
                      {selectedPackage.detailItinerary.priceInfo}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Includes Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-prompt">✅ รวมในแพคเกจ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedPackage.detailItinerary.includes.map((item: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm text-gray-700 font-sarabun">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section (for South Laos package) */}
            {selectedPackage.detailItinerary.pricing && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-prompt">💰 ราคาตามจำนวนผู้เดินทาง</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPackage.detailItinerary.pricing.map((price: string, index: number) => (
                    <div key={index} className="bg-green-50 p-3 rounded-lg">
                      <span className="text-green-800 font-medium font-sarabun">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price Info for Express package */}
            {selectedPackage.detailItinerary.price && (
              <div className="mb-8">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-800 mb-2 font-prompt">💰 {selectedPackage.detailItinerary.price}</h3>
                  {selectedPackage.detailItinerary.note && (
                    <p className="text-orange-600 font-sarabun">{selectedPackage.detailItinerary.note}</p>
                  )}
                </div>
              </div>
            )}

            {/* Not Included */}
            {selectedPackage.detailItinerary.notIncluded && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-prompt">❌ ไม่รวมในแพคเกจ</h3>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-red-700 font-sarabun">{selectedPackage.detailItinerary.notIncluded}</p>
                </div>
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailModal;