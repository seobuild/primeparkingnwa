import { PageContent } from "../types";

export const legacyPage: PageContent = {
  slug: "the-drop-yard",
  title: "The Drop Yard Rogers AR is Now Prime Parking NWA",
  description:
    "The Drop Yard NWA in Rogers, AR has rebranded to Prime Parking NWA. Same secure paved facility, same address, same team — new name. Book your vehicle storage space today.",
  canonical: "/the-drop-yard",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/general-storage.avif",
        alt: "Prime Parking NWA paved vehicle storage facility in Rogers, AR",
      },
      backgroundOverlay: 0.5,
      badge: "Same Facility. New Name.",
      title: "The Drop Yard\nis Now Prime Parking NWA",
      description:
        "If you are looking for The Drop Yard NWA or Drop Yard Rogers AR, you are in the right place. We have rebranded to Prime Parking NWA with the same secure, paved storage facility at 2808 N 26th St. in Rogers.",
      align: "center",
      buttons: [
        {
          label: "View Parking Options",
          href: "https://rent.primeparkingnwa.com/sites/prime-parking-nwa",
          variant: "primary",
          external: true,
        },
        {
          label: "Call (479) 640-7396",
          href: "tel:4796407396",
          variant: "outline",
        },
      ],
    },
    {
      type: "content",
      preTitle: "What Changed?",
      title: "New Name. Same Great Storage.",
      body: `**The Drop Yard NWA** has officially become **Prime Parking NWA**.

We are the same locally owned and operated vehicle storage facility at **2808 N 26th St., Rogers, AR 72756** — with the same secure, fully paved lot, the same 24/7 gated access, and the same commitment to keeping your vehicles safe.

### Why the Name Change?

We rebranded to better reflect what we offer: **prime parking and storage** for RVs, boats, semi-trucks, trailers, commercial fleets, and construction equipment right here in Rogers, AR and the Northwest Arkansas region.

### What Has Not Changed

- **Same address:** 2808 N 26th St., Rogers, AR 72756
- **Same phone:** (479) 640-7396
- **Same paved, gated facility with 24/7 access**
- **Same month-to-month rentals with no long-term contracts**
- **Same online tenant portal** for payments and account management

If you had a space at The Drop Yard, your account, gate code, and rental agreement are still active under Prime Parking NWA. Log in at the tenant portal or call us with any questions.

### Looking For Drop Yard Rogers AR?

You found us. Whether you searched for **Drop Yard Rogers AR**, **The Drop Yard NWA**, **Prime Drop Yard**, or **Drop Yard near me**, this is the same facility you know and trust — now operating as Prime Parking NWA.

**Ready to store your vehicle?** [Rent a space online](https://rent.primeparkingnwa.com/sites/prime-parking-nwa) or give us a call.
`,
      align: "left",
      maxWidth: "lg",
      theme: "dark",
    },
    {
      type: "feature-grid",
      title: "Storage Options at Prime Parking NWA",
      columns: 3,
      features: [
        {
          icon: "truck",
          title: "Semi Truck Parking",
          description:
            "Secure paved parking for semi-trucks, box trucks, and commercial vehicles with 24/7 gated access.",
        },
        {
          icon: "ship",
          title: "Boat Storage",
          description:
            "Safe boat and jet ski storage just minutes from Beaver Lake. Paved lot, easy trailer maneuvering.",
        },
        {
          icon: "caravan",
          title: "RV & Camper Storage",
          description:
            "Spacious paved spots for RVs, motorhomes, and campers of all sizes with round-the-clock access.",
        },
        {
          icon: "trailer",
          title: "Trailer Storage",
          description:
            "Flat, paved storage for utility trailers, enclosed trailers, and flatbeds.",
        },
        {
          icon: "building",
          title: "Commercial Fleet Parking",
          description:
            "Fleet parking solutions for businesses with multiple work trucks and service vehicles.",
        },
        {
          icon: "hard-hat",
          title: "Construction Equipment Storage",
          description:
            "Secure storage for bulldozers, excavators, skid steers, and work vehicles.",
        },
      ],
    },
    {
      type: "cta",
      title: "Reserve Your Storage Space Today",
      description:
        "Same facility. Same team. Better name. Book your paved parking spot at Prime Parking NWA in Rogers, AR.",
      buttons: [
        {
          label: "Rent Online",
          href: "https://rent.primeparkingnwa.com/sites/prime-parking-nwa",
          variant: "primary",
          external: true,
        },
        {
          label: "Call (479) 640-7396",
          href: "tel:4796407396",
          variant: "outline",
        },
      ],
    },
  ],
};
