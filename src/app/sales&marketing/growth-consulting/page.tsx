import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Growth Consulting Services for Business Expansion in India | AS Business",
  description:
    "AS Business Consulting provides growth consulting services in India including market research, project reports, feasibility study, go-to-market strategy, channel planning, sales improvement, and business scaling support.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/sales&marketing/growth-consulting",
  },
};

const services = [
  {
    title: "Market Research & Opportunity Analysis",
    description:
      "We conduct structured market research to help your business understand customer demand, competitor activity, market size, pricing trends, industry gaps, and growth opportunities.",
    points: [
      "Industry research",
      "Market size analysis",
      "Customer segment study",
      "Competitor mapping",
      "Demand and supply analysis",
      "Market gap identification",
      "Location and territory potential analysis",
      "Domestic and international opportunity study",
    ],
  },
  {
    title: "Project Reports & Business Feasibility",
    description:
      "We prepare practical project reports and business cases that help companies evaluate new business ideas, expansion plans, product launches, investment decisions, and market entry opportunities.",
    points: [
      "Business concept study",
      "Feasibility assessment",
      "Market potential analysis",
      "Cost and revenue planning",
      "Investment requirement overview",
      "Operational planning",
      "Risk and challenge identification",
      "Go-live roadmap",
    ],
  },
  {
    title: "Go-To-Market Strategy",
    description:
      "A strong Go-To-Market, also known as GTM, strategy helps businesses launch products, services, or new market offerings with clear direction. We help define how your business should enter the market, reach customers, communicate value, and generate sales.",
    points: [
      "Target customer selection",
      "Product/service positioning",
      "Value proposition development",
      "Launch strategy",
      "Pricing and offer planning",
      "Sales channel selection",
      "Marketing channel planning",
      "Campaign and communication roadmap",
    ],
  },
  {
    title: "Channel Strategy & Distribution Planning",
    description:
      "We help businesses choose the right sales and distribution channels based on product type, target audience, geography, pricing, and growth goals.",
    points: [
      "Online and offline channel mapping",
      "Dealer and distributor strategy",
      "Partner and franchise planning",
      "Territory rollout planning",
      "Sales route planning",
      "Marketplace and digital channel planning",
      "Retail and B2B channel selection",
      "Channel performance improvement",
    ],
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Growth depends not only on traffic or enquiries, but also on how many prospects become paying customers. We help businesses improve conversion across websites, landing pages, campaigns, enquiry forms, sales conversations, and customer follow-ups.",
    points: [
      "Website conversion improvement",
      "Landing page review",
      "Call-to-action improvement",
      "Lead form optimization",
      "Sales pitch refinement",
      "Follow-up process improvement",
      "Offer and pricing communication",
      "Customer journey improvement",
    ],
  },
  {
    title: "Business Model & Revenue Planning",
    description:
      "We help companies evaluate and improve their business model so that growth is not only fast, but also profitable and sustainable.",
    points: [
      "Revenue stream planning",
      "Pricing model review",
      "Product and service packaging",
      "Margin analysis",
      "Customer acquisition planning",
      "Repeat revenue opportunities",
      "Upsell and cross-sell strategy",
      "Business scalability planning",
    ],
  },
  {
    title: "Sales & Marketing Alignment",
    description:
      "Many businesses struggle because marketing brings enquiries but sales does not convert them properly, or sales teams do not receive the right quality leads. We help align both functions to improve overall growth performance.",
    points: [
      "Lead qualification criteria",
      "Sales funnel structure",
      "Follow-up process",
      "Sales script and pitch support",
      "Campaign-to-sales handover process",
      "CRM and tracking suggestions",
      "Lead status reporting",
      "Performance review structure",
    ],
  },
];

const keyPoints = [
  "Data-based market research and business analysis",
  "Practical growth roadmap for new and existing businesses",
  "Go-to-market strategy for product, service, or market launch",
  "Project reports for planning, investment, and feasibility",
  "Channel strategy for online, offline, B2B, and B2C growth",
  "Conversion improvement across marketing and sales funnel",
  "Structured planning for revenue, pricing, positioning, and distribution",
  "Clear reporting, action plans, and execution support",
];

