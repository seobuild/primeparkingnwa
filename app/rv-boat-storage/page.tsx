import type { Metadata } from "next";
import { rvBoatStorageService } from "@/lib/content/services/rv-boat-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

export const metadata: Metadata = {
  title: `${rvBoatStorageService.title} | Prime Parking NWA`,
  description: rvBoatStorageService.description,
  alternates: {
    canonical: rvBoatStorageService.canonical,
  },
};

export default function RVBoatStoragePage() {
  return (
    <div>
      <PageRenderer sections={rvBoatStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
