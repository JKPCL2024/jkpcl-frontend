import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/typography/heading";
import { Section } from "@/components/section";
import { faqs } from "@/data/faqs";

export const FAQs = () => {
  return (
    <Section className="mt-12">
      <Button variant={"outline"} asChild className="rounded-full text-primary">
        <h4>FAQs</h4>
      </Button>
      <Heading className="my-2">Frequently Asked Questions</Heading>
      <div className="mt-4 flex w-full flex-col gap-4 md:mt-8">
        {faqs.map((item) => (
          <Accordion key={item.question} type="single" collapsible>
            <AccordionItem
              value={item.question}
              className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
            >
              <AccordionTrigger className="text-left text-base hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:w-3/4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </Section>
  );
};
