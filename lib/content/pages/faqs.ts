import { PageContent } from "../types";

export const faqsPage: PageContent = {
  slug: "faqs",
  title: "FAQs | Prime Parking NWA Vehicle Storage Questions",
  description:
    "Get answers to frequently asked questions about Prime Parking NWA. Vehicle storage options, security, hours, renting a space, RV Park 'n' Protect, and more.",
  canonical: "/faqs",
  sections: [
    {
      type: "hero",
      backgroundImage: {
        src: "/images/aerial-view.png",
        alt: "Aerial view of Prime Parking NWA paved facility",
      },
      backgroundOverlay: 0.45,
      badge: "Got Questions? We Have Answers.",
      title: "Frequently Asked\nQuestions",
      description:
        "Everything you need to know about storing your vehicle at Prime Parking NWA. From security and access to pricing and protection plans.",
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
            "Gated facility with security monitoring and controlled access.",
        },
        {
          icon: "calendar",
          title: "24/7 Access",
          description:
            "Pick up or drop off your vehicle any time, day or night.",
        },
        {
          icon: "building",
          title: "Fully Paved Lot",
          description:
            "Clean, paved surfaces for easy parking in all weather conditions.",
        },
        {
          icon: "thumbs-up",
          title: "Flexible Terms",
          description:
            "Month-to-month rentals with no long-term contracts required.",
        },
      ],
    },
    {
      type: "faqs",
      title: "General Questions",
      items: [
        {
          question: "What types of vehicles can I store at Prime Parking NWA?",
          answer:
            "We have space for just about anything on wheels, including semi-trucks, trailers, RVs, boats, campers, construction equipment, and more.",
        },
        {
          question: "What are your hours of operation?",
          answer:
            "Our yard offers **24/7 gated access**, so you can get to your vehicle whenever you need it. For questions or assistance, our staff is available **7 days a week from 9:00 AM to 5:00 PM**.",
        },
        {
          question: "How do I rent a space?",
          answer:
            "Renting a space is simple! We have recently moved our booking system over to **Storeganise**, which makes the process quick and convenient. [Need a step-by-step guide? Click Here.](/tenant-login-instructions)",
        },
        {
          question: "Where are you located?",
          answer:
            "Prime Parking NWA is located at [2808 N 26th St](https://www.google.com/maps/dir//2808+N+26th+St,+Rogers,+AR+72756), [Rogers, AR 72756](https://www.google.com/maps/dir//2808+N+26th+St,+Rogers,+AR+72756). We are easily accessible and conveniently located near major highways, making drop-off and pick-up simple.",
        },
      ],
    },
    {
      type: "faqs",
      title: "Security & Safety",
      items: [
        {
          question: "Is the lot secure?",
          answer:
            "Yes. Our facility is fully fenced, well-lit, and monitored with security measures in place to give you peace of mind.",
        },
        {
          question: "Can I access my vehicle anytime?",
          answer: "Yes, tenants enjoy 24/7 access so you can get to your vehicle when you need it.",
        },
        {
          question: "Is insurance required for my vehicle?",
          answer:
            "No, insurance is not required to store your vehicle at Prime Parking. However, we do offer an optional protection program called **RV Park 'n' Protect** that helps reimburse your vehicle insurance deductible if a covered loss occurs while your vehicle is in storage.",
        },
      ],
    },
    {
      type: "faqs",
      title: "RV Park 'n' Protect",
      items: [
        {
          question: "What is RV Park 'n' Protect?",
          answer:
            "RV Park 'n' Protect is a protection program designed specifically for RVs, boats, and vehicles stored at facilities like Prime Parking. It helps reimburse your vehicle insurance deductible if a covered loss occurs while your vehicle is in storage.",
        },
        {
          question: "What does the protection cover?",
          answer:
            "The program reimburses your vehicle insurance deductible for covered events such as: **Fire**, **Theft**, **Collision damage**, **Vandalism**, and **Other covered perils affecting stored vehicles**.",
        },
        {
          question: "Why is this different from regular vehicle insurance?",
          answer:
            "RV Park 'n' Protect is designed specifically for **stored vehicles**, which helps avoid common issues with traditional policies such as: **Storage coverage exclusions**, **High deductibles**, **Complicated claims processes**. This program focuses on protecting vehicles while they are stored at the facility.",
        },
        {
          question: "Will filing a claim affect my vehicle insurance?",
          answer:
            "No. Claims through RV Park 'n' Protect are **separate from your personal vehicle insurance**, so they do not impact your insurance premiums or claims history.",
        },
        {
          question: "How do I file a claim?",
          answer:
            "Claims can be submitted anytime online at: **[RVParknProtectClaims.com](http://RVParknProtectClaims.com)**. The program offers **24/7 access and dedicated claims support.**",
        },
        {
          question: "How much does the protection cost?",
          answer: `You can choose from three protection levels:

**$1,000 Protection Limit** — $11/month
**$1,500 Protection Limit** — $15/month
**$2,500 Protection Limit** — $25/month`,
        },
        {
          question: "What happens if I stop renting my space?",
          answer:
            "Your protection automatically ends when your storage rental ends. There are no long-term commitments.",
        },
      ],
    },
    {
      type: "faqs",
      title: "Booking & Spaces",
      items: [
        {
          question: "What sizes of parking/storage spaces are available?",
          answer:
            "We offer a variety of space sizes from compact vehicle parking to oversized spaces for semis, trailers, and RVs.",
        },
        {
          question: "Can I change to a different space if I need more or less room?",
          answer:
            "Absolutely. Just reach out to our team, and we will help you transfer to a space that fits your needs.",
        },
        {
          question: "Do you allow multiple vehicles under one account?",
          answer:
            "Yes, you can manage multiple spaces and vehicles under one account for convenience.",
        },
        {
          question: "What happens if I need to cancel my rental?",
          answer:
            "We offer flexible month-to-month rentals, so you can cancel anytime with proper notice.",
        },
      ],
    },
    {
      type: "faqs",
      title: "Rules & Restrictions",
      items: [
        {
          question: "Are there any rules for storing my vehicle or equipment?",
          answer:
            "To keep Prime Parking NWA clean and accessible for everyone, we do have a few simple guidelines: **Vehicles and equipment should be in good condition with no leaking fluids**. **No abandoned items or debris**. **Tires must be inflated**. **All vehicles must remain towable, movable, and on wheels**. Following these rules helps us maintain a safe and well-kept yard for all tenants.",
        },
        {
          question: "Are there restrictions on what I can store?",
          answer:
            "Yes. Hazardous, flammable, or illegal items are not permitted. If you are unsure about a specific item, contact us and we will be happy to help.",
        },
        {
          question: "Can I leave loose equipment or items in my space?",
          answer:
            "All loose equipment, tools, or materials must be stored inside a **conex/container**. Items left out in the open create safety hazards, take up space, and make the yard harder to maintain. For your convenience, **Prime Parking NWA offers conex containers for rent**.",
        },
        {
          question: "Can I leave tires behind when I move out?",
          answer: `To keep Prime Parking NWA safe and welcoming for everyone, all tires must be removed upon vacating your space. Leftover tires can create hazards and extra work for our team. If tires are left behind, **the cost of removal will be added to your final invoice**.

**Local Tire Disposal Options in Rogers, AR:**

**Benton County Solid Waste District** — Dispose of up to 4 tires per month (without rims) at no charge. ([bentoncountyrecycles.org](https://www.bentoncountyrecycles.org/tire-district))

**James R. Welch Recycling Center** — 2300 N Arkansas St, Rogers. Free self-service recycling drop-off. ([rogersar.gov](https://www.rogersar.gov/401/Rogers-Recycling-Center))`,
        },
      ],
    },

  ],
};
