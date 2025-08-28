import React from "react";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms & Conditions | AS Business Consulting",
  description:
    "Read AS Business Consulting’s Terms & Conditions covering website use, services, intellectual property, disclaimers, liability limits, and governing law in India.",
  alternates: {
    canonical: "https://www.asbconsulting.in/terms",
  },
  openGraph: {
    title: "Terms & Conditions | AS Business Consulting",
    description:
      "AS Business Consulting’s Terms & Conditions for website use, services, IP, disclaimers, liability, and governing law in India.",
    url: "https://www.asbconsulting.in/terms",
    siteName: "AS Business Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | AS Business Consulting",
    description:
      "AS Business Consulting’s Terms & Conditions for website use, services, IP, disclaimers, liability, and governing law in India.",
  },
};

const page = () => {
  return (
    <>
      {/* BreadcrumbList (Home → Terms & Conditions) */}
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
                name: "Terms & Conditions",
                item: "https://www.asbconsulting.in/terms",
              },
            ],
          }),
        }}
      />

      {/* WebPage schema for Terms */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.asbconsulting.in/terms#webpage",
            url: "https://www.asbconsulting.in/terms",
            name: "Terms & Conditions | AS Business Consulting",
            description:
              "Terms & Conditions that govern the use of AS Business Consulting’s website and services in India, including intellectual property, disclaimers, and limitations of liability.",
            inLanguage: "en-IN",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.asbconsulting.in/#website",
              url: "https://www.asbconsulting.in/",
              name: "AS Business Consulting",
            },
            about: { "@id": "https://www.asbconsulting.in/#organization" },
            // Optional if you track updates:
            // datePublished: "2025-01-01",
            // dateModified: "2025-08-28",
          }),
        }}
      />

      {/*  TOP SECTION Banner */}
      <div className="bg-[url('/images/services.jpg')] bg-cover bg-center">
        <div className=" max-w-7xl m-auto px-5  py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center ">
            Terms and Conditions
          </h1>
          <p className=" mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center"></p>
        </div>
      </div>
      <section>
        <div className="container">
          {/* Note: This template is for general use only and is not legal advice. Ask counsel to review. */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
            <p className="text-sm text-gray-600 mt-1">
              Last updated: August 21, 2025
            </p>
          </header>

          <div className="prose max-w-none prose-headings:scroll-mt-24">
            <section id="agreement" className="mt-8">
              <h2 className="text-xl font-semibold">1. AGREEMENT TO TERMS</h2>
              <p>
                These Terms of Use constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                (“you”) and <strong>AS BUSINESS CONSULTING</strong> (“Company,”
                “we,” “us,” or “our”), concerning your access to and use of the{" "}
                <strong>asbconsulting.in</strong> website as well as any other
                media form, media channel, mobile website or mobile application
                related, linked, or otherwise connected thereto (collectively,
                the “Site”). By accessing the Site, you confirm that you have
                read, understood, and agree to be bound by these Terms of Use.
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, YOU ARE
                EXPRESSLY PROHIBITED FROM USING THE SITE AND MUST DISCONTINUE
                USE IMMEDIATELY.
              </p>
              <p>
                Supplemental terms and conditions or documents that may be
                posted on the Site from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Terms
                of Use at any time and for any reason. We will alert you about
                any changes by updating the “Last updated” date of these Terms
                of Use, and you waive any right to receive specific notice of
                each such change. Please check the applicable Terms every time
                you use our Site so that you understand which Terms apply. Your
                continued use of the Site after the date such revised Terms of
                Use are posted constitutes your acceptance of the changes.
              </p>
              <p>
                The information provided on the Site is not intended for
                distribution to or use by any person or entity in any
                jurisdiction or country where such distribution or use would be
                contrary to law or regulation or which would subject us to any
                registration requirement within such jurisdiction or country.
                Those who access the Site from other locations do so on their
                own initiative and are solely responsible for compliance with
                local laws, if and to the extent local laws are applicable.
              </p>
            </section>

            <section id="ipr" className="mt-8">
              <h2 className="text-xl font-semibold">
                2. INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property
                and all source code, databases, functionality, software, website
                designs, audio, video, text, photographs, and graphics on the
                Site (collectively, the “Content”) and the trademarks, service
                marks, and logos contained therein (the “Marks”) are owned or
                controlled by us or licensed to us, and are protected by
                copyright and trademark laws and other intellectual property
                rights. The Content and the Marks are provided on an “AS IS”
                basis for your information and personal use only. Except as
                expressly provided in these Terms of Use, no part of the Site
                and no Content or Marks may be copied, reproduced, aggregated,
                republished, uploaded, posted, publicly displayed, encoded,
                translated, transmitted, distributed, sold, licensed, or
                otherwise exploited for any commercial purpose whatsoever,
                without our express prior written permission.
              </p>
              <p>
                Provided that you are eligible to use the Site, you are granted
                a limited license to access and use the Site and to download or
                print a copy of any portion of the Content to which you have
                properly gained access solely for your personal, non-commercial
                use. We reserve all rights not expressly granted to you in and
                to the Site, the Content, and the Marks.
              </p>
            </section>

            <section id="user-representations" className="mt-8">
              <h2 className="text-xl font-semibold">3. USER REPRESENTATIONS</h2>
              <p>
                By using the Site, you represent and warrant that: (1) you have
                the legal capacity and agree to comply with these Terms of Use;
                (2) you are not a minor in the jurisdiction in which you reside;
                (3) you will not access the Site through automated or non-human
                means, whether through a bot, script, or otherwise; (4) you will
                not use the Site for any illegal or unauthorized purpose; and
                (5) your use of the Site will not violate any applicable law or
                regulation. If you provide any information that is untrue,
                inaccurate, not current, or incomplete, we have the right to
                suspend or terminate your account and refuse any and all current
                or future use of the Site (or any portion thereof).
              </p>
            </section>

            <section id="prohibited" className="mt-8">
              <h2 className="text-xl font-semibold">
                4. PROHIBITED ACTIVITIES
              </h2>
              <p>
                You may not access or use the Site for any purpose other than
                that for which we make the Site available. The Site may not be
                used in connection with any commercial endeavors except those
                specifically endorsed or approved by us.
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Systematically retrieve data or other content from the Site to
                  create or compile a database or directory without our written
                  permission.
                </li>
                <li>
                  Trick, defraud, or mislead us or other users, including
                  attempts to obtain sensitive account information such as
                  passwords.
                </li>
                <li>
                  Circumvent, disable, or interfere with security-related
                  features of the Site.
                </li>
                <li>
                  Disparage, tarnish, or otherwise harm, in our opinion, us
                  and/or the Site.
                </li>
                <li>
                  Use any information obtained from the Site to harass, abuse,
                  or harm another person.
                </li>
                <li>
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </li>
                <li>
                  Use the Site in a manner inconsistent with applicable laws or
                  regulations.
                </li>
                <li>
                  Engage in unauthorized framing of or linking to the Site.
                </li>
                <li>
                  Upload or transmit viruses, Trojan horses, or other material
                  that interferes with any party’s use and enjoyment of the
                  Site.
                </li>
                <li>
                  Engage in any automated use of the system, including scripts,
                  data mining, robots, or similar tools.
                </li>
                <li>
                  Delete copyright or other proprietary rights notices from any
                  Content.
                </li>
                <li>
                  Impersonate another user or person or use another user’s
                  username.
                </li>
                <li>
                  Upload or transmit any material that acts as a passive or
                  active information collection or transmission mechanism (e.g.,
                  gifs, 1×1 pixels, web bugs, cookies, or similar).
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the Site
                  or connected networks.
                </li>
                <li>
                  Harass, annoy, intimidate, or threaten any of our employees or
                  agents providing any portion of the Site.
                </li>
                <li>
                  Attempt to bypass measures designed to prevent or restrict
                  access to the Site.
                </li>
                <li>
                  Copy or adapt the Site’s software, including but not limited
                  to HTML, JavaScript, or other code.
                </li>
                <li>
                  Use, launch, develop, or distribute any automated system or
                  unauthorized script that accesses the Site.
                </li>
                <li>
                  Use a buying or purchasing agent to make purchases on the
                  Site.
                </li>
                <li>
                  Make any unauthorized use of the Site, including collecting
                  usernames/emails for unsolicited email or creating accounts
                  under false pretenses.
                </li>
                <li>
                  Use the Site to compete with us or otherwise for any
                  revenue-generating endeavor or commercial enterprise.
                </li>
              </ul>
            </section>

            <section id="ugc" className="mt-8">
              <h2 className="text-xl font-semibold">
                5. USER GENERATED CONTRIBUTIONS
              </h2>
              <p>
                The Site does not offer users to submit or post content. We may
                provide you with the opportunity to create, submit, post,
                display, transmit, perform, publish, distribute, or broadcast
                content and materials to us or on the Site (collectively,
                “Contributions”). Contributions may be viewable by other users
                of the Site and through third-party websites. Any Contributions
                you transmit may be treated in accordance with the Site Privacy
                Policy. When you make any Contributions, you represent and
                warrant that you have all rights necessary and that your
                Contributions (a) do not infringe third-party rights; (b) are
                not false or misleading; (c) are not unsolicited promotions or
                spam; (d) are not obscene, harassing, or otherwise
                objectionable; (e) do not violate any law; and (f) do not
                contain offensive comments connected to protected
                characteristics.
              </p>
              <p>
                Any use of the Site in violation of the foregoing may result in
                termination or suspension of your rights to use the Site.
              </p>
            </section>

            <section id="license" className="mt-8">
              <h2 className="text-xl font-semibold">6. CONTRIBUTION LICENSE</h2>
              <p>
                You agree that we may access, store, process, and use any
                information and personal data that you provide following the
                terms of the Privacy Policy and your choices (including
                settings). By submitting suggestions or other feedback, you
                agree that we may use and share such feedback for any purpose
                without compensation. We do not assert ownership over your
                Contributions; you retain all rights therein. You are solely
                responsible for your Contributions, and you agree to refrain
                from any legal action against us regarding your Contributions.
              </p>
            </section>

            <section id="submissions" className="mt-8">
              <h2 className="text-xl font-semibold">7. SUBMISSIONS</h2>
              <p>
                Any questions, comments, suggestions, ideas, feedback, or other
                information regarding the Site (“Submissions”) provided by you
                to us are non-confidential and shall become our sole property.
                We shall own exclusive rights, including all intellectual
                property rights, and be entitled to unrestricted use and
                dissemination of these Submissions for any lawful purpose
                without acknowledgment or compensation to you.
              </p>
            </section>

            <section id="management" className="mt-8">
              <h2 className="text-xl font-semibold">8. SITE MANAGEMENT</h2>
              <p>
                We reserve the right, but not the obligation, to: (1) monitor
                the Site for violations of these Terms; (2) take appropriate
                legal action against anyone who violates the law or these Terms;
                (3) in our discretion, refuse, restrict, limit, or disable any
                Contributions; (4) remove or disable files and content that are
                excessive in size or burdensome to our systems; and (5)
                otherwise manage the Site to protect our rights and facilitate
                proper functioning.
              </p>
            </section>

            <section id="term" className="mt-8">
              <h2 className="text-xl font-semibold">9. TERM AND TERMINATION</h2>
              <p>
                These Terms remain in full force while you use the Site. WITHOUT
                LIMITING ANY OTHER PROVISION OF THESE TERMS, WE RESERVE THE
                RIGHT, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY,
                TO DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING
                CERTAIN IP ADDRESSES) TO ANY PERSON FOR ANY REASON OR NO REASON,
                INCLUDING FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE TERMS OR ANY APPLICABLE LAW. We may
                terminate your use or participation in the Site or delete any
                content or information you posted at any time, without warning,
                in our sole discretion. If we terminate or suspend your account,
                you are prohibited from registering and creating a new account
                under your name or a third party’s name. We reserve the right to
                pursue civil, criminal, and injunctive relief.
              </p>
            </section>

            <section id="modifications" className="mt-8">
              <h2 className="text-xl font-semibold">
                10. MODIFICATIONS AND INTERRUPTIONS
              </h2>
              <p>
                We reserve the right to change, modify, or remove the contents
                of the Site at any time, for any reason, without notice. We have
                no obligation to update any information on our Site. We are not
                liable to you or any third party for any modification, price
                change, suspension, or discontinuance of the Site. We cannot
                guarantee the Site will be available at all times and may
                experience interruptions. You agree that we have no liability
                for any loss caused by your inability to access or use the Site
                during downtime or discontinuance.
              </p>
            </section>

            <section id="law" className="mt-8">
              <h2 className="text-xl font-semibold">11. GOVERNING LAW</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of India. You and{" "}
                <strong>AS BUSINESS CONSULTING</strong> irrevocably consent that
                the courts of <strong>Aurangabad, Maharashtra</strong> shall
                have exclusive jurisdiction to resolve any dispute which may
                arise in connection with these Terms.
              </p>
            </section>

            <section id="dispute" className="mt-8">
              <h2 className="text-xl font-semibold">12. DISPUTE RESOLUTION</h2>
              <h3 className="font-semibold">Binding Arbitration</h3>
              <p>
                Any dispute arising out of or in connection with this contract,
                including any question regarding its existence, validity or
                termination, shall be referred to and finally resolved by the
                International Commercial Arbitration Court under the European
                Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
                according to its Rules. The number of arbitrators shall be 1.
                The seat (legal place) of arbitration shall be{" "}
                <strong>Aurangabad, Maharashtra</strong>. The language shall be
                English. The governing law shall be the substantive law of
                India.
              </p>
              <h3 className="font-semibold mt-4">Restrictions</h3>
              <p>
                Arbitration shall be limited to the dispute between the Parties
                individually. No arbitration may be joined with any other
                proceeding; there is no right or authority for any Dispute to be
                arbitrated on a class-action basis or in a representative
                capacity.
              </p>
              <h3 className="font-semibold mt-4">Exceptions to Arbitration</h3>
              <p>
                The following Disputes are not subject to arbitration: (a)
                disputes seeking to enforce or protect intellectual property
                rights; (b) disputes related to allegations of theft, piracy,
                invasion of privacy, or unauthorized use; and (c) claims for
                injunctive relief. If any portion of this clause is found
                illegal or unenforceable, such Dispute shall be decided by a
                court of competent jurisdiction as specified above.
              </p>
            </section>

            <section id="corrections" className="mt-8">
              <h2 className="text-xl font-semibold">13. CORRECTIONS</h2>
              <p>
                There may be information on the Site that contains typographical
                errors, inaccuracies, or omissions, including descriptions,
                pricing, availability, and other information. We reserve the
                right to correct any errors, inaccuracies, or omissions and to
                change or update the information on the Site at any time,
                without prior notice.
              </p>
            </section>

            <section id="disclaimer" className="mt-8">
              <h2 className="text-xl font-semibold">14. DISCLAIMER</h2>
              <p>
                THE SITE IS PROVIDED ON AN “AS-IS” AND “AS-AVAILABLE” BASIS. YOU
                AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR
                SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM
                ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING THE IMPLIED
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES REGARDING THE
                ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF
                ANY WEBSITES LINKED TO THE SITE AND ASSUME NO LIABILITY FOR (1)
                ERRORS OR INACCURACIES, (2) PERSONAL INJURY OR PROPERTY DAMAGE
                RESULTING FROM YOUR USE, (3) UNAUTHORIZED ACCESS TO OR USE OF
                OUR SERVERS AND ANY PERSONAL/FINANCIAL INFORMATION STORED
                THEREIN, (4) INTERRUPTION OR CESSATION OF TRANSMISSION, (5) BUGS
                OR VIRUSES, AND/OR (6) ERRORS OR OMISSIONS IN ANY CONTENT OR FOR
                ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY
                CONTENT. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED
                BY A THIRD PARTY THROUGH THE SITE.
              </p>
            </section>

            <section id="liability" className="mt-8">
              <h2 className="text-xl font-semibold">
                15. LIMITATIONS OF LIABILITY
              </h2>
              <p>
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
                LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
                CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
                OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF ADVISED
                OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO
                THE CONTRARY HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE
                WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION WILL AT ALL
                TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY
                YOU TO US OR INR 10,000.
              </p>
              <p className="text-sm text-gray-600">
                Note: Some jurisdictions do not allow limitations on implied
                warranties or exclusion/limitation of certain damages; some of
                the above may not apply to you.
              </p>
            </section>

            <section id="indemnification" className="mt-8">
              <h2 className="text-xl font-semibold">16. INDEMNIFICATION</h2>
              <p>
                You agree to defend, indemnify, and hold us harmless, including
                our subsidiaries, affiliates, and all of our respective
                officers, agents, partners, and employees, from and against any
                loss, damage, liability, claim, or demand, including reasonable
                attorneys’ fees, made by any third party due to or arising out
                of: (1) use of the Site; (2) breach of these Terms; (3) breach
                of your representations and warranties; (4) your violation of
                third-party rights; or (5) any overt harmful act toward any
                other user of the Site with whom you connected via the Site. We
                reserve the right, at your expense, to assume the exclusive
                defense and control of any matter subject to indemnification by
                you, and you agree to cooperate with our defense of such claims.
              </p>
            </section>

            <section id="user-data" className="mt-8">
              <h2 className="text-xl font-semibold">17. USER DATA</h2>
              <p>
                We will maintain certain data you transmit to the Site for the
                purpose of managing the performance of the Site, as well as data
                relating to your use of the Site. Although we perform routine
                backups, you are solely responsible for all data that you
                transmit or that relates to any activity you have undertaken
                using the Site. You agree that we shall have no liability to you
                for any loss or corruption of such data.
              </p>
            </section>

            <section id="electronic" className="mt-8">
              <h2 className="text-xl font-semibold">
                18. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </h2>
              <p>
                Visiting the Site, sending us emails, and completing online
                forms constitute electronic communications. You consent to
                receive electronic communications, and you agree that all
                agreements, notices, disclosures, and other communications we
                provide to you electronically satisfy any legal requirement that
                such communication be in writing. YOU AGREE TO THE USE OF
                ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND
                TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF
                TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE.
              </p>
            </section>

            <section id="misc" className="mt-8">
              <h2 className="text-xl font-semibold">19. MISCELLANEOUS</h2>
              <p>
                These Terms and any policies or operating rules posted by us on
                the Site constitute the entire agreement between you and us. Our
                failure to exercise or enforce any right or provision shall not
                operate as a waiver. These Terms operate to the fullest extent
                permissible by law. We may assign any or all of our rights and
                obligations at any time. We shall not be responsible for any
                loss, damage, delay, or failure to act caused by any cause
                beyond our reasonable control. If any provision is deemed
                unlawful, void, or unenforceable, that provision is deemed
                severable and does not affect the validity of remaining
                provisions. No joint venture, partnership, employment, or agency
                relationship is created as a result of these Terms or use of the
                Site. You waive any defenses based on the electronic form of
                these Terms and the lack of signing by the parties.
              </p>
            </section>

            <section id="contact" className="mt-8">
              <h2 className="text-xl font-semibold">20. CONTACT US</h2>
              <address className="not-italic">
                <p className="font-medium">AS BUSINESS CONSULTING</p>
                <p>
                  21/3, Isha-krupa Apartment, Behind Sant Eknath Rangamandir,
                  Osmanpura,
                  <br />
                  Aurangabad, MH (IN) – 431005
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
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+919529322665"
                    className="text-blue-600 underline"
                  >
                    +91-9529322665
                  </a>
                </p>
              </address>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
