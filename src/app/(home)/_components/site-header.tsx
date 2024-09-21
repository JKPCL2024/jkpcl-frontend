"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { AlignJustify } from "lucide-react";

import { useCurrentUser } from "@/lib/hooks/use-user";
import { UserDropdown } from "@/components/auth/user-button";

export function SiteHeader() {
    const currentUser = useCurrentUser();

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md [--animation-delay:600ms]">
                <div className="container flex h-14 items-center justify-between">
                    <Link
                        className="flex items-end justify-center text-2xl font-semibold"
                        href="/"
                    >
                        <Image
                            src={"/logo.png"}
                            height={40}
                            width={40}
                            alt="Logo"
                        />
                        JKPCL
                    </Link>

                    <div className="ml-auto flex h-full items-center gap-4">
                        {currentUser ? (
                            // <UserDropdown className="hidden md:flex" />
                            <></>
                        ) : (
                            <div className={cn("flex h-full items-center")}>
                                {/* <Link
                                    className="mr-6 text-sm"
                                    href="/auth/signin"
                                >
                                    Log in
                                </Link>
                                <Link
                                    className={cn(
                                        buttonVariants({
                                            variant: "secondary",
                                        }),
                                        "mr-6 text-sm"
                                    )}
                                    href="/auth/signup"
                                >
                                    Sign up
                                </Link> */}
                            </div>
                        )}
                        <ModeToggle />
                    </div>

                    <button className="ml-6 md:hidden">
                        <span className="sr-only">Toggle menu</span>
                        <AlignJustify />
                    </button>
                </div>
            </header>
        </>
    );
}
