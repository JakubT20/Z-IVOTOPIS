import { skillGroups } from "@/data/profile";
import { AnimatedSection } from "@/components/AnimatedSection";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" tone="dark" className="overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-10 border-y border-white/12 py-8 lg:grid-cols-[0.35fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--accent)]">02 / Služby</p>
            <p className="mt-4 max-w-xs text-sm font-semibold leading-6 text-white/54">
              Vizuálne riešenia pre značky, projekty a online prezentácie, ktoré potrebujú charakter a jasný výraz.
            </p>
          </div>
          <h2 className="section-title-xl max-w-5xl text-white">
            Grafika, AI vizuály a obsah pripravený zaujať.
          </h2>
        </div>

        <div className="mt-0 divide-y divide-white/12 border-b border-white/12">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={group.title}
                className="group grid gap-6 py-8 transition-colors duration-300 hover:bg-white/[0.035] md:grid-cols-[0.22fr_0.3fr_1fr] md:items-start md:px-4"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-6xl font-black leading-none text-white/24 transition-colors group-hover:text-[var(--accent)]">
                    {number}
                  </span>
                  <span className="grid h-11 w-11 place-items-center border border-white/16 text-[var(--accent)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="font-display text-3xl font-black uppercase leading-none text-white md:text-4xl">
                  {group.title}
                </h3>
                <p className="max-w-3xl text-base font-semibold leading-8 text-white/64 md:text-lg">
                  {group.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
