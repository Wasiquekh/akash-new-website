import * as React from "react";
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
  FaLightbulb,
  FaPenRuler,
  FaRocket,
  FaShieldHalved,
  FaScrewdriverWrench,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Product Design & Engineering Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides product design and engineering services in India, including CAD design, 3D modeling, DFM/DFA, prototyping, reverse engineering, and manufacturing-ready product documentation.",
  alternates: {
    canonical: "https://www.asbconsulting.in/research&development/product-design-engineering",
  },
};

const productServices = [
  {
    title: "Concept Design and Idea Development",
    description:
      "We help convert your early product ideas into clear design concepts. Our team studies your requirement, product purpose, target use, market need, and manufacturing possibility to create a strong foundation for product development.",
  },
  {
    title: "3D CAD Modeling",
    description:
      "We create accurate and detailed 3D CAD models for parts, assemblies, and complete products. These models help in visualization, design validation, prototyping, and manufacturing preparation.",
  },
  {
    title: "2D Engineering Drawings",
    description:
      "We prepare detailed 2D engineering drawings with dimensions, tolerances, material notes, assembly details, and production information required for manufacturing.",
  },
  {
    title: "Mechanical Product Design",
    description:
      "Our mechanical design services focus on product structure, strength, fitment, movement, durability, and usability. We design products that are practical, functional, and suitable for real-world applications.",
  },
  {
    title: "DFM/DFA Design Optimization",
    description:
      "We optimize product designs for easier manufacturing and assembly. This helps reduce production complexity, improve quality, and control overall development cost.",
  },
  {
    title: "Prototype Development Support",
    description:
      "We provide prototype-ready CAD files and design support for 3D printing, CNC machining, sheet metal fabrication, soft tooling, and pilot production.",
  },
  {
    title: "Reverse Engineering",
    description:
      "We help recreate, improve, or modify existing components and products by studying physical samples, measurements, or scanned data. This is useful for replacement parts, legacy products, redesign, and performance improvement.",
  },
  {
    title: "CAD/CAM Outsourcing",
    description:
      "We provide cost-effective CAD/CAM outsourcing support for companies that need expert design and drafting services without maintaining a full in-house engineering team.",
  },
  {
    title: "File Conversion and CAD Data Migration",
    description:
      "We convert 2D and 3D files into usable manufacturing formats such as STEP, IGES, STL, DWG, DXF, and other CAD formats while preserving design intent and technical accuracy.",
  },
  {
    title: "Assembly Design and BOM Preparation",
    description:
      "We create assembly models, exploded views, bill of materials, part lists, and technical documentation to support manufacturing and product handoff.",
  },
];

const benefits = [
  {
    title: "Complete Product Development Support",
    description:
      "We support the full product design journey from concept idea to CAD modeling, drawings, prototype support, and manufacturing-ready documentation.",
  },
  {
    title: "Better Manufacturing Feasibility",
    description:
      "Our designs are created with production requirements in mind, making it easier to manufacture, assemble, and scale the product.",
  },
  {
    title: "Reduced Design Errors",
    description:
      "With detailed CAD modeling, engineering drawings, and technical reviews, we help reduce design mistakes before the product reaches manufacturing.",
  },
  {
    title: "Cost-Effective Engineering Solutions",
    description:
      "Our product design process focuses on optimizing material usage, simplifying parts, reducing unnecessary complexity, and controlling production cost.",
  },
  {
    title: "Faster Time-to-Market",
    description:
      "By providing accurate design files, prototype-ready models, and manufacturing documentation, we help businesses move faster from idea to product launch.",
  },
  {
    title: "Improved Product Performance",
    description:
      "We focus on function, durability, usability, reliability, and assembly logic so that the final product performs effectively in real-world conditions.",
  },
  {
    title: "Professional CAD/CAM Expertise",
    description:
      "Our CAD/CAM design support helps businesses create precise 3D models, 2D drawings, assemblies, and manufacturing-ready outputs.",
  },
  {
    title: "Suitable for New and Existing Products",
    description:
      "Whether you want to develop a new product, improve an existing design, recreate an old component, or prepare a product for manufacturing, we can support your requirement.",
  },
];

const industries = [
  "Industrial equipment manufacturing",
  "Automotive components",
  "Consumer products",
  "Electrical and mechanical products",
  "Plastic and sheet metal components",
  "Machine parts and assemblies",
  "Furniture and fixtures",
  "HVAC and appliance products",
  "Fabrication and manufacturing units",
  "Startups developing new products",
  "Engineering and design companies",
  "Prototype and product development companies",
];

