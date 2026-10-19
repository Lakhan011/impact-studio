import type { Metadata } from "next";
import { Suspense } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import "@/styles/webflow.css";
import NavbarWrapper from "@/components/navigation/NavbarWrapper";
import DynamicFavicon from "@/components/common/DynamicFavicon";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Impact Studio | Creative Agency Template",
  description: "Impact Studio is a Premium Webflow Template for agencies and creative studios.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className={`${dmSans.variable} ${playfair.variable}`}>
        <DynamicFavicon />
        <Suspense fallback={null}>
          <NavbarWrapper />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
