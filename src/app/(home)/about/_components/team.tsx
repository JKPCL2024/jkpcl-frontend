import { Heading } from "@/components/typography/heading";
import { Section } from "@/components/section";
import { HoverBorderGradient } from "@/components/shared/gradient-button";
import { TeamMembers } from "@/components/shared/team-members";

export const Team = async () => {
    return (
        <Section className="mt-12">
            <HoverBorderGradient className="text-primary">
                Teams
            </HoverBorderGradient>
            <Heading>Meet Our Teams</Heading>
            <TeamMembers />
        </Section>
    );
};
