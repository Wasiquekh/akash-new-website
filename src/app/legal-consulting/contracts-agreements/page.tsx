import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Contracts & Agreements | AS Business Consulting",
  description:
    "AS Business Consulting provides Contracts & Agreements services including contract drafting, agreement review, redlining, negotiation support, MSAs, SLAs, NDAs, vendor contracts, technology agreements, template libraries, and contract playbooks.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/legal-consulting/contracts-agreements",
  },
};

const services = [
  {
    title: "Master Service Agreements",
    description:
      "We draft and review Master Service Agreements, commonly known as MSAs, for long-term business relationships. These agreements help define the overall terms between parties, including scope of work, service obligations, payment structure, liability, confidentiality, termination, dispute resolution, and renewal terms.",
    points: [
      "Scope of work",
      "Service obligations",
      "Payment structure",
      "Renewal terms",
    ],
  },
  {
    title: "Procurement, Vendor & Distributor Contracts",
    description:
      "We help businesses prepare and review procurement agreements, vendor contracts, supplier agreements, distributor agreements, dealer contracts, channel partner agreements, and service provider contracts. Our focus is to protect your business from unclear pricing, delivery delays, quality issues, liability exposure, and one-sided terms.",
    points: [
      "Vendor contracts",
      "Supplier agreements",
      "Distributor contracts",
      "Channel partner terms",
    ],
  },
  {
    title: "Service Level Agreements",
    description:
      "We draft and review Service Level Agreements that clearly define service expectations, performance standards, timelines, escalation process, penalties, support obligations, downtime handling, and reporting responsibilities.",
    points: [
      "Service standards",
      "Escalation process",
      "Penalty clauses",
      "Support obligations",
    ],
  },
  {
    title: "Non-Disclosure Agreements",
    description:
      "We prepare and review NDAs to protect confidential business information, financial data, customer details, trade secrets, pricing, technology, product ideas, internal processes, and strategic plans.",
    points: [
      "Confidentiality terms",
      "Trade secret protection",
      "Data protection",
      "Information control",
    ],
  },
  {
    title: "Licensing & Technology Agreements",
    description:
      "We support businesses with licensing agreements, technology transfer agreements, software agreements, IP licensing, SaaS contracts, platform usage agreements, and digital service contracts.",
    points: [
      "Software agreements",
      "IP licensing",
      "SaaS contracts",
      "Usage rights",
    ],
  },
  {
    title: "Template Libraries & Playbooks",
    description:
      "We help businesses create standard contract templates and contract playbooks for repeated use. This improves consistency, saves time, reduces dependency on ad-hoc drafting, and helps internal teams understand which clauses are negotiable, risky, or mandatory.",
    points: [
      "Standard templates",
      "Clause playbooks",
      "Negotiation rules",
      "Internal guidance",
    ],
  },
  {
    title: "Contract Review, Redlining & Negotiations",
    description:
      "We review contracts shared by clients, vendors, partners, distributors, employees, consultants, landlords, lenders, or service providers. Our team highlights risk areas, suggests edits, redlines clauses, and supports negotiations to protect your commercial and legal interests.",
    points: [
      "Contract review",
      "Risk comments",
      "Redlined clauses",
      "Negotiation support",
    ],
  },
];

const benefits = [
  {
    title: "Clearer Business Terms",
    description:
      "Proper contracts clearly define what each party must deliver, pay, protect, maintain, and follow. This reduces confusion and future disputes.",
  },
  {
    title: "Lower Legal Risk",
    description:
      "Strong agreements help protect your business from unclear obligations, unfair liability, weak termination rights, poor dispute clauses, and hidden commercial risks.",
  },
  {
    title: "Better Vendor & Customer Management",
    description:
      "Well-drafted contracts create discipline in vendor, customer, distributor, and service provider relationships.",
  },
  {
    title: "Stronger Negotiation Position",
    description:
      "With professional contract review and redlining, your business can negotiate better payment terms, liability caps, delivery obligations, confidentiality protections, and exit rights.",
  },
  {
    title: "Faster Internal Execution",
    description:
      "Standard templates and contract playbooks help sales, procurement, HR, finance, and operations teams close routine agreements faster.",
  },
  {
    title: "Better Protection of Confidential Information",
    description:
      "NDAs, technology agreements, and IP clauses help protect sensitive business information, intellectual property, and commercial know-how.",
  },
];

