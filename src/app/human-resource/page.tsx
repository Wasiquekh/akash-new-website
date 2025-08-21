import * as React from "react";
export const metadata = {
  title: "HR Consulting in India | Recruitment & Engagement – AS Business",
  description:
    "AS Business Consulting provides expert HR services in India, including recruitment, policy audits, employee engagement, and campus placement consulting solutions.",
  alternates: {
    canonical: "",
  },
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck, FaUserTie } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import { GiStairsGoal, GiTeacher } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { TbSettingsCheck } from "react-icons/tb";
import { FaChalkboardTeacher, FaSearch } from "react-icons/fa";
import {
  MdDeveloperBoard,
  MdMarkEmailRead,
  MdMedicalInformation,
} from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { SiSololearn } from "react-icons/si";
import { PiReadCvLogoLight } from "react-icons/pi";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/human-resource.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Human Resources
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            We provide strategic business solutions tailored to your growth.
            From startup guidance to operational optimization, our expert
            consulting helps you navigate challenges, increase efficiency, and
            achieve sustainable success. Partner with us to turn your vision
            into results.
          </p>
        </div>
      </div>
      <section className=" relative">
        <div className="container">
          <div className="flex flex-col text-center w-full mb:10  md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Introduction
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              Specialist advice and services provided by a third-party to help
              businesses maximize the efficiency of their HR operations and
              implement appropriate new policies and procedures in the best way
              possible. They are often valued by companies for their ability to
              bring an outsider&apos;s objective view.
            </p>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              HR consultancies are often brought in to address a particular
              problem or deficit and are tasked with assessment, auditing,
              proposal and implementation of a policy designed to address the
              deficit and drive organizational change.
            </p>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              The industry is dominated by major multinational companies
              although there are also small and medium-sized businesses in
              operation.
            </p>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              Having the best talent is a competitive advantage in today’s
              demanding and complex world. Because the success of business
              relies upon talent, acquiring the most qualified people is
              increasingly competitive. To win, organizations need expertise in
              implementing innovative and differentiated sourcing and attraction
              strategies.
            </p>
            <br />
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <GiStairsGoal className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">Career</p>
            </div>
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <HiUserGroup className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">Candidate</p>
            </div>
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <TbSettingsCheck className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">Skill</p>
            </div>
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <FaSearch className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">Search</p>
            </div>
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <PiReadCvLogoLight className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">CV</p>
            </div>
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <IoNewspaperSharp className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">Interview</p>
            </div>
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <FaUserTie className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">Employee</p>
            </div>
            <div className="bg-tertiary p-2 rounded-full flex gap-4 items-center">
              <MdMarkEmailRead className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
              <p className=" text-2xl font-medium text-black">Application</p>
            </div>
          </div>
        </div>
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
        <div className=" container">
          <div className="flex flex-col text-center w-full mb-4">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Package include
            </h1>
          </div>

          <div className=" flex flex-col md:flex-row justify-between gap-4">
            <div className=" w-full md:w-[29%]">
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Recruitment
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Job Search Tips
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Third Party Employer
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Employee Engagement
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Professional Trainings
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Seminars / Lectures
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  College Campus
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-xl md:text-2xl font-medium mb-0">
                  Policy
                </h2>
              </div>
            </div>
            <div className="w-full md:w-[69%]">
              <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-tertiary p-5 rounded flex flex-col items-center ">
                  <GiTeacher className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white mb-2" />
                  <p className=" text-2xl font-medium text-black">Coaching</p>
                </div>
                <div className="bg-tertiary p-5 rounded flex flex-col items-center ">
                  <FaChalkboardTeacher className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white mb-2" />
                  <p className=" text-2xl font-medium text-black">Teaching</p>
                </div>
                <div className="bg-tertiary p-5 rounded flex flex-col items-center ">
                  <MdMedicalInformation className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white mb-2" />
                  <p className=" text-2xl font-medium text-black">Knowledge</p>
                </div>
                <div className="bg-tertiary p-5 rounded flex flex-col items-center ">
                  <GiStairsGoal className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white mb-2" />
                  <p className=" text-2xl font-medium text-black">Skills</p>
                </div>
                <div className="bg-tertiary p-5 rounded flex flex-col items-center ">
                  <GrUserExpert className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white mb-2" />
                  <p className=" text-2xl font-medium text-black">Experience</p>
                </div>
                <div className="bg-tertiary p-5 rounded flex flex-col items-center ">
                  <SiSololearn className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white mb-2" />
                  <p className=" text-2xl font-medium text-black">Learn</p>
                </div>
                <div className="bg-tertiary p-5 rounded flex flex-col items-center ">
                  <MdDeveloperBoard className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white mb-2" />
                  <p className=" text-2xl font-medium text-black">
                    Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="container">
          <div className="flex flex-col text-center w-full mb:10  md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Human Resource Consulting for Recruitment, Policy Audits &
              Engagement in India
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              At AS Business Consulting, we help organizations build strong,
              compliant, and high-performing teams. As an objective third-party,
              we maximize HR efficiency, implement fit-for-purpose policies, and
              deliver measurable improvements in culture, retention, and
              productivity—whether you’re a fast-growing startup or a large
              enterprise.
            </p>
          </div>
          <div className=" bg-[#F0DEEC] py-6 px-5 md:px-10 rounded">
            <div className=" flex flex-col-reverse md:flex-row gap-8 justify-between items-center">
              <div className=" w-full">
                <p className=" text-2xl inter-text font-bold mb-5">
                  What We Solve
                </p>
                <p className=" text-xl font-normal md:font-medium mb-2">
                  Gaps in hiring quality and speed
                </p>
                <p className=" text-xl font-normal md:font-medium mb-2">
                  Outdated or non-compliant HR policies
                </p>
                <p className=" text-xl font-normal md:font-medium mb-2">
                  Low engagement, high turnover, and skill gaps
                </p>
                <p className=" text-xl font-normal md:font-medium mb-2">
                  Need for structured audits, SOPs, and change management
                </p>
              </div>
              <div className=" w-full flex justify-end">
                <Image
                  src="/images/hr1.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                  className=" w-full md:w-[80%]"
                />
              </div>
            </div>
          </div>
          {/* what we do */}
          <div className=" mb-10">
            <p className=" text-xl md:text-[40px] font-bold text-primary my-12 leading-8 text-center">
              HR Consulting Services in India (End-to-End)
            </p>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className=" bg-[#FEF2FB] p-6 rounded  w-full">
                <p className=" text-xl  font-normal md:font-medium">
                  Workforce Planning & Talent Acquisition – role design,
                  sourcing strategy, interview frameworks
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-4 w-full">
                <p className=" text-xl  font-normal md:font-medium">
                  Recruitment & Executive Search – leadership hiring and niche
                  industry roles
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl  font-normal md:font-medium">
                  Third-Party Employer (EOR) & Payroll Support – compliant
                  onboarding and employment administration
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl  font-normal md:font-medium">
                  Policy Design & Compliance Audits – assessment, documentation,
                  implementation, and training
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl  font-normal md:font-medium">
                  Employee Engagement Programs – recognition, wellness,
                  communication rhythm, pulse surveys
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl  font-normal md:font-medium">
                  Training & Capability Building – professional trainings,
                  seminars/lectures, leadership coaching
                </p>
              </div>
              <div className=" bg-[#FEF2FB] p-6 rounded w-full">
                <p className=" text-xl  font-normal md:font-medium">
                  Campus & Early-Talent Programs – college outreach, internship
                  funnels, job-readiness workshops
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-center w-full mb:10  md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Recruitment Consulting: Finding the Right Talent
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              We act as your recruitment partner to secure high-caliber,
              role-ready candidates. What you get: executive search,
              industry-specific hiring, structured assessments, and campus
              placement programs designed to scale.
            </p>
          </div>
          <div className="flex flex-col text-center w-full mb:10  md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Employee Engagement Strategies: Boosting Productivity & Retention
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              We design engagement roadmaps that improve morale and
              performance—recognition mechanisms, manager enablement, career
              pathways, and wellness initiatives—to reduce churn and lift
              productivity.
            </p>
          </div>
          <div className="flex flex-col text-center w-full mb:10  md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              HR Policy Audit Services: Ensuring Compliance & Best Practice
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              Our audits review your full policy stack (handbooks, leave, POSH,
              code of conduct, performance, data privacy). We identify gaps,
              recommend upgrades, and implement changes with training and SOPs
              so the new ways of working stick.
            </p>
          </div>
          <div className="flex flex-col text-center w-full mb:10  md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Training & Development: Skills that Scale
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              From shop-floor to leadership, we deliver targeted trainings and
              workshops—coaching, teaching, knowledge transfer, and hands-on
              practice—so teams gain skills, experience, and confidence that
              translate to results.
            </p>
          </div>
          <div className="flex flex-col text-center w-full mb:10  md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Packages Include
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              Recruitment • Job Search Tips (for campus/early talent) •
              Third-Party Employer (EOR) Employee Engagement • Professional
              Trainings • Seminars/Lectures • College Campus Programs • Policy
              Design & Audits
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className=" mx-auto flex flex-wrap"></div>
          <div className="flex flex-col-reverse md:flex-row gap-12">
            <div className="">
              <h2 className="text-primary text-xl md:text-3xl font-bold  mb-7">
                Why Choose AS Business Consulting for HR Solutions
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Objective expertise with assessment → proposal →
                    implementation ownership
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Customized programs for SMEs and enterprises alike
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Proven delivery across recruitment, policy audits, and
                    engagement
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-3">
                  <div className="flex items-center justify-center  mb-0">
                    <FaCheck className="rounded-full text-xl bg-primary text-white p-1" />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Culture & compliance first—better workplaces, lower risk
                  </h2>
                </div>
                <h2 className="text-primary text-xl md:text-3xl font-bold  my-7">
                  Explore More Services
                </h2>
                <p className=" inter-text">
                  Operations Consulting • R&D & Product Design Contact Us –
                  Let’s discuss your HR goals and design a plan that works.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3">
              <Image
                src="/images/hr2.png" // path relative to /public
                alt="My beautiful image"
                width={500}
                height={500}
                priority // optional: preloads image
                className="rounded"
              />
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
