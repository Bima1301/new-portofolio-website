"use client";

import { useLayoutEffect } from "react";

/** Hanya konten dalam section — bukan wrapper/background (.sec-box, .main-bg, dll.) */
const REVEAL_SELECTOR = [
  ".intro-profile .img",
  ".intro-profile .info",
  ".intro-profile .content",
  ".sec-head",
  ".skills .col-md-6 > .item",
  ".experience-entry",
  ".portfolio-grid .item",
  ".services .item",
  ".testimonials .item",
  ".price .item",
  ".contact .full-width",
].join(", ");

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export default function ScrollAnimations() {
  useLayoutEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let retryId = 0;

    const reveal = (el: HTMLElement, index: number) => {
      if (el.dataset.gaviReveal === "1") return;
      el.dataset.gaviReveal = "1";
      el.classList.add("gavi-reveal");
      el.style.setProperty(
        "--reveal-delay",
        `${Math.min(index % 6, 5) * 0.06}s`
      );

      if (isInViewport(el)) {
        el.classList.add("gavi-reveal--visible");
        return;
      }

      observer?.observe(el);
    };

    const init = () => {
      if (cancelled) return;

      const elements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
      if (!elements.length) {
        retryId = requestAnimationFrame(init);
        return;
      }

      observer?.disconnect();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("gavi-reveal--visible");
            observer?.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );

      elements.forEach((el, index) => reveal(el, index));
    };

    init();

    return () => {
      cancelled = true;
      cancelAnimationFrame(retryId);
      observer?.disconnect();
    };
  }, []);

  return null;
}
