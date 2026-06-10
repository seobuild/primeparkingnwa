import Image from "next/image";
import { ContentSection as ContentSectionType } from "@/lib/content/types";
import { renderMarkdown } from "@/lib/utils/markdown";

interface Props {
  section: ContentSectionType;
}

export default function ContentSection({ section }: Props) {
  const maxWidthClass =
    {
      sm: "max-w-xl",
      md: "max-w-2xl",
      lg: "max-w-4xl",
      xl: "max-w-6xl",
      full: "max-w-none",
    }[section.maxWidth || "lg"] || "max-w-4xl";

  const isDark = section.theme === "dark";
  const isLeft = section.align === "left";
  const hasRightImage = !!section.rightImage;

  return (
    <section className={`${isDark ? "py-12 md:py-16 text-white" : "py-16 md:py-24 bg-white"}`} style={isDark ? { backgroundColor: "#1c1c1c" } : undefined}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass}`}>
        {/* Header + Logo row */}
        <div className={`${hasRightImage ? "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-8" : ""}`}>
          {(section.preTitle || section.title) && (
            <h1
              className={`text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] leading-tight ${
                isLeft || hasRightImage ? "text-left" : "text-center"
              } ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {section.preTitle && (
                <>
                  {section.preTitle}
                  {section.title && <br />}
                </>
              )}
              {section.title}
            </h1>
          )}

          {hasRightImage && (
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-[4/3] max-w-[16rem]">
                {section.rightImage && (
                  <Image
                    src={section.rightImage.src}
                    alt={section.rightImage.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                )}
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div
          className={`text-lg ${isDark ? "text-gray-200" : "text-gray-700"} ${
            hasRightImage ? "text-left" : isLeft ? "text-left" : "text-justify"
          }`}
        >
          {renderMarkdown(section.body, isDark)}
        </div>

        {/* Map */}
        {section.mapUrl && (
          <div className="mt-10 md:mt-12">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={section.mapUrl}
                width="100%"
                height="400"
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
      </div>
    </section>
  );
}
