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
            <div className="relative w-[160px] h-[80px]">
              <Image src="/images/logo.png" alt="Malabar Bakery Logo" fill className="object-contain object-left" sizes="160px" />
            </div>
          </Link>
          <p className="text-brand-offwhite/70 max-w-sm text-sm leading-relaxed">
            {companyData.description}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-brand-gold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-brand-offwhite/80">
            <li><Link href="/about" className="hover:text-brand-offwhite transition-colors">Our Story</Link></li>
            <li><Link href="/products" className="hover:text-brand-offwhite transition-colors">Products</Link></li>
            <li><Link href="/quality" className="hover:text-brand-offwhite transition-colors">Quality Promise</Link></li>
            <li><Link href="/contact" className="hover:text-brand-offwhite transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-brand-gold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-brand-offwhite/80">
            <li>{companyData.address}</li>
            <li><a href={`mailto:${companyData.email}`} className="hover:text-brand-offwhite transition-colors">{companyData.email}</a></li>
            <li><a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="hover:text-brand-offwhite transition-colors">{companyData.phone}</a></li>
          </ul>
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
