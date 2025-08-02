// data/featuredToursData.ts
export interface Tour {
  id: number;
  destination: string;
  country: string;
  image: string;
  duration: string;
  description: string;
  highlights: string[];
  additionalImages: string[];
  price: string;
  includes: string[];
}

export const toursData: Tour[] = [
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
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754116208/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%9A%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_250802_2_hia5ya.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_4_nqkzyy.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_5_ldfnsr.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753607187/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%BD%E0%BA%A7_%E0%BA%99%E0%BA%B0%E0%BA%84%E0%BA%AD%E0%BA%99%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_Vientiane_250727_3_gq1wgt.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754116208/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%9A%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_250802_4_ba05ob.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754116208/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%9A%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%A7%E0%BA%BD%E0%BA%87%E0%BA%88%E0%BA%B1%E0%BA%99_250802_3_btctqw.jpg"


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
      destination: "ปากเซ-จำปาศักดิ์",
      country: "ลาวใต้",
      image: "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754114899/LINE_ALBUM_%E0%BA%A5%E0%BA%B2%E0%BA%A7%E0%BB%83%E0%BA%95%E0%BB%89_250802_6_zouqao.jpg",
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
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754114900/LINE_ALBUM_%E0%BA%A5%E0%BA%B2%E0%BA%A7%E0%BB%83%E0%BA%95%E0%BB%89_250802_10_njyqgy.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754114900/LINE_ALBUM_%E0%BA%A5%E0%BA%B2%E0%BA%A7%E0%BB%83%E0%BA%95%E0%BB%89_250802_8_vh4ou6.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754114900/LINE_ALBUM_%E0%BA%A5%E0%BA%B2%E0%BA%A7%E0%BB%83%E0%BA%95%E0%BB%89_250802_11_fvuyl6.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754114899/LINE_ALBUM_%E0%BA%A5%E0%BA%B2%E0%BA%A7%E0%BB%83%E0%BA%95%E0%BB%89_250802_2_q4l5kp.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754114899/LINE_ALBUM_%E0%BA%A5%E0%BA%B2%E0%BA%A7%E0%BB%83%E0%BA%95%E0%BB%89_250802_1_w0tqcc.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754114900/LINE_ALBUM_%E0%BA%A5%E0%BA%B2%E0%BA%A7%E0%BB%83%E0%BA%95%E0%BB%89_250802_7_bpgevb.jpg"
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
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1753609430/LINE_ALBUM_%E0%BB%81%E0%BA%AB%E0%BA%BC%E0%BB%88%E0%BA%87%E0%BA%97%E0%BB%88%E0%BA%AD%E0%BA%87%E0%BA%97%E0%BA%BB%E0%BB%88%E0%BA%A7_%E0%BA%AB%E0%BA%BC%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_Luangprabang_250727_1_zlkz9x.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754117456/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%94%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_250802_6_cpn3ca.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754117457/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%94%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_250802_8_ibw1bw.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754117456/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%94%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_250802_2_sgf13c.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754117456/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%94%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_250802_5_kxo4nq.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754117457/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%94%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_250802_7_vnpv7s.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754117456/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%94%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_250802_3_xek1wu.jpg",
        "https://res.cloudinary.com/dmt2zysfc/image/upload/v1754117456/LINE_ALBUM_%E0%BA%AD%E0%BA%B1%E0%BA%94%E0%BB%80%E0%BA%94%E0%BA%94_%E0%BA%AB%E0%BA%A5%E0%BA%A7%E0%BA%87%E0%BA%9E%E0%BA%B0%E0%BA%9A%E0%BA%B2%E0%BA%87_250802_1_taclml.jpg"
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