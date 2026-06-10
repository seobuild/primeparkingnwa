import { createAdminClient } from "./admin";

// Map project slug to Supabase site_id UUID
const SITE_ID_MAP: Record<string, string> = {
  primeparkingnwa: "90d03e37-bc6a-4c5d-9de0-3320b3eb4872",
};

function getSiteId(projectSlug: string): string | undefined {
  return SITE_ID_MAP[projectSlug];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  h1?: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt?: string;
  content: string;
  contentFormat: "markdown" | "html";
  featuredImage?: string;
  authorName?: string;
  status: "draft" | "published" | "archived";
  publishedAt?: string;
  targetKeyword?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  h1: string | null;
  meta_title: string | null;
  meta_description: string | null;
  excerpt: string | null;
  body_content: string;
  featured_image: string | null;
  author: string | null;
  status: string;
  published_at: string | null;
  target_keyword: string | null;
  tags: string[] | null;
  created_at: string;
  updated_at: string;
}

function detectContentFormat(content: string): "markdown" | "html" {
  // If content contains HTML tags (like <p>, <div>, <!-- wp:), treat as HTML
  if (/<[a-zA-Z][^>]*>|<!--\s*wp:/.test(content)) {
    return "html";
  }
  return "markdown";
}

function mapRow(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    h1: row.h1 ?? undefined,
    metaTitle: row.meta_title ?? undefined,
    metaDescription: row.meta_description ?? undefined,
    excerpt: row.excerpt ?? undefined,
    content: row.body_content,
    contentFormat: detectContentFormat(row.body_content),
    featuredImage: row.featured_image ?? undefined,
    authorName: row.author ?? undefined,
    status: row.status as BlogPost["status"],
    publishedAt: row.published_at ?? undefined,
    targetKeyword: row.target_keyword ?? undefined,
    tags: row.tags ?? undefined,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/**
 * Fetch published blog posts from Supabase.
 * Falls back to empty array if Supabase is unavailable.
 */
export async function fetchBlogPosts(projectSlug: string): Promise<BlogPost[]> {
  const siteId = getSiteId(projectSlug);
  if (!siteId) {
    console.error("Unknown project slug:", projectSlug);
    return [];
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("site_id", siteId)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Supabase blog_posts fetch error:", error.message);
      return [];
    }

    const rows = (data || []) as unknown as BlogPostRow[];
    return rows.map(mapRow);
  } catch (err) {
    console.error("Failed to fetch blog posts from Supabase:", err);
    return [];
  }
}

/**
 * Fetch a single published blog post by slug.
 * Returns undefined if not found or Supabase is unavailable.
 */
export async function fetchBlogPost(
  projectSlug: string,
  slug: string
): Promise<BlogPost | undefined> {
  const siteId = getSiteId(projectSlug);
  if (!siteId) {
    console.error("Unknown project slug:", projectSlug);
    return undefined;
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("site_id", siteId)
      .eq("slug", slug)
      .eq("status", "published")
      .single();

    if (error) {
      console.error("Supabase blog_post fetch error:", error.message);
      return undefined;
    }

    if (!data) return undefined;
    return mapRow(data as unknown as BlogPostRow);
  } catch (err) {
    console.error("Failed to fetch blog post from Supabase:", err);
    return undefined;
  }
}

/**
 * Fetch all published blog slugs for sitemap generation.
 */
export async function fetchBlogSlugs(projectSlug: string): Promise<string[]> {
  const siteId = getSiteId(projectSlug);
  if (!siteId) {
    console.error("Unknown project slug:", projectSlug);
    return [];
  }

  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("site_id", siteId)
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Supabase blog slugs fetch error:", error.message);
      return [];
    }

    return ((data || []) as { slug: string }[]).map((r) => r.slug);
  } catch (err) {
    console.error("Failed to fetch blog slugs from Supabase:", err);
    return [];
  }
}
