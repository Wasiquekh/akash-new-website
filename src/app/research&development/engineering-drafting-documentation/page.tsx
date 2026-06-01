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
  FaPenRuler,
  FaRulerCombined,
  FaShieldHalved,
  FaScrewdriverWrench,
  FaTableList,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title:
    "Engineering Drafting & Documentation Services in India | AS Business",
  description:
    "AS Business provides engineering drafting & documentation services in India, including 2D/3D drawings, GD&T, BOMs, assemblies, and manufacturing-ready technical packs.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/research&development/engineering-drafting-documentation",
  },
};

const draftingServices = [
  {
    title: "2D Engineering Drawings",
    description:
      "We prepare detailed 2D drawings with accurate dimensions, tolerances, views, sections, material notes, and manufacturing instructions for production teams.",
  },
  {
    title: "3D CAD Drawings",
    description:
      "Our 3D CAD documentation helps clients visualize part structure, product assembly, and component relationships before manufacturing or prototyping.",
  },
  {
    title: "Mechanical Drafting Services",
    description:
      "We provide mechanical drafting support for components, assemblies, machine parts, product designs, and manufacturing documentation.",
  },
  {
    title: "Manufacturing Drawings",
    description:
      "We create production-ready drawings for fabrication, machining, assembly, inspection, quality control, and vendor communication.",
  },
  {
    title: "Assembly Drawings",
    description:
      "We create assembly drawings that show how different components fit together for production, installation, maintenance, and quality checking.",
  },
  {
    title: "Exploded View Drawings",
    description:
      "We prepare exploded views to clearly show part placement, assembly sequence, component relationship, and product structure.",
  },
  {
    title: "Part Drawings and Component Detailing",
    description:
      "We create detailed part drawings with dimensions, material notes, tolerance details, hole details, thread details, and finishing requirements.",
  },
  {
    title: "Bill of Materials Preparation",
    description:
      "We prepare structured BOMs with part names, quantities, materials, specifications, and references for procurement, costing, and planning.",
  },
  {
    title: "Technical Documentation and Technical Packs",
    description:
      "We prepare complete technical packs for production handoff, vendor quotation, prototype development, pilot production, and manufacturing planning.",
  },
  {
    title: "GD&T-Based Drawings",
    description:
      "We provide GD&T-based drafting support to define form, fit, orientation, position, and tolerance requirements for accurate manufacturing and inspection.",
  },
  {
    title: "ISO/ASME Standard Drawing Support",
    description:
      "Our drawings can be prepared according to preferred engineering standards such as ISO or ASME, depending on client and project requirements.",
  },
  {
    title: "Tolerance Stack-Up Support",
    description:
      "We consider tolerance stack-up where multiple parts interact with each other, helping reduce fitment issues and assembly errors.",
  },
  {
    title: "Sheet Metal Drawings",
    description:
      "We prepare sheet metal drawings with bend information, flat patterns, material thickness, hole details, cutouts, and fabrication notes.",
  },
  {
    title: "Machining Drawings",
    description:
      "We create machining drawings with precise dimensions, tolerance values, surface finish notes, hole/thread details, and inspection references.",
  },
  {
    title: "Fabrication Drawings",
    description:
      "We prepare fabrication drawings with welding notes, cutting details, assembly references, material specifications, and manufacturing instructions.",
  },
  {
    title: "Manufacturing Handoff Documentation",
    description:
      "We prepare documents that help transfer product information smoothly from CAD/design teams to vendors, manufacturers, and production teams.",
  },
  {
    title: "Drawing Conversion and CAD File Updates",
    description:
      "We update old CAD files, convert drawings, revise technical documents, and prepare usable engineering files for production requirements.",
  },
  {
    title: "Prototype and Production Drawing Support",
    description:
      "We provide prototype and production drawing support for CNC machining, 3D printing, sheet metal fabrication, molding, and assembly.",
  },
];

const benefits = [
  {
    title: "Accurate Manufacturing Communication",
    description:
      "Our drawings provide clear information to manufacturers, vendors, machine operators, and production teams. This reduces misunderstanding and improves production accuracy.",
  },
  {
    title: "Reduced Production Errors",
    description:
      "Detailed dimensions, tolerances, material notes, and assembly details help avoid mistakes during fabrication, machining, and assembly.",
  },
  {
    title: "Better Quality Control",
    description:
      "GD&T, inspection dimensions, tolerance details, and technical notes help quality teams verify whether the manufactured part meets design requirements.",
  },
  {
    title: "Faster Vendor Quotation and Production Planning",
    description:
      "Complete drawings, BOMs, and technical packs make it easier for vendors to estimate cost, material requirements, production time, and process planning.",
  },
  {
    title: "Seamless Design-to-Manufacturing Handoff",
    description:
      "Our documentation helps transfer design data smoothly from CAD/design teams to manufacturing teams without missing important technical details.",
  },
  {
    title: "Support for Multiple Manufacturing Processes",
    description:
      "We prepare drawings for CNC machining, sheet metal fabrication, welding, plastic molding, 3D printing, product assembly, and industrial manufacturing.",
  },
];

