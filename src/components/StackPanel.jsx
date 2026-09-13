export default function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="sticky top-24 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
      <h2 className="font-display text-lg font-semibold text-[var(--color-text)]">Your Stack</h2>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology${stack.length === 1 ? "" : "ies"} Selected`}
      </p>

      <div className="mt-5 flex flex-col gap-3">
        {stack.length === 0 ? (
          <EmptyState />
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white p-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <img src={tech.icon} alt={tech.name} className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-[var(--color-text)]">{tech.name}</p>
                <p className="text-[11px] text-[var(--color-text-muted)]">{tech.category}</p>
              </div>
              <button
                aria-label={`Remove ${tech.name}`}
                onClick={() => onRemove(tech.id)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:bg-rose-50 hover:text-rose-500"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-medium text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}

function EmptyState() {
  return (
    <div className="rounded-xl border border-dashed border-[var(--color-border)] px-4 py-10 text-center">
      <p className="text-sm text-[var(--color-text-muted)]">Your stack is empty.</p>
    </div>
  );
}