const benefits = [
  {
    title: "Clear Business Direction",
    description:
      "We help your business understand where to grow, how to grow, which market to target, and what actions should be taken first.",
  },
  {
    title: "Better Decision-Making",
    description:
      "With market research, competitor analysis, and feasibility study, your business can make decisions based on facts instead of assumptions.",
  },
  {
    title: "Stronger Market Entry",
    description:
      "A proper GTM strategy helps reduce confusion during product launch, service launch, or expansion into a new region.",
  },
  {
    title: "Improved Sales Conversion",
    description:
      "By improving your customer journey, offer, messaging, sales process, and follow-up system, your business can convert more enquiries into customers.",
  },
  {
    title: "Reduced Business Risk",
    description:
      "Project reports, feasibility studies, and market analysis help identify risks before making major investments.",
  },
  {
    title: "Better Use of Budget",
    description:
      "Growth consulting helps you allocate money, time, people, and marketing resources more effectively.",
  },
  {
    title: "Scalable Growth System",
    description:
      "We help create repeatable systems for lead generation, sales conversion, channel expansion, and customer retention.",
  },
];

const applications = [
  "Startups planning market entry",
  "Existing businesses planning expansion",
  "Manufacturers launching new products",
  "Service companies improving sales",
  "B2B companies entering new industries",
  "B2C brands expanding customer reach",
  "Exporters and importers exploring new markets",
  "Franchise and distribution businesses",
  "Companies preparing project reports",
  "Businesses looking for investment planning",
  "Companies struggling with low conversion",
  "Brands planning online and offline channel growth",
  "Businesses entering domestic or international markets",
];

const processItems = [
  {
    title: "Business Diagnosis",
    description:
      "We understand your current business model, product/service, customer base, market position, challenges, revenue goals, and growth expectations.",
  },
  {
    title: "Research & Analysis",
    description:
      "We study your market, competitors, customer segments, pricing, channels, sales process, and growth opportunities.",
  },
  {
    title: "Strategy Development",
    description:
      "We create a practical growth strategy covering target market, positioning, GTM plan, channel plan, pricing direction, and conversion improvement areas.",
  },
  {
    title: "Project Report & Roadmap",
    description:
      "We prepare structured reports, action plans, feasibility insights, and step-by-step execution roadmaps based on your business requirement.",
  },
  {
    title: "Execution Support",
    description:
      "We support your team with marketing planning, sales process improvement, campaign direction, channel development, and performance tracking.",
  },
  {
    title: "Review & Optimization",
    description:
      "We review results, identify gaps, improve strategy, and recommend next actions for continuous business growth.",
  },
];

const coreAreas = [
  {
    title: "Market Positioning",
    description:
      "We help define how your business should be seen in the market and what makes your offer valuable.",
  },
  {
    title: "Customer Targeting",
    description:
      "We identify the right customer groups, industries, buyer types, and territories for better growth focus.",
  },
  {
    title: "Lead Generation Quality",
    description:
      "We help improve how your business attracts, qualifies, and manages leads.",
  },
  {
    title: "Sales Conversion",
    description:
      "We improve communication, follow-up, pitch, offer structure, and customer handling.",
  },
  {
    title: "Channel Expansion",
    description:
      "We help select and develop suitable sales channels, distribution partners, and market routes.",
  },
  {
    title: "Business Planning",
    description:
      "We create structured planning documents, project reports, and growth roadmaps.",
  },
];

const strengths = [
  "Research-based business planning",
  "Practical understanding of Indian and global markets",
  "Support for B2B and B2C growth models",
  "Strong focus on execution, not only strategy",
  "Clear project reports and business roadmaps",
  "Market entry, GTM, channel, and conversion expertise",
  "Customized solutions based on your business stage and goals",
  "Transparent reporting and action-oriented recommendations",
];

