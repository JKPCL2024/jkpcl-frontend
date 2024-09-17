"use client";

import { cn } from "@/lib/utils";
import { useStore } from "@/lib/hooks/use-store";
import { Footer } from "@/components/user-dashboard/footer";
import { Sidebar } from "@/components/user-dashboard/sidebar";
import { useSidebarToggle } from "@/lib/hooks/use-sidebar-toggle";

export function UserDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const sidebar = useStore(useSidebarToggle, (state) => state);

    if (!sidebar) return null;

    return (
        <>
            <Sidebar />
            <main
                className={cn(
                    "min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
                {children}
            </main>
            <footer
                className={cn(
                    "transition-[margin-left] duration-300 ease-in-out",
                    sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
                )}
            >
                <Footer />
            </footer>
        </>
    );
}