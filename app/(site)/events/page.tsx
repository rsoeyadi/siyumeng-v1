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
        <>
          {" "}
          <hr className="hidden lg:block lg:max-w-6xl lg:mx-auto lg:my-9 h-px my-4 bg-gray-400 border-0" />{" "}
          <div
            key={event.name}
            className={`lg:mx-auto lg:grid lg:grid-cols-12 mx-10 mb-10 lg:mb-0 max-w-4xl ${
              compareDesc(new Date(), parseISO(event.date.toString())) > 0
                ? "past-event"
                : "upcoming-event"
            }`}
          >
            <hr className="lg:hidden lg:col-span-1 h-px my-4 bg-gray-400 border-0" />
            <div className="lg:col-span-4 lg:grid lg:grid-rows-6">
              <p className="text-xl lg:row-start-1 font-extrabold inline-block">
                {event.formattedDate}
              </p>
              <span className="text-xl font-extrabold lg:hidden">,&nbsp;</span>
              <p className="text-xl lg:row-start-2 lg:text-lg pb-5 lg:pb-0 font-extrabold inline-block">
                {event.time}
              </p>
            </div>
            <div className="lg:col-start-5 lg:col-span-5">
              <p className="text-3xl font-bold ">{event.name}</p>
              <p className="text-2xl font-bold pb-3">{event.location}</p>
              <PortableText value={event.description}></PortableText>
            </div>
            {event.link && (
              <p className="lg:text-sm lg:col-span-2 lg:col-start-11 uppercase pt-5 font-bold underline underline-offset-8	">
                <Link href={event.link} target="_blank">
                  More Information
                </Link>
              </p>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
