interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg text-zinc-400 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
