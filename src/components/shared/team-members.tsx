import { db } from "@/lib/db";
import { MemberCard } from "@/components/shared/member-card";

export const TeamMembers = async ({
    editable = false,
}: {
    editable?: boolean;
}) => {
    const members = await db.member.findMany();

    return (
        <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {members.map((member) => (
                <MemberCard
                    key={member.id}
                    member={member}
                    editable={editable}
                />
            ))}
        </div>
    );
};
