"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navigation/Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/";

  return (
    <>
      {showNavbar ? <Navbar /> : null}
      {children}
    </>
  );
}
