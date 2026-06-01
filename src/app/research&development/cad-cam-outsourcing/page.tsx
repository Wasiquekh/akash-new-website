import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaBoxesStacked,
  FaCircleCheck,
  FaClipboardCheck,
  FaCompassDrafting,
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
  FaTableList,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "CAD/CAM Outsourcing Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides CAD/CAM outsourcing services in India, including 3D CAD modeling, CAM programming, toolpath creation, drafting, and manufacturing support.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/research&development/cad-cam-outsourcing",
  },
};

const outsourcingServices = [
  {
    title: "CAD Outsourcing Services",
    description:
      "We provide reliable CAD outsourcing support for companies that need accurate design, modeling, drafting, and documentation without maintaining a full in-house engineering team.",
  },
  {
    title: "CAM Outsourcing Services",
    description:
      "Our CAM outsourcing services support machining preparation, CNC programming, toolpath creation, process planning, and production-ready manufacturing support.",
  },
  {
    title: "3D CAD Modeling",
    description:
      "We create accurate 3D CAD models for parts, products, assemblies, tools, fixtures, industrial components, and mechanical systems.",
  },
  {
    title: "2D CAD Drafting",
    description:
      "Our team prepares detailed 2D drawings with dimensions, tolerances, material notes, views, sections, and manufacturing instructions.",
  },
  {
    title: "Mechanical CAD Design",
    description:
      "We support mechanical CAD design for components, products, fixtures, assemblies, equipment parts, and manufacturing-ready engineering requirements.",
  },
  {
    title: "Product Design Support",
    description:
      "We help product developers and manufacturers with CAD modeling, design modification, documentation, prototype preparation, and manufacturing handoff.",
  },
  {
    title: "Manufacturing Drawing Preparation",
    description:
      "We prepare production drawings that help vendors, machine operators, fabrication teams, and quality teams manufacture parts accurately.",
  },
  {
    title: "Assembly Drawings and Exploded Views",
    description:
      "We create assembly drawings and exploded views that clearly explain component fitment, product structure, assembly sequence, and part relationships.",
  },
  {
    title: "BOM Preparation",
    description:
      "We prepare structured Bill of Materials with part names, quantities, materials, specifications, references, and manufacturing information.",
  },
  {
    title: "GD&T-Based Drawings",
    description:
      "We prepare GD&T-based drawings to define form, fit, orientation, position, and tolerance requirements for accurate manufacturing and inspection.",
  },
  {
    title: "CAD File Conversion",
    description:
      "We convert CAD files into usable formats for manufacturing, sharing, documentation, prototyping, machining, and design updates.",
  },
  {
    title: "CAD Data Migration",
    description:
      "We help migrate CAD data from old formats, legacy systems, or outdated drawings into updated, usable, and production-ready files.",
  },
  {
    title: "Reverse Engineering CAD Support",
    description:
      "We support reverse engineering requirements by converting physical samples, scan data, or existing components into accurate CAD models and drawings.",
  },
  {
    title: "CAM Programming Support",
    description:
      "We provide CAM programming support for CNC machining, machining strategy preparation, tool selection, cutting paths, and manufacturing planning.",
  },
  {
    title: "CNC Toolpath Creation",
    description:
      "Our CAM support helps generate manufacturable toolpaths that guide CNC machines for accurate cutting, machining, and part production.",
  },
  {
    title: "Toolpath Optimization",
    description:
      "We help optimize toolpaths to improve machining accuracy, reduce cycle time, minimize material waste, and support smoother production.",
  },
  {
    title: "Prototype Design Support",
    description:
      "We provide prototype-ready CAD files, drawings, and documentation for 3D printing, CNC machining, sheet metal fabrication, and pilot production.",
  },
  {
    title: "Sheet Metal Design Documentation",
    description:
      "We prepare sheet metal drawings with bend details, flat patterns, material thickness, cutouts, holes, and fabrication notes.",
  },
  {
    title: "Machining Drawings",
    description:
      "We create machining drawings with precise dimensions, tolerances, surface finish notes, hole/thread details, and inspection references.",
  },
  {
    title: "Industrial Component Design",
    description:
      "We support industrial component design for machine parts, equipment components, manufacturing tools, fixtures, and production assemblies.",
  },
  {
    title: "Product Redesign and Modification",
    description:
      "We help improve or modify existing product designs for better strength, fitment, manufacturability, performance, and production efficiency.",
  },
  {
    title: "Design Documentation for Manufacturing Handoff",
    description:
      "We prepare complete documentation that helps production teams move smoothly from design approval to manufacturing execution.",
  },
];

