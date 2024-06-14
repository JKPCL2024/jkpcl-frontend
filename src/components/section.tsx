import { cn } from "@/lib/utils";
import { pageProps } from "@/types";

export const Section = ({ children, className }: pageProps) => {
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
