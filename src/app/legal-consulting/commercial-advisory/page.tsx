import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Commercial Advisory & Transactions | AS Business Consulting",
  description:
    "AS Business Consulting provides Commercial Advisory & Transactions support including mergers and acquisitions advisory, joint ventures, partnerships, slump sales, business transfers, commercial risk reviews, competition and taxation interface, and dispute resolution strategy.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/legal-consulting/commercial-advisory",
  },
};

const services = [
  {
    title: "Mergers & Acquisitions Advisory",
    description:
      "We support businesses in planning and executing mergers and acquisitions with proper legal, commercial, and compliance guidance. Our advisory includes deal structuring, document review, risk identification, due diligence coordination, negotiation support, and transaction closure assistance.",
    points: [
      "Deal structuring",
      "Document review",
      "Due diligence coordination",
      "Closure assistance",
    ],
  },
  {
    title: "Joint Ventures & Partnerships",
    description:
      "We help companies create clear and balanced joint venture and partnership arrangements. This includes defining roles, investment terms, profit sharing, management control, exit rights, dispute handling, confidentiality, and operational responsibilities.",
    points: [
      "JV structuring",
      "Partnership terms",
      "Profit sharing",
      "Exit rights",
    ],
  },
  {
    title: "Slump Sales & Business Transfers",
    description:
      "We assist businesses in structuring and documenting slump sales, asset transfers, unit transfers, business transfers, and operational handovers. Our focus is to make the transaction legally clear, commercially practical, and aligned with taxation and compliance considerations.",
    points: [
      "Slump sale support",
      "Asset transfers",
      "Business handover",
      "Transfer documentation",
    ],
  },
  {
    title: "Commercial Risk Reviews",
    description:
      "Before entering any major business arrangement, we review key commercial risks such as payment exposure, liability clauses, indemnity, warranties, termination rights, competition restrictions, regulatory risks, and operational dependency.",
    points: [
      "Liability review",
      "Payment exposure",
      "Indemnity clauses",
      "Termination rights",
    ],
  },
  {
    title: "Competition & Taxation Interface",
    description:
      "We help businesses understand the legal and commercial impact of competition-related issues, taxation alignment, transaction structure, pricing, transfer terms, and regulatory considerations that may affect the deal.",
    points: [
      "Competition review",
      "Taxation alignment",
      "Pricing terms",
      "Regulatory checks",
    ],
  },
  {
    title: "Dispute Resolution Strategy",
    description:
      "We support businesses in planning dispute resolution strategies through negotiation, mediation, arbitration, and litigation support. Our aim is to reduce business disruption, protect commercial interests, and resolve matters efficiently.",
    points: [
      "Negotiation strategy",
      "Mediation support",
      "Arbitration planning",
      "Litigation coordination",
    ],
  },
];

const benefits = [
  {
    title: "Better Deal Clarity",
    description:
      "You get a clear understanding of transaction terms, responsibilities, risks, obligations, and expected outcomes before committing to a deal.",
  },
  {
    title: "Reduced Commercial Risk",
    description:
      "Proper review and documentation reduce the chances of future disputes, financial exposure, unclear liabilities, and business disruption.",
  },
  {
    title: "Stronger Negotiation Position",
    description:
      "With professional advisory, your business can negotiate better terms, identify weak clauses, and protect its commercial interests.",
  },
  {
    title: "Smoother Transaction Execution",
    description:
      "Structured documentation, due diligence, timelines, approvals, and closing support help complete transactions more efficiently.",
  },
  {
    title: "Improved Legal & Financial Alignment",
    description:
      "Commercial decisions are reviewed from legal, compliance, finance, taxation, and operational angles, helping the business avoid costly mistakes.",
  },
  {
    title: "Better Dispute Preparedness",
    description:
      "When disputes arise, a clear strategy helps your business respond calmly, protect evidence, manage communication, and choose the right resolution route.",
  },
];

const keyAreas = [
  "Mergers and acquisitions advisory",
  "Joint venture structuring",
  "Partnership documentation",
  "Slump sale advisory",
  "Business transfer documentation",
  "Asset and unit transfer support",
  "Commercial agreement review",
  "Transaction risk assessment",
  "Due diligence coordination",
  "Competition-related commercial review",
  "Taxation interface advisory",
  "Negotiation support",
  "Term sheet review",
  "Deal structuring support",
  "Exit and termination planning",
  "Dispute resolution strategy",
  "Mediation, arbitration, and litigation support coordination",
  "Commercial risk register preparation",
  "Transaction closure documentation",
];

