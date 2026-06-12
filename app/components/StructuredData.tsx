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
      "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media/aerial2.webp",
      "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media/general-storage.avif",
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
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.logo.src}`,
      width: siteConfig.logo.width,
      height: siteConfig.logo.height,
    },
    hasMap: "https://www.google.com/maps/dir//2808+N+26th+St,+Rogers,+AR+72756",
    areaServed: [
      { "@type": "City", name: "Rogers, AR" },
      { "@type": "City", name: "Bentonville, AR" },
      { "@type": "City", name: "Lowell, AR" },
      { "@type": "City", name: "Springdale, AR" },
      { "@type": "City", name: "Fayetteville, AR" },
      { "@type": "City", name: "Centerton, AR" },
      { "@type": "City", name: "Gravette, AR" },
    ],
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
