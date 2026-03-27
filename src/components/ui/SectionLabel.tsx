export function SectionLabel({ children, variant = "dark" }: { children: React.ReactNode; variant?: "dark" | "light" }) {
  return (
    <p className={variant === "light" ? "section-label-light" : "section-label"}>
      {children}
    </p>
  );
}
