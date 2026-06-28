import { mkdir, writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

const root = process.cwd();

const projects = [
  {
    slug: "smartoviny-identity",
    title: "Smartoviny",
    subtitle: "Logo a vizuálna identita",
    category: "Vizuálna identita",
    client: "Smartoviny",
    palette: ["#f47a20", "#17191d", "#fff4e7", "#2d3748"],
    panels: ["Logo systém", "Farby značky", "Šablóny pre siete"]
  },
  {
    slug: "podzahradna-real-estate",
    title: "Podzáhradná",
    subtitle: "Realitná marketingová grafika",
    category: "Reality",
    client: "Rezidenčný projekt",
    palette: ["#f47a20", "#15202b", "#e7ddd0", "#5b6b5d"],
    panels: ["Billboard", "Predajný list", "Webový vizuál"]
  },
  {
    slug: "mojaltanok-product-visuals",
    title: "MôjAltánok",
    subtitle: "Produktové vizuály a social obsah",
    category: "Sociálne siete",
    client: "MÔJALTÁNOK s.r.o.",
    palette: ["#f47a20", "#1c1b19", "#f2e6d8", "#6a7c57"],
    panels: ["Produktový post", "Banner", "Webový obsah"]
  },
  {
    slug: "billboard-designs",
    title: "Billboardové návrhy",
    subtitle: "Outdoorová reklama",
    category: "Tlačový dizajn",
    client: "Vybraní klienti",
    palette: ["#f47a20", "#111827", "#f8efe3", "#cfd7de"],
    panels: ["Outdoor", "Čitateľný layout", "Kampaň"]
  },
  {
    slug: "catalogues-brochures",
    title: "Katalógy",
    subtitle: "Brožúry a tlačové layouty",
    category: "Tlačový dizajn",
    client: "Vybraní klienti",
    palette: ["#f47a20", "#26231f", "#f5eadc", "#946b4d"],
    panels: ["Katalóg", "Brožúra", "Predajný materiál"]
  },
  {
    slug: "ai-visualizations",
    title: "AI vizualizácie",
    subtitle: "Produktové a realitné koncepty",
    category: "AI vizuály",
    client: "Konceptová práca",
    palette: ["#f47a20", "#131820", "#ece5dc", "#617389"],
    panels: ["Restyling obrázka", "Produktový koncept", "Realistická scéna"]
  }
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function projectSvg(project, variant) {
  const [orange, ink, warm, supporting] = project.palette;
  const label = variant === 0 ? project.category : project.panels[variant - 1];
  const imageLabel = variant === 0 ? "Hlavný náhľad" : `Obrázok ${variant}`;
  const offset = variant * 42;

  return `
    <svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${ink}"/>
          <stop offset="0.62" stop-color="#20252d"/>
          <stop offset="1" stop-color="${supporting}"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="28" stdDeviation="34" flood-color="#000000" flood-opacity="0.32"/>
        </filter>
      </defs>
      <rect width="1600" height="1200" fill="url(#bg)"/>
      <rect x="84" y="84" width="1432" height="1032" rx="18" fill="${warm}" opacity="0.96"/>
      <rect x="128" y="128" width="1344" height="944" rx="12" fill="#fffaf2"/>
      <rect x="128" y="128" width="1344" height="136" rx="12" fill="${ink}"/>
      <rect x="128" y="228" width="1344" height="36" fill="${ink}"/>
      <circle cx="1376" cy="196" r="30" fill="${orange}"/>
      <circle cx="1296" cy="196" r="30" fill="#ffffff" opacity="0.18"/>
      <text x="178" y="208" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="38" font-weight="700">${escapeXml(project.client)}</text>
      <text x="178" y="366" fill="${orange}" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700">${escapeXml(label)}</text>
      <text x="178" y="456" fill="${ink}" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="800">${escapeXml(project.title)}</text>
      <text x="184" y="526" fill="#4f565f" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="500">${escapeXml(project.subtitle)}</text>
      <g filter="url(#shadow)">
        <rect x="${830 - offset / 3}" y="346" width="496" height="574" rx="16" fill="${ink}"/>
        <rect x="${872 - offset / 3}" y="394" width="412" height="248" rx="10" fill="${supporting}"/>
        <rect x="${908 - offset / 3}" y="430" width="148" height="148" rx="74" fill="${orange}"/>
        <rect x="${1090 - offset / 3}" y="442" width="146" height="20" rx="10" fill="#ffffff" opacity="0.76"/>
        <rect x="${1090 - offset / 3}" y="486" width="110" height="20" rx="10" fill="#ffffff" opacity="0.42"/>
        <rect x="${872 - offset / 3}" y="690" width="278" height="30" rx="15" fill="#ffffff" opacity="0.86"/>
        <rect x="${872 - offset / 3}" y="748" width="346" height="22" rx="11" fill="#ffffff" opacity="0.38"/>
        <rect x="${872 - offset / 3}" y="796" width="292" height="22" rx="11" fill="#ffffff" opacity="0.26"/>
        <rect x="${872 - offset / 3}" y="866" width="172" height="44" rx="8" fill="${orange}"/>
      </g>
      <g>
        <rect x="178" y="714" width="164" height="164" rx="14" fill="${orange}"/>
        <rect x="372" y="714" width="164" height="164" rx="14" fill="${ink}" opacity="0.92"/>
        <rect x="566" y="714" width="164" height="164" rx="14" fill="${supporting}"/>
        <text x="178" y="936" fill="#4f565f" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700">${escapeXml(imageLabel)}</text>
      <text x="178" y="984" fill="#7a746d" font-family="Arial, Helvetica, sans-serif" font-size="24">Grafický dizajn / AI vizuály / online prezentácia</text>
      </g>
      <path d="M128 1034H1472" stroke="${ink}" stroke-opacity="0.12" stroke-width="2"/>
    </svg>
  `;
}

function cvPdf() {
  const objects = [];
  const add = (body) => {
    objects.push(body);
    return objects.length;
  };

  add("<< /Type /Catalog /Pages 2 0 R >>");
  add("<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  add("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>");
  add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  const stream = [
    "BT",
    "/F1 24 Tf",
    "72 742 Td",
    "(Jakub Trnka - placeholder CV) Tj",
    "/F1 12 Tf",
    "0 -34 Td",
    "(Nahrad tento subor finalnym PDF zivotopisom.) Tj",
    "0 -22 Td",
    "(Tlacidlo na webe smeruje na public/Jakub-Trnka-CV.pdf.) Tj",
    "ET"
  ].join("\n");

  add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return pdf;
}

for (const project of projects) {
  const targetDir = path.join(root, "public", "portfolio", project.slug);
  await mkdir(targetDir, { recursive: true });

  for (let variant = 0; variant < 4; variant += 1) {
    const name = variant === 0 ? "cover.jpg" : `image-${variant}.jpg`;
    await sharp(Buffer.from(projectSvg(project, variant)))
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(path.join(targetDir, name));
  }
}

await writeFile(path.join(root, "public", "Jakub-Trnka-CV.pdf"), cvPdf());

console.log("Generated portfolio JPEGs and public/Jakub-Trnka-CV.pdf");
