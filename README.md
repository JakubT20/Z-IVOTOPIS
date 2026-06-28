# Jakub Trnka - portfólio a CV web

Moderný jednostránkový CV a portfólio web pre Jakuba Trnku. Web ho prezentuje ako kreatívneho digitálneho špecialistu zameraného na grafický dizajn, AI vizuály, video obsah, správu WordPressu a obsah pre sociálne siete.

## Technológie

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Portfólio riadené cez JSON súbory

## Spustenie projektu

Nainštaluj balíčky:

```bash
npm install
```

Vygeneruj ukážkové obrázky portfólia a placeholder PDF CV:

```bash
npm run assets:generate
```

Spusti vývojový server:

```bash
npm run dev
```

Web sa otvorí na [http://localhost:3000](http://localhost:3000). Ak je port obsadený, Next.js automaticky použije ďalší voľný port, napríklad `3001`.

## Príkazy

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run assets:generate
```

## Štruktúra projektu

```text
src/app/                 Next.js stránky a globálne štýly
src/components/          Sekcie webu a znovupoužiteľné komponenty
src/data/profile.ts      Texty CV, zručnosti, vzdelanie a skúsenosti
src/lib/projects.ts      Logika načítania portfólia zo súborov
src/types/project.ts     TypeScript typ projektu
content/projects/        Priečinky portfóliových projektov
public/portfolio/        Obrázky projektov podľa slug názvu
public/Jakub-Trnka-CV.pdf
```

## Ako pridať nový projekt do portfólia

Nový projekt sa nepridáva úpravou React komponentov. Stačí vytvoriť nový priečinok, JSON súbor a nahrať obrázky.

1. Vytvor priečinok v `content/projects/`.

Príklad:

```text
content/projects/novy-projekt/project.json
```

2. Vytvor rovnaký priečinok pre obrázky v `public/portfolio/`.

Príklad:

```text
public/portfolio/novy-projekt/cover.jpg
public/portfolio/novy-projekt/image-1.jpg
public/portfolio/novy-projekt/image-2.jpg
public/portfolio/novy-projekt/image-3.jpg
```

3. Do `project.json` vlož tento formát:

```json
{
  "title": "Názov projektu",
  "category": "Kategória",
  "client": "Meno klienta",
  "year": "2026",
  "description": "Krátky popis projektu.",
  "role": "Grafický dizajn / AI vizuály / video / WordPress obsah",
  "tags": ["billboard", "katalóg", "AI vizuály"],
  "cover": "/portfolio/novy-projekt/cover.jpg",
  "images": [
    "/portfolio/novy-projekt/image-1.jpg",
    "/portfolio/novy-projekt/image-2.jpg",
    "/portfolio/novy-projekt/image-3.jpg"
  ],
  "featured": true
}
```

4. Ulož súbory a obnov stránku.

Web automaticky načíta každý priečinok v `content/projects`. Ak chceš projekt ukázať aj vo filtri `Výber`, nastav:

```json
"featured": true
```

Ak ho nechceš mať medzi vybranými projektmi, nastav:

```json
"featured": false
```

## Ako vymeniť alebo pridať CV

Tlačidlá `Stiahnuť CV` používajú tento súbor:

```text
public/Jakub-Trnka-CV.pdf
```

Ak chceš nahrať finálne CV:

1. Priprav PDF súbor.
2. Pomenuj ho presne `Jakub-Trnka-CV.pdf`.
3. Nahraď ním existujúci súbor v priečinku `public/`.
4. Obnov web a tlačidlo bude automaticky sťahovať nové CV.

Ak chceš použiť iný názov PDF, zmeň odkaz vo file:

```text
src/components/HeroSection.tsx
src/components/Navigation.tsx
```

Vyhľadaj:

```tsx
href="/Jakub-Trnka-CV.pdf"
```

a nahraď ho novou cestou, napríklad:

```tsx
href="/Jakub-Trnka-Zivotopis.pdf"
```

## Úprava textov CV

Hlavné texty, zručnosti, skúsenosti, vzdelanie a certifikáty sú v:

```text
src/data/profile.ts
```

Portfólio projekty sú v:

```text
content/projects/
```

## Deploy na Vercel

Projekt je pripravený na Vercel:

1. Nahraj projekt na GitHub.
2. Importuj repozitár vo Verceli.
3. Build command nechaj `npm run build`.
4. Deployni web.

Portfólio sa načítava z lokálnych JSON súborov pri builde, preto treba commitnúť aj priečinky `content/projects` a `public/portfolio`.
