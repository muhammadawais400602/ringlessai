"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  as?: keyof React.JSX.IntrinsicElements;
  delay?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

export default function Reveal({ children, as = "div", delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  const Tag = as as React.ElementType;
  const delayClass = delay ? ` reveal-delay-${delay}` : "";
  return (
    <Tag ref={ref as React.Ref<HTMLElement>} className={`reveal${shown ? " reveal-in" : ""}${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
