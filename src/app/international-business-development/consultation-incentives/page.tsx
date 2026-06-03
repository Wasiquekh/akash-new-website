import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import {
  FaArrowRight,
  FaCircleCheck,
  FaChartLine,
  FaClipboardCheck,
  FaFileInvoice,
  FaGlobe,
  FaGraduationCap,
  FaHandshake,
  FaIndustry,
  FaLightbulb,
  FaMagnifyingGlassChart,
  FaMoneyBillTrendUp,
  FaPeopleGroup,
  FaShieldHalved,
  FaSitemap,
  FaUserTie,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Consultation & Incentives Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides consultation and incentives services in India, including cost-saving guidance, business audits, training, government scheme support, incentive advisory, and business growth consultation.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/international-business-development/consultation-incentives",
  },
};

const deliverables = [
  "Cost-saving analysis and advisory",
  "Business process audits",
  "Operational performance review",
  "Export readiness consultation",
  "Government benefits and scheme guidance",
  "Incentive identification support",
  "Documentation and compliance review",
  "Team training and business awareness sessions",
  "Process improvement recommendations",
  "Business growth planning",
  "Cost control strategy",
  "Internal system improvement guidance",
  "Advisory for manufacturers, exporters, importers, traders, and startups",
];

const costSavingPoints = [
  "Operational cost review",
  "Process waste identification",
  "Vendor and procurement cost analysis",
  "Logistics and transportation cost review",
  "Production efficiency improvement suggestions",
  "Documentation error reduction",
  "Resource utilization planning",
  "Cost control strategy",
  "Profitability improvement guidance",
  "Business expense optimization",
];

const auditPoints = [
  "Business process audit",
  "Operational workflow review",
  "Documentation audit",
  "Export readiness audit",
  "Compliance gap analysis",
  "Cost and efficiency audit",
  "Vendor and supply chain review",
  "Sales and market readiness review",
  "Internal control review",
  "Performance improvement recommendations",
];

const trainingPoints = [
  "Import-export process training",
  "Documentation and compliance training",
  "Cost-saving awareness sessions",
  "Business process training",
  "Team productivity improvement guidance",
  "Export readiness training",
  "Government scheme awareness sessions",
  "Operational improvement workshops",
  "Sales and business development training",
  "Internal process and reporting guidance",
];

const governmentSchemePoints = [
  "Government scheme awareness",
  "MSME benefit guidance",
  "Export incentive guidance",
  "Subsidy and support program identification",
  "Business eligibility review",
  "Documentation requirement guidance",
  "Industry-specific scheme guidance",
  "Training and development scheme awareness",
  "Financial assistance program guidance",
  "Growth incentive planning",
];

const incentivePoints = [
  "Export incentive guidance",
  "Market development support awareness",
  "Technology upgrade incentive guidance",
  "Certification-related support guidance",
  "Training incentive awareness",
  "Business expansion support planning",
  "Financial benefit opportunity review",
  "Government policy and scheme guidance",
  "Documentation planning for incentive support",
];

const benefits = [
  {
    title: "Better Cost Control",
    description:
      "AS Business Consulting helps businesses identify where unnecessary costs are happening and how they can be reduced through better planning, vendor management, process improvement, and operational discipline.",
  },
  {
    title: "Improved Business Efficiency",
    description:
      "Through audits and consultation, businesses can improve workflows, reduce delays, remove repeated errors, and create a smoother operating system.",
  },
  {
    title: "Stronger Compliance Readiness",
    description:
      "Proper documentation, process review, and training help businesses stay prepared for compliance requirements, audits, export readiness, and government scheme applications.",
  },
  {
    title: "Better Awareness of Government Schemes",
    description:
      "Many businesses miss government benefits simply because they are unaware of them. We help businesses understand relevant schemes and incentives that may support growth.",
  },
  {
    title: "Improved Team Performance",
    description:
      "Training helps employees understand business processes better. This reduces mistakes, improves accountability, and increases productivity.",
  },
  {
    title: "Reduced Business Risk",
    description:
      "Audits help identify problems early before they become serious. This reduces financial, operational, compliance, and documentation risks.",
  },
  {
    title: "Stronger Growth Planning",
    description:
      "Consultation helps businesses make decisions based on proper analysis instead of assumptions. This improves planning for expansion, export, technology adoption, and market development.",
  },
];

const applications = [
  "Manufacturers looking to reduce operational costs",
  "Exporters seeking export incentive guidance",
  "Importers needing compliance and process support",
  "Traders wanting better business systems",
  "Startups planning structured growth",
  "MSMEs looking for government scheme guidance",
  "Companies needing internal audits",
  "Businesses facing high expenses",
  "Teams requiring import-export training",
  "Companies preparing for certification or export readiness",
  "Product-based businesses planning expansion",
  "Businesses looking for process improvement",
  "Companies wanting better documentation and reporting systems",
];

