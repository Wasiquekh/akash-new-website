import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  FaArrowRight,
  FaCircleCheck,
  FaGears,
  FaIndustry,
  FaGlobe,
  FaBoxesStacked,
  FaChartLine,
  FaHandshake,
  FaScrewdriverWrench,
  FaLightbulb,
  FaLayerGroup,
  FaRocket,
  FaClipboardCheck,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Technology Development Consulting Services | AS Business Consulting",
description:
  "AS Business Consulting provides technology development consulting services to help businesses adopt modern systems, set up new technology, select machines and tools, improve operations, and prepare for domestic and global business growth.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/international-business-development/development-technology",
  },
};

const deliverables = [
  "New technology identification and setup planning",
  "Machinery and tools selection support",
  "Industrial setup planning and operational guidance",
  "Business process improvement",
  "Vendor and supplier coordination",
  "International business relations support",
  "Technology partner identification",
  "Business development strategy",
  "Cost-saving and productivity improvement planning",
  "Export-ready production and process guidance",
  "Support for automation, modernization, and operational upgrades",
  "Guidance for startups, manufacturers, traders, and growing companies",
];

const setupPoints = [
  "Technology requirement analysis",
  "New setup feasibility study",
  "Cost and investment planning",
  "Technology comparison and selection",
  "Vendor and supplier evaluation",
  "Implementation planning",
  "Process integration",
  "Business growth alignment",
];

const machinePoints = [
  "Machine requirement planning",
  "Industrial tools selection",
  "Equipment comparison",
  "Vendor coordination",
  "Cost-benefit analysis",
  "Setup and installation guidance",
  "Production capacity planning",
  "Maintenance and operational planning",
  "Upgrade recommendations for existing machinery",
];

const internationalPoints = [
  "International partner identification",
  "Supplier and buyer connection support",
  "Technology collaboration guidance",
  "Distributor and franchise network planning",
  "Business communication support",
  "Market entry planning",
  "Cross-border business development strategy",
  "Global trade opportunity analysis",
  "Support for international product sales and expansion",
];

const benefits = [
  {
    title: "Improved Business Efficiency",
    description:
      "Modern technology helps businesses complete work faster, reduce dependency on manual processes, and improve overall workflow. AS Business Consulting helps companies identify areas where technology can improve productivity and reduce operational delays.",
  },
  {
    title: "Better Product Quality",
    description:
      "The right machines, tools, and processes help businesses maintain consistent product quality. This is especially important for manufacturers and exporters who need to meet buyer expectations, industry standards, and international quality requirements.",
  },
  {
    title: "Cost Saving",
    description:
      "Poor technology decisions can increase cost. Proper technology planning helps reduce waste, improve resource utilization, lower maintenance expenses, and avoid unnecessary investment. AS Business Consulting helps businesses choose cost-effective solutions that match their real business needs.",
  },
  {
    title: "Export-Ready Operations",
    description:
      "For businesses planning international expansion, technology and process standards are very important. We help companies prepare their operations for export markets by improving production systems, documentation readiness, quality planning, and business development strategy.",
  },
  {
    title: "Better Market Competitiveness",
    description:
      "Businesses that use modern systems, better tools, and efficient processes can compete more effectively. Technology development helps companies offer better products, faster delivery, improved pricing, and stronger customer value.",
  },
  {
    title: "Scalable Business Growth",
    description:
      "A business setup should not only solve today’s problems but also support future expansion. AS Business Consulting helps companies plan technology and machinery setups that can support long-term growth.",
  },
  {
    title: "Stronger International Business Opportunities",
    description:
      "Through international relations and business development support, we help businesses connect with new markets, partners, buyers, suppliers, and distributors. This creates better opportunities for global expansion.",
  },
];

const applications = [
  "Manufacturing businesses",
  "Export businesses",
  "Import-export companies",
  "Industrial product businesses",
  "Engineering companies",
  "Food processing units",
  "Packaging businesses",
  "Textile and garment businesses",
  "Machinery-based businesses",
  "Franchise businesses",
  "Product sales companies",
  "Startups planning production setup",
  "Businesses entering international markets",
  "Companies upgrading old systems",
  "Businesses looking for cost-saving solutions",
  "Companies planning automation or modernization",
];

