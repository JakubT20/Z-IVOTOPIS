"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 320);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Vrátiť sa hore na úvod"
          className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-white/16 bg-black/78 text-white shadow-[0_18px_48px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToHero}
        >
          <ArrowUp aria-hidden="true" className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
