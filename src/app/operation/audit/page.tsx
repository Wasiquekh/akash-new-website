import * as React from "react";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "MIS & Audit Consulting in India | AS Business Consulting",
  description:
    "AS Business Consulting provides MIS and audit services including business performance analysis, MIS dashboard creation, process audit, system audit, KPI tracking, gap analysis, and corrective action planning.",
  alternates: {
    canonical: "https://www.asbconsulting.in/operation/audit",
  },
};

const page = () => {
  const deliverables = [
    {
      title: "Analysis of Business Performance",
      desc: "We help businesses analyze performance across production, sales, finance, operations, inventory, manpower, quality, procurement, and customer delivery.",
      points: [
        "Cost and productivity review",
        "Revenue and sales trend analysis",
        "Inventory movement review",
        "Manpower utilization analysis",
        "Department-wise output tracking",
      ],
    },
    {
      title: "Process Audit",
      desc: "We conduct process audits to check whether business activities are being performed as per defined methods, SOPs, quality requirements, compliance expectations, and management standards.",
      points: [
        "SOP compliance review",
        "Workflow gap identification",
        "Documentation checking",
        "Approval delay review",
        "Accountability gap analysis",
      ],
    },
    {
      title: "System Audit",
      desc: "We review business systems, internal controls, reporting formats, documentation processes, approval structures, data accuracy, compliance records, and management review mechanisms.",
      points: [
        "Internal control review",
        "Data accuracy checking",
        "Reporting format review",
        "Approval structure analysis",
        "Risk and control gap review",
      ],
    },
    {
      title: "MIS Dashboard Creation",
      desc: "We help businesses create MIS dashboards and reporting formats for management review across important KPIs and business functions.",
      points: [
        "Sales performance dashboard",
        "Production output tracking",
        "Cost and inventory dashboard",
        "Quality and manpower KPIs",
        "Audit observation tracking",
      ],
    },
    {
      title: "Gap Analysis & Corrective Action",
      desc: "After reviewing performance and systems, we prepare gap analysis reports and corrective action plans to move from observation to actual improvement.",
      points: [
        "Gap analysis report",
        "Corrective action plan",
        "Responsibility assignment",
        "Timeline-based action tracking",
        "Improvement follow-up",
      ],
    },
    {
      title: "Management Reporting",
      desc: "We design simple and effective reporting systems that help owners and senior teams review business performance weekly, monthly, or quarterly.",
      points: [
        "Monthly MIS format",
        "Management review summary",
        "KPI reporting structure",
        "Department-wise reporting",
        "Decision-support reports",
      ],
    },
  ];

  const benefits = [
    "Better Business Visibility",
    "Faster Decision-Making",
    "Improved Process Control",
    "Reduced Operational Risk",
    "Higher Accountability",
    "Better Cost & Productivity Management",
    "Stronger Audit Readiness",
  ];

  const keyAreas = [
    "Business performance analysis",
    "MIS dashboard creation",
    "Process audit",
    "System audit",
    "KPI tracking",
    "Production performance review",
    "Sales performance review",
    "Inventory analysis",
    "Cost analysis",
    "Manpower productivity review",
    "Quality performance review",
    "Procurement and vendor performance review",
    "Department-wise reporting",
    "SOP compliance review",
    "Documentation audit",
    "Internal control review",
    "Gap analysis",
    "Corrective action planning",
    "Audit observation tracking",
    "Management review reporting",
    "Monthly MIS reporting format",
    "Business performance dashboard",
  ];

  const applications = [
    {
      title: "For Manufacturing Businesses",
      desc: "We help manufacturing units track production output, rejection rates, machine utilization, manpower productivity, inventory movement, process delays, and operational losses.",
    },
    {
      title: "For MSMEs",
      desc: "MSMEs often depend on informal reporting. We help create simple MIS formats and audit systems that give owners better control over daily business performance.",
    },
    {
      title: "For Growing Companies",
      desc: "As a company grows, manual tracking becomes difficult. MIS and audits help create department-wise visibility and performance discipline.",
    },
    {
      title: "For Operations Teams",
      desc: "Operations teams can use process audits and MIS dashboards to monitor workflow, productivity, delays, SOP compliance, and corrective actions.",
    },
    {
      title: "For Management & Directors",
      desc: "Owners, directors, and senior managers can use structured MIS reports to review financial, operational, quality, sales, and compliance performance.",
    },
    {
      title: "For Audit & Compliance Preparation",
      desc: "Businesses preparing for customer audits, internal audits, statutory reviews, or investor due diligence can use system audits to identify and close gaps in advance.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Business Understanding",
      desc: "We first understand your business model, departments, processes, reporting methods, existing data, management needs, and performance challenges.",
    },
    {
      step: "02",
      title: "Data & Document Review",
      desc: "We review current reports, registers, SOPs, process records, audit reports, financial summaries, production data, sales data, inventory records, and compliance documents.",
    },
    {
      step: "03",
      title: "Process & System Audit",
      desc: "We check whether processes are being followed properly and whether systems are strong enough to control business activities.",
    },
    {
      step: "04",
      title: "Performance Analysis",
      desc: "We analyze important business indicators such as output, cost, quality, productivity, revenue, inventory, delivery, and department-wise performance.",
    },
    {
      step: "05",
      title: "Gap Identification",
      desc: "We identify weak reporting areas, process gaps, control failures, data mismatch, poor documentation, and improvement opportunities.",
    },
    {
      step: "06",
      title: "MIS & Corrective Action Plan",
      desc: "We create MIS formats, dashboards, audit trackers, and corrective action plans with clear responsibilities and timelines.",
    },
    {
      step: "07",
      title: "Review & Monitoring",
      desc: "We support regular review meetings, dashboard updates, audit closure tracking, and continuous improvement monitoring.",
    },
  ];

  const whyChoose = [
    {
      title: "Practical Reporting Approach",
      desc: "We create MIS formats that are simple, useful, and easy for management teams to understand.",
    },
    {
      title: "Strong Audit Understanding",
      desc: "Our audit approach focuses on actual process improvement, not only checklist completion.",
    },
    {
      title: "Business Performance Focus",
      desc: "We connect audit findings with business performance so that reports lead to measurable improvement.",
    },
    {
      title: "Better Management Control",
      desc: "Our MIS and audit systems help owners and managers track performance, identify risks, and monitor corrective actions clearly.",
    },
    {
      title: "Suitable for Different Business Sizes",
      desc: "Our services are useful for MSMEs, manufacturing units, family businesses, growing companies, and established enterprises.",
    },
  ];

  const typicalDeliverables = [
    "Business performance analysis report",
    "MIS dashboard format",
    "Monthly MIS reporting format",
    "Process audit report",
    "System audit report",
    "KPI tracking sheet",
    "Department-wise performance report",
    "Production performance report",
    "Inventory analysis report",
    "Cost analysis report",
    "Manpower productivity report",
    "Quality performance report",
    "Procurement and vendor performance review",
    "SOP compliance report",
    "Documentation audit report",
    "Internal control gap report",
    "Gap analysis report",
    "Corrective action plan",
    "Audit observation tracker",
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
        id="breadcrumb-schema-mis-audit"
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
                name: "MIS & Audit",
                item: "https://www.asbconsulting.in/mis-audit",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-mis-audit"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/mis-audit#webpage",
            url: "https://www.asbconsulting.in/mis-audit",
            name: "MIS & Audit Consulting in India | AS Business Consulting",
            description:
              "AS Business Consulting provides MIS and audit services including business performance analysis, MIS dashboard creation, process audit, system audit, KPI tracking, gap analysis, and corrective action planning.",
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
                    MIS & Audit
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Monitor Performance,
                  <span className="block">Identify Gaps &</span>
                  <span className="block">Improve Control</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/90 md:text-base md:leading-8">
                  At AS Business Consulting, our MIS & Audit services help
                  businesses monitor performance, identify process gaps, improve
                  internal controls, and make better management decisions
                  through structured reporting and audit systems.
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
                      Reporting & Audit Control Areas
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-primary">
                      Practical MIS, Process Audit & System Audit for Better
                      Business Decisions
                    </h3>

                    <div className="mt-7 space-y-4">
                      {[
                        "Business Performance Analysis",
                        "Process Audit",
                        "System Audit",
                        "MIS Dashboard Creation",
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
                  <p className="text-2xl font-black">MIS</p>
                  <p className="text-xs font-black uppercase tracking-wide">
                    Management Reporting
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
                  Clear Reports Help Management Take Better Decisions.
                </h2>
              </div>

              <div className="space-y-5 text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                <p>
                  Many businesses collect data but do not use it properly for
                  decision-making. Sales, production, finance, inventory,
                  manpower, quality, procurement, and operations data often
                  remain scattered across departments.
                </p>

                <p>
                  Without a proper MIS and audit system, management may not get
                  a clear view of performance, losses, delays, risks, or
                  improvement areas. We help businesses create practical
                  Management Information Systems, conduct process audits, review
                  business systems, analyze performance, and prepare clear
                  reports for stronger operational control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section id="mis-audit-services" className="bg-primary py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                What AS Business Consulting Delivers
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Performance Analysis, Process Audit, System Audit & MIS
                Dashboards
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
                  Better Visibility, Faster Decisions & Stronger Internal
                  Control
                </h2>
              </div>

              <p className="self-end text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                MIS and audit systems help businesses track performance,
                identify process gaps, reduce risk, improve accountability, and
                prepare for internal audits, statutory audits, customer audits,
                investor reviews, and management inspections.
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
                From KPI Tracking to Management Review Reporting
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
                Useful for Manufacturing, MSMEs, Growing Companies, Operations
                Teams & Management Reviews
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
                A Clear Roadmap from Business Understanding to Review &
                Monitoring
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
                  MIS & Audit Systems That Lead to Real Business Improvement
                </h2>

                <p className="text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                  We create simple reporting structures, practical audit
                  systems, gap analysis reports, and corrective action plans
                  that help management identify risks, track performance, and
                  improve business control.
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
                Reports, Dashboards, Audit Trackers & Corrective Action Plans
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
                Improve Business Visibility, Process Control & Management
                Decision-Making
              </h2>

              <p className="mx-auto mb-7 max-w-3xl text-sm font-medium leading-7 md:text-base md:leading-8">
                Connect with AS Business Consulting for MIS dashboard creation,
                business performance analysis, process audit, system audit, gap
                analysis, and corrective action planning tailored to your
                business needs.
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