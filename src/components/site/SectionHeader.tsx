type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeaderProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const textTone = tone === "light" ? "text-white" : "text-[#111111]";
  const mutedTone = tone === "light" ? "text-white/80" : "text-[#2b2b2b]";

  return (
    <div className={`${alignment} max-w-3xl`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF2E2E]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-4xl font-black uppercase tracking-[-0.06em] md:text-6xl ${textTone}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-xl ${mutedTone}`}>{description}</p>
      ) : null}
    </div>
  );
}
