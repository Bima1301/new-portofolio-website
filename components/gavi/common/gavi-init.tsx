"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    jQuery?: ((sel: string | Window | HTMLElement) => Record<string, unknown>) & {
      scrollIt?: (opts: Record<string, unknown>) => void;
    };
  }
}

function initSkillBars() {
  const jq = window.jQuery as
    | ((sel: string | Window | HTMLElement) => {
        offset(): { top: number } | undefined;
        outerHeight(): number;
        scrollTop(): number;
        height(): number;
        attr(name: string): string | undefined;
        css(props: Record<string, string>): void;
        each(fn: (this: HTMLElement) => void): void;
        off(event: string): void;
        on(event: string, handler: () => void): void;
      })
    | undefined;

  if (!jq) return;

  const wind = jq(window);
  const run = () => {
    jq(".skill-progress .progres").each(function (this: HTMLElement) {
      const $el = jq(this);
      const offset = $el.offset();
      if (!offset) return;
      const bottomOfObject = offset.top + $el.outerHeight();
      const bottomOfWindow = wind.scrollTop() + wind.height();
      const myVal = $el.attr("data-value");
      if (bottomOfWindow > bottomOfObject && myVal) {
        $el.css({ width: myVal });
      }
    });
  };

  wind.off("scroll.gaviSkills");
  wind.on("scroll.gaviSkills", run);
  run();
}

function initScrollIt() {
  const $ = window.jQuery as
    | { scrollIt?: (opts: Record<string, unknown>) => void }
    | undefined;
  if (!$?.scrollIt) return;

  $.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: "swing",
    scrollTime: 600,
    activeClass: "active",
    topOffset: 0,
  });
}

export default function GaviInit() {
  useEffect(() => {
    const onReady = () => {
      initScrollIt();
      initSkillBars();
    };

    const $ = window.jQuery as { scrollIt?: unknown } | undefined;
    if ($?.scrollIt) {
      onReady();
    }

    window.addEventListener("gavi:scripts-ready", onReady);

    return () => {
      window.removeEventListener("gavi:scripts-ready", onReady);
      const jq = window.jQuery as
        | ((sel: Window) => { off: (event: string) => void })
        | undefined;
      jq?.(window).off("scroll.gaviSkills");
    };
  }, []);

  return null;
}
