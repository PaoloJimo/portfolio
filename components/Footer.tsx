import Container from "./Container";

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="border-t border-neutral-200/70 py-10 text-sm text-neutral-500 dark:border-neutral-800/70">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {name}</p>
          <p>Built with Next.js + Tailwind</p>
        </div>
      </Container>
    </footer>
  );
}
