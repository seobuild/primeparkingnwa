import { ServiceContent } from "../types";

export const rvStorageService: ServiceContent = {
  slug: "rv-storage",
  title: "RV Storage Rogers AR | Secure Paved RV Parking NWA",
  description:
    "Secure, HOA-friendly RV storage in Rogers, AR and Northwest Arkansas. Fully paved lot, gated access, 24/7 video surveillance, and weekend availability. Month-to-month RV parking near Bentonville, Springdale, and Fayetteville.",
  canonical: "/rv-storage",
  category: "Parking Options",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/rv-parking.avif",
        alt: "RVs and motorhomes parked at Prime Parking NWA facility",
      },
      backgroundOverlay: 0.3,
      badge: "Safe. Secure. Convenient.",
      title: "RV Storage in\nRogers, AR",
      description:
        "Safe, secure, and fully paved RV storage in Northwest Arkansas. Whether you have a motorhome, travel trailer, or fifth wheel, Prime Parking NWA gives you the space, security, and access you need.",
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
            "Come and go on your schedule with convenient access to your RV when you need it.",
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
      title: "Why Store Your RV Here?",
      body: "At Prime Parking NWA, we take pride in providing top-notch RV storage with the security, convenience, and care you deserve.",
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
      type: "content",
      preTitle: "HOA Friendly",
      title: "Keep Your Driveway Clear & Your HOA Happy",
      body: `Many neighborhoods across Rogers, Bentonville, Springdale, and Fayetteville restrict RV parking on residential streets and driveways. Fines, warnings, and neighbor complaints can quickly turn your RV dream into a headache.

Prime Parking NWA offers a simple, off-site alternative that keeps you compliant without sacrificing access to your vehicle. Our facility is just minutes from major highways, making pickup and drop-off convenient no matter where you live in NWA.

**Popular for homeowners in:**
- Rogers, AR
- Bentonville, AR
- Springdale, AR
- Fayetteville, AR
- Lowell, AR
- Centerton, AR

[Call us](tel:4796407396) or [rent a space online](https://rent.primeparkingnwa.com/sites) today.`,
      align: "left",
      maxWidth: "lg",
    },
  ],
};
