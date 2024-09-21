import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/section";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/shared/gradient-button";
import { cn } from "@/lib/utils";

export const About = () => {
    return (
        <Section className="mt-10">
            <HoverBorderGradient className="text-primary">
                About Us
            </HoverBorderGradient>
            <Heading className="mb-5 mt-2">Discover Our Story</Heading>
            <div className="flex flex-col gap-8 md:flex-row">
                <Image
                    src={"/placeholder.png"}
                    height={450}
                    width={450}
                    alt="About image"
                    className="aspect-square rounded-md object-cover"
                />
                <div className="flex flex-col gap-2">
                    <P>
                        Jhargram Krishak Producer Company Limited (JKPCL) is a
                        beacon of empowerment in the agricultural industry,
                        dedicated to uplifting farmers and small farm families.
                        Our mission is to enhance farm productivity and market
                        access, fostering sustainable growth and prosperity.
                        Through services like input trading, produce
                        aggregation, and machinery hiring, we provide a platform
                        for collective action and growth.
                    </P>
                    <P>
                        With nearly eight years of experience, JKPCL has made
                        significant contributions towards improving the
                        livelihoods of over 2000 farmers in the region. Our
                        strategic interventions in the value chain system aim to
                        boost cost-effectiveness, ensuring a brighter future for
                        shareholders and the community.
                    </P>
                    <Link href={"/about"}>
                        <Button
                            variant={"expandIcon"}
                            Icon={ArrowRight}
                            iconPlacement={"right"}
                            IconClass="size-5 hover:text-white"
                            className={cn(
                                "w-32 border bg-secondary text-black hover:text-white dark:text-white"
                            )}
                        >
                            Know more
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};
