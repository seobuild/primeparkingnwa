"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { GallerySection as GallerySectionType } from "@/lib/content/types";

interface Props {
  section: GallerySectionType;
}

export default function GallerySection({ section }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const scrollToIndex = useCallback((index: number) => {
    const el = itemRefs.current[index];
    if (el && scrollRef.current) {
      const container = scrollRef.current;
      const containerWidth = container.clientWidth;
      const itemWidth = el.clientWidth;
      const scrollLeft = el.offsetLeft - (containerWidth - itemWidth) / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    setActiveIndex(index);
  }, []);

  const nextSlide = () => {
    const next = (activeIndex + 1) % section.images.length;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = (activeIndex - 1 + section.images.length) % section.images.length;
    scrollToIndex(prev);
  };

  // Sync active index on scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const itemCenter = el.offsetLeft + el.clientWidth / 2;
        const dist = Math.abs(containerCenter - itemCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <section className="bg-white">
      <div className="relative" style={{ height: "50vh", minHeight: "300px" }}>
        {/* Scrollable reel */}
        <div
          ref={scrollRef}
          className={`flex h-full overflow-x-auto scrollbar-hide snap-x snap-mandatory select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {section.images.map((img, idx) => (
            <div
              key={idx}
              ref={(el) => { itemRefs.current[idx] = el; }}
              className="h-full flex-shrink-0 snap-center relative"
              style={{ width: "66.6667vh", minWidth: "300px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 66vh"
                priority={idx === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows - Squarespace style */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="group p-2"
            aria-label="Previous slide"
          >
            <svg className="w-12 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" viewBox="0 0 60 30">
              <path d="M15.9,23.7L7.1,15l8.7-8.7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M52.9,15H8.5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="group p-2"
            aria-label="Next slide"
          >
            <svg className="w-12 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" viewBox="0 0 60 30">
              <path d="M44.1,6.3l8.7,8.7l-8.7,8.7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7.1,15h44.4" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
