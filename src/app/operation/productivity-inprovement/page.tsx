import * as React from "react";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "Productivity Improvement Consulting in India | AS Business Consulting",
  description:
    "AS Business Consulting provides productivity improvement services for process bottleneck identification, line balancing, UPH improvement, manpower utilization, cycle-time study, and operational efficiency.",
  alternates: {
    canonical: "https://www.asbconsulting.in/operation/productivity-inprovement",
  },
};

const page = () => {
  const deliverables = [
    {
      title: "Identifying Process Bottlenecks",
      desc: "We study your complete workflow to identify where production slows down, where delays happen, and which process steps are limiting output.",
      points: [
        "Production delay analysis",
        "Workflow bottleneck study",
        "Machine capacity review",
        "Material movement issues",
        "Quality rework impact review",
      ],
    },
    {
      title: "Line Balancing",
      desc: "We help businesses balance production lines so workload is distributed properly across machines, operators, and workstations.",
      points: [
        "Workload distribution",
        "Idle time reduction",
        "Operator efficiency improvement",
        "Station-wise productivity review",
        "Smooth production flow",
      ],
    },
    {
      title: "Increasing UPH & Productivity",
      desc: "We improve Units Per Hour by optimizing process flow, reducing waste, improving workstation planning, reducing downtime, and standardizing tasks.",
      points: [
        "UPH improvement roadmap",
        "Downtime reduction",
        "Task standardization",
        "Workstation planning",
        "Productivity tracking system",
      ],
    },
  ];

  const benefits = [
    "Higher Output",
    "Better Manpower Utilization",
    "Reduced Production Delays",
    "Improved UPH",
    "Lower Operating Cost",
    "Better Delivery Performance",
    "Stronger Process Control",
  ];

  const keyAreas = [
    "Process bottleneck identification",
    "Production line balancing",
    "UPH improvement",
    "Manpower productivity improvement",
    "Machine utilization review",
    "Workstation productivity analysis",
    "Cycle-time study",
    "Time and motion study",
    "Process flow improvement",
    "Idle time reduction",
    "Waiting time reduction",
    "Rework and rejection impact review",
    "Production layout improvement",
    "Workload distribution",
    "SOP-based productivity improvement",
    "Daily production tracking",
    "Performance monitoring system",
    "OEE improvement support",
    "Capacity utilization review",
    "Continuous productivity improvement roadmap",
  ];

  const applications = [
    {
      title: "For Manufacturing Units",
      desc: "We help manufacturing businesses improve output, reduce process delays, optimize production lines, and increase shop-floor productivity.",
    },
    {
      title: "For MSMEs",
      desc: "MSMEs often work with limited manpower, machines, and space. Our support helps them get better results from existing resources.",
    },
    {
      title: "For Assembly Lines",
      desc: "Assembly-based businesses can use line balancing and cycle-time study to reduce waiting time, improve workstation flow, and increase UPH.",
    },
    {
      title: "For Businesses Facing Low Output",
      desc: "If production is slow despite available machines and manpower, we help identify the exact bottlenecks affecting performance.",
    },
    {
      title: "For Companies With High Delivery Pressure",
      desc: "Businesses with urgent customer orders or frequent delivery delays can improve planning, flow, and productivity through structured process improvement.",
    },
    {
      title: "For Cost-Sensitive Operations",
      desc: "When companies want to increase output without adding major cost, productivity improvement helps improve efficiency using existing resources.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Current Productivity Study",
      desc: "We study your production process, workflow, manpower allocation, machine usage, output data, downtime, rejection rate, and daily production challenges.",
    },
    {
      step: "02",
      title: "Bottleneck Identification",
      desc: "We identify the exact points where work slows down, output drops, waiting time increases, or resources remain underutilized.",
    },
    {
      step: "03",
      title: "Cycle-Time & Workload Analysis",
      desc: "We analyze the time taken at each process step and compare workload distribution across operators, machines, and stations.",
    },
    {
      step: "04",
      title: "Line Balancing Plan",
      desc: "We prepare a line balancing plan to distribute work more evenly, reduce idle time, and improve production flow.",
    },
    {
      step: "05",
      title: "UPH Improvement Roadmap",
      desc: "We create a practical action plan to improve Units Per Hour through process correction, manpower planning, workstation changes, SOPs, and monitoring.",
    },
    {
      step: "06",
      title: "Implementation Support",
      desc: "We support your team during implementation, monitor improvements, and help create a system for continuous productivity tracking.",
    },
  ];

  const whyChoose = [
    {
      title: "Practical Shop-Floor Approach",
      desc: "We focus on real operational problems, not only theoretical suggestions. Our recommendations are based on actual process study and business conditions.",
    },
    {
      title: "Measurable Productivity Improvement",
      desc: "We help businesses track improvement through output, UPH, cycle time, manpower utilization, idle time, and delivery performance.",
    },
    {
      title: "Lean Manufacturing Expertise",
      desc: "Our methods are aligned with lean manufacturing practices such as waste reduction, line balancing, standard work, Kaizen, and process flow improvement.",
    },
    {
      title: "Cost-Effective Solutions",
      desc: "We first look for improvements that can be achieved using existing manpower, machines, space, and systems before recommending major investments.",
    },
    {
      title: "End-to-End Support",
      desc: "From process study and bottleneck analysis to line balancing, UPH improvement, and implementation support, we guide your team through the full improvement journey.",
    },
  ];

  const typicalDeliverables = [
    "Productivity improvement report",
    "Process bottleneck analysis",
    "Line balancing plan",
    "UPH improvement roadmap",
    "Cycle-time study report",
    "Time and motion study observations",
    "Manpower utilization report",
    "Machine utilization review",
    "Workstation improvement suggestions",
    "Idle time reduction plan",
    "Waiting time reduction plan",
    "Production flow improvement plan",
    "SOP improvement suggestions",
    "Daily production tracking format",
    "Performance monitoring dashboard suggestions",
    "OEE improvement recommendations",
    "Capacity utilization report",
    "Continuous improvement tracker",
    "Management review summary",
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
        id="breadcrumb-schema-productivity-improvement"
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
                name: "Productivity Improvement",
                item: "https://www.asbconsulting.in/productivity-improvement",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-productivity-improvement"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/productivity-improvement#webpage",
            url: "https://www.asbconsulting.in/productivity-improvement",
            name: "Productivity Improvement Consulting in India | AS Business Consulting",
            description:
              "AS Business Consulting provides productivity improvement services for process bottleneck identification, line balancing, UPH improvement, manpower utilization, cycle-time study, and operational efficiency.",
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
                    Productivity Improvement
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Increase Output,
                  <span className="block">Reduce Delays &</span>
                  <span className="block">Improve UPH</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/90 md:text-base md:leading-8">
                  At AS Business Consulting, our Productivity Improvement
                  services help businesses increase output, reduce delays,
                  improve manpower utilization, and achieve better operational
                  performance without unnecessary cost increase.
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
                      Productivity Focus Areas
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-primary">
                      Practical Productivity Improvement for Better Output,
                      Flow & Cost Control
                    </h3>

                    <div className="mt-7 space-y-4">
                      {[
                        "Process Bottleneck Identification",
                        "Production Line Balancing",
                        "UPH Improvement",
                        "Manpower & Machine Utilization",
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
                  <p className="text-2xl font-black">UPH</p>
                  <p className="text-xs font-black uppercase tracking-wide">
                    Units Per Hour
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
                  Better Productivity Starts With Better Process Control.
                </h2>
              </div>

              <div className="space-y-5 text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                <p>
                  Many businesses face low productivity not because of lack of
                  effort, but because of hidden process gaps. These may include
                  poor workflow, unbalanced production lines, machine downtime,
                  waiting time, material movement issues, unclear SOPs, skill
                  gaps, rework, or weak performance monitoring.
                </p>

                <p>
                  Our approach focuses on finding the real reasons behind low
                  productivity and creating practical improvement plans that
                  increase output, improve quality, reduce waste, and make daily
                  operations more efficient.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section
          id="productivity-services"
          className="bg-primary py-14 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                What AS Business Consulting Delivers
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Practical Productivity Support for Real Shop-Floor Improvement
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
                  More Output, Less Waste & Better Delivery Performance
                </h2>
              </div>

              <p className="self-end text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                Productivity improvement helps businesses produce more within
                the same working hours, reduce idle time, improve resource
                utilization, and create better control over daily operations.
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
                From Bottleneck Study to Continuous Productivity Improvement
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
                Designed for Manufacturing Units, MSMEs, Assembly Lines & High
                Pressure Operations
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
                A Clear Roadmap from Productivity Study to Implementation
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
                  Productivity Improvement That Is Practical, Measurable &
                  Cost-Effective
                </h2>

                <p className="text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                  We do not suggest random changes. We study actual operations,
                  identify real productivity gaps, and create improvement plans
                  focused on output, UPH, cycle time, manpower utilization, and
                  delivery performance.
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
                Reports, Roadmaps, Trackers & Action Plans for Better
                Productivity
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
                Increase Output, Reduce Delays & Improve Operational Performance
              </h2>

              <p className="mx-auto mb-7 max-w-3xl text-sm font-medium leading-7 md:text-base md:leading-8">
                Connect with AS Business Consulting for process bottleneck
                identification, line balancing, UPH improvement, manpower
                productivity improvement, and practical productivity enhancement
                solutions tailored to your business.
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