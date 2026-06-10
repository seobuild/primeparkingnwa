import { ServiceContent } from "../types";

export const commercialFleetParkingService: ServiceContent = {
  slug: "commercial-fleet-parking",
  title: "Commercial & Fleet Parking",
  description:
    "Professional commercial and fleet parking in Rogers, AR. Secure parking for service vans, work trucks, event vehicles, and food trucks. Fully paved, gated, and available 24/7.",
  canonical: "/commercial-fleet-parking",
  category: "Parking Options",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/general-storage.avif",
        alt: "Commercial vehicles parked at Prime Parking NWA facility",
      },
      backgroundOverlay: 0.3,
      badge: "Safe. Secure. Convenient.",
      title: "Commercial Parking\nRogers, AR",
      description:
        "Professional, secure parking for service vans, work trucks, event vehicles, and food trucks in Northwest Arkansas.",
      align: "left",
      buttons: [
        {
          label: "View Parking Options",
          href: "https://rent.primeparkingnwa.com/sites/prime-parking-nwa",
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
          icon: "shield",
          title: "Secure & Monitored",
          description:
            "Our facility is monitored 24/7 with security cameras and controlled access.",
        },
        {
          icon: "building",
          title: "Fully Paved Lot",
          description:
            "No mud, no grass—just a clean, fully paved lot built for easy access and peace of mind.",
        },
        {
          icon: "calendar",
          title: "Flexible Access",
          description:
            "Come and go on your schedule with convenient access to your vehicles when you need them.",
        },
        {
          icon: "thumbs-up",
          title: "Great Location",
          description:
            "Located in Rogers, AR with easy access to I-49 and all of Northwest Arkansas.",
        },
      ],
    },
    {
      type: "image-text",
      imagePosition: "left",
      image: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA paved facility",
      },
      preTitle: "Why Choose Us",
      title: "Why Store Your Fleet Here?",
      body: "At Prime Parking NWA, we provide secure, paved parking designed for businesses that rely on their vehicles. From service vans to food trucks, we keep your fleet protected and ready to work.",
      checklist: [
        "Wide, easy-to-navigate spaces",
        "Well-lit facility",
        "Online tenant portal & payments",
        "Friendly, responsive support",
      ],
      cta: {
        label: "Learn More About Our Facility",
        href: "/location",
      },
    },
    {
      type: "split-content",
      preTitle: "HOA Friendly",
      title: "Keep Your Driveway Clear & Your HOA Happy",
      body: `Many neighborhoods and business districts across Rogers, Bentonville, Springdale, and Fayetteville restrict commercial vehicles from overnight parking. Limited lot space, zoning rules, and HOA restrictions can make fleet parking a challenge.

Prime Parking NWA offers a professional, off-site solution designed specifically for commercial vehicles. Our fully paved lot, gated access, and 24/7 availability give your fleet a secure home base without the headaches.`,
    },
  ],
};
