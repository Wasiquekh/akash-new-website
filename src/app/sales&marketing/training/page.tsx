import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title:
    "Marketing & Sales Training Programs in India | AS Business Consulting",
  description:
    "AS Business Consulting provides practical marketing and sales training programs in India covering digital platforms, analytics, CRM, sales playbooks, content, B2B, B2C, and reporting.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/sales&marketing/training",
  },
};

const services = [
  {
    title: "Digital Marketing Platform Training",
    description:
      "We train your team to understand and use key digital marketing platforms for brand awareness, lead generation, customer engagement, and sales growth.",
    points: [
      "Meta Ads basics and campaign structure",
      "Google Ads overview and search campaign planning",
      "YouTube campaign understanding",
      "LinkedIn marketing for B2B growth",
      "Instagram and Facebook content strategy",
      "WhatsApp marketing structure",
      "Email marketing campaign planning",
      "Landing page and lead form basics",
    ],
  },
  {
    title: "Marketing Analytics & Dashboard Training",
    description:
      "We help teams understand how to measure marketing performance, read campaign data, track customer behaviour, and make better decisions based on reports.",
    points: [
      "Marketing KPIs and performance metrics",
      "Google Analytics 4, also known as GA4, overview",
      "Looker Studio dashboard understanding",
      "Lead tracking and enquiry source analysis",
      "Campaign performance reading",
      "Cost per lead, cost per acquisition, and return on ad spend",
      "Customer journey tracking",
      "Monthly reporting format and review process",
    ],
  },
  {
    title: "Sales Playbook & Process Training",
    description:
      "A sales team performs better when it follows a clear process. We help businesses create and train teams on structured sales playbooks, scripts, follow-up systems, and customer handling methods.",
    points: [
      "Sales funnel understanding",
      "Lead qualification process",
      "Sales pitch structure",
      "Objection handling",
      "Follow-up message templates",
      "Proposal explanation methods",
      "Closing techniques",
      "Customer relationship management",
    ],
  },
  {
    title: "Lead Management & CRM Training",
    description:
      "We train teams to manage leads properly from enquiry to conversion. This helps reduce lead leakage, improve follow-up discipline, and increase sales conversion.",
    points: [
      "Lead capture process",
      "Lead status tracking",
      "CRM usage basics",
      "Enquiry assignment process",
      "Follow-up scheduling",
      "Hot, warm, and cold lead classification",
      "Lead nurturing techniques",
      "Sales pipeline review",
    ],
  },
  {
    title: "Content & Brand Communication Training",
    description:
      "Good marketing depends on clear communication. We train teams to create better brand messages, content ideas, product explanations, customer communication, and campaign themes.",
    points: [
      "Brand messaging basics",
      "Content pillar planning",
      "Social media content ideas",
      "Product benefit writing",
      "Customer pain point communication",
      "Campaign theme creation",
      "Storytelling for business",
      "Review, testimonial, and case study usage",
    ],
  },
  {
    title: "B2B Marketing & Sales Training",
    description:
      "For companies selling to other businesses, we train teams on professional communication, LinkedIn outreach, email sequences, account-based marketing, proposal handling, and long-cycle sales processes.",
    points: [
      "B2B lead generation basics",
      "LinkedIn outreach strategy",
      "Cold email structure",
      "Account-based marketing approach",
      "Decision-maker mapping",
      "Corporate pitch improvement",
      "Proposal and presentation training",
      "B2B follow-up strategy",
    ],
  },
  {
    title: "B2C Marketing & Customer Acquisition Training",
    description:
      "For brands selling directly to customers, we train teams on customer behaviour, social media campaigns, paid ads, offers, influencer marketing, and customer retention.",
    points: [
      "Customer persona understanding",
      "Social media campaign planning",
      "Meta and Google campaign basics",
      "Offer and promotion planning",
      "Influencer collaboration basics",
      "Customer journey planning",
      "Remarketing and repeat sales",
      "Review and referral campaign planning",
    ],
  },
  {
    title: "Reporting, Review & Decision-Making Training",
    description:
      "We train managers and teams to review marketing and sales performance in a structured way so they can take better actions every week and every month.",
    points: [
      "Weekly performance review method",
      "Monthly report reading",
      "Campaign improvement decisions",
      "Sales pipeline review",
      "Conversion analysis",
      "Team accountability structure",
      "Goal tracking",
      "Action plan creation after reporting",
    ],
  },
];

const keyPoints = [
  "Practical training focused on real business use",
  "Covers marketing platforms, analytics, CRM, and sales systems",
  "Suitable for beginners, business teams, and growing companies",
  "Training for both B2B and B2C business models",
  "Helps teams improve lead generation, follow-up, conversion, and reporting",
  "Includes tools, templates, playbooks, and process guidance",
  "Can be customized based on your industry and team skill level",
  "Focuses on implementation, not only theory",
];

