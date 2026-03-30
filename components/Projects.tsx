"use client";

import { useState } from "react";

interface Project {
  title: string;
  period: string;
  role: string;
  techStack: string[];
  summary: string;
  images: string[];
  links: { github?: string; demo?: string };
  contentHtml: string;
}

interface ProjectsProps {
  id?: string;
  heading: string;
  projects: Project[];
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasLinks = project.links.github || project.links.demo;

  return (
    <div className="print-no-border rounded-lg border border-zinc-200 transition-shadow hover:shadow-md dark:border-zinc-800">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
      >
        <div className="min-w-0 flex-1">
          {/* 제목 + 역할 */}
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            {project.role && (
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {project.role}
              </span>
            )}
          </div>

          {/* 기간 */}
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {project.period}
          </p>

          {/* 요약 */}
          <p className="mt-1.5 text-sm text-zinc-700 dark:text-zinc-300">
            {project.summary}
          </p>

          {/* 기술 태그 */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 링크 */}
          {hasLinks && (
            <div className="mt-2.5 flex gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* 아코디언 화살표 */}
        <span
          className="no-print mt-1 shrink-0 text-zinc-400 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : undefined }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* 펼쳐지는 상세 영역 */}
      <div
        className={`project-details overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-[5000px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-zinc-100 px-5 pb-5 pt-4 dark:border-zinc-800">
          {/* 이미지 갤러리 */}
          {project.images.length > 0 && (
            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-md border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900"
                >
                  <img
                    src={src}
                    alt={`${project.title} 스크린샷 ${i + 1}`}
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 마크다운 본문 */}
          <div
            className="prose prose-sm max-w-none text-zinc-700 dark:text-zinc-300 dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: project.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects({ id, heading, projects }: ProjectsProps) {
  return (
    <section id={id} className="py-12">
      {/* 화면용 헤더 */}
      <h2 className="no-print text-2xl font-bold tracking-tight text-accent">
        {heading}
      </h2>
      <div className="mt-6 space-y-4">
        {projects.map((project) => (
          <div key={project.title}>
            {/* PDF 인쇄 시 각 카드 위에 섹션 헤더 반복 */}
            <h2 className="print-repeat-header text-accent print-break-before ">
              {heading}
            </h2>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
