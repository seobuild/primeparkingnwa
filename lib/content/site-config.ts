import { SiteConfig, Link } from "./types";

export const parkingOptions: Link[] = [
  { label: "RV Storage", href: "/rv-storage" },
  { label: "Boat Storage", href: "/boat-storage" },
  { label: "Trailer Storage", href: "/trailer-storage" },
  { label: "Commercial & Fleet Parking", href: "/commercial-fleet-parking" },
  { label: "Semi Truck Parking", href: "/semi-truck-parking" },
  { label: "Construction Equipment Storage", href: "/construction-equipment-storage" },
];

export const siteConfig: SiteConfig = {
  name: "Prime Parking NWA",
  tagline: "Secure Paved Vehicle Storage in Rogers, AR",
  description:
    "Prime Parking NWA offers secure, fully paved outdoor parking and vehicle storage in Rogers, AR. RV, boat, commercial fleet, and trailer storage with 24/7 gated access.",
  url: "https://primeparkingnwa.com",
  logo: {
    src: "/images/Prime_transparent_logo.webp",
    alt: "Prime Parking NWA",
    width: 200,
    height: 60,
  },
  favicon:
    "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/8ed07790-b48d-4900-a90f-0333e5be66bf/favicon.ico?format=100w",
  phone: "4796407396",
  email: "primeparkingnwa@gmail.com",
  address: {
    street: "2808 N 26th St.",
    city: "Rogers",
    state: "AR",
    zip: "72756",
  },
  hours: {
    access: "Open 24/7",
    office: "Monday — Sunday\n9 am — 5 pm",
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Parking Options",
      href: "#",
      children: parkingOptions,
    },
    { label: "Our Location", href: "/location" },
    { label: "FAQs", href: "/faqs" },
    { label: "Tenant Login Instructions", href: "/tenant-login-instructions" },
  ],
  social: {
    facebook: "https://www.facebook.com/primepavedparkingnwa",
    instagram: "https://www.instagram.com/primeparkingnwa",
    linkedin: "https://www.linkedin.com/company/prime-parking-nwa",
  },
  externalLinks: {
    tenantPortal: "https://rent.primeparkingnwa.com/account/login",
    rentNow: "https://rent.primeparkingnwa.com/sites",
    unitSizes: "https://rent.primeparkingnwa.com/sites/prime-parking-nwa",
    googleReview: "https://g.page/r/CSKpIT_emQL1EBM/review",
  },
  footerNav: [
    {
      title: "Parking Options",
      links: parkingOptions,
    },
    {
      title: "Nearby Areas",
      links: [
        { label: "Rogers, AR", href: "/location" },
        { label: "Bentonville, AR", href: "/locations/bentonville-ar" },
        { label: "Springdale, AR", href: "/locations/springdale-ar" },
        { label: "Fayetteville, AR", href: "/locations/fayetteville-ar" },
        { label: "Lowell, AR", href: "/locations/lowell-ar" },
        { label: "Centerton, AR", href: "/locations/centerton-ar" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "FAQs", href: "/faqs" },
        { label: "Tenant Portal", href: "https://rent.primeparkingnwa.com/account/login", external: true },
        { label: "Unit Sizes", href: "https://rent.primeparkingnwa.com/sites/prime-parking-nwa", external: true },
        { label: "Rent Online", href: "https://rent.primeparkingnwa.com/sites", external: true },
        { label: "Leave a Review", href: "https://g.page/r/CSKpIT_emQL1EBM/review", external: true },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Location & Hours", href: "/location" },
      ],
    },
  ],
  seoPages: [
    { slug: "rv-storage-rogers-ar", title: "RV Storage Rogers AR", targetKeyword: "rv storage rogers ar", pageType: "service", status: "planned" },
    { slug: "boat-storage-rogers-ar", title: "Boat Storage Rogers AR", targetKeyword: "boat storage rogers ar", pageType: "service", status: "planned" },
    { slug: "commercial-fleet-parking-nwa", title: "Commercial Fleet Parking NWA", targetKeyword: "commercial fleet parking nwa", pageType: "service", status: "published" },
    { slug: "semi-truck-parking-rogers", title: "Semi Truck Parking Rogers AR", targetKeyword: "semi truck parking rogers", pageType: "service", status: "planned" },
    { slug: "trailer-storage-bentonville", title: "Trailer Storage Bentonville AR", targetKeyword: "trailer storage bentonville", pageType: "service", status: "planned" },
    { slug: "construction-equipment-storage-nwa", title: "Construction Equipment Storage NWA", targetKeyword: "construction equipment storage nwa", pageType: "service", status: "planned" },
    { slug: "secure-vehicle-storage-northwest-arkansas", title: "Secure Vehicle Storage Northwest Arkansas", targetKeyword: "secure vehicle storage northwest arkansas", pageType: "service", status: "planned" },
    { slug: "24-7-gated-storage-rogers", title: "24/7 Gated Storage Rogers AR", targetKeyword: "24/7 gated storage rogers", pageType: "service", status: "planned" },
    { slug: "paved-parking-lot-rogers", title: "Paved Parking Lot Rogers AR", targetKeyword: "paved parking lot rogers", pageType: "service", status: "planned" },
    { slug: "monthly-parking-near-me", title: "Monthly Parking Near Me", targetKeyword: "monthly parking near me", pageType: "service", status: "planned" },
    { slug: "long-term-vehicle-storage-arkansas", title: "Long Term Vehicle Storage Arkansas", targetKeyword: "long term vehicle storage arkansas", pageType: "service", status: "planned" },
    { slug: "parking-near-beaver-lake", title: "Parking Near Beaver Lake", targetKeyword: "parking near beaver lake", pageType: "location", status: "planned" },
    { slug: "rv-parking-near-bentonville", title: "RV Parking Near Bentonville", targetKeyword: "rv parking near bentonville", pageType: "location", status: "planned" },
    { slug: "boat-storage-near-springdale", title: "Boat Storage Near Springdale", targetKeyword: "boat storage near springdale", pageType: "location", status: "planned" },
  ],
};
