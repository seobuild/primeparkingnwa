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
      type: "content",
      preTitle: "Built for Business",
      title: "Fleet Parking That Protects Your Assets",
      body: `Your vehicles are the backbone of your business — and where you park them matters. Prime Parking NWA gives commercial operators a secure, professional home base for vans, trucks, and mobile equipment that reduces liability and keeps your fleet ready to roll.

**Why businesses choose us:**
- Reduce insurance risk with off-street, monitored parking
- Professional address for clients and deliveries
- 24/7 access so early crews and late shifts are covered
- Paved lot eliminates the mud and ruts that damage vehicles

**Who we serve:**
- Service vans (plumbing, electrical, HVAC, mobile repair)
- Contractor trucks and box trucks with ladder racks
- Food trucks and mobile kitchens
- Event and promotional vehicles
- Delivery fleets and transport rigs

**Month-to-month flexibility:**
- No long-term contracts
- Scale up or down as your fleet changes
- Online payments and account management
- Friendly support when you need it

[Contact us](mailto:primeparkingnwa@gmail.com) or [rent a commercial parking space online](https://rent.primeparkingnwa.com/sites) today.`,
      align: "left",
      maxWidth: "lg",
    },
  ],
};
