import type { Metadata } from "next";
import { semiTruckParkingService } from "@/lib/content/services/semi-truck-parking";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

export const metadata: Metadata = {
  title: `${semiTruckParkingService.title} | Prime Parking NWA`,
  description: semiTruckParkingService.description,
  alternates: {
    canonical: semiTruckParkingService.canonical,
  },
};

export default function SemiTruckParkingPage() {
  return (
    <div>
      <PageRenderer sections={semiTruckParkingService.sections} />
      <ServicePageExtras />
    </div>
  );
}
