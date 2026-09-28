import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, IBM_Plex_Mono, Inter } from "next/font/google";
import { profile } from "@/data/socials";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
  display: "swap",
});
const title = "John Reygun — Full-Stack Software Developer";
const description =
  "Portfolio of John Reygun, a Full-Stack Software Developer building modern, scalable web and mobile applications with contemporary technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.url }],
  openGraph: {
    title,
    description,
    url: profile.url,
    siteName: "John Reygun · CodeRegTech",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/coderegtech-brand.webp",
        width: 1923,
        height: 818,
        alt: "CodeRegTech — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/coderegtech-brand.webp"],
  },
  icons: { icon: "/icon.png", apple: "/icon.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${display.variable} ${mono.variable} font-sans antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-5 top-4 z-[100] -translate-y-24 rounded bg-foreground px-5 py-3 text-background focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
