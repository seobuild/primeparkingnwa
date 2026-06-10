import { CTASection as CTASectionType } from "@/lib/content/types";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

interface Props {
  section: CTASectionType;
}

export default function CTASection({ section }: Props) {
  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
        {section.description && (
          <p className="text-lg text-gray-300 mb-8">{section.description}</p>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          {section.buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.href}
              target={btn.external ? "_blank" : undefined}
              rel={btn.external ? "noopener noreferrer" : undefined}
              className={`
                inline-flex items-center px-6 py-3 text-base font-medium rounded-full transition-all
                ${btn.variant === "primary" ? "text-white hover:brightness-110" : ""}
                ${btn.variant === "secondary" ? "bg-white text-gray-900 hover:bg-gray-100" : ""}
                ${btn.variant === "outline" ? "border border-white text-white hover:bg-white hover:text-gray-900" : ""}
              `}
              style={btn.variant === "primary" ? { background: "linear-gradient(-45deg, #1a365d 0%, #2d5a87 50%, #3d7ab8 100%)" } : undefined}
            >
              {btn.label}
              {btn.external && <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5" />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