const deliverables = [
  "Market research report",
  "Competitor analysis summary",
  "Customer segment and target audience profile",
  "Project report or feasibility report",
  "Go-to-market strategy",
  "Channel and distribution plan",
  "Pricing and positioning recommendations",
  "Sales funnel improvement plan",
  "Conversion rate optimization suggestions",
  "Growth roadmap with action steps",
  "Performance review structure",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-growth-consulting"
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
                name: "Growth Consulting Services",
                item: "https://www.asbconsulting.in/sales&marketing/growth-consulting",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-growth-consulting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/sales&marketing/growth-consulting#webpage",
            url: "https://www.asbconsulting.in/sales&marketing/growth-consulting",
            name: "Growth Consulting Services for Business Expansion in India",
            description:
              "AS Business Consulting helps businesses identify growth opportunities, enter new markets, improve sales performance, strengthen business planning, and build structured strategies for long-term expansion.",
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

      <main className="overflow-hidden bg-[#f7f2f8] text-[#201625]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#502D52] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(244,216,138,0.18),transparent_28%),linear-gradient(135deg,#502D52_0%,#381b3d_48%,#241029_100%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative max-w-7xl mx-auto px-5 py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-5">
                  Growth Consulting Services
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Growth Consulting Services for Business Expansion in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5 max-w-3xl">
                  Practical Growth Strategy for Market Entry, Sales Improvement
                  & Business Scaling
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/82 mb-4 max-w-3xl">
                  At <strong>AS Business Consulting</strong>, we help businesses
                  identify growth opportunities, enter new markets, improve
                  sales performance, strengthen business planning, and build
                  structured strategies for long-term expansion.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/78 mb-7 max-w-3xl">
                  We create complete growth roadmaps that support better
                  decision-making, stronger market positioning, practical
                  execution, and sustainable revenue growth.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Get Consultation <span className="ml-2">→</span>
                  </Link>

                  <Link
                    href="/our-services"
                    className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
                  <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-4">
                    Growth Roadmap Framework
                  </p>

                  <div className="space-y-3">
                    {[
                      "Market Research",
                      "Business Feasibility",
                      "Go-To-Market Strategy",
                      "Channel Planning",
                      "Conversion Improvement",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#201625]"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#502D52] text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-[#f4d88a] p-5 text-[#2b1730]">
                    <p className="text-sm font-semibold leading-relaxed">
                      A structured growth roadmap helps your business reduce
                      risk, improve execution, and convert opportunities into
                      measurable business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Overview */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                "Market Research",
                "Project Reports",
                "GTM Strategy",
                "Channel & Sales Growth",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 shadow-sm ${
                    index % 2 === 0
                      ? "bg-[#502D52] border-[#502D52] text-white"
                      : "bg-[#fbf8fc] border-[#eaddec] text-[#201625]"
                  }`}
                >
                  <div
                    className={`mb-3 text-sm font-bold ${
                      index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="text-base font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 bg-[#f7f2f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                What We Do
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Do in Growth Consulting
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We support businesses with market research, feasibility
                planning, go-to-market strategy, channel planning, conversion
                improvement, revenue planning, and sales-marketing alignment.
              </p>
            </div>

            <div className="space-y-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.5rem] border border-[#eaddec] bg-white shadow-sm shadow-[#502D52]/5"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div
                      className={`lg:col-span-4 p-5 md:p-6 ${
                        index % 2 === 0
                          ? "bg-[#502D52] text-white"
                          : "bg-white text-[#201625]"
                      }`}
                    >
                      <p
                        className={`text-sm font-bold mb-2 ${
                          index % 2 === 0 ? "text-[#f4d88a]" : "text-[#d6a83f]"
                        }`}
                      >
                        Service 0{index + 1}
                      </p>
                      <h3 className="text-xl font-bold leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-4 p-5 md:p-6 bg-white">
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    <div
                      className={`lg:col-span-4 p-5 md:p-6 ${
                        index % 2 === 0 ? "bg-[#fbf8fc]" : "bg-[#502D52]"
                      }`}
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {service.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start gap-2"
                          >
                            <span
                              className={`mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full ${
                                index % 2 === 0 ? "bg-[#502D52]" : "bg-[#f4d88a]"
                              }`}
                            />
                            <p
                              className={`text-sm leading-relaxed ${
                                index % 2 === 0
                                  ? "text-gray-700"
                                  : "text-white/82"
                              }`}
                            >
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-16 md:py-20 bg-[#fffaf0]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                  Key Points
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Key Points of Our Growth Consulting Service
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Our work focuses on research, planning, execution, conversion
                  improvement, channel growth, and measurable business outcomes.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border p-4 shadow-sm ${
                      index % 2 === 0
                        ? "bg-[#502D52] border-[#502D52] text-white"
                        : "bg-white border-[#eaddec] text-gray-700"
                    }`}
                  >
                    <p
                      className={`mb-2 text-xs font-bold ${
                        index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                      }`}
                    >
                      0{index + 1}
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Benefits
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Benefits of Growth Consulting with AS Business Consulting
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 ${
                    index % 2 === 0
                      ? "bg-[#fbf8fc] border-[#eaddec] text-[#201625]"
                      : "bg-[#502D52] border-[#502D52] text-white"
                  }`}
                >
                  <div
                    className={`mb-4 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                      index % 2 === 0
                        ? "bg-[#502D52] text-white"
                        : "bg-white text-[#502D52]"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      index % 2 === 0 ? "text-gray-600" : "text-white/80"
                    }`}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-[#f7f2f8]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Applications
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Applications of Growth Consulting
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Our Growth Consulting services are useful for startups,
                existing businesses, manufacturers, service companies, exporters,
                brands, and companies planning expansion.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {applications.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border px-4 py-3 shadow-sm ${
                    index % 2 === 0
                      ? "bg-white border-white text-gray-700"
                      : "bg-[#502D52] border-[#502D52] text-white"
                  }`}
                >
                  <p className="text-sm font-semibold">
                    <span
                      className={
                        index % 2 === 0 ? "text-[#502D52]" : "text-[#f4d88a]"
                      }
                    >
                      •
                    </span>{" "}
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 bg-[#2f1935] text-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#f4d88a] mb-3">
                Process
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Our Growth Consulting Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {processItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 ${
                    index % 2 === 0
                      ? "border-white/15 bg-white/10"
                      : "border-white bg-white text-[#201625]"
                  }`}
                >
                  <p
                    className={`mb-2 text-sm font-bold ${
                      index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                    }`}
                  >
                    Step {index + 1}
                  </p>

                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      index % 2 === 0 ? "text-white/78" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Areas */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Core Areas
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Core Areas We Improve
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreAreas.map((area, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 ${
                    index % 2 === 0
                      ? "bg-[#502D52] border-[#502D52] text-white"
                      : "bg-[#fbf8fc] border-[#eaddec] text-[#201625]"
                  }`}
                >
                  <p
                    className={`mb-2 text-sm font-bold ${
                      index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                    }`}
                  >
                    0{index + 1}
                  </p>

                  <h3 className="text-lg font-bold mb-2">{area.title}</h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      index % 2 === 0 ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose + Deliverables */}
        <section className="py-16 md:py-20 bg-[#fffaf0]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Why Choose AS Business Consulting for Growth Consulting?
              </h2>

              <p className="leading-relaxed text-gray-700 mb-5">
                AS Business Consulting works with businesses as a strategic
                growth partner. We do not provide only general advice. We help
                you understand your market, structure your plans, identify
                practical opportunities, improve your sales and marketing
                system, and move toward measurable business growth.
              </p>

              <div className="space-y-3">
                {strengths.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border p-4 ${
                      index % 2 === 0
                        ? "bg-white border-[#eaddec] text-gray-700"
                        : "bg-[#502D52] border-[#502D52] text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      <span
                        className={`font-bold ${
                          index % 2 === 0 ? "text-[#502D52]" : "text-[#f4d88a]"
                        }`}
                      >
                        {index + 1}.
                      </span>{" "}
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Deliverables
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Deliverables You Receive
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {deliverables.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border p-4 ${
                      index % 2 === 0
                        ? "bg-[#502D52] border-[#502D52] text-white"
                        : "bg-white border-[#eaddec] text-gray-700"
                    }`}
                  >
                    <p className="text-sm font-medium leading-relaxed">
                      <span
                        className={`font-bold ${
                          index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                        }`}
                      >
                        {index + 1}.
                      </span>{" "}
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-[#f7f2f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="rounded-[2rem] bg-[#502D52] p-7 md:p-10 text-white shadow-xl shadow-[#502D52]/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#f4d88a] mb-3">
                    Build a Strong Growth Roadmap
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build a Strong Growth Roadmap with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed mb-3">
                    If your business wants to enter a new market, launch a
                    product, improve sales, prepare project reports, build
                    distribution channels, or increase conversion,{" "}
                    <strong>AS Business Consulting</strong> can help you create
                    a clear and practical growth plan.
                  </p>

                  <p className="text-white/82 leading-relaxed">
                    We help you understand the market, identify opportunities,
                    reduce risk, improve execution, and convert business
                    potential into measurable growth.
                  </p>
                </div>

                <div className="lg:text-right">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Get Started <span className="ml-2">→</span>
                  </Link>
                </div>
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