import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Compliance Audits & MIS | AS Business Consulting",
  description:
    "AS Business Consulting provides Compliance Audits & MIS support including statutory compliance audits, process audits, gap analysis, corrective action plans, Legal MIS dashboards, management reporting, board reporting, and compliance tracking systems.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/legal-consulting/compliance-audits",
  },
};

const services = [
  {
    title: "Statutory Compliance Audits",
    description:
      "We review important statutory requirements applicable to your business and check whether filings, registrations, renewals, records, notices, registers, licenses, and compliance documents are properly maintained. This helps identify pending items, missed deadlines, weak records, and areas that require correction.",
    points: [
      "Filing review",
      "License tracking",
      "Record checking",
      "Pending item review",
    ],
  },
  {
    title: "Process Audits",
    description:
      "We assess internal business processes to understand whether compliance-related tasks are being followed correctly. This may include approvals, documentation flow, contract management, vendor onboarding, HR records, policy implementation, reporting, escalation, and internal control practices.",
    points: [
      "Approval process",
      "Documentation flow",
      "Vendor onboarding",
      "Internal controls",
    ],
  },
  {
    title: "Gap Analysis",
    description:
      "We identify gaps between required compliance standards and your current practices. This includes missing documents, outdated policies, incomplete records, weak approval systems, poor tracking, unclear responsibilities, and process-level weaknesses.",
    points: [
      "Missing documents",
      "Outdated policies",
      "Weak tracking",
      "Unclear responsibilities",
    ],
  },
  {
    title: "Corrective Action Plans",
    description:
      "After identifying gaps, we prepare practical corrective action plans with clear priorities, timelines, ownership, and recommended improvements. This helps businesses move from problem identification to actual implementation.",
    points: [
      "Action priorities",
      "Ownership mapping",
      "Timeline planning",
      "Implementation steps",
    ],
  },
  {
    title: "Legal MIS Dashboards",
    description:
      "We help create Legal MIS dashboards for management and board reporting. These dashboards summarize compliance status, pending actions, risk areas, audit observations, litigation updates, contract status, statutory deadlines, and corrective action progress.",
    points: [
      "Compliance status",
      "Risk areas",
      "Audit observations",
      "Action progress",
    ],
  },
  {
    title: "Management & Board Reporting",
    description:
      "We prepare structured reporting formats that help business owners, senior management, directors, and board members understand legal and compliance status without going through scattered documents or lengthy updates.",
    points: [
      "Management reports",
      "Board updates",
      "Legal status",
      "Decision support",
    ],
  },
  {
    title: "Compliance Tracking Systems",
    description:
      "We assist in building trackers for statutory due dates, audit observations, policy reviews, legal notices, licenses, contracts, renewals, risk registers, and closure status.",
    points: [
      "Due date trackers",
      "Policy reviews",
      "Risk registers",
      "Closure status",
    ],
  },
];

const benefits = [
  {
    title: "Better Compliance Visibility",
    description:
      "Management gets a clear view of what is compliant, what is pending, what is risky, and what needs immediate action.",
  },
  {
    title: "Reduced Legal & Regulatory Risk",
    description:
      "Regular audits and corrective action plans reduce the chances of penalties, missed deadlines, statutory non-compliance, and avoidable legal issues.",
  },
  {
    title: "Stronger Internal Control",
    description:
      "Process audits help improve documentation, approvals, responsibility mapping, escalation systems, and internal accountability.",
  },
  {
    title: "Faster Decision-Making",
    description:
      "Legal MIS dashboards give management and board members concise information for faster and better decisions.",
  },
  {
    title: "Improved Audit Readiness",
    description:
      "With organized records, trackers, reports, and compliance calendars, your business becomes better prepared for statutory audits, internal audits, investor due diligence, and regulatory reviews.",
  },
  {
    title: "Better Accountability",
    description:
      "Corrective action plans assign responsibility and timelines, making it easier to track progress and close compliance gaps.",
  },
];

const keyAreas = [
  "Statutory compliance audits",
  "Process audits",
  "Legal compliance reviews",
  "Compliance gap analysis",
  "Corrective action planning",
  "Legal MIS dashboard creation",
  "Management reporting formats",
  "Board reporting support",
  "Compliance calendar review",
  "Statutory filing status review",
  "License and registration tracking",
  "Policy implementation review",
  "Contract compliance tracking",
  "Vendor compliance review",
  "HR compliance documentation review",
  "Internal control assessment",
  "Risk register preparation",
  "Audit observation tracker",
  "Corrective action tracker",
  "Litigation and legal notice reporting",
  "Compliance closure monitoring",
];

