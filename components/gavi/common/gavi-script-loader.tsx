"use client";

import { useEffect } from "react";

const GAVI_SCRIPTS = [
  "/assets/js/jquery-3.6.0.min.js",
  "/assets/js/jquery-migrate-3.4.0.min.js",
  "/assets/js/plugins.js",
  "/assets/js/scripts.js",
] as const;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${src}"]`
    );
    if (existing?.dataset.gaviLoaded === "1") {
      resolve();
      return;
    }
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => reject(new Error(`Failed to load ${src}`)),
        { once: true }
      );
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.gavi = "1";
    script.onload = () => {
      script.dataset.gaviLoaded = "1";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

let loadPromise: Promise<void> | null = null;

function loadGaviScripts(): Promise<void> {
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    for (const src of GAVI_SCRIPTS) {
      await loadScript(src);
    }
    window.dispatchEvent(new Event("gavi:scripts-ready"));
  })().catch(() => {
    loadPromise = null;
  });

  return loadPromise;
}

export default function GaviScriptLoader() {
  useEffect(() => {
    void loadGaviScripts();
  }, []);

  return null;
}
