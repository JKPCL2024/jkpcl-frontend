import { Section } from "@/components/section";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";
import { Button } from "@/components/ui/button";

export const CTA = () => {
    return (
        <Section className="bg-muted/20 py-12">
            <Heading>Ready to Transform Your Farming Experience?</Heading>
            <P className="max-w-screen-md text-center">
                Whether you&apos;re a small-scale farmer or managing larger
                agricultural operations, our comprehensive services are designed
                to meet your specific needs and enhance productivity.
            </P>
            <Button className="mt-4">Contact Our Experts</Button>
        </Section>
    );
};
