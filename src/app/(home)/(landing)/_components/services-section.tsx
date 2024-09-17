import { Section } from "@/components/section";
import { Heading } from "@/components/typography/heading";
import { IconCard } from "@/components/shared/icon-card";

import { services } from "@/data/landing-page/services";
import { Button } from "@/components/ui/button";

export const Services = () => {
    return (
        <Section className="mt-10">
            <Button
                variant={"outline"}
                asChild
                className="rounded-full text-primary"
            >
                <h4>Services</h4>
            </Button>
            <Heading className="mb-5 mt-2">
                Our Comprehensive Agricultural Solutions
            </Heading>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {services.map((service) => (
                    <IconCard key={service.title} props={service} />
                ))}
            </div>
        </Section>
    );
};
