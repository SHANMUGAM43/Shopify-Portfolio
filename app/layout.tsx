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
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shanmugam.dev"),
  title: {
    default: "Shanmugam Paramasivam | Senior Shopify Plus Developer",
    template: "%s | Shanmugam Paramasivam",
  },
  description:
    "Senior Shopify Plus Developer in Chennai building custom storefronts, theme customizations, store migrations, accessibility improvements and headless commerce with Liquid, React, Next.js and GraphQL.",
  keywords: [
    "Shopify Developer",
    "Senior Shopify Developer",
    "Shopify Plus Developer",
    "Headless Commerce",
    "Shopify Theme Developer",
    "Next.js Shopify",
    "Shopify Plus",
    "Liquid Developer",
    "Frontend Engineer",
    "Store Migration",
    "Accessibility",
  ],
  authors: [{ name: "Shanmugam Paramasivam" }],
  creator: "Shanmugam Paramasivam",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shanmugam.dev",
    siteName: "Shanmugam Paramasivam Portfolio",
    title: "Shanmugam Paramasivam | Senior Shopify Plus Developer",
    description:
      "Custom Shopify Plus storefronts, theme development, migrations, accessibility improvements and headless commerce solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shanmugam Paramasivam | Senior Shopify Plus Developer",
    description:
      "Shopify Plus developer focused on custom storefronts, migrations, accessibility and headless commerce.",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased bg-[#050505] text-[#f5f5f7] overflow-x-hidden`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const key = 'portfolio-theme'; const saved = localStorage.getItem(key); const theme = saved === 'light' || saved === 'dark' ? saved : 'dark'; const root = document.documentElement; root.classList.remove('light', 'dark'); root.classList.add(theme); root.dataset.theme = theme; root.style.colorScheme = theme; } catch {} })();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
