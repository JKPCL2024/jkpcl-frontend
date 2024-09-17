import { ForwardRefExoticComponent, RefAttributes } from "react";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { LucideProps } from "lucide-react";

type iconCardProps = {
    title: string;
    desc: string;
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
};

export const IconCard = ({ props }: { props: iconCardProps }) => {
    return (
        <Card className="flex flex-col items-center justify-center transition-all duration-300 ease-in-out hover:scale-105">
            <div className="m-5 flex h-20 w-20 items-center justify-center rounded-full bg-secondary p-5 text-primary">
                {<props.icon />}
            </div>
            <CardHeader className="pt-0 text-center">
                <CardTitle className="text-xl text-primary">
                    {props.title}
                </CardTitle>
                <CardDescription>{props.desc}</CardDescription>
            </CardHeader>
        </Card>
    );
};
