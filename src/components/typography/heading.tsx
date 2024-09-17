import React from "react";
import { cn } from "@/lib/utils";

export const Heading = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => {
    return (
        <h1
            ref={ref as React.MutableRefObject<HTMLHeadingElement | null>}
            className={cn("text-2xl font-semibold md:text-4xl", className)}
            {...props}
        >
            {props.children}
        </h1>
    );
});
Heading.displayName = "Heading";
