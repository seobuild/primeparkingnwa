import type { Metadata } from "next";
import { locationPage } from "@/lib/content/pages/location";
import HeroSection from "@/lib/components/sections/HeroSection";
import { PageRenderer } from "@/lib/components/sections";

export const metadata: Metadata = {
  title: `${locationPage.title} | Prime Parking NWA`,
  description: locationPage.description,
  alternates: {
    canonical: locationPage.canonical,
  },
  openGraph: {
    title: `${locationPage.title} | Prime Parking NWA`,
    description: locationPage.description,
    url: locationPage.canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${locationPage.title} | Prime Parking NWA`,
    description: locationPage.description,
  },
};

export default function LocationPage() {
  const heroSection = locationPage.sections[0];
  const restSections = locationPage.sections.slice(1);

  return (
    <div>
      {/* Hero: full width */}
      {heroSection.type === "hero" && <HeroSection section={heroSection} />}

      {/* Rest: normal page width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageRenderer sections={restSections} />
      </div>
    </div>
  );
}
