import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Printer | Print Food From A Photo",
  description:
    "AI-powered food printer landing site with demo, pricing, and contact pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <SmoothScroll />
        <main className="min-h-screen bg-[#8f9660] text-[#f4f2e8]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
