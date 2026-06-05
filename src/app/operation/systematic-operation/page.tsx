import * as React from "react";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "Systematic Operation Consulting in India | AS Business Consulting",
  description:
    "AS Business Consulting provides systematic operation services including 5S implementation, SOP creation, SCM management, process standardization, documentation, and operational control.",
  alternates: {
    canonical: "https://www.asbconsulting.in/operation/systematic-operation",
  },
};

const page = () => {
  const deliverables = [
    {
      title: "5S Implementation",
      desc: "We help businesses implement the 5S system to create a clean, organized, safe, and efficient workplace.",
      points: [
        "Workplace sorting and arrangement",
        "Cleaning and standardization",
        "Material flow improvement",
        "Searching time reduction",
        "Employee discipline improvement",
      ],
    },
    {
      title: "SOP Creation",
      desc: "We create practical Standard Operating Procedures so employees know exactly what needs to be done, how it should be done, and who is responsible.",
      points: [
        "Process-wise SOP documentation",
        "Role and responsibility clarity",
        "Training support documents",
        "Error reduction",
        "Consistent work execution",
      ],
    },
    {
      title: "SCM Management",
      desc: "We support businesses in improving Supply Chain Management by reviewing procurement, vendor coordination, inventory planning, material movement, and delivery performance.",
      points: [
        "Procurement process review",
        "Vendor coordination improvement",
        "Inventory control system",
        "Material movement tracking",
        "Delivery performance improvement",
      ],
    },
    {
      title: "Process Standardization",
      desc: "We help standardize daily operational activities so work is performed consistently across teams, shifts, departments, and locations.",
      points: [
        "Standard work methods",
        "Department-wise process flow",
        "Shift-wise consistency",
        "Quality variation reduction",
        "Operational accountability",
      ],
    },
    {
      title: "Documentation & Control Systems",
      desc: "We create registers, checklists, formats, trackers, dashboards, and reporting systems that allow management to monitor daily operations effectively.",
      points: [
        "Operational checklists",
        "Daily reporting formats",
        "Inventory trackers",
        "Vendor trackers",
        "Management review formats",
      ],
    },
    {
      title: "Operational Discipline",
      desc: "We help businesses create a culture of organized working, timely reporting, clear responsibilities, and regular review.",
      points: [
        "Timely work reporting",
        "Clear responsibility mapping",
        "Review discipline",
        "System adoption monitoring",
        "Long-term process control",
      ],
    },
  ];

  const benefits = [
    "Better Workplace Organization",
    "Consistent Work Quality",
    "Reduced Operational Confusion",
    "Improved Supply Chain Control",
    "Faster Employee Training",
    "Lower Wastage & Delays",
    "Better Scalability",
  ];

  const keyAreas = [
    "5S implementation",
    "Workplace organization",
    "SOP creation",
    "Standard Operating Procedure documentation",
    "SCM management",
    "Supply chain process improvement",
    "Procurement process review",
    "Vendor coordination improvement",
    "Inventory control system",
    "Material flow improvement",
    "Stock monitoring formats",
    "Reorder level planning",
    "Process standardization",
    "Operational checklist creation",
    "Department-wise responsibility mapping",
    "Daily work control systems",
    "Documentation formats",
    "Internal reporting structure",
    "Process audit readiness",
    "Operational performance tracking",
  ];

  const applications = [
    {
      title: "For Manufacturing Units",
      desc: "We help manufacturing businesses organize shop floors, standardize production activities, improve material flow, create SOPs, and strengthen supply chain control.",
    },
    {
      title: "For MSMEs",
      desc: "MSMEs often work with informal processes and limited documentation. We help them create simple, practical, and easy-to-follow systems for daily operations.",
    },
    {
      title: "For Warehouses & Stores",
      desc: "5S and SCM systems help warehouses improve stock arrangement, material identification, inward-outward tracking, inventory control, and dispatch accuracy.",
    },
    {
      title: "For Procurement Teams",
      desc: "We help procurement teams improve vendor coordination, purchase planning, material availability, approval flow, and cost control.",
    },
    {
      title: "For Growing Businesses",
      desc: "As businesses grow, informal working methods become difficult to manage. Systematic operation support helps create structure for scale and consistency.",
    },
    {
      title: "For Quality-Focused Companies",
      desc: "SOPs, checklists, process controls, and documentation systems help maintain consistent quality and improve audit readiness.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Current Operation Study",
      desc: "We study your existing workplace setup, workflow, documentation, procurement process, inventory system, vendor coordination, and daily operational challenges.",
    },
    {
      step: "02",
      title: "Gap Identification",
      desc: "We identify weak areas such as poor workplace arrangement, missing SOPs, unclear responsibilities, material delays, stock mismatch, vendor issues, and process variation.",
    },
    {
      step: "03",
      title: "System Design",
      desc: "We design practical systems for 5S implementation, SOP creation, SCM improvement, documentation, reporting, and process standardization.",
    },
    {
      step: "04",
      title: "Documentation Development",
      desc: "We prepare SOPs, checklists, formats, responsibility matrices, inventory trackers, vendor trackers, and operational control documents.",
    },
    {
      step: "05",
      title: "Implementation Support",
      desc: "We support your team in implementing 5S, following SOPs, improving SCM practices, and using operational trackers effectively.",
    },
    {
      step: "06",
      title: "Monitoring & Improvement",
      desc: "We help monitor system adoption, review performance, close gaps, and improve the process continuously.",
    },
  ];

  const whyChoose = [
    {
      title: "Practical Implementation Focus",
      desc: "We do not only prepare documents. We help businesses implement systems that are useful in daily operations.",
    },
    {
      title: "Strong Operations Understanding",
      desc: "Our team understands shop-floor management, process control, lean practices, supply chain coordination, documentation, and audit readiness.",
    },
    {
      title: "Simple & Usable SOPs",
      desc: "We create SOPs that employees can actually understand and follow, instead of complicated documents that remain unused.",
    },
    {
      title: "Better Control for Management",
      desc: "Our systems help owners and managers track work, inventory, procurement, vendor performance, and process discipline more clearly.",
    },
    {
      title: "Long-Term Operational Stability",
      desc: "We help businesses move from person-dependent operations to process-driven systems that support growth and consistency.",
    },
  ];

  const typicalDeliverables = [
    "5S implementation plan",
    "5S audit checklist",
    "Workplace organization report",
    "SOP documents",
    "Process flow documents",
    "Department-wise responsibility matrix",
    "SCM improvement plan",
    "Procurement process review",
    "Vendor management tracker",
    "Inventory control format",
    "Stock movement tracker",
    "Reorder level planning format",
    "Material flow improvement suggestions",
    "Operational checklist formats",
    "Daily reporting formats",
    "Process standardization report",
    "Documentation gap report",
    "Corrective action plan",
    "Internal audit readiness checklist",
    "Management review format",
  ];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html, body {
              overflow-x: hidden !important;
              max-width: 100% !important;
            }

            * {
              box-sizing: border-box;
            }
          `,
        }}
      />

      <Script
        id="breadcrumb-schema-systematic-operation"
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
                name: "Systematic Operation",
                item: "https://www.asbconsulting.in/systematic-operation",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-systematic-operation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/systematic-operation#webpage",
            url: "https://www.asbconsulting.in/systematic-operation",
            name: "Systematic Operation Consulting in India | AS Business Consulting",
            description:
              "AS Business Consulting provides systematic operation services including 5S implementation, SOP creation, SCM management, process standardization, documentation, and operational control.",
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

      <main className="w-full max-w-full overflow-x-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-white/10"></div>
            <div className="absolute -right-40 bottom-10 h-[360px] w-[360px] rounded-full bg-white/10"></div>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-lg shadow-white/10">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span className="text-xs font-black uppercase tracking-[3px] text-primary">
                    Systematic Operation
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Build Structure,
                  <span className="block">Improve Discipline &</span>
                  <span className="block">Control Operations</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/90 md:text-base md:leading-8">
                  At AS Business Consulting, our Systematic Operation services
                  help businesses bring structure, discipline, and consistency
                  into daily operations through 5S implementation, SOP creation,
                  SCM management, process standardization, documentation, and
                  performance tracking.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/our-services"
                    className="rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-wide text-primary shadow-lg shadow-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore Services
                  </a>

                  <a
                    href="/contact"
                    className="rounded-full border border-white px-7 py-4 text-xs font-black uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-primary"
                  >
                    Get Consultation
                  </a>
                </div>
              </div>

              <div className="relative w-full max-w-full">
                <div className="rounded-[34px] bg-white/15 p-4 shadow-2xl shadow-black/10 backdrop-blur-sm md:p-5">
                  <div className="rounded-[28px] bg-white p-6 text-primary md:p-7">
                    <p className="text-xs font-black uppercase tracking-[3px] text-primary/70">
                      Operation Control Areas
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-primary">
                      Practical Systems for Organized, Consistent & Scalable
                      Operations
                    </h3>

                    <div className="mt-7 space-y-4">
                      {[
                        "5S Implementation",
                        "SOP Creation",
                        "SCM Management",
                        "Process Standardization",
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 rounded-2xl border border-primary/20 bg-white p-4 transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                            0{index + 1}
                          </div>

                          <h4 className="text-base font-black leading-snug">
                            {item}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 left-8 hidden rounded-2xl bg-white px-6 py-4 text-primary shadow-xl shadow-black/10 md:block">
                  <p className="text-2xl font-black">5S</p>
                  <p className="text-xs font-black uppercase tracking-wide">
                    Workplace Discipline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="bg-white py-14 text-primary md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 rounded-[30px] border border-primary/20 bg-white p-6 shadow-lg shadow-primary/10 md:p-10 lg:grid-cols-[360px_1fr]">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-primary">
                  Overview
                </p>
                <h2 className="text-3xl font-black leading-tight text-primary md:text-5xl">
                  Strong Operations Need Clear Systems, Not Guesswork.
                </h2>
              </div>

              <div className="space-y-5 text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                <p>
                  Many businesses depend heavily on people-based working methods
                  instead of system-based operations. This often leads to
                  confusion, repeated mistakes, poor coordination, inconsistent
                  quality, delayed work, material mismanagement, and weak
                  accountability.
                </p>

                <p>
                  A systematic operation model helps the business run smoothly
                  even when teams change, workloads increase, or customer
                  expectations become stricter. Our approach builds clear
                  systems through 5S, SOPs, SCM control, documentation, and
                  performance tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section
          id="systematic-operation-services"
          className="bg-primary py-14 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                What AS Business Consulting Delivers
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Systems, SOPs, Supply Chain Control & Operational Discipline
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {deliverables.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[26px] bg-white p-6 text-primary transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="mb-5 flex items-start justify-between gap-5">
                    <p className="text-4xl font-black leading-none">
                      0{index + 1}
                    </p>
                    <span className="rounded-full border border-primary/30 px-4 py-2 text-xs font-black uppercase tracking-wide">
                      Service
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-black leading-snug">
                    {item.title}
                  </h3>

                  <p className="mb-5 text-sm font-medium leading-6 text-primary/90">
                    {item.desc}
                  </p>

                  <div className="space-y-3">
                    {item.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                          <FaCheck className="text-[10px]" />
                        </span>
                        <p className="text-sm font-bold leading-5">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white py-14 text-primary md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[420px_1fr]">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[3px]">
                  Benefits
                </p>
                <h2 className="text-3xl font-black leading-tight md:text-5xl">
                  Organized Workplaces, Clear SOPs & Better Operational Control
                </h2>
              </div>

              <p className="self-end text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                Systematic operation helps reduce confusion, improve
                consistency, control supply chain issues, reduce wastage, train
                employees faster, and make the business easier to scale.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-primary/25 bg-white p-6 shadow-sm shadow-primary/10 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <p className="mb-4 text-3xl font-black">0{index + 1}</p>
                  <h3 className="text-lg font-black leading-snug">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY AREAS */}
        <section className="bg-primary py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                Key Areas We Cover
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                From 5S Implementation to Operational Performance Tracking
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {keyAreas.map((area, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/60 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-primary"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="bg-white py-14 text-primary md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px]">
                Applications
              </p>
              <h2 className="text-3xl font-black leading-tight md:text-5xl">
                Useful for Manufacturing, MSMEs, Warehouses, Procurement Teams &
                Growing Businesses
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {applications.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[26px] border border-primary/25 bg-white p-6 shadow-sm shadow-primary/10 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  <p className="mb-4 text-3xl font-black">0{index + 1}</p>
                  <h3 className="mb-3 text-xl font-black leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-primary py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                Our Process
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                A Clear Roadmap from Operation Study to System Implementation
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[26px] bg-white p-6 text-primary"
                >
                  <p className="mb-4 text-3xl font-black">{item.step}</p>
                  <h3 className="mb-3 text-xl font-black">{item.title}</h3>
                  <p className="text-sm font-medium leading-6 text-primary/90">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="bg-white py-14 text-primary md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[400px_1fr]">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[3px]">
                  Why Choose AS Business Consulting?
                </p>

                <h2 className="mb-5 text-3xl font-black leading-tight md:text-5xl">
                  Practical Systems That Your Team Can Actually Use
                </h2>

                <p className="text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                  We help businesses move from person-dependent operations to
                  process-driven systems through practical 5S implementation,
                  usable SOPs, SCM controls, documentation, and monitoring
                  systems.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {whyChoose.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[24px] border border-primary/25 bg-white p-6 shadow-sm shadow-primary/10 transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <div className="mb-3 flex items-center gap-4">
                      <p className="text-2xl font-black">0{index + 1}</p>
                      <h3 className="text-lg font-black">{item.title}</h3>
                    </div>
                    <p className="text-sm font-medium leading-6">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TYPICAL DELIVERABLES */}
        <section className="bg-primary py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-10 max-w-4xl text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                Typical Deliverables
              </p>

              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Plans, SOPs, Checklists, Trackers & Review Formats for Better
                Control
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {typicalDeliverables.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 text-primary"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <FaCheck className="text-[10px]" />
                  </span>
                  <p className="text-sm font-bold leading-5">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-white py-14 text-primary md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] bg-primary p-8 text-center text-white md:p-12">
              <h2 className="mx-auto mb-5 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
                Build a More Organized, Disciplined & Scalable Business
              </h2>

              <p className="mx-auto mb-7 max-w-3xl text-sm font-medium leading-7 md:text-base md:leading-8">
                Connect with AS Business Consulting for 5S implementation, SOP
                creation, SCM management, process standardization, and
                systematic operation improvement tailored to your business
                needs.
              </p>

              <a
                href="/contact"
                className="inline-block rounded-full bg-white px-9 py-4 text-sm font-black uppercase tracking-wide text-primary transition-all duration-300 hover:-translate-y-1"
              >
                Speak With Our Experts
              </a>
            </div>
          </div>
        </section>

        <div id="contact-form" className="w-full max-w-full overflow-x-hidden">
          <ContactFrom />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default page;