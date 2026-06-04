import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "B2C Marketing Services for Business Growth in India | AS Business",
  description:
    "AS Business Consulting provides B2C marketing services in India including customer research, brand positioning, performance marketing, social media, influencer marketing, CRM, offers, and conversion optimization.",
  alternates: {
    canonical: "https://www.asbconsulting.in/sales&marketing/b2c-marketing",
  },
};

const services = [
  {
    title: "Customer Research & Audience Understanding",
    description:
      "We study your target customers, buying behaviour, interests, problems, preferences, location, age group, lifestyle, and purchase patterns. This helps your business create marketing campaigns that connect with real customer needs.",
    points: [
      "Target customer identification",
      "Customer persona creation",
      "Buying behaviour analysis",
      "Competitor research",
      "Market demand study",
      "Location-based audience research",
      "Customer pain point mapping",
      "Product/service fit analysis",
    ],
  },
  {
    title: "Brand Positioning & Messaging",
    description:
      "A strong B2C brand must be easy to understand, remember, and trust. We help your business define clear positioning, brand tone, communication style, and key messages that make your product or service stand out in the market.",
    points: [
      "Brand positioning strategy",
      "Value proposition development",
      "Brand message creation",
      "Tagline and campaign theme ideas",
      "Product benefit communication",
      "Customer trust-building content",
      "Brand story and identity direction",
    ],
  },
  {
    title: "Performance Marketing Campaigns",
    description:
      "We help plan and execute paid marketing campaigns across platforms such as Meta, Google, YouTube, Instagram, and other digital channels based on your business goals and target audience.",
    points: [
      "Meta ads planning",
      "Google search ads",
      "Display and remarketing campaigns",
      "YouTube ad strategy",
      "Instagram campaign planning",
      "Lead generation campaigns",
      "Sales and conversion campaigns",
      "Budget planning and campaign optimization",
    ],
  },
  {
    title: "Social Media Marketing",
    description:
      "Social media plays an important role in customer awareness, engagement, trust, and brand recall. We help businesses create structured social media plans that support branding and sales.",
    points: [
      "Monthly content planning",
      "Post and reel ideas",
      "Campaign themes",
      "Customer engagement strategy",
      "Festival and seasonal campaigns",
      "Product launch communication",
      "Social proof and testimonial content",
      "Brand awareness activities",
    ],
  },
  {
    title: "Influencer & Community Marketing",
    description:
      "For many B2C brands, customer trust grows faster through people, communities, and local influence. We help businesses plan influencer collaborations, referral campaigns, and community-based promotion.",
    points: [
      "Influencer selection strategy",
      "Collaboration planning",
      "Product promotion campaigns",
      "Referral marketing ideas",
      "Customer review campaigns",
      "Local community promotion",
      "Brand ambassador concepts",
    ],
  },
  {
    title: "Customer Journey & CRM Marketing",
    description:
      "B2C marketing does not stop after the first sale. We help businesses design customer journeys that improve repeat sales, customer retention, and long-term brand loyalty.",
    points: [
      "Customer journey mapping",
      "Welcome message flow",
      "Follow-up campaign planning",
      "WhatsApp marketing structure",
      "Email campaign ideas",
      "Repeat purchase strategy",
      "Loyalty and referral program planning",
      "Customer feedback collection",
    ],
  },
  {
    title: "Offer, Pricing & Promotion Strategy",
    description:
      "Good pricing and offers can improve conversions, but poor discounting can damage profitability. We help businesses create attractive offers while protecting margins and brand value.",
    points: [
      "Product pricing strategy",
      "Promotional offer planning",
      "Bundle offer ideas",
      "Seasonal sale planning",
      "Launch offer strategy",
      "Discount control",
      "Margin-safe campaign planning",
      "Value-based packaging",
    ],
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "We help improve the customer experience across websites, landing pages, social media, ads, forms, product pages, and enquiry flows so that more visitors convert into customers.",
    points: [
      "Landing page improvement",
      "Call-to-action planning",
      "Enquiry form structure",
      "Ad copy improvement",
      "Website content suggestions",
      "Product page communication",
      "Customer trust elements",
      "Sales funnel improvement",
    ],
  },
];

const keyPoints = [
  "Customer-first marketing strategy",
  "Strong focus on brand visibility and sales conversion",
  "Paid advertising support across Meta, Google, YouTube, and Instagram",
  "Social media and influencer marketing planning",
  "Pricing, offers, and promotion strategy",
  "Customer journey and CRM communication support",
  "Data-based campaign tracking and improvement",
  "Practical execution plans for Indian consumer markets",
];

const benefits = [
  {
    title: "Better Customer Reach",
    description:
      "We help your brand reach the right customers through suitable marketing channels, creative campaigns, and targeted advertising.",
  },
  {
    title: "Improved Brand Awareness",
    description:
      "Consistent communication, social media presence, and campaign planning help your brand become more visible and memorable.",
  },
  {
    title: "Higher Enquiries and Sales",
    description:
      "With better targeting, attractive offers, and strong campaign execution, your business can generate more leads, enquiries, store visits, online orders, and conversions.",
  },
  {
    title: "Stronger Customer Trust",
    description:
      "We help build trust through clear messaging, testimonials, reviews, social proof, brand storytelling, and professional communication.",
  },
  {
    title: "Better Marketing ROI",
    description:
      "By tracking campaign performance, audience response, cost per lead, cost per sale, and conversion data, we help improve marketing efficiency.",
  },
  {
    title: "Repeat Customers and Loyalty",
    description:
      "Through CRM journeys, follow-ups, loyalty programs, and referral campaigns, your business can increase repeat purchases and long-term customer value.",
  },
];

