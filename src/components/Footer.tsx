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
        {/* Social Links */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex items-center gap-4 pt-6 border-t border-brand-offwhite/10 mt-4">
          {/* Instagram */}
          <a
            href={companyData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 group shadow-sm"
          >
            <svg
              className="w-4 h-4 fill-none stroke-currentColor stroke-[1.8] group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href={companyData.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 group shadow-sm"
          >
            <svg
              className="w-4 h-4 fill-currentColor group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={companyData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-brand-gold/40 bg-brand-gold/10 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 group shadow-sm"
          >
            <svg
              className="w-4 h-4 fill-currentColor group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
