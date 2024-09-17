import { About } from "./_components/about";
import ClientSection from "./_components/client-section";
import { Events } from "./_components/events";
import { FAQs } from "./_components/faq-section";
import HeroSection from "./_components/hero-section";
import { Notice } from "./_components/notice";
import { Services } from "./_components/services-section";
import { Section } from "@/components/section";
import Particles from "@/components/ui/particles";
import { SphereMask } from "@/components/ui/sphere-mask";

export default async function Page() {
    return (
        <>
            <HeroSection />
            <ClientSection />
            <SphereMask />
            <About />
            <Section className="flex-col gap-8 md:flex-row">
                <Events />
                <Notice />
            </Section>
            {/* <PricingSection /> */}
            {/* <CallToActionSection /> */}
            <Services />
            <FAQs />
            <Particles
                className="absolute inset-0 -z-10"
                quantity={50}
                ease={70}
                size={0.05}
                staticity={40}
                color="#ffffff"
            />
        </>
    );
}