const applications = [
  {
    title: "For Business Expansion",
    description:
      "When a company wants to grow through acquisition, partnership, joint venture, or strategic collaboration, we help structure the deal properly.",
  },
  {
    title: "For Business Restructuring",
    description:
      "Companies planning ownership changes, business transfers, unit transfers, or operational restructuring can use our advisory to reduce legal and commercial risk.",
  },
  {
    title: "For Investor or Partner Entry",
    description:
      "When a new investor, partner, or strategic collaborator enters the business, we help review the terms, rights, obligations, control structure, and exit conditions.",
  },
  {
    title: "For Buying or Selling a Business",
    description:
      "We support buyers and sellers in reviewing transaction documents, understanding liabilities, assessing risks, and closing business transfer arrangements.",
  },
  {
    title: "For High-Value Commercial Agreements",
    description:
      "When a business enters important vendor, distributor, licensing, franchise, supply, or service agreements, we help review the commercial and legal impact.",
  },
  {
    title: "For Dispute-Prone Transactions",
    description:
      "If a transaction has unclear obligations, payment concerns, ownership issues, performance delays, or contract breaches, we help plan the right dispute resolution approach.",
  },
];

const process = [
  {
    title: "Transaction Understanding",
    description:
      "We first understand the business objective, proposed deal structure, parties involved, commercial expectations, and major concerns.",
  },
  {
    title: "Document & Risk Review",
    description:
      "We review term sheets, agreements, financial assumptions, obligations, liabilities, approvals, and commercial risks linked to the transaction.",
  },
  {
    title: "Structuring & Advisory",
    description:
      "We advise on transaction structure, documentation requirements, negotiation points, taxation interface, compliance needs, and risk protection measures.",
  },
  {
    title: "Negotiation Support",
    description:
      "We help identify key negotiation points, risky clauses, missing protections, unclear responsibilities, and better commercial positions.",
  },
  {
    title: "Documentation Support",
    description:
      "We assist with drafting, reviewing, redlining, and finalizing transaction documents, partnership agreements, business transfer documents, and supporting records.",
  },
  {
    title: "Closure & Post-Transaction Support",
    description:
      "We support transaction closure, handover documentation, compliance follow-ups, and post-transaction risk tracking where required.",
  },
];

const whyChoose = [
  {
    title: "Practical Commercial Understanding",
    description:
      "We do not look at transactions only from a legal angle. We also consider business operations, finance, taxation, risk, and long-term commercial impact.",
  },
  {
    title: "End-to-End Transaction Support",
    description:
      "From initial review and structuring to negotiation, documentation, closure, and dispute strategy, we provide complete advisory support.",
  },
  {
    title: "Strong Risk Identification",
    description:
      "We help businesses detect hidden risks before signing agreements, entering partnerships, or transferring business assets.",
  },
  {
    title: "Business-Friendly Documentation",
    description:
      "Our documents and advisory are designed to be clear, practical, and usable for real business decision-making.",
  },
  {
    title: "Suitable for Multiple Business Sizes",
    description:
      "We support startups, MSMEs, family businesses, growing companies, and established enterprises with transaction and commercial advisory needs.",
  },
];

const deliverables = [
  "Transaction review note",
  "Commercial risk assessment",
  "Deal structuring advisory",
  "Term sheet review",
  "Joint venture agreement support",
  "Partnership agreement support",
  "Business transfer documentation",
  "Slump sale documentation support",
  "Due diligence checklist",
  "Commercial risk register",
  "Negotiation points summary",
  "Redlined agreements",
  "Exit and termination planning note",
  "Dispute resolution strategy note",
  "Mediation, arbitration, or litigation support coordination",
  "Transaction closure checklist",
  "Post-transaction compliance tracker",
];

