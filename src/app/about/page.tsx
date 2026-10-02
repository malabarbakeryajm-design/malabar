import Image from "next/image";
import { companyData } from "@/data/company";
import AboutHero from "@/components/sections/AboutHero";
import Link from "next/link";
import { CheckCircle, Users, Award, ShieldCheck, TrendingUp, Archive } from "lucide-react";

export const metadata = {
  title: `About ${companyData.name} | Taste. Tradition. Trust.`,
  description: companyData.description,
};

export default function AboutPage() {
  return (
    <div className="bg-brand-cream">
      <AboutHero />
      
      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-6 text-brand-text/85 text-[15px] md:text-lg font-light leading-[1.8]">
              <p>
                Malabar Bakery LLC was established in the UAE in 2005 with a passion for bringing authentic and familiar flavours to the market.
              </p>
              <p>
                Today, Malabar Bakery has grown into an established bakery and food manufacturing company with more than {companyData.stats.employees} employees, over {companyData.stats.products} products and a daily production of more than {companyData.stats.dailyItems} items.
              </p>
              <p>
                Our range includes South Indian snacks and breakfast products, Indian bakery items, breads, sandwiches, buns, pastries, puffs, biscuits, samosas, cakes, sweets and ready-to-cook products.
              </p>
              <p>
                Our roots remain traditional, while our production continues to evolve with modern manufacturing, food-safety standards and reliable distribution.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-brand-dark/10 z-10 mix-blend-multiply rounded-xl" />
              <Image 
                src="/images/about/history.jpg"
                alt="Malabar Bakery History"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-offwhite border-y border-brand-text/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-center md:text-left">
            <div>
              <h3 className="text-brand-gold font-serif text-3xl mb-4">Mission</h3>
              <p className="text-brand-text/80 leading-relaxed font-light text-lg">
                To produce authentic, consistent and high-quality bakery and food products while providing dependable supply to customers and businesses across the UAE.
              </p>
            </div>
            <div>
              <h3 className="text-brand-gold font-serif text-3xl mb-4">Vision</h3>
              <p className="text-brand-text/80 leading-relaxed font-light text-lg">
                To continue growing Malabar Bakery as one of the UAE's trusted bakery and food brands while preserving the taste and traditions that built our name.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-16">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-brand-offwhite border border-brand-text/5 shadow-sm">
              <h4 className="font-serif text-2xl text-brand-dark mb-4 uppercase">TASTE</h4>
              <p className="text-brand-text/70 font-light">Products people enjoy and come back for.</p>
            </div>
            <div className="p-8 bg-brand-offwhite border border-brand-text/5 shadow-sm">
              <h4 className="font-serif text-2xl text-brand-dark mb-4 uppercase">TRADITION</h4>
              <p className="text-brand-text/70 font-light">Respecting authentic recipes and familiar flavours.</p>
            </div>
            <div className="p-8 bg-brand-offwhite border border-brand-text/5 shadow-sm">
              <h4 className="font-serif text-2xl text-brand-dark mb-4 uppercase">TRUST</h4>
              <p className="text-brand-text/70 font-light">Building long-term relationships through quality and consistency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Malabar Bakery */}
      <section className="py-20 md:py-32 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-gold mb-16 text-center">Why Malabar Bakery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                <Archive size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl mb-3 uppercase">SINCE 2005</h4>
              <p className="text-brand-cream/70 font-light text-sm">Years of experience in the UAE.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                <CheckCircle size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl mb-3 uppercase">100+ PRODUCTS</h4>
              <p className="text-brand-cream/70 font-light text-sm">A wide range of bakery and food products.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl mb-3 uppercase">500,000+ ITEMS DAILY</h4>
              <p className="text-brand-cream/70 font-light text-sm">Large daily production capability.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl mb-3 uppercase">CERTIFIED QUALITY</h4>
              <p className="text-brand-cream/70 font-light text-sm">HACCP and ISO certified.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl mb-3 uppercase">200+ TEAM MEMBERS</h4>
              <p className="text-brand-cream/70 font-light text-sm">Experienced production and operations team.</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 text-brand-gold">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h4 className="font-serif text-xl mb-3 uppercase">RELIABLE SUPPLY</h4>
              <p className="text-brand-cream/70 font-light text-sm">Built to support regular B2B requirements.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
