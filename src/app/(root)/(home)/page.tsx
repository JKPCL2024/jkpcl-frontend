import { Section } from "@/components/section";
import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Events } from "./_components/events";
import { Notice } from "./_components/notice";
import { FAQs } from "./_components/faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Section className="flex-col gap-8 md:flex-row">
        <Events />
        <Notice />
      </Section>
      <About />
      <Services />
      <FAQs />
    </main>
  );
}
