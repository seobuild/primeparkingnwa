"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content/site-config";
import ExternalLinkIcon from "./ExternalLinkIcon";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState<number | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const textColor = isHome ? "text-white" : "text-gray-900";
  const hoverColor = isHome ? "hover:text-white/80" : "hover:text-[#1a365d]";
  const ctaStyle = isHome
    ? "bg-white text-gray-900 border-white hover:bg-gray-100"
    : "bg-white text-gray-900 border-gray-900 hover:bg-gray-100";
  const bgClass = isHome ? "absolute top-0 left-0 right-0 z-50" : "sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100";
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

          {/* Mobile: hamburger left, logo center, CTA right */}
          <div className="flex md:hidden items-center justify-between py-3">
            <button
              className={`p-2 -ml-2 ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <Link href="/" className="flex-shrink-0">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width || 200}
                height={siteConfig.logo.height || 60}
                className="h-10 w-auto"
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
      </header>

      {/* Mobile Nav Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500">
              Menu
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-gray-900"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {siteConfig.nav.map((item, idx) =>
                item.children ? (
                  <li key={idx}>
                    <button
                      className="w-full flex items-center justify-between py-3 text-lg font-medium text-gray-900"
                      onClick={() => setExpandedDropdown(expandedDropdown === idx ? null : idx)}
                      aria-expanded={expandedDropdown === idx}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                          expandedDropdown === idx ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        expandedDropdown === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="pl-4 pb-2 space-y-1 border-l-2 border-gray-100 ml-1">
                        {item.children.map((child, cidx) => (
                          <li key={cidx}>
                            <Link
                              href={child.href}
                              className="block py-2.5 text-[15px] text-gray-600 hover:text-[#1a365d] transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block py-3 text-lg font-medium text-gray-900 hover:text-[#1a365d] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Bottom actions */}
          <div className="px-5 py-5 border-t border-gray-100 space-y-3 bg-gray-50/50">
            <a
              href={siteConfig.externalLinks.tenantPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#1a365d] text-white font-medium rounded-full hover:bg-[#1a365d]/90 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              TENANT PORTAL
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#1a365d] text-[#1a365d] font-medium rounded-full hover:bg-[#1a365d] hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              ({siteConfig.phone.slice(0, 3)}) {siteConfig.phone.slice(3, 6)}-{siteConfig.phone.slice(6)}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
