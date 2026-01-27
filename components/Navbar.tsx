import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200/70 dark:border-neutral-800/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          PJ
        </Link>

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
