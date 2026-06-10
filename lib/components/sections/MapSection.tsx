import { MapSection as MapSectionType } from "@/lib/content/types";

interface Props {
  section: MapSectionType;
}

export default function MapSection({ section }: Props) {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {section.title && (
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
        )}
        <div className="aspect-video rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src={section.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={section.address}
          />
        </div>
      </div>
    </section>
  );
}
