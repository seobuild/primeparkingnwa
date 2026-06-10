"use client";

import Image from "next/image";
import { HeroSection as HeroSectionType } from "@/lib/content/types";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

interface Props {
  section: HeroSectionType;
}

export default function HeroSection({ section }: Props) {
  const overlayOpacity = section.backgroundOverlay ?? 0.65;
  const hasVideo = !!section.backgroundVideo;
  const hasMap = !!section.mapUrl;
  const hasRightImage = !!section.rightImage;
  const hasRightContent = hasMap || hasRightImage;
  const isLeft = section.align === "left" || hasRightContent;

  return (
    <section className="relative w-full min-h-[66vh] md:min-h-[77vh] flex items-center text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {hasVideo ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={section.backgroundVideo} type="video/mp4" />
            </video>
            {section.backgroundImage && (
              <noscript>
                <Image
                  src={section.backgroundImage.src}
                  alt={section.backgroundImage.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </noscript>
            )}
          </>
        ) : section.backgroundImage ? (
          <Image
            src={section.backgroundImage.src}
            alt={section.backgroundImage.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : null}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div className={`absolute inset-0 ${isLeft ? "bg-gradient-to-r from-black/80 via-black/30 to-transparent" : "bg-gradient-to-t from-black/70 via-black/40 to-black/20"}`} />
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full pt-28 pb-16 md:pt-24 md:pb-20 ${hasMap ? "px-6 sm:px-10 lg:px-16" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"} ${isLeft && !hasMap ? "lg:pl-20" : !isLeft ? "text-center" : ""}`}>
        {hasRightContent ? (
          /* Two-column layout: location page with map/logo */
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!hasMap ? "max-w-6xl" : ""}`}>
            <HeroText section={section} isLeft={isLeft} />
            {hasMap && (
              <div className="hidden lg:block">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/20">
                  <iframe
                    src={section.mapUrl}
                    width="100%"
                    height="380"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Prime Parking NWA Location"
                    className="block"
                  />
                </div>
              </div>
            )}
            {hasRightImage && !hasMap && (
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] max-w-md">
                  {section.rightImage && (
                    <Image
                      src={section.rightImage.src}
                      alt={section.rightImage.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Single-column layout: homepage (centered) and service pages (left-aligned) */
          <div className={`max-w-4xl ${isLeft ? "" : "mx-auto"}`}>
            <HeroText section={section} isLeft={isLeft} />
          </div>
        )}
      </div>
    </section>
  );
}

function HeroText({ section, isLeft }: { section: HeroSectionType; isLeft: boolean }) {
  return (
    <div>
      {/* Badge */}
      {section.badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs font-semibold uppercase tracking-wider mb-6`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          {section.badge}
        </div>
      )}

      {/* Title */}
      {section.title && (
        <h1 className={`font-extrabold uppercase tracking-[0.15em] md:tracking-[0.2em] leading-tight mb-6 ${isLeft ? "text-3xl sm:text-4xl md:text-5xl" : "text-3xl sm:text-4xl md:text-5xl text-center"}`}>
          {section.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
      )}

      {/* Description */}
      {section.description && (
        <p className={`text-base md:text-lg text-gray-200 leading-relaxed mb-8 max-w-xl ${isLeft ? "" : "mx-auto"}`}>
          {section.description}
        </p>
      )}

      {/* Phone number (legacy preTitle) */}
      {section.preTitle && (
        <a
          href={`tel:${section.preTitle.replace(/\D/g, "")}`}
          className={`inline-block text-lg md:text-xl font-medium hover:text-white/90 transition-colors mb-6 ${isLeft ? "" : "mx-auto"}`}
        >
          {section.preTitle}
        </a>
      )}

      {/* Buttons */}
      {section.buttons && section.buttons.length > 0 && (
        <div className={`flex flex-wrap items-center gap-3 ${isLeft ? "" : "justify-center"}`}>
          {section.buttons.map((btn, idx) => {
            const isPrimary = btn.variant === "primary" || (!btn.variant && idx === 0);
            return (
              <a
                key={idx}
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noopener noreferrer" : undefined}
                className={`
                  inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all
                  ${isPrimary
                    ? "text-white hover:brightness-110"
                    : "border border-white/60 text-white hover:bg-white hover:text-gray-900"
                  }
                `}
                style={isPrimary ? { background: "linear-gradient(-45deg, #1a365d 0%, #2d5a87 50%, #3d7ab8 100%)" } : undefined}
              >
                {btn.label}
                {btn.external && <ExternalLinkIcon className="w-3.5 h-3.5" />}
                {!btn.external && isPrimary && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
                {!btn.external && !isPrimary && !btn.href?.startsWith("tel:") && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                )}
                {btn.href?.startsWith("tel:") && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
