import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Left: logo (desktop) / hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <button
            className="btn btn-ghost btn-square lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>

          <a href="#home" className="hidden items-center gap-2 lg:flex">
            <LogoMark />
            <span className="font-display text-lg font-semibold tracking-tight">
              Dev <span className="text-gradient">Stack</span>
            </span>
          </a>
        </div>

        {/* Center: brand on mobile, links on desktop */}
        <a href="#home" className="flex items-center gap-2 lg:hidden">
          <LogoMark />
          <span className="font-display text-base font-semibold tracking-tight">
            Dev <span className="text-gradient">Stack</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              className={`text-sm transition-colors ${
                active === link
                  ? "font-medium text-[var(--grad-via)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: auth actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="btn btn-ghost btn-sm text-[var(--color-text)] sm:btn-md">Sign In</button>
          <button className="btn btn-sm rounded-full border-none btn-gradient sm:btn-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown links */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--color-border)] px-5 py-3 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="rounded-lg px-2 py-2 text-sm text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)]"
              onClick={() => {
                setActive(link);
                setOpen(false);
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function LogoMark() {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src="/assets/logo.png"
        alt="Dev Stack logo"
        className="h-8 w-8 rounded-lg object-contain"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand font-display text-xs font-bold text-white">
      DS
    </span>
  );
}
