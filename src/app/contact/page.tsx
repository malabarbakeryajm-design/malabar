"use client";

import Image from "next/image";
import { companyData } from "@/data/company";

export default function ContactPage() {
  const getFormData = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    return { name, email, subject, message };
  };

  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, subject, message } = getFormData(e.currentTarget);
    const text = `Hi Malabar Bakery!%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A%0A*Message:*%0A${message}`;
    const whatsappUrl = `https://wa.me/${companyData.whatsapp}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    if (!form.reportValidity()) return;

    const { name, email, subject, message } = getFormData(form);
    const mailSubject = encodeURIComponent(subject ? `${subject} - Enquiry from ${name}` : `Enquiry from ${name}`);
    const mailBody = encodeURIComponent(
      `Dear Malabar Bakery Team,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\nKind regards,\n${name}`
    );
    window.location.href = `mailto:${companyData.email}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="relative pt-[92px] bg-brand-cream min-h-screen overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/contact/contact-bg.webp"
          alt="Contact Malabar Bakery Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-transparent to-brand-cream opacity-40" />
      </div>

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
                <h3 className="font-serif text-2xl text-brand-dark mb-2">Telephone</h3>
                <a href={`tel:${companyData.telephone.replace(/\s+/g, '')}`} className="text-brand-text/80 font-light hover:text-brand-gold transition-colors">
                  {companyData.telephone}
                </a>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">Mobile / WhatsApp</h3>
                <a href={`https://wa.me/${companyData.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-brand-text/80 font-light hover:text-brand-gold transition-colors">
                  {companyData.mobile}
                </a>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">Mail</h3>
                <a href={`mailto:${companyData.email}`} className="text-brand-text/80 font-light hover:text-brand-gold transition-colors">
                  {companyData.email}
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <button 
                  type="submit"
                  className="w-full bg-[#1F7A4C] text-white py-4 px-4 text-xs tracking-[0.16em] uppercase hover:bg-[#165c38] transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-md shadow-[#1F7A4C]/15"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>WhatsApp</span>
                </button>
                <button 
                  type="button"
                  onClick={handleEmailRedirect}
                  className="w-full bg-brand-dark text-brand-cream py-4 px-4 text-xs tracking-[0.16em] uppercase hover:bg-brand-primary transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-md shadow-brand-dark/15 border border-brand-dark hover:border-brand-primary"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75-9.75-6.75" />
                  </svg>
                  <span>Send via Email</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
