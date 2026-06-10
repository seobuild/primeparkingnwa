import type { Metadata } from "next";
import { faqsPage } from "@/lib/content/pages/faqs";
import HeroSection from "@/lib/components/sections/HeroSection";
import InfoBarSection from "@/lib/components/sections/InfoBarSection";
import FAQSection from "@/lib/components/sections/FAQSection";

export const metadata: Metadata = {
  title: `${faqsPage.title} | Prime Parking NWA`,
  description: faqsPage.description,
  alternates: {
    canonical: faqsPage.canonical,
  },
  openGraph: {
    title: `${faqsPage.title} | Prime Parking NWA`,
    description: faqsPage.description,
    url: faqsPage.canonical,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${faqsPage.title} | Prime Parking NWA`,
    description: faqsPage.description,
  },
};

const faqSections = faqsPage.sections.filter((s) => s.type === "faqs") as Array<{
  type: "faqs";
  title?: string;
  items: Array<{ question: string; answer: string | React.ReactNode }>;
}>;

const tocItems = faqSections.map((s) => ({
  id: s.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "",
  title: s.title || "",
}));

export default function FAQsPage() {
  const heroSection = faqsPage.sections[0];
  const infoBarSection = faqsPage.sections[1];

  return (
    <div>
      {/* Hero: full width */}
      {heroSection.type === "hero" && <HeroSection section={heroSection} />}

      {/* Info Bar */}
      {infoBarSection.type === "info-bar" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InfoBarSection section={infoBarSection} />
        </div>
      )}

      {/* FAQ Content with sticky TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* TOC Sidebar */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <div className="bg-gray-50 rounded-xl p-5 md:p-6 border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                  On this page
                </h3>
                <nav className="space-y-0.5">
                  {tocItems.map((item) => (
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

          {/* FAQ Sections */}
          <main className="lg:col-span-9">
            {faqSections.map((section, idx) => (
              <FAQSection
                key={idx}
                section={section}
                id={tocItems[idx]?.id}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
