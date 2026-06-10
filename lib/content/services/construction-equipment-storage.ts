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
      type: "content",
      preTitle: "Job Site Ready",
      title: "Equipment Storage That Keeps You Moving",
      body: `Heavy machinery is expensive — and leaving it on a job site overnight or in a residential driveway is a risk you do not need to take. Prime Parking NWA offers contractors and builders a secure, paved yard designed for the equipment that builds Northwest Arkansas.

**Built for heavy equipment:**
- Fully paved lot — no mud, no soft ground, no ruts
- Wide lanes for excavators, loaders, and skid steers
- Room for equipment trailers, scissor lifts, and generators
- Easy in-and-out access for trucks with trailers

**Protect your investment:**
- Gated facility with controlled access
- 24/7 monitoring and security
- Reduce theft risk compared to overnight job site storage
- Extend equipment life by avoiding weather exposure

**For contractors in NWA:**
- Store equipment between jobs or during off-season
- Central location near Rogers, Bentonville, and Springdale
- Pick up gear on your way to the next project
- Month-to-month terms with no long-term commitment

[Call us](tel:4796407396) or [rent equipment storage online](https://rent.primeparkingnwa.com/sites) today.`,
      align: "left",
      maxWidth: "lg",
    },
  ],
};
