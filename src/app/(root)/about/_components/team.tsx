import { getAllMembers } from "@/api-handlers/members.handler";
import { Section } from "@/components/section";
import { MemberCard } from "@/components/shared/member-card";
import { Heading } from "@/components/typography/heading";
import { Button } from "@/components/ui/button";
import { memberProps } from "@/types";

export const Team = async () => {
  const members: memberProps[] = await getAllMembers();

  return (
    <Section className="mt-12">
      <Button
        variant={"outline"}
        className="rounded-full text-muted-foreground hover:border-muted-foreground/30"
      >
        Teams
      </Button>
      <Heading>Meet Our Teams</Heading>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>
    </Section>
  );
};
