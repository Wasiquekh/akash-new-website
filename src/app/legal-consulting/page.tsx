import * as React from "react";
export const metadata = {
  title: "Corporate Legal Advisory in India | Compliance – AS Business",
  description:
    "AS Business Consulting delivers corporate legal advisory in India, offering compliance, contract drafting, and cyber law consulting to protect your business.",
  alternates: {
    canonical: "",
  },
};
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
      <div className="bg-[url('/images/legal-consulting.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5 py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Legal Consulting
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
        <div className="container mx-auto flex flex-wrap">
          <div className="flex flex-col text-center w-full mb-0">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              Introduction
            </h1>
            <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              The main object of AS Consultants is to provide comprehensive and
              affordable services to our customers and clients.
            </p>
            <p className="lg:w-[60%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              We help you understand legal and commercial issues to guide
              you into success. Our dedicated teams cater towards all your
              advisory needs covering statutory compliance, financial advisory,
              IPR, IT and Cyber crime protection. Through our management team,
              consisting of Law firms, CA&apos;s , Industry experts sharing
              decades of experience, we provide to our clients analytical study
              of issues and solutions
            </p>
            <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              AS Consultants has a dedicated team of professionals specializing
              in various disciplines including corporate and commercial laws,
              taxation, intellectual property laws and dispute resolution and
              also providing its support to resolve problems in the legal
              domain. The firm is guided by leading and reputed lawyers,
              Chartered Accountants, Corporate Financial Advisors and Industry
              Specialists.
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
        <div className=" container grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="">
            <h2 className="text-black text-2xl font-semibold mb-7">
              Package include
            </h2>
            <div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Corporate Legal Advisory
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Commercial advisory
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Contracts & Agreements
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Banking & Finance law
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Family advisory
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Asset Management
                </h2>
              </div>
              <div className="flex items-center mb-3 gap-3">
                <div className=" flex items-center justify-center rounded-full bg-primary text-white mb-0 p-1">
                  <FaCheck />
                </div>
                <h2 className="text-black text-2xl font-medium mb-0">
                  Background investigation
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
