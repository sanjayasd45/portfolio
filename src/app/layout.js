import { GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { Toaster } from "sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://developerchowk.com"),
  title: {
    default: "Developer Chowk | Enterprise MERN Stack Solutions",
    template: "%s | Developer Chowk",
  },
  description: "Enterprise-grade MERN stack development for ambitious brands. Scalable architecture, SOC2 compliance, and high-performance web applications.",
  keywords: [
    "Enterprise Web Development",
    "MERN Stack Architecture",
    "SaaS Product Engineering",
    "Scalable Web Apps",
    "Developer Chowk",
    "Next.js Enterprise Solutions",
    "Custom Dashboard Development",
    "API Microservices",
    "Sanjay Developer",
    "Full Stack Engineer India"
  ],
  authors: [{ name: "Developer Chowk" }],
  creator: "Developer Chowk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developerchowk.com",
    siteName: "Developer Chowk",
    title: "Developer Chowk | Enterprise MERN Stack Solutions",
    description: "Robust, secure, and high-performance web applications built to scale.",
    images: [
      {
        url: "/og-image-enterprise.png",
        width: 1200,
        height: 630,
        alt: "Developer Chowk Enterprise Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Chowk | Enterprise MERN Stack Solutions",
    description: "Robust, secure, and high-performance web applications built to scale.",
    creator: "@developerchowk",
    images: ["/og-image-enterprise.png"],
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
  other: {
    "google-site-verification": "your-verification-code",
  },
  alternates: {
    canonical: "https://developerchowk.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body
        className={`${plusJakartaSans.variable} font-display antialiased bg-slate-950 text-slate-100`}
      >
        <JsonLd />
        {children}
        <Toaster position="top-center" richColors />
        <GoogleAnalytics gaId="G-YWWSE3Z213" />
      </body>
    </html>
  );
}