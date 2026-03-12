import { notFound } from "next/navigation";
import { people } from "@/data/people";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function PersonLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ person: string }>;
}) {
  const { person: personSlug } = await params;
  const person = people[personSlug];

  if (!person) notFound();

  return (
    <>
      <Navbar person={personSlug} initials={person.initials} />
      <main className="mx-auto max-w-5xl px-4 py-12">{children}</main>
      <Footer name={person.name} />
    </>
  );
}
