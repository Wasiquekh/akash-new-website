import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Corporate Legal Advisory & Governance | AS Business Consulting",
  description:
    "AS Business Consulting provides Corporate Legal Advisory & Governance services including company law compliance, board documentation, shareholder matters, policy drafting, compliance calendars, entity structuring, restructuring, and governance frameworks.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/legal-consulting/corporate-legal-advisory",
  },
};

const services = [
  {
    title: "Company Law & Secretarial Compliance",
    description:
      "We assist businesses with company law requirements, statutory records, regulatory filings, resolutions, registers, and secretarial documentation. This helps your organization stay compliant, organized, and prepared for audits, reviews, investor checks, or regulatory requirements.",
    points: [
      "Company law requirements",
      "Statutory records",
      "Regulatory filings",
      "Secretarial documentation",
    ],
  },
  {
    title: "Board & Shareholder Matters",
    description:
      "We support companies in managing board meetings, shareholder approvals, notices, minutes, resolutions, voting matters, and other corporate decision-making documents. A proper board and shareholder process brings transparency, accountability, and legal strength to business decisions.",
    points: [
      "Board meetings",
      "Shareholder approvals",
      "Notices and minutes",
      "Resolution drafting",
    ],
  },
  {
    title: "Corporate Policies & Codes",
    description:
      "We help create and implement practical internal policies and codes that guide employee conduct, workplace behavior, compliance discipline, and business ethics. These may include ethics policy, POSH policy, data privacy policy, whistleblower policy, conflict of interest policy, and employee conduct guidelines.",
    points: [
      "Ethics policy",
      "POSH policy",
      "Data privacy policy",
      "Employee conduct guidelines",
    ],
  },
  {
    title: "Compliance Calendar",
    description:
      "We prepare structured compliance calendars to help businesses track important deadlines, filings, renewals, board requirements, registrations, policy reviews, and statutory obligations. This reduces last-minute pressure and helps management stay in control.",
    points: [
      "Deadline tracking",
      "Filing schedules",
      "Renewal tracking",
      "Statutory obligation mapping",
    ],
  },
  {
    title: "Entity Structuring & Restructuring",
    description:
      "We advise businesses on suitable legal structures for ownership, operations, partnerships, investments, expansion, taxation alignment, and succession planning. We also support restructuring requirements when companies need to reorganize their business, assets, ownership, or group entities.",
    points: [
      "Ownership planning",
      "Operational structure",
      "Business restructuring",
      "Group entity planning",
    ],
  },
  {
    title: "Governance Frameworks",
    description:
      "We design governance systems that define roles, responsibilities, approval authority, reporting flow, decision-making processes, risk controls, and compliance checkpoints. This helps the business run with better discipline and fewer internal gaps.",
    points: [
      "Role clarity",
      "Approval authority",
      "Reporting flow",
      "Risk controls",
    ],
  },
];

const benefits = [
  {
    title: "Better Legal Clarity",
    description:
      "Your company gets a clear structure for documentation, decision-making, compliance, and responsibilities.",
  },
  {
    title: "Reduced Compliance Risk",
    description:
      "Timely filings, proper records, and structured governance reduce the chances of penalties, disputes, missed deadlines, and regulatory issues.",
  },
  {
    title: "Stronger Internal Control",
    description:
      "A proper governance framework helps define who is responsible for what, how approvals are handled, and how important business decisions are recorded.",
  },
  {
    title: "Smoother Business Growth",
    description:
      "When your legal and compliance systems are organized, it becomes easier to expand, raise funds, enter partnerships, apply for loans, or prepare for due diligence.",
  },
  {
    title: "Improved Management Confidence",
    description:
      "Management and board members get better visibility into compliance status, pending risks, required actions, and important governance matters.",
  },
];

const keyAreas = [
  "Company law advisory and secretarial compliance",
  "Board meeting and shareholder documentation",
  "Drafting of notices, minutes, and resolutions",
  "Compliance calendar creation and monitoring",
  "Internal policy and code drafting",
  "Ethics, POSH, privacy, and employee conduct policies",
  "Entity structuring and restructuring advisory",
  "Governance framework development",
  "Authority matrix and approval process design",
  "Legal documentation review and organization",
  "Compliance gap assessment",
  "Legal risk identification and corrective action planning",
  "Management and board reporting support",
];

const applications = [
  {
    title: "For Startups",
    description:
      "We help startups set up the right legal and governance foundation from the beginning, including basic company compliance, documentation, policies, and approval systems.",
  },
  {
    title: "For MSMEs",
    description:
      "Many MSMEs grow quickly but continue with weak documentation and informal decision-making. We help bring structure, compliance discipline, and legal clarity into the business.",
  },
  {
    title: "For Family-Owned Businesses",
    description:
      "We support family businesses with ownership clarity, governance processes, succession-related documentation, internal roles, and decision-making systems.",
  },
  {
    title: "For Companies Preparing for Investment or Loans",
    description:
      "Before investors, banks, or partners review your business, your legal records and compliance status must be clean. We help organize documents and close gaps before due diligence.",
  },
  {
    title: "For Businesses Undergoing Restructuring",
    description:
      "When a company is planning expansion, ownership changes, business transfers, mergers, or restructuring, we help create a legally safer and better-organized process.",
  },
  {
    title: "For Established Enterprises",
    description:
      "We support larger organizations with policy frameworks, approval matrices, compliance reporting, legal MIS, governance reviews, and board-level documentation.",
  },
];

