import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// เพิ่มฟอนต์ไทยที่สวยงามและเหมาะกับเว็บท่องเที่ยว
const sarabun = {
  variable: "--font-sarabun",
  className: "font-sarabun",
};

const prompt = {
  variable: "--font-prompt", 
  className: "font-prompt",
};

export const metadata: Metadata = {
  title: "Lambo Car Rental - เช่ารถท่องเที่ยว",
  description: "บริการเช่ารถและท่องเที่ยวแบบครบวงจร ปลอดภัย น่าเชื่อถือ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/jpeg" href="https://res.cloudinary.com/dmt2zysfc/image/upload/v1754128054/logo_uzqrpw_orchpb.png" />
        <link rel="shortcut icon" type="image/jpeg" href="https://res.cloudinary.com/dmt2zysfc/image/upload/v1754128054/logo_uzqrpw_orchpb.png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dmt2zysfc/image/upload/v1754128054/logo_uzqrpw_orchpb.png" />
        
        {/* Google Fonts สำหรับภาษาไทย */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&family=Prompt:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sarabun.variable} ${prompt.variable} antialiased font-sarabun`}
      >
        {children}
      </body>
    </html>
  );
}