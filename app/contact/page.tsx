import { site } from "@/data/site";

export default function ContactPage() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    "Hello Paolo — let's connect"
  )}`;

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          I’m happy to chat about roles, collaboration, or interesting problems.
        </p>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {site.location}
            </p>
            <p className="font-medium">{site.availability}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Preferred contact:{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>

          <a
            href={mailto}
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Email me
          </a>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-neutral-200 p-4 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            <p className="font-medium">LinkedIn</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Let’s connect professionally
            </p>
          </a>

          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-neutral-200 p-4 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            <p className="font-medium">GitHub</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Code, experiments, and side projects
            </p>
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
        <h2 className="text-lg font-semibold">Quick note</h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          If you’re reaching out about a role, sharing the job description and a
          short summary of what you’re looking for helps me reply faster.
        </p>
      </div>
    </div>
  );
}
