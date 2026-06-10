export function isUnsplashUrl(src: string): boolean {
  return src.includes("images.unsplash.com");
}

interface Props {
  src: string;
  dark?: boolean;
}

export default function UnsplashAttribution({ src, dark }: Props) {
  if (!isUnsplashUrl(src)) return null;

  const textClass = dark ? "text-white/60 hover:text-white/80" : "text-gray-400 hover:text-gray-500";

  return (
    <span className={`text-[10px] mt-1 block ${textClass}`}>
      Image courtesy of{" "}
      <a
        href="https://unsplash.com"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Unsplash
      </a>{" "}
      (free-to-use license)
    </span>
  );
}
