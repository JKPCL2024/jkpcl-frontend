import React, { Suspense } from "react";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { EditMemberForm } from "../../_components/edit-member-form";
import { db } from "@/lib/db";

const EditMemberPage = async ({ params }: { params: { memberId: string } }) => {
    const member = await db.member.findUnique({
        where: {
            id: params.memberId,
        },
    });

    return (
        <ContentLayout title="Edit Member">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/dashboard/admin/members">Members</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Edit</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <Suspense fallback="Loading...">
                {member ? (
                    <EditMemberForm member={member} />
                ) : (
                    // TODO: Add error page
                    "Member not found"
                )}
            </Suspense>
        </ContentLayout>
    );
};

export default EditMemberPage;
