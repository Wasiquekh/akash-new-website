import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Background Investigation & Due Diligence | AS Business Consulting",
  description:
    "AS Business Consulting provides Background Investigation & Due Diligence services including vendor due diligence, partner verification, leadership checks, employee background checks where applicable, integrity reviews, document review, and risk reporting.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/legal-consulting/background-investigation-due-diligence",
  },
};

const services = [
  {
    title: "Vendor Due Diligence",
    description:
      "We help businesses review vendors before onboarding or renewing important contracts. This may include checking company profile, registration details, business credibility, compliance records, litigation indicators, financial stability, ownership details, service capability, and reputation signals.",
    points: [
      "Company profile",
      "Compliance records",
      "Financial stability",
      "Reputation signals",
    ],
  },
  {
    title: "Partner Due Diligence",
    description:
      "Before entering partnerships, joint ventures, collaborations, distribution arrangements, franchise models, or strategic alliances, we help review the background, credibility, risk profile, and business conduct of the proposed partner.",
    points: [
      "Partner credibility",
      "Risk profile",
      "Business conduct",
      "Alliance review",
    ],
  },
  {
    title: "Leadership Due Diligence",
    description:
      "We support companies, investors, and boards in reviewing senior management, promoters, directors, advisors, consultants, or key decision-makers. This helps assess credibility, past conduct, professional history, potential conflicts, and integrity-related risks.",
    points: [
      "Senior management review",
      "Promoter checks",
      "Conflict review",
      "Integrity risks",
    ],
  },
  {
    title: "Employee Background Checks",
    description:
      "Where applicable and legally permissible, we assist with employee background verification support for selected roles. This may include employment history, education verification, identity checks, reference checks, and role-specific risk indicators.",
    points: [
      "Employment history",
      "Education verification",
      "Identity checks",
      "Reference checks",
    ],
  },
  {
    title: "Integrity Reviews",
    description:
      "We help businesses conduct integrity reviews to assess potential red flags related to conflict of interest, undisclosed relationships, business ethics, financial conduct, vendor favoritism, policy violations, or reputational concerns.",
    points: [
      "Conflict of interest",
      "Business ethics",
      "Policy violations",
      "Reputation concerns",
    ],
  },
  {
    title: "Document & Record Review",
    description:
      "We review available documents, declarations, registrations, contracts, public records, internal records, and supporting information to identify gaps, inconsistencies, or risk areas.",
    points: [
      "Declarations",
      "Registrations",
      "Public records",
      "Internal records",
    ],
  },
  {
    title: "Risk Reporting",
    description:
      "We prepare clear and practical due diligence reports that summarize key findings, risk observations, missing information, supporting records, and recommended next actions.",
    points: [
      "Risk observations",
      "Missing information",
      "Supporting records",
      "Next actions",
    ],
  },
];

const benefits = [
  {
    title: "Better Decision-Making",
    description:
      "Due diligence gives management a clearer view of who they are dealing with before signing agreements, hiring key people, approving vendors, or entering transactions.",
  },
  {
    title: "Reduced Fraud & Misrepresentation Risk",
    description:
      "Background checks and integrity reviews help detect false claims, hidden relationships, weak credentials, undisclosed disputes, or suspicious business conduct.",
  },
  {
    title: "Safer Vendor & Partner Selection",
    description:
      "A structured review process helps businesses select vendors, partners, distributors, consultants, and service providers with better confidence.",
  },
  {
    title: "Improved Compliance & Governance",
    description:
      "Due diligence supports stronger procurement, HR, finance, legal, and board-level governance by creating a documented review process.",
  },
  {
    title: "Lower Reputational Risk",
    description:
      "Working with the wrong vendor, partner, or senior person can damage business credibility. Proper investigation helps reduce reputational exposure.",
  },
  {
    title: "Stronger Internal Control",
    description:
      "Regular due diligence and integrity reviews help create accountability, transparency, and better risk monitoring across the organization.",
  },
];

