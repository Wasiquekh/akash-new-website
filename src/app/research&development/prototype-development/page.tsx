import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaBoxesStacked,
  FaCircleCheck,
  FaClipboardCheck,
  FaCube,
  FaCubes,
  FaDiagramProject,
  FaFileCircleCheck,
  FaFileLines,
  FaGears,
  FaIndustry,
  FaLayerGroup,
  FaLightbulb,
  FaPenRuler,
  FaRocket,
  FaRulerCombined,
  FaScrewdriverWrench,
  FaShieldHalved,
  FaTruckFast,
  FaVialCircleCheck,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Prototype Development Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides prototype development services in India, including 3D printing, CNC prototypes, sheet metal, soft tooling, product testing, and pilot build support.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/research&development/prototype-development",
  },
};

const prototypeServices = [
  {
    title: "Rapid Prototyping Services",
    description:
      "We help businesses quickly convert product ideas, CAD models, sketches, and engineering designs into physical prototypes for review, testing, and approval.",
  },
  {
    title: "3D Printing Prototype Development",
    description:
      "We support 3D printed prototypes for concept models, product housings, plastic parts, fitment checks, visual samples, and early-stage product validation.",
  },
  {
    title: "CNC Prototype Machining",
    description:
      "We support accurate CNC prototypes for metal parts, plastic parts, mechanical components, machine parts, assemblies, and functional testing requirements.",
  },
  {
    title: "Sheet Metal Prototyping",
    description:
      "We help develop sheet metal prototypes for enclosures, brackets, panels, covers, cabinets, frames, machine guards, and industrial components.",
  },
  {
    title: "Soft Tooling Support",
    description:
      "Soft tooling helps create limited prototype batches and pre-production samples before investing in final hard tooling or mass manufacturing.",
  },
  {
    title: "Functional Prototype Development",
    description:
      "We support prototypes that can be tested for movement, fitment, assembly, strength, function, performance, and real-world usability.",
  },
  {
    title: "Visual Prototype Development",
    description:
      "We create visual prototypes that help clients, stakeholders, investors, and internal teams understand product form, size, proportion, and appearance.",
  },
  {
    title: "Product Sample Development",
    description:
      "We help clients prepare product samples for review, presentation, market validation, customer feedback, and internal decision-making.",
  },
  {
    title: "Form, Fit, and Function Testing Support",
    description:
      "We help validate product appearance, dimensional fit, assembly logic, usability, movement, strength, and functional performance before production.",
  },
  {
    title: "Prototype Design Improvement",
    description:
      "Based on prototype feedback, we support design changes, CAD refinements, dimensional corrections, feature improvements, and manufacturability updates.",
  },
  {
    title: "CAD Model Preparation for Prototyping",
    description:
      "We prepare clean prototype-ready CAD models suitable for 3D printing, CNC machining, sheet metal fabrication, tooling, and pilot build preparation.",
  },
  {
    title: "Prototype-Ready Engineering Drawings",
    description:
      "We prepare practical engineering drawings and technical inputs required for prototype manufacturing, vendor coordination, and production planning.",
  },
  {
    title: "Material Selection Support",
    description:
      "We help evaluate suitable materials for prototypes based on strength, finish, cost, testing purpose, manufacturing method, and product requirement.",
  },
  {
    title: "Product Testing and Validation Support",
    description:
      "We support product validation through physical testing, dimensional review, assembly checks, fitment checks, and functional performance feedback.",
  },
  {
    title: "Assembly Prototype Development",
    description:
      "We support assembly prototypes to check part interaction, fastening, movement, spacing, alignment, and practical assembly sequence.",
  },
  {
    title: "Pilot Build Preparation",
    description:
      "We help clients move from prototype to pilot build by preparing design files, drawings, documentation, vendor inputs, and manufacturing readiness support.",
  },
  {
    title: "Small Batch Prototype Support",
    description:
      "We support limited prototype batches for testing, stakeholder review, market validation, pre-production trials, and internal quality checks.",
  },
  {
    title: "Pre-Production Prototype Development",
    description:
      "We help develop pre-production prototypes that allow teams to test design maturity, process feasibility, material behavior, and product quality.",
  },
  {
    title: "Design Iteration and Refinement",
    description:
      "Prototype testing helps identify issues early. We support controlled design iterations to improve product performance before manufacturing.",
  },
  {
    title: "Manufacturing Feasibility Review",
    description:
      "We review prototypes with manufacturability in mind, helping reduce production errors, rework, tooling issues, and unnecessary development cost.",
  },
];

