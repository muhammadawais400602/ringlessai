import { CornerUpRight } from "lucide-react";

export function Eyebrow({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <span className={`eyebrow${dark ? " eyebrow-dark" : ""} ${className}`.trim()}>
      {children}
      <CornerUpRight size={16} strokeWidth={2.2} aria-hidden />
    </span>
  );
}

export function CtaButton({
  href,
  children,
  variant = "dark",
  className = "",
  tabIndex,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  tabIndex?: number;
}) {
  return (
    <a href={href} tabIndex={tabIndex} className={`btn btn-${variant} ${className}`.trim()}>
      <span>{children}</span>
      <span className="arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
  );
}
