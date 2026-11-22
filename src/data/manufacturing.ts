export interface ManufacturingSection {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  subtitle: string;
  intro: string[];
  image: string;
  prioritiesTitle: string;
  priorities: string[];
  commitment: string;
  stats?: { label: string; value: string }[];
  reach?: string[];
}

export const manufacturingSections: ManufacturingSection[] = [
  {
    slug: "automated-facility",
    badge: "Automated Facility",
    title: "Factory Operations",
    tagline: "Built for Quality. Designed for Scale.",
    subtitle: "Modern Food Manufacturing Facility in Jurf 2, Ajman",
    intro: [
      "Our manufacturing facility in Jurf 2, Ajman, serves as the heart of Malabar Bakery's operations.",
      "Designed to support commercial-scale food production, our facility brings together experienced personnel, manufacturing equipment, organized workflows, and food safety practices under one operational framework.",
      "We continuously work to improve productivity, maintain consistent manufacturing standards, and meet the evolving demands of the UAE foodservice industry.",
    ],
    image: "/images/manufacturing/automated-facility.webp",
    prioritiesTitle: "Our Manufacturing Strengths",
    priorities: [
      "Established manufacturing experience since 2005.",
      "Production capabilities supporting a portfolio of more than 100 products.",
      "Dedicated operational functions for preparation, production, packaging, storage, and dispatch.",
      "Experienced production teams supported by operational supervision.",
      "Focus on hygiene, food safety, consistency, and continuous improvement.",
    ],
    commitment:
      "To maintain a manufacturing environment where traditional food expertise meets efficient, quality-focused production.",
    stats: [
      { label: "Established", value: "2005" },
      { label: "Products Portfolio", value: "100+" },
      { label: "Team Members", value: "200+" },
      { label: "Facility Location", value: "Ajman, UAE" },
    ],
  },
  {
    slug: "production-scaling",
    badge: "Production & Scaling",
    title: "Commercial Production",
    tagline: "Consistency in Every Batch. Excellence in Every Product.",
    subtitle: "High-Volume Commercial Bakery & Food Manufacturing",
    intro: [
      "Production is at the core of our business.",
      "At Malabar Bakery, we combine established recipes, skilled production teams, and manufacturing processes to produce bakery and food products for commercial customers.",
      "Our production operations are structured to support high-volume demand while maintaining consistency in taste, texture, appearance, and product specifications.",
      "Our manufacturing portfolio includes a variety of bakery products, flatbreads, parottas, and other foodservice products.",
    ],
    image: "/images/manufacturing/production-scaling.webp",
    prioritiesTitle: "Our Production Priorities",
    priorities: [
      "Consistent product specifications and standardized recipes.",
      "Efficient production scheduling and resource utilization.",
      "Supervision throughout key manufacturing stages.",
      "Reduction of unnecessary waste and production losses.",
      "Continuous improvement in productivity and product quality.",
      "Reliable fulfillment of customer demand.",
    ],
    commitment:
      "To manufacture products that foodservice businesses can confidently serve to their customers every day.",
    stats: [
      { label: "Daily Output", value: "Commercial Scale" },
      { label: "Batch Consistency", value: "Standardized" },
      { label: "Categories", value: "Bakery & Savouries" },
      { label: "Quality Checks", value: "Multi-Stage" },
    ],
  },
  {
    slug: "dough-preparation",
    badge: "Dough Preparation",
    title: "Dough & Ingredient Preparation",
    tagline: "Great Products Begin with Great Preparation.",
    subtitle: "Precision Recipe Formulation & Ingredient Craftsmanship",
    intro: [
      "Every successful production process begins long before the finished product reaches the customer.",
      "At Malabar Bakery, preparation plays a critical role in achieving consistency, efficiency, and food quality.",
      "From ingredient handling and recipe measurements to dough preparation and production readiness, each stage is organized to support the manufacturing process.",
      "Careful preparation helps our teams maintain consistent product characteristics and minimize unnecessary delays during production.",
    ],
    image: "/images/manufacturing/dough-preparation.webp",
    prioritiesTitle: "Our Approach",
    priorities: [
      "Careful handling of raw materials and ingredients.",
      "Standardized ingredient measurements and recipes.",
      "Organized preparation workflows.",
      "Attention to cleanliness and food handling practices.",
      "Coordination between preparation and production teams.",
      "Focus on ingredient utilization and waste reduction.",
    ],
    commitment:
      "To ensure that quality and consistency begin with the very first stage of manufacturing.",
    stats: [
      { label: "Ingredients", value: "Premium Grade" },
      { label: "Formulas", value: "Standardized" },
      { label: "Hygiene", value: "Food-Safe Protocols" },
      { label: "Precision", value: "Digital Weighing" },
    ],
  },
  {
    slug: "hygienic-packaging",
    badge: "Hygienic Packaging",
    title: "Packaging Operations",
    tagline: "Protecting Freshness. Preserving Quality.",
    subtitle: "Modern Protective Sealing & Professional Presentation",
    intro: [
      "Packaging is more than the final stage of manufacturing. It plays an essential role in protecting our products during handling, storage, transportation, and delivery.",
      "At Malabar Bakery, we recognize that effective packaging contributes to product integrity, food safety, and customer confidence.",
      "Our packaging operations focus on suitable product presentation, careful handling, and efficient preparation for distribution.",
    ],
    image: "/images/manufacturing/hygienic-packaging.webp",
    prioritiesTitle: "Our Packaging Priorities",
    priorities: [
      "Maintaining product integrity throughout handling.",
      "Using packaging appropriate to product requirements.",
      "Supporting product identification and traceability.",
      "Maintaining hygienic packaging practices.",
      "Reducing avoidable packaging damage and product losses.",
      "Preparing products efficiently for storage and dispatch.",
    ],
    commitment:
      "To ensure products leave our facility properly packed, professionally presented, and ready for distribution.",
    stats: [
      { label: "Environment", value: "Hygienic Cleanroom" },
      { label: "Protection", value: "Freshness-Sealed" },
      { label: "Traceability", value: "Batch Coded" },
      { label: "Standards", value: "Food Grade" },
    ],
  },
  {
    slug: "quality-checks",
    badge: "Quality Checks",
    title: "Quality Assurance & Compliance",
    tagline: "Quality Is Our Responsibility. Trust Is Our Foundation.",
    subtitle: "HACCP & ISO-Aligned Food Safety Management System",
    intro: [
      "At Malabar Bakery, quality is an essential part of our manufacturing philosophy.",
      "Our approach is built around food safety awareness, established manufacturing procedures, hygiene practices, and continuous operational improvement.",
      "We recognize the responsibility that comes with supplying food products to businesses that serve customers across the UAE.",
      "Our food safety management approach incorporates HACCP principles and ISO-related quality standards.",
    ],
    image: "/images/manufacturing/quality-checks.webp",
    prioritiesTitle: "Key Quality Focus Areas",
    priorities: [
      "Raw material and ingredient quality inspection.",
      "Rigorous hygiene and sanitation practices.",
      "Product appearance, consistency, and specifications.",
      "Continuous monitoring of key manufacturing processes.",
      "Packaging integrity and product identification verification.",
      "Controlled storage and temperature handling conditions.",
      "Structured corrective action and continuous improvement.",
    ],
    commitment:
      "To build lasting customer confidence through responsible manufacturing and consistent attention to quality.",
    stats: [
      { label: "Food Safety", value: "HACCP Compliant" },
      { label: "Standards", value: "ISO-Aligned" },
      { label: "Testing", value: "Every Batch" },
      { label: "Traceability", value: "End-to-End" },
    ],
  },
  {
    slug: "cold-dry-storage",
    badge: "Cold & Dry Storage",
    title: "Storage & Inventory Management",
    tagline: "Organized Storage. Reliable Supply.",
    subtitle: "Temperature-Controlled Storage & Raw Material Management",
    intro: [
      "Effective storage management is essential to maintaining product quality and supporting uninterrupted manufacturing and distribution.",
      "At Malabar Bakery, storage activities are coordinated with production planning, inventory requirements, and customer demand.",
      "Our focus is on maintaining organized inventory handling procedures while ensuring that ingredients, packaging materials, and finished products are managed according to their respective requirements.",
    ],
    image: "/images/manufacturing/cold-storage.webp",
    prioritiesTitle: "Our Storage Priorities",
    priorities: [
      "Organized raw material and finished product storage.",
      "Appropriate handling according to cold and dry product requirements.",
      "Continuous inventory monitoring and systematic stock rotation (FIFO).",
      "Clear identification and segregation of materials.",
      "Minimization of avoidable damage and wastage.",
      "Close coordination with production and dispatch teams.",
    ],
    commitment:
      "To maintain responsible inventory management that supports product integrity, operational efficiency, and dependable supply.",
    stats: [
      { label: "Storage Types", value: "Cold & Ambient" },
      { label: "Rotation", value: "Strict FIFO" },
      { label: "Monitoring", value: "24/7 Temperature" },
      { label: "Hygiene", value: "Sanitized Zones" },
    ],
  },
  {
    slug: "prompt-dispatch",
    badge: "Prompt Dispatch",
    title: "Dispatch & Fulfillment Operations",
    tagline: "The Right Products. The Right Orders. The Right Time.",
    subtitle: "Precision Order Assembly & Synchronized Logistics",
    intro: [
      "An efficient dispatch operation connects our manufacturing facility with the businesses that depend on our products.",
      "Our dispatch activities are coordinated with production schedules, customer orders, inventory availability, and delivery requirements.",
      "We understand that timely and accurate order fulfillment is particularly important for restaurants, cafeterias, catering operations, and other commercial customers.",
    ],
    image: "/images/manufacturing/prompt-dispatch.webp",
    prioritiesTitle: "Our Dispatch Priorities",
    priorities: [
      "Accurate order preparation and multi-point verification.",
      "Coordination between production and distribution schedules.",
      "Organized handling and loading of finished products.",
      "Efficient route loading and dispatch planning.",
      "Reduction of order discrepancies and unnecessary delays.",
      "Clear communication across operational and sales departments.",
    ],
    commitment:
      "To support reliable order fulfillment and help our customers maintain uninterrupted daily operations.",
    stats: [
      { label: "Fulfillment", value: "Morning Routes" },
      { label: "Verification", value: "Zero Discrepancy" },
      { label: "Coordination", value: "Live Synced" },
      { label: "Coverage", value: "Commercial UAE" },
    ],
  },
  {
    slug: "refrigerated-fleet",
    badge: "Refrigerated Fleet",
    title: "Fleet & Distribution Logistics",
    tagline: "Connecting Our Bakery to Your Business.",
    subtitle: "35 Dedicated Delivery Vehicles Serving the UAE",
    intro: [
      "Our distribution operations are an important part of the Malabar Bakery customer experience.",
      "Through our established sales and delivery network, we support the supply requirements of restaurants, cafeterias, bakeries, catering companies, and other foodservice establishments.",
      "With a fleet of 35 dedicated sales and distribution vehicles, we ensure our bakery products reach customers efficiently, reliably, and on time, every single morning.",
      "Our delivery operations are planned to connect manufacturing output with customer requirements without unnecessary interruptions.",
    ],
    image: "/images/manufacturing/refrigerated-fleet.webp",
    prioritiesTitle: "Our Distribution Priorities",
    priorities: [
      "Planned delivery routes and reliable morning schedules.",
      "Coordination between sales, dispatch, and delivery teams.",
      "Careful handling of products during transportation.",
      "Efficient order distribution across commercial hubs.",
      "Responsive communication with business partners.",
      "Continuous improvement in delivery reliability.",
    ],
    commitment:
      "To build long-term business relationships through dependable service, responsible product handling, and consistent supply.",
    stats: [
      { label: "Fleet Size", value: "35+ Vehicles" },
      { label: "Service", value: "Daily Morning" },
      { label: "Handling", value: "Temperature Safe" },
      { label: "Emirates", value: "Across UAE" },
    ],
    reach: [
      "Dubai",
      "Sharjah",
      "Ajman",
      "Umm Al Quwain",
      "Abu Dhabi",
      "Al Ain",
    ],
  },
];

