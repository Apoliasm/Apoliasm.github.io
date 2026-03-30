import { career } from "@/data/profile";

export default function Career() {
  return (
    <section id="career" className="print-section py-6">
      <h2 className="text-lg font-bold tracking-tight text-accent">
      </h2>
      <div className="relative mt-4 ml-3 border-l-2 border-accent/20 pl-6">
        {career.map((item, i) => (
          <div key={item.period} className={`relative ${i > 0 ? "mt-4" : ""}`}>
            {/* 타임라인 도트 */}
            <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-accent bg-background" />
            <p className="text-xs font-medium text-accent">{item.period}</p>
            <p className="mt-0.5 text-sm font-semibold">
              {item.company}
              {item.role && (
                <span className="ml-2 font-normal text-zinc-500 dark:text-zinc-400">
                  {item.role}
                </span>
              )}
            </p>
            {item.description && (
              <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
