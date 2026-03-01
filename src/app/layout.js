import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import ClientProviders from "@/components/ClientProviders";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
  adjustFontFallback: true,
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://developerchowk.com"),
  title: {
    default: "Developer Chowk | Expert Web Development & Software Services",
    template: "%s | Developer Chowk",
  },
  description:
    "I build fast, scalable, and SEO-friendly websites, SaaS platforms, and custom software for startups and businesses across India. MERN stack specialist delivering results in 1–2 weeks.",
  keywords: [
    "Web Development India",
    "Best Web Developer India",
    "MERN Stack Developer India",
    "Custom Website Design India",
    "SaaS Development Services",
    "E-commerce Website Builder India",
    "Software Development Company India",
    "Next.js Developer India",
    "Full Stack Developer India",
    "Business Website Development India",
  ],
  authors: [{ name: "Sanjay", url: "https://github.com/sanjayasd45" }],
  creator: "Sanjay (Developer Chowk)",
  publisher: "Developer Chowk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://developerchowk.com",
    siteName: "Developer Chowk",
    title: "Developer Chowk | Expert Web Development & Software Services",
    description:
      "Fast, scalable, and SEO-friendly websites, SaaS platforms, and custom software for startups and businesses across India.",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Developer Chowk - Web Development Services in Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Chowk | Expert Web Development & Software Services",
    description:
      "Fast, scalable websites, SaaS platforms, and custom software for businesses across India.",
    images: ["/logo1.png"],
    creator: "@thedeveloperchowk",
  },
  icons: {
    icon: [
      { url: "/logo1.png", sizes: "48x48", type: "image/png" },
      { url: "/logo1.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/logo1.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo1.png",
  },
  alternates: {
    canonical: "https://developerchowk.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-display antialiased bg-slate-950 text-slate-100`}
      >
        <JsonLd />
        {children}
        <ClientProviders gaId="G-YWWSE3Z213" />
      </body>
    </html>
  );
}