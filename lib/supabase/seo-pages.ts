import { createAdminClient } from "./admin";
import { SEOPage } from "@/lib/content/types";

interface SEOPageQueryRow {
  slug: string;
  title: string;
  target_keyword: string | null;
  page_type: string | null;
  status: string | null;
}

/**
 * Fetch published SEO pages from Supabase for the footer sitemap.
 * Falls back to local site-config if Supabase is unavailable.
 *
 * Usage in a Server Component:
 *   const seoPages = await fetchSEOPages("primeparkingnwa");
 */
export async function fetchSEOPages(projectSlug: string): Promise<SEOPage[]> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("seo_pages")
      .select("slug, title, target_keyword, page_type, status")
      .eq("project_slug", projectSlug)
      .eq("status", "published")
      .order("priority", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Supabase seo_pages fetch error:", error.message);
      return [];
    }

    const rows = (data || []) as unknown as SEOPageQueryRow[];

    return rows.map((row) => ({
      slug: row.slug,
      title: row.title,
      targetKeyword: row.target_keyword ?? undefined,
      pageType: row.page_type as SEOPage["pageType"] ?? undefined,
      status: row.status as SEOPage["status"] ?? undefined,
    }));
  } catch (err) {
    console.error("Failed to fetch SEO pages from Supabase:", err);
    return [];
  }
}
