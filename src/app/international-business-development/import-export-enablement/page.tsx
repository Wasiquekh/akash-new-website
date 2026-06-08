import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  FaArrowRight,
  FaCircleCheck,
  FaFileSignature,
  FaCertificate,
  FaIdCard,
  FaChartLine,
  FaHandshake,
  FaGlobe,
  FaBoxesStacked,
  FaStore,
  FaClipboardCheck,
  FaRocket,
  FaShieldHalved,
  FaNetworkWired,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Import Export Enablement Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides import-export enablement services in India, including certification, licensing, product sales strategy, franchise programs, export readiness, and global business expansion support.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/international-business-development/import-export-enablement",
  },
};

const deliverables = [
  "Import-export business planning",
  "Export readiness assessment",
  "Product certification guidance",
  "Licensing and compliance support",
  "Trade documentation guidance",
  "Product sales strategy",
  "Distributor and buyer development support",
  "Franchise program planning",
  "Market entry consulting",
  "International product positioning",
  "Pricing and channel strategy",
  "Vendor, buyer, and supplier coordination",
  "Government scheme and export benefit guidance",
  "Support for domestic and international business expansion",
];

const certificationPoints = [
  "Product-specific certification requirements",
  "Export certification planning",
  "Quality and compliance documentation",
  "Industry-specific certification guidance",
  "Country-wise certification requirements",
  "Buyer-required certification preparation",
  "Regulatory documentation support",
  "Product testing and compliance coordination",
  "Certification planning for international markets",
];

const licensingPoints = [
  "Import-export license guidance",
  "Product category licensing support",
  "Business registration and compliance planning",
  "Trade license guidance",
  "Regulatory approval support",
  "Documentation checklist preparation",
  "Government compliance guidance",
  "Export business setup support",
  "Licensing requirement analysis for target markets",
];

const salesPoints = [
  "Product positioning strategy",
  "Market demand analysis",
  "Sales channel planning",
  "Distributor and dealer development support",
  "International buyer development guidance",
  "Pricing strategy for export markets",
  "Product presentation and business profile improvement",
  "B2B sales strategy",
  "Lead generation and buyer communication support",
  "Sales expansion planning for new markets",
];

const franchisePoints = [
  "Franchise business model planning",
  "Franchise partner requirement planning",
  "Territory and market strategy",
  "Franchise documentation guidance",
  "Brand and operational standard planning",
  "Franchise sales strategy",
  "Franchise pricing and commercial structure support",
  "Partner onboarding process planning",
  "Domestic and international franchise expansion support",
];

const benefits = [
  {
    title: "Better Export Readiness",
    description:
      "We help businesses understand whether their product, documentation, certification, pricing, packaging, and sales approach are ready for international markets. This improves the chances of successful export business.",
  },
  {
    title: "Reduced Compliance Risk",
    description:
      "Import-export activities involve many rules and documents. Proper guidance helps businesses avoid compliance errors, licensing issues, documentation mistakes, and unnecessary delays.",
  },
  {
    title: "Stronger Product Credibility",
    description:
      "Certifications and proper documentation improve buyer confidence. When your product meets required standards, it becomes easier to approach distributors, buyers, and international partners.",
  },
  {
    title: "Improved Market Entry Strategy",
    description:
      "Entering a new country without planning can be risky. AS Business Consulting helps businesses understand target markets, product demand, pricing, competition, and sales channels before expansion.",
  },
  {
    title: "Better Sales Opportunities",
    description:
      "Our product sales support helps businesses identify better sales channels, connect with potential buyers, and position their products more professionally in domestic and international markets.",
  },
  {
    title: "Scalable Franchise Growth",
    description:
      "A structured franchise program helps businesses grow through partners while maintaining brand control and service quality. This creates scalable expansion opportunities.",
  },
  {
    title: "Cost and Time Saving",
    description:
      "With proper planning, businesses can avoid unnecessary mistakes, wrong documentation, poor vendor selection, and weak market entry decisions. This saves both time and money.",
  },
  {
    title: "Stronger Global Expansion Foundation",
    description:
      "Import-export enablement prepares your business for long-term growth by improving compliance, product readiness, business documentation, sales planning, and international market strategy.",
  },
];

