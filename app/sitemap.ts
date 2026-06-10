import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site-config";
import { getAllSlugs, allServices, allLocations } from "@/lib/content";
import { fetchBlogSlugs } from "@/lib/supabase/blog";

function getSitemapPriority(slug: string): number {
  if (slug === "/") return 1.0;
  if (slug in allServices) return 0.85;
  if (slug in allLocations) return 0.85;
  if (slug === "blog") return 0.7;
  return 0.8;
}

function getChangeFrequency(slug: string): MetadataRoute.Sitemap[0]["changeFrequency"] {
  if (slug === "/") return "weekly";
  if (slug in allServices || slug in allLocations) return "monthly";
  return "monthly";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;
  const staticSlugs = getAllSlugs();

  // Fetch blog post slugs from Supabase (returns [] if unavailable)
  const blogSlugs = await fetchBlogSlugs("primeparkingnwa");
  const blogUrls: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const staticUrls: MetadataRoute.Sitemap = staticSlugs.map((slug) => ({
    url: `${baseUrl}${slug === "/" ? "" : `/${slug}`}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(slug),
    priority: getSitemapPriority(slug),
  }));

  // Hardcoded pages not in the content registry
  const hardcodedUrls: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticUrls, ...hardcodedUrls, ...blogUrls];
}
