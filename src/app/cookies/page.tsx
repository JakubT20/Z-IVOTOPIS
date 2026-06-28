import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { SiteFooter } from "@/components/SiteFooter";
import { withBasePath } from "@/lib/site-paths";

export const metadata: Metadata = {
  title: "Cookies | Jakub Trnka",
  description: "Informácie o používaní cookies a lokálneho úložiska na webe Jakuba Trnku."
};

export default function CookiesPage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--studio-paper)] px-5 py-8 text-black sm:px-8">
        <div className="mx-auto max-w-[1160px]">
          <header className="flex items-center justify-between border-b border-black/12 pb-6">
            <Link href="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center overflow-hidden bg-white p-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                <Image src={withBasePath("/logo-jt-2.png")} alt="" width={44} height={44} className="h-full w-full object-contain" />
              </span>
              <span className="text-sm font-black uppercase">Jakub Trnka</span>
            </Link>
            <Link
              href="/"
              className="border border-black/14 px-4 py-3 text-xs font-black uppercase transition-colors hover:bg-black hover:text-white"
            >
              Späť na web
            </Link>
          </header>

          <section className="py-16 lg:py-24">
            <p className="text-xs font-black uppercase text-[var(--accent)]">Cookies</p>
            <h1 className="section-title-xl mt-5 max-w-5xl text-black">Zásady používania cookies.</h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-9 text-black/70">
              Táto stránka vysvetľuje, ako web Jakuba Trnku používa cookies a lokálne úložisko. Web je prezentačné
              portfólio a aktuálne nepoužíva reklamné ani analytické nástroje tretích strán.
            </p>
          </section>

          <section className="grid gap-6 border-t border-black/12 py-12 md:grid-cols-[0.35fr_1fr]">
            <h2 className="text-sm font-black uppercase text-black/48">Prevádzkovateľ</h2>
            <div className="space-y-3 text-lg font-semibold leading-8 text-black/74">
              <p>Jakub Trnka</p>
              <p>Slovensko</p>
              <p>
                Kontakt:{" "}
                <a href="mailto:trnkakubo9@gmail.com" className="font-black text-black underline decoration-[var(--accent)]">
                  trnkakubo9@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section className="grid gap-6 border-t border-black/12 py-12 md:grid-cols-[0.35fr_1fr]">
            <h2 className="text-sm font-black uppercase text-black/48">Čo používame</h2>
            <div className="grid gap-4">
              {[
                {
                  title: "Nevyhnutné uloženie voľby cookies",
                  text: "Web si v prehliadači zapamätá, či si cookies prijal, odmietol alebo nastavil. Táto voľba je uložená v lokálnom úložisku prehliadača pod názvom jakub-trnka-cookie-consent."
                },
                {
                  title: "Analytické cookies",
                  text: "Aktuálne nie sú zapnuté. Ak sa neskôr pridá napríklad meranie návštevnosti, spustí sa iba po tvojom súhlase."
                },
                {
                  title: "Marketingové cookies",
                  text: "Web aktuálne nepoužíva reklamné alebo remarketingové cookies."
                }
              ].map((item) => (
                <article key={item.title} className="bg-white p-6">
                  <h3 className="text-xl font-black uppercase">{item.title}</h3>
                  <p className="mt-3 text-base font-semibold leading-7 text-black/66">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 border-t border-black/12 py-12 md:grid-cols-[0.35fr_1fr]">
            <h2 className="text-sm font-black uppercase text-black/48">Ako zmeniť súhlas</h2>
            <div>
              <p className="max-w-3xl text-lg font-semibold leading-8 text-black/72">
                Svoj súhlas môžeš zmeniť cez tlačidlo nižšie. V nastaveniach prehliadača môžeš tiež vymazať lokálne
                úložisko alebo cookies pre tento web.
              </p>
              <CookieSettingsButton />
            </div>
          </section>

          <section className="grid gap-6 border-t border-black/12 py-12 md:grid-cols-[0.35fr_1fr]">
            <h2 className="text-sm font-black uppercase text-black/48">Aktualizácia</h2>
            <p className="text-lg font-semibold leading-8 text-black/72">Posledná aktualizácia: 28. jún 2026</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
