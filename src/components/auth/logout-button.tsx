"use client";

import { logout } from "@/actions/auth/logout";
import { Button } from "@/components/ui/button";

export function LogoutButton({ children }: { children: React.ReactNode }) {
    return (
        <Button
            onClick={() => logout()}
            variant={"secondary"}
            className="w-full hover:bg-primary"
            asChild
        >
            {children}
        </Button>
    );
}
