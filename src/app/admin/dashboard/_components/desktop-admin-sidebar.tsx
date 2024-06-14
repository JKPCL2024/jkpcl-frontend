import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { adminDashboardNavigationLinks } from "@/data/navigation-menu";

export const DesktopAdminSidebar = ({
  showHideSidebar,
}: {
  showHideSidebar: string;
}) => {
  return (
    <header className="fixed top-0">
      <aside
        className={cn(
          "flex h-screen max-h-screen w-72 flex-col gap-2 border-r",
          showHideSidebar
        )}
      >
        <div className="flex h-20 items-center border-b px-4 lg:px-6">
          <Logo />
        </div>
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {adminDashboardNavigationLinks.map((navigationLink) => (
            <Button
              key={navigationLink.label}
              asChild
              className="w-full justify-start"
              variant={"ghost"}
            >
              <Link
                href={navigationLink.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <navigationLink.icon className="size-5" />
                {navigationLink.label}
              </Link>
            </Button>
          ))}
        </nav>
      </aside>
      <div className="fixed top-0 hidden h-20 w-full border-b md:ml-72 md:flex">
        hello
      </div>
    </header>
  );
};
