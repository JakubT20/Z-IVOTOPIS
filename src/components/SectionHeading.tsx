import type { LucideIcon } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  icon?: LucideIcon;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  icon: Icon,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        {Icon ? (
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
            <Icon aria-hidden="true" className="h-4 w-4" />
          </span>
        ) : null}
        <p className="text-sm font-semibold uppercase text-[var(--accent)]">{eyebrow}</p>
      </div>
      <h2 className="font-display text-3xl font-semibold leading-tight text-current sm:text-4xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-8 text-[color:var(--muted-current)] sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
