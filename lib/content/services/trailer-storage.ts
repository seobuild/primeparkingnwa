import { ServiceContent } from "../types";

export const trailerStorageService: ServiceContent = {
  slug: "trailer-storage",
  title: "Trailer Storage Rogers AR | Secure Trailer Parking NWA",
  description:
    "Secure trailer storage in Rogers, AR and Northwest Arkansas. Fully paved lot, gated access, and 24/7 availability. Store utility trailers, enclosed trailers, equipment trailers, and more.",
  canonical: "/trailer-storage",
  category: "Parking Options",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/trailer-storage.avif",
        alt: "Trailers stored at Prime Parking NWA facility",
      },
      backgroundOverlay: 0.3,
      badge: "Safe. Secure. Convenient.",
      title: "Trailer Storage\nin Rogers, AR",
      description:
        "Keep your utility trailer, enclosed trailer, or equipment trailer safe and accessible. Prime Parking NWA offers secure, paved trailer storage in Northwest Arkansas.",
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
            "Come and go on your schedule with convenient access to your trailer when you need it.",
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
      title: "Why Store Your Trailer Here?",
      body: "At Prime Parking NWA, we take pride in providing top-notch trailer storage with the security, convenience, and care you deserve. Our fully paved lot keeps your trailer protected from mud, uneven ground, and weather damage.",
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
      preTitle: "HOA-Friendly",
      title: "Keep Your Driveway Clear & Your HOA Happy",
      body: `Many neighborhoods across Rogers, Bentonville, Springdale, and Fayetteville restrict trailer parking on residential streets and driveways. Fines, warnings, and neighbor complaints can quickly become a headache.

Prime Parking NWA offers a simple, off-site alternative that keeps you compliant without sacrificing access to your trailer. Our facility is just minutes from major highways, making pickup and drop-off convenient no matter where you live in NWA.`,
    },
  ],
};
