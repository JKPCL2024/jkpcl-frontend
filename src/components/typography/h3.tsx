import { cn } from "@/lib/utils";
import { pageProps } from "@/types";

export const H3 = ({ children, className }: pageProps) => {
  return <h3 className={cn("text-xl font-semibold", className)}>{children}</h3>;
};
