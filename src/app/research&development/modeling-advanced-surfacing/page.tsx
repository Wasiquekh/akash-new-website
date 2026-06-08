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
  FaFileCircleCheck,
  FaFileLines,
  FaGears,
  FaIndustry,
  FaLayerGroup,
  FaLightbulb,
  FaPalette,
  FaPenRuler,
  FaRocket,
  FaRulerCombined,
  FaShapes,
  FaScrewdriverWrench,
  FaShieldHalved,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "3D Modeling & Advanced Surfacing Services in India | AS Business",
  description:
    "AS Business provides 3D modeling & advanced surfacing services in India, including parametric modeling, freeform surfaces, CAD models, product design, and manufacturing support.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/research&development/modeling-advanced-surfacing", 
  },
};

const modelingServices = [
  {
    title: "3D CAD Modeling",
    description:
      "We create accurate 3D CAD models for parts, products, assemblies, appliances, HVAC components, industrial products, and engineered components.",
  },
  {
    title: "Parametric Modeling",
    description:
      "We create editable parametric CAD models using dimensions, features, relationships, and constraints for controlled design changes.",
  },
  {
    title: "Freeform Modeling",
    description:
      "We develop organic and creative product shapes using freeform modeling techniques while keeping the design practical for development and manufacturing.",
  },
  {
    title: "Advanced Surface Modeling",
    description:
      "Our advanced surfacing support helps create smooth, clean, and complex product surfaces for appliances, HVAC products, plastic housings, panels, and engineered products.",
  },
  {
    title: "Complex Surface Development",
    description:
      "We support products with intricate details, curved profiles, blended surfaces, non-linear shapes, and advanced product forms.",
  },
  {
    title: "Product Modeling Services",
    description:
      "We create product-ready 3D models for design validation, prototyping, visualization, rendering, and manufacturing handoff.",
  },
  {
    title: "Mechanical 3D Modeling",
    description:
      "We provide mechanical 3D modeling for machine parts, industrial components, tools, fixtures, mechanical assemblies, and engineered products.",
  },
  {
    title: "Industrial Product Modeling",
    description:
      "We support industrial product modeling for equipment parts, enclosures, fabricated components, sheet metal products, and manufacturing assemblies.",
  },
  {
    title: "Appliance Product Modeling",
    description:
      "We create 3D models for appliance products where surface quality, external appearance, panel design, fitment, and presentation matter.",
  },
  {
    title: "HVAC Component Modeling",
    description:
      "We support HVAC component modeling for covers, panels, airflow parts, housings, ducts, product enclosures, and engineered components.",
  },
  {
    title: "Plastic Part Modeling",
    description:
      "We create plastic part models with attention to geometry, surface flow, moldability, assembly fitment, and product appearance.",
  },
  {
    title: "Sheet Metal Product Modeling",
    description:
      "We prepare sheet metal product models with proper bends, thickness, cutouts, holes, flat pattern consideration, and fabrication feasibility.",
  },
  {
    title: "Product Housing and Enclosure Modeling",
    description:
      "We design housings, covers, casings, panels, and enclosures with clean geometry, accurate fitment, and professional surface quality.",
  },
  {
    title: "Assembly Modeling",
    description:
      "We create assembly models to check component fitment, part interaction, spacing, movement, and overall product structure.",
  },
  {
    title: "CAD Model Cleanup and Optimization",
    description:
      "We clean, refine, optimize, and correct CAD models to improve usability, geometry quality, editability, and manufacturing readiness.",
  },
  {
    title: "2D to 3D CAD Conversion",
    description:
      "We convert 2D drawings, sketches, reference images, and old design data into accurate 3D CAD models for review and production.",
  },
  {
    title: "CAD Modeling from Sketches or Samples",
    description:
      "We convert concept sketches, reference images, physical samples, and existing parts into accurate and usable 3D CAD models.",
  },
  {
    title: "CAD Modeling from Scan Data",
    description:
      "We help convert scan data into clean CAD models that can be used for design review, reverse engineering, prototyping, and manufacturing.",
  },
  {
    title: "Surface Refinement and Geometry Correction",
    description:
      "We refine surfaces, correct geometry issues, improve transitions, and prepare smooth, professional, and technically usable 3D models.",
  },
  {
    title: "Prototype-Ready CAD Model Preparation",
    description:
      "Our 3D CAD models can be used for 3D printing, CNC machining, mold development, sheet metal fabrication, and pilot production.",
  },
  {
    title: "Manufacturing-Ready CAD Files",
    description:
      "We prepare CAD files with manufacturing feasibility in mind, supporting prototyping, tooling, production planning, and documentation.",
  },
  {
    title: "Rendering-Ready 3D Models",
    description:
      "We prepare clean and detailed 3D models that can be used for photorealistic rendering, animation, product marketing, and client presentation.",
  },
];

