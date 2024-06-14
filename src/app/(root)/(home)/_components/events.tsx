import { H3 } from "@/components/typography/h3";
import { Heading } from "@/components/typography/heading";
import { P } from "@/components/typography/p";
import { months } from "@/data/constants";

const events = [
  {
    title: "Tree plantation programme",
    desc: "Our tree plantation programme in our village.",
    date: new Date(),
  },
  {
    title: "Tree plantation programme",
    desc: "Our tree plantation programme in our village.",
    date: new Date(),
  },
  {
    title: "Tree plantation programme",
    desc: "Our tree plantation programme in our village.",
    date: new Date(),
  },
];

export const Events = () => {
  return (
    <div className="flex h-[28rem] w-full flex-1 flex-col items-center gap-4 rounded-xl border bg-card p-2 md:p-6">
      <Heading>🗓️ Upcoming Events</Heading>
      {events.map((event) => (
        <div
          key={event.title}
          className="flex w-full items-center gap-1 rounded-md border p-3"
        >
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl border bg-card">
            <H3 className="text-2xl text-primary">{event.date.getDate()}</H3>
            <h5 className="text-primary">{months[event.date.getMonth()]}</h5>
          </div>
          <div className="grow">
            <H3 className="text-lg text-primary">{event.title}</H3>
            <P>{event.desc}</P>
          </div>
        </div>
      ))}
    </div>
  );
};
