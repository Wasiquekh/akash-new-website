import * as React from "react";
export const metadata = {
  title: "Corporate Legal Advisory in India | Compliance – AS Business",
  description:
    "AS Business Consulting delivers corporate legal advisory in India, offering compliance, contract drafting, and cyber law consulting to protect your business.",
  alternates: {
    canonical: "",
  },
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/legal-consulting.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5 py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Legal Consulting
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            We offer expert legal consulting to help businesses navigate
            compliance, contracts, <br />
            and regulatory frameworks with confidence and clarity.
          </p>
        </div>
      </div>
      <section className=" relative">
        <div className="container mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-0">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Introduction
            </h1>
            <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              The main object of AS Consultants is to provide comprehensive and
              affordable services to our customers and clients.
            </p>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              We help you understand legal and commercial issues to guide
              you into success. Our dedicated teams cater towards all your
              advisory needs covering statutory compliance, financial advisory,
              IPR, IT and Cyber crime protection. Through our management team,
              consisting of Law firms, CA&apos;s , Industry experts sharing
              decades of experience, we provide to our clients analytical study
              of issues and solutions
            </p>
            <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              AS Consultants has a dedicated team of professionals specializing
              in various disciplines including corporate and commercial laws,
              taxation, intellectual property laws and dispute resolution and
              also providing its support to resolve problems in the legal
              domain. The firm is guided by leading and reputed lawyers,
              Chartered Accountants, Corporate Financial Advisors and Industry
              Specialists.
            </p>
          </div>
        </div>
        <Image
          src="/images/leftShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute left-0 top-0 "
        />
        <Image
          src="/images/rightShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute right-0 top-0 "
        />
      </section>
      <section>
        <div className=" container grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <h2 className="text-black text-xl md:text-2xl font-semibold mb-7">
              Package include
            </h2>
            <div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Corporate Legal Advisory
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Commercial advisory
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Contracts & Agreements
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Banking & Finance law
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Family advisory
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Asset Management
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Background investigation
                </h2>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/drafting.png" // path relative to /public
              alt="My beautiful image"
              width={500}
              height={500}
              priority // optional: preloads image
              className=" rounded"
            />
          </div>
          <div>
            <Image
              src="/images/detailing.png" // path relative to /public
              alt="My beautiful image"
              width={500}
              height={500}
              priority // optional: preloads image
              className="rounded"
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-0">
          <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
            Legal & Compliance Consulting for Corporate Governance & Risk
            Management.
          </h1>
          <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
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
          <div className=" mx-auto flex flex-wrap"></div>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-4 mb-20">
            <div className=" w-full md:w-[60%]">
              <h2 className="text-primary text-3xl font-bold  mb-7">
                What We Cover
              </h2>
              <p className=" text-xl font-bold inter-text my-4">
                Corporate Legal Advisory & Governance
              </p>
              <div className=" mb-6">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Company law & secretarial compliance, board/shareholder
                    matters
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Policies & codes (ethics, POSH, data privacy), compliance
                    calendars
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Entity structuring, restructuring, and governance frameworks
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Commercial Advisory & Transactions
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    M&A, JV/partnerships, slump sales, business transfers
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Competition, taxation interface, and commercial risk reviews
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Dispute resolution strategy (negotiation, mediation,
                    arbitration, litigation support)
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Contracts & Agreements
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    MSAs, procurement/vendor & distributor contracts, SLAs, NDAs
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Licensing & technology/IP agreements; template libraries &
                    playbooks
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Contract review, redlining, and negotiations
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Banking & Finance Law
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Term sheets, loan & security documents, project finance
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Debt restructuring, fund-flow controls, covenant monitoring
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
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
                  src="/images/legal1.png" // path relative to /public
                  alt="My beautiful image"
                  width={500}
                  height={500}
                  priority // optional: preloads image
                  className="rounded mb-10 md:mb-20"
                />
              </div>
              <div>
                <Image
                  src="/images/legal2.png" // path relative to /public
                  alt="My beautiful image"
                  width={500}
                  height={500}
                  priority // optional: preloads image
                  className="rounded hidden md:block"
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col-reverse md:flex-row justify-between gap-4">
            <div className="w-full md:w-[60%]">
              <p className=" text-xl font-bold inter-text my-4">
                IP, IT & Cyber Law
              </p>
              <div className=" mb-6">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    IPR strategy, filings, assignments, and licensing
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    IT contracts, data protection, cybersecurity posture &
                    incident response
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Family Advisory & Asset Management
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Succession planning, family charters, wills & trusts
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Asset protection and inter-generational governance
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Background Investigation & Due Diligence
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Vendor/partner and leadership due diligence
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Employee background checks (as applicable) and integrity
                    reviews
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Compliance Audits & MIS
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Statutory and process audits; gap analysis with corrective
                    action plans
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Legal MIS dashboards for management and board reporting
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Why Choose AS Business Consulting
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Extensive corporate legal experience with cross-functional
                    finance and compliance depth
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Tailored, affordable solutions for MSMEs to enterprises
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Risk prevention first: proactive controls, not just reactive
                    fixes
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Business-aligned legal strategy that enables growth, not red
                    tape
                  </h2>
                </div>
              </div>

              <p className=" text-xl font-bold inter-text my-4">
                Typical Deliverables
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Compliance matrix & calendar, policy stack, and SOPs
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Contract repository with standardized templates
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Due-diligence/background reports and risk registers
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Board/management MIS and audit closure trackers
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Training for in-house teams on contracts, compliance, and
                    POSH/data privacy
                  </h2>
                </div>
              </div>
              <p className=" text-xl font-bold inter-text my-4">
                Explore More Services
              </p>
              <div className=" mb-5">
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Operations Consulting – Lean, quality, and supply-chain
                    excellence
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    HR Consulting – Recruitment, policy audits, and engagement
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Contact Us – Speak to our legal experts and get a tailored
                    plan today
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[30%]">
              <div className=" mb-20">
                <Image
                  src="/images/legal3.png" // path relative to /public
                  alt="My beautiful image"
                  width={500}
                  height={500}
                  priority // optional: preloads image
                  className="rounded mb-20"
                />
              </div>
              <div className=" mb-20">
                <Image
                  src="/images/legal4.png" // path relative to /public
                  alt="My beautiful image"
                  width={500}
                  height={500}
                  priority // optional: preloads image
                  className="rounded hidden md:block"
                />
              </div>
              <div className=" mb-20">
                <Image
                  src="/images/legal5.png" // path relative to /public
                  alt="My beautiful image"
                  width={500}
                  height={500}
                  priority // optional: preloads image
                  className="rounded hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
