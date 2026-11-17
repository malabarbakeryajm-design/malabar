import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-offwhite py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand */}
        <div className="col-span-1 lg:col-span-2">
          <Link href="/" className="inline-block mb-6 transition-transform hover:scale-105">
            <div className="relative w-[260px] h-[130px]">
              <Image src="/images/logo-transparent.webp" alt="Malabar Bakery Logo" fill className="object-contain object-left" sizes="260px" />
            </div>
          </Link>
          <p className="text-brand-gold text-sm tracking-[0.2em] uppercase font-medium mb-4">
            {companyData.brandLine}
          </p>
          <p className="text-brand-offwhite/70 max-w-sm text-sm leading-relaxed">
            {companyData.description}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-brand-gold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-brand-offwhite/80">
            <li><Link href="/about" className="hover:text-brand-offwhite transition-colors">About</Link></li>
            <li><Link href="/products" className="hover:text-brand-offwhite transition-colors">Products</Link></li>
            <li><Link href="/business" className="hover:text-brand-offwhite transition-colors">Business</Link></li>
            <li><Link href="/quality" className="hover:text-brand-offwhite transition-colors">Quality</Link></li>
            <li><Link href="/careers" className="hover:text-brand-offwhite transition-colors">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-brand-offwhite transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-brand-gold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-brand-offwhite/80">
            <li>{companyData.address}</li>
            <li><a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="hover:text-brand-offwhite transition-colors">Phone: {companyData.phone}</a></li>
            <li><a href={`https://wa.me/${companyData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-offwhite transition-colors">WhatsApp: +{companyData.whatsapp}</a></li>
            <li><a href={`mailto:${companyData.email}`} className="hover:text-brand-offwhite transition-colors">Email: {companyData.email}</a></li>
          </ul>
        </div>

        {/* Social Media */}
        {/* Social Links & Call Contact */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center gap-4 pt-6 border-t border-brand-offwhite/10 mt-4">
          {/* 1. Instagram */}
          <a
            href={companyData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-brand-gold/50 bg-[#B88643]/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 group shadow-sm"
          >
            <svg
              className="w-5 h-5 fill-currentColor group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* 2. Facebook */}
          <a
            href={companyData.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-brand-gold/50 bg-[#B88643]/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 group shadow-sm"
          >
            <svg
              className="w-5 h-5 fill-currentColor group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* 3. LinkedIn */}
          <a
            href={companyData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-brand-gold/50 bg-[#B88643]/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 group shadow-sm"
          >
            <svg
              className="w-5 h-5 fill-currentColor group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* 4. Call Button (Icon only) */}
          <a
            href="tel:+97167481251"
            aria-label="Call +971 67481251"
            className="w-10 h-10 rounded-full border border-brand-gold/50 bg-[#B88643]/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 group shadow-sm"
          >
            <svg
              className="w-4 h-4 fill-currentColor group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.57 3.9c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.52c0-.55-.45-1-.99-1z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-offwhite/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-brand-offwhite/50">
          © {new Date().getFullYear()} {companyData.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-brand-offwhite/50">
          <Link href="#" className="hover:text-brand-offwhite transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-brand-offwhite transition-colors">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
