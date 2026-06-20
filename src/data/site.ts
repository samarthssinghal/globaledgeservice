/*
 * Central site configuration — the single source of truth for the whole site.
 *
 * TODO (owner): replace the PLACEHOLDER values below with real details:
 *   - email, phone, address, linkedin
 *   - contactFormUrl / careersFormUrl  -> paste the "viewform" share link of your Google Forms
 *     (the code automatically appends ?embedded=true when embedding them).
 */

export const site = {
  name: "Global Edge Enterprise, LLC",
  shortName: "Global Edge",
  domain: "globaledgeservice.com",
  url: "https://globaledgeservice.com",
  tagline: "Your edge in finding exceptional talent.",
  subtagline:
    "Global Edge Enterprise connects ambitious companies with the right people — and great people with the right opportunities.",
  description:
    "Global Edge Enterprise, LLC is a full-service recruitment and staffing firm helping companies hire exceptional talent across permanent, contract, and executive roles.",

  // Contact details — PLACEHOLDERS
  email: "info@globaledgeservice.com",
  phone: "+1 (555) 000-0000",
  phoneHref: "tel:+15550000000",
  address: "123 Placeholder Avenue, Suite 100, Austin, TX 00000",
  linkedin: "https://www.linkedin.com/",

  // Google Forms — PLACEHOLDERS (paste your real viewform links)
  contactFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc_PLACEHOLDER_CONTACT/viewform",
  careersFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSc_PLACEHOLDER_CAREERS/viewform",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  summary: string;
  details: string;
  /** Inline SVG path data (heroicons-style, 24x24, stroke). */
  icon: string;
};

export const services: Service[] = [
  {
    title: "Permanent Placement",
    summary: "Full-time hires who fit your culture and grow with your team.",
    details:
      "We manage the full search lifecycle — sourcing, screening, and presenting vetted candidates — so you fill critical full-time roles with people who stay.",
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "Contract & Temporary Staffing",
    summary: "Flexible talent for projects, seasonal peaks, and gaps.",
    details:
      "Scale your workforce up or down with skilled contract professionals, ready to contribute from day one without long-term overhead.",
    icon: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z",
  },
  {
    title: "Executive Search",
    summary: "Discreet, retained search for leadership roles.",
    details:
      "Our consultative approach identifies and engages senior leaders who shape strategy and culture — with confidentiality at every step.",
    icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  },
  {
    title: "Recruitment Process Outsourcing",
    summary: "We become an extension of your talent team.",
    details:
      "From a single requisition to your entire hiring funnel, our RPO model brings process, technology, and recruiters that flex with your demand.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",
  },
  {
    title: "IT & Technical Staffing",
    summary: "Engineers, data, cloud, and product talent.",
    details:
      "Specialized recruiters who speak the language of technology source hard-to-find software, infrastructure, and data professionals.",
    icon: "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  },
  {
    title: "Healthcare Staffing",
    summary: "Compassionate, credentialed clinical and admin talent.",
    details:
      "We help providers and facilities maintain quality of care with thoroughly vetted clinical and administrative healthcare professionals.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
  },
];

export type Differentiator = {
  title: string;
  body: string;
  icon: string;
};

export const differentiators: Differentiator[] = [
  {
    title: "People-First",
    body: "We treat candidates and clients as long-term partners, not transactions.",
    icon: "M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z",
  },
  {
    title: "Industry Expertise",
    body: "Recruiters who understand your market, roles, and what 'great' looks like.",
    icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    title: "Trusted Partnerships",
    body: "Transparent communication and a process you can rely on, every search.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Speed & Results",
    body: "An efficient, tech-enabled process that shortens time-to-hire.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
];

/** Stats shown on the home/about pages — PLACEHOLDER numbers. */
export const stats = [
  { value: "15+", label: "Years of combined recruiting experience" },
  { value: "500+", label: "Successful placements" },
  { value: "20+", label: "Industries served" },
  { value: "92%", label: "Placement retention rate" },
];
