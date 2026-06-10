import { PageContent } from "../types";

export const locationPage: PageContent = {
  slug: "location",
  title: "Prime Parking NWA Location | Vehicle Storage Rogers, AR",
  description:
    "Find Prime Parking NWA at 2808 N 26th St., Rogers, AR 72756. Conveniently located near I-49, serving Bentonville, Lowell, Springdale, Fayetteville, Centerton, and surrounding areas.",
  canonical: "/location",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA facility in Rogers, AR",
      },
      backgroundOverlay: 0.45,
      badge: "Easy to Find. Easy to Access.",
      title: "Our Location\nRogers, AR",
      description:
        "Prime Parking NWA is conveniently located at 2808 N 26th St. in Rogers, AR -- just minutes from I-49 and easily accessible from all of Northwest Arkansas.",
      align: "left",
      buttons: [
        {
          label: "Get Directions",
          href: "https://www.google.com/maps/place/Prime+Parking+NWA/@36.3582121,-94.1577949,17z",
          variant: "primary",
          external: true,
        },
        {
          label: "(479) 640-7396",
          href: "tel:4796407396",
          variant: "outline",
        },
      ],
      rightImage: {
        src: "/images/Prime_transparent_logo.webp",
        alt: "Prime Parking NWA logo",
      },
    },
    {
      type: "info-bar",
      items: [
        {
          icon: "map",
          title: "Near I-49",
          description:
            "Just minutes from the interstate for quick access from all directions.",
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
      preTitle: "Serving NWA",
      title: "Convenient for All of Northwest Arkansas",
      body: `Prime Parking NWA is located at **2808 N 26th St., Rogers, AR 72756** -- just about an 8-minute drive from downtown Rogers. Thanks to our proximity to **I-49**, our facility is ideal for customers across Northwest Arkansas.

Whether you are running out of space at home, need a reliable place for your work vehicle, or want secure storage for your RV or boat, our location offers the extra space you need with convenient highway access.`,
    },
  ],
};
