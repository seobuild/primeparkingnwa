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
      type: "content",
      preTitle: "Built for Truckers",
      title: "A Secure Home Base for Your Rig",
      body: `Your semi truck is your livelihood — and it deserves a safe place to rest between hauls. Prime Parking NWA offers owner-operators and fleet managers a secure, paved lot designed for the trucks that keep Northwest Arkansas moving.

**Why truckers trust us:**
- Fully paved surface protects tires and suspension
- Wide spaces for semis, day cabs, and sleeper cabs
- Easy access to I-49 for quick dispatch
- Room for tractor-trailers, flatbeds, and box trucks

**Rest easy between hauls:**
- Gated facility with controlled access
- 24/7 monitoring and security
- Park your rig knowing it is protected
- Cargo and cab stay secure while you are off the road

**For owner-operators & fleets:**
- Overnight parking between long hauls
- Weekend storage when you are home
- Long-term parking for dedicated routes
- Month-to-month terms — no long contracts

[Contact us](mailto:primeparkingnwa@gmail.com) or [rent a semi truck parking space online](https://rent.primeparkingnwa.com/sites) today.`,
      align: "left",
      maxWidth: "lg",
    },
  ],
};
