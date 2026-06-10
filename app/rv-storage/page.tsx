import type { Metadata } from "next";
import { rvStorageService } from "@/lib/content/services/rv-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

export const metadata: Metadata = {
  title: `${rvStorageService.title} | Prime Parking NWA`,
  description: rvStorageService.description,
  alternates: {
    canonical: rvStorageService.canonical,
  },
};

export default function RVStoragePage() {
  return (
    <div>
      <PageRenderer sections={rvStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
