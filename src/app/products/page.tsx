import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export const metadata = {
  title: "Bakery Products | Malabar Bakery UAE",
  description: "Explore our wide range of premium bakery products, crafted for everyday moments.",
};

export default function ProductsPage() {
  return (
    <div className="pt-[92px] bg-transparent min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/bakery-pattern-bg.webp')] bg-repeat opacity-[0.03] mix-blend-multiply"></div>
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-brand-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 relative z-10">
        
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {categories.filter(c => c.id !== "all").map((category) => (
            <Link 
              key={category.id}
              href={`/products/category/${category.id}`}
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
