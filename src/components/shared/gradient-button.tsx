"use client";
import React from "react";
import { HoverBorderGradient as GradientButton } from "@/components/aceternity/hover-border-gradient";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className="flex justify-center text-center">
            <GradientButton
                containerClassName="rounded-full"
                as="span"
                className={cn(
                    "flex cursor-default items-center space-x-2 bg-white text-black text-muted-foreground dark:bg-black",
                    className
                )}
            >
                {children}
            </GradientButton>
        </div>
    );
}