const keyPoints = [
  {
    title: "End-to-End Product Design Support",
    description:
      "We support the complete product design process from idea generation to CAD modeling, prototype preparation, and manufacturing handoff. This helps clients get all major design and engineering requirements in one place.",
  },
  {
    title: "Concept to CAD Conversion",
    description:
      "Our team converts rough sketches, reference images, physical samples, and basic ideas into accurate 3D CAD models and engineering drawings that can be used for review, prototyping, and production planning.",
  },
  {
    title: "Manufacturing-Ready Design",
    description:
      "Every design is created with manufacturing feasibility in mind. We focus on dimensions, tolerances, material selection, assembly methods, and production limitations to make the product practical for real-world manufacturing.",
  },
  {
    title: "DFM/DFA-Based Engineering",
    description:
      "We apply Design for Manufacturing and Design for Assembly principles to reduce complexity, simplify parts, improve assembly efficiency, and control production cost.",
  },
  {
    title: "Accurate 3D CAD Modeling",
    description:
      "Our 3D CAD models help clients visualize the product before production. These models can be used for prototyping, 3D printing, CNC machining, mold development, and product presentations.",
  },
  {
    title: "Detailed Engineering Drawings",
    description:
      "We prepare 2D drawings with dimensions, tolerances, material details, assembly references, and manufacturing notes to support smooth production and vendor communication.",
  },
  {
    title: "Prototype Development Support",
    description:
      "We provide prototype-ready design files for 3D printing, CNC machining, sheet metal fabrication, and pilot production, helping clients test form, fit, and function before mass production.",
  },
  {
    title: "Reverse Engineering Solutions",
    description:
      "We help recreate and improve existing products or components using measurements, physical samples, or scanned data. This is useful for old parts, damaged components, replacement products, and redesign projects.",
  },
  {
    title: "CAD/CAM Outsourcing",
    description:
      "Businesses can reduce in-house design workload by outsourcing CAD/CAM work to AS Business Consulting. We provide flexible and cost-effective support for design, drafting, modeling, and documentation.",
  },
  {
    title: "Faster Product Development",
    description:
      "With structured design planning, accurate CAD files, and manufacturing-ready documentation, we help reduce development delays and speed up the product launch process.",
  },
  {
    title: "Cost and Quality Optimization",
    description:
      "Our design approach focuses on reducing unnecessary material usage, minimizing design errors, improving product strength, and maintaining quality while controlling cost.",
  },
  {
    title: "Suitable for Multiple Industries",
    description:
      "Our product design services are useful for manufacturers, startups, engineering companies, industrial product developers, consumer product brands, and fabrication units.",
  },
];

const serviceIcons: IconType[] = [
  FaLightbulb,
  FaCube,
  FaCompassDrafting,
  FaGears,
  FaScrewdriverWrench,
  FaRocket,
  FaDiagramProject,
  FaBoxesStacked,
  FaFileLines,
  FaCubes,
];

const benefitIcons: IconType[] = [
  FaDiagramProject,
  FaIndustry,
  FaShieldHalved,
  FaGears,
  FaRocket,
  FaCubes,
  FaCompassDrafting,
  FaLightbulb,
];

const processItems = [
  {
    title: "Idea Study",
    icon: FaLightbulb,
  },
  {
    title: "3D CAD",
    icon: FaCube,
  },
  {
    title: "Prototype",
    icon: FaRocket,
  },
  {
    title: "Manufacturing",
    icon: FaIndustry,
  },
];

