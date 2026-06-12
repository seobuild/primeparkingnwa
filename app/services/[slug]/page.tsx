import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices } from "@/lib/content";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(allServices).map((slug) => ({ slug }));
}

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

const serviceOgImages: Record<string, { url: string; alt: string }> = {
  "rv-storage": { url: `${OG_BASE}/rv-parking.avif`, alt: "RV Storage at Prime Parking NWA" },
  "boat-storage": { url: `${OG_BASE}/boat-storage.webp`, alt: "Boat Storage at Prime Parking NWA" },
  "semi-truck-parking": { url: `${OG_BASE}/semitruck-parking.webp`, alt: "Semi Truck Parking at Prime Parking NWA" },
  "trailer-storage": { url: `${OG_BASE}/trailer-storage.avif`, alt: "Trailer Storage at Prime Parking NWA" },
  "construction-equipment-storage": { url: `${OG_BASE}/construction-storage.avif`, alt: "Construction Equipment Storage at Prime Parking NWA" },
  "commercial-fleet-parking": { url: `${OG_BASE}/semitruck-parking.webp`, alt: "Commercial Fleet Parking at Prime Parking NWA" },
  "rv-boat-storage": { url: `${OG_BASE}/rv-parking.avif`, alt: "RV & Boat Storage at Prime Parking NWA" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices[slug];
  if (!service) return {};
  const og = serviceOgImages[slug] || { url: `${OG_BASE}/aerial2.webp`, alt: service.title };
  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: service.canonical,
    },
    openGraph: {
      title: service.title,
      description: service.description,
      url: service.canonical,
      type: "website",
      images: [
        {
          url: og.url,
          width: 1200,
          height: 630,
          alt: og.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: [og.url],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = allServices[slug];

  if (!service) {
    notFound();
  }

  return (
    <div>
      <ServiceSchema
        name={service.title}
        description={service.description}
        url={service.canonical || `/services/${slug}`}
      />
      <PageRenderer sections={service.sections} />
      <ServicePageExtras />
    </div>
  );
}
