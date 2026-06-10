import { LocationContent } from "../types";

export const fayettevilleArLocation: LocationContent = {
  slug: "fayetteville-ar",
  title: "RV & Boat Storage Near Fayetteville, AR | Prime Parking NWA",
  description:
    "Reliable vehicle storage 28 miles from Fayetteville, AR. Secure, paved, gated facility with 24/7 access and month-to-month rentals for RVs, boats, trailers, and fleets.",
  canonical: "/locations/fayetteville-ar",
  city: "Fayetteville",
  state: "AR",
  zip: "72701",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA facility near Fayetteville, AR",
      },
      backgroundOverlay: 0.45,
      badge: "28 Miles from Fayetteville",
      title: "RV & Boat Storage\nNear Fayetteville, AR",
      description:
        "Prime Parking NWA is a trusted storage option for Fayetteville residents and students. Secure, paved parking for RVs, boats, trailers, and commercial vehicles with 24/7 access.",
      align: "left",
      buttons: [
        {
          label: "Get Directions from Fayetteville",
          href: "https://www.google.com/maps/dir/?api=1&origin=Fayetteville,AR&destination=2808+N+26th+St,Rogers,AR+72756",
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
          title: "28 Miles from Fayetteville",
          description:
            "Straight shot north on I-49. Easy drive for Fayetteville residents and UA families.",
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
      preTitle: "Fayetteville Area",
      title: "Why Fayetteville Residents Choose Prime Parking NWA",
      body: `Fayetteville is a vibrant college town with a growing population of outdoor enthusiasts, RV owners, and boaters heading to Beaver Lake and the Buffalo River. But with tight residential streets, active HOA enforcement, and limited off-campus parking, finding a place to store a large vehicle is a challenge.

Prime Parking NWA in Rogers is the closest secure storage facility north of Fayetteville, just 28 miles via I-49. Whether you are a University of Arkansas family storing an RV for football season, a local contractor with work trucks, or a weekend boater needing off-season storage, our facility is built for your needs.

**Direct I-49 route from Fayetteville to Rogers**
**24/7 access works around any class or work schedule**
**Paved lot protects tires and trailers year-round**`,
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&origin=Fayetteville,AR&destination=2808+N+26th+St,Rogers,AR+72756",
    },
  ],
};
