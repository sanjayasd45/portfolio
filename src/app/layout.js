import { GoogleAnalytics } from "@next/third-parties/google";
import { Public_Sans, Plus_Jakarta_Sans, Quicksand, Fraunces } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://developerchowk.com"),
  title: {
    default: "Developer Chowk | Freelance Web Designer & Developer",
    template: "%s | Developer Chowk",
  },
  description: "Helping businesses grow with high-conversion, modern web design and strategic SEO. Your friendly neighborhood developer at Developer Chowk.",
  keywords: [
    "Web Designer", 
    "Local SEO Expert", 
    "Business Website Developer", 
    "Freelance Web Developer", 
    "Conversion Rate Optimization", 
    "Developer Chowk", 
    "E-commerce Web Design",
    "Small Business Website",
    "Custom Web Development",
    "Next.js Developer"
  ],
  authors: [{ name: "Developer Chowk" }],
  creator: "Developer Chowk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developerchowk.com",
    siteName: "Developer Chowk",
    title: "Developer Chowk | Freelance Web Designer & Developer",
    description: "I build websites that grow local businesses with modern design and strategic SEO.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Developer Chowk Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Chowk | Freelance Web Designer & Developer",
    description: "I build websites that grow local businesses with modern design and strategic SEO.",
    creator: "@developerchowk",
    images: ["/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body
        className={`${publicSans.variable} ${plusJakartaSans.variable} ${quicksand.variable} ${fraunces.variable} font-display antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-YWWSE3Z213" />
      </body>
    </html>
  );
}