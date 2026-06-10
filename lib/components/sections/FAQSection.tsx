"use client";

import { FAQSection as FAQSectionType } from "@/lib/content/types";
import { renderMarkdown } from "@/lib/utils/markdown";

interface Props {
  section: FAQSectionType;
  id?: string;
}

export default function FAQSection({ section, id }: Props) {
  return (
    <div id={id} className="mb-16 scroll-mt-28">
      {section.title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">{section.title}</h2>
      )}
      <div className="space-y-0">
        {section.items.map((item, idx) => (
          <div
            key={idx}
            className={`py-6 ${idx < section.items.length - 1 ? "border-b border-gray-100" : ""}`}
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
