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
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "CAD File Conversion & Data Migration Services in India | AS Business",
  description:
    "AS Business provides CAD file conversion & data migration services in India, including STEP, IGES, STL, DWG, DXF, native CAD files, 2D to 3D conversion, and CAD data cleanup.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/research&development/file-conversion-data-migration",
  },
};

const conversionServices = [
  {
    title: "CAD File Conversion Services",
    description:
      "We convert 2D and 3D CAD files into usable engineering, manufacturing, prototyping, documentation, and vendor-ready formats.",
  },
  {
    title: "2D to 3D CAD Conversion",
    description:
      "We convert 2D drawings, sketches, scanned layouts, and technical files into accurate 3D CAD models for visualization, prototyping, redesign, and manufacturing.",
  },
  {
    title: "3D CAD Model Conversion",
    description:
      "We convert 3D models into required neutral or native CAD formats for design review, simulation, rendering, CNC machining, 3D printing, and vendor communication.",
  },
  {
    title: "DWG to DXF Conversion",
    description:
      "We prepare DWG and DXF files for drafting, CNC cutting, laser cutting, sheet metal work, fabrication, and technical documentation.",
  },
  {
    title: "STEP File Conversion",
    description:
      "We prepare STEP files for reliable 3D CAD data exchange across different engineering software, vendors, and manufacturing workflows.",
  },
  {
    title: "IGES File Conversion",
    description:
      "We support IGES conversion for surface and geometry exchange between CAD platforms while maintaining scale, structure, and design intent.",
  },
  {
    title: "STL File Conversion",
    description:
      "We prepare STL files for 3D printing, rapid prototyping, model sharing, concept validation, and prototype development workflows.",
  },
  {
    title: "PDF to CAD Conversion",
    description:
      "We convert PDF drawings and technical documents into editable CAD files for future modification, engineering updates, and production use.",
  },
  {
    title: "Scanned Drawing to CAD Conversion",
    description:
      "We digitize scanned drawings, paper layouts, and old technical documents into clean CAD files with correct dimensions, layers, and geometry.",
  },
  {
    title: "Native CAD File Conversion",
    description:
      "We help convert and prepare native CAD files where editable design history, assemblies, features, and detailed CAD workflows are required.",
  },
  {
    title: "CAD Data Migration",
    description:
      "We help businesses migrate old CAD files and legacy design data into modern, organized, editable, and reusable engineering formats.",
  },
  {
    title: "Legacy CAD Data Modernization",
    description:
      "We modernize outdated design files, old drawings, and legacy CAD data for better accessibility, editing, storage, and future product development.",
  },
  {
    title: "CAD File Cleanup and Repair",
    description:
      "We clean and repair CAD files by addressing broken geometry, duplicate lines, scale issues, missing surfaces, layer errors, and unusable file structures.",
  },
  {
    title: "Geometry Validation and Correction",
    description:
      "We check converted files for geometry issues, missing surfaces, broken edges, distorted curves, wrong scale, and compatibility concerns.",
  },
  {
    title: "Layer Cleanup and Drawing Standardization",
    description:
      "We organize layers, line types, drawing structure, annotations, dimensions, and CAD standards to make files cleaner and easier to reuse.",
  },
  {
    title: "Artwork to CAD Conversion",
    description:
      "We convert artwork, logos, patterns, decorative layouts, and design files into CAD-ready formats for cutting, engraving, printing, and manufacturing.",
  },
  {
    title: "Manufacturing File Conversion",
    description:
      "We prepare files for CNC machining, laser cutting, sheet metal fabrication, mold development, 3D printing, vendor handoff, and production documentation.",
  },
  {
    title: "3D Printing File Preparation",
    description:
      "We prepare and validate STL and other 3D printing files so models are suitable for rapid prototyping and physical sample development.",
  },
  {
    title: "CNC and Laser Cutting File Preparation",
    description:
      "We prepare accurate CAD files for CNC cutting, laser cutting, engraving, sheet cutting, nesting, and fabrication workflows.",
  },
  {
    title: "Vendor-Ready CAD File Preparation",
    description:
      "We prepare clean, accurate, and properly formatted CAD files for vendors, production teams, machining partners, and fabrication suppliers.",
  },
];

