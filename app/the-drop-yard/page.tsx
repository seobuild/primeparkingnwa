import type { Metadata } from "next";
import { legacyPage } from "@/lib/content/pages/legacy";
import { PageRenderer } from "@/lib/components/sections";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: legacyPage.title,
  description: legacyPage.description,
  alternates: {
    canonical: legacyPage.canonical,
  },
  openGraph: {
    title: legacyPage.title,
    description: legacyPage.description,
    url: legacyPage.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/aerial2.webp`,
        width: 1200,
        height: 630,
        alt: "The Drop Yard NWA is now Prime Parking NWA - Secure vehicle storage in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: legacyPage.title,
    description: legacyPage.description,
    images: [`${OG_BASE}/aerial2.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LegacyPage() {
  return (
    <div>
      <PageRenderer sections={legacyPage.sections} />
    </div>
  );
}
