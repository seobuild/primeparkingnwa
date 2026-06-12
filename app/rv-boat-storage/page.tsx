import type { Metadata } from "next";
import { rvBoatStorageService } from "@/lib/content/services/rv-boat-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: rvBoatStorageService.title,
  description: rvBoatStorageService.description,
  alternates: {
    canonical: rvBoatStorageService.canonical,
  },
  openGraph: {
    title: rvBoatStorageService.title,
    description: rvBoatStorageService.description,
    url: rvBoatStorageService.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/rv-parking.avif`,
        width: 1200,
        height: 630,
        alt: "RV & Boat Storage at Prime Parking NWA - Secure paved storage in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: rvBoatStorageService.title,
    description: rvBoatStorageService.description,
    images: [`${OG_BASE}/rv-parking.avif`],
  },
};

export default function RVBoatStoragePage() {
  return (
    <div>
      <ServiceSchema
        name={rvBoatStorageService.title}
        description={rvBoatStorageService.description}
        url={rvBoatStorageService.canonical || "/rv-boat-storage"}
      />
      <PageRenderer sections={rvBoatStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
