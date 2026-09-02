"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/personal";

export function useActiveSection() {
  const [active, setActive] = useState<string>(navLinks[0]?.id ?? "home");

  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    const handler = (sectionId: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(sectionId);
        }
      });
    };

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (!el) return;
      const observer = new IntersectionObserver(handler(link.id), {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      });
      observer.observe(el);
      observers.set(link.id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return active;
}
