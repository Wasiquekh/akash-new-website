import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Campus & Early-Talent Programs in India | AS Business Consulting",
  description:
    "AS Business Consulting provides campus and early-talent programs in India including college outreach, internship funnels, fresher hiring, job-readiness workshops, assessment, onboarding, and employer branding.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/human-resource/campus-early-talent-programs",
  },
};

const services = [
  {
    title: "College Outreach Programs",
    description:
      "We help companies connect with colleges, universities, training institutes, and placement cells to create structured campus hiring and talent engagement opportunities.",
    points: [
      "College and institute identification",
      "Placement cell coordination",
      "Campus hiring calendar planning",
      "Pre-placement talk planning",
    ],
  },
  {
    title: "Campus Hiring Strategy",
    description:
      "We design campus hiring strategies that help businesses attract suitable students based on role requirements, skills, location, qualification, and business goals.",
    points: [
      "Fresher role identification",
      "Qualification criteria planning",
      "Campus recruitment process design",
      "Interview framework for freshers",
    ],
  },
  {
    title: "Internship Funnel Development",
    description:
      "We help businesses design internship funnels that attract, train, assess, and convert interns into valuable full-time team members.",
    points: [
      "Internship role design",
      "Internship project structure",
      "Mentor assignment framework",
      "Pre-placement offer conversion planning",
    ],
  },
  {
    title: "Job-Readiness Workshops",
    description:
      "We conduct job-readiness workshops to prepare students for workplace skills, communication, interviews, professional behaviour, and real job expectations.",
    points: [
      "Resume building",
      "Interview preparation",
      "Communication skills",
      "Corporate etiquette",
    ],
  },
  {
    title: "Skill Assessment & Candidate Screening",
    description:
      "We help companies evaluate students and freshers through practical screening methods so that hiring decisions are more accurate.",
    points: [
      "Aptitude test planning",
      "Technical assessment structure",
      "Communication assessment",
      "Interview scorecards",
    ],
  },
  {
    title: "Employer Branding for Campus Hiring",
    description:
      "We help businesses present themselves as attractive employers for students, freshers, colleges, and young professionals.",
    points: [
      "Company presentation for campus",
      "Career opportunity messaging",
      "Student-focused brochures",
      "Company culture communication",
    ],
  },
  {
    title: "Early-Talent Onboarding & Training Support",
    description:
      "We help freshers understand the company, role expectations, work culture, reporting structure, learning roadmap, and performance goals.",
    points: [
      "Fresher induction plan",
      "Mentor allocation plan",
      "30-60-90 day learning roadmap",
      "Performance review format",
    ],
  },
  {
    title: "Campus Placement & Career Guidance Programs",
    description:
      "We support institutions with placement-readiness programs that improve student employability and prepare them for interviews, internships, and careers.",
    points: [
      "Placement preparation sessions",
      "Mock interviews",
      "Career path awareness",
      "Student confidence-building sessions",
    ],
  },
];

const benefits = [
  "Strong early-talent pipeline",
  "Better fresher hiring quality",
  "Reduced hiring cost",
  "Improved internship outcomes",
  "Better employer visibility",
  "Faster workforce development",
  "Better student employability",
];

const applications = [
  "Companies hiring fresh graduates",
  "Startups building junior teams",
  "SMEs needing entry-level employees",
  "Manufacturing companies hiring trainees",
  "IT and software companies hiring interns",
  "Service businesses hiring sales and support staff",
  "Colleges improving placement readiness",
  "Training institutes preparing students for jobs",
  "Businesses creating internship programs",
  "Companies building management trainee programs",
  "Organizations planning campus recruitment drives",
  "HR teams improving fresher hiring process",
  "Companies looking for cost-effective talent pipelines",
  "Institutions organizing job-readiness workshops",
];

const processItems = [
  "Requirement Understanding",
  "College & Candidate Mapping",
  "Program Design",
  "Outreach & Engagement",
  "Screening & Selection",
  "Internship or Fresher Onboarding",
  "Review & Conversion",
];

const deliverables = [
  "Campus outreach plan",
  "College and institute target list",
  "Fresher hiring strategy",
  "Internship program structure",
  "Internship project framework",
  "Student registration and screening format",
  "Assessment and interview scorecards",
  "Pre-placement talk content",
  "Job-readiness workshop modules",
  "Resume and interview preparation framework",
  "Fresher onboarding plan",
  "30-60-90 day training roadmap",
  "Candidate performance review format",
  "Intern-to-employee conversion plan",
];

const strengths = [
  "Practical understanding of Indian campus hiring systems",
  "Support for companies, colleges, and training institutes",
  "Structured internship and fresher hiring frameworks",
  "Job-readiness workshops focused on real workplace needs",
  "Candidate assessment and interview process design",
  "Employer branding support for better campus visibility",
  "Customized programs based on industry, role, and location",
  "End-to-end support from outreach to onboarding",
];

const coreAreas = [
  "Campus Outreach",
  "Fresher Hiring Quality",
  "Internship Structure",
  "Job Readiness",
  "Employer Branding",
  "Early-Talent Retention",
];

