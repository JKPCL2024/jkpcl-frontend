import { H3 } from "@/components/typography/h3";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";
import { months } from "@/data/constants";
import Link from "next/link";

const notices = [
    {
        title: "Tree plantation programme",
        desc: "Our tree plantation programme in our village.",
        link: "/",
        date: new Date(),
    },
    {
        title: "Tree plantation programme",
        desc: "Our tree plantation programme in our village.",
        link: "/",
        date: new Date(),
    },
    {
        title: "Tree plantation programme",
        desc: "Our tree plantation programme in our village.",
        link: "/",
        date: new Date(),
    },
];

export const Notice = () => {
    return (
        <div className="flex h-[28rem] w-full flex-1 flex-col items-center gap-4 rounded-xl border bg-card p-2 md:p-6">
            <Heading>🔔 Notice</Heading>
            {notices.map((notice) => (
                <Link
                    key={notice.title}
                    href={notice.link}
                    className="flex w-full items-center gap-1 rounded-md border p-4"
                >
                    <div>
                        <H3 className="text-lg md:text-xl">{notice.title}</H3>
                        <P className="text-xs text-primary">
                            Published at: {notice.date.getDate()}th{" "}
                            {months[notice.date.getMonth()]}
                        </P>
                    </div>
                </Link>
            ))}
        </div>
    );
};
