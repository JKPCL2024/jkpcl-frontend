"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { cn } from "@/lib/utils";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginSchema } from "@/lib/validators";
import { SocialSignIn } from "./social-signin";
import { login } from "@/actions/auth/login";
import { useSearchParams } from "next/navigation";

type FormData = z.infer<typeof LoginSchema>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SigninForm({ className, ...props }: UserAuthFormProps) {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");
    const urlError =
        searchParams.get("error") === "OAuthAccountNotLinked"
            ? "Email already in use with different provider!"
            : "";
    const [isPending, startTransition] = useTransition();
    const form = useForm<FormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showTwoFactor, setShowTwoFactor] = useState(false);

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            login(values, callbackUrl)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        toast.error(data?.error);
                    }
                    if (data?.success) {
                        form.reset();
                        toast.success(data?.success);
                    }
                    if (data?.twoFactor) {
                        setShowTwoFactor(true);
                        toast.success("Check your email", {
                            description:
                                "We sent you a confirmation link. Be sure to check your spam too.",
                        });
                    }
                })
                .catch(() => {
                    toast.error("Something went wrong!", {
                        description:
                            "Your sign in request failed. Please try again.",
                    });
                });
        });
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        {showTwoFactor && (
                            <FormField
                                control={form.control}
                                name="code"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Enter OTP</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="123456"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        {!showTwoFactor && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="email"
                                                    placeholder="name@example.com"
                                                    type="email"
                                                    autoCapitalize="none"
                                                    autoComplete="email"
                                                    autoCorrect="off"
                                                    disabled={isPending}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="-mb-2 flex w-full items-center justify-between">
                                                <FormLabel>Password</FormLabel>
                                                <Button
                                                    asChild
                                                    variant={"link"}
                                                    size={"sm"}
                                                >
                                                    <Link
                                                        href={
                                                            "/auth/reset-password"
                                                        }
                                                    >
                                                        Forgot password?
                                                    </Link>
                                                </Button>
                                            </div>
                                            <FormControl>
                                                <Input
                                                    id="password"
                                                    placeholder="Password@123"
                                                    type="password"
                                                    autoCapitalize="none"
                                                    autoComplete="current-password"
                                                    autoCorrect="off"
                                                    disabled={isPending}
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    disabled={isPending}
                                    onClick={() => {
                                        // onSignIn();
                                    }}
                                >
                                    {isPending && (
                                        <Loader2 className="mr-2 size-4 animate-spin" />
                                    )}
                                    {showTwoFactor
                                        ? "Confirm OTP"
                                        : "Sign In with Email"}
                                </Button>
                            </>
                        )}
                    </div>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <SocialSignIn />
        </div>
    );
}