const benefits = [
  {
    title: "Better Team Skills",
    description:
      "Your team learns modern marketing and sales techniques that can be directly applied in daily business activities.",
  },
  {
    title: "Improved Lead Handling",
    description:
      "Training helps reduce missed leads, weak follow-ups, and unstructured enquiry management.",
  },
  {
    title: "Higher Sales Conversion",
    description:
      "With better pitch, objection handling, proposal communication, and follow-up systems, your team can convert more enquiries into customers.",
  },
  {
    title: "Stronger Marketing Execution",
    description:
      "Teams learn how to plan campaigns, understand platforms, review data, and improve marketing activities.",
  },
  {
    title: "Better Use of Tools",
    description:
      "Your business can use platforms like Meta Ads, Google Ads, LinkedIn, GA4, Looker Studio, CRM tools, and dashboards more effectively.",
  },
  {
    title: "Clear Reporting Culture",
    description:
      "Teams learn how to measure results, understand KPIs, and take action based on performance data.",
  },
  {
    title: "Reduced Dependency",
    description:
      "Training and handover help your internal team manage marketing and sales activities with more confidence.",
  },
];

const applications = [
  "Marketing teams",
  "Sales teams",
  "Business owners",
  "Startup founders",
  "Managers and team leaders",
  "B2B companies",
  "B2C brands",
  "Retail businesses",
  "Service providers",
  "Manufacturing companies",
  "Export and import businesses",
  "Franchise teams",
  "Real estate sales teams",
  "Education and training institutes",
  "Companies building internal marketing departments",
];

const processItems = [
  {
    title: "Skill Gap Assessment",
    description:
      "We understand your team’s current skill level, business goals, tools used, challenges, and training requirements.",
  },
  {
    title: "Training Plan Creation",
    description:
      "We create a customized training plan covering the right topics, tools, platforms, sales processes, and reporting methods.",
  },
  {
    title: "Practical Training Sessions",
    description:
      "We conduct training sessions with examples, templates, platform explanations, campaign structures, sales scripts, and real business scenarios.",
  },
  {
    title: "Tool & Process Demonstration",
    description:
      "We show how to use relevant tools, dashboards, CRM workflows, campaign reports, and sales playbooks.",
  },
  {
    title: "Practice & Team Implementation",
    description:
      "We help the team apply the learning through exercises, role plays, campaign planning, lead handling, and reporting formats.",
  },
  {
    title: "Review & Improvement Support",
    description:
      "We review team understanding, answer questions, identify gaps, and suggest improvements for better execution.",
  },
];

const coreModules = [
  {
    title: "Performance Marketing Training",
    description:
      "Training on paid campaign planning, platform basics, audience targeting, budgeting, campaign objectives, and optimization.",
  },
  {
    title: "Marketing Analytics Training",
    description:
      "Training on KPIs, dashboards, campaign reports, traffic sources, lead tracking, ROAS, CAC, CPL, and performance improvement.",
  },
  {
    title: "Sales Playbook Training",
    description:
      "Training on sales scripts, customer handling, lead qualification, objection handling, proposal explanation, and closing methods.",
  },
  {
    title: "CRM & Lead Management Training",
    description:
      "Training on enquiry tracking, follow-up scheduling, lead status updates, pipeline review, and conversion management.",
  },
  {
    title: "Content & Brand Communication Training",
    description:
      "Training on social media planning, brand messaging, content pillars, product communication, and customer-focused storytelling.",
  },
  {
    title: "Leadership & Review Training",
    description:
      "Training for managers on reviewing team performance, tracking goals, conducting sales meetings, and creating action plans.",
  },
];

const strengths = [
  "Practical business-focused training",
  "Customized modules for your industry and team level",
  "Support for marketing, sales, analytics, CRM, and reporting",
  "Focus on real implementation and measurable improvement",
  "B2B and B2C training expertise",
  "Templates, playbooks, and process guidance",
  "Training with consulting mindset",
  "Clear handover so your team can continue independently",
];

