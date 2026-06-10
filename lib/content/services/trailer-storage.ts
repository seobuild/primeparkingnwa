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
      type: "content",
      preTitle: "Protect Your Investment",
      title: "Trailer Storage Built for Work & Play",
      body: `Your trailer hauls everything from work equipment to weekend toys — and leaving it parked on grass or gravel only leads to rusted jacks, flat spots, and uneven wear. Prime Parking NWA offers a better way to store the trailer that keeps your life moving.

**Why our lot works for trailers:**
- Fully paved surface protects tires, bearings, and jacks
- Wide spaces for easy hook-up and unhooking
- Room for utility trailers, enclosed cargo trailers, and equipment haulers
- Easy in-and-out maneuvering for trucks with hitches

**For contractors & DIYers:**
- Access your tools and equipment on your schedule
- Keep your home driveway clear
- Reduce wear from repeated on-street parking
- Secure your trailer when it is not on the job

**For recreation:**
- Store your RV, ATV, or boat trailer between adventures
- Avoid the hassle of squeezing into residential driveways
- Keep your trailer clean and road-ready all season

[Call us](tel:4796407396) or [rent a trailer storage space online](https://rent.primeparkingnwa.com/sites) today.`,
      align: "left",
      maxWidth: "lg",
    },
  ],
};
