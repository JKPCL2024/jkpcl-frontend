import { Section } from "@/components/section";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";

export const MissionAndVision = () => {
  return (
    <Section>
      <Heading>Mission & Vission</Heading>
      <div className="mt-4 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <MissionAndVisionCard
          heading="Mission"
          desc="To drive sustainable growth in farm productivity and market access for farm families and SHGs, aiming at better income generation in a credible manner."
        />
        <MissionAndVisionCard
          heading="Vission"
          desc="To transform the livelihood patterns of primary producers by linking them to technology, markets, and resources. We aim to improve their cost efficiency, productivity, and returns from production sustainably."
        />
      </div>
    </Section>
  );
};

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MissionAndVisionCard = ({
  heading,
  desc,
}: {
  heading: string;
  desc: string;
}) => {
  return (
    <Card>
      <CardHeader className="p-6 pb-2">
        <CardTitle className="text-xl text-primary">{heading}</CardTitle>
      </CardHeader>
      <CardContent>
        <P>{desc}</P>
      </CardContent>
    </Card>
  );
};