const keyPoints = [
  "College outreach and placement cell coordination",
  "Campus hiring strategy for freshers and entry-level roles",
  "Internship funnel design and intern-to-employee conversion planning",
  "Job-readiness workshops for students and fresh graduates",
  "Fresher screening, assessment, and interview frameworks",
  "Employer branding support for campus recruitment",
  "Early-talent onboarding and training roadmap",
  "Support for companies, colleges, institutes, and training organizations",
  "Practical programs aligned with Indian hiring and education systems",
  "Structured approach to building a future-ready workforce",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-campus-early-talent"
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
                name: "Campus & Early-Talent Programs",
                item: "https://www.asbconsulting.in/human-resource/campus-early-talent-programs",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-campus-early-talent"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/human-resource/campus-early-talent-programs#webpage",
            url: "https://www.asbconsulting.in/human-resource/campus-early-talent-programs",
            name: "Campus & Early-Talent Programs in India",
            description:
              "AS Business Consulting helps organizations build campus and early-talent programs through college outreach, internship funnel development, fresher hiring strategy, job-readiness workshops, assessment, onboarding, and employer branding.",
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
                  College Outreach • Internship Funnel • Job Readiness
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Campus & Early-Talent Programs in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5">
                  College Outreach, Internship Funnel & Job-Readiness Workshop
                  Solutions for Future Workforce Development
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4 max-w-2xl">
                  At <strong>AS Business Consulting</strong>, we help
                  organizations build strong campus and early-talent programs to
                  identify, attract, train, and hire young talent from colleges,
                  universities, institutes, and skill-development platforms.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/75 mb-7 max-w-2xl">
                  Our programs help companies create reliable entry-level talent
                  pipelines, improve fresher hiring quality, run internship
                  programs, conduct campus outreach, and prepare students for
                  real workplace expectations.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Build Talent Pipeline <span className="ml-2">→</span>
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
                    "College Outreach",
                    "Internship Funnel",
                    "Fresher Hiring",
                    "Job Readiness",
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
                    A structured campus hiring system helps companies find,
                    assess, train, and retain young talent with better quality
                    and lower hiring dependency.
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
                  Campus & Early Talent
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Build a Future-Ready Workforce
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-white/82">
                  Campus and early-talent programs are structured hiring and
                  training initiatives that help companies engage with students,
                  fresh graduates, interns, trainees, and entry-level
                  professionals.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Talent Pipeline
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1622]">
                  Improve Fresher Hiring and Internship Outcomes
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  These programs help businesses identify young talent early,
                  train them with practical skills, evaluate real performance,
                  and convert suitable candidates into full-time employees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* KEY POINTS */}
        <section className="py-14 bg-[#f7f4f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                Key Points
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Campus & Early-Talent Programs Include
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We support the full early-talent cycle, from college outreach
                and student engagement to screening, internship structure,
                onboarding, and conversion planning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {keyPoints.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-[24px] p-5 border ${
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
                  <h3 className="text-base font-bold leading-snug">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="max-w-3xl mb-10">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Campus & Early-Talent Program Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help organizations create practical programs for college
                outreach, fresher hiring, internship funnels, student
                assessments, job-readiness workshops, employer branding, and
                early-talent onboarding.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`rounded-[28px] p-6 border ${
                    index % 2 === 0
                      ? "bg-[#fbf8fc] border-[#eaddec]"
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
                            ? "bg-white border border-[#eaddec] text-gray-700"
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
        <section className="py-14 bg-[#f7f4f8]">
          <div className="max-w-7xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-[28px] bg-[#502D52] p-7 text-white">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-3">
                  Benefits
                </p>
                <h2 className="text-3xl font-bold mb-5">
                  Benefits of Campus & Early-Talent Programs
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

              <div className="rounded-[28px] border border-[#eaddec] bg-white p-7">
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
                          : "bg-[#fbf8fc] border border-[#eaddec] text-gray-700"
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
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <div className="mb-8">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Process
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Campus & Early-Talent Program Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A clear process to understand hiring goals, map colleges and
                  candidates, design outreach, manage screening, support
                  onboarding, and improve conversion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processItems.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[24px] p-5 border ${
                      index % 2 === 0
                        ? "bg-[#fbf8fc] border-[#eaddec]"
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
                  We improve the early-talent areas that affect fresher hiring
                  quality, internship outcomes, employer visibility, student
                  readiness, and long-term retention.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreAreas.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-[24px] p-5 border ${
                      index % 2 === 0
                        ? "bg-[#502D52] border-[#502D52] text-white"
                        : "bg-[#fbf8fc] border-[#eaddec]"
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
        <section className="py-14 bg-[#f7f4f8]">
          <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-[28px] border border-[#eaddec] bg-white p-7">
              <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-bold mb-5">
                Why Choose AS Business Consulting?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-5">
                AS Business Consulting helps businesses and institutions create
                practical, structured, and result-focused campus and
                early-talent programs. We do not treat campus hiring as a
                one-time recruitment activity; we help build long-term talent
                pipelines through outreach, internships, job-readiness
                workshops, assessments, onboarding, and employer branding.
              </p>

              <div className="space-y-3">
                {strengths.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#fbf8fc] border border-[#eaddec] px-4 py-3 text-sm text-gray-700"
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
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-5">
            <div className="rounded-[32px] bg-[#502D52] p-8 md:p-10 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#f4d88a] mb-3">
                    Build a Future-Ready Talent Pipeline
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build Strong Campus & Early-Talent Programs with AS Business
                    Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed">
                    If your organization wants to hire freshers, build
                    internship programs, connect with colleges, improve campus
                    recruitment, or prepare students for employment, we can help
                    you create a structured Campus & Early-Talent Program.
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