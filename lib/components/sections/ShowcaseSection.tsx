"use client";

import Image from "next/image";
import { ShowcaseSection as ShowcaseSectionType } from "@/lib/content/types";
import UnsplashAttribution from "@/app/components/UnsplashAttribution";

interface Props {
  section: ShowcaseSectionType;
}

export default function ShowcaseSection({ section }: Props) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text content */}
          <div className="lg:sticky lg:top-32">
            {section.preTitle && (
              <p className="text-sm font-semibold uppercase tracking-wider text-[#1a365d] mb-3">
                {section.preTitle}
              </p>
            )}
            {section.title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {section.title}
              </h2>
            )}
            {section.body && (
              <div className="text-lg text-gray-600 leading-relaxed">
                {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
              </div>
            )}
          </div>

          {/* Right: Image stack */}
          <div className="space-y-8">
            {section.items.map((item, idx) => (
              <div key={idx} className="group">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                    <UnsplashAttribution src={item.image.src} dark />
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-bold text-gray-900">{item.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
