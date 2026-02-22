import { GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { Toaster } from "sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://developerchowk.com"),
  title: {
    default: "Developer Chowk | Best Web Development Services in Lucknow",
    template: "%s | Developer Chowk",
  },
  description: "Developer Chowk offers expert MERN stack development, custom websites, and booking systems in Lucknow. We build scalable, secure, and SEO-friendly digital solutions for startups and businesses.",
  keywords: [
    "Web Development Lucknow",
    "Best Web Developer in Lucknow",
    "MERN Stack Developer India",
    "Custom Website Design Lucknow",
    "SaaS Development Services",
    "E-commerce Website Builder Lucknow",
    "Software Development Company Lucknow",
    "Next.js Developer Lucknow",
    "Portfolio Website Developer",
    "Business Website Development India"
  ],
  authors: [{ name: "Sanjay", url: "https://github.com/sanjayasd45" }],
  creator: "Sanjay (Developer Chowk)",
  publisher: "Developer Chowk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/logo1.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
      { url: "/logo1.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "google-site-verification": "your-verification-code",
  },
  alternates: {
    canonical: "https://developerchowk.com",
  },
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
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