const heroItems = [
  "M&A Advisory",
  "Joint Ventures",
  "Business Transfers",
  "Risk Reviews",
  "Tax Interface",
  "Dispute Strategy",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-commercial-advisory-transactions"
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
                name: "Commercial Advisory & Transactions",
                item: "https://www.asbconsulting.in/legal-consulting/commercial-advisory-transactions",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-commercial-advisory-transactions"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/commercial-advisory-transactions#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/commercial-advisory-transactions",
            name: "Commercial Advisory & Transactions",
            description:
              "AS Business Consulting provides practical commercial advisory and transaction support for mergers and acquisitions, joint ventures, partnerships, slump sales, business transfers, commercial risk reviews, taxation interface, competition considerations, and dispute resolution strategy.",
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

            .commercial-advisory-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .commercial-advisory-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .commercial-advisory-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .commercial-advisory-page .safe-grid,
            .commercial-advisory-page .safe-card,
            .commercial-advisory-page .safe-content {
              min-width: 0;
            }

            .commercial-advisory-page h1,
            .commercial-advisory-page h2,
            .commercial-advisory-page h3,
            .commercial-advisory-page p,
            .commercial-advisory-page span,
            .commercial-advisory-page a,
            .commercial-advisory-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .commercial-advisory-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            @media (max-width: 640px) {
              .commercial-advisory-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .commercial-advisory-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .commercial-advisory-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="commercial-advisory-page w-full max-w-full overflow-x-hidden bg-white text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  Commercial Advisory • Transactions • Deal Risk
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Commercial Advisory & Transactions
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we provide
                  practical and business-focused Commercial Advisory &
                  Transactions support to help companies manage complex business
                  deals, partnerships, transfers, restructuring, and commercial
                  risk with clarity and control.
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
                    Transaction Coverage
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
                  Structure complex business deals with clarity and control
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Business transactions such as mergers, acquisitions, joint
                  ventures, partnership arrangements, slump sales, business
                  transfers, and strategic collaborations require more than
                  basic documentation. They need proper legal review, financial
                  understanding, commercial risk assessment, negotiation support,
                  and structured execution.
                </p>
              </div>

              <div className="safe-card rounded-[28px] border border-[#eaddec] bg-white p-8 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#502D52]">
                  Our Advisory Focus
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Review every transaction from legal, commercial and risk angles
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-700">
                  Our team helps businesses evaluate the transaction from legal,
                  commercial, taxation, compliance, and risk perspectives so
                  that every important decision is supported by proper
                  documentation and professional advisory.
                </p>
              </div>
            </div>

            <div className="safe-card mt-8 rounded-[28px] border border-[#eaddec] bg-[#faf8fb] p-8">
              <p className="text-sm leading-7 text-gray-700">
                We work with startups, MSMEs, family-owned businesses, growing
                enterprises, and established companies that need reliable
                transaction advisory for business expansion, restructuring,
                investment, partnership, or dispute management.
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
                Transaction advisory, deal review and commercial risk support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We help businesses plan, review, negotiate, document, close, and
                manage commercial transactions with stronger legal and commercial
                protection.
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
                  Better deal clarity, lower risk and stronger negotiation power
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Strong transaction advisory helps your business understand
                  obligations, reduce future disputes, protect commercial
                  interests, and execute deals with better control.
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
                    Complete transaction and commercial advisory coverage
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From deal structuring and term sheet review to business
                    transfer documentation and dispute strategy, we help protect
                    your commercial position at every important stage.
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
                This service is useful when your business is entering,
                reviewing, negotiating, transferring, restructuring, or resolving
                high-value commercial arrangements.
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
                From transaction understanding to post-transaction support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a practical process to understand the deal, review
                risks, structure the transaction, support negotiation, finalize
                documentation, and manage closure requirements.
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
                  Practical, business-focused transaction advisory
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We do not review transactions only as legal paperwork. We
                  understand the commercial impact, operational risk, financial
                  angle, taxation interface, negotiation position, and long-term
                  business consequences.
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
                    Documents, review notes and transaction support outputs
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    We provide practical documents and advisory outputs that
                    support negotiation, risk control, transaction closure, and
                    post-transaction follow-up.
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
                  Make Business Transactions Clearer and Safer
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Make your business transactions clearer, safer, and better
                  structured.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Speak with AS Business Consulting experts for commercial
                  advisory, transaction support, deal review, partnership
                  structuring, business transfers, and dispute resolution
                  strategy tailored to your business needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Commercial Advisory →
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