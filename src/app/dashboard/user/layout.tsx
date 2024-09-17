import { UserDashboardLayout } from "@/components/user-dashboard/user-dashboard-layout";

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <UserDashboardLayout>{children}</UserDashboardLayout>;
}
