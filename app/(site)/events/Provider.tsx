"use client";
import { getCoverPhotos, getEvents } from "@/sanity/sanity-utils";
import useSWR from "swr";
import { compareDesc, parseISO, format } from "date-fns";
import { Event as Performance } from "@/app/(site)/components/Event";

export default function Home() {
  const { data: events, error, isLoading } = useSWR("events", getEvents);
  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);
  if (error || coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || coverPhotosIsLoading)
    return <div className="text-blue-500">loading...</div>;
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
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <div className="text-white text-4xl font-bold uppercase">
            Performances
          </div>
        </div>
      </div>
      {sortedEvents?.map((sortedEvent) => (
        <Performance
          sortedEvent={sortedEvent}
          key={sortedEvent.name + sortedEvent.date}
        />
      ))}
    </div>
  );
}
