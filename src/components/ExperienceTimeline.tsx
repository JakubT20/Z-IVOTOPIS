"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { experience } from "@/data/profile";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ExperienceTimeline() {
  return (
    <AnimatedSection id="experience" tone="warm" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-10 border-y border-black/12 py-8 lg:grid-cols-[0.35fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--accent)]">04 / Skúsenosti</p>
            <p className="section-number mt-6 text-black/10">04</p>
          </div>
          <h2 className="section-title-xl max-w-6xl text-black">
            Praktická tvorba pre značky, realitné projekty a online obsah.
          </h2>
        </div>

        <div className="mt-10">
          <div className="divide-y divide-black/12 border-b border-black/12">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                className="grid gap-6 py-8 md:grid-cols-[0.22fr_0.38fr_1fr] md:px-4"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <div>
                  <span className="font-display text-6xl font-black leading-none text-black/12">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-black uppercase leading-none text-black">
                    {item.company}
                  </h3>
                  <p className="mt-4 text-sm font-black uppercase leading-6 text-[var(--accent)]">
                    {item.role}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 border border-black/12 px-3 py-2 text-xs font-black uppercase text-black/52">
                    <CalendarDays aria-hidden="true" className="h-4 w-4" />
                    {item.period}
                  </div>
                </div>
                <ul className="grid gap-3 md:grid-cols-2">
                  {item.description.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-semibold leading-6 text-black/58">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
