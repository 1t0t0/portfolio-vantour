// components/PackagesSection.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import PackageDetailModal from './PackageDetailModal';
import { packagesData, PackageData } from '../data/packagesData';

const PackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = (packageName: string) => {
    const message = `สวัสดีครับ สนใจสอบถามแพคเกจ ${packageName} ครับ`;
    const whatsappUrl = `https://wa.me/8562077801819?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

          {/* Packages Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packagesData.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                onDetailClick={() => openDetailModal(pkg)}
                onContactClick={() => openContactModal(pkg.name)}
              />
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
    className={`relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group ${
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
              <svg className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
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
          className="w-full py-2 px-3 rounded-lg font-medium transition-all duration-300 text-sm font-prompt bg-blue-100 hover:bg-blue-200 text-blue-800"
        >
          📋 ดูรายการเที่ยวโดยละเอียด
        </button>
        <button 
          onClick={onContactClick}
          className={`w-full py-2 px-3 rounded-lg font-medium transition-all duration-300 text-sm font-prompt ${
            pkg.popular 
              ? 'bg-orange-400 hover:bg-orange-500 text-white shadow-md hover:shadow-lg' 
              : 'bg-gray-100 hover:bg-orange-400 text-gray-800 hover:text-white'
          }`}
        >
          💬 สอบถามแพคเกจ
        </button>
      </div>
    </div>
  </div>
);



export default PackagesSection;