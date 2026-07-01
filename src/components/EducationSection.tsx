import { certificates, education } from "@/data/profile";
import { AnimatedSection } from "@/components/AnimatedSection";

export function EducationSection() {
  return (
    <AnimatedSection id="education" tone="surface" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-10 border-y border-black/12 py-8 lg:grid-cols-[0.35fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--accent)]">05 / Vzdelanie + Certifikáty</p>
            <p className="section-number mt-6 text-black/10">05</p>
          </div>
          <h2 className="section-title-xl max-w-6xl text-black">
            Vzdelanie a kurzy, ktoré podporujú digitálnu tvorbu.
          </h2>
        </div>

        <div className="mt-10 grid gap-10 xl:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-px bg-black/12 lg:grid-cols-2 xl:grid-cols-1">
            {education.map((item, index) => (
              <article
                key={`${item.school}-${item.period}`}
                className="bg-white p-6 sm:p-8"
              >
                <p className="text-xs font-black uppercase text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")} / {item.period}
                </p>
                <h3 className="mt-5 font-display text-3xl font-black uppercase leading-none text-black">
                  {item.school}
                </h3>
                <p className="mt-4 text-base font-bold text-black/58">{item.field}</p>
                {item.details.length > 0 ? (
                  <ul className="mt-6 space-y-3">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-sm font-semibold text-black/58">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>

          <div>
            <p className="mb-5 text-xs font-black uppercase text-[var(--accent)]">Certifikáty</p>
            <div className="grid gap-px bg-black/12 sm:grid-cols-2 xl:grid-cols-1">
              {certificates.map((certificate, index) => (
                <div
                  key={certificate}
                  className="bg-white p-6"
                >
                  <p className="text-xs font-black uppercase text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-5 text-lg font-black uppercase leading-7 text-black">
                    {certificate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
