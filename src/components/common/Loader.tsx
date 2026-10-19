"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LoaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function Loader({ onComplete, minDuration = 1200 }: LoaderProps) {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosing(true);
      if (onComplete) onComplete();
      // Wait for the slide-up animation to finish, then unmount
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 800);
      return () => clearTimeout(hideTimer);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration, onComplete]);

  if (!visible) return null;

  return (
    <div
      className="loader"
      style={{
        display: "flex",
        transform: closing ? "translate3d(0, -100%, 0)" : "translate3d(0, 0%, 0)",
        transition: closing ? "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)" : "none",
        willChange: "transform",
      }}
    >
      <Image
        src="/symbol-light.svg"
        alt="Loading"
        width={100}
        height={100}
        priority
        className="logo-loader"
        style={{
          animation: "spin 3.5s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
