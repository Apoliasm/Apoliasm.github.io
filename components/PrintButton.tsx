"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
    >
      PDF
    </button>
  );
}
