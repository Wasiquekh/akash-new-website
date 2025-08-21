import * as React from "react";
export const metadata = {
  title: "BIS, NABL & ISO Certification in India | QMS Experts – AS Business",
  description:
    "AS Business Consulting provides BIS, NABL, and ISO certification services in India, including QMS, inspections, and complete industry compliance support.",
  alternates: {
    canonical: "",
  },
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            CERTIFICATION
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            We assist businesses in achieving ISO, BIS, NABL, and other quality
            certifications, ensuring compliance, <br />
            credibility, and global recognition.
          </p>
        </div>
      </div>
      <section className=" relative hidden">
        <Image
          src="/images/leftShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute left-0 top-0 "
        />
        <Image
          src="/images/rightShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute right-0 top-0 "
        />
      </section>
      <section>
        <div className="container">
          <div className=" flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-10 md:mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary text-center">
                Certification & Inspection Services for Quality Compliance and
                Accreditation
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                At AS Business Consulting, our expert BIS certification
                consultants help businesses achieve nationally and
                internationally recognized certifications with ease. From Bureau
                of Indian Standards (BIS) approvals to ISO and NABL
                accreditations, we guide you through the entire process,
                ensuring full compliance with regulatory and industry
                requirements. Our services include QMS implementation,
                certification documentation, inspection support, and audit
                preparation empowering your organization to meet the highest
                quality standards
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Left Content Section */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-0 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                BIS Certification Consultants in India
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700">
                End-to-End Support for BIS Approval
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                Our BIS certification consultants assist manufacturers,
                importers, and exporters in obtaining BIS licenses and approvals
                required for product quality and safety compliance in India.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Guidance on BIS application and documentation.</li>
                <li>Pre-certification inspection and testing support.</li>
                <li>
                  Assistance with product labeling and compliance requirements.
                </li>
              </ul>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:max-w-lg lg:w-full md:w-1/2">
              <img
                className="object-cover object-center rounded w-full"
                alt="BIS Certification"
                src="/images/BIS Certification Consultants in India.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Left Image Section */}
            <div className="w-full md:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded w-full"
                alt="QMS Implementation"
                src="/images/QMS Implementation for Quality Excellence.png" // replace later with your QMS image
              />
            </div>

            {/* Right Content Section */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                QMS Implementation for Quality Excellence
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700">
                Building Robust Quality Management Systems
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                We specialize in QMS implementation that meets global best
                practices. Whether for ISO certification, NABL accreditation, or
                internal process improvement, our approach ensures your
                organization delivers consistent quality while maintaining
                regulatory compliance.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Gap analysis and process mapping.</li>
                <li>Development of SOPs and quality manuals.</li>
                <li>Employee training for quality assurance practices.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Left Content Section */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-start text-left mb-0 md:mb-0">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                ISO Consultants for Certification &amp; Compliance
              </h1>
              <p className="mb-6 leading-relaxed text-gray-700">
                Achieve and Maintain Global Quality Standards
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                Our experienced ISO consultants help you obtain and maintain ISO
                certifications such as ISO 9001, ISO 14001, and ISO 45001. We
                manage the process from start to finish, including audits,
                documentation, and continual improvement strategies.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Identifying the right ISO standard for your business.</li>
                <li>Preparing for certification and surveillance audits.</li>
                <li>Ongoing compliance monitoring and quality improvement.</li>
              </ul>
            </div>

            {/* Right Image Section */}
            <div className="w-full md:max-w-lg lg:w-full md:w-1/2">
              <img
                className="object-cover object-center rounded w-full"
                alt="ISO Consultants"
                src="/images/ISO Consultants for Certification & Compliance.png" // same image for now
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Left Image Section */}
            <div className="w-full md:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded w-full"
                alt="AS Business Consulting"
                src="/images/Why Choose AS Business Consulting for Certification Services.png" // replace later with actual image
              />
            </div>

            {/* Right Content Section */}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-start text-left">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Why Choose AS Business Consulting for Certification Services
              </h1>

              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>
                  Certified BIS, NABL, and ISO consultants with years of
                  industry experience.
                </li>
                <li>
                  Streamlined certification process to save time and costs.
                </li>
                <li>
                  Expertise in multiple industries and regulatory frameworks.
                </li>
                <li>
                  End-to-end support — from documentation to accreditation.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Explore More Services:
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Operations Consulting – Streamline processes for better
                  compliance.
                </li>
                <li>
                  Corporate Legal Advisory – Ensure legal alignment with
                  industry standards.
                </li>
                <li>Contact Us – Start your certification process today.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT TERM COURSE */}
      <section>
        <div className="container">
          <div className=" flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                Short Term Courses
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                We are one of the end to end service provider company. After
                successfully working in Design, New product Development, Lean
                Manufacturing, HR and Marketing sector we start “International
                Business Development And Logistics” Services for our valuable
                customer. 
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Lean Manufacturing.png" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  Lean Manufacturing
                </p>
                <p className=" text-sm font-normal text-black inter-text text-center md:text-left">
                  Basic Level, Intermediate Level, Advance Level
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Zed Certification.png" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  ZED CERTIFICATION
                </p>
                <p className=" text-sm font-normal text-black inter-text text-center md:text-left">
                  Bronze certification, Silver certification, Gold Certification
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Cost Innovation Module.png" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  Cost Innovation Module
                </p>
                <p className=" text-sm font-normal text-black inter-text text-center md:text-left">
                  You can edit this text for your presentation
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Rapid Supply China Improvement.png" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  Rapid Supply China Improvement
                </p>
                <p className=" text-sm font-normal text-black inter-text text-center md:text-left">
                  You can edit this text for your presentation
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Third Party Audit.png" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  Third Party Audit
                </p>
                <p className=" text-sm font-normal text-black inter-text text-center md:text-left">
                  You can edit this text for your presentation
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/100 Day Renovation Program.png" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 text-center md:text-left">
                  100 Day Renovation Program
                </p>
                <p className=" text-sm font-normal text-black inter-text text-center md:text-left">
                  You can edit this text for your presentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
