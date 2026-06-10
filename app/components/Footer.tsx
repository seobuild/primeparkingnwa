import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content/site-config";
import ExternalLinkIcon from "./ExternalLinkIcon";

function isExternalUrl(href: string): boolean {
  if (!href) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  return href.startsWith("http") && !href.includes("primeparkingnwa.com");
}

export default function Footer() {
  const { address, hours, phone, social } = siteConfig;
  const formattedPhone = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  const googleMapsUrl = "https://www.google.com/maps/place/Prime+Parking+NWA/data=!4m2!3m1!1s0x0:0xf50299de3f21a922?sa=X&ved=1t:2428&ictx=111";

  return (
    <footer className="bg-white text-gray-900">
      {/* Top CTA Bar */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a365d 0%, #2d5a87 50%, #3d7ab8 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">
                Ready to rent your space?
              </p>
              <h2 className="text-white text-2xl md:text-3xl font-bold">
                Secure parking in NWA starts here
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#1a365d] font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {formattedPhone}
              </a>
              <a
                href={siteConfig.externalLinks.rentNow}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-[#1a365d] transition-colors"
              >
                Rent Online
                <ExternalLinkIcon className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand + Contact Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={siteConfig.logo.width || 180}
                height={siteConfig.logo.height || 54}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-xs">
              Secure, fully paved outdoor parking and vehicle storage in Rogers, AR.
              RV, boat, commercial fleet, and trailer storage with 24/7 gated access.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href={`tel:${phone}`}
                className="flex items-center text-gray-900 hover:text-[#1a365d] transition-colors font-medium"
              >
                <svg className="w-4 h-4 mr-2 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {formattedPhone}
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-900 hover:text-[#1a365d] transition-colors"
              >
                <svg className="w-4 h-4 mr-2 mt-0.5 text-[#1a365d] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  {address.street}<br />
                  {address.city}, {address.state} {address.zip}
                </span>
                <ExternalLinkIcon className="w-3 h-3 ml-1 mt-0.5 flex-shrink-0" />
              </a>
              <p className="flex items-center text-gray-500">
                <svg className="w-4 h-4 mr-2 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs">Access: {hours.access}</span>
              </p>
            </div>


          </div>

          {/* Sitemap Columns */}
          {siteConfig.footerNav.map((category, idx) => (
            <div key={idx} className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.links.map((link, lidx) => {
                  const external = link.external || isExternalUrl(link.href);
                  return (
                    <li key={lidx}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-gray-600 hover:text-[#1a365d] transition-colors"
                        >
                          {link.label}
                          <ExternalLinkIcon className="w-3 h-3 ml-1" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-gray-600 hover:text-[#1a365d] transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            {/* Left: Office Hours */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1a365d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Office:</span>
              <span className="text-gray-700">{hours.office.replace("\n", " · ")}</span>
            </div>

            {/* Center: Review + Socials */}
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.externalLinks.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#1a365d] transition-colors"
              >
                <span className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
                <span className="font-medium">Review</span>
              </a>

              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#1a365d] transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#1a365d] transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#1a365d] transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Right: Copyright + Admin Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs">&copy; {new Date().getFullYear()} {siteConfig.name}</span>
              <span className="text-gray-300">|</span>
              <Link href="/privacy-policy" className="text-xs hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link href="/terms-of-service" className="text-xs hover:text-gray-900 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="text-xs hover:text-gray-900 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
