import { cx } from "./utils";

type TagProps = {
  label: string;
  className?: string;
};

export default function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wide text-subtle",
        className
      )}
    >
      {label}
    </span>
  );
}
