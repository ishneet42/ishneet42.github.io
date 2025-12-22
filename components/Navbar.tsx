"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { cx } from "./utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Community" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
        >
          Ishneet Kaur Chadha
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 text-sm md:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-full px-3 py-1.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-subtle hover:text-foreground"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </div>
      </nav>
      <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-6 pb-4 text-xs font-semibold uppercase tracking-[0.15em] text-subtle md:hidden">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cx(
                "whitespace-nowrap rounded-full px-3 py-1.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "bg-accent/10 text-accent"
                  : "border border-transparent hover:border-border"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