const applications = [
  "Manufacturers planning to export products",
  "Traders entering import-export business",
  "Startups launching products in new markets",
  "Businesses looking for international buyers",
  "Companies needing certification and licensing support",
  "Product-based businesses planning global expansion",
  "Franchise businesses looking for partner-based growth",
  "Exporters needing better sales and documentation planning",
  "Importers looking for reliable supplier and compliance support",
  "Businesses planning distributor or dealer networks",
  "Brands planning domestic or international franchise expansion",
  "Companies preparing product sales strategies for new regions",
];

const steps = [
  {
    title: "Business and Product Assessment",
    description:
      "We study your business type, product category, current market, target customers, production capacity, pricing, documentation, and expansion goals.",
  },
  {
    title: "Import–Export Readiness Check",
    description:
      "We check whether your business is ready for import-export activity. This includes reviewing documents, certifications, licenses, packaging, product standards, pricing, and market suitability.",
  },
  {
    title: "Certification and Licensing Guidance",
    description:
      "We identify the certifications, approvals, and licenses that may be required for your product or service. We also guide you on documentation and process planning.",
  },
  {
    title: "Market and Sales Strategy Planning",
    description:
      "We help you understand target markets, buyer segments, sales channels, competition, pricing strategy, and product positioning.",
  },
  {
    title: "Product Sales and Channel Development",
    description:
      "We support your business in creating a product sales plan for distributors, dealers, buyers, franchise partners, and international business networks.",
  },
  {
    title: "Franchise Program Planning",
    description:
      "If your business wants to expand through franchise partners, we help you create a structured franchise model with proper partner selection, commercial planning, and operational guidelines.",
  },
  {
    title: "Growth Execution Support",
    description:
      "We guide your business in implementing the import-export strategy, improving documentation, approaching markets, developing partnerships, and expanding business opportunities.",
  },
];

const whyChoose = [
  {
    title: "Complete Import–Export Guidance",
    description:
      "We support businesses from basic export readiness to certification, licensing, product sales, and franchise development. This makes the process simpler and more organized.",
  },
  {
    title: "Practical Business Approach",
    description:
      "Our consulting is based on real business requirements. We do not provide generic advice. We understand your product, target market, and business goals before recommending a strategy.",
  },
  {
    title: "Strong Focus on Compliance",
    description:
      "Import-export business requires proper documentation and compliance. We help businesses reduce mistakes and prepare their documents, certifications, and licenses more effectively.",
  },
  {
    title: "Sales and Growth-Oriented Strategy",
    description:
      "We do not only focus on documentation. We also help businesses build product sales strategies, buyer development plans, distributor channels, and franchise growth models.",
  },
  {
    title: "Suitable for Indian Businesses",
    description:
      "Our services are designed especially for Indian manufacturers, traders, exporters, importers, startups, and businesses planning international expansion.",
  },
  {
    title: "End-to-End Expansion Support",
    description:
      "From certification and licensing to product sales and franchise programs, AS Business Consulting provides complete support to help businesses grow in new markets.",
  },
];

const deliverableIcons = [
  FaFileSignature,
  FaClipboardCheck,
  FaCertificate,
  FaIdCard,
  FaFileSignature,
  FaChartLine,
  FaHandshake,
  FaStore,
  FaGlobe,
  FaBoxesStacked,
  FaNetworkWired,
  FaHandshake,
  FaShieldHalved,
  FaRocket,
];

