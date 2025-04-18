"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/auth/new-verification";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { DEFAULT_ADMIN_LOGIN_REDIRECT } from "@/routes";

export const NewVerificationForm = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");

    const [isLoading, setIsLoading] = useState(false);

    const verifyToken = useCallback(() => {
        setIsLoading(true);
        if (!token) {
            toast.error("Missing token!");
            return;
        }

        newVerification(token)
            .then((data) => {
                setIsLoading(false);
                if (data.success) {
                    toast.success(data.success);
                    router.push(DEFAULT_ADMIN_LOGIN_REDIRECT);
                }
                if (data.error) {
                    toast.error(data.error);
                }
            })
            .catch(() => {
                toast.error("Something went wrong!");
            });
    }, [token, router]);

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Button
                onClick={verifyToken}
                disabled={isLoading}
                className="mx-auto w-5/6"
            >
                {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                Verify email
            </Button>
        </div>
    );
};
