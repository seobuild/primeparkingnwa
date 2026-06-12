import type { Metadata } from "next";
import { semiTruckParkingService } from "@/lib/content/services/semi-truck-parking";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: semiTruckParkingService.title,
  description: semiTruckParkingService.description,
  alternates: {
    canonical: semiTruckParkingService.canonical,
  },
  openGraph: {
    title: semiTruckParkingService.title,
    description: semiTruckParkingService.description,
    url: semiTruckParkingService.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/semitruck-parking.webp`,
        width: 1200,
        height: 630,
        alt: "Semi Truck Parking at Prime Parking NWA - Secure paved truck parking in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: semiTruckParkingService.title,
    description: semiTruckParkingService.description,
    images: [`${OG_BASE}/semitruck-parking.webp`],
  },
};

export default function SemiTruckParkingPage() {
  return (
    <div>
      <ServiceSchema
        name={semiTruckParkingService.title}
        description={semiTruckParkingService.description}
        url={semiTruckParkingService.canonical || "/semi-truck-parking"}
      />
      <PageRenderer sections={semiTruckParkingService.sections} />
      <ServicePageExtras />
    </div>
  );
}
