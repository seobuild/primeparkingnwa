import type { Metadata } from "next";
import { constructionEquipmentStorageService } from "@/lib/content/services/construction-equipment-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

export const metadata: Metadata = {
  title: `${constructionEquipmentStorageService.title} | Prime Parking NWA`,
  description: constructionEquipmentStorageService.description,
  alternates: {
    canonical: constructionEquipmentStorageService.canonical,
  },
};

export default function ConstructionEquipmentStoragePage() {
  return (
    <div>
      <PageRenderer sections={constructionEquipmentStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
