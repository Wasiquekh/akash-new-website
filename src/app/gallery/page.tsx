import React from "react";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactFrom from "../components/ContactFrom";

export const metadata = {
  title: "Project Gallery & Client Work in India | AS Business Consulting",
  description:
    "Browse AS Business Consulting’s project gallery: operations improvements, R&D prototypes, certifications, international business events, HR trainings, and B2B marketing launches.",
  alternates: {
    canonical: "https://www.asbconsulting.in/gallery",
  },
  openGraph: {
    title: "Project Gallery & Client Work in India | AS Business Consulting",
    description:
      "Browse AS Business Consulting’s project gallery: operations improvements, R&D prototypes, certifications, international business events, HR trainings, and B2B marketing launches.",
    url: "https://www.asbconsulting.in/gallery",
    siteName: "AS Business Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery & Client Work in India | AS Business Consulting",
    description:
      "Browse AS Business Consulting’s project gallery: operations improvements, R&D prototypes, certifications, international business events, HR trainings, and B2B marketing launches.",
  },
};

const page = () => {
  return (
    <>
      {/* BreadcrumbList (Home → Gallery) */}
      <Script
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
                name: "Gallery",
                item: "https://www.asbconsulting.in/gallery",
              },
            ],
          }),
        }}
      />

      {/* ImageGallery schema (specialized CollectionPage for images) */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "@id": "https://www.asbconsulting.in/gallery#gallery",
            url: "https://www.asbconsulting.in/gallery",
            name: "Project Gallery & Client Work in India | AS Business Consulting",
            description:
              "A curated gallery of AS Business Consulting’s work across operations, R&D, certification, international business, HR, legal, and B2B marketing.",
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.asbconsulting.in/#website",
              url: "https://www.asbconsulting.in/",
              name: "AS Business Consulting",
            },
            about: { "@id": "https://www.asbconsulting.in/#organization" },
          }),
        }}
      />

      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Gallery
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center w-full md:w-[80%]">
            Explore our gallery to see milestones, achievements, and moments
            that showcase our journey of success with clients and partners.
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
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-bold  mb-4 text-primary">
              AWARDS
            </h1>
            <p className="lg:w-[90%] mx-auto leading-relaxed inter-text text-sm font-normal mb-4">
              Our awards highlight our commitment to excellence, innovation, and
              trusted business solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 uppercase">
            <div className="">
              <Image
                src="/gallery/g1.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                Cost Innovation Training
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g2.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                Lean Manufacturing Trainning
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g3.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                Six Sigma Training At Dy Patil Collage.
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g4.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                Lean Manufacturing Training
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g5.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                Lean Manufacturing Training
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g6.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                Lean Manufacturing Training
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g7.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">QCI INDIA TEAM</p>
            </div>
            <div className="">
              <Image
                src="/gallery/g8.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                MANTHAN PROGRAMME AT CHENNAI
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g9.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                Six Sigma Training At Dy Patil Collage.
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g10.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                LEAN AWARNESS PROGRAMME AT IFB GOA
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g11.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                LEAN AWARNESS PROGRAMME AT IFB GOA
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g12.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                PROJECT DISCUSSION WITH VOLTAS CAC TEAM
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g13.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                HONOR AT LAGU UDYOG BHARTI JALNA
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g14.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                BRAIN STROMMING ACTIVITY AT MARVEL
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g15.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                OPENNING CEREMONY AT LUNAR PLASTICS
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g16.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                HONAR AT LAGU UDYOG BHARTI JALNA
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g17.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                HONAR AT LAGU UDYOG BHARTI JALNA
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g18.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                WELCOME TO MR. R.R. PATEL
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g19.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                VISITING PROJECT GALLERY (MECH.) AT D.Y. PARTIL COLLAGE OF ENGG.
                KOLHAPUR
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g20.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                LEAN CROSS LEARNNING ACTIVITY IN CSN AREA.
              </p>
            </div>
            <div className="">
              <Image
                src="/gallery/g21.png" // path relative to /public
                alt="My beautiful image"
                width={600}
                height={600}
                priority // optional: preloads image
                className=" mb-3 rounded"
              />
              <p className=" text-base md:text-xl font-light">
                MEETING WITH NEDARLAND GUEST MR. SIMON FOR FCU DEVELOPMENT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactFrom />
      <Footer />
    </>
  );
};

export default page;
