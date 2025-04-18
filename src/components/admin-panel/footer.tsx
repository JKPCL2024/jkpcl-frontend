import Link from "next/link";

export function Footer() {
    return (
        <div className="z-20 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-4 flex h-14 items-center md:mx-8">
                <p className="text-center text-xs leading-loose text-muted-foreground md:text-sm">
                    Copyright &copy; {new Date().getFullYear()} JKPCL. All
                    rights reserved.
                </p>
            </div>
        </div>
    );
}
