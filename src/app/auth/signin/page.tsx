import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { SigninForm } from "@/components/auth/signin-form";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Login | JKPCL",
    description: "Login to your account",
};

export default function LoginPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-4 top-4 md:left-8 md:top-8"
                )}
            >
                <>
                    <ChevronLeft className="mr-2 size-4" />
                    Back
                </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[22rem]">
                <div className="flex flex-col items-center gap-2 text-center">
                    <Image
                        src={"/logo.png"}
                        width={40}
                        height={40}
                        alt="Logo"
                    />
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Welcome back
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Login to your account
                    </p>
                </div>
                <SigninForm />
                <Button asChild variant={"link"}>
                    <Link href="/auth/signup">
                        Don&apos;t have an account? Sign Up
                    </Link>
                </Button>
            </div>
        </div>
    );
}
