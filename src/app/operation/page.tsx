import * as React from "react";
import Script from "next/script";

export const metadata = {
  title: "Operations Consulting in India | Lean Manufacturing & ZED",
  description:
    "Operations consulting for manufacturers and MSMEs in India: lean manufacturing, ZED support, productivity improvement, QMS, audits and supply chain.",
  alternates: {
    canonical: "https://www.asbconsulting.in/operation",
  },
};

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";
import ServiceCta from "../components/ServiceCta";

const linkClass = "text-primary underline hover:text-secondary";

const page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-operation"
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
                name: "Operations (Lean & ZED)",
                item: "https://www.asbconsulting.in/operation",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-operation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/operation#webpage",
            url: "https://www.asbconsulting.in/operation",
            name: "Operations Consulting in India | Lean Manufacturing & ZED",
            description:
              "Operations consulting for manufacturers and MSMEs in India: lean manufacturing, ZED support, productivity improvement, QMS, audits and supply chain.",
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

      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center uppercase ">
            Operations & Lean Manufacturing Solutions for Business Efficiency
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            At AS Business Consulting, we help you run smarter, faster, and more
            profitably. Our operations consulting blends lean manufacturing, ZED
            certification, quality systems, and supply chain excellence to
            remove waste, lower cost, lift throughput, and strengthen
            compliance—end to end.
          </p>
        </div>
      </div>
      <section className=" relative">
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
        <div className="container">
          <div className=" flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-10 md:mb-20">
              <h2 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                Operations Consulting Services
              </h2>
              <p className="lg:w-[70%] mx-auto leading-relaxed inter-text text-sm font-normal">
                Six connected areas of work. Start with the one closest to your
                current problem, or ask us to assess the whole operation.
              </p>
              {/* <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                Businesses are always looking to better optimize their
                operational processes in a variety of ways, like increasing
                efficiency, cutting costs, improvement quality, etc. In certain
                scenarios, however, such as economic downturns, changes in
                management, or technological rollouts, operations consultants
                will be brought in to advise on significant changes to a
                business operational processes.
              </p> */}
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Innovation.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1  text-center md:text-left ">
                  <Link href="/operation/innovation" className="hover:text-secondary underline decoration-tertiary underline-offset-4">
                    Innovation & Cost Saving Consulting
                  </Link>
                </p>
                <p className=" text-sm font-normal text-black inter-text ">
                  - Benchmarking of Product & Process
                </p>
                <p className="text-sm font-normal text-black inter-text">
                  - Cost Saving
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Technology Updation
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Productivity Improvement.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  <Link href="/operation/productivity-inprovement" className="hover:text-secondary underline decoration-tertiary underline-offset-4">
                    Productivity Improvement Consulting
                  </Link>
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Identifying Process Bottlenecks
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Line Balancing
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Increases UPH & productivity
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Systematic Operation.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  <Link href="/operation/systematic-operation" className="hover:text-secondary underline decoration-tertiary underline-offset-4">
                    Systematic Operation Consulting (5S & SOP)
                  </Link>
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - 5S implementation
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - SOP creation
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - SCM Management
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/MIS & Audit.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  <Link href="/operation/audit" className="hover:text-secondary underline decoration-tertiary underline-offset-4">
                    MIS & Operations Audit Services
                  </Link>
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Analysis of business performance
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Process Audit
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - System Audit
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/QMS.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  <Link href="/operation/qms" className="hover:text-secondary underline decoration-tertiary underline-offset-4">
                    Quality Management System (QMS) Consulting
                  </Link>
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - FTR Improvement
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - 7 QC Tools, Kaizen, Poka-yoke
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Quality Awareness Trainings
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Financial Growth.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  <Link href="/operation/financial-growth" className="hover:text-secondary underline decoration-tertiary underline-offset-4">
                    Financial Growth Advisory
                  </Link>
                </p>

                <p className=" text-sm font-normal text-black inter-text">
                  - Institutional Financing
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Fund Flow management
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Taxes Advisory
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceCta
        heading="Discuss Your Operations Challenge"
        text="Tell us where the operation is losing time, cost or quality — rework, missed deliveries, low output, weak controls. We will suggest where to start and what an engagement would involve."
        buttonLabel="Request an Operations Consultation"
        location="operation-hub"
      />
      <section>
        <div className="container">
          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">What We Deliver (at a glance)</p>
            <ul className="text-base inter-text list-disc pl-5 space-y-1 mt-3">
              <li>
                <Link href="/operation/innovation" className={linkClass}>
                  Innovation consulting
                </Link>{" "}
                – product & process benchmarking, cost saving, technology
                updates.
              </li>
              <li>
                <Link
                  href="/operation/systematic-operation"
                  className={linkClass}
                >
                  Systematic operations consulting
                </Link>{" "}
                – 5S implementation, SOP creation, SCM management.
              </li>
              <li>
                <Link
                  href="/operation/productivity-inprovement"
                  className={linkClass}
                >
                  Productivity improvement consulting
                </Link>{" "}
                – bottleneck identification, line balancing, higher UPH &
                productivity.
              </li>
              <li>
                <Link href="/operation/qms" className={linkClass}>
                  Quality management system consulting
                </Link>{" "}
                – FTR improvement, 7 QC tools, Kaizen, Poka-yoke, quality
                awareness trainings.
              </li>
              <li>
                <Link href="/operation/audit" className={linkClass}>
                  MIS and operations audit services
                </Link>{" "}
                – business performance analysis, process audits, system audits.
              </li>
              <li>
                <Link href="/operation/financial-growth" className={linkClass}>
                  Financial growth advisory
                </Link>{" "}
                – institutional financing, fund-flow management, tax advisory.
              </li>
            </ul>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">
              ZED Certification Consultants in India
            </p>
            <p className="text-base inter-text mb-6">
              We guide you through India’s Zero Defect Zero Effect (ZED)
              program—from diagnostics and documentation to implementation and
              audits—so your manufacturing meets world-class quality and
              environmental standards. See our{" "}
              <Link href="/certification" className={linkClass}>
                ZED, Lean, BIS and ISO certification services
              </Link>
              . Who we help:
            </p>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                MSME manufacturers reducing defects and rework
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Export-focused units targeting global compliance
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Plants seeking formal recognition for sustainable, efficient
                production
              </h2>
            </div>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">
              Lean Manufacturing Consultants in India
            </p>
            <p className="text-base inter-text mb-6">
              Driving operational excellence with lean principles We eliminate
              waste and improve flow using Kaizen, 5S, Value Stream Mapping,
              line balancing, SMED, and standard work.Benefits of Lean:
            </p>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Reduced operating costs
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Faster, more stable processes
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Higher first-time-right quality, fewer defects
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Better on-time delivery and customer satisfaction
              </h2>
            </div>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">
              Cost Optimization for Businesses
            </p>
            <p className="text-base inter-text mb-3">
              Strategies to maximize profitability We look beyond simple cuts to
              redesign cost drivers: analyze losses, target high-cost steps in
              manufacturing and logistics, and deploy technology-led fixes
              (digital work instructions, visual management, OEE tracking) that
              sustain savings without hurting quality.
            </p>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">
              Supply Chain Consultants in India
            </p>
            <p className="text-base inter-text mb-6">
              We design resilient, cost-effective supply chains
            </p>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Inventory optimization and reorder logic
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Vendor development and procurement strategy
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Network, logistics, and distribution planning with KPIs for
                service, cost, and reliability
              </h2>
            </div>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">Process Improvement Strategy</p>
            <p className="text-base inter-text mb-6">
              We combine lean methods with data analytics to build a governance
              rhythm (daily/weekly/monthly reviews), so improvements stick and
              performance keeps rising.
            </p>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold mb-3">
              Why Choose AS Business Consulting for Operations Excellence
            </p>

            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Certified ZED experts with a proven track record
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Deep hands-on experience in lean implementation and quality
                systems
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Measurable improvements in cost, UPH/OEE, FTR, and on-time
                delivery
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                End-to-end engagement: assessment → design → pilot → scale →
                audit readiness
              </h2>
            </div>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold mb-3">Explore More Services</p>

            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                <Link href="/research&development" className={linkClass}>
                  Engineering Consulting
                </Link>{" "}
                – Expertise for industrial innovation
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                <Link
                  href="/research&development/product-design-engineering"
                  className={linkClass}
                >
                  R&D & Product Design
                </Link>{" "}
                – From concept to prototype
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                <Link href="#enquiry" className={linkClass}>
                  Contact Us
                </Link>{" "}
                – Start your operations improvement journey today
              </h2>
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
