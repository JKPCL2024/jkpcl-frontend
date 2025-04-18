import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Check } from "lucide-react";

export const ServicesCard = ({
    title,
    desc,
    img,
    features,
}: {
    title: string;
    desc: string;
    img?: string;
    features: string[];
}) => {
    return (
        <Card className="w-full">
            <CardHeader className="pb-2 pt-6">
                <Image
                    src={img || "/placeholder.png"}
                    alt="Placeholder"
                    width={200}
                    height={200}
                    className="aspect-video w-full rounded-md object-cover"
                />
            </CardHeader>
            <CardContent>
                <CardTitle className="text-xl font-bold text-primary">
                    {title}
                </CardTitle>
                <CardDescription>{desc}</CardDescription>
            </CardContent>
            <CardFooter>
                <ul className="list-inside">
                    {features.map((feature) => (
                        <li key={feature} className="flex gap-1 text-sm">
                            <Check className="size-4 text-primary" />
                            <span className="text-muted-foreground">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </CardFooter>
        </Card>
    );
};
