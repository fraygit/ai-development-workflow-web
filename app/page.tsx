import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 text-center px-6">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            AIDevFlow
          </h1>
          <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            AI-powered development workflow automation. Bring your own runners,
            design workflows visually, and let the platform handle the rest.
          </p>
        </div>

        <Link
          href="/sign-up"
          className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Get started
        </Link>

        <p className="text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"
          >
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
}
