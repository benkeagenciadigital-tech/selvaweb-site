import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 rounded-[8px] px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-jungle hover:bg-lime-bright hover:shadow-[0_0_40px_-8px_rgba(166,206,57,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-lime/40 text-mist hover:border-lime hover:text-lime hover:-translate-y-0.5 hover:shadow-[0_0_30px_-12px_rgba(166,206,57,0.6)]",
  ghost: "text-signal hover:text-lime",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = false,
}: Props) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
