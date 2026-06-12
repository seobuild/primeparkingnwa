import type { Metadata } from "next";
import { rvStorageService } from "@/lib/content/services/rv-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: rvStorageService.title,
  description: rvStorageService.description,
  alternates: {
    canonical: rvStorageService.canonical,
  },
  openGraph: {
    title: rvStorageService.title,
    description: rvStorageService.description,
    url: rvStorageService.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/rv-parking.avif`,
        width: 1200,
        height: 630,
        alt: "RV Storage at Prime Parking NWA - Secure paved RV parking in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: rvStorageService.title,
    description: rvStorageService.description,
    images: [`${OG_BASE}/rv-parking.avif`],
  },
};

export default function RVStoragePage() {
  return (
    <div>
      <ServiceSchema
        name={rvStorageService.title}
        description={rvStorageService.description}
        url={rvStorageService.canonical || "/rv-storage"}
      />
      <PageRenderer sections={rvStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
