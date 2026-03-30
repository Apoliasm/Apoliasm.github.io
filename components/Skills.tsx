import { skills, getBadge } from "@/data/profile";

export default function Skills() {
  return (
    <section id="skills" className="print-section section-alt rounded-lg py-6">
      <h2 className="text-lg font-bold tracking-tight text-accent">
      </h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {group.category}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {group.items.map((item) => {
                const badge = getBadge(item);
                const src = badge.customUrl
                  ?? `https://img.shields.io/badge/${encodeURIComponent(badge.name)}-${badge.color}.svg?style=for-the-badge&logo=${badge.logo}&logoColor=${badge.logoColor ?? "white"}`;
                return (
                  <img
                    key={item}
                    src={src}
                    alt={badge.name}
                    className="h-7"
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
