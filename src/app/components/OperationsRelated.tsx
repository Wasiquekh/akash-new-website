import * as React from "react";
import Link from "next/link";

type Related = { href: string; anchor: string; why: string };

// Hand-picked connections between the operations services. Each page links
// only to the services that genuinely follow from it, with the reason stated.
const related: Record<string, Related[]> = {
  "systematic-operation": [
    {
      href: "/operation/qms",
      anchor: "Quality management system consulting",
      why: "SOPs define the standard; QC tools, Kaizen and Poka-yoke stop defects from creeping back in.",
    },
    {
      href: "/operation/audit",
      anchor: "Process and system audits",
      why: "regular audits confirm that 5S and SOPs are actually being followed on the floor.",
    },
    {
      href: "/operation/productivity-inprovement",
      anchor: "Productivity improvement consulting",
      why: "once work is standardized, bottlenecks and line balance become measurable.",
    },
  ],
  qms: [
    {
      href: "/operation/systematic-operation",
      anchor: "5S and SOP implementation",
      why: "stable, documented processes are the base a quality system is built on.",
    },
    {
      href: "/operation/audit",
      anchor: "Process and system audits",
      why: "audit findings feed corrective and preventive actions.",
    },
    {
      href: "/certification",
      anchor: "ISO, BIS, NABL and ZED certification support",
      why: "for when the quality system needs formal certification.",
    },
  ],
  "productivity-inprovement": [
    {
      href: "/operation/systematic-operation",
      anchor: "Systematic operation consulting",
      why: "standard work and 5S remove the variation that hides real bottlenecks.",
    },
    {
      href: "/operation/qms",
      anchor: "QMS and first-time-right improvement",
      why: "rework is lost output, so raising FTR raises effective capacity.",
    },
    {
      href: "/operation/innovation",
      anchor: "Innovation and cost saving consulting",
      why: "benchmarking and technology updates for gains beyond line balancing.",
    },
  ],
  audit: [
    {
      href: "/operation/qms",
      anchor: "Quality management system consulting",
      why: "close quality gaps found in process and system audits.",
    },
    {
      href: "/operation/systematic-operation",
      anchor: "Systematic operations consulting",
      why: "turn audit gaps into SOPs, checklists and review routines.",
    },
    {
      href: "/operation/financial-growth",
      anchor: "Financial growth advisory",
      why: "use MIS data for fund-flow and working-capital decisions.",
    },
  ],
  innovation: [
    {
      href: "/operation/productivity-inprovement",
      anchor: "Productivity improvement consulting",
      why: "apply process improvements on the line through bottleneck study and line balancing.",
    },
    {
      href: "/research&development/product-design-engineering",
      anchor: "Product design and engineering",
      why: "when benchmarking points to a product redesign rather than a process change.",
    },
    {
      href: "/operation/financial-growth",
      anchor: "Financial growth advisory",
      why: "plan the funding for new technology and equipment.",
    },
  ],
  "financial-growth": [
    {
      href: "/operation/audit",
      anchor: "MIS and performance audits",
      why: "reliable numbers are what lenders and management ask for first.",
    },
    {
      href: "/operation/innovation",
      anchor: "Cost saving and innovation consulting",
      why: "reduce cost at the source, not only on the balance sheet.",
    },
    {
      href: "/operation/productivity-inprovement",
      anchor: "Productivity improvement consulting",
      why: "more output from the same assets improves cash flow.",
    },
  ],
};

const OperationsRelated = ({ current }: { current: keyof typeof related }) => {
  const items = related[current];
  if (!items) return null;

  return (
    <section className="bg-white py-14 text-primary md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-black leading-tight md:text-4xl">
          How This Connects to the Rest of Your Operation
        </h2>
        <p className="mb-6 max-w-3xl text-sm font-medium leading-7 text-black md:text-base">
          This service is one part of our{" "}
          <Link href="/operation" className="underline hover:text-secondary">
            operations consulting
          </Link>{" "}
          work. It is usually combined with:
        </p>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.href}
              className="rounded-2xl border border-tertiary bg-[#FEF2FB] p-5 text-sm leading-6 text-black"
            >
              <Link
                href={item.href}
                className="font-bold text-primary underline hover:text-secondary"
              >
                {item.anchor}
              </Link>{" "}
              – {item.why}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OperationsRelated;