const benefits = [
  {
    title: "Test Before Manufacturing",
    description:
      "Prototype development allows businesses to test product design, dimensions, function, assembly, and usability before moving into production.",
  },
  {
    title: "Reduce Product Development Risk",
    description:
      "By identifying design issues early, prototypes help reduce costly mistakes, rework, tooling errors, and production delays.",
  },
  {
    title: "Faster Design Iteration",
    description:
      "Physical prototypes make it easier to review, improve, and refine the product quickly based on real testing and feedback.",
  },
  {
    title: "Better Form, Fit, and Function Validation",
    description:
      "Prototypes help check product appearance, component fitment, assembly logic, movement, strength, and performance before production.",
  },
  {
    title: "Improved Stakeholder Approval",
    description:
      "A working or visual prototype helps clients, investors, teams, and decision-makers understand the product clearly and approve it with confidence.",
  },
  {
    title: "Multiple Prototype Methods",
    description:
      "We support 3D printing, CNC machining, sheet metal prototyping, soft tooling, and pilot build preparation based on product requirements.",
  },
  {
    title: "Better Manufacturing Preparation",
    description:
      "Prototype testing helps improve manufacturability, material selection, assembly methods, and production planning before final manufacturing.",
  },
  {
    title: "Cost and Time Saving",
    description:
      "Early prototype validation helps avoid expensive changes during tooling, production, or market launch.",
  },
];

const industries = [
  "Product development companies",
  "Manufacturing companies",
  "Startups developing new products",
  "Industrial equipment manufacturers",
  "Consumer product brands",
  "Automotive component companies",
  "Appliance manufacturers",
  "HVAC product companies",
  "Plastic component manufacturers",
  "Sheet metal fabrication units",
  "CNC machining units",
  "Machine part manufacturers",
  "Engineering consultancies",
  "R&D teams",
  "Tooling and mold development companies",
];

const keyPoints = [
  {
    title: "Rapid Prototyping Support",
    description:
      "We help businesses quickly convert product designs and CAD models into physical prototypes for design review, testing, and approval.",
  },
  {
    title: "3D Printing Prototypes",
    description:
      "3D printing is useful for concept models, visual samples, fitment checks, product housings, plastic parts, and early-stage design validation.",
  },
  {
    title: "CNC Prototype Machining",
    description:
      "CNC prototyping helps create accurate and strong prototypes for functional testing, dimensional checking, fitment validation, and performance review.",
  },
  {
    title: "Sheet Metal Prototyping",
    description:
      "We support sheet metal prototype development for brackets, panels, covers, enclosures, cabinets, frames, and industrial parts.",
  },
  {
    title: "Soft Tooling Support",
    description:
      "Soft tooling helps create limited prototype batches or pre-production samples before investing in final production tooling.",
  },
  {
    title: "Form, Fit, and Function Testing",
    description:
      "Prototype development helps test product appearance, size, assembly, usability, movement, strength, and functional performance.",
  },
  {
    title: "Design Improvement Before Production",
    description:
      "Prototype feedback helps identify issues early and improve the design before tooling, pilot build, or mass manufacturing.",
  },
  {
    title: "Pilot Build Preparation",
    description:
      "We support the transition from prototype to pilot build by preparing design files, drawings, documentation, and manufacturing inputs.",
  },
  {
    title: "Reduced Manufacturing Risk",
    description:
      "Testing prototypes before production helps reduce errors, rework, delays, and unnecessary manufacturing costs.",
  },
  {
    title: "Suitable for Multiple Products",
    description:
      "Our prototype development services support industrial products, consumer products, appliances, HVAC parts, machine components, plastic parts, and sheet metal products.",
  },
];

const serviceIcons: IconType[] = [
  FaRocket,
  FaCube,
  FaGears,
  FaLayerGroup,
  FaScrewdriverWrench,
  FaVialCircleCheck,
  FaLightbulb,
  FaBoxesStacked,
  FaClipboardCheck,
  FaPenRuler,
  FaFileLines,
  FaFileCircleCheck,
  FaShieldHalved,
  FaCircleCheck,
  FaCubes,
  FaTruckFast,
  FaBoxesStacked,
  FaIndustry,
  FaDiagramProject,
  FaRulerCombined,
];

const benefitIcons: IconType[] = [
  FaClipboardCheck,
  FaShieldHalved,
  FaRocket,
  FaVialCircleCheck,
  FaCircleCheck,
  FaScrewdriverWrench,
  FaIndustry,
  FaTruckFast,
];

