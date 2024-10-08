import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
    title: "Sign Up | JKPCL",
    description: "Sign Up for JKPCL",
};

export default function SignUpPage() {
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
            <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
                <div className="flex flex-col items-center gap-2 text-center">
                    <Image
                        src={"/logo.png"}
                        width={40}
                        height={40}
                        alt="Logo"
                    />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Welcome to JKPCL
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Sign up for an account
                    </p>
                </div>
                <SignupForm />
                <Button asChild variant={"link"}>
                    <Link href="/auth/signin">
                        Already have an account? Sign In
                    </Link>
                </Button>
            </div>
        </div>
    );
}
