import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/", "/api/", "/search"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
