import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  FaArrowRight,
  FaCircleCheck,
  FaTruckFast,
  FaFileInvoice,
  FaBoxesPacking,
  FaShieldHalved,
  FaWarehouse,
  FaShip,
  FaClipboardCheck,
  FaGlobe,
  FaRoute,
  FaBoxOpen,
  FaChartLine,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Logistics & Compliance Services in India | AS Business Consulting",
description:
  "AS Business Consulting provides logistics and compliance services in India, including freight forwarding, customs clearance, transportation planning, export packing, shipment documentation, and import-export compliance support.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/international-business-development/logistics-compliance",
  },
};

const deliverables = [
  "Freight forwarding coordination",
  "Customs clearance support",
  "Domestic and international transportation planning",
  "Export packing guidance",
  "Shipment documentation support",
  "Import-export compliance guidance",
  "HS code and product classification support",
  "Duties, taxes, and trade cost planning",
  "Port, warehouse, and transporter coordination",
  "Multimodal logistics planning",
  "Buyer and supplier shipment coordination",
  "Compliance checklist preparation",
  "Export shipment process guidance",
  "Import shipment process guidance",
];

const freightPoints = [
  "Air freight, sea freight, and road freight planning",
  "Shipment route selection",
  "Freight cost comparison",
  "Coordination with freight forwarding partners",
  "Export and import shipment planning",
  "Container and cargo movement guidance",
  "Multimodal transportation support",
  "Delivery timeline planning",
  "Shipment tracking coordination",
];

const customsPoints = [
  "Import and export customs documentation guidance",
  "HS code classification support",
  "Duties and taxes guidance",
  "Customs process planning",
  "Invoice, packing list, and shipping document review",
  "Bill of lading and airway bill coordination guidance",
  "Import clearance and export clearance support",
  "Compliance checklist preparation",
  "Customs-related issue prevention",
];

const transportationPoints = [
  "Domestic transportation planning",
  "International shipment movement support",
  "Road, sea, air, and multimodal transport guidance",
  "Transporter coordination",
  "Pickup and delivery planning",
  "Route and cost optimization",
  "Warehouse-to-port movement support",
  "Port-to-destination coordination",
  "Safe goods movement planning",
];

const packingPoints = [
  "Export packing guidance",
  "Product safety and damage prevention planning",
  "Packaging material selection guidance",
  "Labeling and marking support",
  "Shipment-ready packing checklist",
  "Packing list preparation guidance",
  "Handling and storage instructions",
  "Packaging planning for fragile, heavy, or industrial goods",
];

const compliancePoints = [
  "Import-export documentation guidance",
  "Trade compliance checklist preparation",
  "Product classification support",
  "Regulatory requirement guidance",
  "Shipment document verification support",
  "Buyer and supplier documentation coordination",
  "Customs and logistics process review",
  "Compliance risk identification",
  "Import-export process improvement",
];

const benefits = [
  {
    title: "Smooth Shipment Movement",
    description:
      "AS Business Consulting helps businesses plan freight forwarding, customs clearance, transportation, and packing in a structured way. This makes shipment movement smoother from pickup to final delivery.",
  },
  {
    title: "Reduced Customs Delays",
    description:
      "Correct documents, proper product classification, and compliance planning help reduce customs clearance delays. This is especially important for businesses dealing with international buyers and time-sensitive shipments.",
  },
  {
    title: "Better Cost Control",
    description:
      "Logistics mistakes can increase costs quickly. Freight charges, storage fees, penalties, demurrage, product damage, and delays can affect profitability. We help businesses plan logistics more carefully to control unnecessary expenses.",
  },
  {
    title: "Improved Product Safety",
    description:
      "Proper packing and transportation planning reduce the risk of product damage during shipment. This improves buyer satisfaction and protects business reputation.",
  },
  {
    title: "Stronger Compliance Confidence",
    description:
      "Import-export rules can be complex. With proper compliance guidance, businesses can prepare documents correctly and reduce the risk of legal or operational problems.",
  },
  {
    title: "Better Buyer Experience",
    description:
      "Timely delivery, correct documents, safe packing, and smooth customs clearance create a better experience for buyers, distributors, and international partners.",
  },
  {
    title: "Export-Ready Operations",
    description:
      "Businesses planning global expansion need reliable logistics and compliance systems. AS Business Consulting helps companies prepare shipment processes that support long-term export growth.",
  },
];

