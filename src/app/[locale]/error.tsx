"use client";

export default function LocaleError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-sm text-accent">500</p>
        <h1 className="font-display text-3xl mt-4">Something went wrong</h1>
        <p className="font-display text-3xl">Algo correu mal</p>
        <button onClick={reset} className="btn mt-8">
          Try again · Tentar de novo
        </button>
      </div>
    </main>
  );
}
