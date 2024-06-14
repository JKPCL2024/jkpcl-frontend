import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CircleUser, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminDashboardNavigationLinks } from "@/data/navigation-menu";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";

export const MobileAdminSidebar = ({
  showHideSidebar,
}: {
  showHideSidebar: string;
}) => {
  return (
    <header
      className={cn(
        "flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4",
        showHideSidebar
      )}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col gap-6">
          <Logo />
          <Separator />
          <nav className="grid gap-2 text-lg font-medium">
            {adminDashboardNavigationLinks.map((navigationLink) => (
              <Button
                key={navigationLink.label}
                asChild
                className="w-full justify-start"
                variant={"ghost"}
              >
                <Link
                  // key={navigationLink.label}
                  href={navigationLink.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <navigationLink.icon className="size-5" />
                  {navigationLink.label}
                </Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};
