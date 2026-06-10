import { LocationContent } from "../types";

export const centertonArLocation: LocationContent = {
  slug: "centerton-ar",
  title: "Vehicle Storage Near Centerton, AR | Prime Parking NWA",
  description:
    "Secure parking and storage just 13 miles from Centerton, AR. Gated, paved facility with 24/7 access and month-to-month rentals for RVs, boats, trailers, and fleets.",
  canonical: "/locations/centerton-ar",
  city: "Centerton",
  state: "AR",
  zip: "72719",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA facility near Centerton, AR",
      },
      backgroundOverlay: 0.45,
      badge: "Only 13 Miles Away",
      title: "Vehicle Storage\nNear Centerton, AR",
      description:
        "Prime Parking NWA is a short drive from Centerton via I-49. Secure, fully paved storage for RVs, boats, trailers, and commercial vehicles with 24/7 gated access.",
      align: "left",
      buttons: [
        {
          label: "Get Directions from Centerton",
          href: "https://www.google.com/maps/dir/?api=1&origin=Centerton,AR&destination=2808+N+26th+St,Rogers,AR+72756",
          variant: "primary",
          external: true,
        },
        {
          label: "(479) 640-7396",
          href: "tel:4796407396",
          variant: "outline",
        },
      ],
    },
    {
      type: "info-bar",
      items: [
        {
          icon: "map",
          title: "13 Miles from Centerton",
          description:
            "Easy drive south via I-49. Convenient for Centerton residents and businesses.",
        },
        {
          icon: "clock",
          title: "24/7 Access",
          description:
            "Come and go on your schedule any time of day or night.",
        },
        {
          icon: "shield",
          title: "Secure Facility",
          description:
            "Gated entry with keypad access and security monitoring.",
        },
        {
          icon: "thumbs-up",
          title: "Paved Lot",
          description:
            "Fully paved surfaces for easy parking in all weather conditions.",
        },
      ],
    },
    {
      type: "split-content",
      preTitle: "Centerton Area",
      title: "Why Centerton Residents Choose Prime Parking NWA",
      body: `Centerton is one of Northwest Arkansas's fastest-growing communities, and with new subdivisions come strict HOA rules about vehicle storage. Many Centerton neighborhoods prohibit overnight parking of RVs, boats, and trailers on driveways or streets — and enforcement is getting tighter every year.

Prime Parking NWA in Rogers is just 13 miles from Centerton via I-49, making it one of the most convenient off-site storage options in the area. Our fully paved lot is designed for large vehicles, with wide lanes, gated access, and 24/7 security monitoring. Whether you need to store a family RV, a work truck, or a boat between trips to Beaver Lake, we have the space.

**13 miles from Centerton via I-49**
**Month-to-month rentals — no long-term contracts**
**Gated access with 24/7 availability**`,
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Centerton,AR&destination=2808+N+26th+St,Rogers,AR+72756",
    },
  ],
};
