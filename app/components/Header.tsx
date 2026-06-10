"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content/site-config";
import ExternalLinkIcon from "./ExternalLinkIcon";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = isHome ? "text-white" : "text-gray-900";
  const hoverColor = isHome ? "hover:text-white/80" : "hover:text-[#1a365d]";
  const ctaStyle = isHome
    ? "bg-white text-gray-900 border-white hover:bg-gray-100"
    : "bg-white text-gray-900 border-gray-900 hover:bg-gray-100";
  const bgClass = isHome ? "absolute top-0 left-0 right-0 z-50" : "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100";
  const mobileBg = isHome ? "bg-black/95" : "bg-white";
  const mobileText = isHome ? "text-white" : "text-gray-900";
  const mobileSubText = isHome ? "text-white/60" : "text-gray-500";
  const mobileCtaBorder = isHome
    ? "border-white text-white hover:bg-white hover:text-gray-900"
    : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white";
  const navTextSize = isHome ? "text-base" : "text-sm";

  return (
    <>
      <header className={bgClass}>
        <a
          href="#page"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900"
        >
          Skip to Content
        </a>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop: logo left, nav center, CTA right */}
          <div className="hidden md:flex items-center justify-between py-4">
            {/* Left: Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width || 200}
                height={siteConfig.logo.height || 60}
                className="h-20 w-auto"
                priority
              />
            </Link>

            {/* Center: Nav */}
            <nav className="flex items-center space-x-6">
              {siteConfig.nav.map((item, idx) =>
                item.children ? (
                  <div key={idx} className="relative group">
                    <button
                      className={`${navTextSize} font-medium ${textColor} ${hoverColor} transition-colors flex items-center`}
                    >
                      {item.label}
                      <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white rounded-md shadow-lg border border-gray-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150">
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          href={child.href}
                          className={`block px-4 py-2 ${navTextSize} text-gray-700 hover:bg-gray-50`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={item.href}
                    className={`${navTextSize} font-medium ${textColor} ${hoverColor} transition-colors`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right: CTA */}
            <a
              href={siteConfig.externalLinks.tenantPortal}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-5 py-2.5 border ${navTextSize} font-medium rounded-full transition-colors ${ctaStyle}`}
            >
              TENANT PORTAL
              <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>

          {/* Mobile: logo center, hamburger left, CTA right */}
          <div className="flex md:hidden items-center justify-between py-4">
            <button
              className={`p-2 ${textColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
              </svg>
            </button>

            <Link href="/" className="flex-shrink-0">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width || 200}
                height={siteConfig.logo.height || 60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <a
              href={siteConfig.externalLinks.tenantPortal}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-medium border px-3 py-1.5 rounded-full ${ctaStyle}`}
            >
              PORTAL
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileOpen && (
          <div className={`md:hidden fixed inset-0 z-50 ${mobileBg} backdrop-blur-sm`}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-4">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src={siteConfig.logo.src}
                    alt={siteConfig.logo.alt}
                    width={siteConfig.logo.width || 200}
                    height={siteConfig.logo.height || 60}
                    className="h-12 w-auto"
                    priority
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className={`p-2 ${mobileText}`}
                  aria-label="Close menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex-1 flex flex-col items-center justify-center space-y-6 px-4">
                {siteConfig.nav.map((item, idx) =>
                  item.children ? (
                    <div key={idx} className="text-center">
                      <span className={`text-lg font-medium ${mobileSubText} block mb-3`}>
                        {item.label}
                      </span>
                      <div className="space-y-2">
                        {item.children.map((child, cidx) => (
                          <Link
                            key={cidx}
                            href={child.href}
                            className={`block text-base ${mobileText} hover:opacity-80`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`text-xl font-medium ${mobileText} hover:opacity-80`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <a
                  href={siteConfig.externalLinks.tenantPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center gap-1 px-6 py-3 border text-base font-medium rounded-full transition-colors bg-white text-gray-900 border-white hover:bg-gray-100`}
                  onClick={() => setMobileOpen(false)}
                >
                  TENANT PORTAL
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
