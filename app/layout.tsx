import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: {
    default: "Shanmugam Paramasivam — Shopify Developer",
    template: "%s | Shanmugam Paramasivam",
  },
  description:
    "Senior Shopify Developer specialising in headless commerce, custom storefronts, Liquid theme development and Shopify app integrations.",
  keywords: [
    "Shopify Developer",
    "Headless Commerce",
    "Shopify Theme Developer",
    "Next.js Shopify",
    "Shopify Plus",
    "Liquid Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Shanmugam Paramasivam" }],
  creator: "Shanmugam Paramasivam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shanmugam.dev",
    siteName: "Shanmugam Paramasivam Portfolio",
    title: "Shanmugam Paramasivam — Shopify Developer",
    description:
      "Senior Shopify Developer specialising in headless commerce, custom storefronts and Shopify app integrations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmugam Paramasivam — Shopify Developer",
    description:
      "Senior Shopify Developer specialising in headless commerce, custom storefronts and Shopify app integrations.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} antialiased bg-[#050505] text-[#f5f5f7] overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
