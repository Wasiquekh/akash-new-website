import React from "react";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";
import Link from "next/link";

export const metadata = {
  title: "Our Clients & Case Studies in India | AS Business",
  description:
    "Explore AS Business Consulting’s customers across industries. Browse clients, case studies, sectors served, and measurable outcomes from real engagements.",
  alternates: {
    canonical: "https://www.asbconsulting.in/customers",
  },
};

const page = () => {
  return (
    <>
      {/* BreadcrumbList (Home → Customers) */}
      {/* BreadcrumbList (Home → Customers) */}
      <Script
        id="breadcrumb-schema-customers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.asbconsulting.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Customers",
                item: "https://www.asbconsulting.in/customers",
              },
            ],
          }),
        }}
      />

      {/* CollectionPage (Customers listing page) */}
      <Script
        id="collectionpage-schema-customers"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://www.asbconsulting.in/customers#page",
            url: "https://www.asbconsulting.in/customers",
            name: "Our Clients & Case Studies in India | AS Business",
            description:
              "AS Business Consulting’s customer portfolio: clients, industries served, and case studies with outcomes.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.asbconsulting.in/#website",
              url: "https://www.asbconsulting.in/",
              name: "AS Business Consulting",
            },
          }),
        }}
      />

      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center uppercase ">
            our customers
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            We proudly serve businesses across industries, delivering solutions
            that help them grow, innovate, and succeed.
          </p>
        </div>
      </div>
      {/* <section className="">
        <Image
          src="/images/leftShape.svg" 
          alt="My beautiful image"
          width={300}
          height={300}
          priority 
          className=" absolute left-0 top-0 "
        />
        <Image
          src="/images/rightShape.svg" 
          alt="My beautiful image"
          width={300}
          height={300}
          priority // optional: preloads image
          className=" absolute right-0 top-0 "
        />
      </section> */}
      <section>
        <div className="container">
          <div className=" flex flex-wrap">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
                Trusted by Our Clients
              </h1>
              <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
                We proudly serve businesses across industries, delivering
                solutions that help them grow, innovate, and succeed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 z-50">
            {/* 1 */}
            <Link
              href="https://havells.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/1.png"
                    alt="Customer logo 1"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 2 */}
            <Link
              href="https://www.haier.com/in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/2.png"
                    alt="Customer logo 2"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 3 */}
            <Link
              href="https://tde-group.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/3.png"
                    alt="Customer logo 3"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 4 */}
            <Link
              href="https://pgel.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/4.png"
                    alt="Customer logo 4"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 5 */}
            <Link
              href="https://www.voepl.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/5.png"
                    alt="Customer logo 5"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 6 */}
            <Link
              href="https://www.videoconindustriesltd.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/6.png"
                    alt="Customer logo 6"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 7 */}
            <Link
              href="https://www.whirlpoolindia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/8.png"
                    alt="Customer logo 7"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 8 */}
            <Link
              href="https://www.facebook.com/MyLloydIndia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/9.png"
                    alt="Customer logo 8"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 9 */}
            <Link
              href="http://www.qixing-electronics.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/10.png"
                    alt="Customer logo 9"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 10 */}
            <Link
              href="https://kenstar.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/11.png"
                    alt="Customer logo 10"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 11 */}
            <Link
              href="https://zed.msme.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/12.png"
                    alt="Customer logo 11"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 12 */}
            <Link
              href="https://lean.msme.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/13.png"
                    alt="Customer logo 12"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 13 */}
            <Link
              href="https://www.linkedin.com/company/mandiesel&turbo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/14.png"
                    alt="Customer logo 13"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 14 */}
            <Link
              href="https://www.bajajelectricals.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/15.png"
                    alt="Customer logo 14"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 15 */}
            <Link
              href="https://www.facebook.com/Nirlep.HealthyCooking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/16.png"
                    alt="Customer logo 15"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 16 */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/17.png"
                    alt="Customer logo 16"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 17 */}
            <Link
              href="http://specialityepl.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/18.png"
                    alt="Customer logo 17"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 18 */}
            <Link
              href="https://www.onida.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/19.png"
                    alt="Customer logo 18"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 19 */}
            <Link
              href="https://amstradworld.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/20.png"
                    alt="Customer logo 19"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 20 */}
            <Link
              href="https://sansuiworld.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/21.png"
                    alt="Customer logo 20"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 21 */}
            <Link
              href="https://www.samsonite.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/22.png"
                    alt="Customer logo 21"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 22 */}
            <Link
              href="https://www.unistab.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/23.png"
                    alt="Customer logo 22"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 23 */}
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/24.png"
                    alt="Customer logo 23"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 24 */}
            <Link
              href="http://www.spaco.co.in/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/25.png"
                    alt="Customer logo 24"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 25 */}
            <Link
              href="https://www.kfbioplants.com/index.php?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/26.png"
                    alt="Customer logo 25"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 26 */}
            <Link
              href="https://www.te.com/en/home.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full shadow-[0px_8px_24px_rgba(149,157,165,0.2)] hover:shadow-[0px_12px_28px_rgba(149,157,165,0.3)] transition-shadow duration-300 flex items-center justify-center p-6">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                  <Image
                    src="/images/customers/27.png"
                    alt="Customer logo 26"
                    width={100}
                    height={100}
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            {/* 27 */}
          </div>
        </div>
      </section>

      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