const engineeringCards = [
  {
    title: "Mechanical Product Design with Engineering Accuracy",
    description:
      "Mechanical product design requires attention to strength, movement, fitment, tolerance, assembly, safety, and long-term performance. Our engineering design process focuses on creating products that meet both functional and manufacturing requirements.",
    icon: FaGears,
  },
  {
    title: "3D CAD Modeling and Product Visualization",
    description:
      "We create accurate 3D CAD models that help clients understand product form, structure, dimensions, assembly, and functionality. These models support design review, prototyping, 3D printing, CNC machining, mold development, and manufacturing planning.",
    icon: FaCube,
  },
  {
    title: "DFM/DFA-Based Product Design",
    description:
      "We follow Design for Manufacturing and Design for Assembly principles to reduce unnecessary parts, simplify assembly, improve production flow, control manufacturing cost, and improve product reliability.",
    icon: FaScrewdriverWrench,
  },
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-product-design-engineering"
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
                name: "Product Design & Engineering",
                item: "https://www.asbconsulting.in/product-design-engineering",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-product-design-engineering"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/product-design-engineering#webpage",
            url: "https://www.asbconsulting.in/product-design-engineering",
            name: "Product Design & Engineering Services in India",
            description:
              "At AS Business Consulting, we provide professional Product Design & Engineering Services in India to help businesses, manufacturers, startups, and innovators convert ideas into practical, functional, and market-ready products.",
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
                Product Design • CAD • Engineering
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Product Design & Engineering Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                At AS Business Consulting, we provide professional Product
                Design & Engineering Services in India to help businesses,
                manufacturers, startups, and innovators convert ideas into
                practical, functional, and market-ready products.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Get a Free Quote <FaArrowRight />
                </a>

                <a
                  href="/our-services"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] bg-white/10 border border-white/20 p-5 md:p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-[#f7f0f8] p-5 md:p-6 text-[#502D52]">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaCompassDrafting className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">2D Drawings</p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaCube className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">3D CAD Modeling</p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaGears className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Concept to Manufacturing
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      From initial sketches to prototype-ready CAD files,
                      assembly drawings, BOM, and manufacturing documentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">CAD/CAM</p>
                <p className="text-sm text-gray-500">Engineering Support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Strip */}
        <section className="relative -mt-10 z-10">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-[2rem] bg-white p-5 shadow-xl border border-[#eaddec]">
              {[
                "Concept to Product",
                "Precision Engineering",
                "Manufacturing Ready",
                "Cost Effective",
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
              Product Design That Balances Creativity, Engineering, and
              Manufacturing
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Practical Product Engineering for Real-World Manufacturing
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              We understand that a successful product is not only about
              appearance. It must also perform well, be reliable, easy to
              manufacture, cost-effective, and suitable for real-world use. That
              is why our product design approach focuses on balancing
              creativity, engineering accuracy, performance, quality, material
              selection, usability, and production feasibility.
            </p>

            <p className="leading-relaxed text-gray-600">
              Our services are ideal for companies looking for CAD design
              services in India, mechanical product design, 3D modeling
              services, CAD/CAM outsourcing, prototype development, reverse
              engineering, industrial product design, and manufacturing-ready
              product development.
            </p>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                From Idea to Engineering
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                Concept to Functional Product Development
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                Every product begins with an idea, but turning that idea into a
                usable product requires technical planning, engineering
                knowledge, and accurate design execution. At AS Business
                Consulting, we help you convert rough sketches, reference
                images, existing samples, hand-drawn concepts, or early-stage
                product ideas into complete engineering designs.
              </p>

              <p className="leading-relaxed text-gray-600 mb-4">
                Our product design team studies the purpose of the product, its
                usage, dimensions, functionality, material requirements,
                manufacturing process, assembly method, and cost expectations
                before developing the final design.
              </p>

              <p className="leading-relaxed text-gray-600">
                Whether you are developing a new product from scratch or
                improving an existing product, we provide structured design
                support from concept development to prototype-ready CAD files.
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

        {/* Mechanical + CAD + DFM Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {engineeringCards.map((item, index) => {
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

        {/* Services We Offer */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center mb-14">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.22em] uppercase mb-3">
                Our Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Product Design & Engineering Services We Offer
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
              {productServices.map((service, index) => {
                const Icon = serviceIcons[index] || FaCircleCheck;

                return (
                  <div
                    key={index}
                    className="rounded-[1.5rem] bg-[#fbf8fc] border border-[#eaddec] p-6 hover:bg-[#502D52] hover:text-white transition group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#502D52] text-white flex items-center justify-center mb-5 group-hover:bg-white group-hover:text-[#502D52] transition">
                      <Icon className="text-2xl" />
                    </div>

                    <h3 className="text-lg font-bold mb-3">{service.title}</h3>

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
                Key Benefits of Our Product Design & Engineering Services
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
                Industries We Serve
              </h2>

              <p className="leading-relaxed text-gray-600">
                AS Business Consulting provides product design and engineering
                support for a wide range of industries.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl bg-[#fbf8fc] border border-[#eaddec] p-4"
                >
                  <div className="w-9 h-9 rounded-full bg-[#502D52] text-white flex items-center justify-center shrink-0">
                    <FaCheckSmall />
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
                  AS Business Consulting combines technical expertise,
                  engineering design knowledge, CAD/CAM capability, and
                  practical manufacturing understanding to deliver reliable
                  product design solutions. We focus on creating designs that
                  are functional, accurate, visually clear, and ready for
                  manufacturing.
                </p>

                <p className="leading-relaxed text-white/80 mb-4">
                  Our team works closely with clients to understand product
                  requirements, business goals, cost expectations, and
                  production needs. This helps us deliver product designs that
                  are suitable for real-world application and long-term use.
                </p>

                <p className="leading-relaxed text-white/80">
                  We are committed to providing quality-driven, cost-effective,
                  and timely product design and engineering services for
                  businesses across India.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Technical Expertise",
                  "CAD/CAM Capability",
                  "Manufacturing Understanding",
                  "Quality-Driven Delivery",
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
                    Turn Your Product Idea into a Market-Ready Solution
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If you have a product idea, machine part, industrial
                    component, appliance concept, plastic product, sheet metal
                    design, or existing sample that needs improvement, AS
                    Business Consulting can help you convert it into a complete
                    engineering design.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for Product Design & Engineering Services
                    in India, including CAD design, 3D modeling, DFM/DFA design,
                    prototype development, reverse engineering, CAD/CAM
                    outsourcing, and manufacturing-ready product documentation.
                  </p>
                </div>

                <div className="lg:text-right">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-7 py-4 font-bold shadow-lg hover:shadow-xl transition"
                  >
                    Discuss Your Project <FaArrowRight />
                  </a>
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
                Our Approach
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Key Points of Our Product Design & Engineering Services
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

const FaCheckSmall = () => <FaCircleCheck className="text-sm" />;

export default Page;