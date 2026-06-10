import { LocationContent } from "../types";

export const bentonvilleArLocation: LocationContent = {
  slug: "bentonville-ar",
  title: "Vehicle Storage Near Bentonville, AR | Prime Parking NWA",
  description:
    "Secure, paved vehicle storage just 10 miles from Bentonville, AR. RV, boat, trailer, and commercial fleet parking with 24/7 gated access at Prime Parking NWA in Rogers.",
  canonical: "/locations/bentonville-ar",
  city: "Bentonville",
  state: "AR",
  zip: "72712",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA facility near Bentonville, AR",
      },
      backgroundOverlay: 0.45,
      badge: "Only 10 Miles Away",
      title: "Secure Vehicle Storage\nNear Bentonville, AR",
      description:
        "Prime Parking NWA is just a short drive from Bentonville via I-49. Secure, fully paved storage for RVs, boats, trailers, and commercial fleets with 24/7 gated access.",
      align: "left",
      buttons: [
        {
          label: "Get Directions from Bentonville",
          href: "https://www.google.com/maps/dir/?api=1&origin=Bentonville,AR&destination=2808+N+26th+St,Rogers,AR+72756",
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
          title: "10 Miles from Bentonville",
          description:
            "Quick 15-minute drive via I-49. Easy access for Bentonville residents and businesses.",
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
      preTitle: "Bentonville Area",
      title: "Why Bentonville Residents Choose Prime Parking NWA",
      body: `Bentonville is one of the fastest-growing cities in Northwest Arkansas, and with that growth comes tighter HOA restrictions and less driveway space. Many newer neighborhoods in and around Bentonville have strict covenants against parking RVs, boats, and trailers on residential streets or driveways.

Prime Parking NWA offers Bentonville residents a simple solution. Our facility is just 10 miles away in Rogers — close enough for quick pickups and drop-offs, but far enough to keep you compliant with any neighborhood rules. Whether you are heading to Beaver Lake for the weekend or storing a work truck between jobs, our paved, gated lot gives you the space and security you need.

**Quick access from Bentonville via I-49**
**Month-to-month rentals with no long-term commitment**
**Store RVs, boats, trailers, semi trucks, and commercial fleets**`,
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Bentonville,AR&destination=2808+N+26th+St,Rogers,AR+72756",
    },
  ],
};
