import { TestimonialSection as TestimonialSectionType } from "@/lib/content/types";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

interface Props {
  section: TestimonialSectionType;
}

export default function TestimonialSection({ section }: Props) {
  const testimonials = section.testimonials;

  return (
    <section
      className="py-16 md:py-24 text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a365d 0%, #2d5a87 50%, #3d7ab8 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {section.title && (
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12 md:mb-16">
            {section.title}
          </h2>
        )}

        {/* Masonry columns layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="break-inside-avoid mb-4 md:mb-5 bg-white/85 backdrop-blur-sm rounded-xl p-4 md:p-5 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, sidx) => (
                  <svg
                    key={sidx}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200/60">
                <div className="w-8 h-8 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-xs font-bold">
                  {t.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <p className="text-sm font-semibold text-gray-900">{t.author}</p>
              </div>
            </div>
          ))}
        </div>

        {section.cta && (
          <div className="text-center mt-12 md:mt-16">
            <a
              href={section.cta.href}
              target={section.cta.external ? "_blank" : undefined}
              rel={section.cta.external ? "noopener noreferrer" : undefined}
              className="inline-flex items-center px-6 py-3 bg-white text-[#1a365d] text-base font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              {section.cta.label}
              {section.cta.external && <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5" />}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
