"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Loader2 } from "lucide-react";

export const SocialSignIn = () => {
    const [isLoading, setIsLoading] = useState<"google" | "github" | undefined>(
        undefined
    );
    const handleSignIn = async (provider: "github" | "google") => {
        setIsLoading(provider);
        await signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        });
        setIsLoading(undefined);
    };
    return (
        <div className="flex w-full flex-col gap-2">
            <Button
                type="button"
                variant={"outline"}
                onClick={() => {
                    handleSignIn("google");
                }}
                disabled={isLoading == ("google" || "github")}
            >
                {isLoading == "google" ? (
                    <Loader2 className="mr-2 size-4 animate-spin" />
                ) : (
                    <FcGoogle className="mr-2 size-4" />
                )}
                Google
            </Button>
            <Button
                type="button"
                variant={"outline"}
                onClick={() => {
                    handleSignIn("github");
                }}
                disabled={isLoading == ("github" || "google")}
            >
                {isLoading == "github" ? (
                    <Loader2 className="mr-2 size-4 animate-spin" />
                ) : (
                    <GitHubLogoIcon className="mr-2 size-4" />
                )}
                Github
            </Button>
        </div>
    );
};
