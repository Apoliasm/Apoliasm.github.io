import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { markdownToHtml } from "@/lib/markdown";
import Contact from "@/components/Contact";
import { getAbout, getProjects, getInternships } from "@/lib/content";

function toProjectProps(items: ReturnType<typeof getProjects>) {
  return items.map((p) => ({
    title: p.title,
    period: p.period,
    role: p.role ?? "",
    techStack: p.techStack,
    summary: p.summary,
    images: p.images ?? [],
    links: p.links ?? {},
    contentHtml: markdownToHtml(p.content),
  }));
}

export default function Home() {
  const about = getAbout();
  const projects = toProjectProps(getProjects());
  const internships = toProjectProps(getInternships());

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-4xl flex-1 px-6">
        {/* ── 1페이지: 프로필 요약 ── */}
        <div className="print-page-one space-y-2">
          <Hero />
          <About contentHtml={markdownToHtml(about.content)} />
          <Career />
          <Skills />
          <Contact />
        </div>

        {/* ── 2페이지~: 프로젝트 ── */}
        <Projects id="projects" heading="Projects" projects={projects} />

        {/* ── Internship ── */}
        <Projects id="internship" heading="Internship" projects={internships} />
      </main>
      <footer className="no-print border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>
    </>
  );
}
