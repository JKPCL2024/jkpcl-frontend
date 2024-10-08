import { Heading } from "@/components/typography/heading";
import { Section } from "@/components/section";
import { IconCard } from "@/components/shared/icon-card";
import { HoverBorderGradient } from "@/components/shared/gradient-button";

import { services } from "@/data/landing-page/services";
export const Services = () => {
    return (
        <Section id="services" className="mt-10">
            <HoverBorderGradient className="text-primary">
                Services
            </HoverBorderGradient>
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
