export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">404</p>
        <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-white/60">The page you’re looking for doesn’t exist.</p>
      </div>
    </div>
  );
}
