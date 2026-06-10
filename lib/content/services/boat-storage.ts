import { ServiceContent } from "../types";

export const boatStorageService: ServiceContent = {
  slug: "boat-storage",
  title: "Boat Storage Northwest Arkansas | Secure Boat Parking NWA",
  description:
    "Secure boat storage in Northwest Arkansas near Beaver Lake. Fully paved, gated facility with 24/7 access in Rogers, AR. Store your boat, jet ski, or watercraft with confidence.",
  canonical: "/boat-storage",
  category: "Parking Options",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/boat-storage.webp",
        alt: "Boats and trailers stored at Prime Parking NWA facility",
      },
      backgroundOverlay: 0.3,
      badge: "Safe. Secure. Convenient.",
      title: "Boat Storage in\nNorthwest Arkansas",
      description:
        "Keep your boat, jet ski, or watercraft safe and ready for the next trip to Beaver Lake. Prime Parking NWA offers secure, paved boat storage just minutes from the water.",
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
            "Come and go on your schedule with convenient access to your boat when you need it.",
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
      preTitle: "Close to the Water",
      title: "Boat Storage Near Beaver Lake",
      body: "Northwest Arkansas is home to some of the best boating in the region, and Beaver Lake is the crown jewel. When the season ends or between weekend trips, you need a safe place to store your boat.",
      checklist: [
        "Proximity to Beaver Lake boat ramps",
        "Fully paved lot for trailers and hulls",
        "Secure, gated access with monitoring",
        "Room for pontoon boats and fishing rigs",
      ],
      cta: {
        label: "Reserve Your Boat Storage",
        href: "https://rent.primeparkingnwa.com/sites/prime-parking-nwa",
        external: true,
      },
    },
    {
      type: "split-content",
      preTitle: "HOA Friendly",
      title: "Keep Your Driveway Clear & Your HOA Happy",
      body: `Many neighborhoods across Rogers, Bentonville, Springdale, and Fayetteville restrict boats and trailers from being parked in driveways or on the street. Fines, warnings, and neighbor complaints can quickly become a headache.

Prime Parking NWA offers a simple, off-site alternative that keeps you compliant without sacrificing access to your boat. Our facility is just minutes from major highways and Beaver Lake, making pickup and drop-off convenient no matter where you live in NWA.`,
    },
  ],
};
