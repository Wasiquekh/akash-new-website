import React from "react";
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
  MdGroupAdd,
  MdMarkEmailRead,
  MdMedicalInformation,
} from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { SiSololearn } from "react-icons/si";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/human-resource.jpg')] bg-cover bg-center h-[540px] w-full flex justify-center items-center">
        <div className="container ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 ">
              Human Resources
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm font-normal text-white inter-text">
              We provide strategic business solutions tailored to your growth.
              From startup guidance to operational optimization, our expert
              consulting helps you navigate challenges, increase efficiency, and
              achieve sustainable success. Partner with us to turn your vision
              into results.
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <button className="flex items-center justify-center bg-secondary w-44 h-12 focus:outline-none hover:bg-gray-200  rounded-[7px] text-white font-medium text-lg mt-4 md:mt-0 border border-secondary">
              Book Now
            </button>
            <button className="flex items-center justify-center bg-transparent w-44 h-12 focus:outline-none hover:bg-gray-200  rounded-[7px] text-white font-medium text-lg mt-4 md:mt-0 border border-white">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <section className=" relative">
        <div className="container mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Introduction
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-6">
              AS BUSINESS CONSULTING is a Solution Provider. we work with you,
              helping you to identify your potential and become more innovative,
              competitive & efficient to help you grow exponentially in the
              global markets.  We provide various services to our clients to
              conceptualize & visualize technology driven business
              transformation initiatives.  We are a professional who provides
              services in a particular area such as Research and Development,
              Product Design, Operation Technologies, Lean Manufacturing, Zed
              Consulting, ISO, BIS, NABL, QMS, IMS, Human Resource, Import,
              export, Management Consulting, Sales and Marketing, & Legal
              Advisory.
            </p>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-5">
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
                <MdGroupAdd className=" bg-primary p-3 text-white text-6xl rounded-full border-2 border-white" />
                <p className=" text-2xl font-medium text-black">Candidate</p>
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
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Package include
            </h1>
          </div>

          <div className=" flex justify-between">
            <div className="w-[29%]">
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Recruitment
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Job Search Tips
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Third Party Employer
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Employee Engagement
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Professional Trainings
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Seminars / Lectures
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Collage Campus
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">Policy</h2>
              </div>
            </div>
            <div className="  w-[69%]">
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
      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
