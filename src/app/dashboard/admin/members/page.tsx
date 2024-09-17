import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Members } from "./_components/members";
import { Button } from "@/components/ui/button";
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
            <div>
                <Members />
            </div>
            <PlaceholderContent />
        </ContentLayout>
    );
};

export default MembersPage;
