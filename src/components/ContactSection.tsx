import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export function ContactSection() {
  const contacts = [
    {
      label: "E-mail",
      value: "trnkakubo9@gmail.com",
      href: "mailto:trnkakubo9@gmail.com",
      icon: Mail
    },
    {
      label: "Telefón",
      value: "+421950896102",
      href: "tel:+421950896102",
      icon: Phone
    },
    {
      label: "Lokalita",
      value: "Slovensko",
      href: null,
      icon: MapPin
    }
  ];

  return (
    <AnimatedSection id="contact" tone="dark" className="overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1520px] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="mb-6 text-xs font-black uppercase text-[var(--accent)]">07 / Kontakt</p>
          <h2 className="section-title-xl max-w-5xl text-white">
            Poďme vytvoriť vizuálny obsah, ktorý funguje.
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-semibold leading-8 text-white/62">
            Dostupné pre grafický dizajn, AI asistované vizuály, produktový obsah,
            krátke videá, WordPress aktualizácie a vizuály pre sociálne siete.
          </p>
        </div>

        <div className="grid gap-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <div className="flex items-center gap-4 border border-white/12 bg-white/[0.055] p-5 transition-colors hover:bg-white/10">
                <span className="grid h-11 w-11 place-items-center bg-[var(--accent)] text-white">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-black uppercase text-white/45">{contact.label}</p>
                  <p className="mt-1 font-bold text-white">{contact.value}</p>
                </div>
              </div>
            );

            return contact.href ? (
              <a key={contact.label} href={contact.href}>
                {content}
              </a>
            ) : (
              <div key={contact.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
