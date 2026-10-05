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
        <div className="col-span-1 md:col-span-2 lg:col-span-4 flex gap-6 pt-6 border-t border-brand-offwhite/10 mt-4">
          <a href={companyData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-offwhite/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Instagram</a>
          <a href={companyData.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-offwhite/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">Facebook</a>
          <a href={companyData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-offwhite/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider">LinkedIn</a>
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
