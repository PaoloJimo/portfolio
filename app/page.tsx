import Link from "next/link";
import Image from "next/image";
import { peopleList } from "@/data/people";
import ThemeToggle from "@/components/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-10 px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/images/jimo-logo.png"
            alt="JIMO"
            width={180}
            height={180}
            priority
          />
          <p className="text-neutral-600 dark:text-neutral-300">
            Select a portfolio to view
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          {peopleList.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-xl bg-neutral-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
