import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Recruitment & Executive Search Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides recruitment and executive search services in India including leadership hiring, niche talent search, candidate screening, interview coordination, salary benchmarking, and hiring process consulting.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/human-resource/recruitment-executive-search",
  },
};

const services = [
  {
    title: "Leadership Hiring",
    description:
      "We help organizations hire senior professionals and leadership candidates who can manage teams, drive business strategy, improve operations, and contribute to long-term growth.",
    points: [
      "CXO and senior management hiring",
      "Department head recruitment",
      "Business unit leader hiring",
      "Leadership competency evaluation",
    ],
  },
  {
    title: "Executive Search for Critical Roles",
    description:
      "We help companies identify and approach suitable senior candidates from relevant industries and competitor markets through confidential, targeted, and research-based search.",
    points: [
      "Target company mapping",
      "Senior candidate identification",
      "Passive candidate outreach",
      "Confidential hiring support",
    ],
  },
  {
    title: "Niche Industry Role Hiring",
    description:
      "We support specialized hiring through focused search, industry mapping, and skill-based screening for hard-to-fill business roles.",
    points: [
      "Technical role hiring",
      "Engineering and manufacturing talent search",
      "Export-import and international business roles",
      "Hard-to-fill position search",
    ],
  },
  {
    title: "Mid-Level and Managerial Recruitment",
    description:
      "We help companies hire experienced professionals and managers who can handle execution, team coordination, client management, operations, and performance delivery.",
    points: [
      "Sales manager hiring",
      "HR manager hiring",
      "Operations manager hiring",
      "Project manager hiring",
    ],
  },
  {
    title: "Candidate Screening & Assessment",
    description:
      "We design structured screening and assessment methods to ensure that candidates are evaluated professionally, fairly, and according to business needs.",
    points: [
      "Resume screening",
      "Skill-based evaluation",
      "Behavioural assessment",
      "Interview scorecard preparation",
    ],
  },
  {
    title: "Interview Coordination & Selection Support",
    description:
      "We support interview planning, candidate briefing, feedback collection, comparison summaries, and selection workflows to improve hiring speed.",
    points: [
      "Interview scheduling",
      "Candidate briefing",
      "Feedback collection format",
      "Final selection support",
    ],
  },
  {
    title: "Salary Benchmarking & Offer Support",
    description:
      "We help businesses understand salary expectations and prepare better offer strategies for senior, managerial, and niche hiring requirements.",
    points: [
      "Market salary benchmarking",
      "Candidate compensation analysis",
      "Offer structure guidance",
      "Joining follow-up support",
    ],
  },
  {
    title: "Recruitment Process Consulting",
    description:
      "We help companies improve their internal recruitment system so future hiring becomes faster, structured, and more reliable.",
    points: [
      "Hiring workflow review",
      "Job description improvement",
      "Interview framework design",
      "Recruitment reporting format",
    ],
  },
];

const benefits = [
  "Access to better talent",
  "Faster hiring for critical roles",
  "Improved candidate quality",
  "Reduced hiring risk",
  "Confidential hiring support",
  "Better market understanding",
  "Stronger business performance",
];

const applications = [
  "Companies hiring senior leaders",
  "Businesses replacing critical positions",
  "Startups building leadership teams",
  "SMEs expanding departments",
  "Manufacturing companies hiring plant, production, and quality leaders",
  "Service companies hiring sales, HR, finance, and operations managers",
  "Companies hiring niche technical professionals",
  "Organizations hiring confidentially",
  "Businesses entering new markets",
  "Companies needing industry-specific talent",
  "Enterprises hiring regional or business unit heads",
  "Organizations improving recruitment quality and speed",
];

const processItems = [
  "Requirement Understanding",
  "Job Role & Candidate Profile Design",
  "Talent Mapping & Sourcing",
  "Screening & Shortlisting",
  "Interview Coordination",
  "Selection & Offer Support",
  "Post-Joining Review",
];

const deliverables = [
  "Role requirement analysis",
  "Job description and candidate profile",
  "Target industry and candidate mapping",
  "Sourcing strategy",
  "Shortlisted candidate profiles",
  "Candidate screening summary",
  "Interview coordination support",
  "Candidate assessment scorecard",
  "Salary benchmarking inputs",
  "Offer and joining follow-up support",
  "Recruitment status report",
  "Hiring process improvement recommendations",
];

