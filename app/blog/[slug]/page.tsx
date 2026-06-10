import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogPost, fetchBlogPosts, fetchBlogSlugs } from "@/lib/supabase/blog";
import { siteConfig } from "@/lib/content/site-config";

function renderBlogBody(body: string): React.ReactNode {
  const blocks: React.ReactNode[] = [];
  const lines = body.split("\n");
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip blank lines
    if (trimmed.length === 0) {
      i++;
      continue;
    }

    // H2 heading
    if (trimmed.startsWith("## ") && !trimmed.startsWith("### ")) {
      blocks.push(
        <h2 key={key++} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {parseInline(trimmed.replace("## ", ""))}
        </h2>
      );
      i++;
      continue;
    }

    // H3 heading
    if (trimmed.startsWith("### ")) {
      blocks.push(
        <h3 key={key++} className="text-xl font-bold text-gray-900 mt-8 mb-3">
          {parseInline(trimmed.replace("### ", ""))}
        </h3>
      );
      i++;
      continue;
    }

    // Bullet list
    if (trimmed.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      blocks.push(
        <ul key={key++} className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s/, ""));
        i++;
      }
      blocks.push(
        <ol key={key++} className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
          {items.map((item, idx) => (
            <li key={idx}>{parseInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Regular paragraph (collect consecutive non-special lines)
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim().length > 0 &&
      !lines[i].trim().startsWith("##") &&
      !lines[i].trim().startsWith("###") &&
      !lines[i].trim().startsWith("- ") &&
      !/^\d+\.\s/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={key++} className="mb-4 leading-relaxed text-gray-700">
        {parseInline(paraLines.join(" ").replace(/\s+/g, " ").trim())}
      </p>
    );
  }

  return <>{blocks}</>;
}

function parseInline(text: string): React.ReactNode {
  const boldRegex = /\*\*(.+?)\*\*/g;
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  // Replace markers with placeholders, then split
  let processed = text;
  processed = processed.replace(boldRegex, "<<<BOLD>>>$1<<<ENDBOLD>>>");
  processed = processed.replace(linkRegex, "<<<LINK>>>$1|||$2<<<ENDLINK>>>");

  const parts: React.ReactNode[] = [];
  let key = 0;
  let inLink = false;
  let linkText = "";
  let linkUrl = "";

  const tokens = processed.split(/(<<<BOLD>>>|<<<ENDBOLD>>>|<<<LINK>>>|<<<ENDLINK>>>)/);

  for (const token of tokens) {
    if (token === "<<<BOLD>>>") {
      // start bold
    } else if (token === "<<<ENDBOLD>>>") {
      // end bold
    } else if (token === "<<<LINK>>>") {
      inLink = true;
    } else if (token === "<<<ENDLINK>>>") {
      inLink = false;
      const isExternal = linkUrl.startsWith("http") && !linkUrl.includes("primeparkingnwa.com");
      parts.push(
        <a
          key={key++}
          href={linkUrl}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="font-bold text-[#1a365d] hover:underline"
        >
          {linkText}
        </a>
      );
      linkText = "";
      linkUrl = "";
    } else if (inLink) {
      const split = token.split("|||");
      linkText = split[0];
      linkUrl = split[1] || "";
    } else if (token) {
      parts.push(<span key={key++}>{token}</span>);
    }
  }

  return <>{parts}</>;
}

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await fetchBlogSlugs("primeparkingnwa");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPost("primeparkingnwa", slug);
  if (!post) return {};

  const ogImage = post.featuredImage
    ? [{ url: post.featuredImage }]
    : [{ url: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/0c9d9b89-6b89-44cd-9832-e00e922fff63/test+web.jpg" }];

  return {
    title: `${post.metaTitle || post.title} | ${siteConfig.name} Blog`,
    description: post.metaDescription || post.excerpt || siteConfig.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.metaTitle || post.title} | ${siteConfig.name} Blog`,
      description: post.metaDescription || post.excerpt || siteConfig.description,
      url: `/blog/${post.slug}`,
      type: "article",
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.metaTitle || post.title} | ${siteConfig.name} Blog`,
      description: post.metaDescription || post.excerpt || siteConfig.description,
      images: ogImage.map((img) => img.url),
    },
  };
}

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    fetchBlogPost("primeparkingnwa", slug),
    fetchBlogPosts("primeparkingnwa"),
  ]);

  if (!post) {
    notFound();
  }

  const recentPosts = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 5);

  const isHtml = post.contentFormat === "html";

  return (
    <article className="bg-white">
      {/* Post Hero */}
      <header className="relative min-h-[40vh] md:min-h-[50vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          ) : (
            <Image
              src="/images/aerial-view.png"
              alt="Prime Parking NWA facility"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-24">
          <div className="max-w-3xl">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.1] mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-white/80">
              {post.publishedAt && (
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              )}
              {post.authorName && (
                <>
                  <span>·</span>
                  <span>{post.authorName}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Post Content + Sidebar */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {isHtml ? (
                <div
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <div className="text-lg text-gray-700 leading-relaxed">
                  {renderBlogBody(post.content)}
                </div>
              )}

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-8 space-y-8">
                {/* Recent Posts */}
                {recentPosts.length > 0 && (
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#1a365d] mb-5">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentPosts.map((rp) => (
                        <Link
                          key={rp.slug}
                          href={`/blog/${rp.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-3">
                            {rp.featuredImage && (
                              <div className="relative w-16 h-12 flex-shrink-0 rounded-md overflow-hidden bg-gray-200">
                                <Image
                                  src={rp.featuredImage}
                                  alt={rp.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform"
                                  sizes="64px"
                                />
                              </div>
                            )}
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-900 group-hover:text-[#1a365d] transition-colors line-clamp-2 leading-snug">
                                {rp.title}
                              </p>
                              {rp.publishedAt && (
                                <p className="text-xs text-gray-500 mt-1">
                                  {formatDate(rp.publishedAt)}
                                </p>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-[#1a365d] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">
                    Need a Place to Store Your Vehicle?
                  </h3>
                  <p className="text-sm text-white/80 mb-5 leading-relaxed">
                    Secure, paved, and gated storage in Rogers, AR. RV, boat, trailer, and commercial fleet parking available.
                  </p>
                  <a
                    href="https://rent.primeparkingnwa.com/sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-white text-[#1a365d] text-sm font-bold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Rent a Space Online
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
