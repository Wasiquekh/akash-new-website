import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div className=" w-full bg-primary ">
        <div className=" mx-auto max-w-screen-xl px-[20px] flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0 md:justify-between text-xs py-3 text-white">
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

      <header className="w-full">
        <div className=" max-w-7xl px-5 mx-auto flex flex-wrap p-3.5 flex-col md:flex-row items-center">
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
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base font-light leading-4 justify-center">
            <Link href="/" className="mr-7 hover:text-gray-900">
              Home
            </Link>
            <Link href="/" className="mr-7 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/our-services" className="mr-7 hover:text-gray-900">
              Services
            </Link>
            <Link href="/" className="mr-7 hover:text-gray-900">
              Customers
            </Link>
            <Link href="/gallery" className="mr-7 hover:text-gray-900">
              Our Gallery
            </Link>
            <Link href="/contact" className="mr-7 hover:text-gray-900">
              Contact Us
            </Link>
          </nav>
          <button className="flex items-center justify-center bg-secondary w-44 h-12 focus:outline-none hover:bg-gray-200  rounded-[7px] text-white font-medium text-lg mt-4 md:mt-0">
            Book Now
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
