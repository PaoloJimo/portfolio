import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { people } from "@/data/people";

export default async function PersonHomePage({
  params,
}: {
  params: Promise<{ person: string }>;
}) {
  const { person: personSlug } = await params;
  const site = people[personSlug];

  if (!site) notFound();

  const hasAvatar =
    personSlug === "paolo"
      ? "/images/avatar.jpg"
      : null;

  const hasBanner =
    personSlug === "paolo"
      ? "/images/banner.jpeg"
      : null;

  return (
    <div className="space-y-14">
      <section className="space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          {site.availability}
        </div>

        <div className="flex items-center gap-4">
          {hasAvatar && (
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <Image
                src={hasAvatar}
                alt={site.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            <div className="font-medium text-neutral-900 dark:text-white">{site.role}</div>
            <div>{site.location}</div>
          </div>
        </div>

        {hasBanner && (
          <div className="relative mt-8 h-56 overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 sm:h-72">
            <Image
              src={hasBanner}
              alt="Workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        )}

        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          {site.name}
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-300 sm:text-xl">
          <span className="font-medium text-neutral-900 dark:text-white">
            {site.role}
          </span>{" "}
          — {site.headline}
        </p>

        <p className="max-w-2xl text-neutral-600 dark:text-neutral-300">
          {site.summary}
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={`/${personSlug}/contact`}
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Contact me
          </Link>

          {site.links.resume !== "#" && (
            <a
              href={site.links.resume}
              download
              className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Download resume
            </a>
          )}

          {site.links.linkedin !== "#" && (
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              LinkedIn
            </a>
          )}

          {site.links.github !== "#" && (
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              GitHub
            </a>
          )}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="font-semibold">What I&apos;m good at</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Building clean, fast frontends and dependable integrations.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="font-semibold">What I care about</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Maintainability, clear architecture, and practical outcomes.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
          <h2 className="font-semibold">What I&apos;m looking for</h2>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Teams solving real problems with high standards and good communication.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Featured work</h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Projects are being curated — check back soon.
            </p>
          </div>

          <Link
            href={`/${personSlug}/projects`}
            className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900"
          >
            View projects
          </Link>
        </div>
      </section>
    </div>
  );
}
