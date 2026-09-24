import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | Malabar Bakery`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  
  if (!product) {
    notFound();
  }

  const category = categories.find(c => c.id === product.categoryId);

  return (
    <div className="pt-[92px] bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        
        <div className="mb-12">
          <Link 
            href="/products" 
            className="text-xs uppercase tracking-widest text-brand-secondary hover:text-brand-gold transition-colors"
          >
            ← Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="relative aspect-square bg-brand-cream w-full">
            {product.image ? (
              <Image 
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-brand-text/20">
                No image available
              </div>
            )}
          </div>
          
          <div className="flex flex-col justify-center">
            {category && (
              <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-4 font-semibold">
                {category.name}
              </p>
            )}
            
            <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">
              {product.name}
            </h1>
            
            <p className="text-brand-text/80 text-lg font-light leading-relaxed mb-12">
              {product.fullDescription || product.description}
            </p>
            
            <Link 
              href="/contact"
              className="inline-block self-start bg-brand-dark text-brand-cream px-10 py-4 text-xs tracking-[0.18em] uppercase hover:bg-brand-primary transition-colors duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
