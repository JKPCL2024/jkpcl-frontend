"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
    Tooltip as ShadTooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function Tooltip({
    trigger,
    content,
    triggerClassName,
    contentClassName,
    ...props
}: {
    trigger: React.ReactNode;
    content: React.ReactNode;
    triggerClassName?: string;
    contentClassName?: string;
}) {
    return (
        <TooltipProvider disableHoverableContent {...props}>
            <ShadTooltip delayDuration={100}>
                <TooltipTrigger asChild>{trigger}</TooltipTrigger>
                <TooltipContent
                    side="bottom"
                    className={cn("text-white", contentClassName)}
                >
                    {content}
                </TooltipContent>
            </ShadTooltip>
        </TooltipProvider>
    );
}

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Tooltip
            trigger={
                <Button
                    className="h-8 w-8 rounded-full bg-background"
                    variant="outline"
                    size="icon"
                    onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
                >
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
                    <MoonIcon className="scale-1000 absolute h-[1.2rem] w-[1.2rem] rotate-0 transition-transform duration-500 ease-in-out dark:-rotate-90 dark:scale-0" />
                    <span className="sr-only">Switch Theme</span>
                </Button>
            }
            content={<span className="text-white">Switch Theme</span>}
        />
    );
}
