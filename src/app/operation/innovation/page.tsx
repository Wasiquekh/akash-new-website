import * as React from "react";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "Innovation Consulting in India | AS Business Consulting",
  description:
    "AS Business Consulting provides innovation consulting for product benchmarking, process improvement, cost saving, technology updation, and operational efficiency.",
  alternates: {
    canonical: "https://www.asbconsulting.in/operation/innovation",
  },
};

const page = () => {
  const deliverables = [
    {
      title: "Product & Process Benchmarking",
      desc: "We compare your existing products, processes, systems, and performance levels with industry practices, competitor standards, customer expectations, and operational benchmarks.",
      points: [
        "Product quality comparison",
        "Cycle-time analysis",
        "Machine performance review",
        "Cost comparison",
        "Defect and productivity measurement",
      ],
    },
    {
      title: "Cost Saving Opportunities",
      desc: "We identify areas where your business can reduce unnecessary cost without affecting product quality or customer satisfaction.",
      points: [
        "Material wastage reduction",
        "Rework and downtime control",
        "Inventory optimization",
        "Energy and logistics efficiency",
        "Sustainable profitability improvement",
      ],
    },
    {
      title: "Technology Updation",
      desc: "We help businesses evaluate where technology can improve operations, quality control, reporting, planning, and workflow tracking.",
      points: [
        "MIS dashboards",
        "OEE tracking",
        "Barcode systems",
        "ERP improvements",
        "Automation opportunity review",
      ],
    },
  ];

  const benefits = [
    "Improved operational efficiency",
    "Reduced production cost",
    "Better product quality",
    "Higher productivity",
    "Stronger market competitiveness",
    "Smarter decision-making",
  ];

  const keyAreas = [
    "Product benchmarking",
    "Process benchmarking",
    "Cost-saving analysis",
    "Technology gap assessment",
    "Production process improvement",
    "Product quality comparison",
    "Waste reduction planning",
    "Rework and rejection reduction",
    "Machine utilization review",
    "Manpower productivity review",
    "Cycle-time analysis",
    "Layout improvement suggestions",
    "Digital process improvement",
    "MIS and performance tracking",
    "OEE monitoring support",
    "Automation opportunity identification",
    "Inventory and material flow improvement",
    "Energy and resource optimization",
    "Operational innovation roadmap",
    "Continuous improvement planning",
  ];

  const applications = [
    {
      title: "For Manufacturing Units",
      desc: "We help manufacturing businesses improve production methods, reduce defects, optimize machine usage, reduce wastage, and upgrade outdated processes.",
    },
    {
      title: "For MSMEs",
      desc: "We help MSMEs improve productivity, reduce costs, and adopt practical technology without unnecessary complexity.",
    },
    {
      title: "For Export-Oriented Businesses",
      desc: "We help businesses improve quality, consistency, documentation, and process control to meet higher customer and compliance expectations.",
    },
    {
      title: "For Growing Companies",
      desc: "We help companies redesign processes and systems so they can scale smoothly as business volume increases.",
    },
    {
      title: "For Businesses Facing High Costs",
      desc: "We identify root causes behind rising production cost, manpower cost, inventory cost, and rework cost.",
    },
    {
      title: "For Digital Transformation",
      desc: "We help businesses understand which technology upgrades are useful, affordable, and suitable for their operations.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Current Process Study",
      desc: "We understand your product flow, production process, manpower usage, machine performance, cost structure, technology usage, and operational challenges.",
    },
    {
      step: "02",
      title: "Benchmarking & Gap Analysis",
      desc: "We compare your current performance with industry practices, customer expectations, internal targets, and operational standards.",
    },
    {
      step: "03",
      title: "Cost & Waste Identification",
      desc: "We identify avoidable costs, hidden losses, wastage points, rework areas, downtime causes, and inefficient process steps.",
    },
    {
      step: "04",
      title: "Technology Opportunity Review",
      desc: "We study where technology can improve tracking, reporting, quality control, planning, inventory control, and process visibility.",
    },
    {
      step: "05",
      title: "Improvement Roadmap",
      desc: "We prepare a practical innovation roadmap with improvement actions, cost-saving opportunities, technology updates, timelines, and expected impact.",
    },
    {
      step: "06",
      title: "Implementation Support",
      desc: "We support your team in implementing selected improvements, monitoring results, and creating a continuous improvement culture.",
    },
  ];

  const whyChoose = [
    {
      title: "Practical Innovation Approach",
      desc: "We focus on improvements that are realistic, measurable, and suitable for your business size and operational capacity.",
    },
    {
      title: "Strong Operations Understanding",
      desc: "Our team understands manufacturing, lean systems, quality improvement, process audits, productivity improvement, and cost optimization.",
    },
    {
      title: "Cost-Saving Focus",
      desc: "We identify savings that improve profitability without damaging quality, delivery, or customer experience.",
    },
    {
      title: "Technology With Purpose",
      desc: "We recommend technology only where it can improve efficiency, control, reporting, or business performance.",
    },
    {
      title: "End-to-End Support",
      desc: "From benchmarking and gap analysis to cost-saving plans, technology updates, and implementation support, we guide the full improvement cycle.",
    },
  ];

  const typicalDeliverables = [
    "Product benchmarking report",
    "Process benchmarking report",
    "Cost-saving opportunity report",
    "Technology gap assessment",
    "Innovation roadmap",
    "Process improvement action plan",
    "Waste reduction plan",
    "Rework and rejection reduction plan",
    "Productivity improvement suggestions",
    "Machine utilization review",
    "Manpower productivity review",
    "Cycle-time analysis",
    "Layout improvement observations",
    "Digital improvement recommendations",
    "MIS and dashboard suggestions",
    "OEE tracking framework",
    "Continuous improvement tracker",
    "Implementation priority matrix",
    "Management review presentation",
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
        id="breadcrumb-schema-innovation"
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
                name: "Innovation Consulting",
                item: "https://www.asbconsulting.in/innovation",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-innovation"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/innovation#webpage",
            url: "https://www.asbconsulting.in/innovation",
            name: "Innovation Consulting in India | AS Business Consulting",
            description:
              "AS Business Consulting provides innovation consulting for product benchmarking, process improvement, cost saving, technology updation, and operational efficiency.",
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
                    Innovation Consulting
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Improve Products,
                  <span className="block">Reduce Costs &</span>
                  <span className="block">Upgrade Operations</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/90 md:text-base md:leading-8">
                  At AS Business Consulting, our Innovation Consulting services
                  help manufacturing and service-based businesses improve
                  products, upgrade processes, reduce operational costs, and
                  adopt better technology for long-term competitiveness.
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
                      Business Improvement Areas
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-primary">
                      Practical Innovation for Better Efficiency, Cost Control &
                      Growth
                    </h3>

                    <div className="mt-7 space-y-4">
                      {[
                        "Product & Process Benchmarking",
                        "Cost Saving Opportunities",
                        "Technology Updation",
                        "Operational Improvement Roadmap",
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
                  <p className="text-2xl font-black">360°</p>
                  <p className="text-xs font-black uppercase tracking-wide">
                    Operational Review
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
                  Innovation Means Better Business Performance.
                </h2>
              </div>

              <div className="space-y-5 text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                <p>
                  Many businesses lose profit because of outdated processes,
                  inefficient production methods, high rejection rates,
                  unnecessary manual work, poor resource utilization, and slow
                  technology adoption.
                </p>

                <p>
                  We help companies benchmark their products and processes,
                  compare performance with industry standards, identify
                  cost-saving opportunities, and implement technology updates
                  that improve efficiency, quality, productivity, and
                  profitability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section id="innovation-services" className="bg-primary py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                What AS Business Consulting Delivers
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Practical Innovation Support for Real Operational Improvement
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
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
                  Better Efficiency, Better Quality, Better Profitability
                </h2>
              </div>

              <p className="self-end text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                Innovation consulting helps your business improve daily
                operations, reduce hidden losses, increase output, and make
                smarter decisions using real performance data.
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
                From Benchmarking to Digital Process Improvement
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
                Designed for Manufacturing, MSMEs, Exporters & Growing
                Companies
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
                A Clear Roadmap from Study to Implementation
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
                  Innovation That Is Realistic, Measurable & Business-Focused
                </h2>

                <p className="text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                  We do not suggest random modernization. We recommend practical
                  improvements that can improve efficiency, quality, reporting,
                  cost control, and long-term business performance.
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
                Reports, Roadmaps, Trackers & Action Plans for Management
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
                Improve Products, Reduce Costs & Upgrade Your Operations
              </h2>

              <p className="mx-auto mb-7 max-w-3xl text-sm font-medium leading-7 md:text-base md:leading-8">
                Connect with AS Business Consulting to identify benchmarking
                opportunities, cost-saving areas, and technology updates that can
                make your business more efficient, competitive, and future-ready.
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