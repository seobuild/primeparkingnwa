import type { Metadata } from "next";
import { commercialFleetParkingService } from "@/lib/content/services/commercial-fleet-parking";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

export const metadata: Metadata = {
  title: `${commercialFleetParkingService.title} | Prime Parking NWA`,
  description: commercialFleetParkingService.description,
  alternates: {
    canonical: commercialFleetParkingService.canonical,
  },
};

export default function CommercialFleetParkingPage() {
  return (
    <div>
      <PageRenderer sections={commercialFleetParkingService.sections} />
      <ServicePageExtras />
    </div>
  );
}
