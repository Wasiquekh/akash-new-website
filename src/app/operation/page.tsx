import * as React from "react";
export const metadata = {
  title: "Lean Manufacturing & ZED Certification in India – AS Business",
  description:
    "Boost efficiency with AS Business Consulting’s lean manufacturing consultants in India, offering ZED certification, reverse engineering, and supply chain optimization.",
  alternates: {
    canonical: "",
  },
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center uppercase ">
            Operations Consulting
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            International Business Development & Logistics Services
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
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                Operations Consulting
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                Businesses are always looking to better optimize their
                operational processes in a variety of ways, like increasing
                efficiency, cutting costs, improvement quality, etc. In certain
                scenarios, however, such as economic downturns, changes in
                management, or technological rollouts, operations consultants
                will be brought in to advise on significant changes to a
                business operational processes.
              </p>
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
                  Innovation
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
                  Productivity Improvement
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
                  Systematic Operation
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
                  MIS & Audit
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
                  QMS
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
                  Financial Growth
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
      <section>
        <div className="container">
          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">What We Deliver (at a glance)</p>
            <p className="text-base inter-text">
              Innovation – Product & process benchmarking, cost saving,
              technology updates. Systematic Operations – 5S implementation, SOP
              creation, SCM management. Productivity Improvement – Bottleneck
              identification, line balancing, higher UPH & productivity. QMS &
              Quality Excellence – FTR improvement, 7 QC tools, Kaizen,
              Poka-yoke, quality awareness trainings. MIS & Audit – Business
              performance analysis, process audits, system audits. Financial
              Growth Enablement – Institutional financing, fund-flow management,
              tax advisory.
            </p>
          </div>

          <div className="border border-primary p-6 w-full rounded mb-6">
            <p className="text-base font-bold">
              ZED Certification Consultants in India
            </p>
            <p className="text-base inter-text mb-6">
              We guide you through India’s Zero Defect Zero Effect (ZED)
              program—from diagnostics and documentation to implementation and
              audits—so your manufacturing meets world-class quality and
              environmental standards. Who we help:
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
              Driving operational excellence with lean principlesWe eliminate
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
              Strategies to maximize profitabilityWe look beyond simple cuts to
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
                Engineering Consulting – Expertise for industrial innovation
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                R&D & Product Design – From concept to prototype
              </h2>
            </div>
            <div className="flex items-center mb-3 gap-3">
              <div className=" flex items-center justify-center  mb-0 p-0">
                <FaCheck className="rounded-full bg-primary text-xl text-white p-1" />
              </div>
              <h2 className="text-black text-base font-medium mb-0">
                Contact Us – Start your operations improvement journey today
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