const applications = [
  "Exporters shipping products internationally",
  "Importers bringing goods into India",
  "Manufacturers supplying domestic and global buyers",
  "Traders managing bulk product movement",
  "Product-based businesses entering new markets",
  "Industrial goods suppliers",
  "Food, textile, engineering, packaging, and consumer product businesses",
  "Companies needing customs clearance support",
  "Businesses facing shipment delays or documentation issues",
  "Startups entering import-export business",
  "Companies planning distributor or dealer supply chains",
  "Businesses requiring freight forwarding and transport coordination",
];

const steps = [
  {
    title: "Shipment Requirement Analysis",
    description:
      "We study your product type, shipment volume, delivery destination, buyer requirements, transport needs, and expected timeline.",
  },
  {
    title: "Documentation Review",
    description:
      "We help identify the documents required for freight forwarding, customs clearance, packing, transportation, and compliance.",
  },
  {
    title: "Logistics Planning",
    description:
      "We guide businesses in selecting suitable freight options, transport methods, shipment routes, packing standards, and coordination processes.",
  },
  {
    title: "Customs & Compliance Guidance",
    description:
      "We support businesses in understanding customs clearance requirements, product classification, duties, documentation, and compliance risks.",
  },
  {
    title: "Packing & Transportation Support",
    description:
      "We help businesses plan safe packing and reliable transportation to reduce product damage and delivery delays.",
  },
  {
    title: "Shipment Coordination Support",
    description:
      "We assist with coordination between different parties such as suppliers, buyers, freight forwarders, transporters, warehouses, ports, and documentation teams.",
  },
  {
    title: "Process Improvement",
    description:
      "For businesses already involved in import-export, we help review existing logistics processes and suggest improvements for better speed, cost control, and compliance.",
  },
];

const whyChoose = [
  {
    title: "End-to-End Trade Support",
    description:
      "We support businesses across freight forwarding, customs clearance, transportation, packing, documentation, and compliance planning.",
  },
  {
    title: "Practical Import–Export Knowledge",
    description:
      "Our approach is based on real business needs. We help businesses understand what is required before shipment and how to avoid common import-export mistakes.",
  },
  {
    title: "Focus on Risk Reduction",
    description:
      "Shipment delays, customs issues, wrong documentation, and poor packing can damage business reputation. We help companies reduce these risks with proper planning.",
  },
  {
    title: "Cost-Conscious Logistics Planning",
    description:
      "We help businesses evaluate logistics options and avoid unnecessary expenses caused by poor coordination, incorrect documents, or shipment delays.",
  },
  {
    title: "Support for Indian Businesses",
    description:
      "AS Business Consulting works with Indian manufacturers, exporters, importers, traders, and growing businesses that want to manage domestic and international trade more effectively.",
  },
  {
    title: "Growth-Oriented Compliance Support",
    description:
      "Our logistics and compliance services are connected with business growth. We help businesses prepare for larger shipments, new markets, better buyer relationships, and long-term global expansion.",
  },
];

