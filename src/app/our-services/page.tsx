import React from "react";
import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import ServiceCta from "../components/ServiceCta";
import Link from "next/link";

export const metadata = {
  title: "Business Consulting Services in India – AS Business",
  description:
    "Explore AS Business Consulting’s services: Operations (Lean & ZED), R&D & Product Design, International Business, HR Consulting, Legal Advisory, Certification, and Sales & Marketing.",
  alternates: {
    canonical: "https://www.asbconsulting.in/our-services",
  },
};

type ServiceCategory = {
  title: string;
  href: string;
  image: string;
  problem: string;
  what: string;
  outcome: string;
  cta: string;
  links: { href: string; label: string }[];
};

const serviceCategories: ServiceCategory[] = [
  {
    title: "Research and Development",
    href: "/research&development",
    image: "/images/r&d.png",
    problem: "you need design or engineering capacity you do not have in-house.",
    what: "product design, 3D modeling, drafting, CAD/CAM, reverse engineering and prototype development.",
    outcome: "production-ready designs and documentation without adding a full engineering team.",
    cta: "Explore R&D Services",
    links: [
      { href: "/research&development/cad-cam-outsourcing", label: "CAD/CAM outsourcing services" },
      { href: "/research&development/product-design-engineering", label: "Product design and engineering" },
      { href: "/research&development/reverse-engineering", label: "Reverse engineering services" },
      { href: "/research&development/prototype-development", label: "Prototype development" },
    ],
  },
  {
    title: "Operations",
    href: "/operation",
    image: "/images/Operations.png",
    problem: "output, quality or cost is not where it should be.",
    what: "lean manufacturing, 5S and SOPs, productivity studies, quality systems, audits and cost-saving programs.",
    outcome: "processes that are standardized, measured and easier to control.",
    cta: "Explore Operations Consulting",
    links: [
      { href: "/operation/systematic-operation", label: "Systematic operation consulting (5S & SOP)" },
      { href: "/operation/productivity-inprovement", label: "Productivity improvement consulting" },
      { href: "/operation/qms", label: "Quality management system (QMS) consulting" },
      { href: "/operation/audit", label: "MIS and operations audit" },
    ],
  },
  {
    title: "International Business",
    href: "/international-business-development",
    image: "/images/Certification.png",
    problem: "you want to sell, source or partner across borders.",
    what: "export readiness, import–export licensing and certification, logistics and customs compliance, technology and partner development.",
    outcome: "a workable route into a new market, with documentation and logistics planned.",
    cta: "Explore International Business Services",
    links: [
      { href: "/international-business-development/import-export-enablement", label: "Import–export enablement" },
      { href: "/international-business-development/logistics-compliance", label: "Logistics and compliance" },
      { href: "/international-business-development/development-technology", label: "Technology development" },
      { href: "/international-business-development/consultation-incentives", label: "Consultation and government incentives" },
    ],
  },
  {
    title: "Sales & Marketing",
    href: "/sales&marketing",
    image: "/images/Sales & Mrkt.png",
    problem: "leads and sales are not growing predictably.",
    what: "B2B and B2C marketing, growth consulting and practical training for sales and marketing teams.",
    outcome: "a clearer go-to-market plan and a team able to execute it.",
    cta: "Explore Sales & Marketing Services",
    links: [
      { href: "/sales&marketing/b2b-marketing", label: "B2B marketing" },
      { href: "/sales&marketing/b2c-marketing", label: "B2C marketing" },
      { href: "/sales&marketing/growth-consulting", label: "Growth consulting" },
      { href: "/sales&marketing/training", label: "Marketing and sales training programs" },
    ],
  },
  {
    title: "HR Consultancy",
    href: "/human-resource",
    image: "/images/HR Consultancy.png",
    problem: "hiring is slow, policies are outdated or people are leaving.",
    what: "recruitment, workforce planning, policy design and audits, engagement programs, payroll support and training.",
    outcome: "a compliant HR setup and the people to run the business.",
    cta: "Explore HR Consulting",
    links: [
      { href: "/human-resource/recruitment-executive-search", label: "Recruitment and executive search" },
      { href: "/human-resource/policy-design-compliance-audits", label: "HR policy design and compliance audits" },
      { href: "/human-resource/training-capability-building", label: "Training and capability building" },
      { href: "/human-resource/employee-engagement", label: "Employee engagement programs" },
    ],
  },
  {
    title: "Legal Advisory",
    href: "/legal-consulting",
    image: "/images/Legal Advisory.png",
    problem: "you need contracts, compliance or due diligence handled properly.",
    what: "corporate and commercial advisory, contracts and agreements, compliance audits, banking and finance law, and background investigation.",
    outcome: "decisions and agreements that rest on sound legal footing.",
    cta: "Explore Legal Advisory",
    links: [
      { href: "/legal-consulting/corporate-legal-advisory", label: "Corporate legal advisory" },
      { href: "/legal-consulting/contracts-agreements", label: "Contracts and agreements" },
      { href: "/legal-consulting/compliance-audits", label: "Compliance audits" },
      { href: "/legal-consulting/background-investigation-due-diligence", label: "Background investigation and due diligence" },
    ],
  },
  {
    title: "Certification",
    href: "/certification",
    image: "/images/course.jpg",
    problem: "a customer, regulator or government scheme requires certification.",
    what: "BIS, NABL and ISO certification support, plus guidance on the MSME Lean and ZED schemes.",
    outcome: "documentation and systems that are ready for audit.",
    cta: "Explore Certification Services",
    links: [
      { href: "/operation/qms", label: "QMS consulting for certification readiness" },
    ],
  },
];

const page = () => {
  return (
    <>
      {/* BreadcrumbList (Home → Our Services) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asbconsulting.in/" },
            { "@type": "ListItem", position: 2, name: "Our Services", item: "https://www.asbconsulting.in/our-services" },
          ],
        }}
      />

      {/* CollectionPage + ItemList of service categories (no Service schema) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://www.asbconsulting.in/our-services#webpage",
          url: "https://www.asbconsulting.in/our-services",
          name: metadata.title,
          description: metadata.description,
          isPartOf: { "@id": "https://www.asbconsulting.in/#website" },
          hasPart: {
            "@type": "ItemList",
            name: "Service Categories",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: { "@type": "WebPage", name: "Research & Development", url: "https://www.asbconsulting.in/research&development" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCategories.map((category) => (
              <div
                key={category.href}
                className="w-full bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
              >
                <Image
                  src={category.image}
                  width={600}
                  height={400}
                  alt={category.title}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl  text-black mb-3 pb-2 border-b-2 inline-block border-secondary self-start">
                    {category.title}
                  </h2>
                  <p className="text-black text-sm mb-2">
                    <span className="font-semibold">When to call us:</span>{" "}
                    {category.problem}
                  </p>
                  <p className="text-black text-sm mb-2">
                    <span className="font-semibold">What we do:</span>{" "}
                    {category.what}
                  </p>
                  <p className="text-black text-sm mb-3">
                    <span className="font-semibold">Outcome:</span>{" "}
                    {category.outcome}
                  </p>
                  <ul className="text-sm mb-4 space-y-1">
                    {category.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-primary underline hover:text-secondary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={category.href}
                    className="bg-secondary hover:bg-primary text-white text-base font-medium py-2 px-6 rounded border border-secondary block text-center mt-auto"
                  >
                    {category.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceCta
        heading="Not Sure Which Service Fits?"
        text="Describe the business problem in a few lines. We will point you to the right team and tell you what a first engagement would look like."
        buttonLabel="Discuss Your Business Challenge"
        location="our-services"
      />
      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
