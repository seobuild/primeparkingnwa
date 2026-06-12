import Script from "next/script";
import { siteConfig } from "@/lib/content/site-config";

interface Props {
  name: string;
  description: string;
  url: string;
}

export default function ServiceSchema({ name, description, url }: Props) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "SelfStorage",
      "@id": `${siteConfig.url}/#selfstorage`,
      name: siteConfig.name,
      telephone: `+1-${siteConfig.phone}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Rogers, AR" },
      { "@type": "City", name: "Bentonville, AR" },
      { "@type": "City", name: "Lowell, AR" },
      { "@type": "City", name: "Springdale, AR" },
      { "@type": "City", name: "Fayetteville, AR" },
      { "@type": "City", name: "Centerton, AR" },
      { "@type": "City", name: "Gravette, AR" },
    ],
    serviceType: "Vehicle Storage",
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
