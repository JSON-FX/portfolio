import type { Metadata } from "next";
import { Chivo, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-chivo",
  display: "swap",
});
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaysonalanano.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jayson Alanano — Full-Stack Developer",
  description:
    "Full-stack developer with 9+ years across React, Next.js, React Native, Laravel, and WordPress. Remote-first, shipping production software and CI/CD for teams worldwide.",
  keywords: [
    "Jayson Alanano",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "React Native",
    "Laravel",
    "WordPress",
    "TypeScript",
    "DevOps",
    "Remote Developer",
  ],
  authors: [{ name: "Jayson Alanano", url: "https://github.com/JSON-FX" }],
  creator: "Jayson Alanano",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jayson Alanano — Full-Stack Developer",
    description:
      "9+ years across React, Next.js, React Native, Laravel, and WordPress. Remote-first, open to full-time roles.",
    siteName: "Jayson Alanano",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayson Alanano — Full-Stack Developer",
    description:
      "9+ years across React, Next.js, React Native, Laravel, and WordPress. Remote-first, open to full-time roles.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${chivo.variable} ${plex.variable} ${jbmono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