const processItems = [
  {
    title: "Build Prototype",
    icon: FaCube,
  },
  {
    title: "Test Function",
    icon: FaVialCircleCheck,
  },
  {
    title: "Improve Design",
    icon: FaPenRuler,
  },
  {
    title: "Prepare Pilot Build",
    icon: FaTruckFast,
  },
];

const prototypeCards = [
  {
    title: "Rapid Prototyping for Faster Product Development",
    description:
      "Rapid prototyping helps businesses quickly create physical models of product ideas for review and testing. Clients can evaluate the product at an early stage and make necessary improvements before manufacturing.",
    icon: FaRocket,
  },
  {
    title: "3D Printing Prototype Development",
    description:
      "3D printing is effective for concept models, visual prototypes, fitment models, product housings, appliance parts, fixtures, small mechanisms, and early-stage product validation.",
    icon: FaCube,
  },
  {
    title: "CNC Prototype Machining",
    description:
      "CNC prototypes are useful when a product requires higher strength, precision, material accuracy, dimensional checking, surface finish review, and functional testing.",
    icon: FaGears,
  },
  {
    title: "Sheet Metal, Soft Tooling, and Pilot Build Support",
    description:
      "We support sheet metal prototypes, soft tooling, small batch prototype development, and pilot build preparation to help clients move from product validation toward production.",
    icon: FaIndustry,
  },
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-prototype-development"
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
                name: "Prototype Development Services",
                item: "https://www.asbconsulting.in/research&development/prototype-development-services",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-prototype-development"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/prototype-development-services#webpage",
            url: "https://www.asbconsulting.in/research&development/prototype-development-services",
            name: "Prototype Development Services in India",
            description:
              "AS Business Consulting provides professional prototype development services in India, including 3D printing, CNC machining, sheet metal prototyping, soft tooling, functional testing, and pilot build preparation.",
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

      <main className="overflow-hidden bg-[#fbf8fc] text-[#211827]">
        {/* Hero Section */}
        <section className="relative bg-[#502D52] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.16),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.12),transparent_32%),linear-gradient(135deg,#502D52_0%,#35193a_45%,#1f1024_100%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="relative max-w-7xl mx-auto px-5 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm tracking-[0.28em] uppercase text-[#f3d6f6] font-semibold mb-5">
                3D Printing • CNC Prototypes • Pilot Build Support
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Prototype Development Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                AS Business Consulting provides professional Prototype
                Development Services in India to help businesses, manufacturers,
                startups, product developers, and engineering teams convert
                product ideas and CAD designs into physical prototypes for
                testing, validation, and improvement.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Start Your Prototype <FaArrowRight />
                </Link>

                <Link
                  href="/our-services"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white/10 border border-white/20 p-5 md:p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-[#f7f0f8] p-5 md:p-6 text-[#502D52]">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaCube className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        3D Printed Prototypes
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaGears className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        CNC Prototype Machining
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaVialCircleCheck className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Build, Test, Improve, and Prepare for Production
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Validate form, fit, function, material behavior,
                      manufacturability, assembly logic, and pilot build
                      readiness before mass production.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">Prototype</p>
                <p className="text-sm text-gray-500">
                  Physical Product Validation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Strip */}
        <section className="relative -mt-10 z-10">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-[2rem] bg-white p-5 shadow-xl border border-[#eaddec]">
              {[
                "3D Printing",
                "CNC Prototypes",
                "Sheet Metal Samples",
                "Pilot Build Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-5 rounded-2xl bg-[#fbf8fc]"
                >
                  <FaCircleCheck className="mx-auto text-[#502D52] text-2xl mb-3" />
                  <p className="text-sm font-semibold text-[#2D2D2D]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-5 text-center">
            <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-4">
              Test Earlier. Improve Faster. Manufacture Smarter.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Professional Prototype Development Support for Product Testing and
              Validation
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              Prototype development is an important stage in the product design
              and engineering process. Before moving into mass production,
              businesses need to test whether a product looks right, fits
              correctly, functions properly, and can be manufactured efficiently.
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              A prototype helps identify design issues, improve usability, check
              dimensions, validate material choices, and reduce production risk
              before investing in tooling or large-scale manufacturing.
            </p>

            <p className="leading-relaxed text-gray-600">
              At AS Business Consulting, we help clients develop prototypes that
              support faster decision-making, better product testing, and a
              smoother transition from concept to production.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                Prototype Development Services in India
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                From CAD Design and Product Ideas to Physical Prototype Testing
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                AS Business Consulting supports prototype development through
                suitable processes such as 3D printing, CNC machining, sheet
                metal fabrication, and soft tooling depending on the product
                requirement, material, complexity, strength, surface finish, and
                testing purpose.
              </p>

              <p className="leading-relaxed text-gray-600">
                Our approach helps reduce development time, improve design
                accuracy, make iterations faster, and prepare products for pilot
                build or manufacturing.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#502D52] p-6 md:p-8 text-white shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                {processItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-white/10 border border-white/15 p-6"
                    >
                      <Icon className="text-4xl mb-5 text-[#f3d6f6]" />
                      <h3 className="font-bold">{item.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Prototype Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prototypeCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec] hover:-translate-y-1 transition"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#502D52] text-white flex items-center justify-center mb-6">
                    <Icon className="text-3xl" />
                  </div>

                  <h2 className="text-2xl font-bold mb-4 text-[#211827]">
                    {item.title}
                  </h2>

                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Services Include */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                Our Prototype Development Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Our Prototype Development Services Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {prototypeServices.map((service, index) => {
                const Icon = serviceIcons[index] || FaCircleCheck;

                return (
                  <div
                    key={index}
                    className="rounded-[1.5rem] bg-[#fbf8fc] border border-[#eaddec] p-6 hover:bg-[#502D52] hover:text-white transition group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#502D52] text-white flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-[#502D52] transition">
                      <Icon className="text-2xl" />
                    </div>

                    <h3 className="text-lg font-bold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/80 transition">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-[#fbf8fc]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                Key Benefits
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Key Benefits of Prototype Development Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((benefit, index) => {
                const Icon = benefitIcons[index] || FaCircleCheck;

                return (
                  <div
                    key={index}
                    className="rounded-[1.5rem] bg-white p-6 shadow-sm border border-[#eaddec]"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#f1e6f3] text-[#502D52] flex items-center justify-center mb-5">
                      <Icon className="text-2xl" />
                    </div>

                    <h3 className="text-lg font-bold mb-3 text-[#211827]">
                      {benefit.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                Industries
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827] mb-5">
                Industries We Support
              </h2>

              <p className="leading-relaxed text-gray-600">
                Our prototype development services are suitable for product
                development companies, manufacturers, startups, engineering
                teams, R&D teams, appliance manufacturers, HVAC companies,
                automotive component companies, and industrial product
                businesses.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-[#fbf8fc] border border-[#eaddec] p-4"
                >
                  <div className="w-9 h-9 rounded-full bg-[#502D52] text-white flex items-center justify-center shrink-0">
                    <FaCircleCheck className="text-sm" />
                  </div>

                  <h3 className="text-base font-semibold text-[#211827]">
                    {industry}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-[#502D52] text-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[#f3d6f6] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                  Why Choose Us
                </p>

                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Why Choose AS Business Consulting?
                </h2>

                <p className="leading-relaxed text-white/80 mb-4">
                  AS Business Consulting provides reliable prototype development
                  support with a strong focus on speed, accuracy, functionality,
                  and manufacturing readiness. We understand that a prototype is
                  not just a sample; it is an important testing stage that helps
                  improve the product before production.
                </p>

                <p className="leading-relaxed text-white/80">
                  Our team supports clients from CAD model preparation to
                  prototype development, testing, design improvement, and pilot
                  build preparation. Whether you need a 3D printed prototype,
                  CNC prototype, sheet metal sample, functional prototype, soft
                  tooling, or small-batch pilot build support, we can help you
                  move from concept to production with confidence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "3D Printing and CNC Support",
                  "Form, Fit, and Function Testing",
                  "Prototype-Ready CAD Files",
                  "Pilot Build Preparation",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/10 border border-white/15 p-6"
                  >
                    <FaCircleCheck className="text-[#f3d6f6] text-2xl mb-4" />
                    <h3 className="font-bold text-lg">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#fbf8fc]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#502D52] p-8 md:p-12 text-white shadow-xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_30%)]" />

              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-5xl font-bold mb-5">
                    Build, Test, Improve, and Move Toward Production
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If you have a product idea, CAD model, engineering design,
                    industrial component, appliance concept, or machine part
                    that needs physical validation, AS Business Consulting can
                    help you create a prototype for testing and improvement.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for Prototype Development Services in
                    India, including rapid prototyping, 3D printing, CNC
                    prototyping, sheet metal prototyping, soft tooling,
                    functional testing, and pilot build support.
                  </p>
                </div>

                <div className="lg:text-right">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-7 py-4 font-bold shadow-lg hover:shadow-xl transition"
                  >
                    Contact Us <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                Key Points
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Key Points of Prototype Development Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] bg-[#fbf8fc] border border-[#eaddec] p-6 flex gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-[#502D52] text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#211827] mb-2">
                      {point.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <ContactFrom />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
