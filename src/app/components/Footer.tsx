import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="text-white bg-primary pt-14 pb-5">
        <div className="mx-auto max-w-screen-xl px-[20px] flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            >
              <Image
                src="/images/footerLogo.svg"
                width={85}
                height={85}
                alt="Picture of the author"
                className=" mt-2"
              />
            </Link>
            <p className="mt-5 text-white text-xs font-light">
              We provide top-quality HVAC services tailored to your needs,
              ensuring comfort and satisfaction with reliable solutions.
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 md:text-left text-center text-xs leading-6">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <p className=" font-medium border-b-2 border-tertiary inline-block text-tertiary mb-3">
                MENU
              </p>
              <nav className="list-none uppercase">
                <li>
                  <Link href="/" className="text-white hover:text-tertiary ">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-tertiary "
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services"
                    className="text-white hover:text-tertiary "
                  >
                    services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customers"
                    className="text-white hover:text-tertiary "
                  >
                    CUSTOMERS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-white hover:text-tertiary "
                  >
                    GALLERY
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-tertiary "
                  >
                    CONTACT US
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className=" font-medium border-b-2 border-tertiary inline-block text-tertiary mb-3">
                SERVICES
              </p>
              <nav className="list-none uppercase">
                <li>
                  <Link
                    href="/research&development"
                    className="text-white hover:text-tertiary "
                  >
                    Research & Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/operation"
                    className="text-white hover:text-tertiary "
                  >
                    OPERATIONS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/international-business-development"
                    className="text-white hover:text-tertiary "
                  >
                    International business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sales&marketing"
                    className="text-white hover:text-tertiary "
                  >
                    Sales & marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/human-resource"
                    className="text-white hover:text-tertiary "
                  >
                    HR Consultancy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-consulting"
                    className="text-white hover:text-tertiary "
                  >
                    Legal advisory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certification"
                    className="text-white hover:text-tertiary "
                  >
                    Certification
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className=" font-medium border-b-2 border-tertiary inline-block text-tertiary mb-3">
                TERMS
              </p>
              <nav className="list-none">
                <li>
                  <Link
                    href="terms"
                    className="text-white hover:text-tertiary uppercase"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-white hover:text-tertiary uppercase"
                  >
                    privacy policy
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <p className=" font-medium border-b-2 border-tertiary inline-block text-tertiary mb-3">
                CONTACT US
              </p>
              <nav className="list-none">
                <li>
                  <Link
                    href="tel:+91-9529322665"
                    className="text-white hover:text-tertiary "
                  >
                    +91-9529322665
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:akash.shahane@asbconsulting.in"
                    className="text-white hover:text-tertiary "
                  >
                    akash.shahane@asbconsulting.in
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className=" mx-auto max-w-screen-xl px-[20px] my-6">
          <div className="w-full border-b border-tertiary"></div>
        </div>
        <div className=" mx-auto max-w-screen-xl px-[20px] flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0 md:justify-between text-xs">
          <div className=" flex gap-2">
            <p>© 2025 AS Consulting All rights reserved.</p>
            <Link target="_blank" href="https://www.dynsimulation.com/">
              {" "}
              <p className=" hover:text-tertiary">
                Dynsimulation Private Limited.
              </p>
            </Link>
          </div>

          <div className="flex gap-4 text-sm">
            <Link href="/">
              <FaFacebook />
            </Link>
            <Link href="/">
              <FaInstagram />
            </Link>
            <Link href="/">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </footer>
      {/* call and whatsapp */}
      {/* <div className="fixed bottom-16 md:bottom-[70px]  left-[1px] z-[99999]">
        <Link target="_blank" href="https://wa.me/919920529961">
          <div className="relative flex items-center bg-secondary p-3 mb-2 w-[55px] hover:w-40 hover:scale-110 transition-all duration-700 ease-out group overflow-hidden">
            <FaWhatsapp className="text-white text-3xl" />
            <p className="hidden group-hover:block absolute left-14 text-white whitespace-nowrap font-semibold transition-all duration-500">
              WhatsApp
            </p>
          </div>
        </Link>
      </div>
      <div className="fixed bottom-0 md:bottom-2 left-[1px] z-[99999]">
        <Link href="tel:+919403890376">
          <div className="relative flex items-center bg-primary p-3 mb-2 transition-all duration-700 ease-out w-[55px] hover:w-36 group overflow-hidden">
            <IoMdCall className="text-white text-3xl transition-transform duration-300 group-hover:scale-110" />
            <p className="hidden group-hover:block absolute left-14 text-white whitespace-nowrap font-semibold transition-all duration-500">
              Call Us
            </p>
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Footer;
