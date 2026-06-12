import type { Metadata } from "next";
import { boatStorageService } from "@/lib/content/services/boat-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: boatStorageService.title,
  description: boatStorageService.description,
  alternates: {
    canonical: boatStorageService.canonical,
  },
  openGraph: {
    title: boatStorageService.title,
    description: boatStorageService.description,
    url: boatStorageService.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/boat-storage.webp`,
        width: 1200,
        height: 630,
        alt: "Boat Storage at Prime Parking NWA - Secure paved boat parking in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: boatStorageService.title,
    description: boatStorageService.description,
    images: [`${OG_BASE}/boat-storage.webp`],
  },
};

export default function BoatStoragePage() {
  return (
    <div>
      <ServiceSchema
        name={boatStorageService.title}
        description={boatStorageService.description}
        url={boatStorageService.canonical || "/boat-storage"}
      />
      <PageRenderer sections={boatStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
