import * as React from "react";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "QMS Consulting in India | Quality Management System | AS Business Consulting",
  description:
    "AS Business Consulting provides QMS services including FTR improvement, 7 QC Tools implementation, Kaizen, Poka-yoke, quality awareness training, defect reduction, root cause analysis, and quality process improvement.",
  alternates: {
    canonical: "https://www.asbconsulting.in/operation/qms",
  },
};

const page = () => {
  const deliverables = [
    {
      title: "FTR Improvement",
      desc: "We help businesses improve First Time Right performance by identifying the reasons behind rework, rejection, inspection failure, and customer complaints.",
      points: [
        "First Time Right analysis",
        "Defect and rework review",
        "Inspection failure analysis",
        "Operator training support",
        "Root-cause-based corrective actions",
      ],
    },
    {
      title: "7 QC Tools Implementation",
      desc: "We help businesses apply the 7 Quality Control Tools for structured problem-solving, defect analysis, process variation study, and quality improvement.",
      points: [
        "Check sheets",
        "Pareto charts",
        "Cause-and-effect diagrams",
        "Control charts",
        "Flowcharts and histograms",
      ],
    },
    {
      title: "Kaizen Implementation",
      desc: "We support businesses in implementing Kaizen, which focuses on small, continuous improvements in daily work.",
      points: [
        "Daily improvement activities",
        "Waste reduction ideas",
        "Employee involvement",
        "Process simplification",
        "Continuous improvement tracking",
      ],
    },
    {
      title: "Poka-yoke",
      desc: "We help businesses implement Poka-yoke, or mistake-proofing methods, to prevent errors before they happen.",
      points: [
        "Visual controls",
        "Fixtures and templates",
        "Checklists and process locks",
        "Color coding systems",
        "Human error reduction",
      ],
    },
    {
      title: "Quality Awareness Trainings",
      desc: "We conduct quality awareness training for employees, supervisors, operators, managers, and quality teams.",
      points: [
        "Quality standards awareness",
        "Defect prevention training",
        "SOP discipline training",
        "Inspection method training",
        "Customer expectation awareness",
      ],
    },
    {
      title: "Quality Process Review",
      desc: "We review your existing quality system, inspection process, defect records, customer complaints, SOPs, work instructions, and corrective action practices.",
      points: [
        "Inspection process review",
        "Defect record analysis",
        "Customer complaint review",
        "SOP and work instruction review",
        "Quality system gap identification",
      ],
    },
    {
      title: "Corrective & Preventive Action Support",
      desc: "We help businesses create practical corrective and preventive action plans to eliminate repeat defects and improve long-term process stability.",
      points: [
        "CAPA planning",
        "Repeat defect prevention",
        "Action responsibility mapping",
        "Closure tracking",
        "Long-term process stability",
      ],
    },
  ];

  const benefits = [
    "Reduced Defects & Rework",
    "Improved First Time Right",
    "Better Customer Satisfaction",
    "Lower Quality Cost",
    "Stronger Process Control",
    "Better Employee Awareness",
    "Continuous Improvement Culture",
  ];

  const keyAreas = [
    "Quality Management System improvement",
    "FTR improvement",
    "First Time Right analysis",
    "7 QC Tools implementation",
    "Kaizen implementation",
    "Poka-yoke implementation",
    "Quality awareness training",
    "Defect analysis",
    "Rejection reduction",
    "Rework reduction",
    "Customer complaint analysis",
    "Root cause analysis",
    "Corrective and preventive action planning",
    "SOP and work instruction review",
    "Inspection process improvement",
    "Process control improvement",
    "Quality checklist development",
    "Quality audit support",
    "Quality performance tracking",
    "Cost of poor quality review",
    "Continuous improvement planning",
  ];

  const applications = [
    {
      title: "For Manufacturing Units",
      desc: "We help manufacturing businesses reduce defects, improve inspection systems, control process variation, and increase product consistency.",
    },
    {
      title: "For MSMEs",
      desc: "MSMEs often need simple and practical quality systems. We help them implement QMS practices without unnecessary complexity.",
    },
    {
      title: "For Quality Teams",
      desc: "Quality teams can use our support for defect analysis, 7 QC tools, CAPA planning, quality reporting, and improvement tracking.",
    },
    {
      title: "For Production Teams",
      desc: "Production teams benefit from FTR improvement, Poka-yoke, SOP discipline, operator training, and process control improvement.",
    },
    {
      title: "For Businesses Facing Customer Complaints",
      desc: "If customer complaints, rejection, or return rates are increasing, we help identify root causes and create corrective action plans.",
    },
    {
      title: "For Audit-Driven Businesses",
      desc: "Businesses preparing for customer audits, certification audits, supplier audits, or internal quality reviews can use QMS support to improve readiness.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Quality System Study",
      desc: "We first study your existing quality process, inspection methods, defect records, customer complaints, SOPs, work instructions, and quality performance data.",
    },
    {
      step: "02",
      title: "Defect & Gap Analysis",
      desc: "We identify major quality gaps, repeated defects, process variations, documentation issues, training gaps, and inspection weaknesses.",
    },
    {
      step: "03",
      title: "Root Cause Analysis",
      desc: "We use structured quality tools to identify the real causes behind quality problems instead of only treating symptoms.",
    },
    {
      step: "04",
      title: "Improvement Planning",
      desc: "We prepare an action plan for FTR improvement, defect reduction, inspection improvement, Poka-yoke, Kaizen activities, and employee training.",
    },
    {
      step: "05",
      title: "Implementation Support",
      desc: "We support your team in implementing corrective actions, quality tools, SOP changes, mistake-proofing methods, and improvement activities.",
    },
    {
      step: "06",
      title: "Training & Monitoring",
      desc: "We conduct quality awareness trainings and help monitor improvement through quality KPIs, defect trends, FTR performance, and corrective action tracking.",
    },
  ];

  const whyChoose = [
    {
      title: "Practical Quality Improvement",
      desc: "We focus on quality systems that can be implemented in real operations, not only documentation for audits.",
    },
    {
      title: "Strong Lean & Quality Expertise",
      desc: "Our approach combines QMS, 7 QC Tools, Kaizen, Poka-yoke, process control, and continuous improvement methods.",
    },
    {
      title: "Defect Prevention Focus",
      desc: "We help businesses move from defect detection to defect prevention by improving processes, training, and mistake-proofing.",
    },
    {
      title: "Measurable Results",
      desc: "We help track improvements through FTR, rejection rate, rework, customer complaints, quality cost, and audit observations.",
    },
    {
      title: "Suitable for Different Business Sizes",
      desc: "Our QMS services are useful for MSMEs, manufacturing units, suppliers, export-focused businesses, and established enterprises.",
    },
  ];

  const typicalDeliverables = [
    "QMS improvement report",
    "FTR improvement plan",
    "Defect analysis report",
    "Rejection reduction plan",
    "Rework reduction plan",
    "7 QC Tools implementation support",
    "Kaizen activity plan",
    "Poka-yoke implementation suggestions",
    "Root cause analysis report",
    "Corrective and preventive action plan",
    "Quality awareness training module",
    "SOP and work instruction review",
    "Inspection checklist formats",
    "Quality control checklist",
    "Customer complaint analysis report",
    "Quality performance dashboard format",
    "Cost of poor quality review",
    "Audit readiness checklist",
    "Quality improvement tracker",
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
        id="breadcrumb-schema-qms"
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
                name: "QMS",
                item: "https://www.asbconsulting.in/qms",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-qms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/qms#webpage",
            url: "https://www.asbconsulting.in/qms",
            name: "QMS Consulting in India | Quality Management System | AS Business Consulting",
            description:
              "AS Business Consulting provides QMS services including FTR improvement, 7 QC Tools implementation, Kaizen, Poka-yoke, quality awareness training, defect reduction, root cause analysis, and quality process improvement.",
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
                    QMS — Quality Management System
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Improve Quality,
                  <span className="block">Reduce Defects &</span>
                  <span className="block">Strengthen Control</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/90 md:text-base md:leading-8">
                  At AS Business Consulting, our QMS services help businesses
                  improve product quality, reduce defects, strengthen process
                  control, and build a culture of continuous improvement using
                  FTR improvement, 7 QC Tools, Kaizen, Poka-yoke, and quality
                  awareness training.
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
                      Quality Improvement Areas
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-primary">
                      Practical QMS for Better FTR, Defect Prevention &
                      Continuous Improvement
                    </h3>

                    <div className="mt-7 space-y-4">
                      {[
                        "FTR Improvement",
                        "7 QC Tools Implementation",
                        "Kaizen Implementation",
                        "Poka-yoke",
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
                  <p className="text-2xl font-black">FTR</p>
                  <p className="text-xs font-black uppercase tracking-wide">
                    First Time Right
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
                  Strong Quality Comes From Strong Process Control.
                </h2>
              </div>

              <div className="space-y-5 text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                <p>
                  Many businesses face quality problems because of weak process
                  control, unclear inspection methods, poor documentation,
                  repeated defects, lack of training, inconsistent work
                  practices, and limited root-cause analysis.
                </p>

                <p>
                  These issues often lead to rework, rejection, customer
                  complaints, delivery delays, and higher operating costs. Our
                  QMS approach focuses on improving First Time Right, applying
                  quality tools, implementing Kaizen, mistake-proofing processes,
                  and building quality awareness across teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section id="qms-services" className="bg-primary py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                What AS Business Consulting Delivers
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                FTR Improvement, 7 QC Tools, Kaizen, Poka-yoke & Quality
                Awareness
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
                  Reduced Defects, Better FTR & Stronger Quality Culture
                </h2>
              </div>

              <p className="self-end text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                A strong QMS helps reduce product defects, process errors,
                rework, rejection, and customer complaints while improving
                customer satisfaction, process control, employee awareness, and
                continuous improvement.
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
                From Defect Analysis to Continuous Quality Improvement
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
                Useful for Manufacturing, MSMEs, Quality Teams, Production Teams
                & Audit-Driven Businesses
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
                A Clear Roadmap from Quality Study to Training & Monitoring
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
                  Practical QMS That Focuses on Defect Prevention, Not Only
                  Inspection
                </h2>

                <p className="text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                  We help businesses move from defect detection to defect
                  prevention by improving processes, training employees,
                  applying quality tools, implementing mistake-proofing, and
                  tracking measurable quality performance.
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
                QMS Reports, FTR Plans, CAPA, Checklists & Quality Trackers
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
                Improve Quality, Reduce Defects & Build a Stronger Quality
                Culture
              </h2>

              <p className="mx-auto mb-7 max-w-3xl text-sm font-medium leading-7 md:text-base md:leading-8">
                Connect with AS Business Consulting for FTR improvement, 7 QC
                Tools implementation, Kaizen, Poka-yoke, quality awareness
                training, and practical QMS improvement tailored to your
                business.
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