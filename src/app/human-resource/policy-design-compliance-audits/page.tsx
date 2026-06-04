import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title: "HR Policy Design & Compliance Audit Services in India | AS Business Consulting",
  description:
    "AS Business Consulting provides HR policy design and compliance audit services in India including HR policy assessment, employee handbook documentation, SOP development, HR audit, implementation support, and employee training.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/human-resource/policy-design-compliance-audits",
  },
};

const services = [
  {
    title: "HR Policy Assessment",
    description:
      "We review your existing HR policies, employee handbook, workplace rules, HR forms, documentation process, and employee management practices to identify gaps and outdated areas.",
    points: [
      "Existing policy review",
      "Employee handbook review",
      "HR process gap analysis",
      "Compliance risk identification",
    ],
  },
  {
    title: "HR Policy Design & Documentation",
    description:
      "We help organizations create clear and structured HR policy documents that are easy to understand, practical to implement, and aligned with business needs.",
    points: [
      "Employee handbook drafting",
      "Leave and attendance policy",
      "Code of conduct policy",
      "Grievance redressal policy",
    ],
  },
  {
    title: "Compliance Audit & Risk Review",
    description:
      "We conduct HR compliance audits to check whether employment documents, workplace policies, employee records, and HR practices are properly maintained.",
    points: [
      "Employee file audit",
      "Offer and appointment letter review",
      "Attendance and leave record review",
      "HR record maintenance review",
    ],
  },
  {
    title: "SOP Development for HR Processes",
    description:
      "Policies explain what should be done, but SOPs explain how it should be done. We create Standard Operating Procedures for important HR processes.",
    points: [
      "Recruitment SOP",
      "Onboarding SOP",
      "Performance review SOP",
      "Exit and full-and-final settlement SOP",
    ],
  },
  {
    title: "Policy Implementation Support",
    description:
      "Creating policies is only the first step. We help organizations implement policies practically across teams, departments, and employee levels.",
    points: [
      "Policy rollout planning",
      "Employee acknowledgement process",
      "Manager briefing sessions",
      "Compliance calendar setup",
    ],
  },
  {
    title: "Employee & Manager Training",
    description:
      "Policies work only when employees and managers understand them clearly. We provide training and orientation sessions for better policy adoption.",
    points: [
      "HR policy awareness sessions",
      "Employee handbook orientation",
      "Manager responsibility training",
      "Workplace behaviour training",
    ],
  },
  {
    title: "HR Forms, Templates & Registers",
    description:
      "We help businesses create standard HR forms and templates for consistent documentation and smooth daily HR operations.",
    points: [
      "Employee joining form",
      "Document checklist",
      "Warning letter format",
      "Exit clearance checklist",
    ],
  },
  {
    title: "Policy Review & Continuous Improvement",
    description:
      "Business rules, team size, work models, and compliance expectations change over time. We help organizations review and update HR policies periodically.",
    points: [
      "Annual HR policy review",
      "Compliance gap review",
      "Documentation improvement plan",
      "HR audit readiness support",
    ],
  },
];

const benefits = [
  "Better compliance control",
  "Clear workplace rules",
  "Reduced HR disputes",
  "Professional HR system",
  "Stronger manager decision-making",
  "Audit readiness",
  "Improved employee trust",
];

const applications = [
  "Startups creating HR policies for the first time",
  "SMEs needing structured employee handbooks",
  "Manufacturing companies managing shop-floor and office teams",
  "Service businesses standardizing HR processes",
  "Companies facing employee disputes or policy confusion",
  "Organizations preparing for HR audits",
  "Businesses scaling from small teams to larger departments",
  "Companies with outdated or incomplete HR policies",
  "Enterprises needing policy review and documentation updates",
  "Companies implementing POSH, code of conduct, or grievance systems",
  "Businesses hiring remote, contract, or third-party employees",
  "HR teams improving compliance and workplace governance",
];

const processItems = [
  "Requirement Understanding",
  "Document & Process Review",
  "Gap Analysis & Audit Findings",
  "Policy Drafting & Documentation",
  "Implementation Planning",
  "Training & Awareness",
  "Review & Continuous Improvement",
];

const deliverables = [
  "HR policy audit report",
  "Gap analysis summary",
  "Employee handbook draft or update",
  "HR policy documents",
  "HR SOP documents",
  "Compliance checklist",
  "Employee document checklist",
  "HR forms and templates",
  "POSH and code of conduct documentation support",
  "Policy rollout plan",
  "Employee acknowledgement format",
  "Manager training material",
  "Employee policy awareness session support",
  "Implementation roadmap",
  "Review and improvement recommendations",
];

