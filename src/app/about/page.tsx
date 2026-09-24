import Image from "next/image";
import { companyData } from "@/data/company";
import AboutHero from "@/components/sections/AboutHero";

export const metadata = {
  title: `About ${companyData.name} | Our Story`,
  description: "Learn about the heritage, tradition, and craftsmanship behind Malabar Bakery LLC in the UAE.",
};

export default function AboutPage() {
  return (
    <div className="bg-brand-cream">
      <AboutHero />
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6">
              Our Story
            </h2>
            <div className="w-24 h-[1px] bg-brand-gold/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="space-y-6 text-brand-text/85 text-[15px] md:text-lg font-light leading-[1.8] order-2 lg:order-1">
              <p>
                Malabar bakery is one of the growing bakeries in U.A.E. The Bakery was established as a small homemade production unit like a preparing traditional foods in villas with manual preparation and Baking, named Goods service Bakery in 2005. Malabar Bakery L.L.C was started in 2011 considering the modernization in the bakery industry with machines to deliver good quality products to the market.
              </p>
              <p>
                The Bakery is unique in the region due to automation and production capabilities. It is comprehensively equipped with the top of the range, state of art machinery; we have technical capability and resources to adapt quickly and effectively to customer demands there by demonstrating outstanding levels of flexibility.
              </p>
              <p>
                In conjunction with our extensive product list, our versatility enables us to cater for bespoke requirements and we welcome the opportunity to discuss specific product specification when desired.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <div className="absolute inset-0 bg-brand-dark/10 z-10 mix-blend-multiply rounded-xl" />
              <Image 
                src="/images/about/history.jpg"
                alt="Artisan baker shaping sourdough"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
