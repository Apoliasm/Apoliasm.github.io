import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="print-section py-6">
      <h2 className="text-lg font-bold tracking-tight">
Contact
      </h2>
      <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          <span className="font-medium text-zinc-900 dark:text-zinc-200">Email </span>
          <a
            href={`mailto:${profile.email}`}
            className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            {profile.email}
          </a>
        </p>
        {profile.github && (
          <p>
            <span className="font-medium text-zinc-900 dark:text-zinc-200">GitHub </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {profile.github.replace("https://", "")}
            </a>
          </p>
        )}
        {profile.linkedin && (
          <p>
            <span className="font-medium text-zinc-900 dark:text-zinc-200">LinkedIn </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {profile.linkedin.replace("https://www.linkedin.com/in/", "")}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