const process = [
  {
    title: "Review",
    description:
      "We study your current legal structure, compliance records, board documents, policies, contracts, and governance practices.",
  },
  {
    title: "Gap Identification",
    description:
      "We identify missing documents, weak processes, pending compliance items, unclear authority structures, and legal risks.",
  },
  {
    title: "Action Plan",
    description:
      "We prepare a practical roadmap with required actions, documents, responsibilities, and timelines.",
  },
  {
    title: "Documentation",
    description:
      "We draft, review, and organize the required legal documents, policies, resolutions, compliance calendars, and governance frameworks.",
  },
  {
    title: "Implementation Support",
    description:
      "We help your team understand and implement the system properly so that it works in day-to-day business operations.",
  },
  {
    title: "Periodic Review",
    description:
      "We support ongoing reviews, updates, compliance tracking, audit preparation, and management reporting.",
  },
];

const whyChoose = [
  {
    title: "Practical Legal Advisory",
    description:
      "We provide legal and governance solutions that are easy to understand, implement, and maintain.",
  },
  {
    title: "Business-Aligned Approach",
    description:
      "Our advisory is designed to support business growth, not create unnecessary complexity or red tape.",
  },
  {
    title: "Cross-Functional Expertise",
    description:
      "We combine legal, compliance, finance, taxation, and business advisory understanding to provide complete support.",
  },
  {
    title: "Suitable for Different Business Sizes",
    description:
      "Our services are useful for startups, MSMEs, family businesses, growing companies, and established enterprises.",
  },
  {
    title: "Prevention-First Mindset",
    description:
      "We help identify risks early, close compliance gaps, and build systems that prevent future legal and governance issues.",
  },
];

const deliverables = [
  "Compliance checklist",
  "Compliance calendar",
  "Board meeting documentation",
  "Shareholder documentation",
  "Draft notices, minutes, and resolutions",
  "Internal policy documents",
  "Ethics, POSH, privacy, and conduct policies",
  "Governance framework",
  "Authority matrix",
  "Approval process structure",
  "Compliance gap report",
  "Legal risk register",
  "Corrective action plan",
  "Management reporting format",
  "Audit and due diligence readiness support",
  "Team training for compliance and governance practices",
];

const heroItems = [
  "Company Law",
  "Board Matters",
  "Policies",
  "Compliance Calendar",
  "Structuring",
  "Governance",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-corporate-legal-advisory"
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
                name: "Corporate Legal Advisory & Governance",
                item: "https://www.asbconsulting.in/legal-consulting/corporate-legal-advisory",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-corporate-legal-advisory"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/corporate-legal-advisory#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/corporate-legal-advisory",
            name: "Corporate Legal Advisory & Governance",
            description:
              "AS Business Consulting helps businesses build legally strong, compliant, and well-governed corporate structures through company law compliance, board documentation, shareholder matters, policy drafting, compliance calendars, entity structuring, restructuring, and governance frameworks.",
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

            .corporate-legal-advisory-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .corporate-legal-advisory-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .corporate-legal-advisory-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .corporate-legal-advisory-page .safe-grid,
            .corporate-legal-advisory-page .safe-card,
            .corporate-legal-advisory-page .safe-content {
              min-width: 0;
            }

            .corporate-legal-advisory-page h1,
            .corporate-legal-advisory-page h2,
            .corporate-legal-advisory-page h3,
            .corporate-legal-advisory-page p,
            .corporate-legal-advisory-page span,
            .corporate-legal-advisory-page a,
            .corporate-legal-advisory-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .corporate-legal-advisory-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            @media (max-width: 640px) {
              .corporate-legal-advisory-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .corporate-legal-advisory-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .corporate-legal-advisory-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="corporate-legal-advisory-page w-full max-w-full overflow-x-hidden bg-[#faf8fb] text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  Legal Advisory • Governance • Compliance
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Corporate Legal Advisory & Governance
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we help businesses
                  build a legally strong, compliant, and well-governed corporate
                  structure with practical legal documentation, smoother
                  compliance management, better decision-making systems, and
                  reduced business risk.
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
                    Advisory Coverage
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
                  Build a legally strong and professionally governed business
                </h2>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6">
                  <p className="text-sm leading-7 text-gray-700">
                    We support startups, MSMEs, family-owned businesses, growing
                    companies, and established enterprises in managing company
                    law matters, board and shareholder documentation, internal
                    policies, compliance calendars, entity structuring,
                    restructuring, and governance frameworks.
                  </p>
                </div>

                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-gray-700">
                    Our focus is simple: to help your business operate
                    confidently, avoid unnecessary legal complications, and
                    maintain a professional governance system that supports
                    long-term growth.
                  </p>
                </div>
              </div>
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
                Legal advisory, documentation, compliance and governance support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We help you move from informal legal handling to a structured,
                review-ready, and professionally governed corporate system.
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
                  Better control, lower risk and stronger management confidence
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Strong governance is not just paperwork. It improves control,
                  reduces risk, and makes your business easier to manage,
                  review, expand, and fund.
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
                    Complete corporate governance coverage
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From compliance records to authority matrix and governance
                    frameworks, we help organize the legal foundation of your
                    company.
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
                This service is useful for businesses at different growth stages,
                especially where documentation, compliance discipline, ownership
                clarity, and governance systems need improvement.
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
                From review to implementation
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a practical process that starts with review and gap
                identification, then moves into documentation, implementation,
                and periodic governance review.
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
                  Practical, business-aligned legal governance
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We help businesses prevent legal and governance issues before
                  they become expensive problems.
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
                    Documents, frameworks and reports you receive
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    We provide usable documents and frameworks that your
                    management team can apply in real business operations,
                    reviews, audits, and due diligence.
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
                  Build a Stronger Governance System
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Build a legally stronger, more organized, and better-governed
                  business.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Speak with AS Business Consulting experts today to create a
                  practical legal and governance system tailored to your
                  company’s needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Legal Advisory →
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