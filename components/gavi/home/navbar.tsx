"use client";

import { navLinks } from "@/lib/gavi-data";
import { useCallback } from "react";


export default function Navbar() {
  const scrollToSection = useCallback((index: number) => {
    const target = document.querySelector(
      `[data-scroll-index="${index}"]`
    ) as HTMLElement | null;

    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY + 1;
    const $ = window.jQuery as
      | ((sel: string) => {
          stop: (clear: boolean) => {
            animate: (
              props: { scrollTop: number },
              duration: number,
              easing: string
            ) => void;
          };
        })
      | undefined;

    if ($) {
      $("html, body").stop(true).animate({ scrollTop: top }, 600, "swing");
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }

    document.querySelectorAll("[data-scroll-nav]").forEach((link) => {
      link.classList.remove("active");
    });
    document
      .querySelector(`[data-scroll-nav="${index}"]`)
      ?.classList.add("active");
  }, []);

  return (
    <nav className="navbar">
      <div className="row justify-content-end rest">
        <div className="col-lg-8 rest">
          <ul className="navbar-nav main-bg d-flex justify-content-end">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a
                  href={`#section-${link.scrollIndex}`}
                  data-scroll-nav={link.scrollIndex}
                  aria-label={`Go to ${link.label}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.scrollIndex);
                  }}
                >
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
