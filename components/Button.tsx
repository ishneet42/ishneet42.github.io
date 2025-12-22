import Link from "next/link";
import { cx } from "./utils";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants = {
  primary: "bg-accent text-accent-foreground hover:bg-accent/90",
  secondary:
    "border border-border bg-surface text-foreground hover:border-accent/40 hover:text-accent",
  subtle: "bg-muted text-foreground hover:bg-muted/70",
};

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
  download?: boolean;
  ariaLabel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  download,
  ariaLabel,
}: ButtonProps) {
  const classes = cx(baseClasses, variants[variant], className);

  if (href) {
    const isExternal = external || href.startsWith("http");
    const shouldUseAnchor = isExternal || download;
    if (shouldUseAnchor) {
      return (
        <a
          href={href}
          className={classes}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          download={download}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} aria-label={ariaLabel} type="button">
      {children}
    </button>
  );
}
