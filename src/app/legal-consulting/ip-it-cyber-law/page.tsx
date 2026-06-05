import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "IP, IT & Cyber Law Advisory | AS Business Consulting",
  description:
    "AS Business Consulting provides IP, IT & Cyber Law advisory including IPR strategy, IP filings, IP assignments, IP licensing, IT contracts, data protection advisory, cybersecurity posture review, and incident response support.",
  alternates: {
    canonical: "https://www.asbconsulting.in/legal-consulting/ip-it-cyber-law",
  },
};

const services = [
  {
    title: "IPR Strategy",
    description:
      "We help businesses create a proper intellectual property strategy for trademarks, copyrights, designs, patents, trade secrets, brand assets, software, content, product names, logos, creative work, and technology assets. A strong IPR strategy helps protect business value and prevents unauthorized use by competitors, vendors, employees, or third parties.",
    points: [
      "Trademark strategy",
      "Copyright protection",
      "Brand assets",
      "Technology assets",
    ],
  },
  {
    title: "IP Filings Support",
    description:
      "We assist businesses with planning and coordinating intellectual property filings such as trademark applications, copyright registration, design filings, patent-related support, and brand protection documentation. Proper filing helps establish ownership and strengthens legal protection.",
    points: [
      "Trademark applications",
      "Copyright registration",
      "Design filings",
      "Brand protection",
    ],
  },
  {
    title: "IP Assignments",
    description:
      "We help draft and review IP assignment documents to clearly transfer ownership of intellectual property from founders, employees, consultants, vendors, designers, developers, or agencies to the business.",
    points: [
      "Ownership transfer",
      "Founder IP assignment",
      "Vendor IP transfer",
      "Developer agreements",
    ],
  },
  {
    title: "IP Licensing",
    description:
      "We support businesses with licensing agreements for software, content, technology, brand assets, designs, creative material, patents, trademarks, and digital products. These agreements define usage rights, restrictions, payment terms, royalties, ownership, termination, and misuse protection.",
    points: [
      "Usage rights",
      "Royalty terms",
      "License restrictions",
      "Misuse protection",
    ],
  },
  {
    title: "IT Contracts",
    description:
      "We draft and review IT contracts for software development, SaaS platforms, cloud services, technology licensing, website development, app development, outsourcing, IT support, maintenance, hosting, and digital transformation projects.",
    points: [
      "Software contracts",
      "SaaS agreements",
      "Cloud contracts",
      "Development agreements",
    ],
  },
  {
    title: "Data Protection Advisory",
    description:
      "We help businesses create practical data protection systems, privacy policies, consent structures, data processing clauses, vendor data terms, internal data handling rules, and customer information safeguards.",
    points: [
      "Privacy policies",
      "Consent structure",
      "Data clauses",
      "Vendor data terms",
    ],
  },
  {
    title: "Cybersecurity Posture Review",
    description:
      "We support businesses in reviewing their cybersecurity preparedness from a legal, process, and documentation perspective. This includes assessing policies, access controls, vendor risks, employee practices, data storage, incident reporting, and business continuity planning.",
    points: [
      "Policy review",
      "Access controls",
      "Vendor risks",
      "Incident reporting",
    ],
  },
  {
    title: "Incident Response Support",
    description:
      "If a business faces a cybersecurity incident, data breach, unauthorized access, fraud attempt, or digital misuse, we help with response planning, documentation, communication support, evidence preservation, vendor coordination, and corrective action planning.",
    points: [
      "Breach response",
      "Evidence preservation",
      "Vendor coordination",
      "Corrective action",
    ],
  },
];

const benefits = [
  {
    title: "Protection of Business Assets",
    description:
      "Your brand name, logo, software, content, designs, confidential information, technology, and digital products become better protected through proper documentation and ownership clarity.",
  },
  {
    title: "Reduced Technology Disputes",
    description:
      "Clear IT contracts reduce disputes related to project scope, software ownership, source code, timelines, maintenance, hosting, payment, and delivery quality.",
  },
  {
    title: "Stronger Data Handling",
    description:
      "Data protection policies and privacy documentation help your business manage customer, employee, vendor, and business data responsibly.",
  },
  {
    title: "Better Cyber Readiness",
    description:
      "Cybersecurity documentation and incident response planning help the company respond faster and more professionally during digital threats or breaches.",
  },
  {
    title: "Improved Vendor & Developer Control",
    description:
      "Proper contracts and IP assignment documents ensure that work created by vendors, freelancers, developers, agencies, or consultants is legally transferred or licensed to your business.",
  },
  {
    title: "Higher Business Credibility",
    description:
      "Businesses with proper IP protection, privacy policies, IT documentation, and cybersecurity controls appear more reliable to clients, investors, partners, and enterprise customers.",
  },
];

