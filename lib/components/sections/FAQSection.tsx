"use client";

import { FAQSection as FAQSectionType } from "@/lib/content/types";
import { renderMarkdown } from "@/lib/utils/markdown";

interface Props {
  section: FAQSectionType;
}

export default function FAQSection({ section }: Props) {
  return (
    <div className="mb-16">
      {section.title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{section.title}</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
        {section.items.map((item, idx) => (
          <div
            key={idx}
            className={`py-6 ${idx < section.items.length - (section.items.length % 2 === 0 ? 2 : 1) ? "border-b border-gray-100" : ""} ${idx % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8"}`}
          >
            <div className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1a365d] text-white flex items-center justify-center text-sm font-bold mt-0.5">
                {idx + 1}
              </span>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {item.question}
                </h3>
                <div className="text-sm text-gray-600 leading-relaxed">
                  {typeof item.answer === "string" ? (
                    <div>{renderMarkdown(item.answer, false)}</div>
                  ) : (
                    item.answer
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