const applications = [
  "Retail businesses",
  "Consumer product brands",
  "E-commerce brands",
  "Fashion and lifestyle brands",
  "Food and beverage businesses",
  "Health and wellness brands",
  "Beauty and personal care businesses",
  "Education and training institutes",
  "Real estate customer campaigns",
  "Local service businesses",
  "Hospitality and travel businesses",
  "Franchise-based businesses",
  "Startups selling directly to customers",
  "Businesses launching new products in the market",
];

const processItems = [
  {
    title: "Business & Product Understanding",
    description:
      "We understand your product, service, customer segment, pricing, competition, sales channels, and current marketing activities.",
  },
  {
    title: "Customer & Market Research",
    description:
      "We study your target audience, buying behaviour, competitor positioning, market demand, and customer expectations.",
  },
  {
    title: "Strategy & Campaign Planning",
    description:
      "We create a B2C marketing plan with audience segments, platforms, messaging, offers, budget, content direction, and campaign goals.",
  },
  {
    title: "Creative & Content Planning",
    description:
      "We support creative direction for ads, social media content, landing pages, offers, product communication, and brand campaigns.",
  },
  {
    title: "Campaign Execution",
    description:
      "We help execute marketing activities across selected platforms such as Meta, Google, YouTube, Instagram, WhatsApp, email, and other channels.",
  },
  {
    title: "Tracking & Optimization",
    description:
      "We monitor campaign performance, customer response, leads, conversions, cost, and sales impact to improve results continuously.",
  },
];

const strengths = [
  "Customer-focused marketing planning",
  "Data-driven campaign strategy",
  "Practical understanding of Indian consumer markets",
  "Support for both online and offline customer acquisition",
  "Clear tracking of leads, sales, and campaign performance",
  "Brand-building and performance marketing together",
  "Customized strategies based on your product, audience, and business goals",
  "Training and handover support for your internal team",
];

const deliverables = [
  "B2C marketing strategy document",
  "Target customer personas",
  "Brand positioning and messaging direction",
  "Social media content plan",
  "Paid advertising plan",
  "Campaign budget and media plan",
  "Offer and promotion strategy",
  "Customer journey and CRM flow",
  "Landing page and conversion suggestions",
  "Weekly campaign reports",
  "Monthly performance review with improvement actions",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-b2c-marketing"
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
                name: "B2C Marketing Services",
                item: "https://www.asbconsulting.in/sales&marketing/b2c-marketing",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-b2c-marketing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/sales&marketing/b2c-marketing#webpage",
            url: "https://www.asbconsulting.in/sales&marketing/b2c-marketing",
            name: "B2C Marketing Services for Business Growth in India",
            description:
              "AS Business Consulting helps B2C brands attract customers, improve brand visibility, increase sales, and build long-term customer loyalty through structured marketing strategies and data-driven execution.",
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
                  B2C Marketing Services
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  B2C Marketing Services for Business Growth in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5 max-w-3xl">
                  Consumer-Focused Marketing Solutions for Brands, Products &
                  Service Businesses
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/82 mb-4 max-w-3xl">
                  At <strong>AS Business Consulting</strong>, we help B2C brands
                  attract customers, improve brand visibility, increase sales,
                  and build long-term customer loyalty through structured
                  marketing strategies and data-driven execution.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/78 mb-7 max-w-3xl">
                  We help businesses create practical B2C marketing systems that
                  connect with the right audience, generate enquiries, improve
                  conversions, and support sustainable revenue growth.
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
                    Consumer Growth Framework
                  </p>

                  <div className="space-y-3">
                    {[
                      "Customer Research",
                      "Brand Positioning",
                      "Performance Campaigns",
                      "Social & Influencer Marketing",
                      "CRM & Conversion Tracking",
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
                      A structured B2C marketing system helps your brand reach
                      customers, communicate value, increase conversions, and
                      build repeat business.
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
                "Customer Research",
                "Brand Positioning",
                "Performance Campaigns",
                "CRM & Conversion Support",
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
                What We Do in B2C Marketing
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We create practical B2C marketing systems that support customer
                research, brand positioning, advertising, social media,
                influencer marketing, CRM, offers, and conversion improvement.
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
                  Key Points of Our B2C Marketing Service
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Our work focuses on customers, brand visibility, campaign
                  execution, conversion improvement, and measurable consumer
                  market growth.
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
                Benefits of B2C Marketing with AS Business Consulting
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
                Applications of B2C Marketing
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Our B2C marketing services are useful for businesses that sell
                directly to customers through online platforms, stores, social
                media, marketplaces, distributors, or local business channels.
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
                Our B2C Marketing Process
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
                Why Choose AS Business Consulting for B2C Marketing?
              </h2>

              <p className="leading-relaxed text-gray-700 mb-5">
                AS Business Consulting helps B2C brands grow with a practical
                mix of strategy, creativity, advertising, customer
                understanding, and performance tracking. We do not focus only on
                running ads. We help businesses build complete marketing systems
                that support brand growth, customer acquisition, sales
                conversion, and repeat business.
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
                    Build a Strong B2C Growth System
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build a Strong B2C Growth System with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed mb-3">
                    If your business wants to attract more customers, increase
                    brand awareness, improve online or offline sales, launch new
                    products, or build a loyal customer base,{" "}
                    <strong>AS Business Consulting</strong> can help you create
                    a clear and result-focused B2C marketing roadmap.
                  </p>

                  <p className="text-white/82 leading-relaxed">
                    We help your brand understand customers better, communicate
                    more effectively, promote products with the right strategy,
                    and convert market opportunities into measurable business
                    growth.
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