import type { Metadata } from "next";
import { Archivo, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import Analytics from "./components/Analytics";
import { siteConfig } from "@/lib/content/site-config";
import { fetchSiteSettings } from "@/lib/supabase/site-settings";

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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await fetchSiteSettings("primeparkingnwa");

  return {
    title: {
      default: `${siteConfig.name} | ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
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
          url: "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media/aerial2.webp",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Secure paved vehicle storage facility in Rogers, AR`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@primeparkingnwa",
      title: `${siteConfig.name} | ${siteConfig.tagline}`,
      description: siteConfig.description,
      images: [
        "https://lcpndbwqgdvduwneeplr.supabase.co/storage/v1/object/public/prime-parking-media/aerial2.webp",
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
    verification: settings.googleSearchConsoleVerification
      ? { google: settings.googleSearchConsoleVerification }
      : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await fetchSiteSettings("primeparkingnwa");

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <StructuredData />
        <Analytics
          googleAnalyticsId={settings.googleAnalyticsId}
          googleTagManagerId={settings.googleTagManagerId}
          facebookPixelId={settings.facebookPixelId}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
