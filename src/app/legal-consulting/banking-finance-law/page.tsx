import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Banking & Finance Law Advisory | AS Business Consulting",
  description:
    "AS Business Consulting provides Banking & Finance Law advisory including loan documentation, term sheets, security documents, project finance, debt restructuring, fund-flow controls, covenant monitoring, lender-borrower negotiations, and collateral protection.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/legal-consulting/banking-finance-law",
  },
};

const services = [
  {
    title: "Term Sheets",
    description:
      "We help businesses review and prepare term sheets for loans, investments, project finance, debt arrangements, working capital facilities, and structured finance transactions. A clear term sheet helps both parties understand the key commercial and legal terms before moving into detailed documentation.",
    points: [
      "Loan term sheets",
      "Investment terms",
      "Project finance terms",
      "Structured finance transactions",
    ],
  },
  {
    title: "Loan & Security Documents",
    description:
      "We assist in drafting, reviewing, and negotiating loan agreements, security documents, mortgage documents, hypothecation agreements, pledge documents, guarantees, indemnities, and other finance-related legal documents.",
    points: [
      "Loan agreements",
      "Security documents",
      "Guarantees and indemnities",
      "Mortgage and pledge documents",
    ],
  },
  {
    title: "Project Finance Support",
    description:
      "We support businesses and project owners in structuring project finance documentation for infrastructure, manufacturing, expansion, construction, real estate, technology, and other capital-intensive projects.",
    points: [
      "Project finance documents",
      "Fund utilization review",
      "Security package review",
      "Project risk allocation",
    ],
  },
  {
    title: "Debt Restructuring",
    description:
      "We advise businesses facing repayment pressure, cash-flow mismatch, lender concerns, or financial stress. Our support includes restructuring proposals, revised repayment plans, negotiation points, documentation review, and risk management.",
    points: [
      "Restructuring proposals",
      "Revised repayment plans",
      "Lender discussion support",
      "Risk management",
    ],
  },
  {
    title: "Fund-Flow Controls",
    description:
      "We help create fund-flow structures that define how money is received, used, monitored, and reported. This is important for project finance, investor-backed businesses, working capital arrangements, and restricted-use funding.",
    points: [
      "Fund usage structure",
      "Money flow monitoring",
      "Reporting controls",
      "Purpose-based fund tracking",
    ],
  },
  {
    title: "Covenant Monitoring",
    description:
      "We help businesses understand and monitor loan covenants, financial conditions, reporting requirements, repayment obligations, security maintenance, and default triggers to prevent accidental breaches.",
    points: [
      "Loan covenant tracking",
      "Reporting requirements",
      "Default trigger review",
      "Security maintenance",
    ],
  },
  {
    title: "Lender & Borrower Negotiations",
    description:
      "We support both lenders and borrowers in reviewing finance terms, identifying risk points, negotiating repayment structures, revising documentation, and protecting commercial interests during funding or restructuring discussions.",
    points: [
      "Finance term review",
      "Risk point identification",
      "Repayment negotiation",
      "Commercial protection",
    ],
  },
  {
    title: "Collateral & Asset Protection",
    description:
      "We advise on collateral structure, asset security, charge creation, documentation, ownership clarity, enforcement risk, and protection of business assets.",
    points: [
      "Collateral planning",
      "Asset security",
      "Charge creation",
      "Ownership clarity",
    ],
  },
];

const benefits = [
  {
    title: "Clearer Finance Documentation",
    description:
      "Proper finance documents help define loan amount, repayment schedule, interest terms, security, guarantees, covenants, default events, and rights of both parties.",
  },
  {
    title: "Reduced Financial & Legal Risk",
    description:
      "Strong documentation and review reduce the risk of unclear obligations, unexpected liabilities, covenant breaches, collateral disputes, and enforcement issues.",
  },
  {
    title: "Better Negotiation Position",
    description:
      "Professional review helps businesses negotiate repayment terms, security requirements, default clauses, lender conditions, and restructuring options more effectively.",
  },
  {
    title: "Improved Lender Confidence",
    description:
      "Well-organized documentation, fund-flow clarity, and proper security structure create confidence for banks, NBFCs, investors, and financial institutions.",
  },
  {
    title: "Stronger Cash-Flow Discipline",
    description:
      "Fund-flow controls and covenant monitoring help businesses manage borrowed funds responsibly and avoid misuse, reporting gaps, or compliance failures.",
  },
  {
    title: "Better Debt Management",
    description:
      "Debt restructuring support helps businesses handle financial pressure through practical repayment plans, revised terms, and structured lender communication.",
  },
];

