import type { Metadata } from "next";
import { Archivo, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import { siteConfig } from "@/lib/content/site-config";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a365d",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "parking NWA",
    "vehicle storage Rogers AR",
    "RV storage Northwest Arkansas",
    "boat storage Rogers",
    "commercial fleet parking",
    "trailer storage Arkansas",
    "paved parking lot",
    "24/7 gated storage",
    "Prime Parking NWA",
    "The Drop Yard NWA",
  ],
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/0c9d9b89-6b89-44cd-9832-e00e922fff63/test+web.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Secure paved vehicle storage facility`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@primeparkingnwa",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      "https://images.squarespace-cdn.com/content/v1/68d2a14ce7ee1775a30339c3/0c9d9b89-6b89-44cd-9832-e00e922fff63/test+web.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: siteConfig.favicon,
        sizes: "100x100",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
