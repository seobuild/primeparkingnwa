import type { Metadata } from "next";
import { locationPage } from "@/lib/content/pages/location";
import HeroSection from "@/lib/components/sections/HeroSection";
import { PageRenderer } from "@/lib/components/sections";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: locationPage.title,
  description: locationPage.description,
  alternates: {
    canonical: locationPage.canonical,
  },
  openGraph: {
    title: locationPage.title,
    description: locationPage.description,
    url: locationPage.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/aerial2.webp`,
        width: 1200,
        height: 630,
        alt: "Prime Parking NWA Location - 2808 N 26th St, Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: locationPage.title,
    description: locationPage.description,
    images: [`${OG_BASE}/aerial2.webp`],
  },
};

export default function LocationPage() {
  const heroSection = locationPage.sections[0];
  const restSections = locationPage.sections.slice(1);

  return (
    <div>
      {/* Hero: full width */}
      {heroSection.type === "hero" && <HeroSection section={heroSection} />}

      {/* Rest: sections handle their own containers */}
      <PageRenderer sections={restSections} />
    </div>
  );
}
