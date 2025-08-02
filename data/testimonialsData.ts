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
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiNGRjk1MDAiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+UzwvdGV4dD4KPC9zdmc+",
    testimonial: "ไปลาวกับแลมโบ้แล้วรู้สึกประทับใจมาก ไกด์น่ารัก อธิบายดี ที่เที่ยวสวย อาหารอร่อย ราคาดีด้วย แนะนำเลยครับ"
  },
  {
    id: 2,
    name: "คุณปิยดา",
    role: "ครอบครัวเล็ก", 
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiMzQjgyRjYiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+UDwvdGV4dD4KPC9zdmc+",
    testimonial: "พาลูกๆไปเที่ยวครั้งแรก กังวลเยอะ แต่แลมโบ้ดูแลดีมาก เด็กสนุก พ่อแม่สบายใจ ที่พักดี รถสะอาด จะไปอีกแน่นอน"
  },
  {
    id: 3,
    name: "คุณนรินทร์",
    role: "กลุ่มเพื่อน",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiMxNEI4QTYiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+TjwvdGV4dD4KPC9zdmc+", 
    testimonial: "ไปกับเพื่อน 8 คน จัดการทุกอย่างดี ตรงเวลา ไกด์พูดไทยเก่ง พาไปกินข้าวอร่อยๆ ราคาไม่แพง ใครอยากไปลาวแนะนำที่นี่เลย"
  },
  {
    id: 4,
    name: "คุณวิภา",
    role: "คู่รัก",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiNFQzQ4OTkiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+VzwvdGV4dD4KPC9zdmc+",
    testimonial: "ฮันนีมูนที่ลาว บรรยากาศดีมาก ไกด์ไม่รบกวน ให้เวลาถ่ายรูปเยอะ น้ำตกสวย วัดสวย ที่พักโรแมนติก ประทับใจค่ะ"
  },
  {
    id: 5,
    name: "คุณธีรวัต",
    role: "เดินทางคนเดียว",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiM2MzY2RjEiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+VDwvdGV4dD4KPC9zdmc+",
    testimonial: "ไปคนเดียวก็ไม่เหงา ไกด์พูดคุยดี พาไปที่เที่ยวเด็ดๆ ถ่ายรูปให้สวย ปลอดภัยดี ราคาสมเหตุสมผล จะไปใหม่ปีหน้า"
  },
  {
    id: 6,
    name: "คุณสุวรรณา",
    role: "กลุ่มผู้สูงอายุ",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiNGNTlFMEIiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+UzwvdGV4dD4KPC9zdmc+",
    testimonial: "พาเพื่อนๆผู้สูงอายุไป ไกด์เข้าใจดี ไม่รีบ ให้เวลาพักเยอะ รถสะอาด ขับปลอดภัย อาหารเหมาะกับคนแก่ ดีใจที่เลือกแลมโบ้"
  },
  {
    id: 7,
    name: "คุณประยุทธ",
    role: "กลุ่มบริษัท",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiNEQzI2MjYiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+UDwvdGV4dD4KPC9zdmc+",
    testimonial: "พาลูกค้าบริษัทไปทริปเก็บตัว จัดการได้ดี 20 คนไม่มีใครหาย ตรงเวลา อาหารอร่อย งานผ่านไปด้วยดี ขอบคุณครับ"
  },
  {
    id: 8,
    name: "คุณจิราพร",
    role: "แฟนคลับเดินทาง",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiMwRkJBNjkiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+SjwvdGV4dD4KPC9zdmc+",
    testimonial: "ไปกับแลมโบ้หลายครั้งแล้ว ชอบเพราะเค้าจริงใจ ไม่หลอก ราคาชัดเจน ไกด์น่ารัก ที่เที่ยวสวยๆ บริการดี คุ้มค่าเงินจริงๆ"
  },
  {
    id: 9,
    name: "คุณสมศักดิ์",
    role: "นักถ่ายรูป",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiByeD0iNjAiIGZpbGw9IiM4QjVDRjYiLz4KPHRleHQgeD0iNjAiIHk9Ijc4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCI+UzwvdGV4dD4KPC9zdmc+",
    testimonial: "ชอบถ่ายรูป ไกด์รู้จักจุดถ่ายรูปสวยๆ พาไปมุมลับที่นักท่องเที่ยวทั่วไปไม่รู้จัก แสงสวย บรรยากาศดี ได้รูปดีเยอะมาก"
  }
];