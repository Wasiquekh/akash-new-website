import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className=" w-full bg-primary ">
        <div className=" mx-auto max-w-screen-xl px-[20px] flex  md:flex-row  items-center gap-2 md:gap-0 justify-between text-xs py-3 text-white">
          <div>+91-9529322665</div>
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
            <Link href="/" className="mr-0 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/our-services" className="mr-0 hover:text-gray-900">
              Services
            </Link>
            <Link href="/" className="mr-0 hover:text-gray-900">
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
          <RxHamburgerMenu className=" text-black text-3xl" />
        </div>
      </header>
    </>
  );
};

export default Header;
