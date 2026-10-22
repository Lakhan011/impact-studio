"use client";

import React, { useState, useRef } from "react";

interface ProjectImageHoverProps {
  imageSrc: string;
  imageAlt: string;
  extraClass?: string;
}

export default function ProjectImageHover({
  imageSrc,
  imageAlt,
  extraClass = "",
}: ProjectImageHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Centered around cursor (circle badge is 100px diameter)
    const x = e.clientX - rect.left - 50;
    const y = e.clientY - rect.top - 50;
    setCoords({ x, y });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 50;
    const y = e.clientY - rect.top - 50;
    setCoords({ x, y });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      className={`wrap-image-project-main ${extraClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", overflow: "hidden", width: "100%" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="image-project-main"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        className="view-circle"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: "auto",
          bottom: "auto",
          margin: 0,
          pointerEvents: "none",
          transform: isHovered
            ? `translate3d(${coords.x}px, ${coords.y}px, 0px) scale(1)`
            : `translate3d(${coords.x}px, ${coords.y}px, 0px) scale(0)`,
          opacity: isHovered ? 1 : 0,
          transition: isHovered
            ? "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.25s ease"
            : "transform 0.25s ease-out, opacity 0.25s ease-out",
          zIndex: 20,
        }}
      >
        <div className="wrap-text-view">
          <div className="text-view">View</div>
          <div className="text-view text-view-clone" aria-hidden="true">
            View
          </div>
        </div>
      </div>
    </div>
  );
}
