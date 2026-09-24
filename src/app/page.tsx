import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import QualityPromise from "@/components/sections/QualityPromise";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Brand Introduction */}
      <section className="py-24 md:py-32 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-6 font-semibold">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-8">
                Rooted in Tradition.<br />
                Made for Generations.
              </h2>
              <p className="text-brand-text/80 text-lg mb-10 max-w-md leading-relaxed">
                Malabar Bakery has been a staple of quality and authenticity. We blend time-honored Malabar recipes with modern baking techniques to deliver products that feel like home.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-dark hover:text-brand-gold transition-colors group"
              >
                <span className="relative pb-1 border-b border-transparent group-hover:border-brand-gold transition-colors">
                  Discover Our Story
                </span>
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 bg-brand-dark/5 z-10"></div>
              {/* Need to provide image later, use a colored placeholder for now if no image is present */}
              <div className="w-full h-full bg-brand-secondary/20 flex items-center justify-center relative overflow-hidden">
                 <Image 
                    src="/images/hero.jpg" // Using hero as a placeholder for the story image
                    alt="Baking process"
                    fill
                    className="object-cover"
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 md:py-32 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
              Made with Care
            </h2>
            <p className="text-brand-text/70 text-lg max-w-xl mx-auto">
              Discover our range of bakery favourites.
            </p>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      {/* Heritage Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
              src="/images/hero.jpg" // Placeholder for heritage image
              alt="Malabar Heritage"
              fill
              className="object-cover"
           />
        </div>
        <div className="absolute inset-0 bg-[#32150C]/60 mix-blend-multiply z-10" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-gold mb-6 font-medium">
            Our Heritage
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-cream mb-8">
            From Malabar<br />to the UAE.
          </h2>
          <p className="text-brand-cream/80 text-lg max-w-2xl mx-auto font-light">
            Bringing the authentic tastes of our homeland to your table, every single day.
          </p>
        </div>
      </section>

      {/* Quality Section */}
      <QualityPromise />

      {/* Final CTA */}
      <section className="py-32 bg-brand-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-6 font-semibold">
            Let's Connect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
            Have a question?
          </h2>
          <p className="text-brand-text/70 text-lg mb-10">
            Talk to our team about products, partnerships or enquiries.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-brand-dark text-brand-cream px-10 py-4 text-xs tracking-[0.18em] uppercase hover:bg-brand-primary transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
