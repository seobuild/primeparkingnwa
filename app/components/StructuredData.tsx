import Script from "next/script";
import { siteConfig } from "@/lib/content/site-config";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SelfStorage",
    "@id": `${siteConfig.url}/#selfstorage`,
    name: siteConfig.name,
    alternateName: "The Drop Yard NWA",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+1-${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.3582,
      longitude: -94.1578,
    },
    image: [
      "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/0c9d9b89-6b89-44cd-9832-e00e922fff63/test+web.jpg",
      "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/c93f3be6-1367-4032-90d4-8d8d789cc764/IMG_0666.jpg",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
        description: "24/7 gated access for tenants",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
        description: "Office hours",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "17:00",
        description: "Office hours",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: "Northwest Arkansas",
      containsPlace: [
        { "@type": "City", name: "Rogers" },
        { "@type": "City", name: "Bentonville" },
        { "@type": "City", name: "Lowell" },
        { "@type": "City", name: "Springdale" },
        { "@type": "City", name: "Fayetteville" },
        { "@type": "City", name: "Centerton" },
        { "@type": "City", name: "Gravette" },
      ],
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
    ].filter(Boolean),
    paymentAccepted: "Credit Card, Online Payment",
    currenciesAccepted: "USD",
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
