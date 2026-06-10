import { SplitContentSection as SplitContentSectionType } from "@/lib/content/types";
import { siteConfig } from "@/lib/content/site-config";
import { renderMarkdown } from "@/lib/utils/markdown";

interface Props {
  section: SplitContentSectionType;
}

export default function SplitContentSection({ section }: Props) {
  const { address, phone, hours } = siteConfig;
  const formattedPhone = `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.0!2d-94.1577949!3d36.3582121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c910aeb031c7c3%3A0xf50299de3f21a922!2sPrime%20Parking%20NWA!5e0!3m2!1sen!2sus!4v1";

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Content */}
          <div>
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
            <div className="text-base text-gray-600 leading-relaxed">
              {typeof section.body === "string" ? renderMarkdown(section.body, false) : section.body}
            </div>

            {/* Global NWA Cities */}
            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider text-[#1a365d] mb-3">
                Conveniently located in NW Arkansas:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-sm text-gray-600">
                <span>Rogers, AR — 3 mi</span>
                <span>Bentonville, AR — 10 mi</span>
                <span>Springdale, AR — 12 mi</span>
                <span>Fayetteville, AR — 28 mi</span>
                <span>Lowell, AR — 6 mi</span>
                <span>Centerton, AR — 13 mi</span>
              </div>
            </div>
          </div>

          {/* Right: Location Info */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-5 uppercase tracking-wide">
              Our Location
            </h3>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-gray-200 mb-5">
              <iframe
                src={mapUrl}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Parking NWA Location"
                className="block"
              />
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Address</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  {address.street}<br />
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Phone</p>
                <a href={`tel:${phone}`} className="text-sm text-[#1a365d] font-medium hover:underline mt-0.5 inline-block">
                  {formattedPhone}
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Access Hours</p>
                <p className="text-sm text-gray-600 mt-0.5">{hours.access}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Office Hours</p>
                <p className="text-sm text-gray-600 mt-0.5 whitespace-pre-line">{hours.office}</p>
              </div>
            </div>

            <a
              href={section.directionsUrl || "https://www.google.com/maps/place/Prime+Parking+NWA/@36.3582121,-94.1577949,17z"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full px-5 py-2.5 text-white text-sm font-semibold rounded-full hover:brightness-110 transition-all"
              style={{ background: "linear-gradient(135deg, #1a365d 0%, #2d5a87 50%, #3d7ab8 100%)" }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