const benefits = [
  {
    title: "Better Product Visualization",
    description:
      "3D models allow clients to view the product clearly from different angles before manufacturing, making design review and decision-making easier.",
  },
  {
    title: "Accurate Engineering Design",
    description:
      "Parametric CAD models help maintain dimensional accuracy, design control, and technical consistency throughout the product development process.",
  },
  {
    title: "Smooth and Professional Surface Quality",
    description:
      "Advanced surfacing helps create clean, smooth, and visually refined product geometry for products with curves, contours, and complex details.",
  },
  {
    title: "Faster Design Iterations",
    description:
      "Editable CAD models make it easier to modify dimensions, features, surfaces, and assemblies during product development.",
  },
  {
    title: "Prototype and Manufacturing Support",
    description:
      "3D models can be used for 3D printing, CNC machining, mold development, sheet metal fabrication, product rendering, and manufacturing documentation.",
  },
  {
    title: "Improved Fitment and Assembly",
    description:
      "Assembly modeling helps check how different parts fit together, reducing issues during prototyping and production.",
  },
  {
    title: "Better Product Presentation",
    description:
      "High-quality 3D models can be used for renderings, animations, marketing visuals, catalogs, client presentations, and investor discussions.",
  },
  {
    title: "Suitable for Complex Products",
    description:
      "Advanced surfacing makes it possible to design complex product shapes that are difficult to create using basic CAD modeling methods.",
  },
];

const industries = [
  "Appliance manufacturers",
  "HVAC product companies",
  "Industrial product manufacturers",
  "Consumer product brands",
  "Automotive component companies",
  "Plastic product manufacturers",
  "Sheet metal fabrication units",
  "Machine part manufacturers",
  "Product development companies",
  "Engineering consultancies",
  "Prototype development companies",
  "Startups developing new products",
  "CAD/CAM outsourcing projects",
  "Furniture and fixture manufacturers",
  "Mold and tooling companies",
];

const keyPoints = [
  {
    title: "Parametric 3D Modeling",
    description:
      "We create editable parametric CAD models using dimensions, features, and constraints. This makes future design changes faster, easier, and more controlled.",
  },
  {
    title: "Advanced Surface Modeling",
    description:
      "Our advanced surfacing support helps create smooth, clean, and complex product surfaces for appliances, HVAC components, plastic housings, panels, and engineered products.",
  },
  {
    title: "Freeform Modeling",
    description:
      "We develop organic and creative product shapes using freeform modeling techniques while keeping the design practical for product development and manufacturing.",
  },
  {
    title: "Product Visualization",
    description:
      "3D models help clients understand product form, size, proportions, details, and assembly before investing in prototypes or production.",
  },
  {
    title: "Complex Geometry Development",
    description:
      "We support products with intricate details, curved profiles, blended surfaces, non-linear shapes, and advanced product forms.",
  },
  {
    title: "2D to 3D Conversion",
    description:
      "We convert 2D drawings, sketches, reference images, and old design data into accurate 3D CAD models for review, prototyping, and production.",
  },
  {
    title: "Assembly Modeling",
    description:
      "We create assembly models to check component fitment, part interaction, spacing, movement, and overall product structure.",
  },
  {
    title: "Prototype-Ready Models",
    description:
      "Our 3D CAD models can be used for 3D printing, CNC machining, mold development, sheet metal fabrication, and pilot production.",
  },
  {
    title: "Rendering-Ready CAD Models",
    description:
      "We prepare clean and detailed 3D models that can be used for photorealistic rendering, animation, product marketing, and client presentation.",
  },
  {
    title: "Manufacturing Support",
    description:
      "Our models are created with manufacturing feasibility in mind, helping reduce errors during prototyping, tooling, and production.",
  },
];

