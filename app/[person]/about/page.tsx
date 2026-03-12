import { notFound } from "next/navigation";
import { people } from "@/data/people";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ person: string }>;
}) {
  const { person: personSlug } = await params;
  const person = people[personSlug];

  if (!person) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-neutral-600 dark:text-neutral-300">
        {person.summary}
      </p>
    </div>
  );
}
