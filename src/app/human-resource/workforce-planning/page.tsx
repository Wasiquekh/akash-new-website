import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title:
    "Workforce Planning & Talent Acquisition Services in India | AS Business",
  description:
    "AS Business Consulting provides workforce planning and talent acquisition services in India including role design, manpower planning, sourcing strategy, interview frameworks, hiring process improvement, and talent pipeline development.",
  alternates: {
    canonical: "https://www.asbconsulting.in/human-resource/workforce-planning",
  },
};

const services = [
  {
    title: "Role Design & Organization Structure Planning",
    description:
      "We help businesses define clear roles, responsibilities, reporting lines, skill requirements, and performance expectations.",
    points: [
      "Job role analysis",
      "Department-wise manpower planning",
      "Reporting structure development",
      "Job description creation",
    ],
  },
  {
    title: "Manpower Planning & Hiring Forecast",
    description:
      "We help organizations estimate current and future workforce requirements based on business goals, expansion plans, and operational needs.",
    points: [
      "Current workforce assessment",
      "Future hiring requirement planning",
      "Critical role identification",
      "Skill gap analysis",
    ],
  },
  {
    title: "Sourcing Strategy for Quality Candidates",
    description:
      "We help businesses identify the best hiring channels based on role type, industry, location, experience level, and urgency.",
    points: [
      "Job portal strategy",
      "LinkedIn sourcing plan",
      "Employee referral planning",
      "Industry-specific candidate search",
    ],
  },
  {
    title: "Interview Frameworks & Candidate Assessment",
    description:
      "We design structured interview frameworks that help companies evaluate candidates fairly, consistently, and professionally.",
    points: [
      "Interview question banks",
      "Competency-based evaluation",
      "Scorecard-based candidate review",
      "Role-fit and culture-fit assessment",
    ],
  },
  {
    title: "Hiring Process Improvement",
    description:
      "We help improve your recruitment workflow from vacancy approval to final onboarding.",
    points: [
      "Recruitment process mapping",
      "Interview scheduling structure",
      "Offer coordination process",
      "Recruitment performance tracking",
    ],
  },
  {
    title: "Talent Pipeline Development",
    description:
      "We help create a talent pipeline so your organization has access to suitable candidates when hiring needs arise.",
    points: [
      "Candidate database creation",
      "Passive talent engagement",
      "Campus and fresher pipeline",
      "Leadership pipeline planning",
    ],
  },
];

const benefits = [
  "Better hiring quality",
  "Faster recruitment process",
  "Reduced hiring mistakes",
  "Improved team productivity",
  "Stronger organization structure",
  "Better workforce cost control",
];

const applications = [
  "Startups building their first team",
  "SMEs planning business expansion",
  "Manufacturing companies needing skilled manpower",
  "Service businesses hiring support teams",
  "Companies opening new branches or locations",
  "Businesses improving HR systems and recruitment processes",
];

const processItems = [
  "Business & Workforce Understanding",
  "Role & Skill Gap Analysis",
  "Workforce Planning Roadmap",
  "Sourcing Strategy Development",
  "Interview Framework Creation",
  "Recruitment Execution Support",
];

const deliverables = [
  "Workforce planning report",
  "Department-wise manpower requirement",
  "Role design and responsibility mapping",
  "Job descriptions for required roles",
  "Skill gap analysis",
  "Hiring priority plan",
  "Sourcing strategy",
  "Interview framework",
  "Candidate assessment scorecard",
  "Recruitment workflow",
];

const strengths = [
  "Practical understanding of Indian hiring markets",
  "Structured approach to role design and manpower planning",
  "Support for startups, SMEs, and growing enterprises",
  "Interview frameworks for fair and consistent hiring",
  "Focus on quality hiring, not only quick hiring",
  "End-to-end HR consulting support from planning to execution",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-workforce-planning"
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
                name: "Workforce Planning",
                item: "https://www.asbconsulting.in/human-resource/workforce-planning",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-workforce-planning"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/human-resource/workforce-planning#webpage",
            url: "https://www.asbconsulting.in/human-resource/workforce-planning",
            name: "Workforce Planning & Talent Acquisition Services in India",
            description:
              "AS Business Consulting helps organizations build the right workforce structure and hire the right talent for business growth through role design, manpower planning, sourcing strategy, interview frameworks, and talent pipeline development.",
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
                  HR Consulting • Hiring Strategy
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Workforce Planning & Talent Acquisition Services in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5">
                  Strategic Workforce Planning and Talent Acquisition Solutions
                  for Growing Businesses
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4 max-w-2xl">
                  At <strong>AS Business Consulting</strong>, we help
                  organizations build the right workforce structure and hire the
                  right talent for business growth.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/75 mb-7 max-w-2xl">
                  We support businesses with role design, manpower planning,
                  sourcing strategy, interview frameworks, and hiring process
                  improvement.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Get Consultation <span className="ml-2">→</span>
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
                    "Role Design",
                    "Hiring Forecast",
                    "Sourcing Plan",
                    "Interview Framework",
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
                    A structured hiring system helps reduce delays, improve
                    candidate quality, and build a stronger workforce
                    foundation.
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
                  Workforce Planning
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Build the Right Workforce Structure
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-white/82">
                  Workforce planning helps identify how many people your
                  organization needs, which roles are critical, what skills are
                  required, and how teams should be structured to support
                  business goals.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Talent Acquisition
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1622]">
                  Hire the Right Talent at the Right Time
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Talent acquisition is the strategic process of attracting,
                  evaluating, selecting, and onboarding suitable candidates for
                  current and future business needs.
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
                Workforce Planning & Talent Acquisition Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help businesses create practical HR systems that improve
                hiring quality, reduce recruitment delays, and build a
                future-ready workforce.
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
                  Benefits of Our HR Support
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

        {/* PROCESS */}
        <section className="py-14 bg-[#f7f4f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Hiring Process
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A simple and structured process to plan roles, improve hiring
                quality, and support better workforce decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                    Build the Right Team
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build a Strong Workforce with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed">
                    If your business wants to hire the right people, improve
                    recruitment quality, define clear roles, reduce hiring
                    delays, or plan manpower for growth, we can help you create
                    a structured workforce and talent acquisition strategy.
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