import * as React from "react";
import Script from "next/script";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
  title: "Financial Growth Consulting in India | AS Business Consulting",
  description:
    "AS Business Consulting provides financial growth advisory including institutional financing, fund-flow management, working capital planning, tax advisory, loan proposal support, and business growth finance strategy.",
  alternates: {
    canonical: "https://www.asbconsulting.in/operation/financial-growth",
  },
};

const page = () => {
  const deliverables = [
    {
      title: "Institutional Financing",
      desc: "We help businesses understand and access suitable institutional financing options from banks, NBFCs, financial institutions, government schemes, and funding partners.",
      points: [
        "Working capital finance support",
        "Term loan proposal support",
        "Machinery loan support",
        "Project finance advisory",
        "Lender coordination support",
      ],
    },
    {
      title: "Fund Flow Management",
      desc: "We help businesses manage incoming and outgoing funds in a structured way so money is available for operations, vendor payments, salaries, taxes, inventory, and growth.",
      points: [
        "Cash flow pattern review",
        "Receivables and payables review",
        "Working capital gap analysis",
        "Fund utilization planning",
        "Financial leakage identification",
      ],
    },
    {
      title: "Taxes Advisory",
      desc: "We provide practical tax advisory support to help businesses plan tax responsibilities, reduce avoidable tax pressure, improve compliance discipline, and make better financial decisions.",
      points: [
        "GST advisory coordination",
        "TDS advisory coordination",
        "Direct tax planning support",
        "Transaction tax review",
        "Tax impact assessment",
      ],
    },
    {
      title: "Working Capital Planning",
      desc: "We help businesses identify working capital requirements and improve cash conversion cycles by reviewing inventory, receivables, payables, and short-term funding needs.",
      points: [
        "Inventory holding review",
        "Customer credit period review",
        "Supplier payment term review",
        "Cash conversion cycle analysis",
        "Short-term funding planning",
      ],
    },
    {
      title: "Financial Performance Review",
      desc: "We analyze revenue, cost, margins, cash flow, debt, profitability, and financial ratios to help management understand the financial health of the business.",
      points: [
        "Revenue and cost review",
        "Margin analysis",
        "Debt and repayment review",
        "Profitability analysis",
        "Financial ratio review",
      ],
    },
    {
      title: "Business Growth Finance Strategy",
      desc: "We help businesses prepare financial strategies for expansion, new machinery, new product lines, working capital improvement, cost control, and long-term growth.",
      points: [
        "Expansion finance planning",
        "New machinery funding strategy",
        "Cost control planning",
        "Growth roadmap preparation",
        "Financial MIS support",
      ],
    },
  ];

  const benefits = [
    "Better Access to Finance",
    "Improved Cash Flow Control",
    "Stronger Working Capital Management",
    "Reduced Financial Stress",
    "Better Tax Planning",
    "Improved Profitability",
    "Growth-Ready Financial Structure",
  ];

  const keyAreas = [
    "Institutional financing support",
    "Bank loan advisory",
    "NBFC funding coordination",
    "Working capital finance support",
    "Term loan proposal support",
    "Project finance advisory",
    "Machinery loan support",
    "MSME finance support",
    "Loan documentation support",
    "Financial projection preparation",
    "Fund-flow management",
    "Cash flow planning",
    "Working capital planning",
    "Receivables and payables review",
    "Cost and margin analysis",
    "Tax advisory",
    "GST advisory coordination",
    "TDS advisory coordination",
    "Direct tax planning support",
    "Financial performance review",
    "Debt and repayment planning",
    "Business expansion finance strategy",
    "Financial reporting and MIS support",
  ];

  const applications = [
    {
      title: "For MSMEs",
      desc: "We help MSMEs improve fund planning, arrange suitable finance, manage working capital, and create better financial control systems.",
    },
    {
      title: "For Manufacturing Units",
      desc: "Manufacturing businesses often need funds for raw material, machinery, inventory, manpower, and expansion. We help structure financing and fund-flow planning for these needs.",
    },
    {
      title: "For Startups & Growing Businesses",
      desc: "Startups and growing companies need careful financial planning to manage cash burn, revenue growth, taxation, and funding requirements.",
    },
    {
      title: "For Businesses Facing Cash Flow Issues",
      desc: "If a business is facing delayed receivables, vendor payment pressure, loan repayment stress, or working capital shortage, we help identify the cause and create corrective actions.",
    },
    {
      title: "For Companies Planning Expansion",
      desc: "Businesses planning new machinery, new plants, new branches, product expansion, or higher production capacity need structured financing and fund planning.",
    },
    {
      title: "For Management & Owners",
      desc: "Owners and management teams can use financial growth advisory to understand business health, funding needs, tax impact, and profitability improvement opportunities.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Financial Requirement Understanding",
      desc: "We first understand your business model, funding needs, cash flow situation, loan requirements, tax concerns, and growth plans.",
    },
    {
      step: "02",
      title: "Financial Data Review",
      desc: "We review financial statements, cash flow, receivables, payables, existing loans, tax obligations, cost structure, and business performance.",
    },
    {
      step: "03",
      title: "Gap Identification",
      desc: "We identify working capital gaps, fund-flow issues, high-cost areas, documentation gaps, tax planning needs, and financing opportunities.",
    },
    {
      step: "04",
      title: "Funding & Finance Strategy",
      desc: "We prepare a practical finance strategy covering institutional financing options, loan planning, repayment structure, fund utilization, and working capital improvement.",
    },
    {
      step: "05",
      title: "Documentation Support",
      desc: "We help organize documents required for funding, projections, loan proposals, business plans, financial summaries, and management reporting.",
    },
    {
      step: "06",
      title: "Implementation & Monitoring",
      desc: "We support lender coordination, fund-flow tracking, cash flow monitoring, tax planning coordination, and periodic financial review.",
    },
  ];

  const whyChoose = [
    {
      title: "Practical Finance Advisory",
      desc: "We provide financial advice that is suitable for real business conditions, not only theoretical planning.",
    },
    {
      title: "Strong MSME & Business Understanding",
      desc: "Our team understands the financial challenges faced by MSMEs, manufacturers, startups, family businesses, and growing companies.",
    },
    {
      title: "Funding & Cash Flow Focus",
      desc: "We help businesses not only arrange funds but also manage those funds properly for sustainable growth.",
    },
    {
      title: "Tax-Aware Financial Planning",
      desc: "We consider tax impact while planning transactions, funding, fund flow, and business expansion decisions.",
    },
    {
      title: "End-to-End Support",
      desc: "From finance assessment and loan proposal preparation to fund-flow management, tax advisory coordination, and growth planning, we support the complete financial improvement process.",
    },
  ];

  const typicalDeliverables = [
    "Institutional financing advisory note",
    "Loan proposal support",
    "Working capital requirement assessment",
    "Project finance support note",
    "Financial projection format",
    "Fund-flow management plan",
    "Cash flow planning sheet",
    "Receivables and payables review",
    "Working capital improvement plan",
    "Debt repayment planning note",
    "Tax advisory coordination note",
    "GST and TDS review support checklist",
    "Cost and margin analysis report",
    "Financial performance review",
    "Business growth finance roadmap",
    "Funding documentation checklist",
    "Lender coordination support",
    "Financial MIS format",
    "Corrective action plan",
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
        id="breadcrumb-schema-financial-growth"
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
                name: "Financial Growth",
                item: "https://www.asbconsulting.in/financial-growth",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-financial-growth"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/financial-growth#webpage",
            url: "https://www.asbconsulting.in/financial-growth",
            name: "Financial Growth Consulting in India | AS Business Consulting",
            description:
              "AS Business Consulting provides financial growth advisory including institutional financing, fund-flow management, working capital planning, tax advisory, loan proposal support, and business growth finance strategy.",
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
                    Financial Growth
                  </span>
                </div>

                <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
                  Improve Finance,
                  <span className="block">Manage Funds &</span>
                  <span className="block">Unlock Growth</span>
                </h1>

                <p className="mt-6 max-w-2xl text-sm font-semibold leading-7 text-white/90 md:text-base md:leading-8">
                  At AS Business Consulting, our Financial Growth services help
                  businesses improve financial planning, manage funds
                  effectively, access institutional financing, and make better
                  decisions for long-term profitability.
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
                      Finance Growth Areas
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-primary">
                      Practical Finance Advisory for Funding, Cash Flow, Tax
                      Planning & Business Expansion
                    </h3>

                    <div className="mt-7 space-y-4">
                      {[
                        "Institutional Financing",
                        "Fund Flow Management",
                        "Taxes Advisory",
                        "Working Capital Planning",
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
                  <p className="text-2xl font-black">₹</p>
                  <p className="text-xs font-black uppercase tracking-wide">
                    Finance Growth
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
                  Strong Financial Control Creates Strong Business Growth.
                </h2>
              </div>

              <div className="space-y-5 text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                <p>
                  Many businesses have strong products and operations but
                  struggle with cash flow, working capital, loan planning, tax
                  structuring, fund utilization, and financial decision-making.
                  Poor financial control can lead to payment delays, excess
                  borrowing, blocked working capital, missed growth
                  opportunities, and unnecessary financial pressure.
                </p>

                <p>
                  Our approach focuses on improving financial visibility,
                  arranging suitable funding support, managing fund flow
                  properly, and creating practical tax and finance strategies
                  that support business expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DELIVER */}
        <section
          id="financial-growth-services"
          className="bg-primary py-14 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[3px] text-white">
                What AS Business Consulting Delivers
              </p>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Institutional Financing, Fund Flow, Taxes, Working Capital &
                Growth Strategy
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
                  Better Finance Access, Cash Flow Control & Growth Readiness
                </h2>
              </div>

              <p className="self-end text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                Financial growth advisory helps businesses prepare stronger loan
                proposals, manage working capital, reduce cash pressure, plan
                taxes carefully, improve profitability, and build a finance
                structure ready for expansion.
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
                From Bank Loan Advisory to Business Expansion Finance Strategy
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
                Useful for MSMEs, Manufacturing Units, Startups, Growing
                Businesses & Expansion Planning
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
                A Clear Roadmap from Financial Review to Funding & Monitoring
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
                  Practical Financial Advisory for Real Business Growth
                </h2>

                <p className="text-sm font-medium leading-7 text-primary/90 md:text-base md:leading-8">
                  We help businesses not only arrange funds, but also manage
                  those funds properly through cash flow control, working
                  capital planning, tax-aware decisions, documentation support,
                  and long-term growth finance strategy.
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
                Finance Notes, Loan Support, Fund-Flow Plans & Growth Roadmaps
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
                Strengthen Your Business Finances & Unlock Growth Opportunities
              </h2>

              <p className="mx-auto mb-7 max-w-3xl text-sm font-medium leading-7 md:text-base md:leading-8">
                Connect with AS Business Consulting for institutional financing,
                fund-flow management, working capital planning, tax advisory,
                and financial growth support tailored to your business needs.
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