const strengths = [
  "Practical understanding of Indian recruitment markets",
  "Support for leadership, managerial, technical, and niche hiring",
  "Structured search and candidate screening approach",
  "Confidential executive search support",
  "Industry-specific talent mapping",
  "Interview framework and candidate assessment support",
  "Salary benchmarking and offer coordination",
  "Customized recruitment solutions based on business needs",
  "End-to-end hiring support from planning to joining",
];

const coreAreas = [
  "Leadership Quality",
  "Hiring Accuracy",
  "Niche Talent Access",
  "Recruitment Speed",
  "Candidate Experience",
  "Offer and Joining Success",
];

const keyPoints = [
  "Leadership hiring for senior and critical positions",
  "Executive search for confidential and high-impact roles",
  "Niche industry hiring for specialized business needs",
  "Structured candidate screening and assessment",
  "Industry-wise talent mapping and targeted search",
  "Interview coordination and selection support",
  "Salary benchmarking and offer management support",
  "Recruitment process improvement for better hiring outcomes",
  "Suitable for startups, SMEs, growing companies, and enterprises",
  "Practical hiring support aligned with Indian business needs",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-recruitment-executive-search"
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
                name: "Recruitment & Executive Search Services",
                item: "https://www.asbconsulting.in/human-resource/recruitment-executive-search",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-recruitment-executive-search"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/human-resource/recruitment-executive-search#webpage",
            url: "https://www.asbconsulting.in/human-resource/recruitment-executive-search",
            name: "Recruitment & Executive Search Services in India",
            description:
              "AS Business Consulting helps organizations hire skilled professionals, senior leaders, industry specialists, and hard-to-find talent through recruitment and executive search services in India.",
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
                  Leadership Hiring • Niche Search • Executive Recruitment
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Recruitment & Executive Search Services in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5">
                  Leadership Hiring and Niche Talent Search Solutions for
                  Growing Businesses
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4 max-w-2xl">
                  At <strong>AS Business Consulting</strong>, we provide
                  professional recruitment and executive search services to help
                  organizations hire skilled professionals, senior leaders,
                  industry specialists, and hard-to-find talent.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/75 mb-7 max-w-2xl">
                  Our services are designed for startups, SMEs, growing
                  companies, manufacturing businesses, service organizations,
                  corporate teams, and enterprises that need reliable hiring
                  support for critical business roles.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Hire Better Talent <span className="ml-2">→</span>
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
                    "Leadership Hiring",
                    "Executive Search",
                    "Niche Talent",
                    "Candidate Screening",
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
                    A structured recruitment system helps businesses reduce
                    hiring delays, improve candidate quality, and make better
                    hiring decisions for important roles.
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
                  Recruitment Support
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Hire the Right People for Business Growth
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-white/82">
                  Recruitment is the process of identifying, attracting,
                  screening, interviewing, and selecting suitable candidates for
                  business roles.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Executive Search
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1622]">
                  Find Senior Leaders and Critical Talent
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Executive search is a specialized recruitment service focused
                  on hiring senior-level professionals, leadership talent,
                  decision-makers, and industry experts for critical positions.
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
                What Our Recruitment & Executive Search Service Includes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We support the full recruitment cycle, from role understanding
                and candidate mapping to screening, interview coordination,
                offer support, and joining follow-up.
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
                Recruitment & Executive Search Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help organizations hire the right people for leadership
                positions, managerial roles, technical roles, operational roles,
                sales roles, and niche industry requirements.
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
                  Benefits of Recruitment & Executive Search
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
                  Our Recruitment & Executive Search Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A clear process to understand hiring goals, design candidate
                  profiles, map talent, screen applicants, coordinate
                  interviews, support offers, and review hiring outcomes.
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
                  We improve the hiring areas that directly affect leadership
                  quality, recruitment speed, candidate experience, hiring
                  accuracy, niche talent access, and joining success.
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
                AS Business Consulting helps businesses hire with clarity,
                structure, and confidence. We do not focus only on sending
                resumes. We understand your business requirement, define the
                right candidate profile, search strategically, screen carefully,
                and support the complete hiring process from requirement to
                joining.
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
                    Hire the Right Leaders and Specialists
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build Stronger Teams with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed">
                    If your organization needs leadership hiring, executive
                    search, niche industry recruitment, managerial hiring, or
                    structured recruitment support, we can help you find the
                    right talent and improve hiring decisions.
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