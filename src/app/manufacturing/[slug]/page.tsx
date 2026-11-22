import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { manufacturingSections } from "@/data/manufacturing";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  PhoneCall,
  Mail,
  Truck,
  Award
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return manufacturingSections.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = manufacturingSections.find((item) => item.slug === slug);
  if (!section) return { title: "Operations | Malabar Bakery" };

  return {
    title: `${section.title} | Malabar Bakery Manufacturing & Operations`,
    description: section.tagline,
  };
}

export default async function ManufacturingDetailPage({ params }: Props) {
  const { slug } = await params;
  const section = manufacturingSections.find((item) => item.slug === slug);

  if (!section) {
    notFound();
  }

  // Find index and next/previous section for cohesive navigation
  const currentIndex = manufacturingSections.findIndex((s) => s.slug === slug);
  const prevSection = manufacturingSections[(currentIndex - 1 + manufacturingSections.length) % manufacturingSections.length];
  const nextSection = manufacturingSections[(currentIndex + 1) % manufacturingSections.length];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#35180F] selection:bg-[#B88643]/20 selection:text-[#35180F]">
      
      {/* =========================================================================
          HERO SECTION: Page title, Tagline, Breadcrumb & Cinematic Photography
         ========================================================================= */}
      <section className="relative pt-[130px] md:pt-[150px] pb-20 md:pb-28 bg-[#35180F] text-[#F8F1E8] overflow-hidden">
        {/* Ambient Warm Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#542818]/60 via-transparent to-transparent pointer-events-none" />
        
        {/* Soft Background Watermark Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#B88643_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#EAD8C5]/70 mb-8">
            <Link href="/" className="hover:text-[#B88643] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/business" className="hover:text-[#B88643] transition-colors">Business</Link>
            <span>/</span>
            <span className="text-[#B88643] font-medium">{section.badge}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-8 h-[1.5px] bg-[#B88643]" />
                <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[#B88643]">
                  Manufacturing & Operations
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] leading-[1.08] text-[#F8F1E8] mb-6 font-normal">
                {section.title}
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#E5C158] font-light mb-6">
                "{section.tagline}"
              </p>

              <p className="text-sm sm:text-base text-[#EAD8C5]/85 font-light leading-relaxed mb-8 max-w-2xl">
                {section.subtitle}
              </p>

              {/* Quick Spec Highlights */}
              {section.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#B88643]/20">
                  {section.stats.map((stat) => (
                    <div key={stat.label} className="p-3 bg-white/[0.04] border border-[#B88643]/20 rounded-xl">
                      <div className="text-base sm:text-lg font-serif text-[#F8F1E8] font-medium">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] tracking-wider uppercase text-[#EAD8C5]/60 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border border-[#B88643]/30 group">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#35180F]/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#35180F]/90 backdrop-blur-md py-2.5 px-4 rounded-xl border border-[#B88643]/30 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#EAD8C5]">
                    {section.badge}
                  </span>
                  <span className="text-[11px] font-serif italic text-[#B88643]">
                    Malabar Operations
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED OVERVIEW & OPERATIONAL CAPABILITIES
         ========================================================================= */}
      <section className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left: In-Depth Operational Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B88643] block mb-3">
                  Overview & Execution
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#35180F] font-normal leading-tight">
                  Excellence Built on Consistency & Standards
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#35180F]/80 font-light leading-relaxed">
                {section.intro.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Our Commitment Callout Box */}
              <div className="relative bg-[#F4EBE0]/80 border-l-4 border-[#B88643] p-6 sm:p-8 rounded-r-2xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88643]">
                  <Sparkles size={14} className="text-[#B88643]" />
                  <span>Our Commitment</span>
                </div>
                <p className="font-serif italic text-lg sm:text-xl text-[#35180F] leading-snug">
                  "{section.commitment}"
                </p>
              </div>

              {/* Six Emirates Distribution Highlight (If Fleet) */}
              {section.reach && (
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#B88643]">
                    <Truck size={16} />
                    <span>Distribution Reach Across the UAE</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {section.reach.map((place) => (
                      <div 
                        key={place}
                        className="py-3 px-4 bg-white rounded-xl border border-[#E0D0BE] text-center text-xs font-bold tracking-[0.14em] uppercase text-[#35180F] shadow-sm"
                      >
                        {place}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Operational Priorities / Strengths Checklist */}
            <div className="lg:col-span-5">
              <div className="bg-[#FFFDF9] rounded-2xl p-8 sm:p-10 shadow-[0_12px_40px_rgba(53,24,15,0.06)] border border-[#EAD8C5] sticky top-28">
                
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAD8C5]">
                  <div className="w-10 h-10 rounded-full bg-[#B88643]/15 flex items-center justify-center text-[#B88643]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#35180F]">
                      {section.prioritiesTitle}
                    </h3>
                    <p className="text-[11px] uppercase tracking-wider text-[#B88643] font-semibold">
                      Key Capabilities & Practices
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {section.priorities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-[15px] text-[#35180F]/85 leading-relaxed font-normal">
                      <CheckCircle2 size={18} className="text-[#B88643] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct CTA */}
                <div className="mt-8 pt-6 border-t border-[#EAD8C5]">
                  <Link
                    href="/business#enquiry-form"
                    className="w-full bg-[#35180F] text-[#F8F1E8] py-3.5 px-6 rounded-xl text-xs tracking-[0.18em] uppercase font-semibold hover:bg-[#542818] transition-all flex items-center justify-center gap-2 group shadow-md"
                  >
                    <span>Request Partnership</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          ALL EIGHT MANUFACTURING CAPABILITIES (Interactive Switcher Grid)
         ========================================================================= */}
      <section className="py-20 bg-[#F4EBE0]/60 border-t border-[#EAD8C5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.24em] uppercase text-[#B88643] block mb-2">
              Explore Operations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#35180F] font-normal">
              Eight Pillars of Our Manufacturing
            </h2>
            <p className="text-sm sm:text-base text-[#35180F]/70 font-light mt-3">
              Learn how each operational stage coordinates to deliver premium bakery excellence every day.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5">
            {manufacturingSections.map((item) => {
              const isActive = item.slug === section.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/manufacturing/${item.slug}`}
                  className={`relative p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between group text-left ${
                    isActive
                      ? "bg-[#35180F] text-[#F8F1E8] shadow-lg scale-[1.02] border-2 border-[#B88643]"
                      : "bg-[#FFFDF9] text-[#35180F] hover:bg-[#FFFDF9] hover:border-[#B88643]/60 hover:shadow-md border border-[#E0D0BE]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] tracking-widest uppercase font-semibold px-2 py-0.5 rounded-full ${
                        isActive ? "bg-[#B88643] text-white" : "bg-[#F4EBE0] text-[#B88643] group-hover:bg-[#B88643] group-hover:text-white transition-colors"
                      }`}>
                        {item.slug === "automated-facility" ? "01" : 
                         item.slug === "production-scaling" ? "02" :
                         item.slug === "dough-preparation" ? "03" :
                         item.slug === "hygienic-packaging" ? "04" :
                         item.slug === "quality-checks" ? "05" :
                         item.slug === "cold-dry-storage" ? "06" :
                         item.slug === "prompt-dispatch" ? "07" : "08"}
                      </span>
                      <ArrowRight size={14} className={`transition-transform duration-300 group-hover:translate-x-1 ${
                        isActive ? "text-[#E5C158]" : "text-[#B88643]/70 group-hover:text-[#B88643]"
                      }`} />
                    </div>
                    <h4 className="font-serif text-lg leading-snug mb-1 font-normal">
                      {item.badge}
                    </h4>
                    <p className={`text-xs line-clamp-2 ${isActive ? "text-[#EAD8C5]/80" : "text-[#35180F]/65"}`}>
                      {item.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Previous / Next Flow Bar */}
          <div className="mt-12 pt-8 border-t border-[#E0D0BE] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/manufacturing/${prevSection.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#35180F]/80 hover:text-[#B88643] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Previous: {prevSection.badge}</span>
            </Link>

            <Link
              href="/business"
              className="text-xs uppercase tracking-[0.2em] font-medium text-[#B88643] hover:underline"
            >
              Back to Business Overview
            </Link>

            <Link
              href={`/manufacturing/${nextSection.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#35180F]/80 hover:text-[#B88643] transition-colors"
            >
              <span>Next: {nextSection.badge}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FINAL PARTNERSHIP CTA
         ========================================================================= */}
      <section className="py-20 bg-[#35180F] text-[#F8F1E8] text-center relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-[0.22em] uppercase text-[#B88643] font-semibold mb-3">
            Partner With Malabar Bakery
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F8F1E8] mb-6 font-normal">
            Ready to Supply Your Foodservice Business?
          </h2>
          <p className="text-[#EAD8C5]/80 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            From supermarkets and cafeterias to hotels and corporate catering, our daily supply network is engineered to keep your shelves and kitchens fresh.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/business#enquiry-form"
              className="w-full sm:w-auto bg-[#B88643] text-white py-4 px-8 rounded-full text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#966b30] transition-colors shadow-lg"
            >
              Submit Business Enquiry
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto border border-[#EAD8C5]/40 text-[#F8F1E8] py-4 px-8 rounded-full text-xs uppercase tracking-[0.18em] font-medium hover:bg-white/10 transition-colors"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

