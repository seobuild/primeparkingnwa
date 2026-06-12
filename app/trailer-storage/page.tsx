import type { Metadata } from "next";
import { trailerStorageService } from "@/lib/content/services/trailer-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: trailerStorageService.title,
  description: trailerStorageService.description,
  alternates: {
    canonical: trailerStorageService.canonical,
  },
  openGraph: {
    title: trailerStorageService.title,
    description: trailerStorageService.description,
    url: trailerStorageService.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/trailer-storage.avif`,
        width: 1200,
        height: 630,
        alt: "Trailer Storage at Prime Parking NWA - Secure paved trailer parking in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: trailerStorageService.title,
    description: trailerStorageService.description,
    images: [`${OG_BASE}/trailer-storage.avif`],
  },
};

export default function TrailerStoragePage() {
  return (
    <div>
      <ServiceSchema
        name={trailerStorageService.title}
        description={trailerStorageService.description}
        url={trailerStorageService.canonical || "/trailer-storage"}
      />
      <PageRenderer sections={trailerStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
