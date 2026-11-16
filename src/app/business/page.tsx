"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";

export default function BusinessPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWhatsAppRedirect = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const emirate = formData.get("emirate") as string;
    const businessType = formData.get("businessType") as string;
    const products = formData.get("products") as string;
    const message = formData.get("message") as string;

    const text = `Hi Malabar Bakery, I would like to enquire about becoming a business customer.%0A%0A*Name:* ${name}%0A*Company Name:* ${company}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Emirate:* ${emirate}%0A*Business Type:* ${businessType}%0A*Products Interested In:* ${products}${
      message ? `%0A%0A*Message:*%0A${message}` : ""
    }`;
    const whatsappUrl = `https://wa.me/${companyData.whatsapp}?text=${text}`;

    window.open(whatsappUrl, "_blank");
    setIsSubmitting(false);
  };

  const categoriesLeft = [
    "Supermarkets",
    "Groceries",
    "Cafeterias",
    "Catering companies",
    "Distributors",
  ];

  const categoriesRight = [
    "Hypermarkets",
    "Restaurants",
    "Hotels",
    "Food-service companies",
    "Corporate customers",
  ];

  const businessTypes = [
    "Supermarket",
    "Grocery",
    "Restaurant",
    "Cafeteria",
    "Hotel",
    "Catering",
    "Distributor",
    "Corporate",
    "Other",
  ];

  return (
    <div className="relative min-h-screen bg-[#F8F1E8] text-[#35180F] selection:bg-[#B88643]/20 selection:text-[#35180F] overflow-x-hidden">
      {/* =========================================================================
          HERO SECTION with Rich Cream Curved Architecture & Snacks Visual
         ========================================================================= */}
      <section className="relative pt-[110px] md:pt-[130px] lg:pt-[140px] pb-24 md:pb-32 overflow-hidden">
        {/* Layer 1: Background Architectural Canvas with subtle wheat shadows */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/business-hero-bg.webp"
            alt="Malabar Bakery Ambient Studio"
            fill
            priority
            quality={95}
            className="object-cover object-center lg:object-bottom opacity-100"
          />
          {/* Subtle soft edge gradient transitions to prevent harsh cutoffs */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F1E8]/60 via-transparent to-[#F8F1E8]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F1E8]/20 via-transparent to-[#F8F1E8]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1340px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* ==================== LEFT COLUMN: Editorial B2B Pitch ==================== */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 xl:col-span-6 flex flex-col pt-2 lg:pt-6"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-[1.5px] bg-[#B88643]" />
                <span className="text-[11px] md:text-xs font-semibold tracking-[0.24em] uppercase text-[#B88643]">
                  B2B / WHOLESALE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-[#35180F] mb-6 font-normal">
                Made for Your <br />
                <span className="italic font-normal text-[#B88643] relative inline-block">
                  Business.
                  {/* Delicate accent golden line */}
                  <svg
                    className="absolute -bottom-2.5 left-0 w-full h-[6px] text-[#B88643]"
                    viewBox="0 0 240 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5C70 2 170 2 238 5.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Sub-description */}
              <p className="text-[#35180F]/80 text-base md:text-lg font-light leading-relaxed mt-4 mb-8 max-w-xl">
                Malabar Bakery supplies products for:
              </p>

              {/* Customer Categories (Staggered 2 columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5 mb-8 max-w-xl text-[#35180F]">
                {/* Column 1 */}
                <div className="space-y-3">
                  {categoriesLeft.map((cat, i) => (
                    <motion.div
                      key={cat}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                      className="flex items-center gap-3 text-sm md:text-[15px] font-medium group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88643] flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="tracking-wide text-[#35180F]/90 group-hover:text-[#35180F] transition-colors">
                        {cat}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  {categoriesRight.map((cat, i) => (
                    <motion.div
                      key={cat}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                      className="flex items-center gap-3 text-sm md:text-[15px] font-medium group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88643] flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="tracking-wide text-[#35180F]/90 group-hover:text-[#35180F] transition-colors">
                        {cat}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ==================== RIGHT COLUMN: Premium Business Enquiry Form ==================== */}
            <motion.div
              id="enquiry-form"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 xl:col-span-6"
            >
              <div className="relative bg-[#FBF7F2]/90 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-[28px] shadow-[0_20px_50px_rgba(53,24,15,0.08)] border border-[#EAD8C5] overflow-hidden">
                
                {/* Decorative Wheat Illustration in the Top-Right Corner */}
                <div className="absolute top-5 right-6 pointer-events-none opacity-20 text-[#B88643]">
                  <svg
                    width="70"
                    height="90"
                    viewBox="0 0 60 80"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M30 75 V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    {/* Wheat Kernels */}
                    <path d="M30 20 C22 17 20 10 26 8 C30 11 31 16 30 20 Z" />
                    <path d="M30 20 C38 17 40 10 34 8 C30 11 29 16 30 20 Z" />
                    <path d="M30 32 C21 28 19 20 25 18 C30 21 31 27 30 32 Z" />
                    <path d="M30 32 C39 28 41 20 35 18 C30 21 29 27 30 32 Z" />
                    <path d="M30 44 C21 40 19 32 25 30 C30 33 31 39 30 44 Z" />
                    <path d="M30 44 C39 40 41 32 35 30 C30 33 29 39 30 44 Z" />
                    <path d="M30 56 C22 52 20 44 26 42 C30 45 31 51 30 56 Z" />
                    <path d="M30 56 C38 52 40 44 34 42 C30 45 29 51 30 56 Z" />
                  </svg>
                </div>

                {/* Form Heading */}
                <div className="relative mb-8">
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#35180F] font-normal tracking-tight">
                    Business Enquiry
                  </h2>
                  <p className="text-xs tracking-wider uppercase text-[#B88643] font-semibold mt-1">
                    Direct Wholesale & Commercial Supply
                  </p>
                </div>

                {/* The Business Enquiry Form */}
                <form onSubmit={handleWhatsAppRedirect} className="space-y-5">
                  {/* Row 1: Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                      >
                        Name <span className="text-[#B88643]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-3 text-sm text-[#35180F] placeholder-[#35180F]/35 focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                      >
                        Company Name <span className="text-[#B88643]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company name"
                        className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-3 text-sm text-[#35180F] placeholder-[#35180F]/35 focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                      >
                        Phone <span className="text-[#B88643]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+971 50 000 0000"
                        className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-3 text-sm text-[#35180F] placeholder-[#35180F]/35 focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                      >
                        Email <span className="text-[#B88643]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@company.com"
                        className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-3 text-sm text-[#35180F] placeholder-[#35180F]/35 focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 3: Emirate & Business Type Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="emirate"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                      >
                        Emirate <span className="text-[#B88643]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="emirate"
                          name="emirate"
                          className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-3 text-sm text-[#35180F] focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all appearance-none cursor-pointer"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>Select Emirate</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Sharjah">Sharjah</option>
                          <option value="Ajman">Ajman</option>
                          <option value="Umm Al Quwain">Umm Al Quwain</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#35180F]/50 text-xs">
                          ▼
                        </span>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="businessType"
                        className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                      >
                        Business Type <span className="text-[#B88643]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="businessType"
                          name="businessType"
                          className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-3 text-sm text-[#35180F] focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all appearance-none cursor-pointer"
                          required
                          defaultValue=""
                        >
                          <option value="" disabled>Select Type</option>
                          {businessTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#35180F]/50 text-xs">
                          ▼
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Products Interested In */}
                  <div>
                    <label
                      htmlFor="products"
                      className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                    >
                      Products Interested In <span className="text-[#B88643]">*</span>
                    </label>
                    <input
                      type="text"
                      id="products"
                      name="products"
                      placeholder="e.g. Breads, Pastries, Snacks"
                      className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-3 text-sm text-[#35180F] placeholder-[#35180F]/35 focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all"
                      required
                    />
                  </div>

                  {/* Row 5: Message (Optional) */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] uppercase tracking-[0.16em] text-[#35180F]/70 font-semibold mb-2"
                    >
                      Additional Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      className="w-full bg-[#F4EBE0]/60 border border-[#E0D0BE] rounded-xl px-4 py-2.5 text-sm text-[#35180F] placeholder-[#35180F]/35 focus:outline-none focus:border-[#B88643] focus:bg-[#FFFDF9] transition-all resize-none"
                      placeholder="Estimated volumes, delivery frequencies..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="w-full bg-[#35180F] text-[#F8F1E8] py-4 rounded-xl text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#4E2417] transition-all shadow-lg shadow-[#35180F]/20 flex items-center justify-center gap-3 mt-4"
                  >
                    <span>Send Enquiry</span>
                    <span className="text-base leading-none">→</span>
                  </motion.button>
                </form>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          MANUFACTURING & PRODUCTION CAPABILITIES SECTION
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#35180F] text-[#F8F1E8] relative overflow-hidden">
        {/* Subtle background ambient grain / glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#4E2417]/50 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#B88643]" />
            <p className="text-xs tracking-[0.22em] uppercase text-[#B88643] font-semibold">
              Manufacturing & Excellence
            </p>
            <span className="w-5 h-[1px] bg-[#B88643]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F8F1E8] mb-6 font-normal">
            Tradition Meets Modern Production.
          </h2>
          <p className="text-[#EAD8C5]/80 text-base md:text-lg font-light leading-relaxed max-w-3xl mx-auto mb-16">
            Our production combines experienced master bakers, time-tested Malabar & Arabian recipes, high-capacity modern equipment, and structured hygiene control systems to deliver consistent perfection at commercial scale.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 text-xs sm:text-sm uppercase tracking-[0.16em] text-[#EAD8C5] font-medium">
            {[
              "Automated Facility",
              "Production & Scaling",
              "Dough Preparation",
              "Hygienic Packaging",
              "Quality Checks",
              "Cold & Dry Storage",
              "Prompt Dispatch",
              "Refrigerated Fleet",
            ].map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="py-6 px-4 bg-white/[0.03] border border-[#B88643]/20 rounded-2xl hover:bg-[#B88643]/10 hover:border-[#B88643]/40 transition-all flex items-center justify-center text-center shadow-sm"
              >
                {step}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISTRIBUTION & REACH SECTION
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#FBF7F2] border-t border-[#EAD8C5]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-5 h-[1px] bg-[#B88643]" />
            <p className="text-xs tracking-[0.22em] uppercase text-[#B88643] font-semibold">
              Daily Distribution
            </p>
            <span className="w-5 h-[1px] bg-[#B88643]" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#35180F] mb-6 font-normal">
            Serving Businesses Across the UAE.
          </h2>
          <p className="text-[#35180F]/75 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-14">
            Our daily logistics routes guarantee that fresh breads, savouries, puffs, pastries, and snacks arrive at your stores and kitchens on time, every single morning.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
            {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Umm Al Quwain", "Ras Al Khaimah", "Fujairah"].map((emirate) => (
              <div
                key={emirate}
                className="p-4 rounded-xl bg-white/70 border border-[#E0D0BE] text-center shadow-sm"
              >
                <div className="text-[#B88643] text-sm font-semibold mb-1">✓</div>
                <div className="text-xs font-semibold tracking-wider uppercase text-[#35180F]">
                  {emirate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}