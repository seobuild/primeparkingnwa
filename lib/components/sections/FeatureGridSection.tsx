import Image from "next/image";
import { FeatureGridSection as FeatureGridSectionType } from "@/lib/content/types";

interface Props {
  section: FeatureGridSectionType;
}

export default function FeatureGridSection({ section }: Props) {
  const hasImages = section.features.some((f) => f.image);

  const gridCols =
    {
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
    }[section.columns || 3] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  if (hasImages) {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {section.title && (
            <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12 md:mb-16">
              {section.title}
            </h2>
          )}
          <div className={`grid ${gridCols} gap-8 md:gap-10`}>
            {section.features.map((feature, idx) => (
              <div key={idx} className="text-center">
                {feature.image && (
                  <div className="relative w-1/2 max-w-[140px] aspect-square mx-auto mb-5">
                    <Image
                      src={feature.image.src}
                      alt={feature.image.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                )}
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-2 max-w-[80%] mx-auto">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed max-w-[80%] mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Text-only cards with accent styling
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {section.title && (
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12 md:mb-16">
            {section.title}
          </h2>
        )}
        <div className={`grid ${gridCols} gap-6 md:gap-8`}>
          {section.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 md:p-8 border-l-4 border-[#1a365d] shadow-sm"
            >
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
