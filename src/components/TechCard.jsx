const DIFFICULTY_STYLES = {
  "Beginner-Friendly": "text-emerald-600 bg-emerald-50",
  Intermediate: "text-amber-600 bg-amber-50",
  Advanced: "text-rose-600 bg-rose-50",
};

const BADGE_PALETTE = [
  "text-emerald-600 bg-emerald-50",
  "text-sky-600 bg-sky-50",
  "text-amber-600 bg-amber-50",
  "text-rose-600 bg-rose-50",
  "text-violet-600 bg-violet-50",
  "text-cyan-600 bg-cyan-50",
];

// Deterministic pastel color per badge label, so the same badge text
// always renders with the same color without hardcoding every label.
function badgeStyle(label) {
  let hash = 0;
  for (let i = 0; i < label.length; i++) hash = (hash * 31 + label.charCodeAt(i)) % BADGE_PALETTE.length;
  return BADGE_PALETTE[hash];
}

export default function TechCard({ tech, isAdded, onAdd }) {
  const difficultyClass =
    DIFFICULTY_STYLES[tech.difficulty] ?? "text-[var(--color-text-muted)] bg-[var(--color-surface-raised)]";

  return (
    <div className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          <img src={tech.icon} alt={`${tech.name} icon`} className="h-full w-full object-contain" loading="lazy" />
        </div>
        {tech.badge && (
          <span className={`rounded-full px-3 py-1 text-[11px] font-medium ${badgeStyle(tech.badge)}`}>
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="font-display mt-4 text-lg font-semibold text-[var(--color-text)]">{tech.name}</h3>
      <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[var(--color-surface-raised)] px-2.5 py-1 text-[11px] text-[var(--color-text-muted)]">
          {tech.category}
        </span>
        <span className={`rounded-full px-2.5 py-1 text-[11px] ${difficultyClass}`}>
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1 text-[11px] font-medium text-[var(--color-text)]">
          <StarIcon />
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        className={`btn mt-5 rounded-xl border-none ${
          isAdded ? "btn-disabled bg-[var(--color-surface-raised)] text-[var(--color-text-muted)]" : "btn-dark"
        }`}
        disabled={isAdded}
        onClick={() => onAdd(tech)}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
