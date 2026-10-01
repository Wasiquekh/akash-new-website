import * as React from "react";
import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

// Renders nothing until real case studies are added to src/lib/caseStudies.ts.
const CaseStudyList = () => {
  if (caseStudies.length === 0) return null;

  return (
    <section>
      <div className="container">
        <h2 className="sm:text-5xl text-2xl font-bold mb-10 text-primary text-center">
          Case Studies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <article
              key={`${study.client}-${study.challenge}`}
              className="bg-white rounded-lg border border-[#D4D4D4] p-6 text-sm"
            >
              <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-1">
                {study.industry}
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">
                {study.client}
              </h3>
              <dl className="space-y-3 inter-text">
                <div>
                  <dt className="font-semibold text-primary">Challenge</dt>
                  <dd>{study.challenge}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">What we did</dt>
                  <dd>{study.intervention}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-primary">Result</dt>
                  <dd>{study.result}</dd>
                </div>
                {study.timeline && (
                  <div>
                    <dt className="font-semibold text-primary">Timeline</dt>
                    <dd>{study.timeline}</dd>
                  </div>
                )}
              </dl>
              {study.services.length > 0 && (
                <p className="mt-4">
                  <span className="font-semibold text-primary">Services: </span>
                  {study.services.map((service, index) => (
                    <React.Fragment key={service.href}>
                      {index > 0 && ", "}
                      <Link href={service.href} className="underline">
                        {service.label}
                      </Link>
                    </React.Fragment>
                  ))}
                </p>
              )}
              <Link
                href="#enquiry"
                data-cta-location="case-study"
                className="inline-block mt-5 bg-secondary hover:bg-primary text-white font-medium py-2 px-5 rounded"
              >
                Discuss a Similar Project
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyList;
