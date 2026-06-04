import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Employee Engagement Programs in India | AS Business Consulting",
  description:
    "AS Business Consulting provides employee engagement programs in India including recognition, wellness, internal communication, pulse surveys, motivation, retention, and team culture development.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/human-resource/employee-engagement",
  },
};

const services = [
  {
    title: "Employee Recognition Programs",
    description:
      "We help organizations create structured recognition systems that appreciate performance, effort, teamwork, innovation, discipline, and contribution.",
    points: [
      "Employee appreciation framework",
      "Monthly and quarterly recognition programs",
      "Performance-based awards",
      "Peer-to-peer appreciation ideas",
    ],
  },
  {
    title: "Workplace Wellness Programs",
    description:
      "We help businesses plan wellness initiatives that support physical, mental, emotional, and workplace wellbeing.",
    points: [
      "Health and wellness awareness sessions",
      "Stress management activities",
      "Work-life balance initiatives",
      "Wellness communication calendar",
    ],
  },
  {
    title: "Communication Rhythm & Internal Communication",
    description:
      "We help organizations set a clear communication rhythm so employees receive timely updates, understand expectations, and feel connected to leadership.",
    points: [
      "Weekly and monthly communication structure",
      "Team meeting rhythm",
      "Leadership communication plan",
      "Town hall planning",
    ],
  },
  {
    title: "Pulse Surveys & Employee Feedback",
    description:
      "We design short, practical feedback systems that help management identify issues early and take action.",
    points: [
      "Employee engagement survey design",
      "Short pulse survey questionnaires",
      "Anonymous feedback structure",
      "Survey result analysis",
    ],
  },
  {
    title: "Employee Retention & Motivation Programs",
    description:
      "We help companies identify retention risks and create motivation programs that improve loyalty and workplace commitment.",
    points: [
      "Attrition reason analysis",
      "Employee motivation planning",
      "Retention risk identification",
      "Team morale-building activities",
    ],
  },
  {
    title: "Team Building & Culture Development",
    description:
      "We help organizations design engagement activities and culture-building systems that support teamwork.",
    points: [
      "Team bonding activities",
      "Department engagement plans",
      "Culture values communication",
      "Celebration and milestone planning",
    ],
  },
  {
    title: "Manager Enablement for Engagement",
    description:
      "We help managers communicate better, appreciate employees, handle concerns, conduct reviews, and build stronger team relationships.",
    points: [
      "Manager communication guidance",
      "One-on-one meeting framework",
      "Feedback conversation structure",
      "Team motivation methods",
    ],
  },
];

const benefits = [
  "Improved employee motivation",
  "Higher productivity",
  "Better employee retention",
  "Stronger workplace culture",
  "Better communication",
  "Early problem identification",
];

const applications = [
  "Startups building workplace culture",
  "SMEs improving employee satisfaction",
  "Manufacturing companies managing shop-floor and office teams",
  "Service businesses with customer-facing employees",
  "Corporate teams improving internal communication",
  "Companies facing high attrition",
  "Organizations with low morale or poor team coordination",
  "HR teams planning recognition and wellness programs",
];

const processItems = [
  "Workplace Understanding",
  "Engagement Gap Analysis",
  "Program Design",
  "Survey & Feedback Setup",
  "Implementation Support",
  "Review & Action Planning",
];

const deliverables = [
  "Employee engagement strategy",
  "Recognition program framework",
  "Wellness activity calendar",
  "Internal communication rhythm plan",
  "Pulse survey questionnaire",
  "Employee feedback report format",
  "Engagement score tracking method",
  "Team-building activity plan",
  "Manager one-on-one meeting framework",
  "Employee motivation and retention action plan",
];

const strengths = [
  "Practical understanding of Indian workplace challenges",
  "Customized engagement plans for startups, SMEs, and enterprises",
  "Strong focus on recognition, communication, wellness, and feedback",
  "Pulse survey design with action-based reporting",
  "Support for both office and field/shop-floor employees",
  "Manager enablement for better team engagement",
];