const benefits = [
  {
    title: "Reduce In-House Engineering Cost",
    description:
      "CAD/CAM outsourcing helps companies reduce the cost of hiring, training, software licenses, and infrastructure. Businesses can get expert engineering support only when required.",
  },
  {
    title: "Access Skilled CAD/CAM Engineers",
    description:
      "AS Business Consulting gives clients access to experienced engineers who understand CAD modeling, drafting, CAM programming, manufacturing drawings, and production requirements.",
  },
  {
    title: "Faster Project Completion",
    description:
      "Outsourcing helps complete design, drafting, and manufacturing preparation tasks faster, especially when internal teams are busy or project deadlines are tight.",
  },
  {
    title: "Accurate and Manufacturing-Ready Outputs",
    description:
      "Our CAD/CAM work is prepared with attention to dimensions, tolerances, materials, assembly, tooling, machining, and manufacturing feasibility.",
  },
  {
    title: "Flexible Support for Small and Large Projects",
    description:
      "We support one-time CAD tasks, urgent drawing work, ongoing engineering outsourcing, product development projects, and long-term manufacturing support.",
  },
  {
    title: "Better Design-to-Manufacturing Handoff",
    description:
      "With accurate CAD files, CAM outputs, drawings, BOMs, and documentation, production teams can move from design to manufacturing more smoothly.",
  },
  {
    title: "Improve Productivity of Internal Teams",
    description:
      "By outsourcing repetitive or time-consuming CAD/CAM work, your internal team can focus on core engineering decisions, production planning, quality control, and business growth.",
  },
  {
    title: "Support for Multiple Manufacturing Processes",
    description:
      "Our CAD/CAM outsourcing services support CNC machining, sheet metal fabrication, 3D printing, prototyping, mold development, fabrication, and industrial manufacturing.",
  },
];

const industries = [
  "Manufacturing companies",
  "CNC machining units",
  "Tool rooms and mold makers",
  "Product development companies",
  "Industrial equipment manufacturers",
  "Automotive component manufacturers",
  "Machine part manufacturers",
  "Sheet metal fabrication units",
  "Plastic component manufacturers",
  "Engineering consultancies",
  "Startups developing new products",
  "Prototype development teams",
  "Furniture and fixture manufacturers",
  "CAD/CAM service providers needing extra support",
];

const keyPoints = [
  {
    title: "On-Demand Engineering Support",
    description:
      "CAD/CAM outsourcing gives businesses access to expert engineers whenever required. This helps companies manage urgent projects, extra workload, and technical tasks without hiring a full-time internal team.",
  },
  {
    title: "3D CAD Modeling",
    description:
      "We create accurate 3D CAD models for parts, products, assemblies, tools, fixtures, industrial components, and mechanical systems. These models can be used for visualization, prototyping, manufacturing, and design validation.",
  },
  {
    title: "2D CAD Drafting",
    description:
      "Our team prepares detailed 2D drawings with dimensions, tolerances, material notes, views, sections, and manufacturing instructions for production and vendor communication.",
  },
  {
    title: "CAM Programming Support",
    description:
      "We provide CAM programming support for manufacturing preparation, CNC machining, toolpath creation, and machining strategy development.",
  },
  {
    title: "CNC Toolpath Creation",
    description:
      "Our CAM support helps generate manufacturable toolpaths that guide CNC machines for accurate cutting, machining, and part production.",
  },
  {
    title: "CAD/CAM Software Expertise",
    description:
      "We support CAD/CAM work using tools such as PTC Creo/Pro-Engineer®, SolidWorks, AutoCAD, and other industry-standard engineering platforms.",
  },
  {
    title: "Manufacturing-Ready Outputs",
    description:
      "Our CAD/CAM files are prepared with production feasibility in mind, including dimensions, tolerances, materials, tooling, machining, and assembly requirements.",
  },
  {
    title: "Cost-Effective Outsourcing",
    description:
      "Businesses can reduce software, hiring, training, and infrastructure costs by outsourcing CAD/CAM requirements to a reliable engineering partner.",
  },
  {
    title: "Faster Turnaround Time",
    description:
      "Outsourcing helps complete design, drafting, and manufacturing preparation tasks faster, especially during peak workload or urgent project deadlines.",
  },
  {
    title: "Flexible Project Support",
    description:
      "We support small CAD tasks, large product development projects, reverse engineering work, prototype preparation, drafting, CAM programming, and long-term outsourcing requirements.",
  },
  {
    title: "Better Design-to-Production Handoff",
    description:
      "Accurate CAD models, manufacturing drawings, BOMs, and CAM outputs help production teams move smoothly from design approval to manufacturing execution.",
  },
  {
    title: "Suitable for Multiple Industries",
    description:
      "Our CAD/CAM outsourcing services support manufacturing, automotive, industrial equipment, sheet metal, plastic components, CNC machining, tooling, prototyping, and product development companies.",
  },
];

