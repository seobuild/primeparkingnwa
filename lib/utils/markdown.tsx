import React from "react";
import ExternalLinkIcon from "@/app/components/ExternalLinkIcon";

export function isExternalUrl(href: string): boolean {
  if (!href) return false;
  if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;
  return href.startsWith("http") && !href.includes("primeparkingnwa.com");
}

export function parseMarkdownLinks(text: string, isDark: boolean): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  const boldRegex = /\*\*(.+?)\*\*/g;
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  remaining = remaining.replace(boldRegex, "<<<BOLD>>>$1<<<ENDBOLD>>>");
  remaining = remaining.replace(linkRegex, "<<<LINK>>>$1|||$2<<<ENDLINK>>>");

  const tokens = remaining.split(/(<<<BOLD>>>|<<<ENDBOLD>>>|<<<LINK>>>|<<<ENDLINK>>>)/);

  let inLink = false;
  let linkText = "";
  let linkUrl = "";

  for (const token of tokens) {
    if (token === "<<<BOLD>>>") {
      // bold start marker - skip
    } else if (token === "<<<ENDBOLD>>>") {
      // bold end marker - skip
    } else if (token === "<<<LINK>>>") {
      inLink = true;
    } else if (token === "<<<ENDLINK>>>") {
      inLink = false;
      const external = isExternalUrl(linkUrl);
      parts.push(
        <a
          key={key++}
          href={linkUrl}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={`font-bold underline ${isDark ? "text-white hover:text-white/80" : "text-blue-600 hover:text-blue-800"}`}
        >
          {linkText}
          {external && <ExternalLinkIcon className="w-3.5 h-3.5 ml-1" />}
        </a>
      );
      linkText = "";
      linkUrl = "";
    } else if (inLink) {
      const split = token.split("|||");
      linkText = split[0];
      linkUrl = split[1] || "";
    } else if (token) {
      const lines = token.split("\n");
      lines.forEach((line, i) => {
        parts.push(<span key={key++}>{line}</span>);
        if (i < lines.length - 1) {
          parts.push(<br key={key++} />);
        }
      });
    }
  }

  return <>{parts}</>;
}

export function renderMarkdown(body: string | React.ReactNode, isDark: boolean): React.ReactNode {
  if (typeof body !== "string") return body;

  const paragraphs = body.split("\n\n");
  return (
    <>
      {paragraphs.map((para, idx) => {
        if (para.startsWith("## ")) {
          return (
            <h2 key={idx} className={`text-2xl font-bold mt-8 mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              {para.replace("## ", "")}
            </h2>
          );
        }
        if (para.startsWith("**") && para.includes("\n")) {
          const lines = para.split("\n");
          return (
            <div key={idx} className={`rounded-lg p-6 mt-8 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}>
              {lines.map((line, i) => {
                const boldMatch = line.match(/\*\*(.+?)\*\*/);
                if (boldMatch) {
                  return (
                    <p key={i} className="mb-2">
                      <strong>{boldMatch[1]}</strong>
                      {line.replace("**" + boldMatch[1] + "**", "")}
                    </p>
                  );
                }
                return <p key={i} className="mb-2">{line}</p>;
              })}
            </div>
          );
        }
        return (
          <p key={idx} className="mb-4 leading-relaxed">
            {parseMarkdownLinks(para, isDark)}
          </p>
        );
      })}
    </>
  );
}
