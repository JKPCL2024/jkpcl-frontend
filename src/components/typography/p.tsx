import { cn } from "@/lib/utils";
import { pageProps } from "@/types";

export const P = ({ children, className }: pageProps) => {
  return <p className={cn("text-base leading-7", className)}>{children}</p>;
};
