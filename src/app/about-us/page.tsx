import * as React from "react";
export const metadata = {
  title: "About Business Consultants in India | Company Profile – AS Business",
  description:
    "Learn about AS Business Consulting, a leading consulting firm in India. Discover our leadership, mission, values, and professional profile for business success.",
  alternates: {
    canonical: "",
  },
};
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import Link from "next/link";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";

const page = () => {
  return (
    <>
      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center uppercase ">
            about us
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            International Business Development & Logistics Services
          </p>
        </div>
      </div>
      {/* CLINETNS LOGOS */}
      <div className=" w-full">
        <div className=" container grid grid-cols-3 md:grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4">
          <img src="/images/c1.jpg" alt="Logo 1" />
          <img src="/images/c2.jpg" alt="Logo 1" />
          <img src="/images/c3.jpg" alt="Logo 1" />
          <img src="/images/c4.jpg" alt="Logo 1" />
          <img src="/images/c5.jpg" alt="Logo 1" />
          <img src="/images/c6.jpg" alt="Logo 1" />
          <img src="/images/c7.jpg" alt="Logo 1" />
          <img src="/images/c8.jpg" alt="Logo 1" />
        </div>
      </div>
      {/* ABOUT SECTION */}
      <section className=" relative" id="about">
        <div className="container  flex  md:flex-row flex-col items-center relative">
          <div className="lg:max-w-3/6 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="/images/aboutUs.png" // path relative to /public
              alt="My beautiful image"
              width={600}
              height={400}
              priority // optional: preloads image
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-2xl sm:text-6xl   mb-4 font-bold text-primary">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed text-black inter-text text-justify">
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
          </div>
        </div>
        <Image
          src="/images/leftShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute left-0 bottom-0 "
        />
        <Image
          src="/images/rightShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute right-0 top-30 "
        />
      </section>
      {/* JOURNER OF SUCCESS */}
      <section className="">
        <div className="container">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              JOURNEY OF SUCCESS
            </h1>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal">
              We provide strategic business solutions tailored to your growth.
              From startup guidance to operational optimization, our expert
              consulting helps you navigate challenges, increase efficiency, and
              achieve sustainable success. Partner with us to turn your vision
              into results.
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-wrap w-[80%]  md:w-[65%]">
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  01
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2019</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">Establishment of</h2>
                    <p className=" font-semibold">AS Business Consulting</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  02
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2021</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Complete Design project of 
                    </h2>
                    <p className=" font-semibold">Air Conditioner</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  03
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2022</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Developed business with
                    </h2>
                    <p className=" font-semibold">international client</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  04
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2023</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Handling Air Conditioner{" "}
                    </h2>
                    <p className=" font-semibold">
                      Psychrometric Lab as 3rd Party
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  05
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2024</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">Start BIS & NABL </h2>
                    <p className=" font-semibold">Consultation Work</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pt-10 pb-7 sm:items-center md:w-full mx-auto">
                <div className="h-full w-11 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary text-white relative z-10  font-normal text-base">
                  06
                </div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-26 h-26 bg-tertiary text-primary rounded-full inline-flex items-center justify-center">
                    <p className="inter-text text-3xl font-semibold">2025</p>
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0 text-2xl ">
                    <h2 className=" mb-1 font-normal">
                      Firm Approved for MSME{" "}
                    </h2>
                    <p className=" font-semibold">
                      Lean Manufacturing & ZED Scheme
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden  w-[35%] md:flex flex-col justify-between">
              <Image
                src="/images/journey1.jpg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={400}
                priority // optional: preloads image
                className="mb-4"
              />
              <Image
                src="/images/journey2.jpg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={400}
                priority // optional: preloads image
                className="mb-4"
              />
              <Image
                src="/images/journey3.jpg" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={400}
                priority // optional: preloads image
                className=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* TEAM */}
      <section className=" relative">
        <div className="container">
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
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/Akash Shahane.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Akash Shahane
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    MBA BE (Mech.) Founder
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/George Cao.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    George Cao
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    International Biz Head
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/Miss. Jeissey.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Miss. Jeissey
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    China Coordinator
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/Akash Shahane w.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Adv. Madhuri S
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Advocate
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/Ravindra Waykole.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Ravindra Waykole
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Research and Development
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/Rohit Pohekar.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Rohit Pohekar
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Master of Science Wisconsin University
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/Nilesh Kulkarni.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Nilesh Kulkarni
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Industrial Graphics Designer
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
                </div>
              </div>
            </div>
            <div className="p-0">
              <div className="h-full flex flex-col items-center text-center">
                {/* <img
                        alt="team"
                        className="flex-shrink-0 rounded-lg w-[280px] h-[319px] object-cover object-center mb-4"
                        src="/images/Akash Shahane.png"
                      /> */}
                <Image
                  src="/images/Rajendra Patel.png"
                  width={200}
                  height={200}
                  alt="services"
                  className="w-[50%] object-cover mb-5"
                />
                <div className="w-full">
                  <h2 className="text-2xl font-normal text-black mb-5">
                    Rajendra Patel
                  </h2>
                  <h3 className="text-black font-normal text-sm mb-5">
                    Electronics Head
                  </h3>
                  <span className="flex justify-center gap-2.5 text-black">
                    <FaXTwitter />
                    <MdOutlineFacebook />
                    <FaInstagram />
                  </span>
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
          className=" absolute left-0 top-70 hidden "
        />
        <Image
          src="/images/rightShape.svg" // path relative to /public
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute right-0 top-70 hidden"
        />
      </section>

      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
