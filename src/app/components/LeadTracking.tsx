"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// One delegated click listener for the whole site, so each click fires
// exactly one event and individual links need no handlers.
//
//   tel: links                -> phone_click
//   mailto: links             -> email_click
//   wa.me / WhatsApp links    -> whatsapp_click
//   data-cta="service_enquiry" -> service_enquiry_click
//   links to /contact or the on-page #enquiry form -> consultation_click
//
// Form submissions are tracked separately as generate_lead.
const LeadTracking = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const text = (link.textContent || "").trim().slice(0, 80);
      const location = link.getAttribute("data-cta-location") || undefined;

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_text: text });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_text: text });
      } else if (/wa\.me|api\.whatsapp\.com/.test(href)) {
        trackEvent("whatsapp_click", { link_text: text });
      } else if (link.getAttribute("data-cta") === "service_enquiry") {
        trackEvent("service_enquiry_click", {
          link_text: text,
          cta_location: location,
        });
      } else if (href === "/contact" || href.endsWith("#enquiry")) {
        trackEvent("consultation_click", {
          link_text: text,
          cta_location: location,
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
};

export default LeadTracking;
