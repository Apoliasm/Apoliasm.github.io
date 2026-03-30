interface ResumeProject {
  title: string;
  period: string;
  role: string;
  techStack: string[];
  summary: string;
  highlights: string[];
}

interface ResumeProjectsProps {
  heading: string;
  projects: ResumeProject[];
}

export default function ResumeProjects({
  heading,
  projects,
}: ResumeProjectsProps) {
  return (
    <section className="print-section py-4">
      <h2 className="text-lg font-bold tracking-tight text-accent">{heading}</h2>
      <div className="mt-3 space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border-l-2 border-accent/20 pl-4"
          >
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-sm font-semibold">{project.title}</h3>
              {project.role && (
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {project.role}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              {project.period}
            </p>
            <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
              {project.summary}
            </p>

            {/* 기술 태그 */}
            <div className="mt-1.5 flex flex-wrap gap-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 핵심 성과 */}
            {project.highlights.length > 0 && (
              <ul className="mt-1.5 space-y-0.5 text-sm text-zinc-700 dark:text-zinc-300">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span className="shrink-0 text-accent">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
