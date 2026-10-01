export type CaseStudy = {
  /** Client name, or a neutral descriptor if the client has not approved naming. */
  client: string;
  industry: string;
  challenge: string;
  /** What AS Business Consulting actually did. */
  intervention: string;
  /** Service page paths, e.g. "/operation/qms". */
  services: { label: string; href: string }[];
  /** Verified outcome. Use qualitative wording unless the number is confirmed. */
  result: string;
  timeline?: string;
};

// TODO(business): add real, client-approved case studies here. The section on
// /customers stays hidden while this list is empty.
//
// Needed for each entry: industry, the business challenge, what was done,
// which services were used, the verified result, and the timeline. Do not
// publish figures that the client has not confirmed.
//
// Candidate projects already mentioned on the site (details still required):
//   - 2021: complete air-conditioner design project
//   - 2023: third-party handling of an air-conditioner psychrometric lab
export const caseStudies: CaseStudy[] = [];
