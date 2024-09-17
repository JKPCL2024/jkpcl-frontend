import { Section } from "@/components/section";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";
import { jkpclData } from "@/data/landing-page/website-content";

export const History = () => {
    return (
        <Section className="mt-12">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                History
            </div>
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

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

type contentProps = {
    title: string;
    desc: string;
};
export type historyCardProps = {
    title: string;
    contents: contentProps[];
};
export const HistoryCard = ({ title, contents }: historyCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary md:text-2xl">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-2 md:grid-cols-3">
                {contents.map((content) => (
                    <Card key={content.title} className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary">
                                {content.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <P> {content.desc}</P>
                        </CardContent>
                    </Card>
                ))}
            </CardContent>
        </Card>
    );
};
