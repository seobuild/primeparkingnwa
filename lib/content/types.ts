export type Theme = "light" | "dark" | "white" | "gray";

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  external?: boolean;
}

export interface HeroSection {
  type: "hero";
  backgroundImage?: ImageAsset;
  backgroundVideo?: string; // path to MP4 (e.g. "/video.mp4")
  backgroundOverlay?: number; // 0-1 opacity
  badge?: string;
  preTitle?: string;
  title?: string;
  description?: string;
  buttons?: CTAButton[];
  align?: "left" | "center";
  mapUrl?: string;
  rightImage?: ImageAsset;
}

export interface ContentSection {
  type: "content";
  preTitle?: string;
  title?: string;
  body: string | React.ReactNode;
  align?: "left" | "center";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
  theme?: "light" | "dark";
  mapUrl?: string;
  rightImage?: ImageAsset;
}

export interface Feature {
  image?: ImageAsset;
  icon?: string; // lucide icon name or image src
  title: string;
  description: string;
}

export interface FeatureGridSection {
  type: "feature-grid";
  title?: string;
  features: Feature[];
  columns?: 2 | 3 | 4 | 5;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface TestimonialSection {
  type: "testimonials";
  title?: string;
  testimonials: Testimonial[];
  cta?: CTAButton;
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface FAQSection {
  type: "faqs";
  title?: string;
  items: FAQItem[];
}

export interface GallerySection {
  type: "gallery";
  images: ImageAsset[];
}

export interface MapSection {
  type: "map";
  title?: string;
  address: string;
  mapUrl: string;
}

export interface CTASection {
  type: "cta";
  title: string;
  description?: string;
  buttons: CTAButton[];
}

export interface ImageTextSection {
  type: "image-text";
  image: ImageAsset;
  imagePosition?: "left" | "right";
  preTitle?: string;
  title?: string;
  body: string | React.ReactNode;
  checklist?: string[];
  cta?: CTAButton;
}

export interface ShowcaseItem {
  image: ImageAsset;
  label: string;
  description: string;
}

export interface InfoBarItem {
  icon: string;
  title: string;
  description: string;
}

export interface InfoBarSection {
  type: "info-bar";
  items: InfoBarItem[];
}

export interface ShowcaseSection {
  type: "showcase";
  preTitle?: string;
  title?: string;
  body?: string | React.ReactNode;
  items: ShowcaseItem[];
}

export interface SplitContentSection {
  type: "split-content";
  preTitle?: string;
  title?: string;
  body: string | React.ReactNode;
  directionsUrl?: string;
}

export type Section =
  | HeroSection
  | ContentSection
  | FeatureGridSection
  | TestimonialSection
  | FAQSection
  | GallerySection
  | MapSection
  | CTASection
  | ImageTextSection
  | InfoBarSection
  | ShowcaseSection
  | SplitContentSection;

export interface PageContent {
  slug: string;
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
  sections: Section[];
}

export interface ServiceContent extends PageContent {
  category?: string;
}

export interface LocationContent extends PageContent {
  city: string;
  state: string;
  zip: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  phone?: string;
  email?: string;
  hours?: {
    access: string;
    office: string;
  };
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo: ImageAsset;
  favicon: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    access: string;
    office: string;
  };
  nav: NavItem[];
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  externalLinks: {
    tenantPortal: string;
    rentNow: string;
    unitSizes: string;
    googleReview: string;
  };
  footerNav: FooterNavCategory[];
  seoPages?: SEOPage[];
}

export interface FooterNavCategory {
  title: string;
  links: Link[];
}

export interface SEOPage {
  slug: string;
  title: string;
  targetKeyword?: string;
  pageType?: "service" | "location" | "landing" | "blog" | "faq" | "comparison" | "guide" | "category" | "city" | "neighborhood";
  status?: "planned" | "in_progress" | "ready_for_review" | "published" | "archived";
}
