import { LocationContent } from "../types";

export const springdaleArLocation: LocationContent = {
  slug: "springdale-ar",
  title: "Vehicle Storage Near Springdale, AR | Prime Parking NWA",
  description:
    "Convenient, secure vehicle storage just 12 miles from Springdale, AR. Fully paved, gated facility with 24/7 access for RVs, boats, trailers, and commercial vehicles.",
  canonical: "/locations/springdale-ar",
  city: "Springdale",
  state: "AR",
  zip: "72764",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA facility near Springdale, AR",
      },
      backgroundOverlay: 0.45,
      badge: "Only 12 Miles Away",
      title: "Vehicle Storage\nNear Springdale, AR",
      description:
        "Prime Parking NWA is an easy drive from Springdale. Secure, paved storage for RVs, boats, trailers, and commercial fleets with round-the-clock gated access.",
      align: "left",
      buttons: [
        {
          label: "Get Directions from Springdale",
          href: "https://www.google.com/maps/dir/?api=1&origin=Springdale,AR&destination=2808+N+26th+St,Rogers,AR+72756",
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
          title: "12 Miles from Springdale",
          description:
            "Quick drive via I-49 and local roads. Convenient access for Springdale residents.",
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
      preTitle: "Springdale Area",
      title: "Why Springdale Residents Choose Prime Parking NWA",
      body: `Springdale homeowners and contractors know the struggle of finding reliable vehicle storage. Between HOA restrictions, limited driveway space, and the need to keep work vehicles secure, parking at home is not always an option.

Prime Parking NWA sits just 12 miles from Springdale in Rogers, making it one of the most convenient off-site storage options in the region. Our fully paved lot is designed for large vehicles — RVs, boats, trailers, semi trucks, and construction equipment all fit comfortably. With 24/7 keypad gate access, you can pick up or drop off on your schedule, whether that is 6 AM on a Monday or 10 PM on a Sunday.

**Direct route from Springdale via I-49**
**No long-term contracts — month-to-month only**
**Room for oversized vehicles and trailers**`,
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Springdale,AR&destination=2808+N+26th+St,Rogers,AR+72756",
    },
  ],
};
