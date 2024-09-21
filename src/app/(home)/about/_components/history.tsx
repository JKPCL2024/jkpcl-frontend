import { Heading } from "@/components/typography/heading";
import { Section } from "@/components/section";
import { HistoryCard } from "./history-card";
import { HoverBorderGradient } from "@/components/shared/gradient-button";

import { jkpclData } from "@/data/landing-page/website-content";

export const History = () => {
    return (
        <Section className="mt-12">
            <HoverBorderGradient>History</HoverBorderGradient>
            <Heading>Our Journey</Heading>
            <div className="mt-6 grid gap-4">
                {jkpclData.company_history.map((item) => (
                    <HistoryCard
                        key={item.title}
                        title={item.title}
                        contents={item.contents}
                    />
                ))}
            </div>
        </Section>
    );
};
