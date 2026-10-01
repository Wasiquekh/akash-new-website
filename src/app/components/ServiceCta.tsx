import * as React from "react";
import Link from "next/link";

type ServiceCtaProps = {
  heading: string;
  text: string;
  buttonLabel: string;
  /** Identifies this CTA in analytics, e.g. "cad-cam-mid". */
  location: string;
  /** Optional bullet list, e.g. what the visitor can share. */
  points?: string[];
};

// Service-specific enquiry band. The button scrolls to the enquiry form that
// every page already renders (ContactFrom, id="enquiry").
const ServiceCta = ({
  heading,
  text,
  buttonLabel,
  location,
  points,
}: ServiceCtaProps) => {
  return (
    <section>
      <div className="container">
        <div className="rounded-lg bg-primary text-white px-6 py-10 md:px-12 md:py-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-sm md:text-base leading-relaxed inter-text max-w-3xl mb-6">
            {text}
          </p>
          {points && points.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm inter-text max-w-3xl mb-8 list-disc pl-5">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link
              href="#enquiry"
              data-cta="service_enquiry"
              data-cta-location={location}
              className="inline-block bg-white text-primary hover:bg-tertiary font-semibold text-base py-3 px-6 rounded text-center"
            >
              {buttonLabel}
            </Link>
            <p className="text-sm inter-text">
              Or call{" "}
              <a href="tel:+91-9529322665" className="underline font-medium">
                +91-9529322665
              </a>{" "}
              · email{" "}
              <a
                href="mailto:akash.shahane@asbconsulting.in"
                className="underline font-medium break-all"
              >
                akash.shahane@asbconsulting.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCta;
