import { cn } from "@/lib/utils";
import { pageProps } from "@/types";
import { oswald } from "@/components/fonts";

export const HeroText = ({ children, className }: pageProps) => {
  return (
    <h1
      className={cn(
        oswald.className,
        "scroll-m-20 text-[2.5rem] font-extrabold leading-[3rem] tracking-tight lg:text-7xl lg:leading-[5rem]",
        className
      )}
    >
      {children}
    </h1>
  );
};
