import * as React from "react";
import Link from "next/link";
import Script from "next/script";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaCameraRetro,
  FaCircleCheck,
  FaClockRotateLeft,
  FaCube,
  FaDiagramProject,
  FaEye,
  FaFilm,
  FaGears,
  FaImage,
  FaIndustry,
  FaLayerGroup,
  FaLightbulb,
  FaPalette,
  FaPenRuler,
  FaPhotoFilm,
  FaRocket,
  FaShapes,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Real-Time Rendering & Visualization Services in India | AS Business",
  description:
    "AS Business provides real-time rendering & visualization services in India, including photorealistic 3D visuals, product animations, design validation, and marketing renders.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/research&development/Realtime-renderings-visualization",
  },
};

const visualizationServices = [
  {
    title: "Photorealistic 3D Product Rendering",
    description:
      "We create realistic product renders that show material finish, lighting, shadows, reflections, color, texture, scale, and final product appearance before manufacturing.",
  },
  {
    title: "Real-Time 3D Visualization",
    description:
      "Our real-time visualization support helps clients review product designs from different angles, finishes, colors, and environments for faster decision-making.",
  },
  {
    title: "CAD Model Rendering",
    description:
      "We convert CAD models and 3D product designs into high-quality rendered images for presentations, marketing, client approval, and design review.",
  },
  {
    title: "Product Concept Visualization",
    description:
      "We help convert early product ideas, CAD models, and engineering concepts into clear visual presentations that support discussion and approval.",
  },
  {
    title: "Industrial Product Rendering",
    description:
      "We create professional renders for industrial products, machine parts, equipment, mechanical components, fabrication products, and engineering assemblies.",
  },
  {
    title: "Product Animation and Motion Graphics",
    description:
      "We create product animations that explain product movement, working mechanisms, assembly process, usage, and functionality in a simple visual format.",
  },
  {
    title: "Assembly and Working Mechanism Animation",
    description:
      "We prepare animations that show how components move, assemble, interact, or function within a product or engineering system.",
  },
  {
    title: "Material and Finish Visualization",
    description:
      "We create visual options for different materials, textures, surface finishes, colors, reflections, and presentation styles.",
  },
  {
    title: "Color and Design Variation Renders",
    description:
      "We create multiple design, color, material, and finish variations to help clients compare options and make better product decisions.",
  },
  {
    title: "Marketing-Ready Product Visuals",
    description:
      "We create visuals suitable for websites, catalogs, brochures, ecommerce listings, social media, advertisements, and sales presentations.",
  },
  {
    title: "Website and Catalog Product Renders",
    description:
      "We create clean and professional product renders that can be used in websites, digital catalogs, print catalogs, and product brochures.",
  },
  {
    title: "Presentation Visuals for Client Approval",
    description:
      "We prepare presentation-ready visuals that help clients, investors, vendors, and internal teams understand and approve product concepts.",
  },
  {
    title: "Prototype Visualization Before Manufacturing",
    description:
      "We help businesses visualize products before physical prototyping, tooling, or production, reducing early-stage uncertainty and cost.",
  },
  {
    title: "Technical Product Visualization",
    description:
      "We create technical visuals that explain product structure, components, assembly logic, usage, and functionality clearly.",
  },
  {
    title: "Exploded View Rendering",
    description:
      "We create exploded view renders that explain component placement, product structure, assembly sequence, and internal design logic.",
  },
  {
    title: "360-Degree Product Visualization",
    description:
      "We create 360-degree product visualization assets that help viewers understand the product from all important angles.",
  },
  {
    title: "Investor Pitch and Sales Presentation Visuals",
    description:
      "We create polished visuals for pitch decks, sales proposals, product launches, investor discussions, and business presentations.",
  },
];

const benefits = [
  {
    title: "Better Design Understanding",
    description:
      "Realistic visuals help clients, teams, and stakeholders understand the product design more clearly compared to technical drawings or CAD files alone.",
  },
  {
    title: "Faster Design Approval",
    description:
      "Photorealistic renderings make it easier to review product appearance, materials, proportions, color combinations, and finishing before manufacturing.",
  },
  {
    title: "Reduced Prototype Dependency",
    description:
      "Businesses can visualize and present products before making physical prototypes, helping reduce early-stage cost and development time.",
  },
  {
    title: "Stronger Marketing Presentation",
    description:
      "High-quality product renders can be used in websites, brochures, catalogs, presentations, social media, and sales material before the product is launched.",
  },
  {
    title: "Improved Stakeholder Communication",
    description:
      "Real-time visualization helps explain design intent to investors, clients, vendors, manufacturers, and internal decision-makers in a simple and effective way.",
  },
  {
    title: "Early Detection of Design Issues",
    description:
      "By viewing realistic product visuals from different angles, teams can identify proportion, material, finishing, or usability concerns before production.",
  },
  {
    title: "Support for Product Variations",
    description:
      "We can create multiple design, color, material, and finish variations to help clients compare options and make better decisions.",
  },
  {
    title: "Professional Brand Image",
    description:
      "High-quality visuals improve the overall presentation of your product and help your business appear more professional, innovative, and reliable.",
  },
];

