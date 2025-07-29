// components/PackageDetailModal.tsx
'use client';
import { Banknote, BookText, Calendar, CheckCircle, Clock, MapPin } from 'lucide-react';
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
                 {selectedPackage.name}
              </h2>
              <p className="text-lg font-sarabun">{selectedPackage.duration}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Detailed Itinerary */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-prompt">รายการเที่ยวโดยละเอียด</h3>
              </div>
              
              {selectedPackage.detailItinerary.day1 && (
                <div className="space-y-6">
                  {/* Day 1 */}
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-5 border-l-4 border-orange-400 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <h4 className="font-bold text-orange-800 font-prompt text-lg">
                        {selectedPackage.detailItinerary.day1.title}
                      </h4>
                    </div>
                    <div className="grid gap-3">
                      {selectedPackage.detailItinerary.day1.activities.map((activity: string, index: number) => (
                        <div key={index} className="flex items-start bg-white/70 rounded-lg p-3 hover:bg-white/90 transition-colors">
                          <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-orange-600" />
                          </div>
                          <span className="text-sm font-sarabun text-gray-700 leading-relaxed">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Day 2 */}
                  {selectedPackage.detailItinerary.day2 && (
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 border-l-4 border-blue-400 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <h4 className="font-bold text-blue-800 font-prompt text-lg">
                          {selectedPackage.detailItinerary.day2.title}
                        </h4>
                      </div>
                      <div className="grid gap-3">
                        {selectedPackage.detailItinerary.day2.activities.map((activity: string, index: number) => (
                          <div key={index} className="flex items-start bg-white/70 rounded-lg p-3 hover:bg-white/90 transition-colors">
                            <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-blue-600" />
                            </div>
                            <span className="text-sm font-sarabun text-gray-700 leading-relaxed">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Day 3 */}
                  {selectedPackage.detailItinerary.day3 && (
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 border-l-4 border-green-400 shadow-sm">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <h4 className="font-bold text-green-800 font-prompt text-lg">
                          {selectedPackage.detailItinerary.day3.title}
                        </h4>
                      </div>
                      <div className="grid gap-3">
                        {selectedPackage.detailItinerary.day3.activities.map((activity: string, index: number) => (
                          <div key={index} className="flex items-start bg-white/70 rounded-lg p-3 hover:bg-white/90 transition-colors">
                            <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-sm font-sarabun text-gray-700 leading-relaxed">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* For packages without day-by-day structure */}
              {selectedPackage.detailItinerary.overview && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5 border-l-4 border-purple-400 shadow-sm">
                    <div className="flex items-center mb-3">
                      <MapPin className="w-6 h-6 text-purple-600 mr-3" />
                      <h4 className="font-bold text-purple-800 font-prompt text-lg">
                        {selectedPackage.detailItinerary.overview}
                      </h4>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4 space-y-2">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-purple-600 mr-2" />
                        <p className="text-purple-700 font-sarabun font-medium">
                          {selectedPackage.detailItinerary.duration}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Banknote className="w-4 h-4 text-purple-600 mr-2" />
                        <p className="text-purple-600 font-sarabun text-sm">
                          {selectedPackage.detailItinerary.priceInfo}
                        </p>
                      </div>
                    </div>
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