import * as React from "react";
export const metadata = {
  title: "R&D & Product Design Services in India | CAD CAM – AS Business",
  description:
    "Accelerate innovation with AS Business Consulting’s product design, CAD CAM outsourcing, engineering drafting, reverse engineering, and prototype development services.",
  alternates: {
    canonical: "",
  },
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck, FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/research-banner.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Research & Development
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center w-full md:w-[80%]">
            We help businesses innovate through dedicated research and
            development, turning ideas into practical solutions that drive
            growth and global competitiveness.
          </p>
        </div>
      </div>
      <section className=" relative">
        <div className="container mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-10 md:mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Introduction
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal">
              ASBC is a Design company highly specialized in providing quality
              services to companies willing to outsource their Design - Drafting
              side of the product development. Our main goal is to offer you the
              best CAD services for all your engineering needs in implementing
              and developing CAD/CAM activities. As a busy CAD professional, you
              are obviously pressed for time, and seeking better ways to
              streamline the creation, use and maintenance of your CAD data.
              ASBC can help you turn your ideas and Designs into functional
              components that can be produced and marketed in a SHORT PERIOD OF
              TIME, and offers services.
            </p>
          </div>

          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex items-center">
            <img
              alt="feature"
              className="object-cover object-center h-auto w-full"
              src="/images/research&development.png"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-6 lg:items-start items-center p-0 md:p-6 ">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-semibold mb-0">
                    Real Time Renderings
                  </h2>
                </div>

                <p className=" text-sm font-normal text-black inter-text w-full text-left md:w-[80%]">
                  Any Concept you have or is supposed to be developed, Come to
                  us, We Will Turn Your Imaginations into Virtual Reality by
                  means of sophisticated Soft wares
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-6 lg:items-start items-center bg-tertiary p-1 md:p-6 rounded">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl text-left font-semibold mb-0">
                    3D Computer Modeling
                  </h2>
                </div>

                <p className="text-sm font-normal text-black inter-text w-full text-left md:w-[80%]">
                  üComplex surfaces and intricate details using Pro/Engineer®
                  Wildfire Versions.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-6 lg:items-start items-center p-0 md:p-6">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-semibold mb-0">
                    2D Drawings
                  </h2>
                </div>

                <p className=" text-sm font-normal text-black inter-text w-full text-left md:w-[80%]">
                  üUsing the standards of preference, including geometric
                  tolerance instructions.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-6 lg:items-start items-center p-0  md:p-6">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-semibold mb-0">
                    File Conversion
                  </h2>
                </div>

                <p className=" text-sm font-normal text-black inter-text w-full text-left md:w-[80%]">
                  Convert 2D (including any art work) or 3D data into a useful
                  format.
                </p>
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
        <div className=" container grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <h2 className="text-black text-2xl font-semibold mb-7">
              That can serve your needs in the following fields
            </h2>
            <div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Drafting
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Detailing
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Designing
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  3D Modeling
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Reverse Engineering
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Prototypes
                </h2>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/drafting.png" // path relative to /public
              alt="My beautiful image"
              width={500}
              height={500}
              priority // optional: preloads image
              className=" rounded"
            />
          </div>
          <div>
            <Image
              src="/images/detailing.png" // path relative to /public
              alt="My beautiful image"
              width={500}
              height={500}
              priority // optional: preloads image
              className="rounded"
            />
          </div>
        </div>
      </section>
      {/* what we do */}

      {/* choose  */}
      <section className=" ">
        <div className="container ">
          <div className=" mx-auto flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-10 md:mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                R&D and Product Design Services for Engineering Innovation in
                India
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                At AS Business Consulting, we turn ideas into market-ready
                products—fast. Our end-to-end R&D and product design services
                cover CAD/CAM outsourcing, engineering drafting, 3D modeling,
                real-time renderings, prototype development, reverse
                engineering, and file conversion so you can accelerate
                innovation and reduce time-to-market.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
            <div className=" w-full">
              <p className=" text-primary text-2xl font-bold mb-8 text-center md:text-left">
                What We Do
              </p>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>

                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    Product Design & Engineering
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    From concept sketches to functional models, we design for
                    DFM/DFA, balancing aesthetics, performance, reliability, and
                    cost.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>
                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    Engineering Drafting & Documentation
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    Production-ready 2D/3D drawings, assemblies, BOMs, and
                    technical packs with GD&T (ISO/ASME) and tolerance stacks
                    for seamless handoff to manufacturing.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>
                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    Real-Time Renderings & Visualization
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    Photorealistic visuals and animations to validate designs,
                    support stakeholder buy-in, and power marketing before
                    tooling.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>
                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    Reverse Engineering (India)
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    Recreate or improve legacy parts using precise
                    measurements/3D scans; generate updated CAD, drawings, and
                    specs for replacement or enhancement.
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-full">
              <p className=" text-primary text-2xl font-bold mb-3 invisible">
                Why Choose AS Business Consulting
              </p>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>
                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    CAD/CAM Outsourcing
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    On-demand access to expert engineers and advanced tools
                    (e.g., PTC Creo/Pro-Engineer®, SolidWorks, AutoCAD) for
                    precise models and manufacturable toolpaths—without in-house
                    overhead.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>
                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    3D Modeling & Advanced Surfacing
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    Parametric and freeform modeling for complex surfaces and
                    intricate details—ideal for appliances, HVAC, and engineered
                    products.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>
                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    Prototype Development
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    Rapid prototyping (3D printing, CNC, sheet-metal, soft
                    tooling) to test form, fit, and function—iterate quickly,
                    then move to pilot build.
                  </p>
                </div>
              </div>
              <div className=" flex gap-4  p-0 rounded mb-4">
                <div>
                  <FaCircleCheck className=" text-primary   text-2xl" />
                </div>
                <div>
                  <p className="text-2xl text-[#2D2D2D] font-medium">
                    File Conversion & Data Migration
                  </p>
                  <p className="text-base text-[#2D2D2D] font-light">
                    Convert 2D (incl. artwork) or 3D data into usable
                    manufacturing formats (STEP, IGES, STL, DWG/DXF, native CAD)
                    while preserving design intent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what we do */}
      <section>
        <div className="container">
          <div className=" mx-auto flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-10 md:mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                Why Choose AS Business Consulting for R&D
              </h1>
            </div>
          </div>
          <div className=" flex flex-col-reverse md:flex-row gap-8 justify-between">
            <div className="">
              <div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Proven industry expertise across multiple sectors
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    End-to-end support: concept → CAD → render → prototype →
                    handoff
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Cost-effective outsourcing with rapid turnaround
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Quality by design: standards-compliant drawings and
                    documentation
                  </h2>
                </div>
              </div>
              <h2 className="text-black text-2xl font-semibold my-7">
                Deliverables
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Native and neutral 3D CAD files
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    2D drawings with GD&T, assemblies, and BOMs
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Photorealistic renderings/animations
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Working prototypes and test reports
                  </h2>
                </div>
              </div>
              <h2 className="text-black text-2xl font-semibold my-7">
                Explore More Services
              </h2>
              <div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Engineering Consulting – Scale capability and solve complex
                    problems
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Manufacturing Process Optimization – Lean, quality, and
                    throughput gains
                  </h2>
                </div>
                <div className="flex items-center mb-3 gap-4">
                  <div className=" flex items-center justify-center   text-white mb-0 p-0">
                    <FaCheck className=" text-lg rounded-full p-1  bg-primary " />
                  </div>
                  <h2 className="text-black text-base font-medium mb-0">
                    Contact Us – Speak with our R&D team about your product
                    roadmap
                  </h2>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                src="/images/detailing.png" // path relative to /public
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
