"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import {
  RxChevronDown,
  RxChevronRight,
  RxCross1,
  RxHamburgerMenu,
} from "react-icons/rx";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-full bg-gradient-to-b from-[#A53691] to-[#502D52] text-white z-50">
          <RxCross1
            className="text-xl absolute top-7 text-white right-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
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
              href="/about-us"
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

      {/* TOP HEADER */}
      <div className="w-full bg-primary">
        <div className="mx-auto max-w-screen-xl px-5 flex md:flex-row items-center gap-2 md:gap-0 justify-between text-xs py-2 md:py-0 text-white">
          <Link href="tel:+91-9529322665">
            <div className="flex gap-1 items-center">
              <IoIosCall className="text-base" />
              +91-9529322665
            </div>
          </Link>

          <div>
            <Image
              src="/images/client-header.svg"
              width={500}
              height={500}
              alt="client header"
              className="hidden md:block"
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
      <header className="hidden md:block w-full">
        <div className="max-w-7xl px-5 mx-auto flex justify-between py-3.5 flex-col md:flex-row items-center">
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

          <div className="ml-auto flex items-center gap-8">
            <nav className="flex flex-wrap gap-6 items-center text-base font-light leading-4 justify-end">
              <Link href="/" className="mr-0 hover:text-gray-900 cursor-pointer">
                Home
              </Link>

              <Link
                href="/about-us"
                className="mr-0 hover:text-gray-900 cursor-pointer"
              >
                About Us
              </Link>

              {/* SERVICES DROPDOWN */}
              <div className="relative group">
                <Link href="/our-services" className="mr-0 hover:text-gray-900">
                  <div className="flex items-center gap-0.5">
                    Services
                    <RxChevronDown />
                  </div>
                </Link>

                {/* FIRST LEVEL SUBMENU */}
                <div
                  className={`
                    absolute left-0 top-full
                    invisible opacity-0 translate-y-1
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                    transition-all duration-150
                    bg-white mt-1 rounded w-72 pb-2 z-50 text-[15px]
                    pointer-events-none group-hover:pointer-events-auto
                    before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2
                    pt-2 shadow-lg`}
                >
                  {/* RESEARCH AND DEVELOPMENT WITH RIGHT SIDE SUBMENU */}
                  <div className="relative group/research">
                    <Link
                      href="/research&development"
                      className="flex items-center justify-between px-3 py-3 hover:bg-tertiary"
                    >
                      <span>Research and Development</span>
                      <RxChevronRight />
                    </Link>

                    {/* RIGHT SIDE RESEARCH AND DEVELOPMENT LINKS */}
                    <div
                      className={`
                        absolute left-full top-0
                        invisible opacity-0 translate-x-1
                        group-hover/research:visible group-hover/research:opacity-100 group-hover/research:translate-x-0
                        transition-all duration-150
                        bg-white rounded w-80 pb-2 z-50 text-[15px]
                        pointer-events-none group-hover/research:pointer-events-auto
                        pt-2 shadow-lg
                        before:content-[''] before:absolute before:-left-2 before:top-0 before:w-2 before:h-full`}
                    >
                      <Link
                        href="/research&development/cad-cam-outsourcing"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        CAD/CAM Outsourcing
                      </Link>

                      <Link
                        href="/research&development/engineering-drafting-documentation"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Engineering Drafting &amp; Documentation
                      </Link>

                      <Link
                        href="/research&development/file-conversion-data-migration"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        File Conversion &amp; Data Migration
                      </Link>

                      <Link
                        href="/research&development/modeling-advanced-surfacing"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        3D Modeling &amp; Advanced Surfacing
                      </Link>

                      <Link
                        href="/research&development/product-design-engineering"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Product Design &amp; Engineering
                      </Link>

                      <Link
                        href="/research&development/prototype-development"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Prototype Development
                      </Link>

                      <Link
                        href="/research&development/Realtime-renderings-visualization"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Realtime Renderings &amp; Visualization
                      </Link>

                      <Link
                        href="/research&development/reverse-engineering"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Reverse Engineering
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/operation"
                    className="block px-3 py-3 hover:bg-tertiary"
                  >
                    Operations
                  </Link>

                  {/* INTERNATIONAL BUSINESS WITH RIGHT SIDE SUBMENU */}
                  <div className="relative group/international">
                    <Link
                      href="/international-business-development"
                      className="flex items-center justify-between px-3 py-3 hover:bg-tertiary"
                    >
                      <span>International Business</span>
                      <RxChevronRight />
                    </Link>

                    {/* RIGHT SIDE INTERNATIONAL BUSINESS LINKS */}
                    <div
                      className={`
                        absolute left-full top-0
                        invisible opacity-0 translate-x-1
                        group-hover/international:visible group-hover/international:opacity-100 group-hover/international:translate-x-0
                        transition-all duration-150
                        bg-white rounded w-80 pb-2 z-50 text-[15px]
                        pointer-events-none group-hover/international:pointer-events-auto
                        pt-2 shadow-lg
                        before:content-[''] before:absolute before:-left-2 before:top-0 before:w-2 before:h-full`}
                    >
                      <Link
                        href="/international-business-development/consultation-incentives"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Consultation &amp; Incentives
                      </Link>

                      <Link
                        href="/international-business-development/development-technology"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Development Technology
                      </Link>

                      <Link
                        href="/international-business-development/import-export-enablement"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Import Export Enablement
                      </Link>

                      <Link
                        href="/international-business-development/logistics-compliance"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Logistics &amp; Compliance
                      </Link>
                    </div>
                  </div>

                  {/* SALES & MARKETING WITH RIGHT SIDE SUBMENU */}
                  <div className="relative group/salesmarketing">
                    <Link
                      href="/sales&marketing"
                      className="flex items-center justify-between px-3 py-3 hover:bg-tertiary"
                    >
                      <span>Sales &amp; Marketing</span>
                      <RxChevronRight />
                    </Link>

                    {/* RIGHT SIDE SALES & MARKETING LINKS */}
                    <div
                      className={`
                        absolute left-full top-0
                        invisible opacity-0 translate-x-1
                        group-hover/salesmarketing:visible group-hover/salesmarketing:opacity-100 group-hover/salesmarketing:translate-x-0
                        transition-all duration-150
                        bg-white rounded w-80 pb-2 z-50 text-[15px]
                        pointer-events-none group-hover/salesmarketing:pointer-events-auto
                        pt-2 shadow-lg
                        before:content-[''] before:absolute before:-left-2 before:top-0 before:w-2 before:h-full`}
                    >
                      <Link
                        href="/sales&marketing/b2b-marketing"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        B2B Marketing
                      </Link>

                      <Link
                        href="/sales&marketing/b2c-marketing"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        B2C Marketing
                      </Link>

                      <Link
                        href="/sales&marketing/growth-consulting"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Growth Consulting
                      </Link>

                      <Link
                        href="/sales&marketing/training"
                        className="block px-3 py-3 hover:bg-tertiary"
                      >
                        Training
                      </Link>
                    </div>
                  </div>

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
              <button className="flex items-center justify-center bg-secondary w-44 h-12 focus:outline-none hover:bg-primary rounded-[7px] text-white font-medium text-lg mt-4 md:mt-0 cursor-pointer">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* HEADER FOR MOBILE */}
      <header className="md:hidden w-full">
        <div className="max-w-7xl px-5 mx-auto flex justify-between items-center py-3.5">
          <Link
            href="/"
            className="flex title-font font-medium items-center mb-0 md:mb-0"
          >
            <Image
              src="/images/asConsultingLogo.svg"
              alt="AS logo"
              width={55}
              height={55}
            />
          </Link>

          <RxHamburgerMenu
            onClick={() => setIsOpen(true)}
            className="text-black text-3xl cursor-pointer"
          />
        </div>
      </header>
    </>
  );
};

export default Header;