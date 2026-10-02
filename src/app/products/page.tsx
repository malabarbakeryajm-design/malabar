import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export const metadata = {
  title: "Bakery Products | Malabar Bakery UAE",
  description: "Explore our wide range of premium bakery products, crafted for everyday moments.",
};

export default function ProductsPage() {
  return (
    <div className="pt-[92px] bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-4 font-semibold">
            Products
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8">
            Crafted for everyday moments.
          </h1>
          <a 
            href="/downloads/malabar-catalogue.pdf" 
            target="_blank" 
            className="inline-block border border-brand-dark text-brand-dark px-8 py-4 text-xs tracking-widest uppercase hover:bg-brand-dark hover:text-brand-cream transition-colors duration-300"
          >
            Download Our Product Catalogue
          </a>
        </div>

        {/* Categories / Filters could be added here in a client component */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {categories.filter(c => c.id !== "all").map((category) => (
            <Link 
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group block"
            >
              <div className="relative aspect-square mb-6 overflow-hidden bg-brand-cream border border-brand-text/5 shadow-sm">
                {category.image ? (
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-brand-text/20">
                    Image Coming Soon
                  </div>
                )}
              </div>
              
              <h3 className="font-serif text-2xl text-brand-dark mb-3">{category.name}</h3>
              <p className="text-brand-text/70 font-light text-sm mb-4 line-clamp-2">
                {category.description}
              </p>
              
              <div className="text-xs uppercase tracking-widest text-brand-secondary group-hover:text-brand-gold transition-colors inline-block border-b border-transparent group-hover:border-brand-gold pb-1">
                View Category
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