const coreAreas = [
  "Employee Recognition",
  "Employee Wellness",
  "Internal Communication",
  "Employee Feedback",
  "Workplace Culture",
  "Employee Retention",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-employee-engagement"
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
                name: "Employee Engagement Programs",
                item: "https://www.asbconsulting.in/human-resource/employee-engagement-programs",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-employee-engagement"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/human-resource/employee-engagement-programs#webpage",
            url: "https://www.asbconsulting.in/human-resource/employee-engagement-programs",
            name: "Employee Engagement Programs in India",
            description:
              "AS Business Consulting helps organizations build engaged, motivated, and high-performing teams through employee recognition, wellness, internal communication, pulse surveys, team motivation, and retention improvement.",
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

      <main className="overflow-hidden bg-[#f7f4f8] text-[#1d1622]">
        {/* HERO */}
        <section className="bg-[#502D52] text-white">
          <div className="max-w-7xl mx-auto px-5 py-14 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase text-[#f4d88a] mb-5">
                  Recognition • Wellness • Feedback
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Employee Engagement Programs in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5">
                  Employee Recognition, Wellness, Communication & Pulse Survey
                  Solutions for Better Workplace Performance
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4 max-w-2xl">
                  At <strong>AS Business Consulting</strong>, we help
                  organizations build engaged, motivated, and high-performing
                  teams through structured employee engagement programs.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/75 mb-7 max-w-2xl">
                  Our programs focus on recognition, workplace wellness,
                  internal communication, feedback systems, pulse surveys, team
                  motivation, and retention improvement.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Get Engagement Support <span className="ml-2">→</span>
                  </Link>

                  <Link
                    href="/our-services"
                    className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition"
                  >
                    View Services
                  </Link>
                </div>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Recognition",
                    "Wellness",
                    "Communication",
                    "Pulse Surveys",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-3xl p-5 border ${
                        index % 2 === 0
                          ? "bg-white text-[#1d1622] border-white"
                          : "bg-[#6a3d6d] text-white border-[#6a3d6d]"
                      }`}
                    >
                      <div
                        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                          index % 2 === 0
                            ? "bg-[#502D52] text-white"
                            : "bg-white text-[#502D52]"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold leading-snug">{item}</h3>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-3xl bg-white/10 border border-white/15 p-5">
                  <p className="text-sm leading-relaxed text-white/80">
                    A structured engagement system helps employees feel valued,
                    heard, supported, and connected to the organization’s goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW 50/50 */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-[28px] bg-[#502D52] p-7 text-white">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-3">
                  Employee Engagement
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Build Stronger Employee Connection
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-white/82">
                  Employee Engagement is the emotional and professional
                  connection employees have with their organization, team, work,
                  and leadership.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Workplace Performance
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1622]">
                  Improve Culture, Morale and Retention
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  A strong engagement program helps businesses improve morale,
                  reduce attrition, increase productivity, build trust, and
                  create a better workplace culture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-14 bg-[#f7f4f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Employee Engagement Program Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help organizations create practical engagement systems that
                improve recognition, wellness, communication, feedback, culture,
                motivation, and retention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`rounded-[28px] p-6 border ${
                    index % 2 === 0
                      ? "bg-white border-[#eaddec]"
                      : "bg-[#502D52] border-[#502D52] text-white"
                  }`}
                >
                  <p
                    className={`text-sm font-bold mb-3 ${
                      index % 2 === 0 ? "text-[#502D52]" : "text-[#f4d88a]"
                    }`}
                  >
                    0{index + 1}
                  </p>

                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                  <p
                    className={`text-sm leading-relaxed mb-5 ${
                      index % 2 === 0 ? "text-gray-600" : "text-white/80"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className={`rounded-xl px-3 py-2 text-sm ${
                          index % 2 === 0
                            ? "bg-[#f7f1f8] text-gray-700"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS + APPLICATIONS */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-[28px] bg-[#502D52] p-7 text-white">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-3">
                  Benefits
                </p>
                <h2 className="text-3xl font-bold mb-5">
                  Benefits of Employee Engagement Programs
                </h2>

                <div className="space-y-3">
                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm"
                    >
                      <span className="font-bold text-[#f4d88a] mr-2">
                        {index + 1}.
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Applications
                </p>
                <h2 className="text-3xl font-bold mb-5">
                  Where This Service Helps
                </h2>

                <div className="flex flex-wrap gap-3">
                  {applications.map((item, index) => (
                    <span
                      key={index}
                      className={`rounded-full px-4 py-2 text-sm font-medium ${
                        index % 2 === 0
                          ? "bg-[#502D52] text-white"
                          : "bg-white border border-[#eaddec] text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS + CORE AREAS */}
        <section className="py-14 bg-[#f7f4f8]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <div className="mb-8">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Process
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Employee Engagement Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A clear process to understand workplace gaps, design
                  engagement programs, launch feedback systems, and improve
                  employee experience.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processItems.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[24px] p-5 border ${
                      index % 2 === 0
                        ? "bg-white border-[#eaddec]"
                        : "bg-[#502D52] border-[#502D52] text-white"
                    }`}
                  >
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        index % 2 === 0
                          ? "bg-[#502D52] text-white"
                          : "bg-white text-[#502D52]"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <h3 className="text-lg font-bold leading-snug">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-8">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Core Areas
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Core Areas We Improve
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We improve the workplace experience areas that affect
                  motivation, trust, productivity, retention, and company
                  culture.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreAreas.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[24px] p-5 border ${
                      index % 2 === 0
                        ? "bg-[#502D52] border-[#502D52] text-white"
                        : "bg-white border-[#eaddec]"
                    }`}
                  >
                    <p
                      className={`text-sm font-bold mb-2 ${
                        index % 2 === 0 ? "text-[#f4d88a]" : "text-[#502D52]"
                      }`}
                    >
                      0{index + 1}
                    </p>
                    <h3 className="text-lg font-bold">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE + DELIVERABLES */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold mb-5">
                Why Choose AS Business Consulting?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                AS Business Consulting helps organizations create employee
                engagement programs that are structured, practical, and aligned
                with business goals. We do not focus only on one-time events; we
                help build ongoing engagement systems.
              </p>

              <div className="space-y-3">
                {strengths.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-[#eaddec] px-4 py-3 text-sm text-gray-700"
                  >
                    <span className="font-bold text-[#502D52] mr-2">
                      {index + 1}.
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#502D52] p-7 text-white">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-3">
                Deliverables
              </p>
              <h2 className="text-3xl font-bold mb-5">
                Deliverables You Receive
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/10 border border-white/10 px-4 py-3 text-sm text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 bg-[#f7f4f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="rounded-[32px] bg-[#502D52] p-8 md:p-10 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-3">
                    Build a More Engaged Workforce
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build a Better Workplace Culture with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed">
                    If your organization wants to improve employee motivation,
                    reduce attrition, strengthen workplace culture, improve
                    communication, or create structured employee feedback
                    systems, we can help you build a practical employee
                    engagement program.
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