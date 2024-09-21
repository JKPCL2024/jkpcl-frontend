"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCurrentUser } from "@/lib/hooks/use-user";
import { HeroText } from "@/components/typography/hero-text";
import { P } from "@/components/typography/p";
import { HoverBorderGradient } from "@/components/shared/gradient-button";

export default function HeroSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const currentUser = useCurrentUser();
    return (
        <section
            id="hero"
            className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
        >
            <HoverBorderGradient>👋Welcome to JKPCL</HoverBorderGradient>
            <HeroText>
                Empowering Farmers
                <br className="hidden md:block" /> for Sustainable Growth
            </HeroText>
            <P className="mb-12">
                Empowering farmers through collective action, JKPCL enhances
                farm productivity and market access.
                <br className="hidden md:block" /> With a focus on sustainable
                growth, we transform livelihoods and benefit over 2000 farmers
                in the region.
            </P>
            <Button
                asChild
                className="group -translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] hover:cursor-pointer hover:bg-primary/90"
            >
                {currentUser ? (
                    // <Button
                    //     Icon={ArrowRightIcon}
                    //     iconPlacement="right"
                    //     variant={"expandIcon"}
                    // >
                    //     <Link
                    //         href={`/dashboard/${currentUser.role.toLowerCase()}`}
                    //     >
                    //         Go to dashboard
                    //     </Link>
                    // </Button>
                <></>
                ) : (
                    <Link href={"/auth/signup"}>
                        <span>Get Started for free </span>
                        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                    </Link>
                )}
            </Button>
            {/* <div
                ref={ref}
                className="relative mt-32 animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
            >
                <div
                    className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${
                        inView ? "before:animate-image-glow" : ""
                    }`}
                >
                    <BorderBeam
                        size={200}
                        duration={12}
                        delay={11}
                        colorFrom="var(--color-one)"
                        colorTo="var(--color-two)"
                    />

                    <img
                        src="/hero-dark.png"
                        alt="Hero Image"
                        className="relative hidden size-full rounded-[inherit] border object-contain dark:block"
                    />
                    <img
                        src="/hero-light.png"
                        alt="Hero Image"
                        className="relative block size-full rounded-[inherit] border object-contain dark:hidden"
                    />
                </div>
            </div> */}
        </section>
    );
}
