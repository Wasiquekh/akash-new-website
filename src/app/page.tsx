import * as React from "react";

export const metadata = {
  title: "AS Business Consulting in India | Strategic Advisory – AS Business",
  description:
    "AS Business Consulting delivers expert business solutions in India, offering strategic advisory and consulting services tailored for growth and long-term success.",
  alternates: {
    canonical: "https://www.asbconsulting.in/",
  },
};

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { FaCircle, FaInstagram, FaStar, FaXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { RiDoubleQuotesL } from "react-icons/ri";
import ContactFrom from "./components/ContactFrom";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* BreadcrumbList Schema (Home only) */}
      <Script
        id="breadcrumb-schema"
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
            ],
          }),
        }}
      />

      {/* WebSite Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.asbconsulting.in/#website",
            url: "https://www.asbconsulting.in/",
            name: "AS Business Consulting",
            publisher: { "@id": "https://www.asbconsulting.in/#organization" },
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.asbconsulting.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.asbconsulting.in/#organization",
            name: "AS Business Consulting",
            url: "https://www.asbconsulting.in/",
            // logo: "https://www.asbconsulting.in/logo.png", // ← add your actual logo URL if available
            // sameAs: ["https://twitter.com/...", "https://www.linkedin.com/company/..."]
          }),
        }}
      />
      <Header />

      {/* HOME TOP SECTION */}
      <div className="bg-[url('/images/landingTop.png')] bg-cover bg-center h-auto md:h-[600px] w-full flex justify-center items-center">
        <div className="container ">
          <div className="flex flex-col text-center w-full mb-0 md:mb-0">
            <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 ">
              Professional Business Consulting Firm Services for Sustainable
              Growth
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm font-normal text-white inter-text">
              At AS Business Consulting Firm, we don’t just advise—we co-create
              results. As your long-term growth partner, we combine strategy,
              operations, product/R&D, certification, HR, sales & marketing,
              legal, and international business to help organizations improve
              performance, enhance profitability, and stay competitive in
              dynamic markets.
            </p>
          </div>
        </div>
      </div>
      {/* CLINETNS LOGOS */}
      <div className=" w-full">
        <div className=" container grid grid-cols-3 md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4">
          <Image src="/images/c1.jpg" alt="Logo 1" />
          <Image src="/images/c2.jpg" alt="Logo 1" />
          <Image src="/images/c3.jpg" alt="Logo 1" />
          <Image src="/images/c4.jpg" alt="Logo 1" />
          <Image src="/images/c5.jpg" alt="Logo 1" />
          <Image src="/images/c6.jpg" alt="Logo 1" />
          <Image src="/images/c7.jpg" alt="Logo 1" />
          <Image src="/images/c8.jpg" alt="Logo 1" />
        </div>
      </div>
      {/* ABOUT SECTION */}
      <section className=" relative">
        <div className="container  flex  md:flex-row flex-col items-center relative">
          <div className="lg:max-w-3/6 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="/images/aboutUs.png" // path relative to /public
              alt="My beautiful image"
              width={600}
              height={400}
              priority // optional: preloads image
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-2xl sm:text-6xl   mb-4 font-bold text-primary uppercase">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed text-black inter-text">
              AS BUSINESS CONSULTING is a Solution Provider. we work with you,
              helping you to identify your potential and become more innovative,
              competitive & efficient to help you grow exponentially in the
              global markets.  We provide various services to our clients to
              conceptualize & visualize technology driven business
              transformation initiatives.  We are a professional who provides
              services in a particular area such as Research and Development,
              Product Design, Operation Technologies, Lean Manufacturing, Zed
              Consulting, ISO, BIS, NABL, QMS, IMS, Human Resource, Import,
              export, Management Consulting, Sales and Marketing, & Legal
              Advisory.
            </p>
          </div>
        </div>
        <Image
          src="/images/leftShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute left-0 bottom-0 "
        />
        <Image
          src="/images/rightShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute right-0 top-30 "
        />
      </section>
      {/* why choose */}
      <section className=" relative">
        <div className="container ">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary w-full md:w-[80%] text-center m-auto">
              Why we are trusted business advisory company in India
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              Selecting the right partner can accelerate growth and reduce risk.
              We bring cross-industry experience, data-driven strategy, and
              hands-on execution.
            </p>
          </div>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8">
            <div className=" w-full">
              <p className=" text-black text-2xl font-bold mb-3">
                Our approach focuses on:
              </p>
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Crafting custom strategies aligned with your goals and stage
                  of growth
                </p>
              </div>
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Market analysis & opportunity assessment to de-risk decisions
                </p>
              </div>
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Corporate restructuring & transformation for measurable
                  improvement
                </p>
              </div>
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Sustainable business development plans backed by people,
                  process, and tools
                </p>
              </div>
            </div>
            <div className=" w-full flex justify-end">
              <Image
                src="/images/choose.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        {/* <Image
          src="/images/leftShape.svg" 
          alt="My beautiful image"
          width={300}
          height={300}
          priority
          className=" absolute left-0 bottom-0 -z-50 "
        />
        <Image
          src="/images/rightShape.svg" 
          alt="My beautiful image"
          width={300}
          height={300}
          priority 
          className=" absolute right-0 top-30 "
        /> */}
      </section>
      {/* we work */}
      <section className=" relative">
        <div className="container ">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary w-full md:w-[80%] text-center m-auto">
              How we work
            </h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" w-full">
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Diagnose – Baseline current state via data and on-ground study
                </p>
              </div>
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Design – Prioritized roadmap across people, process, and
                  technology
                </p>
              </div>
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Deliver – Pilot → scale, with governance and KPI tracking
                </p>
              </div>
              <div className=" flex gap-2 items-center bg-tertiary p-3 rounded mb-3">
                <FaCircle className=" text-primary mb-1 mt-1 text-lg" />
                <p className="text-sm text-[#2D2D2D]">
                  Develop – Train internal teams to sustain gains
                </p>
              </div>
            </div>
            <div className=" w-full flex justify-end">
              <Image
                src="/images/we-work.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>
      {/* JOURNER OF SUCCESS */}
      <section className="">
        <div className="container">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              JOURNEY OF SUCCESS
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              At AS Business Consulting, we guide businesses through every step
              of their growth journey — from strategy and innovation to global
              expansion — turning challenges into milestones of success.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-wrap w-[80%]  md:w-[65%]">
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  01
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2019</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">Establishment of</h2>
                    <p className=" font-semibold">AS Business Consulting</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  02
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2021</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Complete Design project of 
                    </h2>
                    <p className=" font-semibold">Air Conditioner</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  03
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2022</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Developed business with
                    </h2>
                    <p className=" font-semibold">international client</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  04
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2023</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Handling Air Conditioner{" "}
                    </h2>
                    <p className=" font-semibold">
                      Psychrometric Lab as 3rd Party
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  05
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2024</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">Start BIS & NABL </h2>
                    <p className=" font-semibold">Consultation Work</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  06
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2025</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Firm Approved for MSME{" "}
                    </h2>
                    <p className=" font-semibold">
                      Lean Manufacturing & ZED Scheme
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden  w-[35%] md:flex flex-col justify-between">
              <Image
                src="/images/journey1.jpg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={400}
                priority // optional: preloads image
                className="mb-4"
              />
              <Image
                src="/images/journey2.jpg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={400}
                priority // optional: preloads image
                className="mb-4"
              />
              <Image
                src="/images/journey3.jpg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={400}
                priority // optional: preloads image
                className=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* OUR ACHIEVEMENT */}

      <section className="bg-primary w-ful pb-20">
        <div className="container pb-0">
          <div className="flex flex-col text-center w-full mb-0">
            <h1 className="   rounded m-auto text-3xl md:text-6xl font-medium text-white mb-5 md:mb-2 ">
              OUR ACHIEVEMENTS
            </h1>
            {/* <p className="lg:w-2/3 mx-auto text-base  md:text-base md:font-normal text-white">
                Aziz Enterprises is deeply committed to offering secure &
                affordable solutions to different industries
              </p> */}
          </div>
        </div>
      </section>
      <div className=" max-w-7xl px-5 flex flex-wrap  text-center bg-secondary md:w-full m-auto rounded   relative -top-26 ">
        <div className="p-4 md:w-2/6 sm:w-1/2 w-full">
          <div className="  px-8 py-6  text-white md:border-r-[2px] border-l-white flex flex-col justify-center items-center ">
            <Image
              src="/images/client.svg" // Public folder path
              alt="Example image"
              width={55}
              height={55}
              className=" mb-2 w-14"
            />
            <h2 className=" font-poppins text-5xl font-bold mb-10 md:mb-2">
              {/* {counterInView && <CountUp end={53} duration={5} />}+ */}
              53+
            </h2>

            <p className=" text-lg font-medium mb-2">Clients</p>
            <p className=" text-sm  font-light text-center">
              The Nation and International clients are trusted on our services
              and happy to seen our result in desire timeline
            </p>
          </div>
        </div>
        <div className="p-4 md:w-2/6 sm:w-1/2 w-full">
          <div className="  px-8 py-6  text-white md:border-r-[2px] border-l-white flex flex-col justify-center items-center ">
            <Image
              src="/images/project.svg" // Public folder path
              alt="Example image"
              width={55}
              height={55}
              className=" mb-2 w-14"
            />
            <h2 className=" font-poppins text-5xl font-bold  mb-2">
              {/* {counterInView && <CountUp end={120} duration={5} />} */}
              120
            </h2>

            <p className=" text-lg font-medium mb-2">Projects</p>
            <p className=" text-sm  font-light text-center">
              To a small and large developments projects we competed more then
              120 project in past years
            </p>
          </div>
        </div>
        <div className="p-4 md:w-2/6 sm:w-1/2 w-full">
          <div className="  px-8 py-6  text-white md:border-r-[0px] border-l-white flex flex-col justify-center items-center ">
            <Image
              src="/images/cost.svg" // Public folder path
              alt="Example image"
              width={55}
              height={55}
              className=" mb-2 w-14"
            />
            <h2 className=" font-poppins text-5xl font-bold  mb-2">
              {/* {counterInView && <CountUp end={250} duration={5} />}+ */}
              100 Cr
            </h2>

            <p className=" text-lg font-medium mb-2">Cost Innovation</p>
            <p className=" text-sm  font-light text-center">
              We given more then 100 CR rupees saving to our customer though our
              innovation program
            </p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="bg-[linear-gradient(180deg,_#FFF_0%,_#F0DEEC_100%)]">
        <div className="container">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              OUR SERVICES
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              We offer end-to-end consulting solutions across research, product
              design, operations, certifications, HR, management, sales, and
              legal — empowering businesses to grow with innovation and
              excellence.
            </p>
          </div>
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
                <p className="text-black text-sm mb-0">- Lean Manufacturing</p>
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
      {/* TEAM */}
      <section className=" relative">
        <div className="container">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              OUR TEAM
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              Our team brings together experienced professionals, industry
              experts, and innovative thinkers dedicated to delivering tailored
              solutions that drive measurable growth and long-term success for
              our clients.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/Akash Shahane.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Akash Shahane
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    MBA BE (Mech.) Founder
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/George Cao.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    George Cao
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    International Biz Head
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/Miss. Jeissey.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Miss. Jeissey
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    China Coordinator
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/Akash Shahane w.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Adv. Madhuri S
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Advocate
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/Ravindra Waykole.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Ravindra Waykole
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Research and Development
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/Rohit Pohekar.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Rohit Pohekar
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Master of Science Wisconsin University
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/Nilesh Kulkarni.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Nilesh Kulkarni
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Industrial Graphics Designer
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <Image
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                  src="/images/Akash Shahane.png"
                /> */}
                <Image
                  src="/images/Rajendra Patel.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Rajendra Patel
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Electronics Head
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/leftShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute left-0 top-70 hidden "
        />
        <Image
          src="/images/rightShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute right-0 top-70 hidden"
        />
      </section>
      {/* AWARDS */}
      <section className="">
        <div className="container">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              AWARDS
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              Our awards and recognitions reflect our commitment to excellence,
              innovation, and delivering value-driven solutions that empower
              businesses to achieve global success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 p-0">
            {/* First row: Full width image */}
            <div className="w-full">
              <Image
                src="/images/award-landing-1.png"
                alt="Image 1"
                width={1200} // or whatever size fits your layout
                height={500}
                className="object-cover w-full h-auto rounded"
              />
            </div>

            {/* Second row: Two images side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src="/images/award-landing-2.png"
                  alt="Image 2"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto rounded"
                />
              </div>
              <div>
                <Image
                  src="/images/award-landing-3.png"
                  alt="Image 3"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section>
        <div className="container">
          <div className="flex flex-col text-center w-full mb-10 md:mb-16">
            <h2 className="sm:text-6xl text-2xl font-bold mb-4 text-primary uppercase">
              Explore More
            </h2>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              Discover more about our vision, expertise, and how we can support
              your business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 text-left">
            {/* About Us */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                About Us
              </h3>
              <p className="text-sm text-gray-600">
                Vision, mission, leadership, and recognitions that define our
                journey.
              </p>
            </div>

            {/* Services */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Services
              </h3>
              <p className="text-sm text-gray-600">
                Full catalog across strategy, operations, R&D, certification,
                HR, GTM, legal, and international business.
              </p>
            </div>

            {/* Contact Us */}
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Contact Us
              </h3>
              <p className="text-sm text-gray-600">
                Schedule a consultation with our team for a tailored growth
                plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section>
        <div></div>
      </section>
      <section className="" id="customer">
        <div className="container">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary uppercase">
              Customer&apos;s Testimonials
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              The trust and satisfaction of our clients are the true measure of
              our success. Hear what our customers have to say about their
              journey with AS Business Consulting.
            </p>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mb-0">
            {/* Card 1 */}
            <div className="w-full md:w-full h-64 relative max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              <div className="w-full h-full absolute bg-white rounded-md border border-[#D4D4D4]" />
              <div className="absolute left-[19px] right-[19px] top-[121px] text-neutral-500 text-xs font-medium">
                Excellent services for AC maintenance, repair, and installation.
                Efficient, reliable, and customer-focused solutions that ensure
                long-lasting performance.
              </div>
              <div className="absolute left-[125px] top-[65px] text-neutral-500 text-xs font-medium">
                03/05/2025
              </div>
              <div className="absolute left-[125px] top-[35px] text-black text-xl font-semibold">
                Jay Ladwa
              </div>
              <div className="absolute left-[19px] top-[13px] w-24 h-24 bg-primary rounded-full flex justify-center items-center text-white font-poppins text-3xl font-medium">
                {" "}
                J
              </div>
              <RiDoubleQuotesL className="w-8 md:w-16 w-8 md:h-16 absolute left-[301px] top-[48px] md:top-[28px] text-tertiary" />
              <div className="absolute left-[84px] top-[190px] text-black text-base font-medium">
                Google Review
                <div className="flex">
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                </div>
              </div>
              <div className="absolute left-[19px] top-[185px] w-14 h-14 overflow-hidden">
                <Image
                  src="/images/google.svg"
                  alt="Icon"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            {/* Card 2 */}
            <div className="w-full md:w-full h-64 relative max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              <div className="w-full h-full absolute bg-white rounded-md border border-[#D4D4D4]" />
              <div className="absolute left-[19px] right-[19px] top-[121px] text-neutral-500 text-xs font-medium">
                Excellent services for AC maintenance, repair, and installation.
                Efficient, reliable, and customer-focused solutions that ensure
                long-lasting performance.
              </div>
              <div className="absolute left-[125px] top-[65px] text-neutral-500 text-xs font-medium">
                03/05/2025
              </div>
              <div className="absolute left-[125px] top-[35px] text-black text-xl font-semibold">
                Jay Ladwa
              </div>
              <div className="absolute left-[19px] top-[13px] w-24 h-24 bg-primary rounded-full flex justify-center items-center text-white font-poppins text-3xl font-medium">
                {" "}
                J
              </div>
              <RiDoubleQuotesL className="w-8 md:w-16 w-8 md:h-16 absolute left-[301px] top-[48px] md:top-[28px] text-tertiary" />
              <div className="absolute left-[84px] top-[190px] text-black text-base font-medium">
                Google Review
                <div className="flex">
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                </div>
              </div>
              <div className="absolute left-[19px] top-[185px] w-14 h-14 overflow-hidden">
                <Image
                  src="/images/google.svg"
                  alt="Icon"
                  width={200}
                  height={200}
                />
              </div>
            </div>
            {/* Card 3 */}
            <div className="w-full md:w-full h-64 relative max-w-full overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              <div className="w-full h-full absolute bg-white rounded-md border border-[#D4D4D4]" />
              <div className="absolute left-[19px] right-[19px] top-[121px] text-neutral-500 text-xs font-medium">
                Excellent services for AC maintenance, repair, and installation.
                Efficient, reliable, and customer-focused solutions that ensure
                long-lasting performance.
              </div>
              <div className="absolute left-[125px] top-[65px] text-neutral-500 text-xs font-medium">
                03/05/2025
              </div>
              <div className="absolute left-[125px] top-[35px] text-black text-xl font-semibold">
                Jay Ladwa
              </div>
              <div className="absolute left-[19px] top-[13px] w-24 h-24 bg-primary rounded-full flex justify-center items-center text-white font-poppins text-3xl font-medium">
                {" "}
                J
              </div>
              <RiDoubleQuotesL className="w-8 md:w-16 w-8 md:h-16 absolute left-[301px] top-[48px] md:top-[28px] text-tertiary" />
              <div className="absolute left-[84px] top-[190px] text-black text-base font-medium">
                Google Review
                <div className="flex">
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                  <FaStar className="text-yellow-400 text-xl" />
                </div>
              </div>
              <div className="absolute left-[19px] top-[185px] w-14 h-14 overflow-hidden">
                <Image
                  src="/images/google.svg"
                  alt="Icon"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT FORM COMPONENT */}
      <ContactFrom />

      <Footer />
    </>
  );
}
