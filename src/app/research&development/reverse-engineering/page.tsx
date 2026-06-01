import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaBoxesStacked,
  FaCircleCheck,
  FaCompassDrafting,
  FaCube,
  FaCubes,
  FaDiagramProject,
  FaFileLines,
  FaGears,
  FaIndustry,
  FaLayerGroup,
  FaLightbulb,
  FaPenRuler,
  FaRocket,
  FaShieldHalved,
  FaScrewdriverWrench,
  FaRulerCombined,
  FaTableList,
  FaArrowsRotate,
  FaWandMagicSparkles,
  FaObjectGroup,
  FaClipboardCheck,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Reverse Engineering Services in India | 3D Scanning & CAD Design",
  description:
    "AS Business provides reverse engineering services in India, including 3D scanning, CAD modeling, 2D drawings, legacy part redesign, product improvement, and documentation.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/research&development/reverse-engineering",
  },
};

const reverseServices = [
  {
    title: "Reverse Engineering of Existing Parts",
    description:
      "We study existing physical parts and convert them into accurate CAD models, drawings, and manufacturing-ready technical documentation.",
  },
  {
    title: "Legacy Part Recreation",
    description:
      "We help recreate old, discontinued, imported, or unavailable parts when original CAD files or engineering drawings are missing.",
  },
  {
    title: "3D Scanning Support",
    description:
      "For complex geometries, curved profiles, and detailed surfaces, 3D scanning support helps capture accurate part shape and dimensions.",
  },
  {
    title: "CAD Modeling from Physical Samples",
    description:
      "Physical components can be converted into accurate 3D CAD models for redesign, prototyping, machining, 3D printing, or future manufacturing.",
  },
  {
    title: "2D Drawings from Existing Components",
    description:
      "We prepare detailed 2D drawings with dimensions, tolerances, material notes, and manufacturing instructions for production use.",
  },
  {
    title: "Product Redesign and Improvement",
    description:
      "Existing parts can be improved for better strength, fitment, durability, manufacturing efficiency, cost reduction, or updated performance.",
  },
  {
    title: "Mechanical Reverse Engineering",
    description:
      "We provide reverse engineering support for mechanical parts, industrial assemblies, machine components, tools, fixtures, and equipment parts.",
  },
  {
    title: "Industrial Component Reverse Engineering",
    description:
      "We recreate and document industrial components used in machinery, fabrication, equipment, automotive, plastic, and sheet metal applications.",
  },
  {
    title: "Replacement Part Design",
    description:
      "Reverse engineering helps businesses create replacement parts for machines, equipment, vehicles, tools, fixtures, and industrial products.",
  },
  {
    title: "Part Measurement and Dimensional Study",
    description:
      "We study physical samples using accurate measurements, dimensional analysis, material understanding, and engineering review.",
  },
  {
    title: "CAD Model Development from Scan Data",
    description:
      "We help convert scan data or measured geometry into usable CAD models suitable for redesign, manufacturing, prototyping, and documentation.",
  },
  {
    title: "Manufacturing-Ready Engineering Drawings",
    description:
      "We prepare production-ready 2D drawings, tolerance details, material notes, assembly references, and technical specifications.",
  },
  {
    title: "Assembly Drawings and Part Documentation",
    description:
      "We prepare assembly drawings, component details, exploded views, part documentation, and references for manufacturing and maintenance.",
  },
  {
    title: "Material and Specification Documentation",
    description:
      "We document material details, specifications, manufacturing notes, finishing requirements, and technical references for production planning.",
  },
  {
    title: "Prototype-Ready CAD Files",
    description:
      "Reverse engineered CAD files can be used for prototype development, functional testing, CNC machining, 3D printing, and design validation.",
  },
  {
    title: "Product Modernization and Design Updates",
    description:
      "We help modernize old components by updating dimensions, improving fitment, strengthening weak areas, and preparing improved CAD files.",
  },
  {
    title: "Imported Part Localization Support",
    description:
      "Companies can reduce dependency on imported components by recreating parts locally with accurate CAD and manufacturing data.",
  },
  {
    title: "File Conversion and CAD Data Creation",
    description:
      "We create usable CAD data, convert files, update old drawings, and prepare technical documents for replacement or production needs.",
  },
];

const benefits = [
  {
    title: "Recreate Parts Without Original Drawings",
    description:
      "Reverse engineering helps recreate parts when original drawings, CAD files, or technical documents are unavailable.",
  },
  {
    title: "Reduce Dependency on Old Suppliers",
    description:
      "Businesses can develop replacement parts locally and reduce dependency on discontinued, imported, or difficult-to-source components.",
  },
  {
    title: "Improve Existing Product Designs",
    description:
      "Existing components can be redesigned to improve strength, fitment, durability, manufacturability, or overall performance.",
  },
  {
    title: "Support Spare Part Development",
    description:
      "Reverse engineering is useful for developing spare parts for old machines, industrial equipment, automotive components, and legacy systems.",
  },
  {
    title: "Create Accurate CAD Documentation",
    description:
      "Physical parts can be converted into accurate 3D CAD models, 2D drawings, and technical documentation for future manufacturing.",
  },
  {
    title: "Faster Product Restoration",
    description:
      "Damaged, worn-out, or unavailable components can be recreated quickly for repair, maintenance, or production continuity.",
  },
  {
    title: "Better Manufacturing Planning",
    description:
      "Updated CAD files and engineering drawings help vendors and production teams manufacture parts with better clarity and accuracy.",
  },
  {
    title: "Cost-Effective Product Development",
    description:
      "Reverse engineering helps businesses avoid complete redesign from scratch and reduces the time and cost required for replacement or improvement.",
  },
];