const keyAreas = [
  "Vendor due diligence",
  "Partner due diligence",
  "Leadership due diligence",
  "Promoter and director background review",
  "Employee background checks where applicable",
  "Integrity reviews",
  "Business credibility checks",
  "Company profile verification",
  "Ownership and management review",
  "Registration and compliance review",
  "Litigation and dispute indicator checks",
  "Reputation and conduct review",
  "Conflict of interest review",
  "Reference checks",
  "Employment history verification support",
  "Education verification support",
  "Vendor onboarding risk review",
  "Procurement due diligence",
  "Transaction-related background checks",
  "Risk observation reports",
  "Corrective action recommendations",
];

const applications = [
  {
    title: "For Vendor Onboarding",
    description:
      "Before appointing a vendor, supplier, distributor, consultant, or service provider, businesses can use due diligence to review credibility, capacity, compliance, and risk indicators.",
  },
  {
    title: "For Partnerships & Joint Ventures",
    description:
      "When entering a joint venture, strategic partnership, franchise arrangement, collaboration, or business alliance, partner due diligence helps reduce hidden risks.",
  },
  {
    title: "For Senior Hiring",
    description:
      "For leadership roles, finance roles, compliance roles, procurement roles, and sensitive positions, background checks and integrity reviews can help improve hiring confidence.",
  },
  {
    title: "For Investment & Business Transactions",
    description:
      "Investors, lenders, promoters, and management teams can use due diligence to assess people, partners, vendors, and transaction-related risk before final approval.",
  },
  {
    title: "For Internal Investigations",
    description:
      "Where there are concerns around vendor favoritism, conflict of interest, policy violations, fraud indicators, or misconduct, integrity reviews can help identify facts and risks.",
  },
  {
    title: "For Compliance & Governance Systems",
    description:
      "Companies can include due diligence as part of procurement policy, HR policy, vendor management process, board reporting, and risk management framework.",
  },
];

const process = [
  {
    title: "Requirement Understanding",
    description:
      "We first understand the purpose of the background check or due diligence, the party involved, the risk level, the available documents, and the decision being considered.",
  },
  {
    title: "Information Collection",
    description:
      "We collect and review relevant information such as company details, identification records, declarations, contracts, registrations, references, public records, and internal documents where applicable.",
  },
  {
    title: "Verification & Review",
    description:
      "We verify available information, review inconsistencies, assess credibility indicators, and identify possible gaps or red flags.",
  },
  {
    title: "Risk Assessment",
    description:
      "We categorize findings based on risk level, business impact, compliance relevance, and decision-making importance.",
  },
  {
    title: "Reporting",
    description:
      "We prepare a clear due diligence or background investigation report with findings, observations, red flags, missing information, and recommended actions.",
  },
  {
    title: "Advisory Support",
    description:
      "We help management decide whether to proceed, seek additional documents, modify terms, add safeguards, or reject the proposed relationship.",
  },
];

const whyChoose = [
  {
    title: "Confidential & Professional Approach",
    description:
      "Background investigation and due diligence require privacy, discretion, and responsible handling of sensitive information. We maintain a structured and confidential process.",
  },
  {
    title: "Practical Risk Reporting",
    description:
      "Our reports are not filled with unnecessary complexity. We provide clear findings, risk observations, and action points that management can actually use.",
  },
  {
    title: "Business-Focused Review",
    description:
      "We look at due diligence from a commercial, legal, compliance, governance, and operational risk perspective.",
  },
  {
    title: "Support Across Departments",
    description:
      "Our services are useful for HR, procurement, finance, legal, compliance, board, and management teams.",
  },
  {
    title: "Prevention-First Mindset",
    description:
      "We help businesses identify issues before they lead to fraud, disputes, compliance problems, financial loss, or reputational damage.",
  },
];

const deliverables = [
  "Vendor due diligence report",
  "Partner due diligence report",
  "Leadership background review",
  "Employee background check support report",
  "Integrity review report",
  "Business credibility note",
  "Ownership and management review summary",
  "Registration and compliance check summary",
  "Litigation and dispute indicator summary",
  "Conflict of interest review note",
  "Red flag report",
  "Risk rating summary",
  "Missing document checklist",
  "Verification observation report",
  "Corrective action recommendations",
  "Vendor onboarding risk checklist",
  "Partner approval checklist",
  "Management decision note",
  "Due diligence tracker format",
];

