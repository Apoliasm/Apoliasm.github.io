import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface ProjectData {
  title: string;
  period: string;
  role?: string;
  techStack: string[];
  summary: string;
  images?: string[];
  links?: { github?: string; demo?: string };
  order: number;
  content: string;
}

export function getAbout(): { content: string } {
  const filePath = path.join(contentDir, "about.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  return { content: content.trim() };
}

function readMdDir(dirName: string): ProjectData[] {
  const dir = path.join(contentDir, dirName);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      title: data.title,
      period: data.period,
      role: data.role ?? "",
      techStack: data.techStack,
      summary: data.summary,
      images: data.images ?? [],
      links: data.links ?? {},
      order: data.order ?? 0,
      content: content.trim(),
    } as ProjectData;
  });

  return items.sort((a, b) => a.order - b.order);
}

export function getProjects(): ProjectData[] {
  return readMdDir("projects");
}

export function getInternships(): ProjectData[] {
  return readMdDir("internships");
}
