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
  { label: "Zručnosti", href: "#skills" },
  { label: "Skúsenosti", href: "#experience" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Kontakt", href: "#contact" }
];

export const positioning =
  "Kreatívny digitálny tvorca zameraný na grafický dizajn, AI vizuály, video obsah a online prezentáciu.";

export const aboutSummary = [
  "Som kreatívny digitálny tvorca, ktorý prepája grafický dizajn, WordPress, tvorbu obsahu a AI nástroje do praktických vizuálnych výstupov pre značky, firmy a projekty.",
  "Venujem sa tvorbe tlačovej a online grafiky, marketingových materiálov, produktových vizuálov, obsahu pre sociálne siete, krátkych videí a AI asistovaných vizualizácií. Pri práci sa sústredím na jasnú komunikáciu, funkčný vizuál a výsledok, ktorý sa dá reálne použiť v predaji, prezentácii alebo online komunikácii.",
  "Mojou výhodou je rýchle pochopenie zadania, praktický prístup a schopnosť spájať dizajn, obsah a moderné nástroje do jedného použiteľného riešenia."
];

export const skillGroups = [
  {
    title: "Grafický dizajn",
    icon: Palette,
    skills: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "Tlačová grafika",
      "Online bannery",
      "Billboardový dizajn",
      "Katalógy a brožúry",
      "Vizuály pre sociálne siete"
    ]
  },
  {
    title: "AI vizuály",
    icon: Sparkles,
    skills: [
      "AI generované produktové vizualizácie",
      "AI úprava fotografií",
      "Prepájanie AI výstupov s grafickým dizajnom",
      "Realistické vizuálne koncepty",
      "Vylepšovanie a restyling obrázkov"
    ]
  },
  {
    title: "Video",
    icon: Video,
    skills: [
      "AI tvorba videí",
      "Video scenáre",
      "Krátke propagačné videá",
      "Reels videá",
      "Strih videa",
      "Final Cut Pro"
    ]
  },
  {
    title: "Web / WordPress",
    icon: LayoutPanelTop,
    skills: [
      "Správa WordPressu",
      "Aktualizácia obsahu webu",
      "Pridávanie a úprava stránok",
      "Základné úpravy rozloženia",
      "Nahrávanie a správa webového obsahu"
    ]
  },
  {
    title: "Marketing / sociálne siete",
    icon: Megaphone,
    skills: [
      "Tvorba príspevkov na Facebook a Instagram",
      "Plánovanie obsahu pre sociálne siete",
      "Produktové texty",
      "Propagačné materiály",
      "Základná marketingová komunikácia"
    ]
  }
];

export const experience = [
  {
    company: "ISMONT s.r.o.",
    role: "Grafický dizajnér pre realitné developerské projekty",
    period: "doplniť dátum",
    description: [
      "Grafický dizajn pre realitné developerské projekty",
      "Billboardy a návrhy outdoorovej reklamy",
      "Katalógy, brožúry a predajné materiály",
      "Vizuálny obsah pre projektové weby a sociálne siete",
      "AI asistované vizuálne koncepty a príprava obrázkov"
    ]
  },
  {
    company: "MÔJALTÁNOK s.r.o.",
    role: "Grafický dizajnér / tvorca obsahu / správca WordPressu",
    period: "01/2024 - súčasnosť",
    description: [
      "Tvorba obsahu pre sociálne siete",
      "Grafická príprava reklamných vizuálov, bannerov a príspevkov",
      "Správa webu a aktualizácia obsahu",
      "Produktové texty, popisy a propagačné materiály",
      "Podpora komunikácie a príprava obsahu"
    ]
  },
  {
    company: "LepoCreative s.r.o.",
    role: "Kameraman / fotograf / grafický dizajnér",
    period: "01/2022 - 01/2023",
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
  { label: "Hlavné zameranie", value: "Grafika + AI špecialista" },
  { label: "Online práca", value: "WordPress obsah" },
  { label: "Štýl výstupov", value: "Rýchlo, prakticky, použiteľne" }
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