const SectionTitle = ({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) => {
  return (
    <div className="mb-10">
      <p
        className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] ${
          light ? "text-[#f3d6f6]" : "text-[#502D52]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`text-3xl font-bold leading-tight md:text-4xl ${
          light ? "text-white" : "text-[#211827]"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-4 max-w-3xl leading-7 ${
            light ? "text-white/75" : "text-gray-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
};

const SmallCheckList = ({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-2">
          <FaCircleCheck
            className={`mt-1 text-sm ${
              dark ? "text-[#f3d6f6]" : "text-[#502D52]"
            }`}
          />
          <p
            className={`text-sm leading-6 ${
              dark ? "text-white/75" : "text-gray-600"
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-import-export-enablement-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.asbconsulting.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Our Services",
                item: "https://www.asbconsulting.in/our-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Import–Export Enablement Services",
                item: "https://www.asbconsulting.in/research&development/import-export-enablement",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-import-export-enablement-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/import-export-enablement#webpage",
            url: "https://www.asbconsulting.in/research&development/import-export-enablement",
            name: "Import–Export Enablement Services for Global Business Growth",
            description:
              "AS Business Consulting provides complete Import–Export Enablement Services including certification, licensing, product sales strategy, franchise program planning, export readiness, and global expansion support.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.asbconsulting.in/#website",
              url: "https://www.asbconsulting.in/",
              name: "AS Business Consulting",
            },
          }),
        }}
      />

      <Header />

      <main className="bg-[#fbf8fc] text-[#211827]">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[#502D52] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,#502D52_0%,#35193a_55%,#1b0d20_100%)]" />
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-[#f3d6f6]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-20 md:py-24">
            <div className="max-w-4xl">


              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Import–Export Enablement Services for Global Business Growth
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
                AS Business Consulting provides complete Import–Export
                Enablement Services to help Indian businesses enter
                international markets, manage trade requirements, obtain
                necessary certifications and licenses, build product sales
                channels, and develop franchise opportunities across domestic
                and global markets.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] transition hover:-translate-y-1"
                >
                  Contact Us <FaArrowRight />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                "Certification",
                "Licensing",
                "Product Sales",
                "Franchise Programs",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur"
                >
                  <FaCircleCheck className="mb-3 text-[#f3d6f6]" />
                  <p className="text-sm font-semibold text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[360px_1fr]">
            <aside className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#502D52]">
                Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#211827]">
                Overview of Import–Export Enablement
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Certification",
                  "Licensing",
                  "Product sales",
                  "Market entry support",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl bg-[#fbf8fc] px-4 py-3"
                  >
                    <FaCircleCheck className="text-sm text-[#502D52]" />
                    <span className="text-sm font-semibold text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec] md:p-8">
              <p className="mb-5 leading-8 text-gray-600">
                Import-export enablement means preparing a business to trade
                successfully in domestic and international markets. It includes
                all the important steps required to make a product or service
                ready for cross-border business. This may include export
                documentation, product certifications, licenses, buyer
                development, supplier coordination, customs-related preparation,
                international sales planning, distributor development, franchise
                model planning, and trade compliance support.
              </p>

              <p className="mb-5 leading-8 text-gray-600">
                AS Business Consulting helps businesses understand what is
                required before entering a new market. We review your product,
                industry, target country, business model, legal requirements,
                pricing structure, sales goals, and operational readiness. Based
                on this, we guide you with the right import-export strategy.
              </p>

              <p className="leading-8 text-gray-600">
                Our support covers certification, licensing, product sales,
                franchise programs, export readiness, international business
                development, product positioning, trade documentation,
                compliance planning, and market entry support. We help
                businesses reduce confusion, avoid wrong decisions, and move
                forward with a clear expansion plan.
              </p>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section id="services" className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="What AS Business Consulting Delivers in Import–Export Enablement"
              title="What AS Business Consulting Delivers in Import–Export Enablement"
              text="AS Business Consulting delivers end-to-end import-export support for businesses that want to sell products in new markets, expand internationally, or create scalable business channels."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {deliverables.map((item, index) => {
                const Icon = deliverableIcons[index] || FaCircleCheck;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#eaddec] bg-[#fbf8fc] p-4 transition hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#502D52] text-white">
                        <Icon className="text-lg" />
                      </div>

                      <span className="text-xs font-bold text-[#502D52]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-base font-bold leading-snug text-[#211827]">
                      {item}
                    </h3>
                  </div>
                );
              })}
            </div>

            <p className="mt-10 max-w-4xl leading-8 text-gray-600">
              Our goal is to help businesses become ready for import-export
              operations by improving their documentation, compliance, product
              presentation, sales strategy, and market approach.
            </p>
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaCertificate className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Certification Support
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Certification is one of the most important requirements in
                  import-export business. Many products cannot be sold in
                  certain markets without the required quality, safety,
                  regulatory, or industry-specific certifications.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses understand which
                  certifications are required for their product, industry, and
                  target market.
                </p>

                <SmallCheckList items={certificationPoints} />
              </article>

              <article className="rounded-3xl bg-[#502D52] p-6 text-white shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#502D52]">
                  <FaIdCard className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold">Licensing Support</h2>

                <p className="mb-5 text-sm leading-7 text-white/75">
                  Licensing is another important part of import-export
                  enablement. Businesses may require different types of licenses
                  depending on the product, industry, trade activity, and target
                  market.
                </p>

                <p className="mb-6 text-sm leading-7 text-white/75">
                  AS Business Consulting helps businesses understand licensing
                  requirements and supports them in planning the right
                  documentation process.
                </p>

                <SmallCheckList items={licensingPoints} dark />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaChartLine className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Product Sales Support
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Having a good product is not enough. To succeed in
                  import-export business, companies need a clear product sales
                  strategy.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses create a practical
                  product sales strategy for domestic and international growth.
                </p>

                <SmallCheckList items={salesPoints} />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaStore className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Franchise Program Development
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Franchise programs are a powerful way for businesses to
                  expand without opening every location or market directly.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses plan and develop
                  franchise programs for domestic and international expansion.
                </p>

                <SmallCheckList items={franchisePoints} />
              </article>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Key Benefits"
              title="Key Benefits of Import–Export Enablement Services"
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-[#eaddec] bg-[#fbf8fc] p-5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#502D52] text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#211827]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-7 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="px-5 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[380px_1fr]">
            <div>
              <SectionTitle
                eyebrow="Applications"
                title="Applications of Import–Export Enablement Services"
                text="Our import-export enablement services are useful for different types of businesses that want to enter new markets, improve trade operations, or scale through sales and franchise channels."
              />
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
              <div className="flex flex-wrap gap-3">
                {applications.map((item, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#f1e6f3] px-4 py-2 text-sm font-semibold text-[#502D52]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-600">
                Whether your business is starting import-export for the first
                time or improving an existing trade model, AS Business
                Consulting provides structured support to help you move forward
                with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#502D52] px-5 py-16 text-white">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="How AS Business Consulting Helps Your Business"
              title="How AS Business Consulting Helps Your Business"
              text="AS Business Consulting follows a practical and step-by-step process to help businesses become import-export ready. We focus on understanding your business first, then creating a clear strategy based on your product, target market, and growth goals."
              light
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#502D52]">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-white/75">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Why Choose AS Business Consulting for Import–Export Enablement?"
              title="Why Choose AS Business Consulting for Import–Export Enablement?"
              text="AS Business Consulting provides business-focused import-export consulting that connects compliance, certification, licensing, sales, and market development into one complete growth strategy."
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#eaddec]"
                >
                  <FaCircleCheck className="mb-4 text-[#502D52]" />

                  <h3 className="mb-2 text-lg font-bold text-[#211827]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CONCLUSION CTA */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#502D52] p-6 text-white md:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_240px] lg:items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f3d6f6]">
                  Conclusion
                </p>

                <h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
                  Import–Export Enablement Services for Global Business Growth
                </h2>

                <p className="mb-4 leading-8 text-white/75">
                  Import-export business can open strong growth opportunities
                  for businesses, but success requires proper planning,
                  documentation, certification, licensing, product sales
                  strategy, and market development. AS Business Consulting helps
                  businesses prepare for this journey with complete
                  import-export enablement support.
                </p>

                <p className="leading-8 text-white/75">
                  Whether you need guidance for certification, licensing,
                  product sales, franchise programs, export readiness, or
                  international market entry, AS Business Consulting provides
                  practical consulting services to help your business expand
                  confidently.
                </p>
              </div>

              <div className="lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] transition hover:-translate-y-1"
                >
                  Contact Us <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <ContactFrom />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;