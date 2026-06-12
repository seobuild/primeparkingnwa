import type { Metadata } from "next";
import { commercialFleetParkingService } from "@/lib/content/services/commercial-fleet-parking";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";
import ServiceSchema from "@/app/components/ServiceSchema";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: commercialFleetParkingService.title,
  description: commercialFleetParkingService.description,
  alternates: {
    canonical: commercialFleetParkingService.canonical,
  },
  openGraph: {
    title: commercialFleetParkingService.title,
    description: commercialFleetParkingService.description,
    url: commercialFleetParkingService.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/semitruck-parking.webp`,
        width: 1200,
        height: 630,
        alt: "Commercial Fleet Parking at Prime Parking NWA - Secure paved fleet parking in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: commercialFleetParkingService.title,
    description: commercialFleetParkingService.description,
    images: [`${OG_BASE}/semitruck-parking.webp`],
  },
};

export default function CommercialFleetParkingPage() {
  return (
    <div>
      <ServiceSchema
        name={commercialFleetParkingService.title}
        description={commercialFleetParkingService.description}
        url={commercialFleetParkingService.canonical || "/commercial-fleet-parking"}
      />
      <PageRenderer sections={commercialFleetParkingService.sections} />
      <ServicePageExtras />
    </div>
  );
}
