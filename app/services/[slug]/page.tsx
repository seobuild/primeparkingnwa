import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices } from "@/lib/content";
import { PageRenderer } from "@/lib/components/sections";
import ServicePageExtras from "@/app/components/ServicePageExtras";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(allServices).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices[slug];
  if (!service) return {};
  return {
    title: `${service.title} | Prime Parking NWA`,
    description: service.description,
    alternates: {
      canonical: service.canonical,
    },
    openGraph: {
      title: `${service.title} | Prime Parking NWA`,
      description: service.description,
      url: service.canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Prime Parking NWA`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = allServices[slug];

  if (!service) {
    notFound();
  }

  return (
    <div>
      <PageRenderer sections={service.sections} />
      <ServicePageExtras />
    </div>
  );
}
