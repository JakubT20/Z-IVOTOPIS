"use client";

import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/site-paths";

type CatalogItem = {
  title: string;
  description: string;
  tags: string[];
  pdf: string;
  cover: string;
  coverAlt: string;
};

const catalogs: CatalogItem[] = [
  {
    title: "Predmestie",
    description:
      "Vizuálny katalóg pre mestský developerský projekt v Bratislave. Prezentuje moderné bývanie, výhody lokality, harmonogram projektu, parkovanie a dispozičné riešenia bytov.",
    tags: ["Realitný katalóg", "Developerský projekt", "Byty"],
    pdf: "/assets/catalogy/predmestie-katalog.pdf",
    cover: "/assets/catalogy/predmestie-cover.webp",
    coverAlt: "Obálka realitného katalógu Predmestie",
  },
  {
    title: "Ceravia",
    description:
      "Prezentačný katalóg rezidenčného projektu v Stupave. Obsahuje vizuálnu prezentáciu bývania, lokalitu, benefity projektu, bytové domy, rodinné domy a pôdorysné riešenia.",
    tags: ["Rezidenčný projekt", "Katalóg", "Byty a domy"],
    pdf: "/assets/catalogy/ceravia-katalog.pdf",
    cover: "/assets/catalogy/ceravia-cover.webp",
    coverAlt: "Obálka prezentačného katalógu Ceravia",
  },
];

function CatalogCover({ catalog }: { catalog: CatalogItem }) {
  const [showCover, setShowCover] = useState(true);

  if (!showCover) {
    return (
      <div className="grid h-full place-items-end bg-[linear-gradient(135deg,#111111_0%,#261108_54%,#ff6a00_100%)] p-6 text-white sm:p-8">
        <div>
          <p className="text-xs font-black uppercase text-white/58">Realitný katalóg</p>
          <p className="mt-3 font-display text-5xl font-black uppercase leading-none sm:text-6xl">
            {catalog.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={withBasePath(catalog.cover)}
      alt={catalog.coverAlt}
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      onError={() => setShowCover(false)}
    />
  );
}

export function RealEstateCatalogsSection() {
  return (
    <section
      id="catalogs"
      className="scroll-mt-24 overflow-hidden bg-[var(--surface)] px-5 py-24 text-[var(--text-primary)] sm:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-10 border-y border-black/12 py-8 lg:grid-cols-[0.35fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase text-[var(--accent)]">Portfólio / Katalógy</p>
            <p className="section-number mt-6 text-black/10">PDF</p>
          </div>
          <div>
            <h2 className="section-title-xl max-w-6xl text-black">
              Realitné katalógy a predajné materiály
            </h2>
            <p className="mt-6 max-w-4xl text-lg font-semibold leading-8 text-black/58">
              Ukážky vizuálnych katalógov pre developerské a realitné projekty - od prezentácie lokality, benefitov a vizualizácií až po dispozičné riešenia bytov a domov.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {catalogs.map((catalog) => (
            <article
              key={catalog.title}
              className="group overflow-hidden border border-black/12 bg-white transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_24px_70px_rgba(18,18,15,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <CatalogCover catalog={catalog} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/64 via-black/5 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <p className="text-xs font-black uppercase text-[var(--accent)]">
                    Realitný katalóg
                  </p>
                  <h3 className="mt-3 font-display text-5xl font-black uppercase leading-none text-white sm:text-6xl">
                    {catalog.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 sm:p-7">
                <p className="max-w-3xl text-base font-semibold leading-8 text-black/60">
                  {catalog.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {catalog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/12 px-2.5 py-1 text-[0.65rem] font-black uppercase text-black/48"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <a
                    href={withBasePath(catalog.pdf)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-[var(--accent)] px-5 py-4 text-sm font-black uppercase text-white transition-colors hover:bg-black"
                  >
                    Prezrieť katalóg
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                  </a>
                  <a
                    href={withBasePath(catalog.pdf)}
                    download
                    className="inline-flex items-center justify-center gap-3 border border-black/16 px-5 py-4 text-sm font-black uppercase text-black transition-colors hover:border-black hover:bg-black hover:text-white"
                  >
                    Stiahnuť PDF
                    <Download aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