const applications = [
  {
    title: "For MSMEs",
    description:
      "Many MSMEs do not have a dedicated compliance department. We help create simple audit systems, trackers, and management reports to keep compliance under control.",
  },
  {
    title: "For Growing Companies",
    description:
      "As companies expand, compliance responsibilities increase. Our audits and MIS systems help management monitor legal, HR, vendor, contract, and statutory requirements more effectively.",
  },
  {
    title: "For Family-Owned Businesses",
    description:
      "Family businesses often depend on informal processes. We help bring structure through compliance audits, process reviews, responsibility mapping, and reporting systems.",
  },
  {
    title: "For Enterprises",
    description:
      "Larger organizations need periodic compliance reviews, dashboard reporting, risk registers, internal controls, and board-level updates. We help build and maintain these systems.",
  },
  {
    title: "For Companies Preparing for Investment or Loans",
    description:
      "Before investor due diligence, bank review, or business expansion, companies need clean compliance records and organized reporting. We help identify and close gaps in advance.",
  },
  {
    title: "For Board & Management Oversight",
    description:
      "Directors and management teams can use Legal MIS dashboards to track compliance status, pending matters, key risks, and corrective action progress.",
  },
];

const process = [
  {
    title: "Scope Understanding",
    description:
      "We first understand your business type, applicable compliance areas, internal processes, reporting needs, and management expectations.",
  },
  {
    title: "Document & Process Review",
    description:
      "We review statutory records, filings, licenses, registers, policies, contracts, trackers, approvals, audit reports, notices, and process documentation.",
  },
  {
    title: "Gap Identification",
    description:
      "We identify missing documents, delayed filings, weak controls, unclear ownership, outdated policies, process gaps, and reporting weaknesses.",
  },
  {
    title: "Risk Categorization",
    description:
      "We classify gaps based on urgency, business impact, compliance risk, financial exposure, and management priority.",
  },
  {
    title: "Corrective Action Plan",
    description:
      "We prepare a clear action plan with recommended steps, responsible teams, timelines, required documents, and closure priorities.",
  },
  {
    title: "MIS Dashboard & Reporting",
    description:
      "We create practical MIS formats and dashboards for regular management and board reporting.",
  },
  {
    title: "Follow-Up & Closure Support",
    description:
      "We support periodic tracking, updates, implementation follow-up, and closure reporting to ensure gaps are actually resolved.",
  },
];

const whyChoose = [
  {
    title: "Practical Audit Approach",
    description:
      "We do not only point out problems. We provide clear corrective actions that your team can implement.",
  },
  {
    title: "Management-Friendly Reporting",
    description:
      "Our MIS dashboards are designed for owners, directors, management teams, and boards who need clear information without unnecessary complexity.",
  },
  {
    title: "Compliance & Business Understanding",
    description:
      "We review compliance from a legal, operational, documentation, financial, and governance perspective.",
  },
  {
    title: "Suitable for Different Business Sizes",
    description:
      "Our services are useful for startups, MSMEs, family businesses, growing companies, and established enterprises.",
  },
  {
    title: "Prevention-Focused Support",
    description:
      "We help identify risks early, improve internal controls, and prevent small compliance gaps from becoming serious legal or financial issues.",
  },
];

const deliverables = [
  "Statutory compliance audit report",
  "Process audit report",
  "Compliance gap analysis",
  "Corrective action plan",
  "Legal MIS dashboard",
  "Management reporting format",
  "Board reporting format",
  "Compliance calendar review",
  "Statutory filing tracker",
  "License and registration tracker",
  "Policy implementation review report",
  "Contract compliance tracker",
  "Vendor compliance tracker",
  "HR compliance documentation review",
  "Internal control observation report",
  "Risk register",
  "Audit observation tracker",
  "Corrective action tracker",
  "Compliance closure report",
  "Periodic review format",
];

