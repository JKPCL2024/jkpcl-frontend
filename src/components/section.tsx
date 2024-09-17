import { cn } from "@/lib/utils";
import { PageProps } from "@/types";

export const Section = ({ children, className }: PageProps) => {
    return (
        <section
            className={cn(
                "flex w-full flex-col items-center justify-center px-6 lg:px-40",
                className
            )}
        >
            {children}
        </section>
    );
};
