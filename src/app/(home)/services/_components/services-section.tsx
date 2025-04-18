import { Section } from "@/components/section";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";
import { ServicesCard } from "./services-card";

const SERVICES = [
    {
        title: "Quality seeds",
        desc: "We offer a diverse selection of high-quality,genetically superior seeds designed for maximum yield.",
        img: "/images/seeds.jpg",
        features: [
            "GMO & Non-GMO varieties available",
            "Disease-resistant strains",
            "Govt Seed Dealership License",
        ],
    },
    {
        title: "Crop Protection",
        desc: "Protect your crops with our range of eco-friendly pesticides, ensuring a healthy harvest every season.",
        img: "/images/crop.jpg",
        features: [
            "Eco-friendly solutions",
            "Integrated pest management",
            "Trade Licenses for Pesticides & Govt Insecticides Dealership",
        ],
    },
    {
        title: "Fertilizers",
        desc: "Elevate crop vitality with our specially formulated fertilizers for enhanced growth and productivity.",
        img: "/images/fertilizer.jpg",
        features: [
            "Bulk & direct supply from manufacturers like IFFCO",
            "Soil-specific formulations",
            "Govt Fertilizer Dealership License",
        ],
    },
    {
        title: "Machinery Rental",
        desc: "Access state-of-the-art agricultural machinery on rent through our Custom Hiring Center (CHC).",
        img: "/images/harvestor.jpg",
        features: [
            "Combine Harvester & Tractor",
            "Rotavator, Power Tiller & Rice Transplanter",
            "Mulcher & other advanced equipment",
        ],
    },
    {
        title: "Aggregation & Marketing",
        desc: "We aggregate and market a variety of agricultural products to ensure farmers get the best prices",
        img: "/images/watermelon.jpg",
        features: [
            "Paddy & Water Melon",
            "Bitter Gourd & other vegetables",
            "Direct market access",
        ],
    },
    {
        title: "Stall Sales & Rural Mart",
        desc: "We sell crops at our registered stalls in Kishan Mandis and through our Mobile Rural Mart.",
        img: "/images/vegetable-store.jpg",
        features: [
            "Stalls in Binpur-II, Jhargram & Nayagram Block",
            "Mobile Rural Mart for remote areas",
            "Sufal Bangla stores in Ghatal & Kharagpur",
        ],
    },
    {
        title: "Food Processing",
        desc: "We engage in small-scale value addition activities, creating delicious processed products.",
        img: "/images/tommato-processing.jpg",
        features: [
            "Mango & Tamarind Pickles",
            "Tomato Sauce",
            "Other value-added products",
        ],
    },
    {
        title: "Government Program Access",
        desc: "We help farmers access various government schemes and programs for better farming outcomes.",
        img: "/images/government-scheme.jpg",
        features: [
            "Training under ATMA & Agricultural Marketing Department",
            "Subsidized sales through Sufal Bangla",
            "PMKSY/BKSY & FLD of Sunflower from ICAR",
        ],
    },
];

export const ServicesSection = () => {
    return (
        <Section className="-translate-y-10">
            <div className="flex flex-col items-center gap-2">
                <Heading className="text-primary">
                    Our Agricultural Solutions
                </Heading>
                <div className="h-1 w-1/3 bg-primary" />
                <P className="max-w-screen-md text-center">
                    We offer a wide range of agricultural services designed to
                    support farmers at every stage of cultivation. From
                    high-quality seeds to market access, we&apos;re your partner
                    in sustainable farming.
                </P>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {SERVICES.map((service) => (
                    <ServicesCard key={service.title} {...service} />
                ))}
            </div>
        </Section>
    );
};
