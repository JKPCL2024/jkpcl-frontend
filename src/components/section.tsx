import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export const Section = ({ children, className, ...props }: SectionProps) => {
    return (
        <section
            className={cn(
                "flex w-full flex-col items-center justify-center px-6 lg:px-40",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
};
