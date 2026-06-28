# Jakub Trnka Portfolio

Modern one-page CV and portfolio website for Jakub Trnka, positioned as a creative digital specialist focused on graphic design, AI visuals, video content, WordPress administration and social media content.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- JSON-driven portfolio content

## Getting Started

Install dependencies:

```bash
npm install
```

Generate the sample portfolio images and placeholder CV PDF:

```bash
npm run assets:generate
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run assets:generate
```

## Project Structure

```text
src/app/                 Next.js App Router pages and global styles
src/components/          Reusable website sections and UI components
src/data/profile.ts      CV, skills, education and contact-adjacent content
src/lib/projects.ts      Portfolio filesystem loading logic
src/types/project.ts     Shared portfolio TypeScript type
content/projects/        Portfolio project folders with project.json files
public/portfolio/        Portfolio images grouped by project slug
public/Jakub-Trnka-CV.pdf
```

## How to Add a New Portfolio Project

Create a new project folder:

```text
content/projects/project-slug/project.json
```

Add images for that project:

```text
public/portfolio/project-slug/cover.jpg
public/portfolio/project-slug/image-1.jpg
public/portfolio/project-slug/image-2.jpg
public/portfolio/project-slug/image-3.jpg
```

Use this JSON format:

```json
{
  "title": "Project title",
  "category": "Category",
  "client": "Client name",
  "year": "2026",
  "description": "Short project description.",
  "role": "Graphic design / AI visuals / video / WordPress content",
  "tags": ["billboard", "catalogue", "AI visuals"],
  "cover": "/portfolio/project-slug/cover.jpg",
  "images": [
    "/portfolio/project-slug/image-1.jpg",
    "/portfolio/project-slug/image-2.jpg",
    "/portfolio/project-slug/image-3.jpg"
  ],
  "featured": true
}
```

The website automatically reads every folder inside `content/projects` and renders the project in the portfolio section. No React component edits are needed.

## CV Download

The download buttons point to:

```text
public/Jakub-Trnka-CV.pdf
```

Replace the placeholder file with the final PDF CV when it is ready.

## Deployment

This project is ready for Vercel:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Keep the default Next.js build command: `npm run build`.
4. Deploy.

Portfolio content is loaded from local JSON files during the build, so all project folders and images should be committed with the site.
