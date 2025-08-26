import * as React from "react";
export const metadata = {
  title: "B2B Marketing in India | Digital Strategy & Training – AS Business",
  description:
    "Drive growth with AS Business Consulting’s B2B marketing experts, specializing in digital strategy, customer acquisition, and tailored promotional solutions.",
  alternates: {
    canonical: "",
  },
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowUpFromGroundWater, FaCheck } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { FaBoxes } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { BsBullseye } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/sales&marketing.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Sales & Marketing Consulting for B2B & B2C Growth in India
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            At AS Business Consulting, we help brands win the market with
            data-driven strategy, precise execution, and transparent reporting.
            Whether you sell B2B or B2C, we align advertising, market planning,
            pricing, distribution, and branding to deliver measurable revenue
            impact.
          </p>
        </div>
      </div>
      <section className="">
        <div className="container">
          {/* <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Sales & Marketing Consulting for B2B & B2C Growth in India
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-6">
              At AS Business Consulting, we help brands win the market with
              data-driven strategy, precise execution, and transparent
              reporting. Whether you sell B2B or B2C, we align advertising,
              market planning, pricing, distribution, and branding to deliver
              measurable revenue impact.
            </p>
          </div> */}
          {/* what we do */}
          <div>
            <p className=" text-xl md:text-[40px] font-bold text-primary my-6">
              What We Do
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full">
                <p className=" text-xl font-normal md:font-medium">
                  B2B Marketing – account-based plays, LinkedIn + email funnels,
                  webinars, sales enablement
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-4 w-full">
                <p className=" text-xl font-normal md:font-medium">
                  B2C Marketing – performance ads (Meta/Google), social &
                  influencer, remarketing, CRM journeys
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Growth Consulting – market research, project reports, GTM &
                  channel strategy, conversion rate optimization
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Training – latest tools and techniques for your marketing &
                  sales teams (platforms, analytics, playbooks)
                </p>
              </div>
            </div>
          </div>

          {/* our strenth */}
          <div>
            <p className=" text-xl md:text-[40px] font-bold text-primary my-6">
              Our Strengths
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Concrete Data Analysis – research, audience insights,
                  competitive mapping
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-4 w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Structured Strategy – ICP/personas, value proposition, channel
                  mix, objectives & KPIs
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Multiple Plans – A/B media plans, creative variants,
                  contingency plays
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Improved Brand Recognition – positioning, messaging, content
                  frameworks
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Logical Execution – sprint-based campaigns with QA checklists
                  and governance
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl font-normal md:font-medium">
                  Marketing Analytics & Reporting – dashboards, cohort analysis,
                  ROAS/CAC/CPL tracking
                </p>
              </div>
            </div>
          </div>
          {/* core capabilities */}
          <div>
            <p className=" text-xl md:text-[40px] font-bold text-primary my-6">
              Core Capabilities
            </p>
            <div className=" grid grid-cols-1  gap-4">
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full border border-primary">
                <p className=" text-xl font-medium mb-2">
                  Advertising & Campaign Management
                </p>
                <p className=" text-sm inter-text">
                  Full-funnel campaigns (awareness → consideration →
                  conversion), creative direction, media buying, and continious
                  optimization.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full border border-primary">
                <p className=" text-xl font-medium mb-2">
                  Market Planning & Target/Goal Setting
                </p>
                <p className=" text-sm inter-text">
                  Bottom-up forecasts, seasonality planning, SMART targets, and
                  budget allocation by channel and audience.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full border border-primary">
                <p className=" text-xl font-medium mb-2">
                  Product Pricing & Packaging
                </p>
                <p className=" text-sm inter-text">
                  Value-based pricing, promo calendars, and margin-safe offers
                  that convert without eroding profitability.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full border border-primary">
                <p className=" text-xl font-medium mb-2">
                  Distribution & Channel Planning
                </p>
                <p className=" text-sm inter-text">
                  Online/offline channel maps, partner programs, last-mile
                  logistics coordination, and territory rollout.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full border border-primary">
                <p className=" text-xl font-medium mb-2">
                  Brand Building & Value Creation
                </p>
                <p className=" text-sm inter-text">
                  Positioning workshops, brand identity systems, content
                  pillars, and reputation management.
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full border border-primary">
                <p className=" text-xl font-medium mb-2">
                  Project Reports & Business Cases
                </p>
                <p className=" text-sm inter-text">
                  Investor-ready market sizing, feasibility assessments, and
                  go-live roadmaps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* training program tool */}
      <section>
        <div className="container">
          <div className=" mx-auto flex flex-wrap"></div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="w-full">
              <h2 className="text-primary text-xl md:text-3xl font-bold  mb-7">
                Training Programs (Tools & Techniques)
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Performance marketing (Meta, Google, YouTube, LinkedIn)
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Marketing analytics & dashboards (GA4, Looker/Data Studio)
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Sales playbooks, pitch crafting, and objection handling
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Content & brand story telling for teams
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-primary text-xl md:text-3xl font-bold  mb-7">
                Deliverables You Receive
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    GTM strategy, ICP/personas, value proposition
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Media plan & budget, creative guidelines, ad copies
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Pricing architecture & promo plan
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Distribution blueprint & partner kit
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Weekly dashboards and monthly performance reviews with
                    actions
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-primary text-xl md:text-3xl font-bold  mb-7">
                Why Choose AS Business Consulting
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Data-first approach with structured experimentation
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    End-to-end ownership from plan to execution to reporting
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    B2B + B2C expertise across industries
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Training + handover so your team sustains results
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-primary text-xl md:text-3xl font-bold  mb-7">
                Explore More Services
              </h2>
              <div>
                <p className=" inter-text text-sm">
                  Operations Consulting – Lean, quality, and supply-chain
                  excellence R&D & Product Design – From concept to prototype
                  and market readiness Contact Us – Let’s design a growth plan
                  and start scaling your revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" relative">
        <div className="container">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              We do
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-6">
              AS BUSINESS CONSULTING is a Solution Provider. we work with you,
              helping you to identify your potential and become more innovative,
              competitive & efficient to help you grow exponentially in the
              global markets. 
            </p>
          </div>
          <div className=" flex flex-col md:flex-row  gap-4">
            <div className="w-full md:w-1/2">
              <div className=" flex flex-col gap-4">
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-lg md:text-2xl font-medium mb-0">
                    B2B Business to Business Marketing
                  </h2>
                </div>
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-lg md:text-2xl font-medium mb-0">
                    B2C Business to Customer Marketing
                  </h2>
                </div>
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-lg md:text-2xl font-medium mb-0">
                    CONSULTING to grow business
                  </h2>
                </div>
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-lg md:text-2xl font-medium mb-0">
                    TRAININGS for latest tools and techniques
                  </h2>
                </div>
              </div>
              <Image
                src="/images/we-do.svg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mt-20"
              />
            </div>
            <div className="w-full hidden md:block md:w-1/2">
              <div className="relative w-full max-w-5xl mx-auto pt-0 pb-0">
                {/* Vertical center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691]"></div>

                {/* STEP 1 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Advertising
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <RiAdvertisementLine className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 2 - Right */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <BiSolidReport className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Project Report
                    </h3>
                  </div>
                </div>

                {/* STEP 3 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Market Planning
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <FaArrowUpFromGroundWater className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 4 - Right */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <MdPriceChange className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Product Pricing
                    </h3>
                  </div>
                </div>

                {/* STEP 5 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-3 rounded-2xl">
                      Set Targets And Goals
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <BsBullseye className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 6 - Right */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <FaBoxes className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-2 rounded-2xl">
                      Distribution & Planning
                    </h3>
                  </div>
                </div>

                {/* STEP 7 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Building Brands
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <TbBuildingSkyscraper className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 8 - Right */}
                <div className="flex items-center">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <HiOutlineSparkles className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Creating Value
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <section className=" block md:hidden ">
              <div className=" mx-auto flex flex-wrap mt-12">
                <div className="flex flex-wrap w-full">
                  <div className="full md:pr-10 md:py-6">
                    <div className="flex relative pb-12 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <RiAdvertisementLine className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Advertising
                        </h2>
                      </div>
                    </div>
                    <div className="flex relative pb-12 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <BiSolidReport className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Project Report
                        </h2>
                      </div>
                    </div>
                    <div className="flex relative pb-12 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <FaArrowUpFromGroundWater className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Market Planning
                        </h2>
                      </div>
                    </div>
                    <div className="flex relative pb-12 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <MdPriceChange className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Product Pricing
                        </h2>
                      </div>
                    </div>
                    <div className="flex relative pb-12 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <BsBullseye className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Set Targets And Goals
                        </h2>
                      </div>
                    </div>
                    <div className="flex relative pb-12 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <FaBoxes className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Distribution & Planning
                        </h2>
                      </div>
                    </div>
                    <div className="flex relative pb-12 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <TbBuildingSkyscraper className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Building Brands
                        </h2>
                      </div>
                    </div>
                    <div className="flex relative pb-0 items-center">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691] pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] inline-flex items-center justify-center text-white relative z-10">
                        <HiOutlineSparkles className="text-white text-xl" />
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-medium title-font text-lg text-black mb-1 tracking-wider inline-flex bg-tertiary py-1 px-6 rounded">
                          Creating Value
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
        </div>
      </section>
      <section>
        <div className=" container">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Our Strengths
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-between">
            <Image
              src="/images/s1.svg"
              alt="Image 2"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s2.svg"
              alt="Image 3"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s3.svg"
              alt="Image 4"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s4.svg"
              alt="Image 5"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s5.svg"
              alt="Image 6"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s6.svg"
              alt="Image 6"
              width={150}
              height={150}
              className="object-contain"
              priority
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
