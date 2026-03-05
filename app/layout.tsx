import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Printer | Print Food From A Photo",
  description:
    "AI-powered food printer landing site with demo, pricing, and contact pages.",
  icons: {
    icon: "/icons/favicon.png",
    shortcut: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
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
