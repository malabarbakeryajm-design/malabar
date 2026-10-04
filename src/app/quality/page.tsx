import { companyData } from "@/data/company";
import Image from "next/image";
import { ShieldCheck, Award } from "lucide-react";

export const metadata = {
  title: "Quality & Craftsmanship | Malabar Bakery",
  description: "Discover our commitment to quality, craft, and trust in every bake.",
};

export default function QualityPage() {
  return (
    <div className="pt-[92px] bg-brand-cream min-h-screen text-brand-text">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-brand-dark text-brand-cream text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image 
             src="/images/hero.webp"
             alt="Bakery Quality"
             fill
             className="object-cover"
             priority
           />
           <div className="absolute inset-0 bg-brand-dark/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-gold mb-6 font-medium">
            Our Promise
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">
            Quality in Every Bake.
          </h1>
          <p className="text-brand-cream/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Our commitment to excellence is unwavering. From the finest ingredients to our state-of-the-art facilities, we ensure that every product meets the highest standards of taste and safety.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-brand-offwhite border-b border-brand-text/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-brand-gold" size={48} strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-2xl text-brand-dark">HACCP Certified</h3>
                <p className="text-brand-text/70 text-sm font-light">Food Safety Management</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="text-brand-gold" size={48} strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-2xl text-brand-dark">ISO Certified</h3>
                <p className="text-brand-text/70 text-sm font-light">Quality Management Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staggered Content Sections */}
      <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 space-y-24 md:space-y-32">
        
        {/* Quality */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/quality/premium_ingredients.webp"
              alt="Premium Ingredients"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">Uncompromising Quality</h2>
            <div className="w-16 h-[1px] bg-brand-gold mb-6"></div>
            <p className="text-brand-text/80 text-lg font-light leading-relaxed">
              We source only the finest ingredients, ensuring that everything we bake meets our strict standards. Consistency in taste and texture is our daily goal, giving you the best experience every time. Our rigorous quality control checks guarantee that only perfection leaves our facility.
            </p>
          </div>
        </div>

        {/* Craft */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">Masterful Craft</h2>
            <div className="w-16 h-[1px] bg-brand-gold mb-6"></div>
            <p className="text-brand-text/80 text-lg font-light leading-relaxed">
              Baking is an art that requires patience and precision. We combine traditional inspiration from Malabar with modern production techniques to create pastries, bread, and cookies that stand out. Our experienced bakers pour their passion into every recipe.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
            <Image 
              src="/images/quality/masterful_craft.webp"
              alt="Masterful Baking Craft"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/quality/building_trust.webp"
              alt="Building Trust"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">Built on Trust</h2>
            <div className="w-16 h-[1px] bg-brand-gold mb-6"></div>
            <p className="text-brand-text/80 text-lg font-light leading-relaxed">
              Our customers are our family. We maintain a steadfast commitment to transparency, hygiene, and ethical practices so that you can trust what you eat. With {companyData.stats.products} products delivered daily, our reputation is baked into every bite.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
