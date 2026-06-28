import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { aboutSummary } from "@/data/profile";

export function AboutSection() {
  return (
    <AnimatedSection id="about" tone="warm" className="overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-10 border-b border-black/12 pb-12 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-xs font-black uppercase text-[var(--accent)]">01 / O mne</p>
            <p className="section-number mt-6 text-black/10">01</p>
          </div>
          <h2 className="section-title-xl max-w-5xl text-black">
            Kreatívna práca postavená na použiteľných vizuálnych výstupoch.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:items-start">
          <div className="border-t border-black/12 pt-5">
            <div className="w-full max-w-[360px] pb-5 pr-5 lg:max-w-[330px] xl:max-w-[360px]">
              <div className="relative aspect-[654/816]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[7px] bg-[var(--accent)]" aria-hidden="true" />
                <Image
                  src="/about-jakub.jpg"
                  alt="Jakub Trnka"
                  fill
                  sizes="(min-width: 1280px) 360px, (min-width: 1024px) 28vw, 90vw"
                  className="relative rounded-[7px] object-cover shadow-[0_24px_70px_rgba(18,18,15,0.2)]"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-5xl space-y-7">
              {aboutSummary.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-2xl font-bold leading-10 text-black sm:text-3xl sm:leading-[1.35]"
                      : "text-xl font-semibold leading-9 text-black/76 sm:text-2xl sm:leading-10"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-12 grid gap-px bg-black/12 md:grid-cols-3">
              {[
                "Tlačová a online grafika",
                "AI asistované vizuálne koncepty",
                "Sociálne siete, video a webový obsah"
              ].map((item) => (
                <div key={item} className="bg-white p-6">
                  <p className="text-sm font-black uppercase leading-6 text-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
