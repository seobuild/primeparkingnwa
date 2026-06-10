import Image from "next/image";
import Link from "next/link";

const parkingOptions = [
  {
    label: "RV Storage",
    href: "/rv-storage",
    image: { src: "/images/rv-parking.avif", alt: "RV storage at Prime Parking NWA" },
  },
  {
    label: "Boat Storage",
    href: "/boat-storage",
    image: { src: "/images/boat-storage.webp", alt: "Boat storage at Prime Parking NWA" },
  },
  {
    label: "Trailer Storage",
    href: "/trailer-storage",
    image: { src: "/images/trailer-storage.avif", alt: "Trailer storage at Prime Parking NWA" },
  },
  {
    label: "Commercial Fleet",
    href: "/commercial-fleet-parking",
    image: { src: "/images/general-storage.avif", alt: "Commercial fleet parking at Prime Parking NWA" },
  },
  {
    label: "Semi Truck Parking",
    href: "/semi-truck-parking",
    image: { src: "/images/semitruck-parking.webp", alt: "Semi truck parking at Prime Parking NWA" },
  },
  {
    label: "Construction Equipment",
    href: "/construction-equipment-storage",
    image: { src: "/images/construction-storage.avif", alt: "Construction equipment storage at Prime Parking NWA" },
  },
];

export default function ParkingOptionsCarousel() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-8 h-0.5 bg-[#1a365d]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#1a365d]">
            Explore More
          </span>
          <div className="w-8 h-0.5 bg-[#1a365d]" />
        </div>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-10 md:mb-12 uppercase tracking-[0.15em] md:tracking-[0.2em]">
          Parking Options at Prime Parking NWA
        </h2>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {parkingOptions.map((opt, idx) => (
            <Link
              key={idx}
              href={opt.href}
              className="group flex items-center gap-4 bg-white rounded-lg border border-gray-200 p-4 hover:border-[#1a365d]/30 hover:shadow-md transition-all"
            >
              <div className="relative w-20 h-14 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                <Image
                  src={opt.image.src}
                  alt={opt.image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="80px"
                />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-gray-900 group-hover:text-[#1a365d] transition-colors">
                {opt.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
