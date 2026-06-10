import type { Metadata } from "next";
import { homePage } from "@/lib/content/pages/home";
import { PageRenderer } from "@/lib/components/sections";

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.description,
  alternates: {
    canonical: homePage.canonical,
  },
};

export default function HomePage() {
  return (
    <div id="page">
      <PageRenderer sections={homePage.sections} />
    </div>
  );
}
