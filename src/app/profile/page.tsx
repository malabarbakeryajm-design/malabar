import Image from "next/image";
import { companyData } from "@/data/company";

export const metadata = {
  title: `Profile | ${companyData.name}`,
  description: "Learn about Malabar Bakery's production facility, distribution network, and our commitment to serving thousands of satisfied customers daily across the UAE.",
};

export default function ProfilePage() {
  return (
    <div className="bg-brand-cream min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-gold/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-medium">
              Company Profile
            </span>
            <div className="w-12 h-[1px] bg-brand-gold/60" />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-dark mb-6">
            About Us
          </h1>
          <div className="w-24 h-[1px] bg-brand-gold/30" />
        </div>

        {/* Content & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8 text-brand-text/85 text-[15px] md:text-lg font-light leading-[1.8]">
            <p>
              Malabar Bakery is having production facility in Ajman to deliver the market with freshness of our products with wide range of distribution network covering all across the UAE. A well organized distribution facility, assisted by a fleet of carrier vehicles makes sure that the products are delivered without any delay. And these fresh products are delivered to your homes hot, tasty and fresh.
            </p>
            <p>
              Malabar Bakery L.L.C is one of the most established bakeries in UAE. Since 2005 we have been serving thousands of satisfied customers daily. Our expert management acts as the key factor for the successful running of our company. At Malabar Bakery L.L.C, we are dedicated to good health, good taste and sustainable agriculture, because it is concerned for the quality of our environment and the health of customers.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-brand-dark/10 z-10 mix-blend-multiply rounded-xl" />
            <Image 
              src="/images/about/facility.jpg"
              alt="Malabar Bakery Production Facility"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}
