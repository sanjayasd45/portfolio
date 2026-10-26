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
    default: "Developer Chowk | Full-Service Web Development & Digital Agency",
    template: "%s | Developer Chowk",
  },
  description:
    "We build fast, scalable, and conversion-engineered websites, SaaS platforms, and custom software for startups and scaling businesses. Full-cycle agency delivery in rapid 1–2 week sprints.",
  keywords: [
    "Web Development Agency India",
    "Full-Service Web Agency",
    "Custom Software Development Agency",
    "MERN Stack Agency India",
    "Next.js Development Agency",
    "SaaS Development Company",
    "E-commerce Website Builder",
    "Enterprise Web Applications",
    "Business Website Development India",
    "UI UX Design & Development Agency",
  ],
  authors: [{ name: "Developer Chowk Agency", url: "https://developerchowk.com" }],
  creator: "Developer Chowk Agency",
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
    title: "Developer Chowk | Full-Service Web Development & Digital Agency",
    description:
      "Full-cycle web development agency delivering high-speed websites, SaaS platforms, and custom software for ambitious businesses.",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Developer Chowk - Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Chowk | Full-Service Web Development & Digital Agency",
    description:
      "Fast, scalable web applications, SaaS platforms, and enterprise software engineered for business growth.",
    images: ["/logo1.png"],
    creator: "@thedeveloperchowk",
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icon.png",
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${plusJakartaSans.variable} font-display antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200`}
        suppressHydrationWarning
      >
        <ClientProviders gaId="G-YWWSE3Z213">
          <JsonLd />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}