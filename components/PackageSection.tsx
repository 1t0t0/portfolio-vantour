// components/PackageSection.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FileText, MessageCircle, CheckCircle, X } from 'lucide-react';
import PackageDetailModal from './PackageDetailModal';
import { packagesData, PackageData } from '../data/packagesData';

const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPackageForContact, setSelectedPackageForContact] = useState<string>('');

  const openContactModal = (packageName: string) => {
    setSelectedPackageForContact(packageName);
    setIsContactModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedPackageForContact('');
    document.body.style.overflow = 'unset';
  };

  const handleContactMethod = (method: 'whatsapp' | 'line' | 'facebook') => {
    const message = `สวัสดีครับ สนใจสอบถามแพคเกจ ${selectedPackageForContact} ครับ`;
    
    let url = '';
    switch (method) {
      case 'whatsapp':
        url = `https://wa.me/8562077801819?text=${encodeURIComponent(message)}`;
        break;
      case 'line':
        url = `line://ti/p/Lambo_0365?text=${encodeURIComponent(message)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/share/1GGB4HGpKB/?mibextid=wwXIfr`;
        break;
    }
    
    window.open(url, '_blank');
    closeContactModal();
  };

  const openDetailModal = (pkg: PackageData) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 font-prompt">
              แพคเกจทัวร์
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-prompt">
              แพคเกจทัวร์ลาวพิเศษ
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-sarabun">
              เลือกแพคเกจที่เหมาะกับคุณ พร้อมรายการเที่ยวที่ครบครันและบริการมืออาชีพ
            </p>
          </div>

          {/* Packages Grid - 1 row 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-8">
            {packagesData.map((pkg) => (
              <div key={pkg.id} className="min-w-0 w-full">
                <PackageCard
                  package={pkg}
                  onDetailClick={() => openDetailModal(pkg)}
                  onContactClick={() => openContactModal(pkg.name)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      <PackageDetailModal
        package={selectedPackage}
        isOpen={isModalOpen}
        onClose={closeModal}
        onContact={openContactModal}
      />

      {/* Contact Method Selection Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeContactModal}
          ></div>

          {/* Modal Content */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full">
              {/* Close Button */}
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 font-prompt mb-2">
                  เลือกช่องทางติดต่อ
                </h3>
                <p className="text-sm text-gray-600 font-sarabun">
                  สอบถามแพคเกจ: <span className="font-medium text-orange-600">{selectedPackageForContact}</span>
                </p>
              </div>

              {/* Contact Options */}
              <div className="p-6 space-y-4">
                {/* WhatsApp */}
                <button
                  onClick={() => handleContactMethod('whatsapp')}
                  className="w-full flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl border border-green-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900 font-prompt">WhatsApp</h4>
                    <p className="text-sm text-gray-600 font-sarabun">แชตสดๆ ตอบเร็ว</p>
                  </div>
                </button>

                {/* Line */}
                <button
                  onClick={() => handleContactMethod('line')}
                  className="w-full flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl border border-green-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 5.85 2 10.5c0 1.49.53 2.87 1.44 4.03L2 20l5.64-1.22C8.84 19.55 10.37 20 12 20c5.52 0 10-3.85 10-8.5S17.52 2 12 2z"/>
                      <text x="12" y="13" textAnchor="middle" fontSize="6" fill="green" fontFamily="Arial, sans-serif" fontWeight="bold">LINE</text>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900 font-prompt">Line</h4>
                    <p className="text-sm text-gray-600 font-sarabun">สะดวกง่าย ตอบได้ทันที</p>
                  </div>
                </button>

                {/* Facebook */}
                <button
                  onClick={() => handleContactMethod('facebook')}
                  className="w-full flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <h4 className="font-medium text-gray-900 font-prompt">Facebook</h4>
                    <p className="text-sm text-gray-600 font-sarabun">ข้อเสนอพิเศษ</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Package Card Component
interface PackageCardProps {
  package: PackageData;
  onDetailClick: () => void;
  onContactClick: () => void;
}

const PackageCard = ({ package: pkg, onDetailClick, onContactClick }: PackageCardProps) => (
  <div 
    className={`relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group w-full ${
      pkg.popular ? 'ring-2 ring-orange-400 transform hover:scale-105' : 'hover:scale-105'
    }`}
  >
    {/* Popular Badge */}
    {pkg.popular && (
      <div className="absolute top-3 right-3 z-10">
        <span className="bg-orange-400 text-white px-2 py-1 rounded-full text-xs font-medium font-prompt">
          ยอดนิยม
        </span>
      </div>
    )}

    {/* Image */}
    <div className="relative h-32 overflow-hidden">
      <Image
        src={pkg.image}
        alt={pkg.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
    </div>

    {/* Content */}
    <div className="p-4">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900 mb-1 font-prompt leading-tight">
          {pkg.name}
        </h3>
        <p className="text-sm text-gray-600 font-sarabun">
          {pkg.description}
        </p>
      </div>

      {/* Duration */}
      <div className="mb-3">
        <span className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium font-prompt">
          {pkg.duration}
        </span>
      </div>

      {/* Highlights */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm font-prompt">ไฮไลท์:</h4>
        <ul className="space-y-1">
          {pkg.highlights.map((highlight, index) => (
            <li key={index} className="text-xs text-gray-600 font-sarabun">
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      {/* Includes */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2 text-sm font-prompt">รวมในแพคเกจ:</h4>
        <ul className="space-y-1">
          {pkg.includes.map((item, itemIndex) => (
            <li key={itemIndex} className="flex items-center text-xs text-gray-600 font-sarabun">
              <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div className="mb-3">
        <div className="text-lg font-bold text-gray-900 font-prompt">
          {pkg.price === "ติดต่อสอบถาม" ? (
            <span className="text-orange-500">ติดต่อสอบถาม</span>
          ) : (
            <>
              {pkg.price} <span className="text-sm font-normal text-gray-600">บาท/คน</span>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button 
          onClick={onDetailClick}
          className="w-full py-2 px-3 rounded-lg font-medium transition-all duration-300 text-sm font-prompt bg-blue-100 hover:bg-blue-200 text-blue-800 flex items-center justify-center gap-2"
        >
          <FileText className="w-4 h-4" />
          ดูรายการเที่ยวโดยละเอียด
        </button>
        <button 
          onClick={onContactClick}
          className={`w-full py-2 px-3 rounded-lg font-medium transition-all duration-300 text-sm font-prompt flex items-center justify-center gap-2 ${
            pkg.popular 
              ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-md hover:shadow-lg' 
              : 'bg-gray-100 hover:bg-orange-400 text-gray-800 hover:text-white'
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          สอบถามแพคเกจ
        </button>
      </div>
    </div>
  </div>
);

export default PackagesSection;