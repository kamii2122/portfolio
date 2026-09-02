import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`mb-12 max-w-2xl ${alignment}`}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-600">
        {eyebrow}
      </p>
      <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-lg font-normal leading-relaxed text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}