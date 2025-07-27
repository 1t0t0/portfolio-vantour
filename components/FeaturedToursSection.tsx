// components/FeaturedToursSection.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';


const FeaturedToursSection = () => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tours = [
    {
      id: 1,
      destination: "นครหลวงเวียงจันทน์",
      country: "ลาว",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607188/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_9_xwi5oy.jpg",
      duration: "2-3 วัน",
      description: "เมืองหลวงของสาธารณรัฐประชาธิปไตยประชาชนลาว ที่เต็มไปด้วยวัฒนธรรมและประวัติศาสตร์อันยาวนาน",
      highlights: [
        "วัดพระแก้ว (Ho Phra Keo)",
        "วัดสีสะเกษ (Wat Si Saket)", 
        "ประตูชัย (Patuxai Monument)",
        "ตลาดเช้าเวียงจันทน์",
        "ริมโขงเวียงจันทน์"
      ],
      additionalImages: [
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607188/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_6_lnc8si.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607188/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_8_baoy0s.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607188/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_7_pl85oc.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_2_wuyp5y.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_4_nqkzyy.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_5_ldfnsr.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_3_gq1wgt.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_1_ruplwc.jpg",


      ],
      price: "2,500-3,500 บาท/คน",
      includes: ["รถรับ-ส่ง", "ไกด์ท้องถิ่น", "ค่าเข้าชมสถานที่", "อาหารกลางวัน"]
    },
    {
      id: 2,
      destination: "เมืองเฟือง",
      country: "ลาว", 
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608035/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_9_rjo1am.jpg",
      duration: "1-2 วัน",
      description: "เมืองเล็ก ๆ ที่เต็มไปด้วยธรรมชาติที่บริสุทธิ์ อากาศเย็นสบาย และวิวทิวทัศน์ที่งดงาม",
      highlights: [
        "วิวภูเขาและป่าไผ่",
        "น้ำตกธรรมชาติ",
        "หมู่บ้านชาวเขา",
        "ตลาดท้องถิ่น",
        "ชมพระอาทิตย์ขึ้น"
      ],
      additionalImages: [
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608037/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_5_zmhhrw.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608035/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_13_vgvop0.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608035/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_12_crzi63.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608035/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_11_nnikpl.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608035/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_10_k2anjg.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608035/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_6_s4sbud.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608034/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_7_pjt035.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753608033/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%80%E0%BA%9F%E0%BA%B7%E0%BA%AD%E0%BA%87_Meung_feung_250727_2_xodbju.jpg",
       

      ],
      price: "1,800-2,500 บาท/คน",
      includes: ["รถรับ-ส่ง", "ที่พัก 1 คืน", "อาหาร 3 มื้อ", "กิจกรรมธรรมชาติ"]
    },
    {
      id: 3,
      destination: "เมืองวังเวียง",
      country: "ลาว",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609085/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%A7%E0%BA%B1%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87_vang_Vieng_250727_1_p0lodt.jpg",
      duration: "3-4 วัน",
      description: "สวรรค์ของนักผจญภัย ด้วยกิจกรรมท่องเที่ยวที่หลากหลาย ทั้งล่องแพ โคล่งแคง และถ้ำต่าง ๆ",
      highlights: [
        "ล่องแพแม่น้ำโซง",
        "โคล่งแคงในถ้ำ",
        "จุดชมวิว Blue Lagoon",
        "ถ้ำช้าง (Tham Chang)",
        "ปีนเขาหินปูน"
      ],
      additionalImages: [
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609087/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%A7%E0%BA%B1%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87_vang_Vieng_250727_4_rpfue3.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609086/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%A7%E0%BA%B1%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87_vang_Vieng_250727_6_yc6mtl.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609085/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%A7%E0%BA%B1%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87_vang_Vieng_250727_3_wxrd0a.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609085/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%A7%E0%BA%B1%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87_vang_Vieng_250727_2_ifzqwt.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609085/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BA%A7%E0%BA%B1%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87_vang_Vieng_250727_5_u6h6mq.jpg"
      ],
      price: "3,500-4,500 บาท/คน",
      includes: ["รถรับ-ส่ง", "ที่พัก 2-3 คืน", "อาหารทุกมื้อ", "กิจกรรมผจญภัย", "อุปกรณ์ความปลอดภัย"]
    },
    {
      id: 4,
      destination: "เมืองไชสมบูรณ์",
      country: "ลาว",
      image: "https://th.readme.me/f/46497/cover.jpg",
      duration: "2-3 วัน",
      description: "เมืองเก่าแก่ที่เต็มไปด้วยเรื่องราวทางประวัติศาสตร์ และสถาปัตยกรรมแบบดั้งเดิม",
      highlights: [
        "วัดเก่าแก่",
        "ตลาดโบราณ",
        "สถาปัตยกรรมอาณานิคม",
        "พิพิธภัณฑ์ท้องถิ่น",
        "หมู่บ้านหัตถกรรม"
      ],
      additionalImages: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&h=400&fit=crop"
      ],
      price: "2,200-3,200 บาท/คน",
      includes: ["รถรับ-ส่ง", "ไกด์ประวัติศาสตร์", "ค่าเข้าชมพิพิธภัณฑ์", "อาหารท้องถิ่น"]
    },
    {
      id: 5,
      destination: "เมืองหลวงพระบาง",
      country: "ลาว",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609437/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_10_wqpcts.jpg",
      duration: "3-5 วัน",
      description: "เมืองมรดกโลกยูเนสโก เต็มไปด้วยวัดวาอาราม สถาปัตยกรรมโบราณ และวัฒนธรรมพุทธที่เข้มข้น",
      highlights: [
        "วัดซียางทอง",
        "พระราชวังหลวงพระบาง",
        "ตักบาตรข้าวต้มเช้า",
        "ตลาดกลางคืน",
        "น้ำตกกวางสีลำดับ"
      ],
      additionalImages: [
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609435/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_9_r5cnpj.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609433/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_7_h4mlmp.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609432/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_6_bzemxh.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609431/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_5_cspabz.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609431/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_4_c6lvt3.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609431/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_3_lggmyk.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609430/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_2_bpubqy.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609430/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_1_zlkz9x.jpg"
      ],
      price: "4,000-6,000 บาท/คน",
      includes: ["รถรับ-ส่ง", "ที่พัก 3-4 คืน", "อาหารทุกมื้อ", "ไกด์ท้องถิ่น", "ค่าเข้าชมวัดและพิพิธภัณฑ์"]
    },
    {
      id: 6,
      destination: "เมืองหนองเขียว",
      country: "ลาว (เมืองงอย)",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609609/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_4_znbw5e.jpg",
      duration: "2-3 วัน",
      description: "อัญมณีซ่อนเร้นท่ามกลางหุบเขาหินปูน แม่น้ำที่ใสใส และธรรมชาติที่บริสุทธิ์",
      highlights: [
        "จุดชมวิววิวพอยต์",
        "ล่องเรือแม่น้ำอู",
        "หมู่บ้านชาวเขา",
        "ถ้ำผาต๊อก",
        "ชมพระอาทิตย์ตก"
      ],
      additionalImages: [
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609609/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_6_orj7yn.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609609/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_5_slnxzl.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609608/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_8_dafq3f.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609607/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_3_bh7g4g.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609607/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_2_wklyrm.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609607/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_1_wrln3s.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609607/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BB%80%E0%BA%A1%E0%BA%B7%E0%BA%AD%E0%BA%87%E0%BB%9D%E0%BA%AD%E0%BA%87%E0%BA%82%E0%BA%BD%E0%BA%A7_Nong_khiaw_250727_7_mf4tsp.jpg"
      ],
      price: "2,800-3,800 บาท/คน",
      includes: ["รถรับ-ส่ง", "ที่พัก 2 คืน", "อาหารทุกมื้อ", "ล่องเรือ", "ไกด์ท้องถิ่น"]
    }
  ];

  const openModal = (tour: any) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <>
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
              <div 
                className="group cursor-pointer overflow-hidden rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => openModal(tours[0])}
              >
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
              <div 
                className="group cursor-pointer overflow-hidden rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => openModal(tours[3])}
              >
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
              <div 
                className="row-span-2 group cursor-pointer overflow-hidden rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => openModal(tours[1])}
              >
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
              <div 
                className="group cursor-pointer overflow-hidden rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => openModal(tours[4])}
              >
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
              <div 
                className="group cursor-pointer overflow-hidden rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => openModal(tours[2])}
              >
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
              
              {/* หนองเขียว */}
              <div 
                className="group cursor-pointer overflow-hidden rounded-xl relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
                onClick={() => openModal(tours[5])}
              >
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
      </section>

      {/* Modal */}
      {isModalOpen && selectedTour && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Hero Image */}
              <div className="relative h-64 lg:h-80">
                <Image
                  src={selectedTour.image}
                  alt={selectedTour.destination}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-black/40 rounded-t-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl lg:text-4xl font-bold font-prompt mb-2">
                    {selectedTour.destination}
                  </h2>
                  <p className="text-lg font-sarabun">{selectedTour.country}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {/* Description & Basic Info */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-prompt">เกี่ยวกับสถานที่</h3>
                  <p className="text-gray-600 leading-relaxed font-sarabun">
                    {selectedTour.description}
                  </p>
                </div>

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
                          <text x="12" y="13" textAnchor="middle" fontSize="6" fill="green" fontFamily="Arial, sans-serif" fontWeight="bold">LINE</text>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 font-prompt">Line</h4>
                        <p className="text-sm text-gray-600 font-sarabun">สะดวกง่าย</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-prompt">ภาพบรรยากาศเพิ่มเติม</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedTour.additionalImages.map((image: string, index: number) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer">
                        <Image
                          src={image}
                          alt={`${selectedTour.destination} ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>

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
      )}
    </>
  );
};

export default FeaturedToursSection;