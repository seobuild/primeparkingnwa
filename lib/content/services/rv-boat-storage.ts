import { ServiceContent } from "../types";

export const rvBoatStorageService: ServiceContent = {
  slug: "rv-boat-storage",
  title: "RV & Boat Storage",
  description:
    "Secure, HOA-friendly RV and boat storage in Northwest Arkansas. Weekend access, fully paved facility, and gated entry. Store your RV, boat, trailer, or extra vehicle at Prime Parking NWA.",
  canonical: "/rv-boat-storage",
  category: "Parking Options",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/rv-parking.avif",
        alt: "RV campers and motorhomes parked at Prime Parking NWA facility",
      },
      backgroundOverlay: 0.3,
      title: "RV & Boat Storage with Weekend Access",
      description:
        "Secure, HOA-friendly storage in Northwest Arkansas for RVs, boats, trailers, and extra vehicles, with access when you actually need it.",
      align: "left",
    },
    {
      type: "content",
      title: "WEEKEND ACCESS",
      body: `Your RV or boat should not be locked away when adventure calls. Our facility is designed to support weekend use so you can come and go with confidence.

- Weekend access available
- Easy entry for large vehicles
- Secure return after your trip

Many HOAs in Northwest Arkansas restrict RVs, boats, trailers, and extra vehicles from being parked in driveways or on the street. Prime Parking NWA offers a simple off-site solution that keeps you compliant without giving up your weekend plans.

- Ideal for HOA-restricted neighborhoods
- RVs, boats, trailers & extra vehicles
- Month-to-month storage
- Easy gate access when you need it`,
      align: "left",
      maxWidth: "lg",
    },
    {
      type: "content",
      preTitle: "HOA Friendly",
      title: "Keep Your Driveway Clear & Your HOA Happy",
      body: `Many neighborhoods across Rogers, Bentonville, Springdale, and Fayetteville restrict RVs, boats, and extra vehicles from being parked in driveways or on the street. Fines, warnings, and neighbor complaints can quickly become a headache.

Prime Parking NWA offers a simple, off-site alternative that keeps you compliant without sacrificing access to your vehicle. Our facility is just minutes from major highways, making pickup and drop-off convenient no matter where you live in NWA.

**Popular for homeowners in:**
- Rogers, AR
- Bentonville, AR
- Springdale, AR
- Fayetteville, AR
- Lowell, AR
- Centerton, AR

[Contact us](mailto:primeparkingnwa@gmail.com) or [rent a space online](https://rent.primeparkingnwa.com/sites) today.`,
      align: "left",
      maxWidth: "lg",
    },
  ],
};
