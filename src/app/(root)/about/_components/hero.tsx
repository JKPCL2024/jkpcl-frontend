import { HeroText } from "@/components/typography/hero-text";
import { Button } from "@/components/ui/button";
import { ArrowRight, Contact, Mail, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="h-[calc(100vh-5rem)] -translate-y-20 bg-white">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-36">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              About Us
            </div>
          </div>
          <div className="text-center">
            <HeroText>Empowering Farmers, Enriching Lives</HeroText>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us in transforming agriculture and uplifting the lives of
              farmers in Jhargram. At JKPCL, we are committed to sustainable
              growth, innovative farming solutions, and building a prosperous
              future for our farming communities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>Become a shareholder</Button>
              <Button
                variant={"outline"}
                className="text-primary hover:text-primary"
              >
                {/* <Mail className="mr-2 size-5" /> */}
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
