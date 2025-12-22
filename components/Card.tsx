import { cx } from "./utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export default function Card({ children, className, as = "div" }: CardProps) {
  const Component = as;
  return (
    <Component
      className={cx(
        "rounded-2xl border border-border bg-surface/90 p-6 shadow-sm",
        className
      )}
    >
      {children}
    </Component>
  );
}