const steps = [
  {
    title: "Business Understanding",
    description:
      "We study your business model, industry, products, operations, team structure, cost areas, documentation, and growth goals.",
  },
  {
    title: "Gap Identification",
    description:
      "We identify gaps in cost control, processes, documentation, compliance, training, productivity, and government scheme awareness.",
  },
  {
    title: "Cost Saving & Audit Review",
    description:
      "We review your current operations and suggest practical cost-saving opportunities, process improvements, and audit-based recommendations.",
  },
  {
    title: "Scheme and Incentive Mapping",
    description:
      "We help identify government benefits, schemes, or incentives that may be relevant to your business based on eligibility and business activity.",
  },
  {
    title: "Training and Awareness",
    description:
      "We support your team with practical training and guidance so they can understand processes, documentation, compliance, and business improvement methods.",
  },
  {
    title: "Implementation Guidance",
    description:
      "We guide your business in applying recommendations step by step, improving internal systems, reducing waste, and preparing for future growth.",
  },
  {
    title: "Continuous Improvement Support",
    description:
      "Businesses need regular improvement. We help companies review progress, update processes, and create better systems for long-term success.",
  },
];

const whyChoose = [
  {
    title: "Practical Business Advisory",
    description:
      "We provide recommendations that are realistic and suitable for your business stage, industry, and goals.",
  },
  {
    title: "Strong Focus on Cost Saving",
    description:
      "We help businesses identify unnecessary expenses and create better systems to improve profitability.",
  },
  {
    title: "Audit-Based Improvement",
    description:
      "Our audit and review approach helps businesses understand real problems instead of making decisions based on assumptions.",
  },
  {
    title: "Government Scheme Guidance",
    description:
      "We help businesses understand available government benefits, schemes, and incentives that may support growth, export, technology, training, or business development.",
  },
  {
    title: "Training-Oriented Support",
    description:
      "We believe business improvement is not possible without team awareness. That is why we support businesses with practical training and process guidance.",
  },
  {
    title: "Suitable for Indian Businesses",
    description:
      "Our consultation services are designed for Indian manufacturers, exporters, importers, traders, startups, MSMEs, and companies planning domestic or global expansion.",
  },
  {
    title: "End-to-End Growth Support",
    description:
      "From cost-saving and audits to training and incentive guidance, AS Business Consulting provides complete support to help businesses become more efficient and growth-ready.",
  },
];

