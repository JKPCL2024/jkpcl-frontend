import React from "react";
import { Hero } from "./_components/hero";
import { ServicesSection } from "./_components/services-section";
import { CTA } from "./_components/cta";

const page = () => {
    return (
        <main>
            <Hero />
            <ServicesSection />
            <CTA />
        </main>
    );
};

export default page;
