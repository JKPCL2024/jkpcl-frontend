import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewVerification = () => {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Button asChild variant={"ghost"}>
                <Link
                    href="/"
                    className={cn("absolute left-4 top-4 md:left-8 md:top-8")}
                >
                    <>
                        <ChevronLeft className="mr-2 size-4" />
                        Back
                    </>
                </Link>
            </Button>
            <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
                <div className="flex flex-col gap-2 text-center">
                    {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
                    <h1 className="text-2xl font-semibold tracking-tight">
                        New Verification
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Verify your email
                    </p>
                </div>
                <NewVerificationForm />
                {/* <Button className="w-60">Confirm your email</Button> */}
            </div>
        </div>
    );
};

export default NewVerification;
