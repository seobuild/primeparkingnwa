# Prime Parking NWA - Next.js Content-Driven Site

## Architecture

This site uses a **content-driven page builder** pattern. Instead of hard-coding content in JSX, each page is defined as data in TypeScript files. Reusable section components render the content.

### Why this architecture?
- **Add a new service page** = create 1 content file (`lib/content/services/my-service.ts`)
- **Add a new location page** = create 1 content file (`lib/content/locations/my-city.ts`)
- All content is type-safe, linted, and version-controlled
- No CMS dashboard needed (but one could be added later)
- Design stays perfectly consistent across all pages
- Full static generation for maximum SEO performance

## Project Structure

```
primeparkingnwa/
├── lib/
│   ├── content/
│   │   ├── types.ts              # TypeScript interfaces for content schema
│   │   ├── site-config.ts        # Global config (nav, footer, company info, links)
│   │   ├── index.ts              # Content registry (exports all pages/services/locations)
│   │   ├── pages/                # Static page content
│   │   │   ├── home.ts
│   │   │   ├── location.ts
│   │   │   ├── faqs.ts
│   │   │   └── tenant-login.ts
│   │   ├── services/             # Service page content
│   │   │   ├── rv-boat-storage.ts
│   │   │   └── commercial-fleet-parking.ts
│   │   └── locations/            # Location page content (empty, ready to add)
│   └── components/
│       └── sections/             # Reusable section renderers
│           ├── HeroSection.tsx
│           ├── ContentSection.tsx
│           ├── FeatureGridSection.tsx
│           ├── TestimonialSection.tsx
│           ├── FAQSection.tsx
│           ├── GallerySection.tsx
│           ├── MapSection.tsx
│           ├── CTASection.tsx
│           └── index.tsx          # PageRenderer + renderSection dispatcher
├── app/
│   ├── components/
│   │   ├── Header.tsx            # Uses siteConfig.nav
│   │   ├── Footer.tsx            # Uses siteConfig for contact/hours/social
│   │   └── StructuredData.tsx    # JSON-LD using siteConfig
│   ├── page.tsx                  # Home (renders homePage content)
│   ├── [slug]/page.tsx           # NOT USED - pages have explicit routes
│   ├── location/page.tsx
│   ├── faqs/page.tsx
│   ├── tenant-login-instructions/page.tsx
│   ├── rv-boat-storage/page.tsx
│   ├── commercial-fleet-parking/page.tsx
│   ├── services/[slug]/page.tsx  # Dynamic service pages
│   ├── locations/[slug]/page.tsx # Dynamic location pages
│   ├── sitemap.ts              # Auto-generated from content registry
│   ├── robots.ts               # Uses siteConfig.url
│   └── layout.tsx              # Root layout with SEO metadata
├── next.config.ts
└── vercel.json
```

## Adding a New Page

### 1. Static Page (e.g., About)
Create `lib/content/pages/about.ts`:
```typescript
import { PageContent } from "../types";

export const aboutPage: PageContent = {
  slug: "about",
  title: "About Us",
  description: "Learn about Prime Parking NWA...",
  canonical: "/about",
  sections: [
    {
      type: "hero",
      title: "About Prime Parking NWA",
      description: "Your trusted vehicle storage partner...",
    },
    {
      type: "content",
      body: "Our story begins...",
    },
  ],
};
```

Register it in `lib/content/index.ts`:
```typescript
import { aboutPage } from "./pages/about";

export const allPages: Record<string, PageContent> = {
  [aboutPage.slug]: aboutPage,
  // ...existing pages
};
```

Create `app/about/page.tsx`:
```tsx
import { aboutPage } from "@/lib/content/pages/about";
import { PageRenderer } from "@/lib/components/sections";

export default function AboutPage() {
  return <PageRenderer sections={aboutPage.sections} />;
}
```

### 2. Service Page
Create `lib/content/services/semi-truck-parking.ts`, register in `lib/content/index.ts` under `allServices`. The page will auto-generate at `/services/semi-truck-parking`.

### 3. Location Page
Create `lib/content/locations/fayetteville-ar.ts`, register in `lib/content/index.ts` under `allLocations`. The page will auto-generate at `/locations/fayetteville-ar`.

## Available Section Types

| Type | Props | Description |
|------|-------|-------------|
| `hero` | backgroundImage, title, description, buttons, align | Full-width hero with optional background image |
| `content` | preTitle, title, body, align, maxWidth | Simple text content block |
| `feature-grid` | title, features[], columns | Grid of feature cards with images |
| `testimonials` | title, testimonials[], cta | Grid of testimonial quotes |
| `faqs` | title, items[] | Accordion FAQ list |
| `gallery` | images[] | Image grid gallery |
| `map` | title, address, mapUrl | Google Maps embed |
| `cta` | title, description, buttons[] | Call-to-action banner |

## Build & Deploy

```bash
npm install
npm run dev      # Development server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

## SEO Features
- Meta tags on every page with unique titles/descriptions
- Open Graph & Twitter Card tags
- `sitemap.xml` auto-generated from content registry
- `robots.txt` auto-generated
- LocalBusiness structured data (JSON-LD)
- Semantic HTML, heading hierarchy, alt tags
- Canonical URLs on all pages
- Static generation for all pages
