import HeroSection from "./HeroSection";
import ContentSection from "./ContentSection";
import FeatureGridSection from "./FeatureGridSection";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import GallerySection from "./GallerySection";
import MapSection from "./MapSection";
import CTASection from "./CTASection";
import ShowcaseSection from "./ShowcaseSection";
import ImageTextSection from "./ImageTextSection";
import InfoBarSection from "./InfoBarSection";
import SplitContentSection from "./SplitContentSection";
import { Section } from "@/lib/content/types";

export function renderSection(section: Section, index: number) {
  switch (section.type) {
    case "hero":
      return <HeroSection key={index} section={section} />;
    case "content":
      return <ContentSection key={index} section={section} />;
    case "feature-grid":
      return <FeatureGridSection key={index} section={section} />;
    case "testimonials":
      return <TestimonialSection key={index} section={section} />;
    case "faqs":
      return <FAQSection key={index} section={section} />;
    case "gallery":
      return <GallerySection key={index} section={section} />;
    case "map":
      return <MapSection key={index} section={section} />;
    case "cta":
      return <CTASection key={index} section={section} />;
    case "showcase":
      return <ShowcaseSection key={index} section={section} />;
    case "image-text":
      return <ImageTextSection key={index} section={section} />;
    case "info-bar":
      return <InfoBarSection key={index} section={section} />;
    case "split-content":
      return <SplitContentSection key={index} section={section} />;
    default:
      return null;
  }
}

export function PageRenderer({ sections }: { sections: Section[] }) {
  return <>{sections.map((section, index) => renderSection(section, index))}</>;
}