const serviceIcons: IconType[] = [
  FaCompassDrafting,
  FaGears,
  FaCube,
  FaFileLines,
  FaPenRuler,
  FaLightbulb,
  FaFileCircleCheck,
  FaDiagramProject,
  FaTableList,
  FaRulerCombined,
  FaCubes,
  FaLayerGroup,
  FaWandMagicSparkles,
  FaScrewdriverWrench,
  FaGears,
  FaRocket,
  FaCube,
  FaBoxesStacked,
  FaCompassDrafting,
  FaIndustry,
  FaWandMagicSparkles,
  FaClipboardCheck,
];

const benefitIcons: IconType[] = [
  FaShieldHalved,
  FaGears,
  FaRocket,
  FaFileCircleCheck,
  FaLayerGroup,
  FaDiagramProject,
  FaBoxesStacked,
  FaIndustry,
];

const processItems = [
  {
    title: "CAD Modeling",
    icon: FaCube,
  },
  {
    title: "2D Drafting",
    icon: FaCompassDrafting,
  },
  {
    title: "CAM Programming",
    icon: FaGears,
  },
  {
    title: "CNC Toolpaths",
    icon: FaScrewdriverWrench,
  },
];

const outsourcingCards = [
  {
    title: "On-Demand CAD/CAM Support for Engineering and Manufacturing",
    description:
      "CAD/CAM outsourcing allows companies to complete design and manufacturing preparation tasks faster without increasing internal workload. Whether you need product design support, 3D modeling, drafting, CAM programming, toolpath generation, reverse engineering documentation, or manufacturing drawings, AS Business Consulting provides reliable on-demand engineering assistance.",
    icon: FaLayerGroup,
  },
  {
    title: "3D CAD Modeling and Design Outsourcing",
    description:
      "AS Business Consulting provides accurate 3D CAD modeling services for parts, assemblies, product concepts, industrial components, machine parts, tools, fixtures, plastic components, sheet metal products, and mechanical systems. Our CAD models are created with proper attention to dimensions, design intent, manufacturing process, material behavior, and assembly requirements.",
    icon: FaCube,
  },
  {
    title: "CAM Programming and CNC Toolpath Support",
    description:
      "CAM plays an important role in converting product designs into manufacturable parts. Our CAM outsourcing services support CNC machining, toolpath generation, machining strategy preparation, and manufacturing process planning.",
    icon: FaGears,
  },
  {
    title: "CAD Drafting and Manufacturing Documentation",
    description:
      "Along with 3D modeling and CAM programming, we also provide complete CAD drafting and documentation support. Our team prepares 2D manufacturing drawings, assembly drawings, exploded views, BOMs, GD&T-based drawings, tolerance details, sheet metal drawings, machining drawings, and technical documentation.",
    icon: FaFileLines,
  },
];