const keyAreas = [
  "IPR strategy development",
  "Trademark filing support",
  "Copyright registration support",
  "Design filing support",
  "Patent-related coordination",
  "IP ownership review",
  "IP assignment agreements",
  "IP licensing agreements",
  "Brand protection documentation",
  "Software ownership clauses",
  "Source code and technology rights review",
  "Website and app development contracts",
  "SaaS agreements",
  "Cloud service agreements",
  "IT support and maintenance contracts",
  "Data protection policy drafting",
  "Privacy policy drafting",
  "Consent and data handling documentation",
  "Vendor data protection clauses",
  "Cybersecurity policy support",
  "Incident response planning",
  "Data breach documentation support",
  "Confidentiality and trade secret protection",
  "Technology risk review",
  "Digital compliance advisory",
];

const applications = [
  {
    title: "For Startups",
    description:
      "We help startups protect brand names, logos, product ideas, software, website assets, investor-facing documents, and technology ownership from the beginning.",
  },
  {
    title: "For IT & Software Companies",
    description:
      "Software companies need clear contracts for development, licensing, SaaS usage, source code ownership, maintenance, support, hosting, and data responsibilities. We help structure these documents properly.",
  },
  {
    title: "For Digital & E-Commerce Businesses",
    description:
      "Online businesses handle customer data, payment-related information, website terms, vendor data, marketing content, and digital assets. We help create policies and agreements to reduce legal and cyber risk.",
  },
  {
    title: "For Agencies & Creative Businesses",
    description:
      "Design, marketing, content, branding, and development agencies need clear ownership, licensing, usage rights, portfolio rights, confidentiality, and client approval terms. We help prepare suitable agreements.",
  },
  {
    title: "For Companies Working With Vendors",
    description:
      "When businesses hire developers, designers, consultants, IT vendors, cloud providers, or marketing agencies, proper IP assignment and data protection clauses are important to avoid future ownership disputes.",
  },
  {
    title: "For Enterprises",
    description:
      "Larger organizations need structured IT contracts, privacy documentation, cybersecurity policies, vendor risk checks, incident response plans, and digital governance systems.",
  },
];

const process = [
  {
    title: "Asset & Risk Understanding",
    description:
      "We first understand your business model, technology usage, brand assets, software, data flow, vendors, digital systems, and key legal risks.",
  },
  {
    title: "Document Review",
    description:
      "We review existing IP documents, IT contracts, privacy policies, vendor agreements, cybersecurity policies, confidentiality documents, and data protection terms.",
  },
  {
    title: "Gap Identification",
    description:
      "We identify missing ownership documents, weak licensing clauses, unclear software rights, poor data protection language, cyber policy gaps, and incident response weaknesses.",
  },
  {
    title: "Strategy & Documentation",
    description:
      "We prepare a practical IP, IT, and cyber law roadmap along with required policies, contracts, assignment documents, licensing terms, and protection measures.",
  },
  {
    title: "Implementation Support",
    description:
      "We help your team implement the required documents, approval systems, data handling rules, vendor clauses, and incident response steps.",
  },
  {
    title: "Review & Updates",
    description:
      "We support periodic review of IP records, IT contracts, data protection documents, vendor arrangements, and cybersecurity response processes.",
  },
];

const whyChoose = [
  {
    title: "Business-Focused Digital Legal Support",
    description:
      "We provide legal support that fits real business operations, technology usage, vendor relationships, and customer data handling.",
  },
  {
    title: "Strong IP Protection Approach",
    description:
      "We help businesses protect what creates value: brand, content, software, technology, confidential information, creative work, and digital products.",
  },
  {
    title: "Practical IT Contract Review",
    description:
      "We focus on the clauses that matter most in technology deals, including ownership, scope, delivery, support, source code, data, confidentiality, liability, and termination.",
  },
  {
    title: "Data & Cyber Risk Awareness",
    description:
      "We help companies prepare for privacy risks, cybersecurity incidents, vendor data exposure, and digital compliance issues before they become serious problems.",
  },
  {
    title: "End-to-End Support",
    description:
      "From IP strategy and filings to IT contracts, privacy policies, cyber documentation, and incident response support, we provide complete advisory under one roof.",
  },
];