const benefits = [
  {
    title: "Better File Compatibility",
    description:
      "Our conversion services help make CAD files usable across different software, vendors, machines, and manufacturing workflows.",
  },
  {
    title: "Preserved Design Intent",
    description:
      "We focus on maintaining correct dimensions, geometry, scale, layers, surfaces, and product details during file conversion.",
  },
  {
    title: "Improved Manufacturing Readiness",
    description:
      "Converted files can be prepared for CNC machining, 3D printing, laser cutting, sheet metal fabrication, mold development, and vendor communication.",
  },
  {
    title: "Modernized Legacy Data",
    description:
      "Old drawings, outdated CAD files, paper documents, and scanned data can be converted into updated digital formats for future use.",
  },
  {
    title: "Reduced Design Rework",
    description:
      "Accurate conversion reduces the need to recreate files manually and helps save engineering time during design and production preparation.",
  },
  {
    title: "Clean and Editable CAD Files",
    description:
      "We help convert and clean files so that they are easier to edit, modify, document, standardize, and reuse for future projects.",
  },
  {
    title: "Support for Multiple CAD Formats",
    description:
      "We support common CAD and manufacturing formats such as STEP, IGES, STL, DWG, DXF, PDF, and native CAD files.",
  },
  {
    title: "Smooth Design-to-Manufacturing Workflow",
    description:
      "Properly converted files help teams move from design review to prototyping, machining, fabrication, and production more efficiently.",
  },
];

const industries = [
  "Manufacturing companies",
  "Engineering design firms",
  "Product development companies",
  "CAD/CAM outsourcing teams",
  "Industrial equipment manufacturers",
  "Automotive component companies",
  "Sheet metal fabrication units",
  "CNC machining workshops",
  "Laser cutting and engraving businesses",
  "3D printing service providers",
  "Architecture and interior design teams",
  "Furniture and fixture manufacturers",
  "Packaging and product branding teams",
  "Reverse engineering projects",
  "Legacy product documentation teams",
];

const keyPoints = [
  {
    title: "2D to 3D CAD Conversion",
    description:
      "We convert 2D drawings, sketches, scanned layouts, and technical files into accurate 3D CAD models that can be used for visualization, prototyping, redesign, and manufacturing.",
  },
  {
    title: "3D CAD Format Conversion",
    description:
      "We convert 3D models into required formats such as STEP, IGES, STL, Parasolid, OBJ, and native CAD formats for different CAD/CAM software and manufacturing processes.",
  },
  {
    title: "DWG and DXF Conversion",
    description:
      "We support DWG and DXF file conversion for drafting, laser cutting, CNC cutting, sheet metal design, fabrication, and technical documentation.",
  },
  {
    title: "STEP, IGES, and STL File Preparation",
    description:
      "We prepare STEP and IGES files for CAD data exchange and STL files for 3D printing, rapid prototyping, and model sharing.",
  },
  {
    title: "CAD Data Migration",
    description:
      "We help businesses migrate old CAD files, legacy drawings, and outdated design data into modern, editable, and usable CAD formats.",
  },
  {
    title: "Scanned Drawing and Paper Drawing Digitization",
    description:
      "Old paper drawings and scanned documents can be converted into clean digital CAD files for future editing, documentation, and manufacturing.",
  },
  {
    title: "Artwork to CAD Conversion",
    description:
      "We convert artwork, logos, patterns, and design layouts into CAD-ready formats for cutting, engraving, printing, product decoration, and manufacturing use.",
  },
  {
    title: "CAD File Cleanup and Repair",
    description:
      "We help clean and correct CAD files by fixing broken geometry, missing surfaces, scale issues, duplicate lines, layer errors, and unusable file structures.",
  },
  {
    title: "Manufacturing-Ready File Output",
    description:
      "Converted files can be prepared for CNC machining, 3D printing, laser cutting, sheet metal fabrication, mold development, and vendor communication.",
  },
  {
    title: "Preserved Design Intent",
    description:
      "During conversion, we focus on maintaining original dimensions, scale, geometry, surfaces, layers, and technical details so that the final file remains accurate and usable.",
  },
];

