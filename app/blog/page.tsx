import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { fetchBlogPosts } from "@/lib/supabase/blog";
import { siteConfig } from "@/lib/content/site-config";

const OG_BASE = "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media";

export const metadata: Metadata = {
  title: "Blog",
  description: `Read the latest updates, tips, and insights from ${siteConfig.name}.`,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog",
    description: `Read the latest updates, tips, and insights from ${siteConfig.name}.`,
    url: "/blog",
    type: "website",
    images: [
      {
        url: `${OG_BASE}/aerial2.webp`,
        width: 1200,
        height: 630,
        alt: `Blog | ${siteConfig.name} - Updates, tips, and insights`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: `Read the latest updates, tips, and insights from ${siteConfig.name}.`,
    images: [`${OG_BASE}/aerial2.webp`],
  },
};

function formatDate(dateString?: string): string {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts("primeparkingnwa");

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aerial-view.png"
            alt="Prime Parking NWA facility"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 md:pb-24 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              News & Tips
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.1] mb-6">
              Blog
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8">
              Updates, tips, and insights from {siteConfig.name}
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      {post.featuredImage ? (
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <span className="text-gray-400 text-sm">No image</span>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
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
                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1a365d] transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-[#1a365d] hover:underline"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
