import { P } from "@/components/typography/p";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
