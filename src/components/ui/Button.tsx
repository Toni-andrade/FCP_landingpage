import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
};

const styles = {
  primary:
    "bg-accent text-white hover:bg-mid-navy shadow-md hover:shadow-lg",
  secondary:
    "border-2 border-white text-white hover:bg-white/10",
  ghost:
    "border-2 border-white/60 text-white hover:border-white hover:bg-white/5",
} as const;

export function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http");
  const base = "inline-flex items-center justify-center rounded-lg px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
