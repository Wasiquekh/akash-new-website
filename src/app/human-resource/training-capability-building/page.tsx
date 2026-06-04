import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "Training & Capability Building Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides training and capability building services in India including professional training, seminars, leadership coaching, soft skills training, role-based training, skill gap analysis, and employee development programs.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/human-resource/training-capability-building",
  },
};

const services = [
  {
    title: "Professional Training Programs",
    description:
      "We design and deliver professional training programs based on the organization’s business needs, employee roles, performance gaps, and growth goals.",
    points: [
      "Workplace communication training",
      "Time management training",
      "Customer service training",
      "Productivity improvement training",
    ],
  },
  {
    title: "Seminars & Lectures",
    description:
      "We conduct seminars and lectures for employees, managers, business owners, students, and institutional audiences to improve knowledge, awareness, motivation, and professional understanding.",
    points: [
      "Leadership awareness",
      "Career development",
      "Business growth mindset",
      "Skill development and employability",
    ],
  },
  {
    title: "Leadership Coaching",
    description:
      "We provide leadership coaching to help managers, supervisors, founders, department heads, and future leaders improve decision-making, communication, accountability, and team handling.",
    points: [
      "Leadership mindset development",
      "Team management skills",
      "Decision-making improvement",
      "Emotional intelligence at work",
    ],
  },
  {
    title: "Managerial Capability Building",
    description:
      "We help new and existing managers develop the skills needed to lead people, manage work, review performance, and coordinate across departments.",
    points: [
      "First-time manager training",
      "Work planning and delegation",
      "Performance tracking",
      "Meeting management",
    ],
  },
  {
    title: "Soft Skills & Communication Training",
    description:
      "We train employees to communicate clearly, confidently, and professionally so they can improve teamwork, customer interaction, and workplace performance.",
    points: [
      "Verbal communication",
      "Email writing",
      "Presentation skills",
      "Workplace etiquette",
    ],
  },
  {
    title: "Functional & Role-Based Training",
    description:
      "We help businesses conduct role-specific training so employees can perform their actual job responsibilities more effectively.",
    points: [
      "Sales team training",
      "Customer support training",
      "Operations team training",
      "New employee induction training",
    ],
  },
  {
    title: "Knowledge Transfer & Internal Learning Systems",
    description:
      "We help organizations create internal knowledge-sharing systems so that learning does not depend only on external training sessions.",
    points: [
      "Internal training calendar",
      "SOP-based training",
      "Mentor and buddy system",
      "Employee learning tracker",
    ],
  },
  {
    title: "Capability Assessment & Skill Gap Analysis",
    description:
      "We help organizations assess current employee capabilities and design training programs based on actual skill gaps and workplace needs.",
    points: [
      "Skill gap identification",
      "Training needs analysis",
      "Role-wise competency mapping",
      "Training priority planning",
    ],
  },
];

const benefits = [
  "Improved employee performance",
  "Stronger leadership",
  "Better workplace communication",
  "Increased productivity",
  "Higher employee confidence",
  "Better team coordination",
  "Reduced skill gaps",
  "Stronger learning culture",
];

const applications = [
  "Startups building professional teams",
  "SMEs improving employee capability",
  "Manufacturing companies training shop-floor and supervisory teams",
  "Service businesses improving customer handling",
  "Corporate teams developing managers and leaders",
  "Organizations conducting employee development programs",
  "HR teams planning annual training calendars",
  "Institutions conducting seminars and job-readiness lectures",
  "Sales teams needing communication and negotiation training",
  "Companies facing productivity or coordination issues",
  "Businesses preparing employees for leadership roles",
  "Teams needing soft skills and workplace behaviour improvement",
  "Companies building internal learning and knowledge-transfer systems",
];

const processItems = [
  "Training Need Identification",
  "Skill Gap Analysis",
  "Training Module Design",
  "Training Delivery",
  "Practice & Application",
  "Feedback & Evaluation",
  "Follow-Up & Capability Improvement",
];

const deliverables = [
  "Training needs analysis report",
  "Skill gap assessment summary",
  "Customized training plan",
  "Training modules and session structure",
  "Seminar and lecture topics",
  "Leadership coaching framework",
  "Participant activity plan",
  "Training attendance and feedback format",
  "Role-based learning roadmap",
  "Manager coaching guide",
  "Employee development action plan",
  "Training effectiveness review",
  "Refresher training recommendations",
  "Capability-building roadmap",
];

