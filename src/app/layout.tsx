import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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
        canonical: "/",
    },
    openGraph: {
        url: "/",
        title: "jkpcl",
        description: "An agricultural solution to empower the farmers.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "jkpcl",
        description: "An agricultural solution to empower the farmers.",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="en" suppressHydrationWarning>
            <SessionProvider session={session}>
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
            </SessionProvider>
        </html>
    );
}