const industries = [
  "Product design companies",
  "Manufacturing businesses",
  "Industrial equipment manufacturers",
  "Consumer product brands",
  "Automotive component companies",
  "Appliance manufacturers",
  "Furniture and fixture companies",
  "Engineering and R&D teams",
  "Startup product developers",
  "CAD/CAM outsourcing projects",
  "Marketing and sales teams",
  "Prototype development companies",
  "Architecture and interior product visualization projects",
];

const keyPoints = [
  {
    title: "Photorealistic Product Visuals",
    description:
      "We create realistic product renders that show material finish, lighting, shadows, reflections, color, texture, and final product appearance before manufacturing.",
  },
  {
    title: "CAD to Render Conversion",
    description:
      "Our team converts CAD models and 3D product designs into high-quality rendered images that can be used for presentations, marketing, approval, and design review.",
  },
  {
    title: "Real-Time Design Visualization",
    description:
      "Real-time visualization helps clients review the product from different angles, finishes, colors, and environments, making design decisions faster and clearer.",
  },
  {
    title: "Product Animation Support",
    description:
      "We create product animations to explain assembly, working mechanisms, movement, usage, and product functionality in a simple visual format.",
  },
  {
    title: "Marketing-Ready Renders",
    description:
      "Our renders can be used for websites, catalogs, brochures, social media, advertisements, ecommerce listings, and sales presentations before the physical product is ready.",
  },
  {
    title: "Better Stakeholder Approval",
    description:
      "Photorealistic visuals help clients, investors, vendors, and internal teams understand the design clearly and approve product concepts with more confidence.",
  },
  {
    title: "Reduced Development Cost",
    description:
      "Visualization helps reduce dependency on multiple physical prototypes by allowing design review and concept validation at an early stage.",
  },
  {
    title: "Material and Color Variation",
    description:
      "We can create multiple variations of the same product with different materials, colors, textures, finishes, and presentation styles.",
  },
  {
    title: "Exploded View and Assembly Visualization",
    description:
      "Exploded view renders help explain product structure, component placement, and assembly sequence in a clear and professional way.",
  },
  {
    title: "Useful for Multiple Industries",
    description:
      "Our visualization services support industrial products, consumer products, appliances, furniture, machine parts, automotive components, and startup product ideas.",
  },
];

const serviceIcons: IconType[] = [
  FaCameraRetro,
  FaEye,
  FaCube,
  FaLightbulb,
  FaIndustry,
  FaFilm,
  FaGears,
  FaPalette,
  FaShapes,
  FaPhotoFilm,
  FaImage,
  FaPenRuler,
  FaRocket,
  FaDiagramProject,
  FaLayerGroup,
  FaClockRotateLeft,
  FaWandMagicSparkles,
];

const benefitIcons: IconType[] = [
  FaEye,
  FaCircleCheck,
  FaRocket,
  FaPhotoFilm,
  FaDiagramProject,
  FaWandMagicSparkles,
  FaPalette,
  FaShapes,
];

const processItems = [
  {
    title: "CAD to Render",
    icon: FaCube,
  },
  {
    title: "Realistic Visuals",
    icon: FaCameraRetro,
  },
  {
    title: "Animation",
    icon: FaFilm,
  },
  {
    title: "Marketing Assets",
    icon: FaPhotoFilm,
  },
];

