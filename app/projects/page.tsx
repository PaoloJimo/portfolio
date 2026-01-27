import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          A curated selection of work. I focus on clarity, reliability, and
          maintainable code.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.slug}
            className="rounded-2xl border border-neutral-200 p-5 transition hover:-translate-y-0.5 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            {p.image && (
            <div className="relative mb-4 h-40 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
            </div>
            )}

            <div className="flex items-start justify-between gap-4">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <span className="text-xs text-neutral-500">Preview</span>
            </div>

            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {p.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3 text-sm">
              <Link
                href={p.links?.demo ?? "#"}
                className="underline text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
              >
                Demo
              </Link>
              <Link
                href={p.links?.repo ?? "#"}
                className="underline text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
              >
                Repo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

