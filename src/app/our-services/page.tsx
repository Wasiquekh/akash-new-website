import React from "react";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import Link from "next/link";

export const metadata = {
  title: "Business Consulting Services in India – AS Business",
  description:
    "Explore AS Business Consulting’s services: Operations (Lean & ZED), R&D & Product Design, International Business, HR Consulting, Legal Advisory, Certification, and Sales & Marketing.",
  alternates: {
    canonical: "https://www.asbconsulting.in/our-services",
  },
};

const page = () => {
  return (
    <>
      {/* BreadcrumbList (Home → Our Services) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asbconsulting.in/" },
              { "@type": "ListItem", position: 2, name: "Our Services", item: "https://www.asbconsulting.in/our-services" },
            ],
          }),
        }}
      />

      {/* CollectionPage + ItemList of service categories (no Service schema) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://www.asbconsulting.in/our-services#page",
            url: "https://www.asbconsulting.in/our-services",
            name: "Business Consulting Services in India – AS Business",
            description:
              "Browse AS Business Consulting’s service categories across operations, R&D, international business, HR, legal, certification, and sales & marketing.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.asbconsulting.in/#website",
              url: "https://www.asbconsulting.in/",
              name: "AS Business Consulting",
            },
            hasPart: {
              "@type": "ItemList",
              name: "Service Categories",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: { "@type": "WebPage", name: "Research & Development", url: "https://www.asbconsulting.in/research&26development" },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: { "@type": "WebPage", name: "Operations (Lean & ZED)", url: "https://www.asbconsulting.in/operation" },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "WebPage",
                    name: "International Business Development",
                    url: "https://www.asbconsulting.in/international-business-development",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: { "@type": "WebPage", name: "Sales & Marketing", url: "https://www.asbconsulting.in/sales&marketing" },
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  item: { "@type": "WebPage", name: "HR Consultancy", url: "https://www.asbconsulting.in/human-resource" },
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  item: { "@type": "WebPage", name: "Legal Advisory", url: "https://www.asbconsulting.in/legal-consulting" },
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  item: { "@type": "WebPage", name: "Certification", url: "https://www.asbconsulting.in/certification" },
                },
              ],
            },
          }),
        }}
      />

      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            OUR SERVICES
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            We provide end-to-end consulting services in research, design,
            operations, certifications, <br /> HR, management, sales, and legal
            to drive business growth and excellence.
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
      {/* SERVICES */}
      <section className="bg-[linear-gradient(180deg,_#FFF_0%,_#F0DEEC_100%)]">
        <div className="container">
          {/* <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              OUR SERVICES
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              We provide end-to-end consulting services in research, design,
              operations, certifications, <br /> HR, management, sales, and
              legal to drive business growth and excellence.
            </p>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-md ">
              <Image
                src="/images/r&d.png"
                width={600}
                height={400}
                alt="services"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl  text-black mb-2 pb-2 border-b-2 inline-block border-secondary">
                  Research and Development
                </h2>
                <p className="text-black text-sm mb-0">
                  - Product Designing & Development
                </p>
                <p className="text-black text-sm mb-0">- Proto Type Modeling</p>
                <p className="text-black text-sm mb-0">- 3D 2D Drafting</p>
                <Link
                  href="/research&development"
                  className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-4"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="w-full bg-white rounded-lg overflow-hidden shadow-md ">
              <Image
                src="/images/Operations.png"
                width={600}
                height={400}
                alt="services"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl  text-black mb-2 pb-2 border-b-2 inline-block border-secondary">
                  Operations
                </h2>
                <p className="text-black text-sm mb-0">
                  - Cost Savings Modules
                </p>
                <p className="text-black text-sm mb-0">- Process improvement</p>
                <p className="text-black text-sm mb-0">
                  - Supply Chain Management
                </p>
                <Link
                  href="/operation"
                  className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-4"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-md ">
              <Image
                src="/images/Certification.png"
                width={600}
                height={400}
                alt="services"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl  text-black mb-2 pb-2 border-b-2 inline-block border-secondary">
                  International Business
                </h2>
                <p className="text-black text-sm mb-0">- BIS & OTR</p>
                <p className="text-black text-sm mb-0">- NABL -ISO</p>
                <p className="text-black text-sm mb-0">- Lean Mfg</p>
                {/* <p className="text-black text-sm mb-0">
                  - Zed Certification -3rd Party Inspection
                </p> */}
                <Link
                  href="/international-business-development"
                  className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-4"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-md ">
              <Image
                src="/images/Sales & Mrkt.png"
                width={600}
                height={400}
                alt="services"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl  text-black mb-2 pb-2 border-b-2 inline-block border-secondary">
                  Sales & Marketing
                </h2>
                <p className="text-black text-sm mb-0">- Advertising</p>
                <p className="text-black text-sm mb-0">- Distribution Ship</p>
                <p className="text-black text-sm mb-0">- Market Planning</p>
                <Link
                  href="/sales&marketing"
                  className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-4"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-md ">
              <Image
                src="/images/HR Consultancy.png"
                width={600}
                height={400}
                alt="services"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl  text-black mb-2 pb-2 border-b-2 inline-block border-secondary">
                  HR Consultancy
                </h2>
                <p className="text-black text-sm mb-0">- Placement Services</p>
                <p className="text-black text-sm mb-0">- Trainings</p>
                <p className="text-black text-sm mb-0">- College Campus</p>
                <Link
                  href="/human-resource"
                  className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-4"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-md ">
              <Image
                src="/images/Legal Advisory.png"
                width={600}
                height={400}
                alt="services"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl  text-black mb-2 pb-2 border-b-2 inline-block border-secondary">
                  Legal Advisory
                </h2>
                <p className="text-black text-sm mb-0">
                  - Corporate Legal Advisory
                </p>
                <p className="text-black text-sm mb-0">
                  - Background Investigation
                </p>
                <p className="text-black text-sm mb-0">- Commercial Advisory</p>
                <Link
                  href="/legal-consulting"
                  className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-4"
                >
                  Read more
                </Link>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg overflow-hidden shadow-md ">
              <Image
                src="/images/course.jpg"
                width={600}
                height={400}
                alt="services"
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl  text-black mb-2 pb-2 border-b-2 inline-block border-secondary">
                  Certification
                </h2>
                <p className="text-black text-sm mb-0">- Lean Manufacturing</p>
                <p className="text-black text-sm mb-0">- ZED Certification</p>
                <p className="text-black text-sm mb-0">
                  - Cost Innovation Module
                </p>
                <Link
                  href="/certification"
                  className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-4"
                >
                  Read more
                </Link>
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
