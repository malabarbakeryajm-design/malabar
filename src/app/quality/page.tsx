import { companyData } from "@/data/company";

export const metadata = {
  title: "Quality & Craftsmanship | Malabar Bakery",
  description: "Discover our commitment to quality, craft, and trust in every bake.",
};

export default function QualityPage() {
  return (
    <div className="pt-[92px] bg-brand-primary text-brand-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
        <p className="text-xs tracking-[0.18em] uppercase text-brand-gold mb-6 font-medium">
          Our Promise
        </p>
        <h1 className="font-serif text-5xl md:text-7xl mb-12">
          Quality in Every Bake.
        </h1>
        <div className="w-24 h-[1px] bg-brand-gold/30 mx-auto mb-20"></div>
        
        <div className="space-y-24">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-light-gold mb-6">Quality</h2>
            <p className="text-brand-cream/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              We source only the finest ingredients, ensuring that everything we bake meets our strict standards. Consistency in taste and texture is our daily goal, giving you the best experience every time.
            </p>
          </div>
          
          <div className="gold-divider w-12 mx-auto"></div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-light-gold mb-6">Craft</h2>
            <p className="text-brand-cream/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Baking is an art that requires patience and precision. We combine traditional inspiration from Malabar with modern production techniques to create pastries, bread, and cookies that stand out.
            </p>
          </div>
          
          <div className="gold-divider w-12 mx-auto"></div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-light-gold mb-6">Trust</h2>
            <p className="text-brand-cream/80 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Our customers are our family. We maintain a steadfast commitment to transparency, hygiene, and ethical practices so that you can trust what you eat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