const industries = [
  "Manufacturing companies",
  "Product development companies",
  "Industrial equipment manufacturers",
  "Automotive component manufacturers",
  "Machine part manufacturers",
  "Sheet metal and fabrication units",
  "Plastic component manufacturers",
  "Consumer product companies",
  "Engineering consultancies",
  "Startups developing new products",
  "CAD/CAM outsourcing projects",
  "Prototype development teams",
];

const keyPoints = [
  {
    title: "Production-Ready 2D Drawings",
    description:
      "We prepare detailed 2D drawings with accurate dimensions, tolerances, views, sections, material notes, and manufacturing instructions. These drawings help production teams manufacture parts correctly.",
  },
  {
    title: "3D CAD Drawing Support",
    description:
      "Our 3D CAD documentation helps clients visualize part structure, product assembly, and component relationships before manufacturing or prototyping.",
  },
  {
    title: "Assembly Drawings",
    description:
      "We create assembly drawings that show how different components fit together. These drawings are useful for production, installation, maintenance, and quality checking.",
  },
  {
    title: "BOM Preparation",
    description:
      "We prepare structured Bill of Materials with part names, quantities, materials, specifications, and references. This helps in procurement, costing, and manufacturing planning.",
  },
  {
    title: "GD&T-Based Drawings",
    description:
      "We provide GD&T-based drafting support to define form, fit, orientation, position, and tolerance requirements for accurate manufacturing and inspection.",
  },
  {
    title: "ISO/ASME Standard Documentation",
    description:
      "Our drawings can be prepared according to preferred engineering standards such as ISO or ASME, depending on client and project requirements.",
  },
  {
    title: "Tolerance Stack-Up Support",
    description:
      "We consider tolerance stack-up where multiple parts interact with each other, helping reduce fitment issues and assembly errors.",
  },
  {
    title: "Manufacturing Handoff Documentation",
    description:
      "We prepare technical packs that help transfer product information from the design team to manufacturers, vendors, and production teams.",
  },
  {
    title: "Reduced Manufacturing Errors",
    description:
      "Clear documentation helps reduce confusion, rework, material waste, and production delays during manufacturing.",
  },
  {
    title: "Suitable for Multiple Processes",
    description:
      "Our drafting services support CNC machining, sheet metal fabrication, welding, 3D printing, plastic molding, and product assembly.",
  },
];

const serviceIcons: IconType[] = [
  FaCompassDrafting,
  FaCube,
  FaPenRuler,
  FaFileCircleCheck,
  FaDiagramProject,
  FaLayerGroup,
  FaRulerCombined,
  FaTableList,
  FaFileLines,
  FaClipboardCheck,
  FaShieldHalved,
  FaGears,
  FaBoxesStacked,
  FaScrewdriverWrench,
  FaIndustry,
  FaCubes,
  FaFileLines,
  FaCircleCheck,
];

const benefitIcons: IconType[] = [
  FaCompassDrafting,
  FaShieldHalved,
  FaClipboardCheck,
  FaTableList,
  FaDiagramProject,
  FaIndustry,
];

const processItems = [
  {
    title: "2D Drawings",
    icon: FaCompassDrafting,
  },
  {
    title: "3D CAD",
    icon: FaCube,
  },
  {
    title: "BOM",
    icon: FaTableList,
  },
  {
    title: "GD&T",
    icon: FaRulerCombined,
  },
];