const industries = [
  "Manufacturing companies",
  "Industrial equipment companies",
  "Automotive component manufacturers",
  "Machine spare part suppliers",
  "Fabrication units",
  "Plastic component manufacturers",
  "Sheet metal part manufacturers",
  "Tool and fixture manufacturers",
  "Product development companies",
  "Engineering consultancies",
  "Maintenance and repair teams",
  "Import substitution and localization projects",
  "Startups improving existing products",
];

const keyPoints = [
  {
    title: "Legacy Part Recreation",
    description:
      "We help recreate old, discontinued, imported, or unavailable parts when original CAD files or engineering drawings are missing.",
  },
  {
    title: "CAD Modeling from Physical Samples",
    description:
      "Physical components can be converted into accurate 3D CAD models for redesign, prototyping, machining, 3D printing, or future manufacturing.",
  },
  {
    title: "3D Scanning Support",
    description:
      "For complex geometries, curves, and detailed surfaces, 3D scanning support helps capture accurate part shape and dimensions.",
  },
  {
    title: "2D Manufacturing Drawings",
    description:
      "We prepare detailed 2D drawings with dimensions, tolerances, material notes, and manufacturing instructions for production use.",
  },
  {
    title: "Product Redesign and Improvement",
    description:
      "Existing parts can be improved for better strength, fitment, durability, manufacturing efficiency, cost reduction, or updated performance.",
  },
  {
    title: "Replacement Part Development",
    description:
      "Reverse engineering helps businesses create replacement parts for machines, equipment, vehicles, tools, fixtures, and industrial products.",
  },
  {
    title: "Manufacturing-Ready Documentation",
    description:
      "We provide CAD files, technical drawings, specifications, and documentation that can be shared with vendors and manufacturing teams.",
  },
  {
    title: "Import Substitution Support",
    description:
      "Companies can reduce dependency on imported components by recreating parts locally with accurate CAD and manufacturing data.",
  },
  {
    title: "Prototype and Testing Support",
    description:
      "Reverse engineered CAD files can be used for prototype development, functional testing, CNC machining, 3D printing, and design validation.",
  },
  {
    title: "Cost and Time Saving",
    description:
      "Reverse engineering reduces the need to design from scratch and helps speed up replacement, redesign, and production planning.",
  },
];

const serviceIcons: IconType[] = [
  FaArrowsRotate,
  FaObjectGroup,
  FaCube,
  FaCompassDrafting,
  FaFileLines,
  FaWandMagicSparkles,
  FaGears,
  FaIndustry,
  FaScrewdriverWrench,
  FaRulerCombined,
  FaLayerGroup,
  FaClipboardCheck,
  FaDiagramProject,
  FaTableList,
  FaRocket,
  FaPenRuler,
  FaBoxesStacked,
  FaCubes,
];

const benefitIcons: IconType[] = [
  FaFileLines,
  FaBoxesStacked,
  FaWandMagicSparkles,
  FaScrewdriverWrench,
  FaCompassDrafting,
  FaRocket,
  FaIndustry,
  FaShieldHalved,
];

const processItems = [
  {
    title: "Physical Sample",
    icon: FaObjectGroup,
  },
  {
    title: "3D Scan / Measure",
    icon: FaRulerCombined,
  },
  {
    title: "CAD Modeling",
    icon: FaCube,
  },
  {
    title: "Production Files",
    icon: FaFileLines,
  },
];

