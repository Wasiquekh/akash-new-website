import * as React from "react";
import Link from "next/link";
import Script from "next/script";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactFrom from "../../components/ContactFrom";

export const metadata = {
  title:
    "Third-Party Employer EOR & Payroll Support Services in India | AS Business",
  description:
    "AS Business Consulting provides Third-Party Employer EOR and Payroll Support Services in India including onboarding, payroll administration, statutory compliance, employment documentation, and workforce administration.",
  alternates: {
    canonical:
      "https://www.asbconsulting.in/human-resource/payroll-support",
  },
};

const services = [
  {
    title: "Compliant Employee Onboarding Support",
    description:
      "We help companies create a structured onboarding process so new employees can join smoothly with proper documentation, verification, policy communication, and employment records.",
    points: [
      "Employee document checklist",
      "Joining form and employment record setup",
      "Offer letter and appointment letter coordination",
      "Employee file creation",
    ],
  },
  {
    title: "Employment Documentation & Record Management",
    description:
      "Proper employee documentation is important for compliance, audit readiness, payroll accuracy, and internal HR control.",
    points: [
      "Offer letter format",
      "Appointment letter format",
      "Employee personal file management",
      "Exit documentation support",
    ],
  },
  {
    title: "Payroll Administration Support",
    description:
      "We support businesses in managing payroll inputs, salary calculations, deductions, reimbursements, payslip coordination, and payroll reporting.",
    points: [
      "Monthly payroll input collection",
      "Salary structure coordination",
      "Payroll calculation support",
      "Monthly payroll summary reports",
    ],
  },
  {
    title: "Statutory Compliance Coordination",
    description:
      "We help businesses coordinate compliance-related records and processes to reduce payroll and employment risk.",
    points: [
      "PF coordination",
      "ESI coordination",
      "Professional tax support where applicable",
      "Compliance calendar support",
    ],
  },
  {
    title: "Third-Party Workforce Administration",
    description:
      "We help create proper administration systems for contract staff, remote employees, project-based teams, and third-party workforce arrangements.",
    points: [
      "Third-party employee record management",
      "Contract workforce documentation",
      "Attendance and payroll coordination",
      "Monthly workforce reporting",
    ],
  },
  {
    title: "Employee Lifecycle Administration",
    description:
      "We support the full employee lifecycle from joining to exit so that every stage is properly documented and professionally handled.",
    points: [
      "Onboarding support",
      "Leave and attendance coordination",
      "Resignation process support",
      "Full and final settlement coordination",
    ],
  },
  {
    title: "Payroll Process Improvement",
    description:
      "We help improve payroll workflows so the process becomes more reliable, structured, and easier to manage every month.",
    points: [
      "Payroll workflow mapping",
      "Approval process definition",
      "Payroll checklist creation",
      "Error reduction methods",
    ],
  },
];

const benefits = [
  "Reduced administrative burden",
  "Better compliance control",
  "Smooth employee onboarding",
  "Accurate payroll processing",
  "Organized employee records",
  "Better workforce visibility",
];

const applications = [
  "Startups hiring their first employees",
  "SMEs without a full HR department",
  "Companies expanding to new cities or branches",
  "Businesses hiring remote employees",
  "Organizations managing contract staff",
  "Companies needing payroll process support",
  "Businesses facing payroll errors or delays",
  "Companies requiring employee documentation support",
];

const processItems = [
  "HR & Payroll Requirement Understanding",
  "Employee Data & Document Review",
  "Process Design & Compliance Checklist",
  "Payroll Input & Administration Support",
  "Employee Lifecycle Management",
  "Reporting & Review",
];

const deliverables = [
  "Employee onboarding checklist",
  "Joining documentation format",
  "Employee master data format",
  "Offer and appointment letter support",
  "Salary structure and payroll input format",
  "Monthly payroll checklist",
  "Attendance and leave input format",
  "Payroll summary report",
  "Compliance coordination checklist",
  "Employee file management system",
];

