"use client";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import "../utility/18n/i18n";
import Navbar from "@/components/navbar/Navbar";
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-montserrat',       
  display: 'swap',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
