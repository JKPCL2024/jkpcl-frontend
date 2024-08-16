import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.APP_URL
            ? `${process.env.APP_URL}`
            : process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : `http://localhost:${process.env.PORT || 3000}`
    ),
    title: "jkpcl",
    description: "An agricultural solution to empower the farmers.",
    alternates: {
        canonical: "/"
    },
    openGraph: {
        url: "/",
        title: "jkpcl",
        description: "An agricultural solution to empower the farmers.",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "jkpcl",
        description: "An agricultural solution to empower the farmers."
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={GeistSans.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
