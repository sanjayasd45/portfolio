import { Geist, Geist_Mono, Space_Grotesk, Public_Sans, Plus_Jakarta_Sans, Quicksand, Fraunces } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

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
  keywords: ["Web Designer", "Local SEO", "Business Websites", "Freelance Developer", "Conversion Optimization", "Developer Chowk"],
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
        url: "/og-image.png", // Ensure this image exists or update it later
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
    "google-site-verification": "your-verification-code", // User might need to update this manually later
  },
  alternates: {
    canonical: "https://developerchowk.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${publicSans.variable} ${plusJakartaSans.variable} ${quicksand.variable} ${fraunces.variable} font-display antialiased`}
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
      </body>
    </html>
  );
}