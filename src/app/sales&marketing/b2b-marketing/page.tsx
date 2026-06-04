import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "B2B Marketing Services for Business Growth in India | AS Business",
  description:
    "AS Business Consulting provides B2B marketing services in India including market research, lead generation, LinkedIn marketing, email outreach, sales enablement, advertising, and content marketing.",
  alternates: {
    canonical: "https://www.asbconsulting.in/sales&marketing/b2b-marketing",
  },
};

const services = [
  {
    title: "Target Market Research & Customer Identification",
    description:
      "We identify the right industries, business segments, company types, buyer profiles, and decision-makers for your product or service. This helps your business focus only on relevant prospects instead of wasting time and money on random marketing.",
    points: [
      "Industry and market research",
      "Competitor analysis",
      "Customer segment identification",
      "Ideal Customer Profile, also known as ICP, creation",
      "Buyer persona development",
      "Decision-maker mapping",
      "Demand and opportunity analysis",
    ],
  },
  {
    title: "B2B Lead Generation Strategy",
    description:
      "We help businesses create reliable lead generation systems using the right combination of digital channels, outbound communication, networking, and content-driven marketing.",
    points: [
      "LinkedIn marketing strategy",
      "Email outreach planning",
      "B2B database planning",
      "Enquiry generation campaigns",
      "Landing page and form strategy",
      "Sales funnel planning",
      "Lead qualification process",
      "Follow-up workflow creation",
    ],
  },
  {
    title: "LinkedIn & Professional Network Marketing",
    description:
      "LinkedIn is one of the most powerful platforms for B2B business growth. We help companies use LinkedIn strategically for brand visibility, authority building, lead generation, and relationship development.",
    points: [
      "Company profile optimization",
      "Founder and leadership profile positioning",
      "LinkedIn content planning",
      "Connection-building strategy",
      "Message sequence planning",
      "Industry-specific content ideas",
      "Lead nurturing through professional communication",
    ],
  },
  {
    title: "Email Marketing & Outreach Campaigns",
    description:
      "We create professional B2B email campaigns that help businesses communicate with potential clients, partners, distributors, vendors, and corporate buyers.",
    points: [
      "Email campaign strategy",
      "Cold email sequence planning",
      "Follow-up email structure",
      "Offer and proposal communication",
      "Newsletter planning",
      "CRM-based communication flow",
      "Response tracking and improvement",
    ],
  },
  {
    title: "Sales Enablement & Business Communication Support",
    description:
      "B2B marketing works best when the sales team has the right material, pitch, and communication structure. We help create sales-support assets that make client communication more professional and conversion-focused.",
    points: [
      "Company profile content",
      "Pitch deck structure",
      "Product/service presentation",
      "Proposal format",
      "Sales scripts",
      "Objection-handling points",
      "Follow-up message templates",
      "Case study and capability document support",
    ],
  },
  {
    title: "B2B Advertising & Campaign Management",
    description:
      "We help plan and manage advertising campaigns for B2B companies across platforms such as Google, LinkedIn, Meta, YouTube, and other digital channels based on the business type and target audience.",
    points: [
      "Awareness campaigns",
      "Lead generation campaigns",
      "Search ads",
      "Retargeting campaigns",
      "Creative direction",
      "Ad copy planning",
      "Budget allocation",
      "Campaign performance tracking",
    ],
  },
  {
    title: "Content Marketing for B2B Brands",
    description:
      "Strong content builds trust in B2B markets. We help businesses create content that explains expertise, educates customers, improves credibility, and supports lead generation.",
    points: [
      "Website service page content",
      "Blog topics",
      "Case studies",
      "Industry articles",
      "Brochures",
      "Social media posts",
      "Product explainers",
      "Whitepapers and business documents",
    ],
  },
];

const keyPoints = [
  "Data-driven market research before campaign planning",
  "Clear targeting of industries, companies, and decision-makers",
  "Structured lead generation system",
  "Professional brand and communication strategy",
  "LinkedIn, email, website, and advertising support",
  "Sales team support through pitch decks, proposals, and scripts",
  "Continuous tracking of leads, enquiries, conversions, and campaign performance",
  "Practical strategy suitable for Indian and global B2B markets",
];

const benefits = [
  {
    title: "Better Quality Leads",
    description:
      "We focus on attracting relevant business prospects who are more likely to need your product or service.",
  },
  {
    title: "Stronger Market Positioning",
    description:
      "Your company gets a clear message, strong value proposition, and professional brand presence in front of business buyers.",
  },
  {
    title: "Improved Sales Conversion",
    description:
      "With better targeting, communication, and sales material, your team can convert prospects more confidently.",
  },
  {
    title: "Reduced Marketing Waste",
    description:
      "We help avoid random advertising and build a structured plan based on data, audience, industry, and business goals.",
  },
  {
    title: "Better Brand Recognition",
    description:
      "Regular and professional communication across digital platforms helps your brand become more visible and trusted.",
  },
  {
    title: "Long-Term Business Growth",
    description:
      "B2B marketing creates systems for repeat enquiries, relationship-building, partnerships, and sustainable revenue growth.",
  },
];