const steps = [
  {
    title: "Business Requirement Analysis",
    description:
      "We study your current business model, products, operations, production process, market position, challenges, and growth plans. This helps us understand what type of technology support your business actually needs.",
  },
  {
    title: "Technology Gap Identification",
    description:
      "We identify gaps in your current setup, such as outdated machinery, inefficient processes, poor workflow, high cost, low productivity, quality issues, or lack of export readiness.",
  },
  {
    title: "Solution Planning",
    description:
      "Based on the analysis, we recommend suitable technology, machines, tools, setup improvements, process changes, and business development strategies.",
  },
  {
    title: "Vendor & Partner Support",
    description:
      "We help businesses evaluate vendors, suppliers, machinery providers, technology partners, and international business contacts. This helps reduce risk and improves decision-making.",
  },
  {
    title: "Implementation Guidance",
    description:
      "We guide businesses during setup planning, process alignment, machinery installation coordination, operational improvement, and business development execution.",
  },
  {
    title: "Growth & Expansion Support",
    description:
      "After technology planning, we help businesses connect the setup with larger growth goals such as export business, product sales, franchise development, international relations, and global expansion.",
  },
];

const whyChoose = [
  {
    title: "Industry-Focused Consulting",
    description:
      "We understand the needs of manufacturers, traders, exporters, importers, startups, and industrial businesses. Our consulting support is designed to solve real business problems.",
  },
  {
    title: "End-to-End Support",
    description:
      "From technology selection to machinery planning, vendor coordination, business development, and international relations, we provide complete support under one consulting approach.",
  },
  {
    title: "Cost-Effective Planning",
    description:
      "We help businesses avoid unnecessary expenses by selecting the right machines, tools, systems, and development strategies based on actual business requirements.",
  },
  {
    title: "Global Business Perspective",
    description:
      "Our technology development support is connected with international business growth. We help businesses prepare for global expansion, export opportunities, and cross-border partnerships.",
  },
  {
    title: "Practical Execution Guidance",
    description:
      "We do not only provide advice. We help businesses understand how to execute technology development plans in a practical and structured way.",
  },
  {
    title: "Customized Business Strategy",
    description:
      "Every business is different. AS Business Consulting creates technology development plans based on your industry, product, budget, target market, and future expansion goals.",
  },
];

const seoKeywords = [
  "Technology development services",
  "Technology development consulting",
  "Business setup consulting",
  "New technology setup",
  "Machinery setup consulting",
  "Machines and tools selection",
  "Industrial technology solutions",
  "Business development consulting",
  "International business development",
  "Export business consulting",
  "Global expansion consulting",
  "Manufacturing business consulting",
  "Import export business support",
  "Industrial setup consulting",
  "Business growth consulting",
  "Technology consulting services in India",
  "Export-ready business setup",
  "Process improvement consulting",
  "Vendor coordination support",
  "International relations for business",
];

