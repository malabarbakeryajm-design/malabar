import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant", // Keeping the variable name the same so Tailwind config doesn't break
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans", // Keeping the variable name the same so Tailwind config doesn't break
});

export const metadata: Metadata = {
  title: "Malabar Bakery LLC | Premium Bakery in UAE",
  description: "Malabar Bakery LLC brings authentic bakery craftsmanship and timeless taste to the UAE.",
  keywords: ["bakery", "UAE", "Malabar Bakery", "premium bakery", "bread", "pastries"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased bg-brand-offwhite text-brand-text min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
