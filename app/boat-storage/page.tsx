import type { Metadata } from "next";
import { boatStorageService } from "@/lib/content/services/boat-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

export const metadata: Metadata = {
  title: `${boatStorageService.title} | Prime Parking NWA`,
  description: boatStorageService.description,
  alternates: {
    canonical: boatStorageService.canonical,
  },
};

export default function BoatStoragePage() {
  return (
    <div>
      <PageRenderer sections={boatStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
