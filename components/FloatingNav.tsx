"use client";

import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
  children: { id: string; label: string }[];
}

const topSections = [
  { id: "contact", label: "Contact" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "internship", label: "Internship" },
];

export default function FloatingNav() {
  const [activeId, setActiveId] = useState("");
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  // DOM에서 data-nav-parent 속성을 가진 하위 항목을 수집
  useEffect(() => {
    const items: NavItem[] = topSections.map((s) => {
      const children: { id: string; label: string }[] = [];
      document
        .querySelectorAll<HTMLElement>(`[data-nav-parent="${s.id}"]`)
        .forEach((el) => {
          const label = el.dataset.navLabel;
          if (el.id && label) {
            children.push({ id: el.id, label });
          }
        });
      return { ...s, children };
    });
    setNavItems(items);
  }, []);

  // IntersectionObserver로 현재 보이는 섹션 추적
  useEffect(() => {
    if (navItems.length === 0) return;

    const allIds = navItems.flatMap((item) => [
      item.id,
      ...item.children.map((c) => c.id),
    ]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // 프로젝트 하위 항목이면 아코디언 펼치기
      if (el.dataset.navParent) {
        el.dispatchEvent(new CustomEvent("nav-open", { bubbles: false }));
      }
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // 부모 섹션이 active인지 (자식 중 하나가 active면 부모도 active)
  const isParentActive = (item: NavItem) =>
    activeId === item.id ||
    item.children.some((c) => c.id === activeId);

  return (
    <nav className="no-print fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block">
      <div className="flex flex-col items-start gap-0.5 rounded-lg border border-zinc-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-900/90">
        {navItems.map((item) => (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`rounded px-2 py-1 text-xs font-medium transition-colors ${
                isParentActive(item)
                  ? "bg-accent/10 text-accent"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {item.label}
            </button>
            {/* 하위 프로젝트 항목 */}
            {item.children.length > 0 && (
              <div className="ml-2 flex flex-col gap-0.5 border-l border-zinc-200 pl-1 dark:border-zinc-700">
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    type="button"
                    onClick={() => scrollTo(child.id)}
                    className={`rounded px-2 py-0.5 text-left text-[11px] transition-colors ${
                      activeId === child.id
                        ? "font-medium text-accent"
                        : "text-zinc-400 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
                    }`}
                  >
                    {child.label.length > 20 ? child.label.slice(0, 20) + "…" : child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
