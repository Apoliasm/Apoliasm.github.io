import { certifications } from "@/data/profile";

export default function Certifications() {
  return (
    <section id="certifications" className="print-section section-alt rounded-lg py-6">
      <h2 className="text-lg font-bold tracking-tight text-accent">
      </h2>
      <div className="mt-3">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Certification
        </h3>
        <ul className="mt-2 space-y-1">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="text-zinc-400 dark:text-zinc-500">•</span>
              <span>{cert.name}</span>
              <span className="text-xs text-zinc-400 dark:text-zinc-500">{cert.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
