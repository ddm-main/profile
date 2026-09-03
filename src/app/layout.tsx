import type { Metadata, Viewport } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/geist-mono";
import "./globals.scss";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.shortRole}`,
  description:
    "IT Manager specialising in Identity & Access Management and Data Security. 9+ years across IT infrastructure, cloud and cybersecurity. Pune, India.",
  openGraph: {
    title: `${profile.name} — ${profile.shortRole}`,
    description:
      "IT Manager specialising in Identity & Access Management and Data Security.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F7F8FC",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
