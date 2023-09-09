import { Event } from "@/types/Event";
import { PortableText } from "@portabletext/react";
import { compareDesc, parseISO } from "date-fns";
import Link from "next/link";
import useHamburgerStore from "../store";

interface eventProps {
  sortedEvent: Event;
}

export function Event({ sortedEvent }: eventProps) {
 
  const isOpen = useHamburgerStore((state) => state.isOpen);
  return (
    <div
      tabIndex={isOpen ? -1 : 0}
      className={`${isOpen ? "blur-sm md:blur-0" : ""}
`}
    >
      <hr className="hidden lg:block lg:max-w-3xl lg:mx-auto lg:my-9 h-px my-4 bg-gray-400 border-0" />
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
          <p className="text-base lg:row-start-1  block font-light leading-relaxed text-inherit antialiased">
            {sortedEvent.formattedDate}
          </p>
          <p className=" font-light leading-relaxed text-inherit antialiased text-base  lg:row-start-2  pb-5 lg:pb-0 block">
            {sortedEvent.time}
          </p>
        </div>
        <div className="lg:col-start-5 lg:col-span-5">
          <p className="text-2xl font-bold ">{sortedEvent.name}</p>
          <p className="pb-5 text-base font-light leading-relaxed text-inherit antialiased">
            {sortedEvent.location}
          </p>
          <PortableText value={sortedEvent.description}></PortableText>
        </div>
        {sortedEvent.link && (
          <p className="lg:text-sm lg:col-span-2 lg:col-start-11  uppercase pt-5 lg:pt-0 font-bold underline underline-offset-8	">
            <Link
              className="hover:text-slate-500 duration-300 ease-in-out"
              href={sortedEvent.link}
              target="_blank"
              tabIndex={isOpen ? -1 : 0}
            >
              Event Information
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
