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
      <section className="">
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
                business operational processes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 z-50">
            {/* 1 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/1.png"
                  alt="Customer logo 1"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 2 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/2.png"
                  alt="Customer logo 2"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 3 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/3.png"
                  alt="Customer logo 3"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 4 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/4.png"
                  alt="Customer logo 4"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 5 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/5.png"
                  alt="Customer logo 5"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 6 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/6.png"
                  alt="Customer logo 6"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 7 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/8.png"
                  alt="Customer logo 7"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 8 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/9.png"
                  alt="Customer logo 8"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 9 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/10.png"
                  alt="Customer logo 9"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 10 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/11.png"
                  alt="Customer logo 10"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 11 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/12.png"
                  alt="Customer logo 11"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 12 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/13.png"
                  alt="Customer logo 12"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 13 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/14.png"
                  alt="Customer logo 13"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 14 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/15.png"
                  alt="Customer logo 14"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 15 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/16.png"
                  alt="Customer logo 15"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 16 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/17.png"
                  alt="Customer logo 16"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 17 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/18.png"
                  alt="Customer logo 17"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 18 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/19.png"
                  alt="Customer logo 18"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 19 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/20.png"
                  alt="Customer logo 19"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 20 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/21.png"
                  alt="Customer logo 20"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 21 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/22.png"
                  alt="Customer logo 21"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 22 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/23.png"
                  alt="Customer logo 22"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 23 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/24.png"
                  alt="Customer logo 23"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 24 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/25.png"
                  alt="Customer logo 24"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 25 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/26.png"
                  alt="Customer logo 25"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 26 */}
            <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
              <div className="w-[100px] h-[100px] flex items-center justify-center">
                <Image
                  src="/images/customers/27.png"
                  alt="Customer logo 26"
                  width={100}
                  height={100}
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* 27 */}
          </div>
        </div>
      </section>

      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
