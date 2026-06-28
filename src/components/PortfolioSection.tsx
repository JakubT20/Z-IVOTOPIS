"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Filter, Tag, UserRound, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { withBasePath } from "@/lib/site-paths";
import type { PortfolioProject } from "@/types/project";

type PortfolioSectionProps = {
  projects: PortfolioProject[];
};

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Všetko");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const categories = useMemo(() => {
    const projectCategories = Array.from(new Set(projects.map((project) => project.category)));
    return ["Všetko", "Výber", ...projectCategories];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Všetko") {
      return projects;
    }

    if (activeCategory === "Výber") {
      return projects.filter((project) => project.featured);
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  const openProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setActiveImage(project.images[0] ?? project.cover);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(null);
  };

  return (
    <AnimatedSection id="portfolio" tone="surface" className="overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-10 border-y border-black/12 py-8 lg:grid-cols-[0.35fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--accent)]">03 / Portfólio</p>
            <p className="section-number mt-6 text-black/10">03</p>
          </div>
          <div>
            <h2 className="section-title-xl max-w-6xl text-black">
              Veľké vizuály, kampane a obsah pre online prezentáciu.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-black/58">
              Projekty sa automaticky načítavajú z JSON súborov v priečinku content. Stačí pridať nový projektový folder a web ho zobrazí bez úprav komponentov.
            </p>
          </div>
        </div>

        <div className="sticky top-[4.5rem] z-20 mt-8 border-y border-black/12 bg-[var(--studio-paper)]/92 py-3 backdrop-blur">
          <div className="flex max-w-full items-center gap-2 overflow-x-auto">
            <Filter aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--accent)]" />
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 border px-5 py-3 text-xs font-black uppercase transition-colors ${
                  activeCategory === category
                    ? "border-black bg-black text-white"
                    : "border-black/12 bg-white text-black/58 hover:border-[var(--accent)] hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.35 }}
                className={`group overflow-hidden border border-black/12 bg-white ${
                  index % 5 === 0 ? "md:col-span-2 xl:col-span-2" : ""
                } ${index % 5 === 1 ? "xl:row-span-2" : ""}`}
              >
                <button
                  type="button"
                  className="block w-full text-left"
                  onClick={() => openProject(project)}
                >
                  <div
                    className={`relative overflow-hidden ${
                      index % 5 === 1 ? "aspect-[3/4] xl:aspect-[3/5]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={withBasePath(project.cover)}
                      alt={`${project.title} cover`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 38vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent" />
                    {project.featured ? (
                      <span className="absolute left-4 top-4 bg-[var(--accent)] px-3 py-1.5 text-[0.65rem] font-black uppercase text-white">
                        Výber
                      </span>
                    ) : null}
                    <span className="absolute right-4 top-4 font-display text-5xl font-black leading-none text-white/28">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="text-xs font-black uppercase text-[var(--accent)]">
                        {project.category}
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-white sm:text-4xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:p-6">
                    <p className="line-clamp-3 text-sm font-semibold leading-6 text-black/58">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:max-w-48 sm:justify-end">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="border border-black/12 px-2.5 py-1 text-[0.65rem] font-black uppercase text-black/48"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[70] overflow-y-auto bg-black/86 px-4 py-6 backdrop-blur-sm sm:py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Detail projektu ${selectedProject.title}`}
          >
            <motion.div
              className="mx-auto max-w-[1400px] overflow-hidden border border-white/12 bg-[var(--studio-paper)] text-black shadow-2xl"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex items-start justify-between gap-4 border-b border-black/12 px-5 py-5 sm:px-8">
                <div>
                  <p className="text-xs font-black uppercase text-[var(--accent)]">
                    {selectedProject.category}
                  </p>
                  <h3 className="mt-2 max-w-4xl font-display text-4xl font-black uppercase leading-none sm:text-6xl">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="grid h-11 w-11 shrink-0 place-items-center border border-black/14 text-black/60 hover:bg-black hover:text-white"
                  onClick={closeProject}
                  aria-label="Zavrieť detail projektu"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1.28fr_0.72fr]">
                <div className="border-b border-black/12 p-5 sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="relative aspect-[4/3] overflow-hidden bg-black">
                    <Image
                      src={withBasePath(activeImage ?? selectedProject.cover)}
                      alt={`Vybraný vizuál projektu ${selectedProject.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {[selectedProject.cover, ...selectedProject.images].map((image) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveImage(image)}
                        className={`relative aspect-[4/3] overflow-hidden border ${
                          activeImage === image ? "border-[var(--accent)]" : "border-black/12"
                        }`}
                        aria-label={`Zobraziť obrázok projektu ${selectedProject.title}`}
                      >
                        <Image
                          src={withBasePath(image)}
                          alt=""
                          fill
                          sizes="140px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-xl font-bold leading-9 text-black">
                    {selectedProject.description}
                  </p>
                  <dl className="mt-8 grid gap-px bg-black/12">
                    <div className="flex gap-3 bg-white p-4">
                      <UserRound aria-hidden="true" className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                      <div>
                        <dt className="text-xs font-black uppercase text-black/38">Klient</dt>
                        <dd className="mt-1 font-semibold">{selectedProject.client}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3 bg-white p-4">
                      <CalendarDays aria-hidden="true" className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                      <div>
                        <dt className="text-xs font-black uppercase text-black/38">Rok</dt>
                        <dd className="mt-1 font-semibold">{selectedProject.year}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3 bg-white p-4">
                      <Tag aria-hidden="true" className="mt-0.5 h-5 w-5 text-[var(--accent)]" />
                      <div>
                        <dt className="text-xs font-black uppercase text-black/38">Rola</dt>
                        <dd className="mt-1 font-semibold">{selectedProject.role}</dd>
                      </div>
                    </div>
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[var(--accent)] px-3 py-1.5 text-xs font-black uppercase text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </AnimatedSection>
  );
}
