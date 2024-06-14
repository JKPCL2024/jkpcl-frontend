import { layoutProps } from "@/types";
import { AdminSidebar } from "./_components/admin-sidebar";

export default function AdminDashboardLayout({
  children,
}: Readonly<layoutProps>) {
  return (
    <div className="flex min-h-screen flex-col md:flex-col">
      <AdminSidebar />
      <main className="flex shrink grow flex-col p-0 md:ml-72 md:mt-20">
        {children}
      </main>
    </div>
  );
}
