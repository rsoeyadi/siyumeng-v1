"use client";
import { getCoverPhotos, getEvents } from "@/sanity/sanity-utils";
import useSWR from "swr";
import { compareDesc, parseISO, format } from "date-fns";
import { Event as Performance } from "@/app/(site)/components/Event";
import Loading from "../loading";
import { useState } from "react";

export default function Home() {
  const itemsToShowIncrement = 5;
  const [itemsToShow, setItemsToShow] = useState(itemsToShowIncrement);
  const { data: events, error, isLoading } = useSWR("events", getEvents);
  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);
  if (error || coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || coverPhotosIsLoading) return <Loading />;
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
          backgroundImage: `url('${coverPhotos?.eventsImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0  90.5%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="text-white text-4xl font-bold uppercase">
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
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
