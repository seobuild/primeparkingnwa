import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allLocations } from "@/lib/content";
import { PageRenderer } from "@/lib/components/sections";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(allLocations).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = allLocations[slug];
  if (!location) return {};
  return {
    title: `${location.title} | Prime Parking NWA`,
    description: location.description,
    alternates: {
      canonical: location.canonical,
    },
    openGraph: {
      title: `${location.title} | Prime Parking NWA`,
      description: location.description,
      url: location.canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.title} | Prime Parking NWA`,
      description: location.description,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = allLocations[slug];

  if (!location) {
    notFound();
  }

  return (
    <div>
      <PageRenderer sections={location.sections} />
    </div>
  );
}
