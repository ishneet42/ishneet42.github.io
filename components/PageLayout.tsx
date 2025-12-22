import { cx } from "./utils";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-6 pb-20 pt-14", className)}>
      {children}
    </div>
  );
}
