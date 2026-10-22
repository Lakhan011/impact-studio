"use client";

import { useEffect } from "react";

/**
 * DynamicFavicon
 * Rotates the browser tab favicon based on window scroll position.
 * Safe for React 19 / Next.js reconciliation — never removes nodes from <head>.
 */
export default function DynamicFavicon() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = document.createElement("canvas");
    const size = 32;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/favicon-192x192.png";

    let lastAngle = 0;
    let rafId: number | null = null;
    let isImageLoaded = false;

    const renderFavicon = (angle: number) => {
      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(size / 2, size / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.drawImage(img, -size / 2, -size / 2, size, size);
      ctx.restore();

      const dataUrl = canvas.toDataURL("image/png");

      let link = document.querySelector<HTMLLinkElement>("link#dynamic-favicon");
      if (!link) {
        link = document.createElement("link");
        link.id = "dynamic-favicon";
        link.rel = "icon";
        link.type = "image/png";
        document.head.appendChild(link);
      }
      link.href = dataUrl;
    };

    img.onload = () => {
      isImageLoaded = true;
      const initialAngle = -window.scrollY * 0.4;
      lastAngle = initialAngle;
      renderFavicon(initialAngle);
    };

    const handleScroll = () => {
      if (!isImageLoaded) return;
      if (rafId !== null) return;

      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        const currentAngle = -window.scrollY * 0.4;
        if (Math.abs(currentAngle - lastAngle) >= 3) {
          lastAngle = currentAngle;
          renderFavicon(currentAngle);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return null;
}