const strengths = [
  "Practical training aligned with business goals",
  "Customized modules for employees, managers, and leadership teams",
  "Support for professional training, seminars, lectures, and coaching",
  "Focus on implementation, not only theory",
  "Training for startups, SMEs, enterprises, and institutions",
  "Leadership coaching for managers and future leaders",
  "Skill gap analysis before training design",
  "Follow-up support for long-term capability development",
];

const coreAreas = [
  "Professional Skills",
  "Leadership Capability",
  "Employee Confidence",
  "Team Productivity",
  "Learning Culture",
  "Skill Readiness",
];

const keyPoints = [
  "Professional training programs for employees and teams",
  "Seminars and lectures for business and institutional audiences",
  "Leadership coaching for managers, supervisors, and future leaders",
  "Soft skills, communication, and workplace behaviour training",
  "Functional and role-based training programs",
  "Capability assessment and skill gap analysis",
  "Knowledge transfer and internal learning system support",
  "Training modules customized by industry, role, and team level",
  "Practical learning focused on workplace implementation",
  "Suitable for startups, SMEs, enterprises, institutions, and growing organizations",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-training-capability-building"
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
                name: "Training & Capability Building Services",
                item: "https://www.asbconsulting.in/human-resource/training-capability-building",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-training-capability-building"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/human-resource/training-capability-building#webpage",
            url: "https://www.asbconsulting.in/human-resource/training-capability-building",
            name: "Training & Capability Building Services in India",
            description:
              "AS Business Consulting helps organizations improve employee skills, strengthen leadership capability, increase workplace productivity, and build future-ready teams through training and capability building services.",
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
                  Training • Leadership Coaching • Skill Development
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Training & Capability Building Services in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5">
                  Professional Trainings, Seminars, Leadership Coaching & Skill
                  Development Programs
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4 max-w-2xl">
                  At <strong>AS Business Consulting</strong>, we provide
                  structured Training & Capability Building Services in India to
                  help organizations improve employee skills, strengthen
                  leadership capability, increase workplace productivity, and
                  build future-ready teams.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/75 mb-7 max-w-2xl">
                  Our programs are designed for startups, SMEs, manufacturing
                  companies, service businesses, corporate teams, institutions,
                  and growing enterprises that want to improve team performance
                  through practical learning and guided development.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Build Stronger Teams <span className="ml-2">→</span>
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
                    "Professional Training",
                    "Leadership Coaching",
                    "Soft Skills",
                    "Skill Gap Analysis",
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
                    Effective capability building helps employees perform
                    better, communicate professionally, manage responsibilities,
                    solve problems, and contribute to business growth.
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
                  Capability Building
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Improve Employee Knowledge and Workplace Skills
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-white/82">
                  Training & Capability Building is the process of improving
                  employee knowledge, workplace skills, leadership behaviour,
                  communication ability, decision-making, and job-readiness
                  through structured learning programs.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Workplace Performance
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1622]">
                  Build Employees Who Perform Better
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Capability building helps organizations build employees who
                  can perform better, take responsibility, solve problems,
                  communicate professionally, manage teams, and contribute to
                  business growth.
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
                What Our Training & Capability Building Service Includes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We support the complete training cycle, from skill gap analysis
                and module design to delivery, practice, evaluation, follow-up,
                and long-term capability improvement.
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
                Training & Capability Building Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help organizations build stronger teams through professional
                trainings, seminars, lectures, leadership coaching,
                knowledge-sharing programs, and workplace skill-development
                initiatives.
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
                  Benefits of Training & Capability Building
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
                  Our Training & Capability Building Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A clear process to identify training needs, assess skill gaps,
                  design relevant modules, deliver practical learning, collect
                  feedback, and improve capability over time.
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
                  We improve the capability areas that directly affect
                  professional skills, leadership behaviour, employee
                  confidence, team productivity, learning culture, and skill
                  readiness.
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
                AS Business Consulting provides training programs that are
                practical, customized, and focused on real workplace
                improvement. We do not offer only generic lectures. We
                understand your business needs, assess skill gaps, design
                relevant modules, and deliver training that helps employees
                apply learning in daily work.
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
                    Build Stronger Teams
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build Employee Skills with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed">
                    If your organization wants to improve employee skills,
                    develop leaders, conduct professional trainings, arrange
                    seminars or lectures, improve communication, or build a
                    culture of continuous learning, we can help you create a
                    structured Training & Capability Building program.
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