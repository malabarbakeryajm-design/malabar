"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";

export default function CareersPage() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const position = formData.get("position") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const text = `Hi Malabar Bakery HR,%0A%0AI am interested in the ${position} position.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A%0A(I will email my CV as requested.)`;
    const whatsappUrl = `https://wa.me/${companyData.whatsapp}?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative pt-[92px] bg-transparent min-h-screen overflow-hidden">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10 mix-blend-multiply pointer-events-none" 
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-6 font-semibold">
            Careers
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8">
            Grow With Malabar Bakery.
          </h1>
          <p className="text-brand-text/80 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            We are always looking for passionate people to join our team of {companyData.stats.employees} dedicated professionals.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand-cream p-8 md:p-12 text-left shadow-sm max-w-2xl mx-auto"
        >
          <h3 className="font-serif text-3xl text-brand-dark mb-4">Apply Now</h3>
          <p className="text-brand-text/70 mb-8 text-sm">Please fill out the form below. For your CV, please email it directly to {companyData.email} with your name in the subject line.</p>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required />
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

            <div>
              <label htmlFor="position" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Position Interested In</label>
              <select id="position" name="position" className="w-full bg-transparent border-b border-brand-text/20 py-2 focus:outline-none focus:border-brand-gold transition-colors" required>
                <option value="">Select a Role</option>
                <option value="Production / Baking">Production / Baking</option>
                <option value="Packaging & QA">Packaging & Quality</option>
                <option value="Sales & Distribution">Sales & Distribution</option>
                <option value="Administration">Administration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="cv" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Upload CV</label>
              <input type="file" id="cv" name="cv" accept=".pdf,.doc,.docx" className="w-full bg-transparent py-2 text-sm text-brand-text/70 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-brand-dark file:text-brand-cream hover:file:bg-brand-primary" />
              <p className="text-xs text-brand-text/50 mt-2">Note: For now, this will just send an enquiry. Please also email your CV.</p>
            </div>
            
            <button type="submit" className="w-full bg-brand-dark text-brand-cream py-4 text-xs tracking-[0.18em] uppercase hover:bg-brand-primary transition-colors mt-4">
              Submit Application Details
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
