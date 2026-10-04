import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { companyData } from "@/data/company";

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
    <div className="pt-[92px] bg-transparent min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/bakery-pattern-bg.webp')] bg-repeat opacity-[0.03] mix-blend-multiply"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-brand-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-brand-primary/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10">
        
        <div className="mb-12">
          <Link 
            href="/products" 
            className="text-xs uppercase tracking-widest text-brand-secondary hover:text-brand-gold transition-colors"
          >
            ← Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="relative aspect-[4/5] bg-brand-cream w-full overflow-hidden rounded-md border border-brand-text/5">
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
            
            <p className="text-brand-text/80 text-lg font-light leading-relaxed mb-10">
              {product.fullDescription || product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-12 py-6 border-y border-brand-text/10">
              {product.packSize && (
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-secondary mb-1">Pack Size</span>
                  <span className="text-brand-dark font-medium">{product.packSize}</span>
                </div>
              )}
              {product.weight && (
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-secondary mb-1">Weight</span>
                  <span className="text-brand-dark font-medium">{product.weight}</span>
                </div>
              )}
              {product.shelfLife && (
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-secondary mb-1">Shelf Life</span>
                  <span className="text-brand-dark font-medium">{product.shelfLife}</span>
                </div>
              )}
              {product.storageCondition && (
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-secondary mb-1">Storage</span>
                  <span className="text-brand-dark font-medium">{product.storageCondition}</span>
                </div>
              )}
              {product.productType && (
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-secondary mb-1">Product Type</span>
                  <span className="text-brand-dark font-medium">{product.productType}</span>
                </div>
              )}
              {product.vegetarian !== undefined && (
                <div>
                  <span className="block text-xs uppercase tracking-widest text-brand-secondary mb-1">Dietary</span>
                  <span className="text-brand-dark font-medium">{product.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/contact"
                className="w-full text-center sm:w-auto bg-brand-dark text-brand-cream px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-brand-primary transition-colors duration-300"
              >
                Enquire About This Product
              </Link>
              <a 
                href={`https://wa.me/${companyData.whatsapp}?text=Hello Malabar Bakery, I would like more information about this product: ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center sm:w-auto border border-brand-dark text-brand-dark px-8 py-4 text-xs tracking-[0.15em] uppercase hover:bg-brand-dark hover:text-brand-cream transition-colors duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
