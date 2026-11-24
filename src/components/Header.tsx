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
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
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
    setIsMobileProductsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Products", 
      href: "/products", 
      hasDropdown: true,
      dropdownItems: [
        { name: "South Indian Snacks", href: "/products/category/south-indian-snacks" },
        { name: "Breads", href: "/products/category/breads" },
        { name: "Breakfast Products", href: "/products/category/breakfast-products" },
        { name: "Sandwiches", href: "/products/category/sandwiches" },
        { name: "Buns", href: "/products/category/buns" },
        { name: "Rolls", href: "/products/category/rolls" },
        { name: "Pastries", href: "/products/category/pastries" },
        { name: "Puffs", href: "/products/category/puffs" },
        { name: "Biscuits", href: "/products/category/biscuits" },
        { name: "Samosas", href: "/products/category/samosas" },
        { name: "Cakes", href: "/products/category/cakes" },
        { name: "Sweets", href: "/products/category/sweets" },
        { name: "Ready to Cook", href: "/products/category/ready-to-cook" },
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
        <header className="bg-gradient-to-r from-brand-dark/85 from-[15%] to-brand-cream/95 to-[30%] backdrop-blur-md shadow-lg rounded-full px-6 lg:px-6 h-[88px] flex items-center justify-between lg:gap-12 border border-brand-text/5">
          <Link href="/" className="flex items-center pl-2 transition-transform hover:scale-105">
            <div className="relative w-[140px] h-[70px]">
              <Image src="/images/logo-transparent.webp" alt="Malabar Bakery Logo" fill className="object-contain" priority sizes="140px" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 h-full">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <div key={link.name} className="relative group h-full flex items-center">
                  <Link 
                    href={link.href}
                    className={`text-[11px] md:text-xs tracking-[0.15em] uppercase transition-colors flex items-center gap-1 h-full font-medium whitespace-nowrap relative py-1 ${
                      isActive ? "text-brand-dark font-semibold" : "text-brand-text/75 hover:text-brand-dark"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span 
                        layoutId="activeNavUnderline"
                        className="absolute bottom-5 left-0 right-0 h-[2px] bg-brand-gold rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.hasDropdown && <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180 opacity-70" />}
                  </Link>

                  {link.hasDropdown && link.dropdownItems && (
                    <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[440px] bg-brand-offwhite shadow-2xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 rounded-2xl border border-brand-text/10">
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {link.dropdownItems.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            className="px-3.5 py-2 text-xs text-brand-text/80 hover:bg-brand-cream hover:text-brand-gold rounded-lg transition-colors font-medium flex items-center justify-between group/item"
                          >
                            <span>{item.name}</span>
                            <span className="text-[10px] text-brand-gold opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
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
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[60] bg-[#FBF7F2] flex flex-col overflow-y-auto"
          >
            {/* Top header bar */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-brand-text/10 shrink-0 bg-[#FBF7F2]">
              <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="relative w-[130px] h-[55px]">
                  <Image 
                    src="/images/logo.webp" 
                    alt="Malabar Bakery Logo" 
                    fill 
                    className="object-contain" 
                    priority 
                    sizes="130px" 
                  />
                </div>
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark hover:bg-brand-dark/10 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>
            
            {/* Nav list */}
            <div className="flex-grow flex flex-col px-8 py-8 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                
                if (link.hasDropdown && link.dropdownItems) {
                  return (
                    <div key={link.name} className="flex flex-col border-b border-brand-text/5 pb-2">
                      <div className="flex items-center justify-between py-2">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`font-serif text-3xl tracking-tight transition-colors ${
                            isActive ? "text-brand-dark font-medium" : "text-brand-text hover:text-brand-gold"
                          }`}
                        >
                          {link.name}
                        </Link>
                        <button
                          onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                          className="p-2 text-brand-text/70 hover:text-brand-dark"
                          aria-label="Toggle products dropdown"
                        >
                          <ChevronDown 
                            size={22} 
                            className={`transition-transform duration-300 ${isMobileProductsOpen ? "rotate-180 text-brand-gold" : ""}`} 
                          />
                        </button>
                      </div>

                      {/* Collapsible Category Grid */}
                      <AnimatePresence>
                        {isMobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-2 gap-2 pt-2 pb-4 pl-2">
                              {link.dropdownItems.map(item => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-xs tracking-wide py-1.5 px-2.5 rounded-lg text-brand-text/75 hover:bg-brand-cream hover:text-brand-dark font-medium transition-colors"
                                >
                                  • {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <div key={link.name} className="border-b border-brand-text/5 pb-2">
                    <Link 
                      href={link.href}
                      className={`font-serif text-3xl tracking-tight transition-colors block py-2 ${
                        isActive ? "text-brand-dark font-medium" : "text-brand-text hover:text-brand-gold"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}

              <div className="pt-6">
                <Link 
                  href="/business"
                  className="w-full block text-center text-xs tracking-[0.2em] uppercase bg-brand-dark text-brand-cream rounded-full px-8 py-4 font-semibold hover:bg-brand-primary transition-colors shadow-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Become a Partner
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
