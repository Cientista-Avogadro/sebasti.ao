import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="font-display text-3xl mt-4">Page not found</h1>
        <p className="font-display text-3xl">Pagina nao encontrada</p>
        <Link href="/" className="link inline-block mt-8 text-sm">
          sebasti.ao
        </Link>
      </div>
    </main>
  );
}