const visualizationCards = [
  {
    title: "Photorealistic 3D Product Rendering",
    description:
      "Our 3D product rendering services help transform CAD models and product designs into realistic images that show how the final product will look in real-world conditions. We focus on materials, lighting, reflections, shadows, surface finish, textures, scale, and presentation angle to create visually accurate and professional renders.",
    icon: FaCameraRetro,
  },
  {
    title: "Real-Time Visualization for Design Validation",
    description:
      "Real-time visualization helps design teams and stakeholders review products quickly from different angles, materials, colors, and environments. It allows faster decision-making by showing how the design may appear after manufacturing.",
    icon: FaEye,
  },
  {
    title: "Product Animation and Motion Visualization",
    description:
      "Static images are helpful, but product animations can explain movement, assembly, working mechanism, usage, and functionality in a much clearer way. We create product animations and 3D visual presentations that simplify complex engineering concepts.",
    icon: FaFilm,
  },
  {
    title: "Marketing-Ready Product Visuals Before Manufacturing",
    description:
      "One of the biggest advantages of real-time rendering and visualization is that businesses can create marketing content before the product is physically manufactured. This helps companies start promotions, collect feedback, prepare catalogs, update websites, and present product ideas early.",
    icon: FaPhotoFilm,
  },
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-real-time-rendering-visualization"
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
                name: "Real-Time Rendering & Visualization",
                item: "https://www.asbconsulting.in/research&development/real-time-rendering-visualization",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-real-time-rendering-visualization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/research&development/real-time-rendering-visualization#webpage",
            url: "https://www.asbconsulting.in/research&development/real-time-rendering-visualization",
            name: "Real-Time Rendering & Visualization Services in India",
            description:
              "AS Business provides professional Real-Time Rendering & Visualization Services in India to help businesses, manufacturers, product developers, and engineering teams present their designs with clarity, realism, and visual impact.",
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
                Rendering • Visualization • Product Animation
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Real-Time Rendering & Visualization Services in India
              </h1>

              <p className="text-base md:text-lg leading-relaxed text-white/85 mb-8 max-w-2xl">
                AS Business provides professional Real-Time Rendering &
                Visualization Services in India to help businesses,
                manufacturers, product developers, and engineering teams present
                their designs with clarity, realism, and visual impact.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-[#502D52] px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Visualize Your Product <FaArrowRight />
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
                      <FaCameraRetro className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        Photorealistic Renders
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <FaFilm className="text-4xl mb-5" />
                      <p className="text-sm font-semibold">
                        Product Animation
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#502D52] text-white p-6">
                    <FaEye className="text-5xl mb-6 text-[#f3d6f6]" />
                    <h3 className="text-2xl font-bold mb-3">
                      Visualize Before Manufacturing
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Convert CAD models, product concepts, and engineering
                      designs into photorealistic visuals, animations, and
                      marketing-ready presentations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 hidden md:block rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-[#502D52] font-bold text-3xl">3D</p>
                <p className="text-sm text-gray-500">
                  Product Rendering & Visuals
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
                "Photorealistic Product Visuals",
                "Real-Time Design Validation",
                "Product Animation Support",
                "Marketing-Ready Renders",
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
              Clearer Designs. Better Approval. Stronger Presentation.
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#211827]">
              Realistic Product Visualization for Design, Marketing, and
              Manufacturing Decisions
            </h2>

            <p className="leading-relaxed text-gray-600 mb-4">
              Our rendering and visualization services convert CAD models,
              product concepts, engineering designs, and 3D models into
              photorealistic visuals, animations, walkthroughs, and
              presentation-ready graphics.
            </p>

            <p className="leading-relaxed text-gray-600 mb-4">
              In today’s competitive market, visual presentation plays an
              important role in product development, client approval, investor
              discussion, marketing, and pre-manufacturing validation. A product
              may be technically strong, but realistic visualization helps
              stakeholders understand its design, appearance, proportions,
              materials, finishing, and functionality before actual production
              begins.
            </p>

            <p className="leading-relaxed text-gray-600">
              At AS Business, we create high-quality 3D renderings and visual
              outputs that help clients validate product ideas, communicate
              design intent, reduce uncertainty, and support marketing even
              before tooling, prototyping, or manufacturing starts.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-lg border border-[#eaddec]">
              <p className="text-[#502D52] text-sm font-bold tracking-[0.18em] uppercase mb-3">
                Real-Time Renderings & Visualization
              </p>

              <h2 className="text-3xl md:text-5xl font-bold mb-5 text-[#211827]">
                Convert CAD Models into Photorealistic Visuals, Animations, and
                Presentations
              </h2>

              <p className="leading-relaxed text-gray-600 mb-4">
                AS Business provides professional real-time rendering and
                visualization services in India to convert CAD models, product
                concepts, and engineering designs into photorealistic visuals,
                animations, and marketing-ready presentations.
              </p>

              <p className="leading-relaxed text-gray-600">
                Our visualization services help clients validate designs,
                compare materials and finishes, explain product functionality,
                support stakeholder approval, and promote products before
                manufacturing or tooling begins.
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

        {/* Visualization Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {visualizationCards.map((item, index) => {
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
                Our Visualization Services
              </p>

              <h2 className="text-3xl md:text-5xl font-bold text-[#211827]">
                Our Real-Time Rendering & Visualization Services Include
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {visualizationServices.map((service, index) => {
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
                Key Benefits of Real-Time Rendering & Visualization
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
                Our real-time rendering and visualization services are suitable
                for product designers, manufacturers, engineering teams,
                startups, marketing teams, and product development companies.
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
                  AS Business combines product design understanding, CAD/CAM
                  knowledge, engineering detailing, and visual presentation
                  skills to deliver high-quality rendering and visualization
                  services. We do not create visuals only for decoration; we
                  create visuals that help clients validate designs,
                  communicate ideas, support marketing, and make confident
                  product development decisions.
                </p>

                <p className="leading-relaxed text-white/80">
                  Our rendering process focuses on realistic materials, accurate
                  proportions, clean lighting, professional presentation, and
                  practical product communication. Whether you need product
                  renders, CAD visualizations, animations, exploded views, or
                  marketing visuals, AS Business can support your complete
                  visualization requirement.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Realistic Materials",
                  "Accurate Proportions",
                  "Professional Presentation",
                  "Marketing-Ready Output",
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
                    Visualize Your Product Before Manufacturing
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    If you have a product concept, CAD model, engineering
                    design, prototype idea, or industrial component that needs
                    realistic presentation, AS Business can help you create
                    professional visuals before manufacturing.
                  </p>

                  <p className="text-white/80 leading-relaxed">
                    Contact us today for Real-Time Rendering & Visualization
                    Services in India, including photorealistic 3D rendering,
                    CAD rendering, product animation, design visualization, and
                    marketing-ready product visuals.
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
                Key Points of Real-Time Rendering & Visualization Services
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