"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { navigationLinks } from "@/data/navigation-menu";
import { Logo } from "./logo";
import { UserAvatar } from "./user";
import { usePathname } from "next/navigation";

export const DesktopNavbar = ({
  showHideNavbar,
}: {
  showHideNavbar: string;
}) => {
  const pathName = usePathname();
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-20 w-full items-center justify-between px-4 py-3 leading-10 backdrop-blur-md transition-all duration-200 ease-in-out sm:px-10 md:px-20 xl:px-40",
        showHideNavbar
      )}
    >
      <Logo />

      <NavigationMenu className="rounded-full border-2 p-2">
        <NavigationMenuList className="gap-2">
          {navigationLinks.map((navigationLink) => (
            <NavigationMenuItem key={navigationLink.href}>
              <Link
                className={cn(
                  navigationMenuTriggerStyle(),
                  "rounded-full border bg-secondary text-primary hover:border-primary hover:text-primary hover:shadow-md",
                  pathName == navigationLink.href &&
                    "border-primary bg-primary text-white"
                )}
                href={navigationLink.href}
              >
                {navigationLink.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className={"invisible flex items-center justify-center gap-3"}>
        <Button>Sign in</Button>
        {/* <UserAvatar /> */}
      </div>
    </header>
  );
};
