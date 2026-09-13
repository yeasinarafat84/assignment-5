import { useState } from "react";

export default function Hero() {
  const [failed, setFailed] = useState(false);

  return (
    <section id="home" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Build Your Ideal
            <br />
            <span className="text-gradient">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="btn rounded-full border-none px-6 btn-gradient"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="btn btn-outline rounded-full border-[var(--color-border)] px-6 text-[var(--color-text)] hover:border-[var(--color-text)] hover:bg-transparent"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          {!failed ? (
            <img
              src="/assets/hero-banner.png"
              alt="Development stack illustration"
              className="h-auto w-full max-w-sm object-contain"
              onError={() => setFailed(true)}
            />
          ) : (
            <IsometricStackArt />
          )}
        </div>
      </div>
    </section>
  );
}

function IsometricStackArt() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="h-auto w-full max-w-sm drop-shadow-[0_25px_40px_rgba(139,92,246,0.25)]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="plateTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="55%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#fbcfe8" />
        </linearGradient>
        <linearGradient id="plateLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#6d28d9" />
        </linearGradient>
        <linearGradient id="plateRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#be185d" />
        </linearGradient>
        <linearGradient id="baseTop" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
        <linearGradient id="baseLeft" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="baseRight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4338ca" />
        </linearGradient>
      </defs>

      {/* base platform */}
      <g>
        <polygon points="210,260 340,300 210,340 80,300" fill="url(#baseTop)" />
        <polygon points="80,300 210,340 210,380 80,340" fill="url(#baseLeft)" />
        <polygon points="340,300 210,340 210,380 340,340" fill="url(#baseRight)" />
      </g>

      {/* connecting posts */}
      <rect x="100" y="235" width="10" height="55" fill="#a78bfa" opacity="0.8" />
      <rect x="310" y="235" width="10" height="55" fill="#f472b6" opacity="0.8" />

      {/* top plate */}
      <g>
        <polygon points="210,60 320,95 210,130 100,95" fill="url(#plateTop)" />
        <polygon points="100,95 210,130 210,165 100,130" fill="url(#plateLeft)" />
        <polygon points="320,95 210,130 210,165 320,130" fill="url(#plateRight)" />
      </g>

      {/* small module on top plate */}
      <rect x="178" y="55" width="52" height="34" rx="8" fill="#ffffff" opacity="0.9" transform="skewX(-8)" />
      <text x="196" y="78" fontFamily="Space Grotesk, sans-serif" fontSize="18" fontWeight="700" fill="#7c3aed">Aa</text>

      <circle cx="150" cy="100" r="7" fill="#fef3c7" />
      <circle cx="270" cy="100" r="7" fill="#bbf7d0" />

      {/* middle floating plate */}
      <g>
        <polygon points="210,160 300,188 210,216 120,188" fill="#eef2ff" opacity="0.9" />
        <polygon points="120,188 210,216 210,240 120,212" fill="#c7d2fe" opacity="0.9" />
        <polygon points="300,188 210,216 210,240 300,212" fill="#a5b4fc" opacity="0.9" />
      </g>
      <circle cx="185" cy="196" r="10" fill="#818cf8" />
      <rect x="220" y="188" width="34" height="14" rx="4" fill="#c4b5fd" />
    </svg>
  );
}