const heroItems = [
  "Compliance Audits",
  "Process Audits",
  "Gap Analysis",
  "Corrective Plans",
  "Legal MIS",
  "Board Reporting",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-compliance-audits-mis"
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
                name: "Compliance Audits & MIS",
                item: "https://www.asbconsulting.in/legal-consulting/compliance-audits-mis",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-compliance-audits-mis"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/compliance-audits-mis#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/compliance-audits-mis",
            name: "Compliance Audits & MIS",
            description:
              "AS Business Consulting provides structured Compliance Audits & MIS support to help businesses identify compliance gaps, improve internal processes, reduce legal risk, and create clear reporting systems for management and board-level decision-making.",
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

            .compliance-audits-mis-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .compliance-audits-mis-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .compliance-audits-mis-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .compliance-audits-mis-page .safe-grid,
            .compliance-audits-mis-page .safe-card,
            .compliance-audits-mis-page .safe-content {
              min-width: 0;
            }

            .compliance-audits-mis-page h1,
            .compliance-audits-mis-page h2,
            .compliance-audits-mis-page h3,
            .compliance-audits-mis-page p,
            .compliance-audits-mis-page span,
            .compliance-audits-mis-page a,
            .compliance-audits-mis-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .compliance-audits-mis-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            @media (max-width: 640px) {
              .compliance-audits-mis-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .compliance-audits-mis-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .compliance-audits-mis-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="compliance-audits-mis-page w-full max-w-full overflow-x-hidden bg-[#faf8fb] text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  Compliance Audits • Legal MIS • Risk Control
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Compliance Audits & MIS
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we provide
                  structured Compliance Audits & MIS support to help businesses
                  identify compliance gaps, improve internal processes, reduce
                  legal risk, and create clear reporting systems for management
                  and board-level decision-making.
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
                    Audit Coverage
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
                  Build a reliable compliance review and reporting system
                </h2>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6">
                  <p className="text-sm leading-7 text-gray-700">
                    Many businesses believe compliance is only about filing forms
                    or meeting statutory deadlines. In reality, compliance also
                    includes internal controls, documentation discipline, policy
                    implementation, process audits, risk tracking, corrective
                    action, and regular reporting.
                  </p>
                </div>

                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-gray-700">
                    Without a proper review system, small gaps can later become
                    penalties, disputes, audit objections, financial loss, or
                    governance issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="safe-card mt-8 rounded-[28px] border border-[#eaddec] bg-[#faf8fb] p-8">
              <p className="text-sm leading-7 text-gray-700">
                Our services help businesses review statutory compliance,
                internal processes, documentation, policy implementation, legal
                controls, and reporting systems. We also help create Legal MIS
                dashboards so owners, management teams, directors, and boards can
                track important compliance matters in a simple and organized
                manner.
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
                Compliance audits, process reviews, MIS dashboards and reporting
                support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We support startups, MSMEs, family-owned businesses, growing
                companies, corporates, and enterprises that want better
                visibility, stronger controls, and a more reliable compliance
                management system.
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
                  Better visibility, lower risk and stronger internal control
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Structured audits and Legal MIS reporting help management
                  monitor compliance status, close gaps faster, improve
                  accountability, and prepare for audits, due diligence, and
                  board-level reviews.
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
                    Complete compliance audit and MIS coverage
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From statutory audits and process reviews to Legal MIS
                    dashboards, risk registers, corrective action trackers, and
                    board reporting, we help create a stronger compliance
                    control system.
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
                This service is useful for companies that need compliance
                visibility, stronger audit readiness, management reporting, board
                oversight, and practical closure of compliance gaps.
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
                From scope review to MIS dashboard and closure support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a structured process to review documents and
                processes, identify gaps, categorize risks, prepare corrective
                actions, create MIS dashboards, and support implementation
                tracking.
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
                  Practical audits with management-friendly reporting
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We do not only point out problems. We provide clear corrective
                  actions, practical MIS formats, and reporting systems that
                  owners, directors, management teams, and boards can actually
                  use.
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
                    Reports, dashboards, trackers and corrective action outputs
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    We provide practical outputs that help management track
                    compliance status, audit observations, due dates, policy
                    implementation, corrective action progress, and closure
                    status.
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
                  Strengthen Your Compliance System
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Strengthen your compliance system with structured audits,
                  clear reporting, and practical corrective actions.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Connect with AS Business Consulting for statutory compliance
                  audits, process audits, gap analysis, Legal MIS dashboards,
                  management reporting, and board-level compliance support
                  tailored to your business needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Compliance Audit Support →
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