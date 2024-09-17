import { HeroText } from "@/components/typography/hero-text";
import { P } from "@/components/typography/p";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className="-translate-y-20">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary/20 to-primary/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl pb-12 pt-32 sm:py-48 lg:pb-20 lg:pt-36">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            About Us
                        </div>
                    </div>
                    <div className="text-center">
                        <HeroText>Empowering Farmers, Enriching Lives</HeroText>
                        <P className="mt-6">
                            Join us in transforming agriculture and uplifting
                            the lives of farmers in Jhargram. At JKPCL, we are
                            committed to sustainable growth, innovative farming
                            solutions, and building a prosperous future for our
                            farming communities.
                        </P>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button className="font-medium tracking-wide">
                                Become a shareholder
                            </Button>
                            <Button
                                variant={"outline"}
                                className="font-medium tracking-wide text-primary hover:text-primary"
                            >
                                Explore Services
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
