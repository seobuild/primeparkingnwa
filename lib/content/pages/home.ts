import { PageContent } from "../types";

export const homePage: PageContent = {
  slug: "/",
  title: "Prime Parking NWA | Secure Paved Vehicle Storage in Rogers, AR",
  description:
    "Prime Parking NWA (formerly The Drop Yard NWA) offers fully paved parking for RVs, boats, trailers, and work trucks. Secure, gated facility with 24/7 access in Rogers, AR.",
  canonical: "/",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/general-storage.avif",
        alt: "Prime Parking NWA paved parking facility",
      },
      backgroundVideo: "/Prime%20Parking%20NWA%20Book%20Your%20Space%20Today.mp4",
      backgroundOverlay: 0.45,
      title: "Paved Parking &\nVehicle Storage in NWA",
      description:
        "Prime Parking NWA (formerly The Drop Yard NWA) now offers fully paved parking, giving you a cleaner, safer, and more accessible place to store your vehicles.",
      buttons: [
        {
          label: "View Parking Options",
          href: "https://rent.primeparkingnwa.com/sites/prime-parking-nwa",
          variant: "primary",
          external: true,
        },
        {
          label: "Rent Now",
          href: "https://rent.primeparkingnwa.com/sites",
          variant: "outline",
          external: true,
        },
        {
          label: "(479) 640-7396",
          href: "tel:4796407396",
          variant: "outline",
          external: false,
        },
      ],
      align: "center",
    },
    {
      type: "content",
      preTitle: "Welcome to",
      title: "Prime Parking NWA",
      body: `Prime Parking NWA is a secure outdoor storage facility that provides space for all your storage and parking needs. We have parking spaces to accommodate vehicles of all sizes, including semi-trucks and trailers, trucks with connected campers, construction equipment, construction materials, boats, RVs, storage containers, and more.

**Do you need an extra parking space?**

[Call us](tel:4796407396) or [rent a space online](https://rent.primeparkingnwa.com/sites) today!`,
      align: "center",
      maxWidth: "lg",
      theme: "dark",
      rightImage: {
        src: "/images/Prime_transparent_logo.webp",
        alt: "Prime Parking NWA Logo",
      },
    },
    {
      type: "gallery",
      images: [
        {
          src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/c93f3be6-1367-4032-90d4-8d8d789cc764/IMG_0666.jpg",
          alt: "IMG_0666.jpg",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/b9f9e0ad-61b0-4275-85ee-c7388337386f/IMG_0664.jpg",
          alt: "IMG_0664.jpg",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/17fa1e53-ce8c-46f7-b36c-dca62bd288da/IMG_0665.jpg",
          alt: "IMG_0665.jpg",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/56aeea07-c51f-44bb-9d33-d37b042bbe1e/IMG_0667.jpg",
          alt: "IMG_0667.jpg",
        },
        {
          src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/a9913ffb-907a-4f91-9dd4-ea84cd852819/IMG_0668.jpg",
          alt: "IMG_0668.jpg",
        },
      ],
    },
    {
      type: "feature-grid",
      title: "Work Hard. Store Smart.",
      columns: 5,
      features: [
        {
          image: {
            src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/0600a3cd-6b02-4824-bc3a-53bb0d085f03/parking-lot-sign-automobile-park-symbol-transport-space-vector-urban-area-illustration-eps-parking-lot-sign-automobile-park-symbol-392627044.webp",
            alt: "Empty parking lot with designated parking spaces and a sign indicating that parking is available.",
          },
          title: "PAVED PARKING",
          description:
            "Fully paved parking offers a cleaner, more reliable alternative to gravel or dirt lots, reducing mud and dust and improving drainage and traction. A smooth, paved surface makes parking, towing, and access easier in all weather conditions, helping protect vehicles and equipment.",
        },
        {
          image: {
            src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/9df48488-6263-4f47-827b-43df32849088/istockphoto-843176606-612x612.jpg",
            alt: "Outline icon of a security camera.",
          },
          title: "SECURE FACILITY",
          description:
            "Rest easy knowing your equipment is stored in a fully fenced, gated facility with 24/7 video surveillance and secure keypad access. We take safety seriously, so you can focus on your work or your weekend, worry-free.",
        },
        {
          image: {
            src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/f05d025e-73ea-47c1-a30f-e0fe552cea9a/istockphoto-1056039724-612x612.jpg",
            alt: "Clock with 24h in the center and an arrow indicating 24-hour service or availability.",
          },
          title: "CONVENIENT HOURS",
          description:
            "Access your space anytime, 24 hours a day, 7 days a week. Your schedule should not revolve around ours. Whether it is early morning or late at night, you are free to come and go as you please.",
        },
        {
          image: {
            src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/741ce328-c485-4df9-bc74-5e619a6682fa/istockphoto-1137488207-612x612.jpg",
            alt: "Icon of a person standing in front of a reception desk with a staff member behind it.",
          },
          title: "CUSTOMER SERVICE",
          description:
            "We are all about making your rental experience easy from start to finish. Our friendly team is always ready to help, whether you have got questions, need help choosing the right space, or want support with the rental process. We are here when you need us.",
        },
        {
          image: {
            src: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/cf43c952-0495-4bc2-bcec-00ba682f13e7/pngtree-online-payment-icon-designed-creatively-and-simple-for-freshness-for-application-png-image_3754332.jpg",
            alt: "A line drawing of a smartphone with a dollar sign on the screen and a hand pointing to a 'Pay Now' button.",
          },
          title: "Pay Online",
          description:
            "Paying for your space at Prime Parking NWA is simple and secure with our online payment system. Just log in to your account from your phone or computer to make a quick payment or set up auto-pay so you never miss a due date. No checks, no trips, just easy online payments, anytime, anywhere.",
        },
      ],
    },
    {
      type: "testimonials",
      title: "Hear From Our Tenants",
      testimonials: [
        {
          quote:
            "Nice secure place! Manager Denise is very helpful!",
          author: "Annette S.",
        },
        {
          quote:
            "Been parking here since Jan 2023. Nice secure lot close to home. Reasonable rates ... nice place to park your equipment securely.",
          author: "Christopher L.",
        },
        {
          quote:
            "Prime Parking just keeps getting better. The new paved parking is such a game changer! It's so nice not having to worry about gravel, mud, or uneven ground anymore. The lot looks amazing, feels safer, and makes parking and pulling in and out effortless. You can tell they really care about improving the customer experience.",
          author: "Quinn C.",
        },
        {
          quote:
            "Great, convenient, and secure!",
          author: "Hayden W.",
        },
        {
          quote:
            "Prime Parking is amazing, the security is top of the line. Denise is wonderful. She goes beyond the call to take care of your parking needs. We have no concerns for the well being of our boat. Thank you Denise for all your hard work.",
          author: "Melissa H.",
        },
        {
          quote:
            "Great spot, 24/7 electronic gated access. Plenty of room for tractor trailer, etc. Friendly and helpful staff.",
          author: "Jim P.",
        },
      ],
      cta: {
        label: "Leave a Review",
        href: "https://g.page/r/CSKpIT_emQL1EBM/review",
        variant: "outline",
        external: true,
      },
    },
  ],
};
