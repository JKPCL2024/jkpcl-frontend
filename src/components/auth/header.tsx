import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

interface HeaderProps {
    heading: string;
    label: string;
}

export const Header = ({ heading, label }: HeaderProps) => {
    return (
        <div className="flex w-full flex-col items-center gap-y-4">
            <Image src={"/logo.png"} height={40} width={40} alt="Logo" />
            <h1 className={cn("text-3xl font-semibold", font.className)}>
                {heading}
            </h1>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    );
};
