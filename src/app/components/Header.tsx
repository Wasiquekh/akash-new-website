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
        <div className="fixed top-0 left-0 h-screen w-full bg-white z-50">
          <RxCross1
            className="text-black text-3xl absolute top-16 right-6"
            onClick={() => setIsOpen(!isOpen)}
          />
          <nav className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-light">
            <Link
              href="/"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/"
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

            {/* services submene */}
            <Link
              href="/research&development"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              R&D
            </Link>
            <Link
              href="/operation"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Operations
            </Link>
            <Link
              href="/international-business-deveopment"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Certification
            </Link>
            <Link
              href="/sales&marketing"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Sales & Mrkt
            </Link>
            <Link
              href="/human-resource"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              HR Consultancy
            </Link>
            <Link
              href="/legal-consulting"
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Legal Advisory
            </Link>
            {/* end submenu */}
            <Link
              href="#customers"
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
        <div className=" mx-auto max-w-screen-xl px-[20px] flex  md:flex-row  items-center gap-2 md:gap-0 justify-between text-xs py-3 text-white">
          <Link href="tel:+91-9529322665">
            <div className=" flex gap-1 items-center">
              <IoIosCall className=" text-base" />
              +91-9529322665
            </div>
          </Link>
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
              <div className="flex items-center gap-0.5">
                <Link href="/our-services" className="mr-0 hover:text-gray-900">
                  Services
                </Link>
                <RxChevronDown />
              </div>
              {/* Submenu */}
              <div className="absolute top-full left-0 hidden group-hover:block bg-white mt-1 rounded w-42 pb-4 z-50 text-[15px]">
                <Link
                  href="/research&development"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  R&D
                </Link>
                <Link
                  href="/operation"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  Operations
                </Link>
                <Link
                  href="/international-business-deveopment"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  Certification
                </Link>
                <Link
                  href="/sales&marketing"
                  className="block px-3 py-3 hover:bg-tertiary"
                >
                  Sales & Mrkt
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
              </div>
            </div>

            <Link href="/#customer" className="mr-0 hover:text-gray-900">
              Customers
            </Link>
            <Link href="/gallery" className="mr-0 hover:text-gray-900">
              Our Gallery
            </Link>
            <Link href="/contact" className="mr-0 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <button className="flex items-center justify-center bg-secondary w-44 h-12 focus:outline-none hover:bg-primary  rounded-[7px] text-white font-medium text-lg mt-4 md:mt-0">
            Book Now
          </button>
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