const keyAreas = [
  "Term sheet review and preparation",
  "Loan agreement drafting and review",
  "Security document review",
  "Project finance documentation",
  "Debt restructuring advisory",
  "Working capital finance documentation",
  "Mortgage, pledge, hypothecation, and guarantee documents",
  "Fund-flow control structures",
  "Covenant monitoring support",
  "Lender and borrower negotiation support",
  "Collateral structuring",
  "Asset protection advisory",
  "Charge creation and security documentation support",
  "Default clause review",
  "Repayment structure review",
  "Financial risk identification",
  "Borrower obligation mapping",
  "Lender protection review",
  "Restructuring proposal support",
  "Finance transaction closure documentation",
];

const applications = [
  {
    title: "For Businesses Taking Loans",
    description:
      "We help businesses review loan terms, understand repayment obligations, evaluate security requirements, and avoid signing one-sided or unclear finance documents.",
  },
  {
    title: "For Banks, NBFCs & Lenders",
    description:
      "We support lenders with documentation review, borrower risk assessment, security structuring, covenant planning, collateral protection, and recovery-readiness documentation.",
  },
  {
    title: "For Project Developers",
    description:
      "Businesses involved in construction, infrastructure, manufacturing, real estate, technology, or expansion projects can use our support for project finance documentation and fund-flow controls.",
  },
  {
    title: "For Companies Facing Debt Pressure",
    description:
      "When a business is struggling with repayment timelines, cash-flow mismatch, or lender pressure, we help prepare restructuring proposals and negotiation strategies.",
  },
  {
    title: "For Investor-Backed Businesses",
    description:
      "Businesses using investor funds, structured finance, or special-purpose funding need clear fund-flow rules, reporting systems, and finance documentation.",
  },
  {
    title: "For Businesses Protecting Assets",
    description:
      "We assist businesses in understanding collateral exposure, asset security, charge-related documentation, and protection of important business assets.",
  },
];

const process = [
  {
    title: "Requirement Understanding",
    description:
      "We first understand the finance requirement, loan structure, lender or borrower position, repayment expectations, security arrangement, and business objective.",
  },
  {
    title: "Document Review",
    description:
      "We review term sheets, loan agreements, security documents, guarantees, collateral records, repayment terms, covenants, and related finance documents.",
  },
  {
    title: "Risk Identification",
    description:
      "We identify unclear terms, harsh default clauses, excessive security exposure, weak repayment flexibility, covenant risks, and documentation gaps.",
  },
  {
    title: "Advisory & Structuring",
    description:
      "We provide practical recommendations on finance structure, repayment planning, security documents, fund-flow controls, covenant monitoring, and risk protection.",
  },
  {
    title: "Negotiation Support",
    description:
      "We help prepare negotiation points for lenders, borrowers, investors, or financial institutions so that the terms become clearer and commercially balanced.",
  },
  {
    title: "Final Documentation & Monitoring",
    description:
      "We assist in finalizing documents and, where required, support ongoing monitoring of covenants, reporting requirements, fund usage, and compliance obligations.",
  },
];

const whyChoose = [
  {
    title: "Practical Finance-Legal Understanding",
    description:
      "We understand both legal documentation and business finance realities. This helps us create advice that is legally strong and commercially workable.",
  },
  {
    title: "Support for Both Lenders & Borrowers",
    description:
      "Our advisory can support borrowers seeking fair and manageable terms, as well as lenders seeking proper security, documentation, and risk protection.",
  },
  {
    title: "Risk-Focused Approach",
    description:
      "We help identify hidden risks in loan documents, security structures, covenants, collateral exposure, and repayment obligations before they become major problems.",
  },
  {
    title: "Multidisciplinary Support",
    description:
      "Our team connects legal, finance, compliance, taxation, and business advisory perspectives to provide complete transaction support.",
  },
  {
    title: "Clear & Business-Friendly Documentation",
    description:
      "We focus on documents that are clear, enforceable, practical, and easy for management teams to understand and implement.",
  },
];

