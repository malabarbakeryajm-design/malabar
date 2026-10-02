"use client";

import { companyData } from "@/data/company";
import { motion } from "framer-motion";

export default function BusinessPage() {
  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const emirate = formData.get("emirate") as string;
    const businessType = formData.get("businessType") as string;
    const products = formData.get("products") as string;
    const message = formData.get("message") as string;

    const text = `Hi Malabar Bakery, I would like to enquire about becoming a business customer.%0A%0A*Name:* ${name}%0A*Company Name:* ${company}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Emirate:* ${emirate}%0A*Business Type:* ${businessType}%0A*Products Interested In:* ${products}%0A%0A*Message:*%0A${message}`;
    const whatsappUrl = `https://wa.me/${companyData.whatsapp}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const businessTypes = [
    "Supermarket",
    "Grocery",
    "Restaurant",
    "Cafeteria",
    "Hotel",
    "Catering",
    "Distributor",
    "Corporate",
    "Other"
  ];

  return (
    <div className="relative pt-[92px] bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-6 font-semibold">
              B2B / Wholesale
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8">
              Made for Your Business.
            </h1>
            <p className="text-brand-text/80 text-lg font-light leading-relaxed mb-8 max-w-md">
              Malabar Bakery supplies products for:
            </p>
            
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-brand-text font-medium mb-12">
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Supermarkets</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Hypermarkets</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Groceries</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Restaurants</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Cafeterias</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Hotels</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Catering companies</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Food-service companies</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Distributors</li>
              <li className="flex items-center gap-2"><span className="text-brand-gold">•</span> Corporate customers</li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#enquiry-form" className="w-full sm:w-auto text-center bg-brand-dark text-brand-cream px-8 py-4 text-xs tracking-widest uppercase hover:bg-brand-primary transition-colors">
                Become a Partner
              </a>
              <a href={`mailto:${companyData.email}`} className="w-full sm:w-auto text-center border border-brand-dark text-brand-dark px-8 py-4 text-xs tracking-widest uppercase hover:bg-brand-dark hover:text-brand-cream transition-colors">
                Contact Our Sales Team
              </a>
            </div>
          </motion.div>

          <motion.div 
            id="enquiry-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-offwhite p-8 md:p-12 shadow-sm"
          >
            <h3 className="font-serif text-3xl text-brand-dark mb-8">Business Enquiry</h3>
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Company Name</label>
                  <input type="text" id="company" name="company" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="emirate" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Emirate</label>
                  <select id="emirate" name="emirate" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required>
                    <option value="">Select Emirate</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Fujairah">Fujairah</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Business Type</label>
                  <select id="businessType" name="businessType" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required>
                    <option value="">Select Type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="products" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Products Interested In</label>
                <input type="text" id="products" name="products" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" placeholder="e.g. Breads, Pastries, Snacks" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Message</label>
                <textarea id="message" name="message" rows={3} className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="Any additional details..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-brand-dark text-brand-cream py-4 text-xs tracking-[0.18em] uppercase hover:bg-brand-primary transition-colors mt-4">
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* Manufacturing Section */}
      <section className="py-20 md:py-32 bg-brand-dark text-brand-cream border-t border-brand-offwhite/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-gold mb-4 font-semibold">
            Manufacturing
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-offwhite mb-8">
            Tradition Meets Modern Production.
          </h2>
          <p className="text-brand-offwhite/80 text-lg font-light leading-relaxed max-w-3xl mx-auto mb-16">
            Our production combines experienced people, established recipes, modern equipment and structured quality systems to produce consistently at scale.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm uppercase tracking-widest text-brand-gold/80 font-medium">
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Factory</div>
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Production</div>
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Preparation</div>
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Packaging</div>
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Quality Checks</div>
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Storage</div>
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Dispatch</div>
            <div className="py-6 border border-brand-gold/20 rounded hover:bg-brand-gold/5 transition-colors">Delivery Vehicles</div>
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section className="py-20 md:py-32 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-4 font-semibold">
            Distribution
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-8">
            Serving Businesses Across the UAE.
          </h2>
          <p className="text-brand-text/80 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Our production and distribution network is designed to support reliable and regular supply to customers across the UAE.
          </p>
          <div className="w-full max-w-2xl mx-auto aspect-[16/9] bg-brand-cream border border-brand-text/10 rounded flex items-center justify-center text-brand-text/40">
            [ UAE Map / Distribution Graphic ]
          </div>
        </div>
      </section>

    </div>
  );
}
