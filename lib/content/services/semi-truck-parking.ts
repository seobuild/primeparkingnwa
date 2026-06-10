import { ServiceContent } from "../types";

export const semiTruckParkingService: ServiceContent = {
  slug: "semi-truck-parking",
  title: "Semi Truck Parking Rogers AR | Secure Truck Storage NWA",
  description:
    "Secure semi truck parking in Rogers, AR and Northwest Arkansas. Fully paved lot, gated access, and 24/7 availability for semi trucks, tractor trailers, and commercial trucking fleets.",
  canonical: "/semi-truck-parking",
  category: "Parking Options",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/semitruck-parking.webp",
        alt: "Semi trucks and commercial vehicles parked at Prime Parking NWA facility",
      },
      backgroundOverlay: 0.3,
      badge: "Safe. Secure. Convenient.",
      title: "Semi Truck Parking\nRogers, AR",
      description:
        "Secure, paved semi truck parking in Northwest Arkansas. Whether you are an owner-operator or manage a fleet, Prime Parking NWA gives you the space, security, and access you need.",
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
            "Come and go on your schedule with convenient access to your truck when you need it.",
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
      title: "Why Park Your Semi Truck Here?",
      body: "At Prime Parking NWA, we understand that your semi truck is your livelihood. Our secure, paved lot is designed to protect your rig from theft, weather damage, and unauthorized access.",
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
      body: `Many neighborhoods across Rogers, Bentonville, Springdale, and Fayetteville restrict semi trucks and large commercial vehicles from being parked in driveways or on the street. Fines, warnings, and neighbor complaints can quickly become a headache.

Prime Parking NWA offers a professional, off-site alternative designed specifically for commercial trucks and owner-operators. Our facility is just minutes from major highways, making pickup and drop-off convenient no matter where you live in NWA.`,
    },
  ],
};
