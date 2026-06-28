import { promises as fs } from "fs";
import path from "path";
import type { PortfolioProject } from "@/types/project";

type ProjectJson = Omit<PortfolioProject, "slug">;

const projectsRoot = path.join(process.cwd(), "content", "projects");

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function readProject(slug: string, data: unknown): PortfolioProject {
  const project = data as Partial<ProjectJson>;

  if (
    typeof project.title !== "string" ||
    typeof project.category !== "string" ||
    typeof project.client !== "string" ||
    typeof project.year !== "string" ||
    typeof project.description !== "string" ||
    typeof project.role !== "string" ||
    typeof project.cover !== "string" ||
    typeof project.featured !== "boolean" ||
    !isStringArray(project.tags) ||
    !isStringArray(project.images)
  ) {
    throw new Error(`Invalid portfolio project data in content/projects/${slug}/project.json`);
  }

  return {
    slug,
    title: project.title,
    category: project.category,
    client: project.client,
    year: project.year,
    description: project.description,
    role: project.role,
    tags: project.tags,
    cover: project.cover,
    images: project.images,
    featured: project.featured
  };
}

export async function getProjects(): Promise<PortfolioProject[]> {
  let entries;

  try {
    entries = await fs.readdir(projectsRoot, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }

  const projects = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const filePath = path.join(projectsRoot, entry.name, "project.json");
        const file = await fs.readFile(filePath, "utf8");
        return readProject(entry.name, JSON.parse(file));
      })
  );

  return projects.sort((a, b) => {
    if (a.featured !== b.featured) {
      return a.featured ? -1 : 1;
    }

    return a.title.localeCompare(b.title);
  });
}
