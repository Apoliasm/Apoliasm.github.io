interface AboutProps {
  contentHtml: string;
}

export default function About({ contentHtml }: AboutProps) {
  return (
    <section id="about" className="print-section section-alt rounded-lg py-6">
      <div
        className="prose prose-sm mt-3 max-w-none text-zinc-700 dark:text-zinc-300 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </section>
  );
}
