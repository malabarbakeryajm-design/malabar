import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function ProductGrid() {
  // Take only the first 3 categories for the homepage that are not "all"
  const displayCategories = categories.filter(c => c.id !== "all").slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {displayCategories.map((category) => (
        <Link 
          key={category.id} 
          href={`/products?category=${category.id}`}
          className="group block"
        >
          <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-brand-cream">
            {category.image ? (
              <Image 
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-brand-text/20">
                Image coming soon
              </div>
            )}
          </div>
          
          <h3 className="font-serif text-2xl mb-2 text-brand-text">{category.name}</h3>
          <p className="text-brand-text/70 text-sm mb-4 min-h-[40px]">
            {category.description}
          </p>
          
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-text group-hover:text-brand-gold transition-colors">
            <span className="relative">
              Explore
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}
