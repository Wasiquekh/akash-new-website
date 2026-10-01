import * as React from "react";
import Script from "next/script";

export const metadata = {
  title: "International Business & Export Consulting in India – AS Business",
  description:
    "Export consulting and international business development for Indian companies: export readiness, licensing, China partner sourcing and logistics compliance.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/international-business-development",
  },
};

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import Link from "next/link";
import ServiceCta from "../components/ServiceCta";

const linkClass = "text-primary underline hover:text-secondary";

const audiences = [
  {
    title: "Indian manufacturers and traders preparing to export",
    text: "Export readiness assessment, market prioritization, trade documentation and pricing for overseas buyers.",
  },
  {
    title: "Companies that need import or export licensing and certification",
    text: "Licensing, product and regulatory certification, and the paperwork that has to be in place before the first shipment.",
    href: "/international-business-development/import-export-enablement",
    linkText: "Import–export enablement",
  },
  {
    title: "Businesses looking for partners, distributors or suppliers in China",
    text: "Market research, partner and distributor sourcing, due diligence and negotiation support.",
  },
  {
    title: "Exporters and importers with freight or customs problems",
    text: "Freight forwarding, customs clearance, HS codes, INCOTERMS, transportation and export packing.",
    href: "/international-business-development/logistics-compliance",
    linkText: "Logistics and compliance support",
  },
  {
    title: "Firms bringing in new technology, machines or tooling",
    text: "New technology and plant setup, machines and tools, and the international relationships needed to source them.",
    href: "/international-business-development/development-technology",
    linkText: "Technology development",
  },
  {
    title: "Businesses that want to use government export schemes",
    text: "Guidance on government benefits and schemes, cost saving, audits and training.",
    href: "/international-business-development/consultation-incentives",
    linkText: "Consultation and incentives",
  },
];

const page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-business"
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
                name: "International Business Development",
                item: "https://www.asbconsulting.in/international-business-development",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-business-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/international-business-development#webpage",
            url: "https://www.asbconsulting.in/international-business-development",
            name: "International Business & Export Consulting in India – AS Business",
            description:
              "Expand globally with AS Business Consulting: export consulting, market entry (incl. China), partner search, global sourcing, logistics and customs advisory.",
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
      <div className="bg-[url('/images/legal-consulting.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            International Business Development & Export Consulting for Global
            Expansion
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center w-full md:w-[80%]">
            At AS Business Consulting, we help Indian businesses enter new
            countries, build reliable cross-border partnerships, and scale
            profitably. From regulations and certifications to supply chain and
            logistics, our team delivers end-to-end support so you can expand
            with confidence.
          </p>
          <div className="text-center mt-8">
            <Link
              href="#enquiry"
              data-cta="service_enquiry"
              data-cta-location="ibd-hero"
              className="inline-block bg-white text-primary hover:bg-tertiary font-semibold text-base py-3 px-6 rounded"
            >
              Discuss Your Market Expansion Plan
            </Link>
          </div>
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
            <div className="flex flex-col text-center w-full mb-0">
              {/* <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                International Business Development & Export Consulting for
                Global Expansion
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                At AS Business Consulting, we help Indian businesses enter new
                countries, build reliable cross-border partnerships, and scale
                profitably. From regulations and certifications to supply chain
                and logistics, our team delivers end-to-end support so you can
                expand with confidence.
              </p> */}
              <p className=" text-xl md:text-[40px] font-bold text-primary mb-4">
                What We Deliver (End to End)
              </p>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-4">
                <p className=" text-start text-xl font-medium">
                  <Link
                    href="/international-business-development/development-technology"
                    className={linkClass}
                  >
                    Technology Development
                  </Link>
                </p>
                <p className=" inter-text text-start">
                  new technology/setup, machines & tools, international
                  relations, business development.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-4">
                <p className=" text-start text-xl font-medium">
                  <Link
                    href="/international-business-development/import-export-enablement"
                    className={linkClass}
                  >
                    Import–Export Enablement
                  </Link>
                </p>
                <p className=" inter-text text-start">
                  certification, licensing, product sales, franchise programs.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-4">
                <p className=" text-start text-xl font-medium">
                  <Link
                    href="/international-business-development/logistics-compliance"
                    className={linkClass}
                  >
                    Logistics & Compliance
                  </Link>
                </p>
                <p className=" inter-text text-start">
                  freight forwarding, customs clearance, transportation,
                  packing.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] px-8 py-5 rounded mb-0">
                <p className=" text-start text-xl font-medium">
                  <Link
                    href="/international-business-development/consultation-incentives"
                    className={linkClass}
                  >
                    Consultation & Incentives
                  </Link>
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
                    <Link href="/sales&marketing/b2b-marketing" className={linkClass}>
                      B2B Marketing
                    </Link>{" "}
                    – Targeted strategies to grow demand in new markets
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    <Link href="/operation" className={linkClass}>
                      Operations Consulting
                    </Link>{" "}
                    – Lean processes for export-ready performance
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    <Link href="#enquiry" className={linkClass}>
                      Contact Us
                    </Link>{" "}
                    – Start your global expansion journey today
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
      <section>
        <div className="container">
          <h2 className="text-primary text-2xl md:text-3xl font-bold mb-3">
            Who This Service Is For
          </h2>
          <p className="inter-text text-sm md:text-base mb-8 max-w-3xl">
            Our international work is built around Indian companies trading
            across borders. These are the situations we are most often asked to
            help with.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-[#FEF2FB] px-6 py-5 rounded"
              >
                <h3 className="text-lg font-medium text-black mb-2">
                  {audience.title}
                </h3>
                <p className="inter-text text-sm">{audience.text}</p>
                {audience.href && (
                  <Link
                    href={audience.href}
                    className={`${linkClass} inline-block mt-3 text-sm font-medium`}
                  >
                    {audience.linkText}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceCta
        heading="Discuss Your Market Expansion Plan"
        text="Tell us the product, the target country and where you are stuck. We will outline the certification, partner and logistics steps involved."
        buttonLabel="Discuss Your Market Expansion Plan"
        location="ibd-mid"
        points={[
          "Product or service you want to export or import",
          "Target country or region",
          "Current stage: exploring, quoting, or already shipping",
          "The specific obstacle: compliance, partners, logistics or cost",
        ]}
      />
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

      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
