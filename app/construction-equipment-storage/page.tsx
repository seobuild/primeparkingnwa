import type { Metadata } from "next";
import { constructionEquipmentStorageService } from "@/lib/content/services/construction-equipment-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: constructionEquipmentStorageService.title,
  description: constructionEquipmentStorageService.description,
  alternates: {
    canonical: constructionEquipmentStorageService.canonical,
  },
  openGraph: {
    title: constructionEquipmentStorageService.title,
    description: constructionEquipmentStorageService.description,
    url: constructionEquipmentStorageService.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/construction-storage.avif`,
        width: 1200,
        height: 630,
        alt: "Construction Equipment Storage at Prime Parking NWA - Secure paved storage in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: constructionEquipmentStorageService.title,
    description: constructionEquipmentStorageService.description,
    images: [`${OG_BASE}/construction-storage.avif`],
  },
};

export default function ConstructionEquipmentStoragePage() {
  return (
    <div>
      <ServiceSchema
        name={constructionEquipmentStorageService.title}
        description={constructionEquipmentStorageService.description}
        url={constructionEquipmentStorageService.canonical || "/construction-equipment-storage"}
      />
      <PageRenderer sections={constructionEquipmentStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
