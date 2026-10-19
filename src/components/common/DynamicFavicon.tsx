"use client";

import { useEffect } from "react";

/**
 * DynamicFavicon
 * Rotates the browser tab favicon based on window scroll position:
 * - Scrolling up: rotates clockwise
 * - Scrolling down: rotates counter-clockwise
 * Matches the exact behavior and formula of the hero section symbol.
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

      let link = document.querySelector<HTMLLinkElement>("link[data-dynamic-favicon]");
      if (!link) {
        // Remove prior static icon links so browser immediately switches to dynamic icon
        document
          .querySelectorAll<HTMLLinkElement>("link[rel*='icon']")
          .forEach((el) => {
            if (el.getAttribute("data-dynamic-favicon") !== "true") {
              el.parentNode?.removeChild(el);
            }
          });
        link = document.createElement("link");
        link.setAttribute("data-dynamic-favicon", "true");
        link.rel = "icon";
        link.type = "image/png";
        document.head.appendChild(link);
      }
      link.href = dataUrl;
    };

    img.onload = () => {
      isImageLoaded = true;
      // Initial render at current scroll
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
        // Only update if angle difference is at least 2 degrees to avoid unnecessary DOM thrashing
        if (Math.abs(currentAngle - lastAngle) >= 2) {
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
