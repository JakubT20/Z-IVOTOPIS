import { existsSync } from "node:fs";
import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const pdfDir = path.join(root, "public", "assets", "billboardy");
const previewDir = path.join(pdfDir, "previews");
const tmpDir = path.join(root, "tmp", "pdfs", "billboard-previews");

function run(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`${command} exited with status ${result.status}`);
  }
}

function hasCommand(command) {
  const result = spawnSync("sh", ["-c", `command -v ${command}`], { stdio: "ignore" });
  return result.status === 0;
}

if (!existsSync(pdfDir)) {
  throw new Error(`Missing billboard PDF directory: ${pdfDir}`);
}

if (!hasCommand("pdftoppm")) {
  throw new Error("Missing pdftoppm. Install Poppler first.");
}

if (!hasCommand("cwebp")) {
  throw new Error("Missing cwebp. Install WebP tools first.");
}

await mkdir(previewDir, { recursive: true });
await rm(tmpDir, { recursive: true, force: true });
await mkdir(tmpDir, { recursive: true });

const files = (await readdir(pdfDir)).filter((file) => file.toLowerCase().endsWith(".pdf"));

for (const file of files) {
  const slug = path.basename(file, ".pdf");
  const pdfPath = path.join(pdfDir, file);
  const outputPrefix = path.join(tmpDir, slug);

  run("pdftoppm", ["-f", "1", "-l", "1", "-r", "96", "-png", pdfPath, outputPrefix]);

  const renderedFiles = (await readdir(tmpDir))
    .filter((renderedFile) => renderedFile.startsWith(`${slug}-`) && renderedFile.endsWith(".png"))
    .sort();

  if (renderedFiles.length === 0) {
    throw new Error(`Preview render failed for ${file}`);
  }

  const pngPath = path.join(tmpDir, renderedFiles[0]);
  const webpPath = path.join(previewDir, `${slug}-preview.webp`);

  run("cwebp", ["-q", "84", pngPath, "-o", webpPath]);
}

await rm(tmpDir, { recursive: true, force: true });

console.log(`Generated ${files.length} billboard previews in ${previewDir}`);
