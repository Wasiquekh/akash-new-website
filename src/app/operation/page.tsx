import React from "react";
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
        <div className=" max-w-7xl m-auto px-5  py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center uppercase ">
            Operations Consulting
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            International Business Development & Logistics Services
          </p>
        </div>
      </div>
      <section className=" relative">
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
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                Operations Consulting
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                Businesses are always looking to better optimize their
                operational processes in a variety of ways, like increasing
                efficiency, cutting costs, improvement quality, etc. In certain
                scenarios, however, such as economic downturns, changes in
                management, or technological rollouts, operations consultants
                will be brought in to advise on significant changes to a
                business' operational processes.
              </p>
            </div>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Innovation.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1 ">
                  Innovation
                </p>
                <p className=" text-sm font-normal text-black inter-text ">
                  - Benchmarking of Product & Process
                </p>
                <p className="text-sm font-normal text-black inter-text">
                  - Cost Saving
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Technology Updation
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Productivity Improvement.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1">
                  Productivity Improvement
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Identifying Process Bottlenecks
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Line Balancing
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Increases UPH & productivity
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Systematic Operation.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1">
                  Systematic Operation
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - 5S implementation
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - SOP creation
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - SCM Management
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/MIS & Audit.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1">
                  MIS & Audit
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Analysis of business performance
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Process Audit
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - System Audit
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/QMS.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1">QMS</p>
                <p className=" text-sm font-normal text-black inter-text">
                  - FTR Improvement
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - 7 QC Tools, Kaizen, Poka-yoke
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Quality Awareness Trainings
                </p>
              </div>
            </div>
            <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
              <div>
                <Image
                  src="/images/Financial Growth.svg" // path relative to /public
                  alt="My beautiful image"
                  width={130}
                  height={130}
                  priority // optional: preloads image
                  className=""
                />
              </div>

              <div>
                <p className=" text-2xl font-medium text-black  mb-1">
                  Financial Growth
                </p>

                <p className=" text-sm font-normal text-black inter-text">
                  - Institutional Financing
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Fund Flow management
                </p>
                <p className=" text-sm font-normal text-black inter-text">
                  - Taxes Advisory
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
