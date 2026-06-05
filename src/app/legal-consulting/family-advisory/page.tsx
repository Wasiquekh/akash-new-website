import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Family Advisory & Asset Management | AS Business Consulting",
  description:
    "AS Business Consulting provides Family Advisory & Asset Management support including succession planning, family charters, wills, trusts, asset protection, family governance, business continuity, and inter-generational wealth transfer.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/legal-consulting/family-advisory",
  },
};

const services = [
  {
    title: "Succession Planning",
    description:
      "We help families and business owners create a clear succession plan for business ownership, management roles, decision-making rights, and asset transfer. A well-planned succession structure reduces conflict and ensures continuity when leadership or ownership passes from one generation to the next.",
    points: [
      "Ownership transfer",
      "Leadership transition",
      "Decision-making rights",
      "Continuity planning",
    ],
  },
  {
    title: "Family Charters",
    description:
      "We assist in creating family charters that define family values, business vision, ownership principles, governance rules, roles of family members, decision-making processes, conflict resolution methods, and future participation guidelines.",
    points: [
      "Family values",
      "Governance rules",
      "Conflict resolution",
      "Participation guidelines",
    ],
  },
  {
    title: "Wills & Estate Planning Support",
    description:
      "We support individuals and families in organizing estate planning requirements, including wills, asset distribution structure, nomination review, documentation support, and coordination with legal professionals where required.",
    points: [
      "Will planning",
      "Asset distribution",
      "Nomination review",
      "Estate documentation",
    ],
  },
  {
    title: "Trust Planning Support",
    description:
      "We help families understand and structure trusts for asset protection, succession planning, wealth preservation, minor beneficiaries, family governance, and long-term control of assets.",
    points: [
      "Trust structure",
      "Asset protection",
      "Wealth preservation",
      "Long-term control",
    ],
  },
  {
    title: "Asset Protection",
    description:
      "We advise families and business owners on protecting important assets such as business shareholding, properties, investments, intellectual property, financial assets, family wealth, and operating business interests.",
    points: [
      "Shareholding protection",
      "Property planning",
      "Investment protection",
      "Family wealth control",
    ],
  },
  {
    title: "Inter-Generational Governance",
    description:
      "We help families create governance systems that allow different generations to participate in business and wealth decisions with clarity. This may include family councils, decision-making rules, approval systems, role definitions, reporting structures, and conflict management processes.",
    points: [
      "Family councils",
      "Role definitions",
      "Approval systems",
      "Conflict management",
    ],
  },
  {
    title: "Family Business Continuity",
    description:
      "We support promoter-led and family-owned businesses in building systems that separate family matters from business operations. This helps maintain business continuity, leadership clarity, and professional management during ownership transition or generational change.",
    points: [
      "Business continuity",
      "Leadership clarity",
      "Professional management",
      "Ownership transition",
    ],
  },
];

const benefits = [
  {
    title: "Smooth Succession",
    description:
      "A clear succession plan helps avoid confusion over who will manage the business, who will own which assets, and how future decisions will be made.",
  },
  {
    title: "Reduced Family Disputes",
    description:
      "Proper documentation, family rules, ownership clarity, and governance systems reduce the chances of conflict between family members.",
  },
  {
    title: "Better Asset Protection",
    description:
      "Structured asset planning helps protect business interests, properties, investments, and family wealth from avoidable legal, financial, and operational risks.",
  },
  {
    title: "Stronger Business Continuity",
    description:
      "When leadership, ownership, and decision-making rights are clearly defined, the business can continue smoothly even during generational transition.",
  },
  {
    title: "Greater Clarity for Next Generation",
    description:
      "Younger family members get a better understanding of their roles, responsibilities, rights, and expectations within the family business or asset structure.",
  },
  {
    title: "Improved Privacy & Control",
    description:
      "Wills, trusts, family charters, and governance frameworks help families manage sensitive matters privately and with better control.",
  },
];

const keyAreas = [
  "Succession planning",
  "Family business governance",
  "Family charter preparation",
  "Ownership structure review",
  "Wills and estate planning support",
  "Trust planning support",
  "Asset protection advisory",
  "Inter-generational governance",
  "Family council structure",
  "Role and responsibility mapping",
  "Business continuity planning",
  "Shareholding and control structure review",
  "Asset distribution planning",
  "Nomination and documentation review",
  "Conflict prevention framework",
  "Family decision-making rules",
  "Wealth preservation planning",
  "Promoter family advisory",
  "Governance framework for family-owned businesses",
  "Coordination with legal, tax, and financial professionals",
];