const strengths = [
  "Practical understanding of Indian HR and payroll requirements",
  "Support for startups, SMEs, and growing companies",
  "Structured onboarding and employment documentation systems",
  "Payroll process improvement with monthly checklists",
  "Compliance-focused HR administration support",
  "Support for permanent, contract, and third-party workforce models",
];

const coreAreas = [
  "Onboarding Accuracy",
  "Payroll Discipline",
  "Compliance Readiness",
  "Employee Record Management",
  "Workforce Administration",
  "Exit & Settlement Process",
];

const Page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema-eor-payroll"
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
                name: "EOR & Payroll Support",
                item: "https://www.asbconsulting.in/human-resource/eor-payroll-support",
              },
            ],
          }),
        }}
      />

      <Script
        id="webpage-schema-eor-payroll"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id":
              "https://www.asbconsulting.in/human-resource/eor-payroll-support#webpage",
            url: "https://www.asbconsulting.in/human-resource/eor-payroll-support",
            name: "Third-Party Employer EOR & Payroll Support Services in India",
            description:
              "AS Business Consulting provides Third-Party Employer EOR and Payroll Support Services in India to help businesses manage employee onboarding, payroll administration, statutory compliance, employment documentation, and workforce operations.",
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
                  EOR • Payroll • Compliance
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                  Third-Party Employer EOR & Payroll Support Services in India
                </h1>

                <h2 className="text-lg md:text-xl font-semibold text-[#f4d88a] mb-5">
                  Compliant Employer of Record and Payroll Administration
                  Support for Growing Businesses
                </h2>

                <p className="text-sm md:text-base leading-relaxed text-white/85 mb-4 max-w-2xl">
                  At <strong>AS Business Consulting</strong>, we help businesses
                  manage employee onboarding, payroll administration, statutory
                  compliance, employment documentation, and workforce operations
                  in a structured manner.
                </p>

                <p className="text-sm md:text-base leading-relaxed text-white/75 mb-7 max-w-2xl">
                  Our support helps organizations reduce HR risk, improve payroll
                  accuracy, maintain employee records, and manage employment
                  administration professionally.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#502D52] hover:bg-[#f4d88a] transition"
                  >
                    Get Payroll Support <span className="ml-2">→</span>
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
                    "Employee Onboarding",
                    "Payroll Inputs",
                    "Compliance Records",
                    "Workforce Reporting",
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
                    A structured EOR and payroll system helps businesses reduce
                    errors, improve compliance control, and manage employees
                    smoothly from joining to exit.
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
                  Third-Party Employer / EOR
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Manage Employment Administration Professionally
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-white/82">
                  A Third-Party Employer, also known as Employer of Record, is a
                  support model where an external HR partner helps manage
                  onboarding, payroll coordination, documentation, and compliance
                  support.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#eaddec] bg-[#fbf8fc] p-7">
                <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#502D52] mb-3">
                  Payroll Support
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1d1622]">
                  Improve Payroll Accuracy and Records
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Payroll support involves managing salary structure, payroll
                  records, attendance inputs, deductions, statutory requirements,
                  payslip coordination, and salary processing support.
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
                EOR & Payroll Administration Support
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We help businesses create reliable employment administration
                systems for onboarding, documentation, payroll, compliance,
                workforce records, and employee lifecycle support.
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
                  Benefits of EOR & Payroll Support
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
                  Our EOR & Payroll Support Process
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  A clear process to organize payroll inputs, employee records,
                  compliance checklists, and monthly workforce reporting.
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
                  We improve the most important HR administration areas that
                  affect payroll accuracy, compliance readiness, and employee
                  record control.
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
                AS Business Consulting works as a reliable HR administration
                partner for businesses that want to manage employees
                professionally, reduce payroll errors, improve compliance, and
                create structured employment systems.
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
                    Build a Compliant Employment System
                  </p>

                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Build a Reliable EOR & Payroll System with AS Business
                    Consulting
                  </h2>

                  <p className="text-white/82 leading-relaxed">
                    If your business wants to simplify employee onboarding,
                    improve payroll administration, manage employee records,
                    support statutory compliance, or outsource HR employment
                    administration, we can help you create a structured and
                    compliant system.
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