const strengths = [
  "Practical understanding of Indian HR policy requirements",
  "Customized HR policies based on business size and industry",
  "Support for policy assessment, documentation, implementation, and training",
  "Clear HR audit reports with practical recommendations",
  "Employee handbook and SOP development support",
  "Compliance-focused approach to reduce workplace risk",
  "Training support for employees, managers, and HR teams",
  "End-to-end HR consulting from review to implementation",
];

const coreAreas = [
  "HR Documentation",
  "Compliance Readiness",
  "Policy Clarity",
  "Implementation Discipline",
  "Workplace Governance",
  "Employee Awareness",
];

const keyPoints = [
  "Complete HR policy assessment and gap analysis",
  "Employee handbook and workplace policy documentation",
  "Compliance audit of HR documents and employee records",
  "SOP development for HR processes",
  "Policy implementation and rollout support",
  "Employee and manager training sessions",
  "HR forms, templates, and checklist creation",
  "POSH, code of conduct, leave, attendance, performance, and exit policy support",
  "Suitable for startups, SMEs, manufacturing companies, service businesses, and enterprises",
  "Practical HR consulting support aligned with Indian workplace requirements",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-hr-policy-compliance-audit"
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
                name: "HR Policy Design & Compliance Audit Services",
                item: "https://www.asbconsulting.in/human-resource/hr-policy-compliance-audit",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-hr-policy-compliance-audit"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/human-resource/hr-policy-compliance-audit#webpage",
            url: "https://www.asbconsulting.in/human-resource/hr-policy-compliance-audit",
            name: "HR Policy Design & Compliance Audit Services in India",
            description:
              "AS Business Consulting helps organizations create clear, compliant, practical, and employee-friendly HR systems through HR policy design, compliance audit, SOP development, documentation, implementation, and training.",
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
                  HR Policy • Compliance Audit • SOP Development
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  HR Policy Design & Compliance Audit Services in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5">
                  Assessment, Documentation, Implementation & Training for
                  Compliant HR Systems
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4 max-w-2xl">
                  At <strong>AS Business Consulting</strong>, we provide
                  professional HR Policy Design & Compliance Audit Services in
                  India to help organizations create clear, compliant,
                  practical, and employee-friendly HR systems.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/75 mb-7 max-w-2xl">
                  Our services help startups, SMEs, growing companies,
                  manufacturing businesses, service organizations, corporate
                  teams, and enterprises reduce HR risk, improve discipline,
                  standardize processes, and strengthen compliance.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Build HR Policy System <span className="ml-2">→</span>
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
                    "Policy Design",
                    "Compliance Audit",
                    "HR SOPs",
                    "Training Support",
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
                    A strong HR policy system helps reduce confusion,
                    compliance gaps, employee disputes, inconsistent decisions,
                    and workplace risk.
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
                  HR Policy Design
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Create Clear Workplace Rules
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-white/82">
                  HR Policy Design is the process of creating structured rules,
                  guidelines, and procedures that define how employees and
                  management should handle workplace matters.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Compliance Audit
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1622]">
                  Identify HR Gaps and Reduce Risk
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Compliance Audit reviews HR documents, employee records,
                  workplace policies, statutory requirements, and internal
                  practices to identify gaps, risks, and improvement areas.
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
                What Our HR Policy & Compliance Audit Service Includes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We support the complete HR policy cycle, from assessment and
                gap analysis to documentation, SOP development, rollout,
                training, and continuous improvement.
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
                HR Policy Design & Compliance Audit Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help organizations assess existing HR policies, identify
                gaps, design improved policy documents, support implementation,
                and train employees and managers for better daily adoption.
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
                  Benefits of HR Policy Design & Compliance Audits
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
                  Our HR Policy Design & Compliance Audit Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A clear process to understand HR challenges, review documents,
                  identify gaps, draft policies, plan implementation, train
                  teams, and improve the system over time.
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
                  We improve the HR areas that directly affect documentation
                  quality, compliance readiness, policy clarity, implementation
                  discipline, workplace governance, and employee awareness.
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
                AS Business Consulting helps organizations build HR systems
                that are practical, compliant, well-documented, and easy to
                implement. We do not provide generic policy templates only. We
                understand your business structure, workforce type, HR
                challenges, and compliance needs before creating policies and
                audit recommendations.
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
                    Build a Clear and Compliant HR Policy System
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Standardize Your HR System with AS Business Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed">
                    If your organization wants to create HR policies, update
                    employee handbooks, conduct compliance audits, improve HR
                    documentation, train employees, or standardize workplace
                    processes, we can help you build a practical and compliant
                    HR framework.
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