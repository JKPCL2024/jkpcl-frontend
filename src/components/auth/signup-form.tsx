"use client";

import * as z from "zod";
import React, { useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";
import { SocialSignIn } from "./social-signin";

type FormData = z.infer<typeof RegisterSchema>;

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignupForm({ className, ...props }: UserAuthFormProps) {
    const [isPending, startTransition] = useTransition();
    const form = useForm<FormData>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: FormData) {
        startTransition(() => {
            register(values)
                .then((data) => {
                    if (data?.error) {
                        form.reset();
                        toast.error(data?.error || "Something went wrong.", {
                            description:
                                "Your sign in request failed. Please try again.",
                        });
                    }
                    if (data?.success) {
                        form.reset();
                        toast.success(data?.success || "Check your email", {
                            description:
                                "We sent you a login link. Be sure to check your spam too.",
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
    }
    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            type="text"
                                            autoCapitalize="name"
                                            autoComplete="name"
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
                                    <FormLabel>Password</FormLabel>
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

                        <Button type="submit" disabled={isPending}>
                            {isPending && (
                                <Loader2 className="mr-2 size-4 animate-spin" />
                            )}
                            Sign Up with Email
                        </Button>
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