const applications = [
  "Manufacturing companies",
  "Exporters and importers",
  "Industrial product suppliers",
  "Engineering and product design companies",
  "Technology and software companies",
  "Consulting firms",
  "Machinery and equipment suppliers",
  "Construction and infrastructure businesses",
  "Franchise and distribution businesses",
  "Professional service providers",
  "Startups targeting enterprise clients",
  "Companies entering new domestic or international markets",
];

const processItems = [
  {
    title: "Business Understanding",
    description:
      "We understand your products, services, market, customer type, pricing, current sales process, and growth goals.",
  },
  {
    title: "Market & Competitor Research",
    description:
      "We study your industry, competitors, target audience, market demand, and customer behaviour.",
  },
  {
    title: "Strategy Development",
    description:
      "We create a B2B marketing plan with target segments, channels, messaging, budget, campaign ideas, and KPIs.",
  },
  {
    title: "Campaign & Content Execution",
    description:
      "We support execution across LinkedIn, email, ads, website content, sales material, and other selected marketing channels.",
  },
  {
    title: "Lead Tracking & Reporting",
    description:
      "We track enquiries, lead quality, conversion performance, campaign results, and improvement areas.",
  },
  {
    title: "Optimization & Growth Planning",
    description:
      "We continuously improve campaigns, messaging, targeting, and sales support based on performance data.",
  },
];

const strengths = [
  "Practical understanding of business-to-business sales cycles",
  "Data-first and research-based planning",
  "Strong focus on qualified leads and measurable results",
  "Support for both Indian and international business growth",
  "Clear reporting and transparent execution",
  "Customized strategy based on your industry and business goals",
  "Marketing support combined with consulting, training, and execution guidance",
];

const deliverables = [
  "B2B marketing strategy document",
  "Target industry and customer profile",
  "Ideal Customer Profile and buyer personas",
  "LinkedIn and email outreach plan",
  "Campaign and media plan",
  "Website/service page content suggestions",
  "Sales pitch and proposal support",
  "Lead generation and follow-up structure",
  "Monthly performance review and improvement plan",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-b2b-marketing"
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
                name: "B2B Marketing Services",
                item: "https://www.asbconsulting.in/sales-marketing/b2b-marketing",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-b2b-marketing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/sales-marketing/b2b-marketing#webpage",
            url: "https://www.asbconsulting.in/sales-marketing/b2b-marketing",
            name: "B2B Marketing Services for Business Growth in India",
            description:
              "AS Business Consulting helps companies build B2B marketing systems that generate qualified leads, improve brand visibility, strengthen client relationships, and support long-term business growth.",
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
                  B2B Marketing Services
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  B2B Marketing Services for Business Growth in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5 max-w-3xl">
                  Strategic B2B Marketing Solutions for Companies,
                  Manufacturers & Service Providers
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/82 mb-4 max-w-3xl">
                  At <strong>AS Business Consulting</strong>, we help businesses
                  build strong B2B marketing systems that generate qualified
                  leads, improve brand visibility, strengthen client
                  relationships, and support long-term business growth.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/78 mb-7 max-w-3xl">
                  We help your business reach the right decision-makers, convert
                  prospects into clients, and grow in competitive domestic and
                  international markets through clear targeting, communication,
                  lead generation, sales support, and continuous follow-up.
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
                    Growth Framework
                  </p>

                  <div className="space-y-3">
                    {[
                      "Research & Positioning",
                      "Lead Generation Planning",
                      "LinkedIn & Email Outreach",
                      "Sales Enablement Support",
                      "Campaign Reporting",
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
                      A structured B2B marketing system helps your business
                      reach the right companies, communicate the right value,
                      and convert opportunities into measurable growth.
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
                "Target Market Research",
                "Lead Generation System",
                "Professional Communication",
                "Sales & Reporting Support",
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
                What We Do in B2B Marketing
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We create practical B2B marketing systems that support market
                research, lead generation, communication, sales enablement,
                advertising, and content marketing.
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
                  Key Points of Our B2B Marketing Service
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Our work is focused on research, practical execution, lead
                  quality, sales support, and measurable campaign performance.
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
                Benefits of B2B Marketing with AS Business Consulting
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
                Applications of B2B Marketing
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Our B2B marketing services are useful for different types of
                companies that sell products, services, technology, machinery,
                consulting, or business solutions to other businesses.
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
                Our B2B Marketing Process
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

        {/* Why Choose + Deliverables */}
        <section className="py-16 md:py-20 bg-[#fffaf0]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Why Choose AS Business Consulting for B2B Marketing?
              </h2>

              <p className="leading-relaxed text-gray-700 mb-5">
                AS Business Consulting works as a growth partner, not just a
                marketing service provider. We combine research, planning,
                branding, digital marketing, sales support, and reporting to
                create a complete B2B growth system for your company.
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
                    Build a Strong B2B Growth System
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build a Strong B2B Growth System with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed mb-3">
                    If your business wants to reach more companies, generate
                    better leads, improve sales conversion, build stronger brand
                    recognition, or enter new markets,{" "}
                    <strong>AS Business Consulting</strong> can help you create
                    a clear and practical B2B marketing roadmap.
                  </p>

                  <p className="text-white/82 leading-relaxed">
                    We help you identify the right market, communicate the right
                    value, reach the right buyers, and convert business
                    opportunities into measurable growth.
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