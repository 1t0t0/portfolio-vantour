// components/ContactSection.tsx

const ContactSection = () => {
  const contacts = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.687"/>
        </svg>
      ),
      title: "WhatsApp",
      description: "แชตกับเราได้โดยตรงผ่านทางวอทแอพ พร้อมรับการตอบรับอย่างรวดเร็ว",
      link: "https://wa.me/8562077801819"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      title: "Facebook",
      description: "ติดตามเพจของเราเพื่อรับข้อมูลอัปเดตการเดินทางและข้อเสนอพิเศษ",
      link: "https://www.facebook.com/share/1GGB4HGpKB/?mibextid=wwXIfr"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 5.85 2 10.5c0 1.49.53 2.87 1.44 4.03L2 20l5.64-1.22C8.84 19.55 10.37 20 12 20c5.52 0 10-3.85 10-8.5S17.52 2 12 2z"/>
          <text x="12" y="13" textAnchor="middle" fontSize="6" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">LINE</text>
        </svg>
      ),
      title: "Line",
      description: "แชตกับเราได้โดยตรงผ่านทางไลน์ สดวกง่าย และ ตอบกับได้ทันที่",
      link: "https://line.me/ti/p/iuWs58ECx-"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns, 1 Row Layout */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Column 1 - Header */}
          <div className="space-y-4">
            <p className="text-orange-400 font-medium text-lg italic font-prompt">
              สนใจติดต่อเราได้ที่
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight font-prompt">
              ติดต่อเราผ่านทางโซเชียลมีเดีย
            </h2>
          </div>

          {/* Columns 2-4 - Contact Cards */}
          {contacts.map((contact, index) => (
            <a 
              key={index} 
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white rounded-xl p-6 text-center border-r-2 border-b-2 hover:shadow-xl border-amber-600 transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mx-auto mb-4 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                  {contact.icon}
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-500 transition-colors duration-300 font-prompt">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-sarabun text-thai-body">
                    {contact.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;