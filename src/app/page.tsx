export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 dark:bg-zinc-950">
      <div className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-16">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700 dark:text-teal-400">Velora</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Bienvenue sur Velora.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">Un nouvel espace prend forme. À bientôt pour la suite.</p>
      </div>
    </main>
  );
}
