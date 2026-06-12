import type { Metadata } from "next";
import { homePage } from "@/lib/content/pages/home";
import { PageRenderer } from "@/lib/components/sections";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description,
  alternates: {
    canonical: homePage.canonical,
  },
  openGraph: {
    title: homePage.title,
    description: homePage.description,
    url: homePage.canonical,
    type: "website",
    images: [
      {
        url: `${OG_BASE}/aerial2.webp`,
        width: 1200,
        height: 630,
        alt: "Prime Parking NWA - Secure paved vehicle storage facility in Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homePage.title,
    description: homePage.description,
    images: [`${OG_BASE}/aerial2.webp`],
  },
};

export default function HomePage() {
  return (
    <div id="page">
      <PageRenderer sections={homePage.sections} />
    </div>
  );
}
