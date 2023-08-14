"use client";
import { getCoverPhotos, getEvents } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import useSWR from "swr";
import { compareDesc, parseISO, format } from "date-fns";

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
  // Sort the events based on date in ascending order
  const sortedEvents = events
    ? events
        .slice()
        .sort((a, b) => compareDesc(parseISO(a.date), parseISO(b.date)))
        .map((event) => ({
          ...event,
          formattedDate: format(parseISO(event.date), "MMMM d, yyyy"),
        }))
    : [];

  console.log(events, sortedEvents);
  return (
    <>
      <div className="">
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
        {sortedEvents?.map((event) => (
          <div
            key={event.name}
            className={`mx-10 mb-10 max-w-4xl ${
              compareDesc(new Date(), parseISO(event.date)) > 0
                ? "past-event"
                : "upcoming-event"
            }
            `}
          >
            <hr className="h-px my-4 bg-gray-300 border-0" />{" "}
            <p className="text-2xl font-bold">{event.formattedDate}</p>
            <p className="text-3xl font-bold">{event.name}</p>
            <p className="text-2xl font-bold">{event.location}</p>
            <PortableText value={event.description}></PortableText>
            {event.link && (
              <p className="uppercase pt-5 font-bold">
                <Link href={event.link} target="_blank">
                  More Information
                </Link>
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
