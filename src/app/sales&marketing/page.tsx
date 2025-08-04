import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowUpFromGroundWater, FaCheck } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { FaBoxes } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { BsBullseye } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/human-resource.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Sales & Marketing
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
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              We do
            </h1>
            <p className="lg:w-[80%] mx-auto leading-relaxed inter-text text-sm font-normal mb-6">
              AS BUSINESS CONSULTING is a Solution Provider. we work with you,
              helping you to identify your potential and become more innovative,
              competitive & efficient to help you grow exponentially in the
              global markets. 
            </p>
          </div>
          <div className=" flex justify-between gap-4">
            <div className="w-1/2">
              <div className=" flex flex-col gap-4">
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-medium mb-0">
                    B2B Business to Business Marketing
                  </h2>
                </div>
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-medium mb-0">
                    B2C Business to Customer Marketing
                  </h2>
                </div>
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-medium mb-0">
                    CONSULTING to grow business
                  </h2>
                </div>
                <div className=" flex items-center mb-3 gap-3 bg-tertiary p-4 rounded-2xl">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-medium mb-0">
                    TRAININGS for latest tools and techniques
                  </h2>
                </div>
              </div>
              <Image
                src="/images/we-do.svg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mt-20"
              />
            </div>
            <div className="w-1/2">
              <div className="relative w-full max-w-5xl mx-auto pt-0 pb-0">
                {/* Vertical center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#502D52] to-[#A53691]"></div>

                {/* STEP 1 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Advertising
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <RiAdvertisementLine className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 2 - Right */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <BiSolidReport className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Project Report
                    </h3>
                  </div>
                </div>

                {/* STEP 3 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Market Planning
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <FaArrowUpFromGroundWater className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 4 - Right */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <MdPriceChange className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Product Pricing
                    </h3>
                  </div>
                </div>

                {/* STEP 5 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-3 rounded-2xl">
                      Set Targets And Goals
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <BsBullseye className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 6 - Right */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <FaBoxes className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-2 rounded-2xl">
                      Distribution & Planning
                    </h3>
                  </div>
                </div>

                {/* STEP 7 - Left */}
                <div className="flex items-center mb-14">
                  <div className="w-1/2 text-right pr-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Building Brands
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <TbBuildingSkyscraper className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* STEP 8 - Right */}
                <div className="flex items-center">
                  <div className="w-1/2"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#502D52] to-[#A53691] flex items-center justify-center shadow-md">
                      <HiOutlineSparkles className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="w-1/2 text-left pl-8">
                    <h3 className="text-xl font-medium text-black bg-[#FFF6FD] inline-flex py-3 px-10 rounded-2xl">
                      Creating Value
                    </h3>
                  </div>
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
        </div>
      </section>
      <section>
        <div className=" container">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Our Strengths
            </h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <Image
              src="/images/s1.svg"
              alt="Image 2"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s2.svg"
              alt="Image 3"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s3.svg"
              alt="Image 4"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s4.svg"
              alt="Image 5"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s5.svg"
              alt="Image 6"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
            <Image
              src="/images/s6.svg"
              alt="Image 6"
              width={150}
              height={150}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
