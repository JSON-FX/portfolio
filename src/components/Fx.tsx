"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Client-side motion: scroll-triggered reveals, hero parallax, the typed
 * terminal command, and Lenis smooth-scroll. All effects respect
 * prefers-reduced-motion.
 */
export default function Fx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- Scroll-triggered reveals ---
    const revs = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    let io: IntersectionObserver | null = null;
    if (reduce) {
      revs.forEach((el) => el.classList.add("in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revs.forEach((el) => io!.observe(el));
    }

    // --- Hero parallax layers ---
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-px]"));
    let ticking = false;
    const applyParallax = () => {
      const y = window.scrollY || window.pageYOffset;
      for (const el of layers) {
        const s = parseFloat(el.dataset.px || "0");
        el.style.transform = `translate3d(0, ${(y * s).toFixed(1)}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(applyParallax);
      }
    };

    const typed = document.getElementById("typed");
    const hero = document.getElementById("hero");
    const word = "whoami";
    let typeTimer: number | undefined;

    let lenis: Lenis | null = null;
    let rafId = 0;
    const anchorHandlers: Array<[HTMLAnchorElement, (e: Event) => void]> = [];

    if (reduce) {
      if (typed) typed.textContent = word;
      hero?.classList.add("typed-done");
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      applyParallax();

      // Smooth scrolling
      lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      // Route in-page anchor clicks through Lenis (offset for the fixed nav)
      const anchors = Array.from(
        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      );
      anchors.forEach((a) => {
        const handler = (e: Event) => {
          const id = a.getAttribute("href");
          if (id && id.length > 1) {
            const target = document.querySelector<HTMLElement>(id);
            if (target && lenis) {
              e.preventDefault();
              lenis.scrollTo(target, { offset: -70 });
            }
          }
        };
        a.addEventListener("click", handler);
        anchorHandlers.push([a, handler]);
      });

      // Typewriter for the hero command
      let i = 0;
      const step = () => {
        if (typed && i <= word.length) {
          typed.textContent = word.slice(0, i);
          i++;
          typeTimer = window.setTimeout(step, 95);
        } else {
          hero?.classList.add("typed-done");
        }
      };
      step();
    }

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (typeTimer) clearTimeout(typeTimer);
      anchorHandlers.forEach(([a, h]) => a.removeEventListener("click", h));
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