const deliverables = [
  "Term sheet review note",
  "Loan agreement review",
  "Security document review",
  "Project finance documentation support",
  "Debt restructuring proposal",
  "Repayment structure note",
  "Fund-flow control framework",
  "Covenant monitoring checklist",
  "Lender negotiation points",
  "Borrower negotiation points",
  "Collateral and asset protection note",
  "Finance risk register",
  "Default clause review summary",
  "Charge and security documentation checklist",
  "Documentation gap report",
  "Corrective action plan",
  "Finance transaction closure checklist",
  "Ongoing compliance and covenant tracker",
];

const heroItems = [
  "Term Sheets",
  "Loan Documents",
  "Project Finance",
  "Debt Restructuring",
  "Fund-Flow Controls",
  "Collateral Protection",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-banking-finance-law"
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
                name: "Banking & Finance Law",
                item: "https://www.asbconsulting.in/legal-consulting/banking-finance-law",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-banking-finance-law"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/banking-finance-law#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/banking-finance-law",
            name: "Banking & Finance Law",
            description:
              "AS Business Consulting provides Banking & Finance Law advisory to help businesses manage funding transactions, loan documentation, security arrangements, project finance, debt restructuring, lender negotiations, fund-flow controls, covenant monitoring, and financial risk protection.",
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

            .banking-finance-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .banking-finance-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .banking-finance-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .banking-finance-page .safe-grid,
            .banking-finance-page .safe-card,
            .banking-finance-page .safe-content {
              min-width: 0;
            }

            .banking-finance-page h1,
            .banking-finance-page h2,
            .banking-finance-page h3,
            .banking-finance-page p,
            .banking-finance-page span,
            .banking-finance-page a,
            .banking-finance-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .banking-finance-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            .banking-finance-page .safe-no-overflow {
              max-width: 100%;
              overflow-x: hidden;
            }

            @media (max-width: 640px) {
              .banking-finance-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .banking-finance-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .banking-finance-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="banking-finance-page w-full max-w-full overflow-x-hidden bg-[#faf8fb] text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  Finance Law • Loan Documents • Risk Protection
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Banking & Finance Law
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we provide
                  practical and well-structured banking and finance law advisory
                  to help businesses manage funding transactions, loan
                  documentation, security arrangements, project finance, debt
                  restructuring, lender negotiations, and financial risk
                  protection.
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
                  Manage finance transactions with stronger documentation and
                  lower risk
                </h2>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6">
                  <p className="text-sm leading-7 text-gray-700">
                    Banking and finance matters require careful documentation
                    because even a small mistake in loan terms, security
                    documents, repayment conditions, covenants, or collateral
                    structure can create major financial and legal problems
                    later.
                  </p>
                </div>

                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-gray-700">
                    We support startups, MSMEs, family-owned businesses, growing
                    companies, project developers, borrowers, lenders, investors,
                    and enterprises with banking documentation, finance
                    transactions, restructuring advisory, covenant monitoring,
                    and asset protection support.
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
                Finance documentation, transaction advisory and risk protection
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Our focus is to make finance-related legal documentation clear,
                commercially practical, compliant, and aligned with the
                business’s financial capacity and long-term goals.
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
                  Better finance clarity, stronger lender confidence and lower
                  legal exposure
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Strong finance documentation protects commercial interests,
                  improves negotiation strength, and helps businesses manage
                  borrowed funds with better discipline.
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
                    Complete banking and finance law coverage
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From loan agreements to collateral structuring and covenant
                    monitoring, we help businesses create safer and clearer
                    finance transaction systems.
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
                This service is useful for businesses, lenders, borrowers,
                developers, investors, and companies that need clear finance
                documentation, safer funding structures, and better risk
                protection.
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
                From requirement review to final documentation
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a practical process that helps identify finance risks,
                improve documentation, support negotiations, and monitor
                covenants or fund usage where required.
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
                  Practical finance-law advisory for real business decisions
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We help businesses protect themselves before finance terms,
                  repayment obligations, collateral exposure, or documentation
                  gaps become expensive problems.
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
                    Notes, checklists, frameworks and transaction support
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    We provide practical finance-law documents, review notes,
                    frameworks, trackers, and action plans that support safer
                    finance transactions and better lender-borrower clarity.
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
                  Manage Finance Transactions With Confidence
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Manage your banking and finance transactions with better
                  clarity, stronger documentation, and reduced risk.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Connect with AS Business Consulting for loan documentation,
                  project finance advisory, debt restructuring, fund-flow
                  controls, covenant monitoring, lender-borrower negotiations,
                  and collateral protection support tailored to your business
                  needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Finance Law Advisory →
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