const deliverables = [
  "IPR strategy note",
  "IP filing checklist",
  "Trademark filing support documentation",
  "Copyright and design registration support",
  "IP ownership review report",
  "IP assignment agreements",
  "IP licensing agreements",
  "Brand protection documentation",
  "Software development agreement",
  "SaaS agreement",
  "Technology licensing agreement",
  "Website and app development contract",
  "Cloud service agreement review",
  "IT support and maintenance agreement",
  "Privacy policy",
  "Data protection policy",
  "Consent and data handling framework",
  "Vendor data protection clauses",
  "Cybersecurity policy support",
  "Incident response plan",
  "Data breach response checklist",
  "Confidentiality and trade secret protection clauses",
  "Digital risk register",
  "Corrective action plan",
];

const heroItems = [
  "IPR Strategy",
  "IP Filings",
  "IT Contracts",
  "Data Privacy",
  "Cyber Review",
  "Incident Response",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-ip-it-cyber-law"
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
                name: "IP, IT & Cyber Law",
                item: "https://www.asbconsulting.in/legal-consulting/ip-it-cyber-law",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-ip-it-cyber-law"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/ip-it-cyber-law#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/ip-it-cyber-law",
            name: "IP, IT & Cyber Law",
            description:
              "AS Business Consulting provides practical IP, IT & Cyber Law advisory to help companies protect intellectual property, manage technology contracts, comply with data protection requirements, and reduce cyber-related business risks.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.asbconsulting.in/#website",
              url: "https://www.asbconsulting.in/",
              name: "AS Business Consulting",
            },
          }),
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            html,
            body {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            body {
              margin: 0;
            }

            *,
            *::before,
            *::after {
              box-sizing: border-box;
            }

            .ip-it-cyber-law-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .ip-it-cyber-law-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .ip-it-cyber-law-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .ip-it-cyber-law-page .safe-grid,
            .ip-it-cyber-law-page .safe-card,
            .ip-it-cyber-law-page .safe-content {
              min-width: 0;
            }

            .ip-it-cyber-law-page h1,
            .ip-it-cyber-law-page h2,
            .ip-it-cyber-law-page h3,
            .ip-it-cyber-law-page p,
            .ip-it-cyber-law-page span,
            .ip-it-cyber-law-page a,
            .ip-it-cyber-law-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .ip-it-cyber-law-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            @media (max-width: 640px) {
              .ip-it-cyber-law-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .ip-it-cyber-law-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .ip-it-cyber-law-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="ip-it-cyber-law-page w-full max-w-full overflow-x-hidden bg-[#faf8fb] text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  IP Protection • IT Contracts • Cyber Risk
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  IP, IT & Cyber Law
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we provide
                  practical and business-focused IP, IT & Cyber Law advisory to
                  help companies protect their intellectual property, manage
                  technology contracts, comply with data protection requirements,
                  and reduce cyber-related business risks.
                </p>

                <div className="mt-7 flex max-w-full flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
                  >
                    Speak With Experts →
                  </Link>

                  <Link
                    href="/our-services"
                    className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              <div className="safe-card rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                <div className="rounded-[22px] bg-white p-6 text-[#201723]">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#502D52]">
                    Digital Legal Coverage
                  </p>

                  <div className="safe-grid grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {heroItems.map((item, index) => (
                      <div
                        key={index}
                        className="safe-card rounded-2xl border border-[#eaddec] bg-[#fbf8fc] p-4"
                      >
                        <p className="text-xs font-bold text-[#6d3d70]">
                          0{index + 1}
                        </p>
                        <h3 className="mt-2 text-sm font-bold">{item}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="w-full max-w-full overflow-hidden bg-white py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-grid grid grid-cols-1 gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
              <div className="safe-content">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                  Overview
                </p>
                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Protect your brand, software, data and digital business assets
                </h2>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6">
                  <p className="text-sm leading-7 text-gray-700">
                    In today’s digital business environment, companies depend
                    heavily on brand assets, software, data, technology
                    platforms, online systems, digital contracts, customer
                    information, and confidential business processes.
                  </p>
                </div>

                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-gray-700">
                    If these assets are not legally protected, businesses may
                    face brand misuse, data leakage, software ownership disputes,
                    cybersecurity incidents, customer trust issues, or regulatory
                    challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="safe-card mt-8 rounded-[28px] border border-[#eaddec] bg-[#faf8fb] p-8">
              <p className="text-sm leading-7 text-gray-700">
                Our services help businesses create a clear legal and compliance
                structure for intellectual property, technology usage, data
                handling, cybersecurity readiness, and incident response.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="w-full max-w-full overflow-hidden py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                What AS Business Consulting Delivers
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                IP protection, IT contracts, data protection and cyber risk
                support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We support startups, MSMEs, technology companies, digital
                businesses, SaaS providers, e-commerce companies, agencies,
                manufacturers, service providers, and established enterprises
                with IP, IT, data and cyber law requirements.
              </p>
            </div>

            <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="safe-card rounded-[26px] border border-[#eaddec] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex min-w-0 items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#502D52] text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <h3 className="min-w-0 text-lg font-bold leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex max-w-full flex-wrap gap-2">
                    {service.points.map((point, pointIndex) => (
                      <span
                        key={pointIndex}
                        className="safe-pill rounded-full border border-[#eaddec] bg-[#faf8fb] px-3 py-1.5 text-xs font-medium text-gray-700"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="w-full max-w-full overflow-hidden bg-white py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div className="safe-card rounded-[28px] bg-[#502D52] p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4d88a]">
                  Benefits for Your Business
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Stronger ownership, safer data handling and better cyber
                  readiness
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Proper IP, IT and cyber documentation helps protect business
                  value, reduce vendor disputes, improve data discipline, and
                  increase credibility with clients, investors and enterprise
                  customers.
                </p>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-5 md:grid-cols-2">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6"
                  >
                    <p className="mb-3 text-sm font-bold text-[#502D52]">
                      Benefit {index + 1}
                    </p>

                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KEY AREAS */}
        <section className="w-full max-w-full overflow-hidden py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-card rounded-[30px] bg-[#2f1833] p-8 text-white md:p-10">
              <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-[330px_minmax(0,1fr)]">
                <div className="safe-content">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4d88a]">
                    Key Areas We Cover
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight">
                    Complete digital legal and cyber risk coverage
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From IP strategy and IT contracts to privacy policies,
                    vendor data clauses, cybersecurity documentation and breach
                    response planning, we help secure your digital business.
                  </p>
                </div>

                <div className="safe-grid grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {keyAreas.map((item, index) => (
                    <div
                      key={index}
                      className="safe-card rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm leading-6 text-white/90"
                    >
                      <span className="mr-2 font-bold text-[#f4d88a]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="w-full max-w-full overflow-hidden bg-white py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                Applications
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Where this service helps
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                This service is useful for businesses that use brand assets,
                software, customer data, technology vendors, digital platforms,
                creative content, or online systems.
              </p>
            </div>

            <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((item, index) => (
                <div
                  key={index}
                  className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6"
                >
                  <h3 className="text-lg font-bold text-[#502D52]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="w-full max-w-full overflow-hidden py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                Our Process
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                From asset review to digital risk protection
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a practical process to understand assets and risks,
                review documents, identify gaps, prepare strategy and
                documentation, support implementation, and keep digital legal
                systems updated.
              </p>
            </div>

            <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="safe-card rounded-[24px] border border-[#eaddec] bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#502D52] text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="w-full max-w-full overflow-hidden bg-white py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="safe-content">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                  Why Choose AS Business Consulting?
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  Business-focused digital legal support
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We help businesses protect what creates value: brand, content,
                  software, technology, confidential information, creative work,
                  data systems and digital products.
                </p>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-5 md:grid-cols-2">
                {whyChoose.map((item, index) => (
                  <div
                    key={index}
                    className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6"
                  >
                    <p className="mb-3 text-sm font-bold text-[#502D52]">
                      0{index + 1}
                    </p>

                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="w-full max-w-full overflow-hidden py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-card rounded-[30px] border border-[#eaddec] bg-white p-8 md:p-10">
              <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-[330px_minmax(0,1fr)]">
                <div className="safe-content">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                    Typical Deliverables
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight">
                    Documents, policies and digital risk outputs you receive
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    We provide practical IP, IT, data and cyber law documents
                    that help your team protect ownership, manage vendors,
                    handle data responsibly and respond to digital risks.
                  </p>
                </div>

                <div className="safe-grid grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="safe-card rounded-2xl border border-[#eaddec] bg-[#faf8fb] px-4 py-3 text-sm font-medium text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full max-w-full overflow-hidden bg-[#2f1833] py-14 text-white">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-grid grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div className="safe-content">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4d88a]">
                  Protect Your Digital Business
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Protect your brand, technology, data, and digital business
                  operations.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Connect with AS Business Consulting experts for IPR strategy,
                  IP filings, IT contracts, data protection advisory,
                  cybersecurity documentation, and incident response support
                  tailored to your business needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Digital Legal Support →
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full max-w-full overflow-hidden">
          <ContactFrom />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;