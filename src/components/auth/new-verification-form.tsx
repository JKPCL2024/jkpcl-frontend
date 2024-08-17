"use client";

import { useCallback, useState } from "react";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export const NewVerificationForm = () => {
    const searchParams = useSearchParams();
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
                }
                if (data.error) {
                    toast.error(data.error);
                }
            })
            .catch(() => {
                toast.error("Something went wrong!");
            });
    }, [token]);

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Button onClick={verifyToken} disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 size-4 animate-spin" />}
                Confirm email
            </Button>
        </div>
    );
};