const keyAreas = [
  "Master Service Agreements",
  "Vendor contracts",
  "Procurement agreements",
  "Distributor and dealer agreements",
  "Service Level Agreements",
  "Non-Disclosure Agreements",
  "Licensing agreements",
  "Technology and software agreements",
  "SaaS and platform agreements",
  "IP assignment and licensing clauses",
  "Consultancy and service agreements",
  "Franchise and channel partner contracts",
  "Contract review and risk analysis",
  "Redlining and clause correction",
  "Contract negotiation support",
  "Template libraries",
  "Contract playbooks",
  "Standard terms and conditions",
  "Renewal, termination, and exit clauses",
  "Confidentiality and data protection clauses",
  "Liability, indemnity, and dispute resolution clauses",
];

const applications = [
  {
    title: "For Vendor & Procurement Management",
    description:
      "We help businesses create contracts that clearly define supply terms, pricing, delivery timelines, payment conditions, quality expectations, penalties, and termination rights.",
  },
  {
    title: "For Service-Based Businesses",
    description:
      "Companies offering services can use MSAs, SLAs, and service agreements to define scope, deliverables, timelines, fees, support standards, and client responsibilities.",
  },
  {
    title: "For Technology & IT Companies",
    description:
      "We support technology companies with software contracts, SaaS agreements, licensing terms, IP ownership clauses, data protection terms, support obligations, and confidentiality requirements.",
  },
  {
    title: "For Distributor & Channel Networks",
    description:
      "Businesses working with distributors, dealers, franchisees, or channel partners need contracts that define territory, targets, margins, brand usage, reporting, termination, and non-compete restrictions.",
  },
  {
    title: "For Startups & Growing Businesses",
    description:
      "Startups often need standard NDAs, service agreements, vendor contracts, employment-related agreements, founder-related documents, and investor-ready contract systems.",
  },
  {
    title: "For Enterprises",
    description:
      "Larger organizations need contract standardization, approval workflows, clause libraries, contract playbooks, legal review systems, and risk-based negotiation guidelines.",
  },
];

const process = [
  {
    title: "Requirement Understanding",
    description:
      "We first understand the business relationship, transaction type, commercial expectations, risks, responsibilities, and practical usage of the agreement.",
  },
  {
    title: "Document Review or Drafting",
    description:
      "Based on your requirement, we either draft a fresh agreement or review an existing document shared by another party.",
  },
  {
    title: "Risk Identification",
    description:
      "We identify unclear clauses, missing protections, one-sided obligations, weak payment terms, liability exposure, confidentiality gaps, and dispute risks.",
  },
  {
    title: "Redlining & Recommendations",
    description:
      "We provide suggested edits, redlines, comments, and practical recommendations so that your team understands what should be accepted, changed, or negotiated.",
  },
  {
    title: "Negotiation Support",
    description:
      "We help prepare negotiation points and support discussions with vendors, customers, partners, distributors, or service providers.",
  },
  {
    title: "Finalization & Template Creation",
    description:
      "Once the document is finalized, we can also help convert it into a reusable template or include it in your internal contract library.",
  },
];

const whyChoose = [
  {
    title: "Practical Contract Advisory",
    description:
      "We create contracts that are legally sound but also practical for real business operations.",
  },
  {
    title: "Business-Aligned Drafting",
    description:
      "Our focus is to protect your business without making agreements unnecessarily complicated or difficult to execute.",
  },
  {
    title: "Legal, Commercial & Risk Perspective",
    description:
      "We review agreements from multiple angles, including legal exposure, commercial impact, operational feasibility, payment risk, and compliance requirements.",
  },
  {
    title: "Support Across Business Functions",
    description:
      "We help sales, procurement, HR, finance, technology, operations, and management teams with their contract needs.",
  },
  {
    title: "Standardization for Long-Term Efficiency",
    description:
      "We do not only handle one contract at a time. We also help businesses build reusable templates, clause libraries, and playbooks for faster future execution.",
  },
];

