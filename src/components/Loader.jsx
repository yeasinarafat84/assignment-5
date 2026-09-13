export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-[var(--color-text-muted)]">
      <span className="loading loading-spinner loading-lg text-[var(--grad-via)]" />
      <p className="font-mono-label text-sm">Loading technologies…</p>
    </div>
  );
}
