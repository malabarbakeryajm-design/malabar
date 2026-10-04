"use client";

import { companyData } from "@/data/company";

export default function ContactPage() {
  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const text = `Hi Malabar Bakery!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A%0A*Message:*%0A${message}`;
    const whatsappUrl = `https://wa.me/971505330247?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="relative pt-[92px] bg-brand-cream min-h-screen overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply" 
        style={{ backgroundImage: "url('/images/contact/contact-bg.webp')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-brand-cream via-transparent to-brand-cream opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-brand-secondary mb-6 font-semibold">
              Let's Connect
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8">
              Get in Touch
            </h1>
            <p className="text-brand-text/80 text-lg font-light leading-relaxed mb-12 max-w-md">
              We would love to hear from you. Talk to our team about products, partnerships or general enquiries.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">Location</h3>
                <p className="text-brand-text/80 font-light">{companyData.address}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">Email</h3>
                <a href={`mailto:${companyData.email}`} className="text-brand-text/80 font-light hover:text-brand-gold transition-colors">
                  {companyData.email}
                </a>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">WhatsApp / Phone</h3>
                <a href={`https://wa.me/971505330247`} target="_blank" rel="noopener noreferrer" className="text-brand-text/80 font-light hover:text-brand-gold transition-colors">
                  {companyData.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-brand-offwhite p-8 md:p-12 shadow-sm">
            <h3 className="font-serif text-3xl text-brand-dark mb-8">Send a Message</h3>
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="w-full bg-transparent border-b border-brand-text/20 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full bg-transparent border-b border-brand-text/20 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full bg-transparent border-b border-brand-text/20 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-brand-text mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-brand-text/20 py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-brand-dark text-brand-cream py-4 text-xs tracking-[0.18em] uppercase hover:bg-brand-primary transition-colors duration-300 mt-4"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