const reverseCards = [
  {
    title: "Recreate Legacy Parts with Accuracy",
    description:
      "Many industries depend on old machines, imported components, discontinued spare parts, or legacy products that no longer have proper drawings or CAD files. AS Business helps recreate legacy parts using accurate measurements, dimensional study, material understanding, and CAD modeling.",
    icon: FaObjectGroup,
  },
  {
    title: "3D Scanning and CAD Reverse Engineering",
    description:
      "For complex surfaces, curved profiles, worn parts, or intricate geometries, 3D scanning can help capture the shape and dimensions of the physical component. Our CAD reverse engineering services help convert scan data, physical samples, or measured components into accurate 3D models.",
    icon: FaCube,
  },
  {
    title: "Product Redesign and Improvement",
    description:
      "Reverse engineering is not only about copying an existing part. It can also be used to improve product performance, reduce weight, simplify manufacturing, correct design issues, improve assembly, and modernize old components.",
    icon: FaWandMagicSparkles,
  },
  {
    title: "Manufacturing-Ready Drawings and Documentation",
    description:
      "After reverse engineering, accurate documentation is essential for manufacturing. We prepare production-ready 2D drawings, GD&T details where required, material notes, tolerance details, assembly references, BOMs, and technical specifications.",
    icon: FaFileLines,
  },
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-reverse-engineering-services"
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
                name: "Reverse Engineering Services",
                item: "https://www.asbconsulting.in/research&development/reverse-engineering-services",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-reverse-engineering-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/reverse-engineering-services#webpage",
            url: "https://www.asbconsulting.in/research&development/reverse-engineering-services",
            name: "Reverse Engineering Services in India",
            description:
              "AS Business provides professional Reverse Engineering Services in India to help manufacturers, engineering companies, product developers, and industrial businesses recreate, improve, or document existing parts and products.",
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
                Reverse Engineering • 3D Scanning • CAD Design
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Reverse Engineering Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                AS Business provides professional Reverse Engineering Services
                in India to help manufacturers, engineering companies, product
                developers, and industrial businesses recreate, improve, or
                document existing parts and products.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Recreate Your Part <FaArrowRight />
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
                      <FaObjectGroup className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        Legacy Part Recreation
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaCube className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        CAD Reverse Engineering
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaArrowsRotate className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Recreate, Redesign, Improve
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Convert physical components, legacy parts, damaged
                      samples, or old products into accurate CAD models,
                      drawings, and manufacturing-ready files.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">CAD</p>
                <p className="text-sm text-gray-500">
                  From Existing Part to Digital Design
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
                "Legacy Part Recreation",
                "3D Scanning Support",
                "CAD Modeling",
                "Manufacturing Documentation",
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
              Recreate Parts. Improve Designs. Build Accurate CAD Data.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Reverse Engineering for Replacement, Redesign, and Manufacturing
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              Our reverse engineering process helps convert physical components,
              legacy parts, damaged samples, or old products into accurate CAD
              models, 2D drawings, technical specifications, and
              manufacturing-ready documentation.
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              Reverse engineering is useful when original drawings are missing,
              old CAD files are unavailable, replacement parts are difficult to
              source, or an existing product needs improvement. By using precise
              measurements, 3D scanning support, CAD modeling, and engineering
              documentation, we help businesses rebuild accurate digital
              versions of existing components.
            </p>

            <p className="leading-relaxed text-gray-600">
              Our approach focuses on accuracy, functionality,
              manufacturability, and long-term usability so that the recreated
              part can perform effectively in real-world conditions.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                Reverse Engineering Services in India
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                Convert Existing Parts into Accurate Digital Designs and
                Manufacturing Files
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                AS Business provides professional reverse engineering services
                in India to help businesses recreate, redesign, and improve
                existing parts, legacy components, and physical samples. Using
                precise measurements, 3D scanning support, CAD modeling, and
                engineering documentation, we convert existing products into
                accurate digital designs and manufacturing-ready files.
              </p>

              <p className="leading-relaxed text-gray-600">
                Our reverse engineering services are useful when original
                drawings are missing, CAD files are unavailable, spare parts are
                discontinued, or an existing product needs improvement. We help
                generate updated CAD models, 2D drawings, technical
                specifications, and production-ready documentation for
                replacement, redesign, prototyping, and manufacturing.
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

        {/* Reverse Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reverseCards.map((item, index) => {
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
                Our Reverse Engineering Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Our Reverse Engineering Services Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {reverseServices.map((service, index) => {
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
                Key Benefits of Reverse Engineering Services
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
                Our reverse engineering services are suitable for manufacturers,
                industrial businesses, automotive component companies,
                fabrication units, spare part suppliers, maintenance teams, and
                product development companies.
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
                  Why Choose AS Business?
                </h2>

                <p className="leading-relaxed text-white/80 mb-4">
                  AS Business provides reliable reverse engineering support
                  with a strong focus on accuracy, usability, and manufacturing
                  readiness. We understand that reverse engineered parts must
                  not only match the original sample but also perform properly
                  after manufacturing.
                </p>

                <p className="leading-relaxed text-white/80">
                  Our team works carefully on measurements, CAD modeling,
                  drawings, tolerances, material details, and design
                  improvements to ensure that the final output is practical and
                  production-ready. Whether you need to recreate a legacy part,
                  improve an existing product, generate CAD files from samples,
                  or prepare manufacturing documentation, AS Business can
                  support your complete reverse engineering requirement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Accurate Measurements",
                  "CAD Modeling Expertise",
                  "Manufacturing-Ready Output",
                  "Improved Part Usability",
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
                    Recreate, Redesign, and Improve Your Existing Parts
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If you have an old component, damaged part, imported sample,
                    discontinued spare, or existing product that needs redesign,
                    AS Business can help you convert it into accurate CAD
                    models, drawings, and manufacturing-ready specifications.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for Reverse Engineering Services in India,
                    including 3D scanning support, CAD reverse engineering,
                    legacy part recreation, product redesign, replacement part
                    development, and manufacturing-ready documentation.
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
                Key Points of Reverse Engineering Services
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