import { ServiceContent } from "../types";

export const constructionEquipmentStorageService: ServiceContent = {
  slug: "construction-equipment-storage",
  title: "Construction Equipment Storage NWA | Secure Heavy Equipment Parking Rogers AR",
  description:
    "Secure construction equipment storage in Rogers, AR and Northwest Arkansas. Fully paved lot, gated access, and 24/7 availability for excavators, loaders, skid steers, and contractor equipment.",
  canonical: "/construction-equipment-storage",
  category: "Parking Options",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/construction-storage.avif",
        alt: "Construction equipment stored at Prime Parking NWA facility",
      },
      backgroundOverlay: 0.3,
      badge: "Safe. Secure. Convenient.",
      title: "Construction Equipment\nStorage in Rogers, AR",
      description:
        "Heavy equipment deserves heavy-duty protection. Prime Parking NWA offers secure, paved storage for excavators, loaders, skid steers, and contractor equipment in Northwest Arkansas.",
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
            "Come and go on your schedule with convenient access to your equipment when you need it.",
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
      title: "Why Store Your Equipment Here?",
      body: "At Prime Parking NWA, we understand that construction equipment is a major investment. Our secure, paved storage lot is designed to protect your machinery from theft, weather damage, and unauthorized access.",
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
      body: `Many neighborhoods across Rogers, Bentonville, Springdale, and Fayetteville restrict construction equipment and large trailers from being stored in driveways or on residential streets. Fines, warnings, and neighbor complaints can quickly derail your project timeline.

Prime Parking NWA offers a secure, off-site alternative that keeps your equipment protected and your property compliant. Our facility is just minutes from major highways and job sites across NWA, making pickup and drop-off convenient no matter where your next project is.`,
    },
  ],
};
