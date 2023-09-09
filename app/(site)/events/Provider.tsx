"use client";
import { Event as Performance } from "@/app/(site)/components/Event";
import cover from "@/public/images/cover-events.jpg";
import { getEvents } from "@/sanity/sanity-utils";
import { compareDesc, format, parseISO } from "date-fns";
import { useState } from "react";
import useSWR from "swr";
import CoverPhoto from "../components/CoverPhoto";
import Loading from "../loading";
import useHamburgerStore from "../store";

export default function Home() {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  const itemsToShowIncrement = 5;
  const [itemsToShow, setItemsToShow] = useState(itemsToShowIncrement);
  const { data: events, error, isLoading } = useSWR("events", getEvents);
  if (error) return <div className="text-red-500">failed to load</div>;
  if (isLoading) return <Loading />;
  const sortedEvents = events
    ? events
        .slice()
        .sort((a, b) =>
          compareDesc(parseISO(a.date.toString()), parseISO(b.date.toString()))
        )
        .map((event) => ({
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
    <div className="pb-10">
      <div
        className="h-[80vh] md:h-[100vh] background-image relative"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 97%, 0  90.5%)",
        }}
      >
        <CoverPhoto coverPhoto={cover} objectPosition="top" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className={`text-white text-4xl font-bold uppercase ease-in-out duration-500 ${
              isOpen ? "blur-sm md:blur-0" : ""
            }`}
          >
            Performances
          </div>
        </div>
      </div>
      {sortedEvents?.slice(0, itemsToShow).map((sortedEvent) => (
        <Performance
          sortedEvent={sortedEvent}
          key={sortedEvent.name + sortedEvent.date}
        />
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