const deliverables = [
  "Draft Master Service Agreements",
  "Vendor agreement drafts",
  "Procurement contract drafts",
  "Distributor and dealer agreement drafts",
  "Service Level Agreements",
  "Non-Disclosure Agreements",
  "Licensing agreement drafts",
  "Technology and software agreement drafts",
  "Contract review notes",
  "Redlined agreements",
  "Clause risk summary",
  "Negotiation points document",
  "Contract playbook",
  "Standard contract templates",
  "Clause library",
  "Terms and conditions document",
  "Renewal and termination checklist",
  "Contract repository structure",
  "Internal contract approval checklist",
];

const heroItems = [
  "MSAs",
  "Vendor Contracts",
  "SLAs",
  "NDAs",
  "Licensing",
  "Playbooks",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-contracts-agreements"
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
                name: "Contracts & Agreements",
                item: "https://www.asbconsulting.in/legal-consulting/contracts-agreements",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-contracts-agreements"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/contracts-agreements#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/contracts-agreements",
            name: "Contracts & Agreements",
            description:
              "AS Business Consulting helps businesses create, review, negotiate, and manage legally strong and commercially practical contracts including MSAs, SLAs, NDAs, vendor contracts, procurement agreements, distributor contracts, licensing agreements, technology agreements, template libraries, and contract playbooks.",
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

            .contracts-agreements-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .contracts-agreements-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .contracts-agreements-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .contracts-agreements-page .safe-grid,
            .contracts-agreements-page .safe-card,
            .contracts-agreements-page .safe-content {
              min-width: 0;
            }

            .contracts-agreements-page h1,
            .contracts-agreements-page h2,
            .contracts-agreements-page h3,
            .contracts-agreements-page p,
            .contracts-agreements-page span,
            .contracts-agreements-page a,
            .contracts-agreements-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .contracts-agreements-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            @media (max-width: 640px) {
              .contracts-agreements-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .contracts-agreements-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .contracts-agreements-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="contracts-agreements-page w-full max-w-full overflow-x-hidden bg-white text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  Contracts • Agreements • Legal Protection
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Contracts & Agreements
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we help businesses
                  create, review, negotiate, and manage legally strong and
                  commercially practical contracts for clearer documentation,
                  reduced legal risk, better vendor/customer protection, and
                  smoother business relationships.
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
                    Contract Coverage
                  </p>

                  <div className="safe-grid grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {heroItems.map((item, index) => (
                      <div
                        key={index}
                        className={`safe-card rounded-2xl border p-4 ${
                          index % 2 === 0
                            ? "border-[#502D52] bg-[#502D52] text-white"
                            : "border-[#eaddec] bg-white text-[#201723]"
                        }`}
                      >
                        <p
                          className={`text-xs font-bold ${
                            index % 2 === 0
                              ? "text-[#f4d88a]"
                              : "text-[#6d3d70]"
                          }`}
                        >
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
            <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="safe-card rounded-[28px] bg-[#502D52] p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4d88a]">
                  Overview
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Create contracts that protect business relationships
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Contracts are not just formal documents. They define payment
                  terms, responsibilities, timelines, deliverables,
                  confidentiality, liability, termination rights, dispute
                  resolution, and business protection.
                </p>
              </div>

              <div className="safe-card rounded-[28px] border border-[#eaddec] bg-white p-8 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                  Why It Matters
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Avoid weak terms, unclear obligations and future disputes
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-700">
                  A weak or unclear agreement can lead to payment disputes,
                  service gaps, compliance issues, data misuse, intellectual
                  property conflicts, or unnecessary litigation.
                </p>
              </div>
            </div>

            <div className="safe-card mt-8 rounded-[28px] border border-[#eaddec] bg-[#faf8fb] p-8">
              <p className="text-sm leading-7 text-gray-700">
                We support startups, MSMEs, family-owned businesses, growing
                companies, and established enterprises with contract drafting,
                contract review, redlining, negotiation support, standard
                template creation, and contract playbooks.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="w-full max-w-full overflow-hidden bg-[#faf8fb] py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                What AS Business Consulting Delivers
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                Contract drafting, review, redlining and negotiation support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We help businesses prepare clear agreements, identify contract
                risks, improve negotiation positions, and build reusable
                contract systems for long-term efficiency.
              </p>
            </div>

            <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const purple = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`safe-card rounded-[26px] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                      purple
                        ? "border-[#502D52] bg-[#502D52] text-white"
                        : "border-[#eaddec] bg-white text-[#201723]"
                    }`}
                  >
                    <div className="mb-5 flex min-w-0 items-center gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ${
                          purple
                            ? "bg-white text-[#502D52]"
                            : "bg-[#502D52] text-white"
                        }`}
                      >
                        {index + 1}
                      </div>

                      <h3 className="min-w-0 text-lg font-bold leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <p
                      className={`text-sm leading-7 ${
                        purple ? "text-white/78" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="mt-6 flex max-w-full flex-wrap gap-2">
                      {service.points.map((point, pointIndex) => (
                        <span
                          key={pointIndex}
                          className={`safe-pill rounded-full border px-3 py-1.5 text-xs font-medium ${
                            purple
                              ? "border-white/15 bg-white/10 text-white"
                              : "border-[#eaddec] bg-[#faf8fb] text-gray-700"
                          }`}
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
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
                  Clearer terms, lower legal risk and faster contract execution
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Strong contracts help your business reduce disputes, improve
                  vendor and customer discipline, protect confidential
                  information, and close routine agreements faster.
                </p>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-5 md:grid-cols-2">
                {benefits.map((item, index) => {
                  const purple = index % 2 !== 0;

                  return (
                    <div
                      key={index}
                      className={`safe-card rounded-[24px] border p-6 ${
                        purple
                          ? "border-[#502D52] bg-[#502D52] text-white"
                          : "border-[#eaddec] bg-white text-[#201723]"
                      }`}
                    >
                      <p
                        className={`mb-3 text-sm font-bold ${
                          purple ? "text-[#f4d88a]" : "text-[#502D52]"
                        }`}
                      >
                        Benefit {index + 1}
                      </p>

                      <h3 className="text-lg font-bold">{item.title}</h3>

                      <p
                        className={`mt-3 text-sm leading-7 ${
                          purple ? "text-white/78" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* KEY AREAS */}
        <section className="w-full max-w-full overflow-hidden bg-[#faf8fb] py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-card rounded-[30px] bg-[#2f1833] p-8 text-white md:p-10">
              <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-[330px_minmax(0,1fr)]">
                <div className="safe-content">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4d88a]">
                    Key Areas We Cover
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight">
                    Complete contract and agreement support
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From MSAs and NDAs to vendor contracts, SaaS agreements,
                    clause libraries, redlining, negotiation support, and
                    contract playbooks, we help strengthen your documentation
                    system.
                  </p>
                </div>

                <div className="safe-grid grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {keyAreas.map((item, index) => {
                    const white = index % 2 === 0;

                    return (
                      <div
                        key={index}
                        className={`safe-card rounded-2xl border px-4 py-3 text-sm leading-6 ${
                          white
                            ? "border-white bg-white text-[#201723]"
                            : "border-white/10 bg-white/10 text-white/90"
                        }`}
                      >
                        <span
                          className={`mr-2 font-bold ${
                            white ? "text-[#502D52]" : "text-[#f4d88a]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </div>
                    );
                  })}
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
                This service is useful for businesses that need stronger vendor,
                customer, technology, service, channel, procurement, or internal
                contract systems.
              </p>
            </div>

            <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((item, index) => {
                const purple = index % 2 === 1;

                return (
                  <div
                    key={index}
                    className={`safe-card rounded-[24px] border p-6 ${
                      purple
                        ? "border-[#502D52] bg-[#502D52] text-white"
                        : "border-[#eaddec] bg-[#faf8fb] text-[#201723]"
                    }`}
                  >
                    <h3
                      className={`text-lg font-bold ${
                        purple ? "text-white" : "text-[#502D52]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-7 ${
                        purple ? "text-white/78" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="w-full max-w-full overflow-hidden bg-[#faf8fb] py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                Our Process
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                From requirement understanding to final contract system
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a practical process to understand the business
                relationship, draft or review the document, identify risks,
                provide redlines, support negotiation, and finalize templates.
              </p>
            </div>

            <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {process.map((item, index) => {
                const purple = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`safe-card rounded-[24px] border p-6 shadow-sm ${
                      purple
                        ? "border-[#502D52] bg-[#502D52] text-white"
                        : "border-[#eaddec] bg-white text-[#201723]"
                    }`}
                  >
                    <div
                      className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold ${
                        purple
                          ? "bg-white text-[#502D52]"
                          : "bg-[#502D52] text-white"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold">{item.title}</h3>

                    <p
                      className={`mt-3 text-sm leading-7 ${
                        purple ? "text-white/78" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="w-full max-w-full overflow-hidden bg-white py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="safe-card rounded-[28px] border border-[#eaddec] bg-white p-8 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                  Why Choose AS Business Consulting?
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                  Practical, business-aligned contract advisory
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We create contracts that are legally sound, commercially
                  practical, easy to execute, and useful for real business
                  operations across sales, procurement, HR, finance, technology,
                  operations, and management.
                </p>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-5 md:grid-cols-2">
                {whyChoose.map((item, index) => {
                  const purple = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className={`safe-card rounded-[24px] border p-6 ${
                        purple
                          ? "border-[#502D52] bg-[#502D52] text-white"
                          : "border-[#eaddec] bg-[#faf8fb] text-[#201723]"
                      }`}
                    >
                      <p
                        className={`mb-3 text-sm font-bold ${
                          purple ? "text-[#f4d88a]" : "text-[#502D52]"
                        }`}
                      >
                        0{index + 1}
                      </p>

                      <h3 className="text-lg font-bold">{item.title}</h3>

                      <p
                        className={`mt-3 text-sm leading-7 ${
                          purple ? "text-white/78" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="w-full max-w-full overflow-hidden bg-[#faf8fb] py-14">
          <div className="safe-container mx-auto max-w-7xl px-5">
            <div className="safe-card rounded-[30px] border border-[#eaddec] bg-white p-8 md:p-10">
              <div className="safe-grid grid grid-cols-1 gap-8 lg:grid-cols-[330px_minmax(0,1fr)]">
                <div className="safe-card rounded-[24px] bg-[#502D52] p-6 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f4d88a]">
                    Typical Deliverables
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight">
                    Drafts, redlines, templates and contract systems
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    We provide practical contract outputs that help your team
                    review, negotiate, approve, reuse, and manage agreements
                    with better consistency.
                  </p>
                </div>

                <div className="safe-grid grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {deliverables.map((item, index) => {
                    const purple = index % 2 === 1;

                    return (
                      <div
                        key={index}
                        className={`safe-card rounded-2xl border px-4 py-3 text-sm font-medium ${
                          purple
                            ? "border-[#502D52] bg-[#502D52] text-white"
                            : "border-[#eaddec] bg-[#faf8fb] text-gray-700"
                        }`}
                      >
                        {item}
                      </div>
                    );
                  })}
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
                  Protect Your Business Relationships
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Protect your business relationships with clear, practical, and
                  well-structured contracts.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Connect with AS Business Consulting for contract drafting,
                  agreement review, redlining, negotiation support, template
                  libraries, and contract playbooks tailored to your business
                  needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Contract Support →
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