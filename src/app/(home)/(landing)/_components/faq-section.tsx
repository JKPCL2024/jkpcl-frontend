import { Heading } from "@/components/typography/heading";
import { Section } from "@/components/section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HoverBorderGradient } from "@/components/shared/gradient-button";

import { faqs } from "@/data/landing-page/faqs";

export const FAQs = () => {
    return (
        <Section id="faqs" className="mt-12">
            <HoverBorderGradient className="text-primary">
                FAQs
            </HoverBorderGradient>
            <Heading className="my-2">Frequently Asked Questions</Heading>
            <div className="mt-4 w-full">
                <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4 md:mt-8"
                >
                    {faqs.map((item) => (
                        <AccordionItem
                            key={item.question}
                            value={item.question}
                            className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
                        >
                            <AccordionTrigger className="text-left text-base hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground md:w-3/4">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </Section>
    );
};
