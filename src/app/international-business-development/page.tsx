import * as React from "react";
export const metadata = {
  title: "International Business Consultants in India – AS Business",
  description:
    "Expand globally with AS Business Consulting, offering export consulting, China market entry, global supply chain advisory, and logistics support in India.",
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
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Internation Business Development
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center w-full md:w-[80%]">
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
          <div className=" mx-auto flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-10 md:mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                International Business
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                We are one of the end to end service provider company. After
                successfully working in Design, New product Development, Lean
                Manufacturing, HR and Marketing sector we start “International
                Business Development And Logistics” Services for our valuable
                customer. 
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-primary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Technology
                <br />
                Development
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">New Technology / Setup</div>
              <div className="py-4  ">Machine & Tools</div>
              <div className="py-4  ">International Relations</div>
              <div className="py-4  ">Business Development</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-secondary h-10 rounded-b-lg"></div>
          </div>
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-secondary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Import
                <br />
                Export
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">Certification</div>
              <div className="py-4  ">Licensing</div>
              <div className="py-4  ">Product Sales</div>
              <div className="py-4  ">Franchise</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-primary h-10 rounded-b-lg"></div>
          </div>
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-primary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Logistics
                <br />
                Transport
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">Freight Forwarding</div>
              <div className="py-4  ">Customer Clearance</div>
              <div className="py-4  ">Transportation</div>
              <div className="py-4  ">Packing</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-secondary  h-10 rounded-b-lg"></div>
          </div>
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-secondary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Consultation
                <br />
                Training
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">Cost Saving</div>
              <div className="py-4  ">Govt. Benefit & Scheme</div>
              <div className="py-4  ">Audit</div>
              <div className="py-4  ">Training</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-primary h-10 rounded-b-lg"></div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className=" mx-auto flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-0">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                International Business Development & Export Consulting for
                Global Expansion
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                At AS Business Consulting, we help Indian businesses enter new
                countries, build reliable cross-border partnerships, and scale
                profitably. From regulations and certifications to supply chain
                and logistics, our team delivers end-to-end support so you can
                expand with confidence.
              </p>
              <p className=" text-xl md:text-[40px] font-bold text-primary mb-4">
                What We Deliver (End to End)
              </p>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-4">
                <p className=" text-start text-xl font-medium">
                  Technology Development
                </p>
                <p className=" inter-text text-start">
                  new technology/setup, machines & tools, international
                  relations, business development.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-4">
                <p className=" text-start text-xl font-medium">
                  Import–Export Enablement
                </p>
                <p className=" inter-text text-start">
                  certification, licensing, product sales, franchise programs.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-4">
                <p className=" text-start text-xl font-medium">
                  Logistics & Compliance
                </p>
                <p className=" inter-text text-start">
                  certification, licensing, product sales, franchise programs.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-0">
                <p className=" text-start text-xl font-medium">
                  Consultation & Incentives
                </p>
                <p className=" inter-text text-start">
                  cost saving, audits, training, guidance on Govt. benefits &
                  schemes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className=" mx-auto flex flex-wrap"></div>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
            <div className="">
              <h2 className="text-primary text-2xl md:text-3xl font-bold  mb-7">
                Export Business Consulting
              </h2>
              <p className=" text-xl font-bold inter-text my-4">
                Helping manufacturers, traders, and service providers win in
                global markets.
              </p>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Export readiness assessments and market prioritization
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Trade compliance, documentation, and product/regulatory
                    certifications
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    International marketing, pricing, and channel/sales
                    strategies
                  </h2>
                </div>
              </div>
              <h2 className="text-primary text-2xl md:text-3xl font-bold  my-7">
                China Business Development Advisory
              </h2>
              <p className=" text-xl font-bold inter-text my-4">
                Unlock opportunities in the Chinese market—confidently.
              </p>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Consumer/industry research and competitive mapping
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Partner/distributor sourcing and due diligence
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Negotiation support plus cultural and regulatory guidance
                  </h2>
                </div>
              </div>
              <h2 className="text-primary text-2xl md:text-3xl font-bold  my-7">
                Logistics Solutions in India for Global Trade
              </h2>
              <p className=" text-xl font-bold inter-text my-4">
                Efficient, compliant, and cost-effective movement—door to door.
              </p>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Freight forwarding and multimodal transportation
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Customs & compliance handling (documents, duties, HS codes,
                    INCOTERMS)
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Warehousing, inventory management, and export packing
                    standards
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full  md:w-1/3 ">
              <Image
                src="/images/international1.png" // path relative to /public
                alt="My beautiful image"
                width={500}
                height={500}
                priority // optional: preloads image
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className=" mx-auto flex flex-wrap"></div>
          <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
            <div className="">
              <h2 className="text-primary text-2xl md:text-3xl font-bold  mb-7">
                Why Choose AS Business Consulting for Global Expansion
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Proven expertise in international trade and market entry
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Customized strategies by region, industry, and channel
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Strong global network for partners, distributors, and
                    financing
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    End-to-end execution: market analysis → certifications →
                    logistics → scale
                  </h2>
                </div>
              </div>
              <h2 className="text-primary text-2xl md:text-3xl font-bold  my-7">
                Explore More Services
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    B2B Marketing – Targeted strategies to grow demand in new
                    markets
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Operations Consulting – Lean processes for export-ready
                    performance
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Contact Us – Start your global expansion journey today
                  </h2>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <Image
                src="/images/international2.png" // path relative to /public
                alt="My beautiful image"
                width={500}
                height={500}
                priority // optional: preloads image
                className="rounded"
              />
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
