// data/testimonialsData.ts
export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

export const testimonialsData: TestimonialData[] = [
  {
    id: 1,
    name: "คุณสมชาย",
    role: "นักท่องเที่ยว",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%23FF9500'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eส%3C/text%3E%3C/svg%3E",
    testimonial: "ไปลาวกับแลมโบ้แล้วรู้สึกประทับใจมาก ไกด์น่ารัก อธิบายดี ที่เที่ยวสวย อาหารอร่อย ราคาดีด้วย แนะนำเลยครับ"
  },
  {
    id: 2,
    name: "คุณปิยดา",
    role: "ครอบครัวเล็ก", 
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%233B82F6'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eป%3C/text%3E%3C/svg%3E",
    testimonial: "พาลูกๆไปเที่ยวครั้งแรก กังวลเยอะ แต่แลมโบ้ดูแลดีมาก เด็กสนุก พ่อแม่สบายใจ ที่พักดี รถสะอาด จะไปอีกแน่นอน"
  },
  {
    id: 3,
    name: "คุณนรินทร์",
    role: "กลุ่มเพื่อน",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%2314B8A6'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eน%3C/text%3E%3C/svg%3E", 
    testimonial: "ไปกับเพื่อน 8 คน จัดการทุกอย่างดี ตรงเวลา ไกด์พูดไทยเก่ง พาไปกินข้าวอร่อยๆ ราคาไม่แพง ใครอยากไปลาวแนะนำที่นี่เลย"
  },
  {
    id: 4,
    name: "คุณวิภา",
    role: "คู่รัก",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%23EC4899'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eว%3C/text%3E%3C/svg%3E",
    testimonial: "ฮันนีมูนที่ลาว บรรยากาศดีมาก ไกด์ไม่รบกวน ให้เวลาถ่ายรูปเยอะ น้ำตกสวย วัดสวย ที่พักโรแมนติก ประทับใจค่ะ"
  },
  {
    id: 5,
    name: "คุณธีรวัต",
    role: "เดินทางคนเดียว",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%2556F1'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eธ%3C/text%3E%3C/svg%3E",
    testimonial: "ไปคนเดียวก็ไม่เหงา ไกด์พูดคุยดี พาไปที่เที่ยวเด็ดๆ ถ่ายรูปให้สวย ปลอดภัยดี ราคาสมเหตุสมผล จะไปใหม่ปีหน้า"
  },
  {
    id: 6,
    name: "คุณสุวรรณา",
    role: "กลุ่มผู้สูงอายุ",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%23F59E0B'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eส%3C/text%3E%3C/svg%3E",
    testimonial: "พาเพื่อนๆผู้สูงอายุไป ไกด์เข้าใจดี ไม่รีบ ให้เวลาพักเยอะ รถสะอาด ขับปลอดภัย อาหารเหมาะกับคนแก่ ดีใจที่เลือกแลมโบ้"
  },
  {
    id: 7,
    name: "คุณประยุทธ",
    role: "กลุ่มบริษัท",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%23DC2626'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eป%3C/text%3E%3C/svg%3E",
    testimonial: "พาลูกค้าบริษัทไปทริปเก็บตัว จัดการได้ดี 20 คนไม่มีใครหาย ตรงเวลา อาหารอร่อย งานผ่านไปด้วยดี ขอบคุณครับ"
  },
  {
    id: 8,
    name: "คุณจิราพร",
    role: "แฟนคลับเดินทาง",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%230FBA69'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eจ%3C/text%3E%3C/svg%3E",
    testimonial: "ไปกับแลมโบ้หลายครั้งแล้ว ชอบเพราะเค้าจริงใจ ไม่หลอก ราคาชัดเจน ไกด์น่ารัก ที่เที่ยวสวยๆ บริการดี คุ้มค่าเงินจริงๆ"
  },
  {
    id: 9,
    name: "คุณสมศักดิ์",
    role: "นักถ่ายรูป",
    image: "data:image/svg+xml;charset=utf-8,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='120' rx='60' fill='%238B5CF6'/%3E%3Ctext x='60' y='78' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='55' font-weight='bold'%3Eส%3C/text%3E%3C/svg%3E",
    testimonial: "ชอบถ่ายรูป ไกด์รู้จักจุดถ่ายรูปสวยๆ พาไปมุมลับที่นักท่องเที่ยวทั่วไปไม่รู้จัก แสงสวย บรรยากาศดี ได้รูปดีเยอะมาก"
  }
];