import { getEvents } from "@/sanity/sanity-utils";
import { Event } from "@/types/Event";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { compareDesc, parseISO, format } from "date-fns";

interface eventProps {
  sortedEvent: Event;
}

export function Event({ sortedEvent }: eventProps) {
  console.log(sortedEvent);
  return (
    <div>
      <hr className="hidden lg:block lg:max-w-6xl lg:mx-auto lg:my-9 h-px my-4 bg-gray-400 border-0" />
      <div
        key={sortedEvent.name}
        className={`lg:mx-auto lg:grid lg:grid-cols-12 mx-10 mb-10 lg:mb-0 max-w-4xl ${
          compareDesc(new Date(), parseISO(sortedEvent.date.toString())) > 0
            ? "past-event"
            : "upcoming-event"
        }`}
      >
        <hr className="lg:hidden lg:col-span-1 h-px my-4 bg-gray-400 border-0" />
        <div className="lg:col-span-4 lg:grid lg:grid-rows-6 lg:max-h-40">
          <p className="text-xl lg:row-start-1 font-extrabold inline-block ">
            {sortedEvent.formattedDate}
          </p>
          <span className="text-xl font-extrabold lg:hidden">,&nbsp;</span>
          <p className="text-xl lg:row-start-2 lg:text-lg pb-5 lg:pb-0 font-extrabold inline-block">
            {sortedEvent.time}
          </p>
        </div>
        <div className="lg:col-start-5 lg:col-span-5">
          <p className="text-3xl font-bold ">{sortedEvent.name}</p>
          <p className="text-2xl font-bold pb-3">{sortedEvent.location}</p>
          <PortableText value={sortedEvent.description}></PortableText>
        </div>
        {sortedEvent.link && (
          <p className="lg:text-sm lg:col-span-2 lg:col-start-11 uppercase pt-5 font-bold underline underline-offset-8	">
            <Link href={sortedEvent.link} target="_blank">
              More Information
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
