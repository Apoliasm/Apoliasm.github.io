import PrintButton from "./PrintButton";

const portfolioNav = [
  { label: "Contact", href: "#contact" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Internship", href: "#internship" },
];

interface HeaderProps {
  title?: string;
  navItems?: { label: string; href: string }[];
}

export default function Header({ title = "Portfolio", navItems = portfolioNav }: HeaderProps) {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <a href="#" className="text-lg font-bold tracking-tight text-accent">
          {title}
        </a>
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden text-sm text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 sm:block"
            >
              {item.label}
            </a>
          ))}
          <PrintButton />
        </nav>
      </div>
    </header>
  );
}