const softwareTools = [
  "PTC Creo / Pro-Engineer®",
  "SolidWorks",
  "AutoCAD",
  "CAD/CAM platforms for manufacturing support",
  "2D and 3D engineering design tools",
  "File conversion and data migration tools",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-cad-cam-outsourcing-services"
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
                name: "CAD/CAM Outsourcing Services",
                item: "https://www.asbconsulting.in/research&development/cad-cam-outsourcing-services",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-cad-cam-outsourcing-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/cad-cam-outsourcing-services#webpage",
            url: "https://www.asbconsulting.in/research&development/cad-cam-outsourcing-services",
            name: "CAD/CAM Outsourcing Services in India",
            description:
              "AS Business Consulting provides professional CAD/CAM Outsourcing Services in India for manufacturers, engineering companies, product developers, fabrication units, startups, and industrial businesses that need accurate design and manufacturing support without maintaining a full in-house engineering team.",
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
                CAD Outsourcing • CAM Programming • CNC Toolpaths
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                CAD/CAM Outsourcing Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                AS Business Consulting provides professional CAD/CAM
                Outsourcing Services in India for manufacturers, engineering
                companies, product developers, fabrication units, startups, and
                industrial businesses that need accurate design and
                manufacturing support without maintaining a full in-house
                engineering team.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Get CAD/CAM Support <FaArrowRight />
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
                        3D CAD Modeling
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaGears className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        CAM Programming
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaScrewdriverWrench className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Design to Manufacturing Support
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Create precise 3D models, 2D drawings, CAM programs, CNC
                      toolpaths, BOMs, and production-ready documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">CAD/CAM</p>
                <p className="text-sm text-gray-500">
                  Flexible Engineering Outsourcing
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
                "3D CAD Modeling",
                "2D Drafting",
                "CAM Programming",
                "CNC Toolpath Creation",
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
              Flexible CAD/CAM Support Without Full-Time Hiring
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Accurate Design and Manufacturing Support for Faster Project
              Execution
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              Our CAD/CAM outsourcing services help companies create precise 3D
              models, 2D drawings, manufacturing documentation, CAM programming,
              CNC toolpaths, and production-ready design files.
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              In today’s competitive manufacturing environment, businesses need
              faster design execution, lower development costs, and reliable
              technical support. CAD/CAM outsourcing helps companies access
              skilled engineers, advanced design tools, and manufacturing
              knowledge on demand.
            </p>

            <p className="leading-relaxed text-gray-600">
              We support CAD and CAM work using advanced engineering tools such
              as PTC Creo/Pro-Engineer®, SolidWorks, AutoCAD, and other
              industry-standard platforms to deliver accurate, manufacturable,
              and production-ready outputs.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                CAD/CAM Outsourcing Services in India
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                On-Demand Engineering Support for Design, Drafting, CAM, and
                Manufacturing Handoff
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                AS Business Consulting provides professional CAD/CAM outsourcing
                services in India for businesses that need expert engineering
                support without maintaining a full in-house design team. We
                offer 3D CAD modeling, 2D drafting, CAM programming, CNC
                toolpath creation, manufacturing drawings, file conversion, and
                product design documentation.
              </p>

              <p className="leading-relaxed text-gray-600">
                Our CAD/CAM outsourcing services help manufacturers, startups,
                engineering companies, and product developers reduce costs,
                speed up project execution, and access skilled engineers using
                advanced tools such as PTC Creo/Pro-Engineer®, SolidWorks,
                AutoCAD, and other CAD/CAM platforms.
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

        {/* Outsourcing Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {outsourcingCards.map((item, index) => {
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

        {/* Software Tools */}
        <section className="py-20 bg-[#fbf8fc]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                Engineering Tools
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827] mb-5">
                CAD/CAM Software and Engineering Tools
              </h2>

              <p className="leading-relaxed text-gray-600">
                AS Business Consulting works with industry-standard CAD/CAM
                tools to provide accurate and reliable engineering outputs. Our
                focus is not only on using software but also on creating
                technically correct, manufacturable, and practical outputs.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareTools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-white border border-[#eaddec] p-5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#502D52] text-white flex items-center justify-center shrink-0">
                    <FaCircleCheck className="text-sm" />
                  </div>

                  <h3 className="text-base font-semibold text-[#211827]">
                    {tool}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Include */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                Our CAD/CAM Outsourcing Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Our CAD/CAM Outsourcing Services Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {outsourcingServices.map((service, index) => {
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
                Key Benefits of CAD/CAM Outsourcing Services
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
                Our CAD/CAM outsourcing services are suitable for manufacturers,
                CNC machining units, tool rooms, mold makers, product
                development companies, startups, and engineering consultancies.
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
                  AS Business Consulting provides reliable CAD/CAM outsourcing
                  support with a strong focus on accuracy, speed,
                  cost-effectiveness, and manufacturing readiness. We understand
                  that CAD/CAM work must not only look correct on screen but
                  also support real production, machining, assembly, and
                  documentation requirements.
                </p>

                <p className="leading-relaxed text-white/80">
                  Our team combines engineering knowledge, CAD/CAM software
                  expertise, and manufacturing understanding to deliver outputs
                  that help businesses reduce errors, save time, and improve
                  production efficiency. Whether you need 3D CAD modeling, CAM
                  programming, toolpath creation, drafting, reverse engineering
                  support, or complete product documentation, AS Business
                  Consulting can support your requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Skilled CAD/CAM Engineers",
                  "Manufacturing-Ready Output",
                  "Flexible Project Support",
                  "Cost-Effective Execution",
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
                    Get Reliable CAD/CAM Outsourcing Support
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If your business needs expert CAD/CAM support without the
                    overhead of hiring an in-house team, AS Business Consulting
                    can help. We provide flexible outsourcing services for
                    product design, CAD modeling, CAM programming, CNC
                    toolpaths, drafting, documentation, and
                    manufacturing-ready outputs.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for CAD/CAM Outsourcing Services in India
                    and get accurate, cost-effective, and production-ready
                    engineering support for your next project.
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
                Key Points of CAD/CAM Outsourcing Services
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