const deliverableIcons = [
  FaLightbulb,
  FaScrewdriverWrench,
  FaIndustry,
  FaGears,
  FaBoxesStacked,
  FaGlobe,
  FaLayerGroup,
  FaChartLine,
  FaRocket,
  FaClipboardCheck,
  FaGears,
  FaHandshake,
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
        id="breadcrumb-schema-technology-development-services"
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
                name: "Technology Development Services",
                item: "https://www.asbconsulting.in/research&development/technology-development",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-technology-development-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/technology-development#webpage",
            url: "https://www.asbconsulting.in/research&development/technology-development",
            name: "Technology Development Services for Business Growth & Global Expansion",
            description:
              "AS Business Consulting provides complete Technology Development Services to help businesses improve operations, adopt modern systems, set up new technology, select machines and tools, and prepare for domestic and international business growth.",
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
                Technology Development Services for Business Growth & Global
                Expansion
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
                AS Business Consulting provides complete Technology Development
                Services to help businesses improve their operations, adopt
                modern systems, set up new technology, select the right machines
                and tools, and prepare for domestic as well as international
                business growth. 
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] transition hover:-translate-y-1"
                >
                  Contact Us <FaArrowRight />
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                "New Technology Setup",
                "Machines & Tools",
                "Business Development",
                "Global Expansion",
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
                Overview of Our Technology Development Support
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Business efficiency",
                  "Product quality",
                  "Production speed",
                  "Market competitiveness",
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
                Technology plays a major role in business efficiency, product
                quality, production speed, cost control, and market
                competitiveness. Many businesses want to upgrade their
                operations but do not know which technology is suitable, which
                machines to purchase, how to plan the setup, or how to connect
                technology with business expansion.
              </p>

              <p className="mb-5 leading-8 text-gray-600">
                AS Business Consulting helps businesses make the right decisions
                before investing in technology. We study your business model,
                industry, product category, production requirements, budget,
                target market, operational challenges, and growth goals. Based
                on this analysis, we recommend suitable technology solutions
                that can help your business improve performance and scale
                confidently.
              </p>

              <p className="leading-8 text-gray-600">
                Our team supports businesses in identifying modern technology,
                setting up systems, improving internal processes, sourcing
                machines and tools, building international connections, and
                developing strategies for business expansion. Whether you are
                planning a new manufacturing setup, upgrading an existing unit,
                improving operational efficiency, or preparing for export
                business, we provide practical consulting support from planning
                to execution.
              </p>
            </div>
          </div>
        </section>

        {/* DELIVERABLES - SMALL CARDS */}
        <section id="services" className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="What AS Business Consulting Delivers in Technology Development"
              title="What AS Business Consulting Delivers in Technology Development"
              text="AS Business Consulting delivers end-to-end guidance for businesses that want to build a strong technology-driven foundation. We help you choose the right setup, avoid unnecessary investment, improve production efficiency, and create a practical roadmap for business growth."
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
              We make sure that every technology decision is connected with your
              business goals. Our focus is not only on installing technology but
              also on helping your business use it effectively for growth,
              quality improvement, cost control, and market expansion.
            </p>
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaLightbulb className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  New Technology Setup
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Many businesses struggle when they want to introduce new
                  technology into their operations. They may not know whether the
                  technology is suitable, whether it is cost-effective, or
                  whether it will actually improve business performance.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  We support businesses in planning new technology setups for
                  manufacturing, processing, packaging, logistics, product
                  development, service delivery, and export operations.
                </p>

                <SmallCheckList items={setupPoints} />
              </article>

              <article className="rounded-3xl bg-[#502D52] p-6 text-white shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#502D52]">
                  <FaScrewdriverWrench className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold">
                  Machines & Tools Selection
                </h2>

                <p className="mb-5 text-sm leading-7 text-white/75">
                  Choosing the right machines and tools is one of the most
                  important decisions for any manufacturing or industrial
                  business. Wrong machinery selection can lead to high
                  maintenance costs, low productivity, poor output quality, and
                  unnecessary financial loss.
                </p>

                <p className="mb-6 text-sm leading-7 text-white/75">
                  AS Business Consulting helps businesses select suitable
                  machines, equipment, tools, and technical resources based on
                  production needs, budget, product type, scalability, and
                  long-term business goals.
                </p>

                <SmallCheckList items={machinePoints} dark />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaGlobe className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  International Relations & Business Development
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Technology development becomes more powerful when it is
                  connected with international business opportunities. AS
                  Business Consulting supports businesses in building
                  international relations with suppliers, buyers, technology
                  partners, distributors, manufacturers, consultants, and trade
                  networks.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  We help Indian businesses explore global markets, identify
                  business opportunities, connect with reliable partners, and
                  develop long-term international business relationships.
                </p>

                <SmallCheckList items={internationalPoints} />
              </article>
            </div>
          </div>
        </section>

        {/* BENEFITS COMPACT */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Key Benefits"
              title="Key Benefits of Technology Development Services"
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
                title="Applications of Technology Development Services"
                text="Our technology development consulting services can be applied across multiple industries and business models."
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
                AS Business Consulting works with businesses that want practical
                solutions, not only theoretical advice. We help companies
                understand what should be improved, what technology should be
                adopted, and how to execute the plan step by step.
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
              text="AS Business Consulting follows a structured approach to technology development. We do not suggest random machines, tools, or systems. We first understand your business and then create a practical development plan based on your goals, budget, and market requirements."
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
              eyebrow="Why Choose AS Business Consulting for Technology Development?"
              title="Why Choose AS Business Consulting for Technology Development?"
              text="AS Business Consulting provides practical, business-focused, and growth-oriented technology development support. We understand that every business has different requirements, budgets, and market goals. That is why we provide customized guidance instead of one-size-fits-all solutions."
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
                  Technology Development Services for Business Growth & Global
                  Expansion
                </h2>

                <p className="mb-4 leading-8 text-white/75">
                  Technology development is an important part of business
                  growth, operational improvement, and global expansion. With
                  the right technology, machines, tools, processes, and business
                  development strategy, companies can improve efficiency, reduce
                  cost, increase quality, and prepare for international
                  opportunities.
                </p>

                <p className="leading-8 text-white/75">
                  AS Business Consulting helps businesses make smart technology
                  decisions and build a strong foundation for long-term success.
                  Whether you want to set up new technology, upgrade machinery,
                  improve business operations, build international relations, or
                  expand into global markets, our team provides complete
                  consulting support to help your business grow with confidence.
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