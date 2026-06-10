import { LocationContent } from "../types";

export const lowellArLocation: LocationContent = {
  slug: "lowell-ar",
  title: "Parking & Storage Near Lowell, AR | Prime Parking NWA",
  description:
    "Secure vehicle storage just 6 miles from Lowell, AR. Fully paved, gated facility with 24/7 access for RVs, boats, trailers, and commercial fleets in Rogers.",
  canonical: "/locations/lowell-ar",
  city: "Lowell",
  state: "AR",
  zip: "72745",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA facility near Lowell, AR",
      },
      backgroundOverlay: 0.45,
      badge: "Only 6 Miles Away",
      title: "Parking & Storage\nNear Lowell, AR",
      description:
        "Prime Parking NWA is practically next door to Lowell. Just 6 miles away in Rogers, with secure, paved, 24/7 storage for all types of vehicles and equipment.",
      align: "left",
      buttons: [
        {
          label: "Get Directions from Lowell",
          href: "https://www.google.com/maps/dir/?api=1&origin=Lowell,AR&destination=2808+N+26th+St,Rogers,AR+72756",
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
          title: "6 Miles from Lowell",
          description:
            "Less than 10 minutes away. The closest secure storage option for Lowell residents.",
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
      preTitle: "Lowell Area",
      title: "Why Lowell Residents Choose Prime Parking NWA",
      body: `Lowell sits right between Rogers and Springdale, making it one of the most convenient places to live in Northwest Arkansas. But that convenience does not always extend to vehicle storage. Many Lowell neighborhoods have limited driveway space, and HOA rules can make parking RVs, boats, or work trailers a headache.

Prime Parking NWA is only 6 miles from Lowell — close enough for same-day pickups and drop-offs, but off-site enough to keep your driveway clear and your HOA happy. Our facility at 2808 N 26th St in Rogers is fully paved, gated, and monitored 24/7, making it the most practical storage choice for Lowell residents who need extra space.

**Only 6 miles from Lowell — less than 10 minutes**
**Quick access from US-71 and I-49**
**Store anything from RVs to construction equipment**`,
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Lowell,AR&destination=2808+N+26th+St,Rogers,AR+72756",
    },
  ],
};
