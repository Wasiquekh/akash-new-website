"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { RxChevronDown, RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-full bg-gradient-to-b from-[#A53691] to-[#502D52] text-white z-50">
          <RxCross1
            className=" text-xl absolute top-7 text-white right-6"
            onClick={() => setIsOpen(!isOpen)}
          />
          <nav className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-light">
            <Link
              href="/"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/our-services"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/customers"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Customers
            </Link>
            <Link
              href="/gallery"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Our Gallery
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <div className=" w-full bg-primary ">
        <div className=" mx-auto max-w-screen-xl px-[20px] flex  md:flex-row  items-center gap-2 md:gap-0 justify-between text-xs py-2 md:p-0 text-white">
          <Link href="tel:+91-9529322665">
            <div className=" flex gap-1 items-center">
              <IoIosCall className=" text-base" />
              +91-9529322665
            </div>
          </Link>
          <div>
            <Image
              src="/images/client-header.svg"
              width={500}
              height={500}
              alt="client header"
              className=" hidden md:block"
            />
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
      </div>
      {/* HEADER FOR DESKTOP */}
      <header className=" hidden md:block w-full">
        <div className=" max-w-7xl px-5 mx-auto flex justify-between py-3.5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              src="/images/asConsultingLogo.svg"
              alt="AS logo"
              width={55}
              height={55}
            />
          </Link>
          <nav className=" m-auto flex flex-wrap gap-6 items-center text-base font-light leading-4 justify-center">
            <Link href="/" className="mr-0 hover:text-gray-900">
              Home
            </Link>
            <Link href="/#about" className="mr-0 hover:text-gray-900">
              About Us
            </Link>
            <div className="relative group">
              <Link href="/our-services" className="mr-0 hover:text-gray-900">
                <div className="flex items-center gap-0.5">
                  Services
                  <RxChevronDown />
                </div>
              </Link>

              {/* Submenu */}
              <div
                className={`
                  absolute left-0 top-full
                  invisible opacity-0 translate-y-1
                  group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-150
                  bg-white mt-1 rounded w-56 pb-2 z-50 text-[15px]
                  pointer-events-none group-hover:pointer-events-auto
                  before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2
                  pt-2`}
              >
                <Link
                  href="/research&development"
                  className="block px-3 py-3  hover:bg-tertiary"
                >
                  Research and Development
                </Link>
                <Link
                  href="/operation"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  Operations
                </Link>
                <Link
                  href="/international-business-development"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  International Business
                </Link>
                <Link
                  href="/sales&marketing"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  Sales &amp; Marketing
                </Link>
                <Link
                  href="/human-resource"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  HR Consultancy
                </Link>
                <Link
                  href="/legal-consulting"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  Legal Advisory
                </Link>
                <Link
                  href="/certification"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  Certification
                </Link>
              </div>
            </div>

            <Link href="/customers" className="mr-0 hover:text-gray-900">
              Customers
            </Link>
            <Link href="/gallery" className="mr-0 hover:text-gray-900">
              Our Gallery
            </Link>
            <Link href="/contact" className="mr-0 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <Link href="/contact">
            <button className="flex items-center justify-center bg-secondary w-44 h-12 focus:outline-none hover:bg-primary  rounded-[7px] text-white font-medium text-lg mt-4 md:mt-0 cursor-pointer">
              Book Now
            </button>
          </Link>
        </div>
      </header>
      {/* HEADER FOR MOBILE */}
      <header className=" md:hidden w-full">
        <div className=" max-w-7xl px-5 mx-auto flex justify-between items-center py-3.5">
          <Link
            href="/"
            className="flex title-font font-medium items-center  mb-0 md:mb-0"
          >
            <Image
              src="/images/asConsultingLogo.svg"
              alt="AS logo"
              width={55}
              height={55}
            />
          </Link>
          <RxHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            className=" text-black text-3xl"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
