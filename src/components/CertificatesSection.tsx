import { certificates } from "@/data/profile";
import { AnimatedSection } from "@/components/AnimatedSection";

export function CertificatesSection() {
  return (
    <AnimatedSection id="certificates" tone="warm" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1520px] gap-10 lg:grid-cols-[0.35fr_1fr]">
        <div>
          <p className="text-xs font-black uppercase text-[var(--accent)]">06 / Certifikáty</p>
          <h2 className="mt-6 max-w-xl font-display text-5xl font-black uppercase leading-none text-black">
            Kurzy pre grafiku a komunikáciu.
          </h2>
        </div>
        <div className="grid gap-px bg-black/12 sm:grid-cols-2">
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
    </AnimatedSection>
  );
}
