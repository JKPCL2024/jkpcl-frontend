import React from "react";
import { cn } from "@/lib/utils";

export const H3 = React.forwardRef<
    HTMLParagraphElement,
    React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => {
    return (
        <h3
            ref={ref as React.MutableRefObject<HTMLHeadingElement | null>}
            className={cn("text-xl font-semibold", className)}
            {...props}
        >
            {props.children}
        </h3>
    );
});
H3.displayName = "H3";
