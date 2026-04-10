"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

export function HorizontalRule() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="overflow-hidden" style={{ height: "1px" }}>
      <div
        style={{
          height: "1px",
          background: "var(--border)",
          transformOrigin: "left",
          transform: isInView ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
