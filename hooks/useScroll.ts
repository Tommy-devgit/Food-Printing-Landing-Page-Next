"use client";

import { useEffect, useState } from "react";

export function useScroll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const next = max > 0 ? h.scrollTop / max : 0;
      setProgress(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}