const applications = [
  {
    title: "For Family-Owned Businesses",
    description:
      "We help family businesses define ownership, management roles, succession plans, decision-making authority, and governance systems to avoid confusion and future conflict.",
  },
  {
    title: "For Promoters & Business Owners",
    description:
      "Promoters can use our advisory to plan leadership transition, protect shareholding, organize assets, and prepare the next generation for business responsibility.",
  },
  {
    title: "For Families With Multiple Assets",
    description:
      "Families holding properties, investments, businesses, financial assets, or intellectual property need structured documentation and asset protection planning.",
  },
  {
    title: "For Inter-Generational Wealth Transfer",
    description:
      "We help families prepare for smooth transfer of wealth, control, responsibilities, and decision-making power from one generation to another.",
  },
  {
    title: "For Families Facing Internal Disputes",
    description:
      "Where family members have different expectations or unclear roles, structured governance and documentation can reduce misunderstandings and create a fair decision-making system.",
  },
  {
    title: "For High-Net-Worth Families",
    description:
      "Families with significant assets need privacy, control, legal clarity, asset protection, and long-term governance systems to preserve wealth.",
  },
];

const process = [
  {
    title: "Family & Asset Understanding",
    description:
      "We first understand the family structure, business ownership, asset profile, key stakeholders, future expectations, and sensitive concerns.",
  },
  {
    title: "Current Structure Review",
    description:
      "We review existing ownership documents, asset records, nominations, wills, trusts, business shareholding, family arrangements, and governance practices.",
  },
  {
    title: "Risk & Gap Identification",
    description:
      "We identify unclear ownership, missing nominations, succession gaps, documentation weaknesses, dispute risks, asset exposure, and governance issues.",
  },
  {
    title: "Planning & Advisory",
    description:
      "We create a practical plan for succession, family governance, asset protection, wills, trusts, family charter, and inter-generational decision-making.",
  },
  {
    title: "Documentation Support",
    description:
      "We help prepare and coordinate required documents such as family charters, asset registers, succession notes, governance frameworks, wills, trust-related documents, and internal family agreements.",
  },
  {
    title: "Implementation & Review",
    description:
      "We support implementation through family discussions, professional coordination, periodic review, and updates as family, business, or asset situations change.",
  },
];

const whyChoose = [
  {
    title: "Confidential & Practical Advisory",
    description:
      "Family matters require privacy, sensitivity, and practical judgment. We provide structured advisory while maintaining confidentiality and professionalism.",
  },
  {
    title: "Business & Family Understanding",
    description:
      "We understand that family-owned businesses need both emotional balance and commercial discipline. Our approach supports harmony as well as business continuity.",
  },
  {
    title: "Long-Term Wealth Protection",
    description:
      "Our advisory focuses on protecting assets, reducing disputes, preserving control, and supporting smooth inter-generational transfer.",
  },
  {
    title: "Multidisciplinary Support",
    description:
      "We connect legal, finance, taxation, business, and governance perspectives to provide complete family advisory and asset management support.",
  },
  {
    title: "Clear Governance Approach",
    description:
      "We help families move from informal decision-making to structured governance without making the system unnecessarily complicated.",
  },
];

const deliverables = [
  "Succession planning note",
  "Family charter",
  "Family governance framework",
  "Asset protection plan",
  "Asset register format",
  "Ownership structure review",
  "Business continuity plan",
  "Role and responsibility matrix",
  "Family council structure",
  "Decision-making framework",
  "Conflict prevention framework",
  "Will planning support checklist",
  "Trust planning support note",
  "Nomination review checklist",
  "Inter-generational governance plan",
  "Shareholding and control structure note",
  "Wealth preservation roadmap",
  "Documentation gap report",
  "Corrective action plan",
  "Periodic family governance review format",
];

