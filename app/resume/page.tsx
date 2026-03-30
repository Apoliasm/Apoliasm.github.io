import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import ResumeProjects from "@/components/ResumeProjects";
import { markdownToHtml } from "@/lib/markdown";
import { getAbout, getProjects, getInternships } from "@/lib/content";
import { profile } from "@/data/profile";

function toResumeProps(items: ReturnType<typeof getProjects>) {
  return items.map((p) => ({
    title: p.title,
    period: p.period,
    role: p.role ?? "",
    techStack: p.techStack,
    summary: p.summary,
    highlights: p.highlights ?? [],
  }));
}

export default function ResumePage() {
  const about = getAbout();
  const projects = toResumeProps(getProjects());
  const internships = toResumeProps(getInternships());

  return (
    <>
      <Header title="Resume" navItems={[]} />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        {/* ── 1페이지: 프로필 요약 ── */}
        <div className="print-page-one space-y-1">
          <Hero />
          <About contentHtml={markdownToHtml(about.content)} />
          <Career />
          <Skills />
        </div>

        {/* ── 2페이지: 프로젝트 & 인턴십 핵심 성과 ── */}
        <div className="resume-page-two print-break-before">
          {/* 2페이지 헤더 */}
          <div className="flex items-baseline justify-between border-b border-zinc-200 pb-2 pt-4 dark:border-zinc-700">
            <p className="text-sm font-semibold">
              {profile.nameKo}{" "}
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                {profile.nameEn}
              </span>
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {profile.email}
            </p>
          </div>

          <ResumeProjects heading="Projects" projects={projects} />
          <ResumeProjects heading="Internship" projects={internships} />

          {/* 포트폴리오 링크 */}
          <div className="mt-4 border-t border-zinc-200 pt-3 text-center text-xs text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            <p>
              상세 프로젝트 내용은 포트폴리오에서 확인하실 수 있습니다.
            </p>
            <p className="mt-1 font-medium text-accent">
              https://apoliasm.github.io
            </p>
          </div>
        </div>
      </main>
      <footer className="no-print border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>
    </>
  );
}
