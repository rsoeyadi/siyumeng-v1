"use client";
import { Event as Performance } from "@/app/(site)/components/Event";
import { compareDesc, format, parseISO } from "date-fns";
import { useState } from "react";
import AnimatedDiv from "../components/AnimatedDiv";
import useHamburgerStore from "../store";

interface eventsProviderProps {
  data: any;
}

export default function EventsProvider({ data }: eventsProviderProps) {
  const itemsToShowIncrement = 5;
  const [itemsToShow, setItemsToShow] = useState(itemsToShowIncrement);
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const sortedEvents = data
    ? data
        .slice()
        .sort(
          (
            a: { date: { toString: () => string } },
            b: { date: { toString: () => string } }
          ) =>
            compareDesc(
              parseISO(a.date.toString()),
              parseISO(b.date.toString())
            )
        )
        .map((event: { date: { toString: () => string } }) => ({
          ...event,
          formattedDate: format(
            parseISO(event.date.toString()),
            "MMMM d, yyyy"
          ),
        }))
    : [];

  const showMore = () => {
    setItemsToShow((prevItems) => prevItems + itemsToShowIncrement);
  };
  return (
    <div>
      {sortedEvents?.slice(0, itemsToShow).map((sortedEvent: any) => (
        <AnimatedDiv key={sortedEvent.name + sortedEvent.date}>
          <Performance sortedEvent={sortedEvent} />
        </AnimatedDiv>
      ))}
      {itemsToShow < sortedEvents.length && (
        <div className="text-center mt-5">
          <button
            className="cursor-pointer bg-black hover:bg-gray-500 transition duration-150 ease-in-out text-white font-bold py-2 px-5 rounded focus:outline-none focus:ring focus:ring-blue-300"
            onClick={showMore}
            tabIndex={isOpen ? -1 : 0}
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