const deliverables = [
  "Customized training plan",
  "Marketing and sales training modules",
  "Sales playbook structure",
  "Lead management process",
  "Campaign planning templates",
  "Reporting format and KPI sheet",
  "Follow-up message templates",
  "Pitch and objection-handling guidance",
  "Content planning framework",
  "Dashboard and analytics guidance",
  "Team action plan after training",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-marketing-sales-training"
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
                name: "Marketing & Sales Training Programs",
                item: "https://www.asbconsulting.in/sales&marketing/marketing-sales-training",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-marketing-sales-training"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/sales&marketing/marketing-sales-training#webpage",
            url: "https://www.asbconsulting.in/sales&marketing/marketing-sales-training",
            name: "Marketing & Sales Training Programs for Business Teams in India",
            description:
              "AS Business Consulting provides practical marketing and sales training programs that help business teams improve skills, adopt latest tools, understand modern platforms, follow structured processes, and execute growth strategies more effectively.",
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

      <main className="overflow-hidden bg-[#f7f2f8] text-[#201625]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#502D52] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(244,216,138,0.18),transparent_28%),linear-gradient(135deg,#502D52_0%,#381b3d_48%,#241029_100%)]" />
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="relative max-w-7xl mx-auto px-5 py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-5">
                  Marketing & Sales Training
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Marketing & Sales Training Programs for Business Teams in
                  India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5 max-w-3xl">
                  Practical Training for Modern Marketing, Sales, Tools,
                  Analytics & Growth Execution
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/82 mb-4 max-w-3xl">
                  At <strong>AS Business Consulting</strong>, we provide
                  practical marketing and sales training programs that help
                  business teams improve skills, adopt latest tools, follow
                  structured processes, and execute growth strategies more
                  effectively.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/78 mb-7 max-w-3xl">
                  We help teams learn digital platforms, analytics dashboards,
                  CRM workflows, content planning, lead management, sales
                  playbooks, and performance reporting in a practical,
                  business-focused way.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Get Training Support <span className="ml-2">→</span>
                  </Link>

                  <Link
                    href="/our-services"
                    className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
                  <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-4">
                    Training Framework
                  </p>

                  <div className="space-y-3">
                    {[
                      "Digital Marketing Platforms",
                      "Analytics & Dashboards",
                      "Sales Playbooks",
                      "CRM & Lead Management",
                      "Reporting & Review Culture",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-2xl bg-white p-4 text-[#201625]"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#502D52] text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-[#f4d88a] p-5 text-[#2b1730]">
                    <p className="text-sm font-semibold leading-relaxed">
                      A structured training program helps your team improve
                      execution, reduce dependency, track results clearly, and
                      contribute better to business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Overview */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                "Digital Platforms",
                "Analytics & Reports",
                "Sales Playbook",
                "CRM & Lead Handling",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 shadow-sm ${
                    index % 2 === 0
                      ? "bg-[#502D52] border-[#502D52] text-white"
                      : "bg-[#fbf8fc] border-[#eaddec] text-[#201625]"
                  }`}
                >
                  <div
                    className={`mb-3 text-sm font-bold ${
                      index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <h3 className="text-base font-bold">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 bg-[#f7f2f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                What We Do
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Do in Marketing & Sales Training
              </h2>

              <p className="text-gray-600 leading-relaxed">
                We train teams on digital marketing platforms, analytics,
                dashboards, sales playbooks, CRM workflows, lead management,
                content communication, B2B, B2C, reporting, and decision-making.
              </p>
            </div>

            <div className="space-y-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[1.5rem] border border-[#eaddec] bg-white shadow-sm shadow-[#502D52]/5"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div
                      className={`lg:col-span-4 p-5 md:p-6 ${
                        index % 2 === 0
                          ? "bg-[#502D52] text-white"
                          : "bg-white text-[#201625]"
                      }`}
                    >
                      <p
                        className={`text-sm font-bold mb-2 ${
                          index % 2 === 0 ? "text-[#f4d88a]" : "text-[#d6a83f]"
                        }`}
                      >
                        Training 0{index + 1}
                      </p>
                      <h3 className="text-xl font-bold leading-snug">
                        {service.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-4 p-5 md:p-6 bg-white">
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </div>

                    <div
                      className={`lg:col-span-4 p-5 md:p-6 ${
                        index % 2 === 0 ? "bg-[#fbf8fc]" : "bg-[#502D52]"
                      }`}
                    >
                      <div className="grid grid-cols-1 gap-2">
                        {service.points.map((point, pointIndex) => (
                          <div
                            key={pointIndex}
                            className="flex items-start gap-2"
                          >
                            <span
                              className={`mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full ${
                                index % 2 === 0 ? "bg-[#502D52]" : "bg-[#f4d88a]"
                              }`}
                            />
                            <p
                              className={`text-sm leading-relaxed ${
                                index % 2 === 0
                                  ? "text-gray-700"
                                  : "text-white/82"
                              }`}
                            >
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="py-16 md:py-20 bg-[#fffaf0]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                  Key Points
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Key Points of Our Training Programs
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Our training is practical, customized, implementation-focused,
                  and designed to improve daily marketing, sales, reporting, and
                  lead management performance.
                </p>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyPoints.map((point, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border p-4 shadow-sm ${
                      index % 2 === 0
                        ? "bg-[#502D52] border-[#502D52] text-white"
                        : "bg-white border-[#eaddec] text-gray-700"
                    }`}
                  >
                    <p
                      className={`mb-2 text-xs font-bold ${
                        index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                      }`}
                    >
                      0{index + 1}
                    </p>
                    <p className="text-sm font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Benefits
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Benefits of Marketing & Sales Training with AS Business
                Consulting
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 ${
                    index % 2 === 0
                      ? "bg-[#fbf8fc] border-[#eaddec] text-[#201625]"
                      : "bg-[#502D52] border-[#502D52] text-white"
                  }`}
                >
                  <div
                    className={`mb-4 flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
                      index % 2 === 0
                        ? "bg-[#502D52] text-white"
                        : "bg-white text-[#502D52]"
                    }`}
                  >
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      index % 2 === 0 ? "text-gray-600" : "text-white/80"
                    }`}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-[#f7f2f8]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Applications
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Applications of Our Training Programs
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Our training programs are useful for marketing teams, sales
                teams, owners, managers, startups, B2B companies, B2C brands,
                service providers, and companies building internal marketing
                departments.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {applications.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border px-4 py-3 shadow-sm ${
                    index % 2 === 0
                      ? "bg-white border-white text-gray-700"
                      : "bg-[#502D52] border-[#502D52] text-white"
                  }`}
                >
                  <p className="text-sm font-semibold">
                    <span
                      className={
                        index % 2 === 0 ? "text-[#502D52]" : "text-[#f4d88a]"
                      }
                    >
                      •
                    </span>{" "}
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 bg-[#2f1935] text-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#f4d88a] mb-3">
                Process
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Our Training Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {processItems.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 ${
                    index % 2 === 0
                      ? "border-white/15 bg-white/10"
                      : "border-white bg-white text-[#201625]"
                  }`}
                >
                  <p
                    className={`mb-2 text-sm font-bold ${
                      index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                    }`}
                  >
                    Step {index + 1}
                  </p>

                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      index % 2 === 0 ? "text-white/78" : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Modules */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Core Modules
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Core Training Modules
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreModules.map((module, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border p-5 ${
                    index % 2 === 0
                      ? "bg-[#502D52] border-[#502D52] text-white"
                      : "bg-[#fbf8fc] border-[#eaddec] text-[#201625]"
                  }`}
                >
                  <p
                    className={`mb-2 text-sm font-bold ${
                      index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                    }`}
                  >
                    0{index + 1}
                  </p>

                  <h3 className="text-lg font-bold mb-2">{module.title}</h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      index % 2 === 0 ? "text-white/80" : "text-gray-600"
                    }`}
                  >
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose + Deliverables */}
        <section className="py-16 md:py-20 bg-[#fffaf0]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Why Choose AS Business Consulting for Marketing & Sales
                Training?
              </h2>

              <p className="leading-relaxed text-gray-700 mb-5">
                AS Business Consulting provides training that is practical,
                structured, and aligned with real business growth. We do not
                provide only general lectures. We train your team on actual
                tools, campaign planning, reporting systems, sales
                communication, and execution methods that improve daily
                performance.
              </p>

              <div className="space-y-3">
                {strengths.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border p-4 ${
                      index % 2 === 0
                        ? "bg-white border-[#eaddec] text-gray-700"
                        : "bg-[#502D52] border-[#502D52] text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">
                      <span
                        className={`font-bold ${
                          index % 2 === 0 ? "text-[#502D52]" : "text-[#f4d88a]"
                        }`}
                      >
                        {index + 1}.
                      </span>{" "}
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#502D52] mb-3">
                Deliverables
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Deliverables You Receive
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {deliverables.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl border p-4 ${
                      index % 2 === 0
                        ? "bg-[#502D52] border-[#502D52] text-white"
                        : "bg-white border-[#eaddec] text-gray-700"
                    }`}
                  >
                    <p className="text-sm font-medium leading-relaxed">
                      <span
                        className={`font-bold ${
                          index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                        }`}
                      >
                        {index + 1}.
                      </span>{" "}
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-[#f7f2f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="rounded-[2rem] bg-[#502D52] p-7 md:p-10 text-white shadow-xl shadow-[#502D52]/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <p className="text-sm font-bold tracking-[0.22em] uppercase text-[#f4d88a] mb-3">
                    Build a Skilled Marketing & Sales Team
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build a Skilled Marketing & Sales Team with AS Business
                    Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed mb-3">
                    If your business wants to improve team performance, adopt
                    modern marketing tools, strengthen sales processes,
                    understand analytics, and create better execution systems,{" "}
                    <strong>AS Business Consulting</strong> can help with
                    practical training programs.
                  </p>

                  <p className="text-white/82 leading-relaxed">
                    We help your team learn the latest tools and techniques,
                    follow structured playbooks, improve customer communication,
                    track results clearly, and contribute more effectively to
                    business growth.
                  </p>
                </div>

                <div className="lg:text-right">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Get Started <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
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