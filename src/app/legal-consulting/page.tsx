import * as React from "react";
import Script from "next/script";
import Link from "next/link";

export const metadata = {
  title: "Corporate Legal Advisory in India | Compliance – AS Business",
  description:
    "AS Business Consulting delivers corporate legal advisory in India, offering compliance, contract drafting, and cyber law consulting to protect your business.",
  alternates: {
    canonical: "https://www.asbconsulting.in/legal-consulting",
  },
};

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";

const page = () => {
  const internalLinkClass =
    "text-black hover:text-primary transition-colors duration-200";

  return (
    <>
      <Script
        id="breadcrumb-schema-legal-consulting"
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
                name: "Legal Consulting",
                item: "https://www.asbconsulting.in/legal-consulting",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-legal-consulting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/legal-consulting#webpage",
            url: "https://www.asbconsulting.in/legal-consulting",
            name: "Corporate Legal Advisory in India | Compliance – AS Business",
            description:
              "AS Business Consulting delivers corporate legal advisory in India, offering compliance, contract drafting, and cyber law consulting to protect your business.",
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

      <div className="bg-[url('/images/legal-consulting.jpg')] bg-cover bg-center">
        <div className="max-w-7xl m-auto px-5 py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center">
            Legal & Compliance Consulting for Corporate Governance & Risk
            Management
          </h1>
          <p className="mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center w-full md:w-[80%]">
            At AS Business Consulting, we help you operate confidently within
            the law while minimizing risk. Our comprehensive and cost-effective
            legal services safeguard operations, strengthen governance, and
            align legal strategy with business objectives. A multidisciplinary
            bench of lawyers, Chartered Accountants, corporate financial
            advisors, and industry specialists supports you end-to-end—from
            advisory and documentation to implementation and audits.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="mx-auto flex flex-wrap"></div>

          <div className="flex flex-col-reverse md:flex-row justify-between gap-4 mb-20">
            <div className="w-full md:w-[60%]">
              <h2 className="text-primary text-3xl font-bold mb-7">
                What We Cover
              </h2>

              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/corporate-legal-advisory"
                  className={internalLinkClass}
                >
                  Corporate Legal Advisory & Governance
                </Link>
              </p>

              <div className="mb-6">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Company law & secretarial compliance, board/shareholder
                    matters
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Policies & codes (ethics, POSH, data privacy), compliance
                    calendars
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Entity structuring, restructuring, and governance frameworks
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/commercial-advisory"
                  className={internalLinkClass}
                >
                  Commercial Advisory & Transactions
                </Link>
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    M&A, JV/partnerships, slump sales, business transfers
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Competition, taxation interface, and commercial risk reviews
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Dispute resolution strategy (negotiation, mediation,
                    arbitration, litigation support)
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/contracts-agreements"
                  className={internalLinkClass}
                >
                  Contracts & Agreements
                </Link>
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    MSAs, procurement/vendor & distributor contracts, SLAs, NDAs
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Licensing & technology/IP agreements, template libraries &
                    playbooks
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Contract review, redlining, and negotiations
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/banking-finance-law"
                  className={internalLinkClass}
                >
                  Banking & Finance Law
                </Link>
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Term sheets, loan & security documents, project finance
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Debt restructuring, fund-flow controls, covenant monitoring
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Lender/borrower negotiations, collateral and asset
                    protection
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[30%]">
              <div>
                <Image
                  src="/images/legal1.png"
                  alt="Corporate legal advisory and governance consulting"
                  width={500}
                  height={500}
                  priority
                  className="rounded mb-10 md:mb-20"
                />
              </div>

              <div>
                <Image
                  src="/images/legal2.png"
                  alt="Commercial advisory and legal transaction support"
                  width={500}
                  height={500}
                  priority
                  className="rounded hidden md:block"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row justify-between gap-4">
            <div className="w-full md:w-[60%]">
              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/ip-it-cyber-law"
                  className={internalLinkClass}
                >
                  IP, IT & Cyber Law
                </Link>
              </p>

              <div className="mb-6">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    IPR strategy, filings, assignments, and licensing
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    IT contracts, data protection, cybersecurity posture &
                    incident response
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/family-advisory"
                  className={internalLinkClass}
                >
                  Family Advisory & Asset Management
                </Link>
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Succession planning, family charters, wills & trusts
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Asset protection and inter-generational governance
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/background-investigation-due-diligence"
                  className={internalLinkClass}
                >
                  Background Investigation & Due Diligence
                </Link>
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Vendor/partner and leadership due diligence
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Employee background checks (as applicable) and integrity
                    reviews
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                <Link
                  href="/legal-consulting/compliance-audits"
                  className={internalLinkClass}
                >
                  Compliance Audits & MIS
                </Link>
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Statutory and process audits, gap analysis with corrective
                    action plans
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Legal MIS dashboards for management and board reporting
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                Why Choose AS Business Consulting
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Extensive corporate legal experience with cross-functional
                    finance and compliance depth
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Tailored, affordable solutions for MSMEs to enterprises
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Risk prevention first: proactive controls, not just reactive
                    fixes
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Business-aligned legal strategy that enables growth, not red
                    tape
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                Typical Deliverables
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Compliance matrix & calendar, policy stack, and SOPs
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Contract repository with standardized templates
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Due-diligence/background reports and risk registers
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Board/management MIS and audit closure trackers
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Training for in-house teams on contracts, compliance, and
                    POSH/data privacy
                  </h2>
                </div>
              </div>

              <p className="text-xl font-bold inter-text my-4">
                Explore More Services
              </p>

              <div className="mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    <Link
                      href="/operations-consulting"
                      className={internalLinkClass}
                    >
                      Operations Consulting
                    </Link>{" "}
                    – Lean, quality, and supply-chain excellence
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    <Link href="/hr-consultancy" className={internalLinkClass}>
                      HR Consulting
                    </Link>{" "}
                    – Recruitment, policy audits, and engagement
                  </h2>
                </div>

                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    <Link href="/contact-us" className={internalLinkClass}>
                      Contact Us
                    </Link>{" "}
                    – Speak to our legal experts and get a tailored plan today
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[30%]">
              <div className="mb-20">
                <Image
                  src="/images/legal3.png"
                  alt="IP IT and cyber law consulting"
                  width={500}
                  height={500}
                  priority
                  className="rounded mb-20"
                />
              </div>

              <div className="mb-20">
                <Image
                  src="/images/legal4.png"
                  alt="Family advisory and asset management consulting"
                  width={500}
                  height={500}
                  priority
                  className="rounded hidden md:block"
                />
              </div>

              <div className="mb-20">
                <Image
                  src="/images/legal5.png"
                  alt="Compliance audits and MIS consulting"
                  width={500}
                  height={500}
                  priority
                  className="rounded hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src="/images/leftShape.svg"
          alt="Left decorative shape"
          width={300}
          height={300}
          priority
          className="absolute left-0 top-0"
        />

        <Image
          src="/images/rightShape.svg"
          alt="Right decorative shape"
          width={300}
          height={300}
          priority
          className="absolute right-0 top-0"
        />
      </section>

      <section>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-black text-xl md:text-2xl font-semibold mb-7">
              Package include
            </h2>

            <div>
              <div className="flex items-center mb-3 gap-3">
                <div className="flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  <Link
                    href="/legal-consulting/corporate-legal-advisory"
                    className={internalLinkClass}
                  >
                    Corporate Legal Advisory
                  </Link>
                </h2>
              </div>

              <div className="flex items-center mb-3 gap-3">
                <div className="flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  <Link
                    href="/legal-consulting/commercial-advisory"
                    className={internalLinkClass}
                  >
                    Commercial Advisory
                  </Link>
                </h2>
              </div>

              <div className="flex items-center mb-3 gap-3">
                <div className="flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  <Link
                    href="/legal-consulting/contracts-agreements"
                    className={internalLinkClass}
                  >
                    Contracts & Agreements
                  </Link>
                </h2>
              </div>

              <div className="flex items-center mb-3 gap-3">
                <div className="flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  <Link
                    href="/legal-consulting/banking-finance-law"
                    className={internalLinkClass}
                  >
                    Banking & Finance Law
                  </Link>
                </h2>
              </div>

              <div className="flex items-center mb-3 gap-3">
                <div className="flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  <Link
                    href="/legal-consulting/family-advisory"
                    className={internalLinkClass}
                  >
                    Family Advisory
                  </Link>
                </h2>
              </div>

              <div className="flex items-center mb-3 gap-3">
                <div className="flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  <Link
                    href="/legal-consulting/family-advisory"
                    className={internalLinkClass}
                  >
                    Asset Management
                  </Link>
                </h2>
              </div>

              <div className="flex items-center mb-3 gap-3">
                <div className="flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  <Link
                    href="/legal-consulting/background-investigation-due-diligence"
                    className={internalLinkClass}
                  >
                    Background Investigation
                  </Link>
                </h2>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/drafting.png"
              alt="Legal drafting and documentation"
              width={500}
              height={500}
              priority
              className="rounded"
            />
          </div>

          <div>
            <Image
              src="/images/detailing.png"
              alt="Legal detailing and compliance support"
              width={500}
              height={500}
              priority
              className="rounded"
            />
          </div>
        </div>
      </section>

      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;