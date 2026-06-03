import type { Metadata } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import { Backdrop } from "@/components/backdrop";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Lockrs — Local-first password manager",
    template: "%s · Lockrs",
  },
  description:
    "Open-source password manager with a local vault, Argon2id, AES-256-GCM, import, and API key hashes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Backdrop />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
