import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/section";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const About = () => {
  return (
    <Section className="mt-10">
      <Button variant={"outline"} asChild className="rounded-full text-primary">
        <h4>About Us</h4>
      </Button>
      <Heading className="mb-5 mt-2">Discover Our Story</Heading>
      <div className="flex flex-col gap-4 md:flex-row">
        <Image
          src={"/images/tractor.jpg"}
          height={450}
          width={450}
          alt="About image"
          className="aspect-auto rounded-md object-cover"
        />
        <div className="flex flex-col gap-2">
          <P>
            Jhargram Krishak Producer Company Limited (JKPCL) is a beacon of
            empowerment in the agricultural industry, dedicated to uplifting
            farmers and small farm families. Our mission is to enhance farm
            productivity and market access, fostering sustainable growth and
            prosperity. Through services like input trading, produce
            aggregation, and machinery hiring, we provide a platform for
            collective action and growth.
          </P>
          <P>
            With nearly eight years of experience, JKPCL has made significant
            contributions towards improving the livelihoods of over 2000 farmers
            in the region. Our strategic interventions in the value chain system
            aim to boost cost-effectiveness, ensuring a brighter future for
            shareholders and the community.
          </P>
          <Button asChild size={"sm"} className="w-32">
            <Link href={"/about"}>
              Know more <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};
