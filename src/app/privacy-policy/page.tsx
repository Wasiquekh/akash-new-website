import React from "react";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | AS Business Consulting",
  description:
    "Learn how AS Business Consulting collects, uses, and protects your personal data. Read about cookies, analytics, third-party processors, data retention, security measures, and your rights in India.",
  alternates: {
    canonical: "https://www.asbconsulting.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | AS Business Consulting",
    description:
      "How AS Business Consulting handles your personal information: collection, use, cookies, analytics, retention, and your rights in India.",
    url: "https://www.asbconsulting.in/privacy-policy",
    siteName: "AS Business Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | AS Business Consulting",
    description:
      "Understand our practices for data collection, cookies, analytics, retention, and user rights in India.",
  },
};

const page = () => {
  return (
    <>
      {/* BreadcrumbList (Home → Privacy Policy) */}
      <Script
        id="ld-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asbconsulting.in/" },
              { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.asbconsulting.in/privacy-policy" },
            ],
          }),
        }}
      />

      {/* PrivacyPolicy schema */}
      <Script
        id="ld-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "@id": "https://www.asbconsulting.in/privacy-policy#policy",
            url: "https://www.asbconsulting.in/privacy-policy",
            name: "Privacy Policy | AS Business Consulting",
            description:
              "AS Business Consulting’s Privacy Policy explains how we collect, use, disclose, and safeguard personal information, including cookies, analytics, data retention, security, and user rights in India.",
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.asbconsulting.in/#website",
              url: "https://www.asbconsulting.in/",
              name: "AS Business Consulting",
            },
            about: { "@id": "https://www.asbconsulting.in/#organization" },
            // You can add dates if you track them:
            // datePublished: "2025-01-01",
            // dateModified: "2025-08-28"
          }),
        }}
      />

      <Header />
      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Privacy Policy
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center"></p>
        </div>
      </div>
      <section>
        <div className="container">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Last updated: August 21, 2025
            </p>
          </header>

          <div className="prose max-w-none prose-headings:scroll-mt-24">
            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                1. WHAT INFORMATION DO WE COLLECT?
              </h2>
              <h3 className="font-semibold mt-4">
                Personal information you disclose to us
              </h3>
              <p>
                <strong>In Short:</strong> We collect personal information that
                you provide to us voluntarily — such as your name, phone number,
                email, mailing/billing addresses, or payment data. Payment data
                is stored by Razorpay. Their privacy policy is here:{" "}
                <a
                  href="https://razorpay.com/privacy/"
                  className="text-blue-600 underline"
                  target="_blank"
                >
                  https://razorpay.com/privacy/
                </a>
                .
              </p>

              <h3 className="font-semibold mt-4">
                Information automatically collected
              </h3>
              <p>
                <strong>In Short:</strong> Some information — such as IP
                address, browser, device characteristics, OS, location — is
                automatically collected when you use our Services. We also
                collect log/usage data, device data, and location data. You can
                disable Location but some features may stop working.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h2>
              <p>
                <strong>In Short:</strong> To deliver, improve, and administer
                our Services, for communication, marketing, fraud prevention,
                security, compliance with law, and with your consent when
                required.
              </p>
              <ul className="list-disc pl-6">
                <li>Provide and deliver services</li>
                <li>Respond to user inquiries/support</li>
                <li>Request feedback</li>
                <li>Send marketing and promotional communications</li>
                <li>Deliver targeted advertising</li>
                <li>Protect Services (fraud/security)</li>
                <li>Identify usage trends</li>
                <li>Measure effectiveness of campaigns</li>
                <li>Protect vital interests</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                3. WHAT LEGAL BASES DO WE RELY ON?
              </h2>
              <p>
                <strong>In Short:</strong> We process personal data when we have
                a valid legal reason: Consent, Contract, Legitimate Interests,
                Legal Obligations, or Vital Interests.
              </p>
              <p>
                <strong>EU/UK:</strong> GDPR bases apply. <br />
                <strong>Canada:</strong> Express or implied consent, and certain
                exceptions allowed by law.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                4. WHEN AND WITH WHOM DO WE SHARE INFO?
              </h2>
              <ul className="list-disc pl-6">
                <li>Business transfers (mergers, acquisitions)</li>
                <li>Google Maps Platform APIs (location-based services)</li>
                <li>Affiliates</li>
                <li>Business partners</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">5. DO WE USE COOKIES?</h2>
              <p>
                Yes. We may use cookies and tracking technologies (pixels,
                beacons) to store information. See our Cookie Notice for
                controls.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                6. HOW LONG DO WE KEEP INFO?
              </h2>
              <p>
                We keep personal information only as long as necessary, not
                exceeding 90 days unless required by law (tax, accounting).
                After that, we anonymize or delete it.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                7. HOW DO WE KEEP INFO SAFE?
              </h2>
              <p>
                We use reasonable technical and organizational safeguards. But
                no method of internet transmission is 100% secure. Use our
                Services at your own risk and in a secure environment.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                8. DO WE COLLECT INFO FROM MINORS?
              </h2>
              <p>
                No. We do not knowingly collect data from anyone under 18. If we
                discover it, we delete it. Parents/guardians should contact us
                if they believe a minor’s data has been collected.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                9. WHAT ARE YOUR PRIVACY RIGHTS?
              </h2>
              <p>
                Depending on your region (EEA, UK, Canada), you may have rights
                to access, rectify, erase, restrict, object, or port your data.
                You may also withdraw consent and opt out of marketing.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                10. CONTROLS FOR DO-NOT-TRACK
              </h2>
              <p>
                We do not respond to browser DNT signals currently. If an
                official standard emerges, we will update this notice.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                11. CALIFORNIA RESIDENTS RIGHTS
              </h2>
              <p>
                California residents (CCPA/CPRA) have rights to request access,
                deletion, disclosure of categories of data shared, and
                non-discrimination. We do not sell your data.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">12. DO WE MAKE UPDATES?</h2>
              <p>
                Yes. We update this Privacy Policy to remain compliant with
                laws. Please check the “Last Updated” date.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                13. HOW CAN YOU CONTACT US?
              </h2>
              <address className="not-italic">
                <p className="font-medium">
                  Data Protection Officer (DPO): Akash Shahane
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:akash.shahane@asbconsulting.in"
                    className="text-blue-600 underline"
                  >
                    akash.shahane@asbconsulting.in
                  </a>
                </p>
                <p>Phone: +91-9529322665</p>
                <p>
                  AS BUSINESS CONSULTING
                  <br />
                  21/3, Isha-krupa Apartment, Behind Sant Eknath Rangamandir,
                  Osmanpura,
                  <br />
                  Aurangabad, MH (IN) – 431005
                </p>
              </address>
            </section>

            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                14. REVIEW, UPDATE, DELETE DATA
              </h2>
              <p>
                You may request review, update, or deletion of your data here:{" "}
                <a
                  href="akash.shahane@asbconsulting.in"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  akash.shahane@asbconsulting.in
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
