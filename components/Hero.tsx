import Image from "next/image";
import { profile } from "@/data/profile";
import Contact from "./Contact";

export default function Hero() {
  return (
    <section className="print-section flex items-center gap-6 py-6">
      <div className="shrink-0">
        <div className="relative h-28 w-28 overflow-hidden rounded-full sm:h-32 sm:w-32">
          <Image
            src="/profile.jpg"
            alt={profile.nameKo}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {profile.title}
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
          {profile.nameKo}{" "}
          <span className="text-zinc-400 dark:text-zinc-500">
            {profile.nameEn}
          </span>
        </h1>
        <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.bio}
        </p>
        <Contact />
      </div>
    </section>
  );
}
