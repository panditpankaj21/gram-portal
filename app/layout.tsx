import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google"; // 1. Import font
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//@ts-ignore
import "./globals.css"; // Try removing @ts-ignore. If it errors, check if the file path is correct.

// 2. Configure font
const notoSans = Noto_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Grampanchayat Sonoli | Official Portal", 
  description: "Official website of Grampanchayat Sonoli, Nagpur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply font class to body */}
      <body className={notoSans.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar/>
          <main className="grow bg-[#E8F1FB]">
            {children}
          </main> 
          <Footer/>
        </div>
      </body>
    </html>
  );
}