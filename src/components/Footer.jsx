import { useState } from "react";

const LINK_GROUPS = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export default function Footer() {
  return (
    <footer id="about" className="mt-20 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark />
              <span className="font-display text-lg font-semibold">
                Dev <span className="text-gradient">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                GitHub
              </a>
              <a href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                Twitter
              </a>
              <a href="#" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
                LinkedIn
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-text)]">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              Privacy
            </a>
            <a href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
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
