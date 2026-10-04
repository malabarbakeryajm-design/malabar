"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { companyData } from "@/data/company";

export default function Header() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling past 80% of the viewport height on home page
      setIsScrolledPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Products", 
      href: "/products", 
      hasDropdown: true,
      dropdownItems: [
        { name: "South Indian Snacks", href: "/products?category=south-indian-snacks" },
        { name: "Snacks", href: "/products?category=snacks" },
        { name: "Indian Bakery Items", href: "/products?category=indian-bakery-items" },
        { name: "Breads", href: "/products?category=breads" },
        { name: "Breakfast Products", href: "/products?category=breakfast-products" },
        { name: "Sandwiches", href: "/products?category=sandwiches" },
        { name: "Buns", href: "/products?category=buns" },
        { name: "Rolls", href: "/products?category=rolls" },
        { name: "Pastries", href: "/products?category=pastries" },
        { name: "Puffs", href: "/products?category=puffs" },
        { name: "Biscuits", href: "/products?category=biscuits" },
        { name: "Samosas", href: "/products?category=samosas" },
        { name: "Cakes", href: "/products?category=cakes" },
        { name: "Sweets", href: "/products?category=sweets" },
        { name: "Ready to Cook", href: "/products?category=ready-to-cook" },
      ]
    },
    { name: "Business", href: "/business" },
    { name: "Quality", href: "/quality" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isVisible = isHome ? isScrolledPastHero : true;

  return (
    <>
      <div 
        className={`fixed left-1/2 -translate-x-1/2 w-[95%] lg:w-auto z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "top-6 opacity-100" : "-top-32 opacity-0 pointer-events-none"
        }`}
      >
        <header className="bg-gradient-to-r from-brand-dark/85 from-[15%] to-brand-cream/95 to-[30%] backdrop-blur-md shadow-lg rounded-full px-6 lg:px-6 h-[72px] flex items-center justify-between lg:gap-12 border border-brand-text/5">
          <Link href="/" className="flex items-center pl-2 transition-transform hover:scale-105">
            <div className="relative w-[110px] h-[55px]">
              <Image src="/images/logo.webp" alt="Malabar Bakery Logo" fill className="object-contain" priority sizes="110px" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                <Link 
                  href={link.href}
                  className="text-[11px] md:text-xs tracking-[0.15em] uppercase transition-colors text-brand-text/70 hover:text-brand-text flex items-center gap-1 h-full font-medium whitespace-nowrap"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />}
                </Link>

                {link.hasDropdown && link.dropdownItems && (
                  <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-64 bg-brand-offwhite shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col z-50 rounded-2xl border border-brand-text/5">
                    {link.dropdownItems.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="px-6 py-2.5 text-sm text-brand-text/80 hover:bg-brand-cream hover:text-brand-gold transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/business" 
              className="ml-2 text-[11px] tracking-widest uppercase bg-brand-dark text-brand-offwhite rounded-full px-7 py-2.5 transition-colors hover:bg-brand-primary flex items-center gap-2 whitespace-nowrap"
            >
              Become a Partner
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-offwhite"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-brand-cream flex flex-col overflow-y-auto"
          >
            <div className="flex justify-between items-center px-6 h-[80px] shrink-0">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-[130px] h-[65px]">
                  <Image src="/images/logo.webp" alt="Malabar Bakery Logo" fill className="object-contain" priority sizes="130px" />
                </div>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-brand-text"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center gap-6 py-12">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center w-full">
                  <Link 
                    href={link.href}
                    className="font-serif text-4xl text-brand-text hover:text-brand-gold transition-colors flex items-center gap-2 mb-2"
                    onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={24} />}
                  </Link>
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="flex flex-col items-center gap-3 mt-4 mb-6">
                      {link.dropdownItems.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg text-brand-text/70 hover:text-brand-gold transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/business"
                className="mt-4 text-sm tracking-widest uppercase border border-brand-text rounded-full text-brand-text px-8 py-3 hover:bg-brand-text hover:text-brand-cream transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
