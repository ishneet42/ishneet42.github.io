"use client";

import { useRef } from "react";
import { cx } from "./utils";

type CarouselProps = {
  children: React.ReactNode;
  ariaLabel: string;
  className?: string;
};

export default function Carousel({ children, ariaLabel, className }: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const node = scrollerRef.current;
    if (!node) return;
    const width = node.clientWidth;
    node.scrollBy({
      left: direction === "left" ? -width * 0.9 : width * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <div className={cx("space-y-3", className)}>
      <div
        ref={scrollerRef}
        aria-label={ariaLabel}
        className="flex gap-6 overflow-x-auto pb-2 pt-1 sm:gap-8"
      >
        {children}
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Scroll left"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard("right")}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-foreground transition hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Scroll right"
        >
          →
        </button>
      </div>
    </div>
  );
}