const serviceIcons: IconType[] = [
  FaFileLines,
  FaCube,
  FaCubes,
  FaDiagramProject,
  FaFileCircleCheck,
  FaLayerGroup,
  FaWandMagicSparkles,
  FaClipboardCheck,
  FaPenRuler,
  FaGears,
  FaBoxesStacked,
  FaRocket,
  FaScrewdriverWrench,
  FaShieldHalved,
  FaRulerCombined,
  FaLightbulb,
  FaIndustry,
  FaCube,
  FaDiagramProject,
  FaFileCircleCheck,
];

const benefitIcons: IconType[] = [
  FaDiagramProject,
  FaShieldHalved,
  FaIndustry,
  FaRocket,
  FaGears,
  FaFileCircleCheck,
  FaLayerGroup,
  FaScrewdriverWrench,
];

const processItems = [
  {
    title: "STEP • IGES • STL",
    icon: FaFileCircleCheck,
  },
  {
    title: "DWG • DXF Files",
    icon: FaDiagramProject,
  },
  {
    title: "2D to 3D Conversion",
    icon: FaCube,
  },
  {
    title: "CAD Data Cleanup",
    icon: FaShieldHalved,
  },
];

const conversionCards = [
  {
    title: "2D to 3D CAD Conversion for Legacy Drawings and Product Data",
    description:
      "Many businesses still have old 2D drawings, paper drawings, scanned documents, artwork files, or basic technical layouts that need to be converted into usable 3D CAD models. We convert 2D drawings into 3D CAD models with proper dimensions, features, surfaces, holes, cuts, bends, assembly details, and design references.",
    icon: FaCube,
  },
  {
    title: "3D CAD File Conversion for Engineering and Manufacturing Workflows",
    description:
      "Different CAD/CAM platforms use different file formats, and not every file is directly usable for every workflow. We convert 3D models into required neutral or native formats so they can be used across multiple software and production processes.",
    icon: FaCubes,
  },
  {
    title: "DWG, DXF, STEP, IGES, STL, and Native CAD Conversion",
    description:
      "Each format serves a different purpose. DWG and DXF support drafting and cutting workflows, STEP and IGES support CAD data exchange, STL supports 3D printing, and native CAD files support detailed editable CAD workflows.",
    icon: FaFileLines,
  },
  {
    title: "CAD Data Migration and Legacy File Modernization",
    description:
      "We help companies move from old software to new CAD/CAM platforms, organize years of engineering files, standardize drawings, clean data, validate geometry, and convert outdated files into manufacturing-ready CAD documents.",
    icon: FaRocket,
  },
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-cad-file-conversion-data-migration"
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
                name: "CAD File Conversion & Data Migration",
                item: "https://www.asbconsulting.in/research&development/cad-file-conversion-data-migration-services",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-cad-file-conversion-data-migration"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/cad-file-conversion-data-migration-services#webpage",
            url: "https://www.asbconsulting.in/research&development/cad-file-conversion-data-migration-services",
            name: "CAD File Conversion & Data Migration Services in India",
            description:
              "AS Business provides professional CAD File Conversion & Data Migration Services in India for manufacturers, engineering companies, product developers, CAD/CAM teams, architects, designers, and industrial businesses that need accurate conversion of 2D and 3D design data into usable engineering and manufacturing formats.",
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
                CAD Conversion • Data Migration • Manufacturing Files
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                CAD File Conversion & Data Migration Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                AS Business provides professional CAD File Conversion & Data
                Migration Services in India for manufacturers, engineering
                companies, product developers, CAD/CAM teams, architects,
                designers, and industrial businesses that need accurate
                conversion of 2D and 3D design data into usable engineering and
                manufacturing formats.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Convert Your CAD Files <FaArrowRight />
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
                      <FaFileLines className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        STEP, IGES, STL, DWG, DXF
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaDiagramProject className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        CAD Data Migration
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaShieldHalved className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Clean, Editable, Production-Ready CAD Data
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Convert old drawings, artwork, scanned files, 2D CAD
                      files, 3D models, and legacy CAD data into usable
                      manufacturing formats while preserving design intent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">CAD</p>
                <p className="text-sm text-gray-500">
                  Conversion & Data Cleanup
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
                "2D to 3D Conversion",
                "STEP / IGES / STL",
                "DWG / DXF Cleanup",
                "Legacy CAD Migration",
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
              Accurate Conversion. Clean Geometry. Better CAD Compatibility.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Professional CAD File Conversion Support for Engineering and
              Manufacturing Workflows
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              In engineering and manufacturing, file compatibility is extremely
              important. A design file may be available in one format, but
              production, prototyping, CNC machining, 3D printing, vendor
              communication, or documentation may require another format.
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              AS Business helps businesses convert CAD files into formats such
              as STEP, IGES, STL, DWG, DXF, PDF, and native CAD files while
              preserving design intent, dimensions, geometry, and technical
              accuracy.
            </p>

            <p className="leading-relaxed text-gray-600">
              Our file conversion and data migration process focuses on
              accuracy, usability, clean geometry, proper layering, editable
              models, and smooth transfer between different CAD/CAM platforms.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                CAD File Conversion & Data Migration Services in India
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                Convert Old Drawings, 2D Files, 3D Models, Scans, and Legacy CAD
                Data into Usable Formats
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                AS Business provides professional CAD file conversion and data
                migration services in India to convert 2D drawings, artwork, 3D
                models, scanned files, and legacy CAD data into usable
                engineering and manufacturing formats.
              </p>

              <p className="leading-relaxed text-gray-600">
                Our services help businesses modernize old design data, improve
                file compatibility, prepare manufacturing-ready outputs, and
                support smooth workflows for CAD design, CNC machining, 3D
                printing, laser cutting, prototyping, reverse engineering, and
                production documentation.
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

        {/* Conversion Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {conversionCards.map((item, index) => {
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
                Our CAD Conversion Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Our File Conversion & Data Migration Services Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {conversionServices.map((service, index) => {
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
                Key Benefits of File Conversion & Data Migration Services
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
                Our file conversion and data migration services are suitable for
                manufacturers, engineering design firms, CAD/CAM outsourcing
                teams, product development companies, sheet metal units, CNC
                workshops, laser cutting businesses, 3D printing providers,
                architecture teams, and legacy documentation projects.
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
                  AS Business provides reliable CAD file conversion and data
                  migration support with a strong focus on accuracy, usability,
                  and manufacturing readiness. We understand that converted
                  files must not only open in software but also remain useful for
                  real engineering, design, production, and documentation
                  workflows.
                </p>

                <p className="leading-relaxed text-white/80">
                  Our team carefully handles file structure, scale, dimensions,
                  geometry, layers, surfaces, and design details to ensure
                  high-quality conversion results. Whether you need 2D to 3D CAD
                  conversion, STEP/IGES/STL conversion, DWG/DXF conversion,
                  scanned drawing digitization, artwork conversion, or legacy CAD
                  data migration, AS Business can support your complete
                  requirement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Clean Editable CAD Files",
                  "Preserved Design Intent",
                  "Modernized Legacy Data",
                  "Manufacturing-Ready Output",
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
                    Convert Your CAD Data into Usable Manufacturing Formats
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If you have old drawings, 2D files, 3D models, scanned
                    documents, artwork files, or legacy CAD data that needs to
                    be converted into usable formats, AS Business can help you
                    prepare accurate and production-ready CAD files.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for CAD File Conversion & Data Migration
                    Services in India, including 2D to 3D conversion, STEP,
                    IGES, STL, DWG, DXF, native CAD conversion, CAD cleanup, and
                    manufacturing file preparation.
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
                Key Points of File Conversion & Data Migration Services
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