const heroItems = [
  "Vendor Checks",
  "Partner Review",
  "Leadership Checks",
  "Employee Checks",
  "Integrity Review",
  "Risk Reports",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-background-investigation-due-diligence"
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
                name: "Background Investigation & Due Diligence",
                item: "https://www.asbconsulting.in/legal-consulting/background-investigation-due-diligence",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-background-investigation-due-diligence"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/background-investigation-due-diligence#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/background-investigation-due-diligence",
            name: "Background Investigation & Due Diligence",
            description:
              "AS Business Consulting provides structured and confidential Background Investigation & Due Diligence services for vendor due diligence, partner verification, leadership checks, employee background checks where applicable, integrity reviews, document review, and risk reporting.",
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

            .background-due-diligence-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .background-due-diligence-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .background-due-diligence-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .background-due-diligence-page .safe-grid,
            .background-due-diligence-page .safe-card,
            .background-due-diligence-page .safe-content {
              min-width: 0;
            }

            .background-due-diligence-page h1,
            .background-due-diligence-page h2,
            .background-due-diligence-page h3,
            .background-due-diligence-page p,
            .background-due-diligence-page span,
            .background-due-diligence-page a,
            .background-due-diligence-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .background-due-diligence-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            @media (max-width: 640px) {
              .background-due-diligence-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .background-due-diligence-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .background-due-diligence-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="background-due-diligence-page w-full max-w-full overflow-x-hidden bg-[#faf8fb] text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  Due Diligence • Integrity Review • Risk Reporting
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Background Investigation & Due Diligence
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we provide
                  structured and confidential Background Investigation & Due
                  Diligence services to help businesses make safer decisions
                  before entering partnerships, hiring key people, onboarding
                  vendors, approving transactions, or working with new business
                  associates.
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
                    Investigation Coverage
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
                  Make safer decisions before entering important business
                  relationships
                </h2>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6">
                  <p className="text-sm leading-7 text-gray-700">
                    Every business relationship carries some level of risk. A
                    vendor may have weak compliance history, a partner may have
                    undisclosed liabilities, or a senior employee may have
                    integrity concerns.
                  </p>
                </div>

                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-gray-700">
                    Proper due diligence helps identify legal, financial,
                    operational, reputational, and integrity-related issues
                    before they become expensive problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="safe-card mt-8 rounded-[28px] border border-[#eaddec] bg-[#faf8fb] p-8">
              <p className="text-sm leading-7 text-gray-700">
                Our services support businesses in verifying important
                information, reviewing documents, assessing reputation, checking
                compliance indicators, and preparing practical risk observations
                so management can make decisions with better clarity.
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
                Vendor, partner, leadership, employee and integrity review
                support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We support startups, MSMEs, family-owned businesses, corporates,
                investors, lenders, HR teams, procurement teams, and management
                teams with structured background checks and due diligence.
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
                  Better decisions, lower fraud risk and stronger internal
                  control
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Structured due diligence helps reduce fraud, misrepresentation,
                  reputational exposure, weak vendor selection, and hidden
                  transaction risks.
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
                    Complete background investigation and due diligence coverage
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From vendor due diligence and partner verification to
                    leadership checks, integrity reviews, conflict checks and
                    risk observation reports, we help reduce decision risk.
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
                This service is useful before vendor onboarding, partnerships,
                senior hiring, investments, internal investigations, and
                governance-sensitive business decisions.
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
                From requirement understanding to advisory support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a structured process to understand the requirement,
                collect information, verify records, assess risk, prepare
                reporting, and support management decision-making.
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
                  Confidential, professional and prevention-focused review
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We provide practical due diligence and background review
                  support that helps HR, procurement, finance, legal,
                  compliance, board and management teams make better decisions.
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
                    Reports, checklists and risk observations you receive
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    We provide practical due diligence outputs that help
                    management identify red flags, review missing documents,
                    assess risk levels, and decide next actions clearly.
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
                  Make Safer Business Decisions
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Make safer business decisions with structured background
                  investigation and due diligence support.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Connect with AS Business Consulting experts for vendor due
                  diligence, partner verification, leadership checks, employee
                  background checks where applicable, integrity reviews, and risk
                  reporting tailored to your business needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Due Diligence Support →
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