const deliverableIcons = [
  FaMoneyBillTrendUp,
  FaMagnifyingGlassChart,
  FaChartLine,
  FaGlobe,
  FaHandshake,
  FaLightbulb,
  FaClipboardCheck,
  FaGraduationCap,
  FaSitemap,
  FaChartLine,
  FaShieldHalved,
  FaIndustry,
  FaUserTie,
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
        id="breadcrumb-schema-consultation-incentives-services"
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
                name: "Consultation & Incentives Services",
                item: "https://www.asbconsulting.in/international-business-development/consultation-incentives",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-consultation-incentives-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/international-business-development/consultation-incentives#webpage",
            url: "https://www.asbconsulting.in/international-business-development/consultation-incentives",
            name: "Consultation & Incentives Services for Business Growth, Cost Saving & Government Scheme Support",
            description:
              "AS Business Consulting provides consultation and incentives services to help businesses improve operations, reduce unnecessary costs, understand government benefits, and build stronger systems for long-term success.",
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
                Consultation & Incentives Services for Business Growth, Cost
                Saving & Government Scheme Support
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
                AS Business Consulting provides professional Consultation &
                Incentives Services to help businesses improve operations,
                reduce unnecessary costs, identify growth opportunities,
                understand government benefits, and build stronger systems for
                long-term success.
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
                "Cost Saving",
                "Business Audits",
                "Training Support",
                "Government Benefits",
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
                Overview of Consultation & Incentives Support
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  "Cost-saving guidance",
                  "Business audits",
                  "Training support",
                  "Scheme awareness",
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
                Consultation and incentives play an important role in business
                improvement. A business may be spending more than required,
                missing government benefits, following outdated processes, or
                operating without proper review systems. These issues may look
                small in daily operations, but over time they can affect profit,
                productivity, compliance, and growth.
              </p>

              <p className="mb-5 leading-8 text-gray-600">
                AS Business Consulting helps businesses identify these hidden
                gaps. We study your business operations, cost structure,
                documentation, export readiness, internal processes, team
                capability, and available government support opportunities.
              </p>

              <p className="leading-8 text-gray-600">
                Based on this analysis, we provide practical recommendations
                that can help your business reduce waste, improve efficiency,
                and use relevant incentives more effectively.
              </p>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section id="services" className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="What AS Business Consulting Delivers in Consultation & Incentives"
              title="What AS Business Consulting Delivers in Consultation & Incentives"
              text="AS Business Consulting delivers structured business consultation for companies that want to improve efficiency, reduce cost, strengthen compliance, and benefit from available government schemes."
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
              Our goal is to help businesses understand what is working, what is
              not working, where money is being wasted, and which opportunities
              can support future growth.
            </p>
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaMoneyBillTrendUp className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Cost Saving Consultation
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Cost saving is not only about reducing expenses. It is about
                  using resources wisely, improving processes, avoiding waste,
                  and making better operational decisions.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses identify cost-saving
                  opportunities across operations, sourcing, production,
                  logistics, documentation, compliance, manpower, and business
                  processes.
                </p>

                <SmallCheckList items={costSavingPoints} />
              </article>

              <article className="rounded-3xl bg-[#502D52] p-6 text-white shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#502D52]">
                  <FaMagnifyingGlassChart className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold">
                  Business Audits & Process Review
                </h2>

                <p className="mb-5 text-sm leading-7 text-white/75">
                  Regular audits help businesses understand their real
                  performance. Without proper audits, many problems remain
                  hidden until they become serious.
                </p>

                <p className="mb-6 text-sm leading-7 text-white/75">
                  AS Business Consulting provides business audit and process
                  review support to help companies improve their internal
                  systems.
                </p>

                <SmallCheckList items={auditPoints} dark />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaGraduationCap className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Training & Business Capability Development
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  A business can only grow when its team understands the right
                  processes, responsibilities, compliance requirements, and
                  business goals.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses improve team
                  capability through practical training and awareness support.
                </p>

                <SmallCheckList items={trainingPoints} />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaHandshake className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Guidance on Government Benefits & Schemes
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Many businesses are eligible for government benefits, schemes,
                  subsidies, export incentives, financial support programs,
                  training schemes, MSME benefits, and industry-specific
                  support.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses understand available
                  government benefits and schemes based on their industry,
                  business size, activity, location, and growth plan.
                </p>

                <SmallCheckList items={governmentSchemePoints} />
              </article>

              <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#eaddec] lg:col-span-2">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#502D52] text-white">
                  <FaLightbulb className="text-xl" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-[#211827]">
                  Incentive Advisory for Export & Business Growth
                </h2>

                <p className="mb-5 text-sm leading-7 text-gray-600">
                  Incentives can play an important role in helping businesses
                  grow faster. For exporters and manufacturers, different
                  incentive programs may support production, technology upgrades,
                  market development, certification, training, or international
                  trade activities.
                </p>

                <p className="mb-6 text-sm leading-7 text-gray-600">
                  AS Business Consulting helps businesses understand which
                  incentives may be relevant for their operations. We first
                  understand your business activity, documents, product
                  category, export goals, and current setup.
                </p>

                <SmallCheckList items={incentivePoints} />
              </article>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white px-5 py-16">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Key Benefits"
              title="Key Benefits of Consultation & Incentives Services"
              text="Consultation and incentive support can help businesses become more organized, cost-effective, and growth-ready."
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
                title="Applications of Consultation & Incentives Services"
                text="Our consultation and incentives services are useful for businesses that want better control, better planning, and better growth opportunities."
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
                Whether your business is small, growing, or already operating
                internationally, consultation and incentives support can help
                you improve efficiency and unlock better opportunities.
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
              text="AS Business Consulting follows a clear and practical approach to consultation and incentives. We understand your business first, identify gaps, and then provide recommendations that can be implemented realistically."
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
              eyebrow="Why Choose AS Business Consulting for Consultation & Incentives?"
              title="Why Choose AS Business Consulting for Consultation & Incentives?"
              text="AS Business Consulting provides business-focused consultation that helps companies reduce cost, improve processes, understand government benefits, and prepare for expansion."
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
                  Consultation & Incentives Services for Smarter Business Growth
                </h2>

                <p className="mb-4 leading-8 text-white/75">
                  Consultation and incentives are important for businesses that
                  want to reduce costs, improve internal systems, use available
                  government benefits, and prepare for sustainable growth.
                </p>

                <p className="leading-8 text-white/75">
                  AS Business Consulting helps businesses identify gaps, improve
                  operations, train teams, understand schemes, and create
                  practical strategies for cost saving and growth.
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