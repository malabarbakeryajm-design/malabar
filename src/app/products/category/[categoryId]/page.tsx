import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const resolvedParams = await params;
  const currentCategory = categories.find(c => c.id === resolvedParams.categoryId);
  
  if (!currentCategory) {
    return (
      <div className="pt-[92px] bg-brand-offwhite min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-brand-dark mb-4">Category Not Found</h1>
          <Link href="/products" className="text-brand-gold underline hover:text-brand-primary">Back to Products</Link>
        </div>
      </div>
    );
  }

  const filteredProducts = products.filter(p => p.categoryId === currentCategory.id);

  return (
    <div className="pt-[92px] bg-transparent min-h-screen relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/bakery-pattern-bg.webp')] bg-repeat opacity-[0.03] mix-blend-multiply"></div>
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-primary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 relative z-10">
        
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-4 font-semibold">
            {currentCategory.name}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8">
            {currentCategory.description || "Crafted for everyday moments."}
          </h1>
          <Link 
            href="/products" 
            className="inline-block border border-brand-dark text-brand-dark px-8 py-4 text-xs tracking-widest uppercase hover:bg-brand-dark hover:text-brand-cream transition-colors duration-300"
          >
            Back to All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link 
                key={product.id}
                href={`/products/${product.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-transparent border border-brand-text/5 shadow-sm rounded-md">
                  {product.image ? (
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-brand-text/20">
                      Image Coming Soon
                    </div>
                  )}
                </div>
                
                <h3 className="font-serif text-xl text-brand-dark mb-2">{product.name}</h3>
                <div className="text-xs uppercase tracking-widest text-brand-secondary group-hover:text-brand-gold transition-colors inline-block border-b border-transparent group-hover:border-brand-gold pb-1">
                  View Details
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center text-brand-text/60 py-20">
              No products found in this category yet.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
