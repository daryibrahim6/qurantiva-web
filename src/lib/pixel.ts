type PixelEvent =
  | "PageView"
  | "Lead"
  | "InitiateCheckout"
  | "Contact"
  | "CompleteRegistration";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: PixelEvent, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, data);
  }
}

export function trackCustomEvent(event: string, data?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", event, data);
  }
}
