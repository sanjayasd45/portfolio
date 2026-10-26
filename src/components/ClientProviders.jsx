"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

const Toaster = dynamic(() => import("sonner").then((m) => ({ default: m.Toaster })), { ssr: false });
const GoogleAnalytics = dynamic(
    () => import("@next/third-parties/google").then((m) => ({ default: m.GoogleAnalytics })),
    { ssr: false }
);

export default function ClientProviders({ children, gaId }) {
    useEffect(() => {
        // Clear legacy dark theme storage from previous sessions so light theme is cleanly selected by default
        try {
            if (typeof window !== "undefined") {
                const legacy = localStorage.getItem("theme");
                if (legacy === "dark" && !localStorage.getItem("dc_theme_v2")) {
                    localStorage.removeItem("theme");
                }
            }
        } catch {
            // ignore
        }

        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                    registration.unregister();
                }
            });
            if ("caches" in window) {
                caches.keys().then((keys) => {
                    for (const key of keys) {
                        caches.delete(key);
                    }
                });
            }
        }
    }, []);

    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="dc_theme_v2">
            {children}
            <Toaster richColors position="bottom-right" />
            {gaId && <GoogleAnalytics gaId={gaId} />}
        </ThemeProvider>
    );
}
