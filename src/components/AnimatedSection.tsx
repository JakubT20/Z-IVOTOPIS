"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  tone?: "dark" | "warm" | "surface";
};

export function AnimatedSection({
  children,
  className = "",
  id,
  tone = "surface",
  ...props
}: AnimatedSectionProps) {
  const toneClass = {
    dark: "bg-[var(--page-bg)] text-[var(--text-primary)]",
    warm: "bg-[var(--warm-bg)] text-[var(--warm-text)]",
    surface: "bg-[var(--surface)] text-[var(--text-primary)]"
  }[tone];

  return (
    <motion.section
      id={id}
      className={`${toneClass} scroll-mt-24 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