const documentationCards = [
  {
    title: "Production-Ready 2D and 3D Engineering Drawings",
    description:
      "AS Business prepares detailed 2D and 3D engineering drawings that are suitable for manufacturing, fabrication, machining, assembly, inspection, and quality control. Our drawings include proper dimensions, tolerances, views, sections, material details, finishing requirements, hole details, thread details, welding notes, bend information, and manufacturing instructions.",
    icon: FaCompassDrafting,
  },
  {
    title: "Assembly Drawings and Manufacturing Documentation",
    description:
      "For products made of multiple components, clear assembly documentation is essential. We create detailed assembly drawings, exploded views, part lists, BOMs, and technical packs that help production teams understand how different parts fit together.",
    icon: FaDiagramProject,
  },
  {
    title: "GD&T and Tolerance-Based Drafting",
    description:
      "Accurate tolerances are important for product performance, fitment, assembly, and quality control. We prepare engineering drawings with GD&T based on project requirements and preferred standards such as ISO or ASME.",
    icon: FaRulerCombined,
  },
  {
    title: "BOM Preparation and Technical Packs",
    description:
      "AS Business prepares clear and structured Bill of Materials, technical documentation, and manufacturing technical packs for engineering and product development requirements.",
    icon: FaTableList,
  },
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-engineering-drafting-documentation"
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
                name: "Engineering Drafting & Documentation",
                item: "https://www.asbconsulting.in/research&development/engineering-drafting-documentation",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-engineering-drafting-documentation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/engineering-drafting-documentation#webpage",
            url: "https://www.asbconsulting.in/research&development/engineering-drafting-documentation",
            name: "Engineering Drafting & Documentation Services in India",
            description:
              "AS Business provides professional Engineering Drafting & Documentation Services in India to help manufacturers, engineering companies, startups, and product development teams convert design ideas into accurate, production-ready technical documents.",
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
                Drafting • Documentation • Manufacturing Handoff
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Engineering Drafting & Documentation Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                AS Business provides professional Engineering Drafting &
                Documentation Services in India to help manufacturers,
                engineering companies, startups, and product development teams
                convert design ideas into accurate, production-ready technical
                documents.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Get Production-Ready Documentation <FaArrowRight />
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
                      <FaCompassDrafting className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">2D Engineering Drawings</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaTableList className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">BOM & Technical Packs</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaRulerCombined className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Accurate Technical Documentation
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      From dimensions, tolerances, material details, assembly
                      notes, and GD&T to complete manufacturing handoff
                      documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">GD&T</p>
                <p className="text-sm text-gray-500">Tolerance-Based Drafting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Strip */}
        <section className="relative -mt-10 z-10">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-[2rem] bg-white p-5 shadow-xl border border-[#eaddec]">
              {[
                "Production-Ready Drawings",
                "BOM & Technical Packs",
                "GD&T Documentation",
                "Smooth Manufacturing Handoff",
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

        {/* Introduction Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-5 text-center">
            <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-4">
              Clear Drawings. Accurate Details. Better Manufacturing.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Engineering Documentation That Connects Design and Production
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              Engineering drawings are an important bridge between product
              design and manufacturing. A product may look complete in 3D, but
              without accurate drawings, dimensions, tolerances, material
              specifications, assembly instructions, and production notes,
              manufacturing errors can occur.
            </p>

            <p className="leading-relaxed text-gray-600">
              That is why our drafting process focuses on clarity, accuracy,
              standardization, and smooth handoff to production teams, vendors,
              and manufacturers. We create drawings and technical documents
              that help reduce confusion, improve production quality, support
              vendor communication, and ensure every part is manufactured as per
              the required design intent.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                Production-Ready Documentation
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                2D, 3D, Assembly Drawings, BOMs, GD&T and Technical Packs
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                AS Business provides professional engineering drafting and
                documentation services in India, including 2D drawings, 3D CAD
                drawings, assembly drawings, BOMs, GD&T-based drawings,
                tolerance details, and manufacturing-ready technical packs.
              </p>

              <p className="leading-relaxed text-gray-600">
                Our documentation helps manufacturers, vendors, and production
                teams clearly understand product dimensions, materials,
                tolerances, assembly methods, and quality requirements. With
                accurate drafting and structured technical documents, we help
                reduce production errors, improve manufacturing communication,
                and ensure a smooth handoff from design to production.
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

        {/* Documentation Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentationCards.map((item, index) => {
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
                Our Drafting Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Our Engineering Drafting & Documentation Services Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {draftingServices.map((service, index) => {
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
                Key Benefits of Our Engineering Drafting Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                Our engineering drafting and documentation services are suitable
                for manufacturers, product development companies, engineering
                consultancies, startups, and CAD/CAM outsourcing projects.
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
                  AS Business provides accurate, clear, and
                  manufacturing-focused engineering drafting services for
                  companies that need reliable technical documentation. Our team
                  understands the importance of proper drawings, GD&T, tolerance
                  details, BOMs, and production-ready documentation in reducing
                  manufacturing errors and improving quality.
                </p>

                <p className="leading-relaxed text-white/80">
                  We focus on delivering drawings that are easy to understand,
                  technically correct, and suitable for real-world production.
                  Whether you need 2D drafting, 3D CAD drawings, assembly
                  documentation, BOM preparation, or GD&T-based manufacturing
                  drawings, AS Business can support your complete drafting and
                  documentation requirement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Clear Technical Drawings",
                  "GD&T and Tolerance Details",
                  "Manufacturing-Ready Documentation",
                  "Vendor-Friendly Technical Packs",
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
                    Get Production-Ready Engineering Documentation
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If you need accurate engineering drawings, assembly
                    documentation, BOMs, GD&T drawings, or manufacturing-ready
                    technical packs, AS Business can help you prepare complete
                    documentation for smooth production handoff.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for Engineering Drafting & Documentation
                    Services in India and get reliable drafting support for
                    product design, manufacturing, prototyping, and industrial
                    engineering projects.
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
                Key Points of Engineering Drafting & Documentation Services
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