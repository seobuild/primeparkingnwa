import type { Metadata } from "next";
import { tenantLoginPage } from "@/lib/content/pages/tenant-login";
import HeroSection from "@/lib/components/sections/HeroSection";
import InfoBarSection from "@/lib/components/sections/InfoBarSection";
import { renderMarkdown } from "@/lib/utils/markdown";

export const metadata: Metadata = {
  title: `${tenantLoginPage.title} | Prime Parking NWA`,
  description: tenantLoginPage.description,
  alternates: {
    canonical: tenantLoginPage.canonical,
  },
  openGraph: {
    title: `${tenantLoginPage.title} | Prime Parking NWA`,
    description: tenantLoginPage.description,
    url: tenantLoginPage.canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${tenantLoginPage.title} | Prime Parking NWA`,
    description: tenantLoginPage.description,
  },
};

const tocSections = [
  { id: "getting-started", title: "Getting Started" },
  { id: "using-your-dashboard", title: "Using Your Dashboard" },
  { id: "gate-codes-and-support", title: "Gate Codes and Support" },
];

interface ContentSectionData {
  title?: string;
  body: string;
  align?: "left" | "center";
}

function KBSection({ section, isLast }: { section: ContentSectionData; isLast?: boolean }) {
  const isCenter = section.align === "center";
  return (
    <div className={`${isLast ? "" : "border-b border-gray-300 pb-12 md:pb-16 mb-12 md:mb-16"}`}>
      {section.title && (
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-900 mb-6 ${
            isCenter ? "text-center" : "text-left"
          }`}
        >
          {section.title}
        </h2>
      )}
      <div
        className={`prose prose-lg max-w-none text-gray-700 leading-relaxed ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        {renderMarkdown(section.body, false)}
      </div>
    </div>
  );
}

export default function TenantLoginInstructionsPage() {
  const sections = tenantLoginPage.sections;
  const heroSection = sections[0];
  const infoBarSection = sections[1];

  const contentSections: ContentSectionData[] = sections.slice(2).map((s) => ({
    title: s.type === "content" ? (s as any).title : undefined,
    body: s.type === "content" ? (s as any).body : "",
    align: s.type === "content" ? (s as any).align : "left",
  }));

  return (
    <div>
      {/* Hero */}
      {heroSection.type === "hero" && <HeroSection section={heroSection} />}

      {/* Info Bar */}
      {infoBarSection.type === "info-bar" && <InfoBarSection section={infoBarSection} />}

      {/* Knowledge Base: TOC + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* TOC Sidebar */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="bg-gray-50 rounded-xl p-5 md:p-6 border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  On this page
                </h3>
                <nav className="space-y-0.5">
                  {tocSections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-[#1a365d] hover:bg-white rounded-md px-3 py-2 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9">
            {contentSections.map((section, idx) => {
              const tocItem = tocSections[idx];
              return (
                <div key={idx} id={tocItem?.id} className="scroll-mt-28">
                  <KBSection section={section} isLast={idx === contentSections.length - 1} />
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
