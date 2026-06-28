"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";
import { highlights, positioning } from "@/data/profile";
import { withBasePath } from "@/lib/site-paths";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-black px-5 pb-8 pt-24 text-white sm:px-8 lg:pt-28"
    >
      <Image
        src={withBasePath("/hero-jakub-studio.jpg")}
        alt="Jakub Trnka hero portrait"
        fill
        sizes="100vw"
        className="object-cover object-[30%_50%] sm:object-[24%_50%] lg:object-[32%_50%]"
        loading="eager"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.34)_36%,rgba(0,0,0,0.06)_64%,rgba(0,0,0,0.32)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.44)_0%,transparent_34%,rgba(0,0,0,0.76)_100%)]" aria-hidden="true" />
      <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1520px] content-between gap-8">
        <div className="flex items-center justify-between border-y border-white/18 py-3 text-[0.68rem] font-black uppercase text-white/75">
          <span>01 / Kreatívne portfólio</span>
          <span className="hidden lg:block">Grafický dizajn / AI vizuály / video / web obsah</span>
          <span>Slovensko</span>
        </div>

        <div className="grid min-h-[58vh] items-end gap-10 pt-[34vh] sm:pt-0 lg:grid-cols-[minmax(320px,0.46fr)_minmax(0,0.54fr)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[21rem] sm:max-w-[22rem] lg:max-w-[42rem]"
        >
          <div className="mb-8 hidden max-w-[22rem] items-center gap-3 border border-white/20 bg-white/[0.035] px-4 py-3 text-sm font-bold leading-6 text-white/82 backdrop-blur-sm sm:inline-flex lg:max-w-[30rem]">
            <span className="h-3 w-3 bg-[var(--accent)]" />
            {positioning}
          </div>

          <p className="mb-4 text-sm font-black uppercase text-white/62">
            Kreatívny digitálny tvorca
          </p>
          <h1 className="editorial-title max-w-[21rem] text-white lg:max-w-3xl">
            Jakub
            <span className="studio-outline block text-white">Trnka</span>
          </h1>
          <p className="mt-6 max-w-[22rem] text-lg font-semibold leading-8 text-white/82 sm:text-xl sm:leading-9 lg:max-w-[30rem]">
            Grafický dizajn, AI vizuály, video obsah, správa WordPressu a obsah pre sociálne siete.
          </p>

          <div className="mt-7 grid max-w-[22rem] grid-cols-2 gap-3 lg:max-w-[39rem] lg:grid-cols-[1.25fr_1fr_1.15fr]">
            <a
              href="#portfolio"
              className="col-span-2 inline-flex items-center justify-center gap-2 bg-[var(--accent)] px-5 py-4 text-sm font-black uppercase text-white shadow-[0_18px_55px_rgba(255,106,0,0.28)] transition-transform duration-300 hover:-translate-y-0.5 lg:col-span-1 lg:whitespace-nowrap lg:px-6"
            >
              Pozrieť portfólio
              <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href={withBasePath("/Jakub-Trnka-CV.pdf")}
              download
              className="inline-flex items-center justify-center gap-2 border border-white/24 px-4 py-4 text-xs font-black uppercase text-white transition-colors hover:bg-white hover:text-black sm:text-sm lg:whitespace-nowrap lg:px-6"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Stiahnuť CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/24 px-4 py-4 text-xs font-black uppercase text-white transition-colors hover:bg-white/10 sm:text-sm lg:whitespace-nowrap lg:px-6"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Kontaktovať ma
            </a>
          </div>

          <div className="mt-8 grid max-w-[22rem] gap-px bg-white/15 lg:max-w-[31rem] lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="bg-black/45 p-4 backdrop-blur">
                <p className="text-[0.65rem] font-black uppercase text-white/42">{item.label}</p>
                <p className="mt-3 text-sm font-black uppercase text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="hidden lg:block" aria-hidden="true" />
        </div>

        <div className="marquee-row border-t border-white/18 pt-4 text-[clamp(2.5rem,9vw,8rem)] font-black uppercase leading-none text-white/12">
          <span>Dizajn / AI vizuály / Video / WordPress / Sociálny obsah / </span>
          <span>Dizajn / AI vizuály / Video / WordPress / Sociálny obsah / </span>
        </div>
      </div>
    </section>
  );
}
