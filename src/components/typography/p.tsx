import React from "react";
import { cn } from "@/lib/utils";

export const P = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => {
    return (
        <p
            ref={ref as React.MutableRefObject<HTMLParagraphElement | null>}
            className={cn(
                "[data-ssr=false]:-translate-y-4 [data-ssr=false]:animate-fade-in-0 [data-ssr=false]:opacity-100 animate-fade-in text-lg tracking-tight text-muted-foreground opacity-0",
                className
            )}
            {...props}
        >
            {props.children}
        </p>
    );
});
P.displayName = "P";
