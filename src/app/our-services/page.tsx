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
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center h-[540px] w-full flex justify-center items-center">
        <div className="container ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 ">
              Short Term Courses
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm font-normal text-white inter-text">
              We are one of the end to end service provider company. After
              successfully working in Design, New product Development, Lean
              Manufacturing, HR and Marketing sector we start “International
              Business Development And Logistics” Services for our valuable
              customer. 
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
        <div className=" container grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
            <div>
              <Image
                src="/images/s1.svg" // path relative to /public
                alt="My beautiful image"
                width={100}
                height={100}
                priority // optional: preloads image
                className=""
              />
            </div>

            <div>
              <p className=" text-2xl font-medium text-black  mb-1">
                Lean Manufacturing
              </p>
              <p className=" text-sm font-normal text-black inter-text">
                Basic Level, Intermediate Level, Advance Level.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
            <div>
              <Image
                src="/images/s1.svg" // path relative to /public
                alt="My beautiful image"
                width={100}
                height={100}
                priority // optional: preloads image
                className=""
              />
            </div>

            <div>
              <p className=" text-2xl font-medium text-black  mb-1">
                Lean Manufacturing
              </p>
              <p className=" text-sm font-normal text-black inter-text">
                Basic Level, Intermediate Level, Advance Level.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
            <div>
              <Image
                src="/images/s1.svg" // path relative to /public
                alt="My beautiful image"
                width={100}
                height={100}
                priority // optional: preloads image
                className=""
              />
            </div>

            <div>
              <p className=" text-2xl font-medium text-black  mb-1">
                Lean Manufacturing
              </p>
              <p className=" text-sm font-normal text-black inter-text">
                Basic Level, Intermediate Level, Advance Level.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
            <div>
              <Image
                src="/images/s1.svg" // path relative to /public
                alt="My beautiful image"
                width={100}
                height={100}
                priority // optional: preloads image
                className=""
              />
            </div>

            <div>
              <p className=" text-2xl font-medium text-black  mb-1">
                Lean Manufacturing
              </p>
              <p className=" text-sm font-normal text-black inter-text">
                Basic Level, Intermediate Level, Advance Level.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
            <div>
              <Image
                src="/images/s1.svg" // path relative to /public
                alt="My beautiful image"
                width={100}
                height={100}
                priority // optional: preloads image
                className=""
              />
            </div>

            <div>
              <p className=" text-2xl font-medium text-black  mb-1">
                Lean Manufacturing
              </p>
              <p className=" text-sm font-normal text-black inter-text">
                Basic Level, Intermediate Level, Advance Level.
              </p>
            </div>
          </div>
          <div className="flex items-center bg-[#FEF2FB] gap-4 py-4 px-6 rounded">
            <div>
              <Image
                src="/images/s1.svg" // path relative to /public
                alt="My beautiful image"
                width={100}
                height={100}
                priority // optional: preloads image
                className=""
              />
            </div>

            <div>
              <p className=" text-2xl font-medium text-black  mb-1">
                Lean Manufacturing
              </p>
              <p className=" text-sm font-normal text-black inter-text">
                Basic Level, Intermediate Level, Advance Level.
              </p>
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