const deliverableIcons = [
  FaShip,
  FaFileInvoice,
  FaTruckFast,
  FaBoxesPacking,
  FaClipboardCheck,
  FaShieldHalved,
  FaBoxOpen,
  FaChartLine,
  FaWarehouse,
  FaRoute,
  FaGlobe,
  FaClipboardCheck,
  FaTruckFast,
  FaShip,
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
        id="breadcrumb-schema-logistics-compliance-services"
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
                name: "Logistics & Compliance Services",
                item: "https://www.asbconsulting.in/research&development/logistics-compliance",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-logistics-compliance-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/logistics-compliance#webpage",
            url: "https://www.asbconsulting.in/research&development/logistics-compliance",
            name: "Logistics & Compliance Services for Smooth Import–Export Operations",
            description:
              "AS Business Consulting provides complete Logistics & Compliance Services including freight forwarding, customs clearance, transportation planning, packing guidance, shipment documentation, and import-export compliance support.",
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
                Logistics & Compliance Services for Smooth Import–Export
                Operations
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
                AS Business Consulting provides complete Logistics & Compliance
                Services to help businesses manage the movement of goods safely,
                efficiently, and legally across domestic and international
                markets.
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
                "Freight Forwarding",
                "Customs Clearance",
                "Transportation",
                "Packing & Compliance",
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
                Overview of Logistics & Compliance Support
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Freight forwarding",
                  "Customs clearance",
                  "Transportation planning",
                  "Compliance review",
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
                Logistics and compliance are two important pillars of successful
                import-export operations. Logistics ensures that goods are
                transported properly, while compliance ensures that all legal,
                customs, documentation, and regulatory requirements are
                correctly followed.
              </p>

              <p className="mb-5 leading-8 text-gray-600">
                AS Business Consulting helps businesses plan and manage their
                logistics process from start to finish. This includes freight
                forwarding support, customs clearance guidance, transportation
                planning, export packing standards, documentation preparation,
                shipment coordination, and compliance review.
              </p>

              <p className="leading-8 text-gray-600">
                We help businesses understand the correct process before goods
                are shipped. Our approach reduces confusion, improves delivery
                timelines, prevents unnecessary penalties, and ensures that
                shipments are handled professionally.
              </p>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section id="services" className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="What AS Business Consulting Delivers in Logistics & Compliance"
              title="What AS Business Consulting Delivers in Logistics & Compliance"
              text="AS Business Consulting delivers end-to-end support for businesses that need reliable logistics planning and compliance guidance for import-export operations."
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
              Our goal is to help businesses move products confidently while
              meeting documentation, customs, and compliance requirements.
            </p>
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaShip className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Freight Forwarding Support
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Freight forwarding is one of the most important parts of
                  import-export logistics. It involves planning the movement of
                  goods through air, sea, road, or multimodal transport.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses coordinate freight
                  forwarding requirements based on shipment size, destination,
                  product type, delivery timeline, and budget.
                </p>

                <SmallCheckList items={freightPoints} />
              </article>

              <article className="rounded-3xl bg-[#502D52] p-6 text-white shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#502D52]">
                  <FaFileInvoice className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold">
                  Customs Clearance Support
                </h2>

                <p className="mb-5 text-sm leading-7 text-white/75">
                  Customs clearance is a critical step in import-export
                  business. Every shipment must follow customs rules,
                  documentation requirements, duty structures, product
                  classification, and government regulations.
                </p>

                <p className="mb-6 text-sm leading-7 text-white/75">
                  AS Business Consulting helps businesses understand and prepare
                  for customs clearance requirements.
                </p>

                <SmallCheckList items={customsPoints} dark />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaTruckFast className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Transportation Planning
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Transportation plays a major role in the safe and timely
                  movement of goods. Poor transportation planning can lead to
                  product damage, delivery delays, high costs, and customer
                  dissatisfaction.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses plan transportation
                  for domestic and international trade operations.
                </p>

                <SmallCheckList items={transportationPoints} />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaBoxesPacking className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Export Packing & Product Safety
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Packing is not just about covering the product. In logistics,
                  packing protects the product during handling, storage, loading,
                  unloading, transportation, and international shipment.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses understand proper
                  packing requirements for domestic and export shipments.
                </p>

                <SmallCheckList items={packingPoints} />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec] lg:col-span-2">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaShieldHalved className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Compliance Management for Import–Export Business
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Compliance is one of the most sensitive parts of international
                  trade. Every country has rules related to product
                  classification, documentation, duties, licenses, packaging,
                  labeling, customs procedures, and trade restrictions.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses manage compliance
                  requirements before shipment. We guide companies in preparing
                  the right documents, understanding product-specific rules, and
                  following trade procedures correctly.
                </p>

                <SmallCheckList items={compliancePoints} />
              </article>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Key Benefits"
              title="Key Benefits of Logistics & Compliance Services"
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
                title="Applications of Logistics & Compliance Services"
                text="Our logistics and compliance services are useful for businesses involved in domestic trade, international trade, export operations, import operations, product distribution, manufacturing, and supply chain movement."
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
                AS Business Consulting helps these businesses create a more
                reliable logistics process and reduce mistakes in shipment
                execution.
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
              text="AS Business Consulting follows a practical approach to logistics and compliance support. We first understand your product, shipment type, destination, buyer requirements, documentation status, and business goals."
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
              eyebrow="Why Choose AS Business Consulting for Logistics & Compliance?"
              title="Why Choose AS Business Consulting for Logistics & Compliance?"
              text="Choosing the right consulting partner for logistics and compliance can save your business from costly mistakes, delays, and operational confusion."
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
                  Logistics & Compliance Services for Smooth Import–Export
                  Operations
                </h2>

                <p className="mb-4 leading-8 text-white/75">
                  Logistics and compliance are essential for successful
                  import-export business. Without proper freight forwarding,
                  customs clearance, transportation, packing, and documentation,
                  even a good product can face delays, damage, or rejection in
                  the market.
                </p>

                <p className="leading-8 text-white/75">
                  With AS Business Consulting, your business can reduce shipment
                  risks, improve delivery performance, maintain compliance, and
                  move confidently toward domestic and international business
                  growth.
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