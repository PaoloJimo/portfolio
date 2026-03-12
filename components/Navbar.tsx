import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({
  person,
  initials,
}: {
  person: string;
  initials: string;
}) {
  const nav = [
    { href: `/${person}`, label: "Home" },
    { href: `/${person}/about`, label: "About" },
    { href: `/${person}/projects`, label: "Projects" },
    { href: `/${person}/contact`, label: "Contact" },
  ];

  return (
    <header className="border-b border-neutral-200/70 dark:border-neutral-800/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            ← All
          </Link>
          <Link href={`/${person}`} className="font-semibold tracking-tight">
            {initials}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-300">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-neutral-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
