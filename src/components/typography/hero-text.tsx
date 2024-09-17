import React, { ForwardedRef } from "react";
import { cn } from "@/lib/utils";

export const HeroText = React.forwardRef<
    HTMLHeadingElement,
    React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref: ForwardedRef<HTMLHeadingElement>) => {
    return (
        <h1
            ref={ref}
            className={cn(
                "-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl",
                className
            )}
            {...props}
        >
            {props.children}
        </h1>
    );
});

HeroText.displayName = "HeroText";