const heroItems = [
  "Succession",
  "Family Charter",
  "Wills",
  "Trusts",
  "Asset Protection",
  "Governance",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-family-advisory-asset-management"
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
                name: "Family Advisory & Asset Management",
                item: "https://www.asbconsulting.in/legal-consulting/family-advisory-asset-management",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-family-advisory-asset-management"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/legal-consulting/family-advisory-asset-management#webpage",
            url: "https://www.asbconsulting.in/legal-consulting/family-advisory-asset-management",
            name: "Family Advisory & Asset Management",
            description:
              "AS Business Consulting provides confidential Family Advisory & Asset Management support for succession planning, family charters, wills, trusts, asset protection, family governance, business continuity, and inter-generational wealth transfer.",
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

            .family-advisory-page {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .family-advisory-page section {
              width: 100%;
              max-width: 100%;
              overflow-x: hidden;
            }

            .family-advisory-page .safe-container {
              width: 100%;
              max-width: 1280px;
              margin-left: auto;
              margin-right: auto;
            }

            .family-advisory-page .safe-grid,
            .family-advisory-page .safe-card,
            .family-advisory-page .safe-content {
              min-width: 0;
            }

            .family-advisory-page h1,
            .family-advisory-page h2,
            .family-advisory-page h3,
            .family-advisory-page p,
            .family-advisory-page span,
            .family-advisory-page a,
            .family-advisory-page div {
              overflow-wrap: break-word;
              word-break: normal;
            }

            .family-advisory-page .safe-pill {
              max-width: 100%;
              white-space: normal;
            }

            @media (max-width: 640px) {
              .family-advisory-page h1 {
                font-size: 2.25rem;
                line-height: 1.15;
              }

              .family-advisory-page h2 {
                font-size: 1.875rem;
                line-height: 1.2;
              }

              .family-advisory-page .safe-container {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }
          `,
        }}
      />

      <Header />

      <main className="family-advisory-page w-full max-w-full overflow-x-hidden bg-[#faf8fb] text-[#201723]">
        {/* HERO */}
        <section className="relative w-full max-w-full overflow-hidden bg-[#2f1833] text-white">
          <div className="absolute inset-0 max-w-full bg-[radial-gradient(circle_at_15%_20%,rgba(244,216,138,0.16),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.10),transparent_30%)]" />

          <div className="safe-container relative mx-auto max-w-7xl px-5 py-12 md:py-16">
            <div className="safe-grid grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="safe-content">
                <div className="safe-pill mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f4d88a]">
                  Succession • Family Governance • Asset Protection
                </div>

                <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                  Family Advisory & Asset Management
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-white/82">
                  At <strong>AS Business Consulting</strong>, we provide
                  practical and confidential Family Advisory & Asset Management
                  support to help families, promoters, business owners, and
                  high-value asset holders protect wealth, plan succession,
                  manage family governance, and preserve assets across
                  generations.
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
                  Protect family wealth and preserve business continuity
                </h2>
              </div>

              <div className="safe-grid grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-[#faf8fb] p-6">
                  <p className="text-sm leading-7 text-gray-700">
                    Family-owned businesses and promoter-led companies often
                    face complex challenges related to ownership, succession,
                    decision-making, asset division, family roles, business
                    continuity, and inter-generational wealth transfer.
                  </p>
                </div>

                <div className="safe-card rounded-[24px] border border-[#eaddec] bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-gray-700">
                    Without proper planning, these matters can lead to disputes,
                    unclear authority, tax inefficiencies, loss of control, and
                    disruption in business operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="safe-card mt-8 rounded-[28px] border border-[#eaddec] bg-[#faf8fb] p-8">
              <p className="text-sm leading-7 text-gray-700">
                Our services help families create structured plans for
                succession, asset protection, family governance, wills, trusts,
                family charters, and long-term wealth continuity. Our focus is
                to help families protect what they have built and create a
                system that supports both business stability and family harmony.
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
                Succession planning, family governance and asset protection
                support
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We work with families that want clarity, privacy, legal
                strength, and smooth transition of assets and responsibilities.
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
                  Benefits for Your Family & Business
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight">
                  Smooth succession, fewer disputes and stronger wealth
                  protection
                </h2>

                <p className="mt-5 text-sm leading-7 text-white/78">
                  Structured family advisory helps protect assets, clarify
                  ownership, reduce disputes, support business continuity, and
                  prepare the next generation for responsibility.
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
                    Complete family governance and asset continuity coverage
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-white/75">
                    From succession planning and family charters to wills,
                    trusts, asset protection, business continuity and
                    inter-generational governance, we help families create a
                    structured long-term system.
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
                This service is useful for families, promoters, business owners,
                asset holders, and high-net-worth families that need privacy,
                continuity, ownership clarity, and long-term wealth protection.
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
                From family structure review to implementation
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                We follow a confidential and practical process to understand
                family and asset structures, identify risks, prepare planning
                documents, coordinate professional support, and periodically
                review governance systems.
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
                  Confidential, practical and family-sensitive advisory
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  We help families move from informal decision-making to
                  structured governance while protecting privacy, preserving
                  control, reducing disputes, and supporting long-term business
                  continuity.
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
                    Plans, frameworks and family governance documents
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    We provide practical advisory outputs that help families
                    structure succession, protect assets, document governance,
                    define decision-making, and preserve wealth across
                    generations.
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
                  Protect Family Wealth & Continuity
                </p>

                <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                  Protect your family wealth, business continuity, and future
                  generations.
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/75">
                  Speak with AS Business Consulting experts for succession
                  planning, family charters, wills, trusts, asset protection,
                  and inter-generational governance support tailored to your
                  family and business needs.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex max-w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f1833] transition hover:bg-[#f4d88a]"
              >
                Get Family Advisory →
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