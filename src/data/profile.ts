import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Image,
  LayoutPanelTop,
  Megaphone,
  Palette,
  Sparkles,
  Video
} from "lucide-react";

export const navItems = [
  { label: "O mne", href: "#about" },
  { label: "Služby", href: "#skills" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Skúsenosti", href: "#experience" },
  { label: "Vzdelanie + Certifikáty", href: "#education" },
  { label: "Kontakt", href: "#contact" }
];

export const positioning =
  "Grafika, AI vizuály a digitálny obsah pre značky, projekty a online prezentácie s charakterom.";

export const aboutSummary = [
  "Som kreatívny digitálny tvorca, ktorý prepája grafický dizajn, WordPress, tvorbu obsahu a AI nástroje do vizuálnych výstupov pre značky, projekty a online komunikáciu.",
  "Venujem sa tlačovej a online grafike, marketingovým materiálom, produktovým vizuálom, obsahu pre sociálne siete, krátkym videám a AI asistovaným vizualizáciám. Pri práci sa sústredím na čistú vizuálnu komunikáciu, atmosféru a výsledok, ktorý vie zaujať v predaji, prezentácii aj digitálnom priestore.",
  "Mojou výhodou je rýchle pochopenie zadania, cit pre vizuál a schopnosť spájať dizajn, obsah a moderné nástroje do výstupu, ktorý pôsobí profesionálne, sviežo a pripravený pre reálnu komunikáciu značky."
];

export const skillGroups = [
  {
    title: "Grafický dizajn",
    icon: Palette,
    description:
      "Tlačová a online grafika, bannery, billboardy, katalógy, brožúry, reklamné vizuály a materiály pre značky, produkty aj realitné projekty."
  },
  {
    title: "AI vizuály",
    icon: Sparkles,
    description:
      "AI asistované produktové vizualizácie, realistické koncepty, úprava fotografií, restyling obrázkov a tvorba vizuálov s výraznou atmosférou."
  },
  {
    title: "Video obsah",
    icon: Video,
    description:
      "Krátke propagačné videá, reels obsah, video scenáre, AI video koncepty a strih pre online komunikáciu."
  },
  {
    title: "Web / WordPress",
    icon: LayoutPanelTop,
    description:
      "Úprava obsahu webu, pridávanie stránok, vizuálne doladenie layoutov a príprava webovej prezentácie tak, aby pôsobila čisto a profesionálne."
  },
  {
    title: "Sociálne siete",
    icon: Megaphone,
    description:
      "Vizuály, príspevky, produktové texty a obsah pre Facebook, Instagram a online kampane."
  }
];

export const experience = [
  {
    company: "ISMONT s.r.o.",
    role: "Grafický dizajnér pre realitné developerské projekty",
    period: "2026 – súčasnosť",
    description: [
      "Vizuálny obsah pre realitné developerské projekty",
      "Billboardy a návrhy outdoorovej reklamy",
      "Katalógy, brožúry a predajné materiály",
      "Online vizuály pre projektové weby a sociálne siete",
      "AI asistované vizuálne koncepty a príprava obrázkov"
    ]
  },
  {
    company: "MÔJALTÁNOK s.r.o.",
    role: "Grafický dizajnér / tvorca obsahu / správca WordPressu",
    period: "01/2024 – súčasnosť",
    description: [
      "Tvorba obsahu pre sociálne siete",
      "Grafická príprava reklamných vizuálov, bannerov a príspevkov",
      "WordPress obsah a vizuálne doladenie webovej prezentácie",
      "Produktové texty, popisy a propagačné materiály",
      "Obsahová príprava pre online komunikáciu značky"
    ]
  },
  {
    company: "LepoCreative s.r.o.",
    role: "Kameraman / fotograf / grafický dizajnér",
    period: "01/2022 – 01/2023",
    description: [
      "Kamera a fotografia pre svadobné a komerčné projekty",
      "Spolupráca na video produkcii",
      "Strih videa a úprava fotografií",
      "Práca s Final Cut Pro, Adobe Photoshop a Lightroom"
    ]
  }
];

export const education = [
  {
    school: "Trnavská univerzita v Trnave",
    field: "Informatika",
    period: "09/2024 - súčasnosť",
    details: []
  },
  {
    school: "Stredná odborná škola v Nižnej",
    field: "Osobný počítač a počítačové siete",
    period: "09/2019 - 06/2023",
    details: [
      "Maturitné vysvedčenie",
      "Výučný list",
      "IES certifikát"
    ]
  }
];

export const certificates = [
  "Adobe Photoshop pre začiatočníkov",
  "Adobe Photoshop pre pokročilých",
  "Základy komunikačných zručností",
  "Úprava fotografií v Adobe Photoshop pre začiatočníkov"
];

export const highlights = [
  { label: "Hlavné zameranie", value: "Grafika + AI vizuály" },
  { label: "Online prezentácia", value: "Obsah pre značky" },
  { label: "Štýl výstupov", value: "Premyslene, sviežo, s detailom" }
];

export const quickStats = [
  { label: "Dizajn", value: "Tlač / online" },
  { label: "Obsah", value: "Video / sociálne siete" },
  { label: "Prezentácia", value: "Web / značkové vizuály" }
];

export const sectionIcons = {
  about: Image,
  experience: BriefcaseBusiness,
  education: GraduationCap,
  certificates: Award
};
