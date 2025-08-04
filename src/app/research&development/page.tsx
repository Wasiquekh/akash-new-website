import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/research-banner.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Research & Development
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center w-full md:w-[80%]">
            We provide strategic business solutions tailored to your growth.
            From startup guidance to operational optimization, our expert
            consulting helps you navigate challenges, increase efficiency, and
            achieve sustainable success. Partner with us to turn your vision
            into results.
          </p>
        </div>
      </div>
      <section className=" relative">
        <div className="container mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              OUR TEAM
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              We provide strategic business solutions tailored to your growth.
              From startup guidance to operational optimization, our expert
              consulting helps you navigate challenges, increase efficiency, and
              achieve sustainable success. Partner with us to turn your vision
              into results.
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
            <div className="flex flex-col mb-0 lg:items-start items-center p-6">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-semibold mb-0">
                    Real Time Renderings
                  </h2>
                </div>

                <p className=" text-sm font-normal text-black inter-text w-[80%]">
                  Any Concept you have or is supposed to be developed, Come to
                  us, We Will Turn Your Imaginations into Virtual Reality by
                  means of sophisticated Soft wares
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-0 lg:items-start items-center bg-tertiary p-6 rounded">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-semibold mb-0">
                    Real Time Renderings
                  </h2>
                </div>

                <p className=" text-sm font-normal text-black inter-text w-[80%]">
                  Any Concept you have or is supposed to be developed, Come to
                  us, We Will Turn Your Imaginations into Virtual Reality by
                  means of sophisticated Soft wares
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-0 lg:items-start items-center p-6">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-semibold mb-0">
                    Real Time Renderings
                  </h2>
                </div>

                <p className=" text-sm font-normal text-black inter-text w-[80%]">
                  Any Concept you have or is supposed to be developed, Come to
                  us, We Will Turn Your Imaginations into Virtual Reality by
                  means of sophisticated Soft wares
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-0 lg:items-start items-center p-6">
              <div className="flex-grow">
                <div className="flex items-center mb-5 gap-3">
                  <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-2">
                    <FaCheck />
                  </div>
                  <h2 className="text-black text-2xl font-semibold mb-0">
                    Real Time Renderings
                  </h2>
                </div>

                <p className=" text-sm font-normal text-black inter-text w-[80%]">
                  Any Concept you have or is supposed to be developed, Come to
                  us, We Will Turn Your Imaginations into Virtual Reality by
                  means of sophisticated Soft wares
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
      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
