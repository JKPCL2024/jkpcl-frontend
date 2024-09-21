import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TeamMembers } from "@/components/shared/team-members";
import { Plus } from "lucide-react";

const MembersPage = () => {
    return (
        <ContentLayout title="Members">
            <div className="flex justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/dashboard/admin">Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Members</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Button size={"sm"} asChild>
                    <Link href={"/dashboard/admin/members/add"}>
                        <Plus className="mr-1 size-5" />
                        Add Member
                    </Link>
                </Button>
            </div>
            <TeamMembers editable />
        </ContentLayout>
    );
};

export default MembersPage;
