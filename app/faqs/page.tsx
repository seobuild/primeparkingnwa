import type { Metadata } from "next";
import { faqsPage } from "@/lib/content/pages/faqs";
import HeroSection from "@/lib/components/sections/HeroSection";
import { PageRenderer } from "@/lib/components/sections";

export const metadata: Metadata = {
  title: `${faqsPage.title} | Prime Parking NWA`,
  description: faqsPage.description,
  alternates: {
    canonical: faqsPage.canonical,
  },
  openGraph: {
    title: `${faqsPage.title} | Prime Parking NWA`,
    description: faqsPage.description,
    url: faqsPage.canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${faqsPage.title} | Prime Parking NWA`,
    description: faqsPage.description,
  },
};

export default function FAQsPage() {
  const heroSection = faqsPage.sections[0];
  const restSections = faqsPage.sections.slice(1);

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
