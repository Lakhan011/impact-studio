"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // On the homepage (/ and /homepage), Impact Studio uses the full-bleed giant header without the sticky navbar
  if (pathname === "/" || pathname === "/homepage") {
    return null;
  }

  return <Navbar />;
}
