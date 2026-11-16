import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-cormorant", // Keeping the variable name the same so Tailwind config doesn't break
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-dm-sans", // Keeping the variable name the same so Tailwind config doesn't break
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://malabarbakery.ae"),
  title: "Malabar Bakery LLC | Premium Bakery in UAE",
  description: "Malabar Bakery LLC brings authentic bakery craftsmanship and timeless taste to the UAE.",
  keywords: ["bakery", "UAE", "Malabar Bakery", "premium bakery", "bread", "pastries"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"]
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Malabar Bakery LLC | Premium Bakery in UAE",
    description: "Taste. Tradition. Trust. Serving authentic bakery items across the UAE.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Malabar Bakery LLC" }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased bg-brand-offwhite text-brand-text min-h-screen flex flex-col`}>
        <SmoothScroll>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
