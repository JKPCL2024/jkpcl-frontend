import { cn } from "@/lib/utils";
import { pageProps } from "@/types";

export const Heading = ({ children, className }: pageProps) => {
  return (
    <h1 className={cn("text-2xl font-semibold md:text-4xl", className)}>
      {children}
    </h1>
  );
};
