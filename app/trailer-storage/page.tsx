import type { Metadata } from "next";
import { trailerStorageService } from "@/lib/content/services/trailer-storage";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

export const metadata: Metadata = {
  title: `${trailerStorageService.title} | Prime Parking NWA`,
  description: trailerStorageService.description,
  alternates: {
    canonical: trailerStorageService.canonical,
  },
};

export default function TrailerStoragePage() {
  return (
    <div>
      <PageRenderer sections={trailerStorageService.sections} />
      <ServicePageExtras />
    </div>
  );
}
