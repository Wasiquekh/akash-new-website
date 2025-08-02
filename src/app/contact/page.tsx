import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
//import ContactFrom from "../components/ContactFrom";
import { FiInstagram } from "react-icons/fi";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center h-[540px] w-full flex justify-center items-center">
        <div className="container ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 ">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-sm font-normal text-white inter-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. 
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
              Connect with Our Team of Experts
            </h1>
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
        <div className="container flex justify-between">
          <div className=" w-[46%]">
            <p className=" text-5xl text-primary mb-5 font-semibold">
              Want to join our Talented Team?
            </p>
            <div className="mb-5">
              <p className=" text-2xl text-black font-medium">Address</p>
              <p className=" text-sm font-normal inter-text w-[80%]">
                21/3, Isha-krupa Apartment , Behind Sant Eknath Rangamandir
                Osmanpura, Aurangabad Mh (I) -431005
              </p>
            </div>
            <div className="mb-5">
              <p className=" text-2xl text-black font-medium">Email Us</p>
              <p className=" text-sm font-normal inter-text w-[80%]">
                akash.shahane@asbconsulting.in
              </p>
            </div>
            <div className="mb-5">
              <p className=" text-2xl text-black font-medium">Call Us</p>
              <p className=" text-sm font-normal inter-text w-[80%]">
                +91-9529322665
              </p>
            </div>
            <div className=" flex gap-4 text-secondary mb-7">
              <FaFacebookF />
              <FiInstagram />
              <FaXTwitter />
              <FaLinkedin />
            </div>
            <div className="bg-tertiary w-full h-[150px] mt-0 relative">
              <Image
                src="/images/join-team.png" // path relative to /public
                alt="My beautiful image"
                width={300}
                height={300}
                priority // optional: preloads image
                className=" absolute right-0 bottom-0 "
              />
            </div>
          </div>
          <div className=" w-[46%] bg-tertiary py-6 px-12 rounded ">
            <div className="lg:w-full   flex flex-col md:ml-auto w-full md:py-0 mt-8 md:mt-0 h-auto text-sm font-normal ">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7  ">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300  focus:border-tertiary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7  ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300  focus:border-tertiary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7  ">
                  Phone number
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300  focus:border-tertiary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm  ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300  focus:border-tertiary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
