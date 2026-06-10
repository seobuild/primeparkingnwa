import Image from "next/image";
import { ImageTextSection as ImageTextSectionType } from "@/lib/content/types";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

interface Props {
  section: ImageTextSectionType;
}

export default function ImageTextSection({ section }: Props) {
  const isLeft = section.imagePosition === "left";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className={`${isLeft ? "lg:order-1" : "lg:order-2"}`}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`${isLeft ? "lg:order-2" : "lg:order-1"}`}>
            {section.preTitle && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-[#1a365d]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1a365d]">
                  {section.preTitle}
                </span>
              </div>
            )}
            {section.title && (
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 uppercase tracking-tight">
                {section.title}
              </h2>
            )}
            <div className="text-base text-gray-600 leading-relaxed mb-6">
              {typeof section.body === "string" ? <p>{section.body}</p> : section.body}
            </div>

            {/* Checklist */}
            {section.checklist && section.checklist.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {section.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-[#1a365d] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            {section.cta && (
              <a
                href={section.cta.href}
                target={section.cta.external ? "_blank" : undefined}
                rel={section.cta.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-6 py-3 text-white text-sm font-semibold rounded-full hover:brightness-110 transition-all"
                style={{ background: "linear-gradient(135deg, #1a365d 0%, #2d5a87 50%, #3d7ab8 100%)" }}
              >
                {section.cta.label}
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
