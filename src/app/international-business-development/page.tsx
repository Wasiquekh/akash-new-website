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
      <div className="bg-[url('/images/legal-consulting.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Internation Business Development
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center w-full md:w-[80%]">
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
          <div className=" mx-auto flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                International Business
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
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
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
        </div>
      </section>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-primary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Technology
                <br />
                Development
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">New Technology / Setup</div>
              <div className="py-4  ">Machine & Tools</div>
              <div className="py-4  ">International Relations</div>
              <div className="py-4  ">Business Development</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-secondary h-10 rounded-b-lg"></div>
          </div>
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-secondary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Import
                <br />
                Export
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">Certification</div>
              <div className="py-4  ">Licensing</div>
              <div className="py-4  ">Product Sales</div>
              <div className="py-4  ">Franchise</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-primary h-10 rounded-b-lg"></div>
          </div>
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-primary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Logistics
                <br />
                Transport
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">Freight Forwarding</div>
              <div className="py-4  ">Customer Clearance</div>
              <div className="py-4  ">Transportation</div>
              <div className="py-4  ">Packing</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-secondary  h-10 rounded-b-lg"></div>
          </div>
          <div className="rounded border border-gray-200">
            {/* head */}
            <div className="bg-secondary text-white text-center py-4 rounded-t-lg">
              <h2 className="text-2xl font-medium leading-tight">
                Consultation
                <br />
                Training
              </h2>
            </div>
            {/* Menu Items  */}
            <div className="flex flex-col divide-y divide-gray-300 text-gray-600 text-center font-medium">
              <div className="py-4  ">Cost Saving</div>
              <div className="py-4  ">Govt. Benefit & Scheme</div>
              <div className="py-4  ">Audit</div>
              <div className="py-4  ">Training</div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-primary h-10 rounded-b-lg"></div>
          </div>
        </div>
      </section>
      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
