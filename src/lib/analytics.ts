// Thin wrapper around the GA4 gtag() that layout.tsx already loads.
// Safe to call anywhere on the client; does nothing if gtag is unavailable.
type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, {
    page_path: window.location.pathname,
    ...params,
  });
}
