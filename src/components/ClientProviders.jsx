"use client";

import dynamic from "next/dynamic";

const Toaster = dynamic(() => import("sonner").then((m) => ({ default: m.Toaster })), { ssr: false });
const GoogleAnalytics = dynamic(
    () => import("@next/third-parties/google").then((m) => ({ default: m.GoogleAnalytics })),
    { ssr: false }
);

export default function ClientProviders({ gaId }) {
    return (
        <>
            <Toaster richColors position="bottom-right" />
            {gaId && <GoogleAnalytics gaId={gaId} />}
        </>
    );
}
