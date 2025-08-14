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
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            CERTIFICATION
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            Short Term Courses
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