const serviceIcons: IconType[] = [
  FaCube,
  FaRulerCombined,
  FaShapes,
  FaWandMagicSparkles,
  FaLayerGroup,
  FaPenRuler,
  FaGears,
  FaIndustry,
  FaCubes,
  FaScrewdriverWrench,
  FaBoxesStacked,
  FaFileLines,
  FaDiagramProject,
  FaCubes,
  FaShieldHalved,
  FaCompassDrafting,
  FaLightbulb,
  FaLayerGroup,
  FaWandMagicSparkles,
  FaRocket,
  FaFileCircleCheck,
  FaPalette,
];

const benefitIcons: IconType[] = [
  FaCube,
  FaRulerCombined,
  FaWandMagicSparkles,
  FaRocket,
  FaScrewdriverWrench,
  FaCubes,
  FaPalette,
  FaShapes,
];

const processItems = [
  {
    title: "Parametric Models",
    icon: FaRulerCombined,
  },
  {
    title: "Advanced Surfaces",
    icon: FaWandMagicSparkles,
  },
  {
    title: "Assembly Fitment",
    icon: FaCubes,
  },
  {
    title: "Manufacturing Files",
    icon: FaFileLines,
  },
];

const modelingCards = [
  {
    title: "Parametric 3D Modeling for Accurate Product Design",
    description:
      "Parametric modeling is useful when a product requires accurate dimensions, editable features, controlled design changes, and engineering precision. AS Business creates parametric CAD models for mechanical parts, industrial components, assemblies, fixtures, tools, appliances, HVAC products, and engineered products.",
    icon: FaRulerCombined,
  },
  {
    title: "Advanced Surfacing for Complex Shapes and Smooth Finishes",
    description:
      "Our advanced surfacing services help create accurate and smooth surface models for complex product forms. We focus on surface continuity, clean geometry, accurate transitions, aesthetic appeal, manufacturability, and design intent.",
    icon: FaWandMagicSparkles,
  },
  {
    title: "Freeform Modeling for Creative and Engineered Products",
    description:
      "Freeform modeling allows the creation of organic shapes, curved surfaces, non-linear forms, and visually refined product designs. Our modeling process balances design creativity with engineering practicality so that the final model remains usable for manufacturing.",
    icon: FaShapes,
  },
  {
    title: "3D CAD Modeling for Appliances, HVAC, and Industrial Products",
    description:
      "Our 3D modeling and advanced surfacing services are ideal for products that require precision, function, and visual quality. We support appliances, HVAC systems, engineered components, industrial products, machine parts, plastic parts, sheet metal products, and consumer product designs.",
    icon: FaIndustry,
  },
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-3d-modeling-advanced-surfacing"
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
                name: "3D Modeling & Advanced Surfacing",
                item: "https://www.asbconsulting.in/research&development/3d-modeling-advanced-surfacing-services",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-3d-modeling-advanced-surfacing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/3d-modeling-advanced-surfacing-services#webpage",
            url: "https://www.asbconsulting.in/research&development/3d-modeling-advanced-surfacing-services",
            name: "3D Modeling & Advanced Surfacing Services in India",
            description:
              "AS Business provides professional 3D Modeling & Advanced Surfacing Services in India for manufacturers, product developers, engineering companies, startups, and industrial businesses that need accurate, detailed, and production-ready 3D CAD models.",
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
                3D CAD • Parametric Modeling • Advanced Surfacing
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                3D Modeling & Advanced Surfacing Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                AS Business provides professional 3D Modeling & Advanced
                Surfacing Services in India for manufacturers, product
                developers, engineering companies, startups, and industrial
                businesses that need accurate, detailed, and production-ready 3D
                CAD models.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Create Your 3D Model <FaArrowRight />
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
                        Parametric 3D Modeling
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaWandMagicSparkles className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        Advanced Surfacing
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaShapes className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Smooth, Accurate, Production-Ready Geometry
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Create parametric models, freeform surfaces, assembly
                      models, rendering-ready CAD models, and manufacturing-ready
                      files.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">3D CAD</p>
                <p className="text-sm text-gray-500">
                  Advanced Product Geometry
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
                "Parametric Modeling",
                "Advanced Surfacing",
                "Freeform Geometry",
                "Manufacturing-Ready CAD",
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
              Accurate Geometry. Smooth Surfaces. Practical Engineering.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Professional 3D Modeling Support for Product Development and
              Manufacturing
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              Our services include parametric modeling, freeform modeling,
              surface modeling, complex geometry development, product modeling,
              assembly modeling, and CAD data preparation for design validation,
              prototyping, and manufacturing.
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              3D modeling plays an important role in modern product design and
              engineering. It helps businesses visualize products before
              manufacturing, check fitment, improve design accuracy, validate
              product form, and prepare files for prototyping or production.
            </p>

            <p className="leading-relaxed text-gray-600">
              At AS Business, we create 3D models that are not only visually
              clear but also technically practical, editable, and suitable for
              real-world engineering and manufacturing needs.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                3D Modeling & Advanced Surfacing Services in India
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                From Concept Sketches and 2D Drawings to Complex Surface Models
                and Production-Ready CAD Files
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                AS Business provides professional 3D modeling and advanced
                surfacing services in India for products that require accurate
                geometry, smooth surfaces, complex details, and
                manufacturing-ready CAD models.
              </p>

              <p className="leading-relaxed text-gray-600">
                Our 3D modeling services help clients visualize products,
                validate design form, check fitment, prepare prototypes, create
                renderings, and move smoothly toward manufacturing.
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

        {/* Modeling Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {modelingCards.map((item, index) => {
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
                Our 3D Modeling Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Our 3D Modeling & Advanced Surfacing Services Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {modelingServices.map((service, index) => {
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
                Key Benefits of 3D Modeling & Advanced Surfacing
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
                Our 3D modeling and advanced surfacing services are suitable for
                appliance manufacturers, HVAC companies, industrial product
                manufacturers, automotive component companies, startups,
                prototype developers, and CAD/CAM outsourcing projects.
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
                  AS Business provides reliable 3D modeling and advanced
                  surfacing support with a strong focus on accuracy, design
                  quality, manufacturability, and technical clarity. We
                  understand that a 3D model must not only look good but also
                  support real product development, prototyping, manufacturing,
                  and future design changes.
                </p>

                <p className="leading-relaxed text-white/80">
                  Our team creates CAD models that are clean, editable,
                  detailed, and suitable for engineering use. Whether you need
                  parametric modeling, freeform surface design, complex product
                  geometry, 2D to 3D conversion, product visualization models,
                  or manufacturing-ready CAD files, AS Business can support your
                  complete 3D modeling requirement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Clean Editable CAD Models",
                  "Smooth Surface Quality",
                  "Manufacturing-Ready Geometry",
                  "Prototype and Rendering Support",
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
                    Create Accurate 3D Models for Your Product Ideas
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If you have a product concept, sketch, reference image,
                    existing part, appliance design, HVAC component, or
                    industrial product that needs professional 3D modeling, AS
                    Business can help you convert it into an accurate CAD model.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for 3D Modeling & Advanced Surfacing
                    Services in India, including parametric modeling, freeform
                    modeling, advanced surface modeling, product modeling, CAD
                    model preparation, and manufacturing-ready 3D design
                    support.
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
                Key Points of 3D Modeling & Advanced Surfacing Services
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