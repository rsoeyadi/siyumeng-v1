"use client";
import cover from "@/public/images/cover-videos.png";
import { getVideos } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import useSWR from "swr";
import CoverPhoto from "../components/CoverPhoto";
import { useWindowSize } from "../components/Nav";
import Loading from "../loading";
import useHamburgerStore from "../store";

export default function Home() {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  const { data: videos, error, isLoading } = useSWR("videos", getVideos);
  if (error) return <div className="text-red-500">failed to load</div>;
  if (isLoading) return <Loading />;

  return (
    <div className="relative">
      <div
        className="h-[80vh] md:h-[100vh] background-image relative flex items-center justify-center text-white text-4xl font-bold uppercase"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
        }}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <CoverPhoto coverPhoto={cover} objectPosition="center right" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 lg:bg-opacity-50">
          <div
            className={`text-white text-4xl font-bold uppercase ease-in-out duration-500 ${
              isOpen ? "blur-sm md:blur-0" : ""
            }`}
          >
            Videos
          </div>{" "}
        </div>
      </div>

      <div>
        {videos?.map((video, index) => (
          <div
            tabIndex={isOpen ? -1 : 0}
            key={index}
            className={`${
              isOpen ? "blur-sm md:blur-0" : ""
            } max-w-3xl mt-10 mx-auto bg-white border border-gray-200 rounded-lg shadow`}
          >
            <iframe
              className="w-full aspect-video rounded-t-lg"
              src={video.link}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              tabIndex={isOpen ? -1 : 0}
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-700">
                {video.title}
              </h5>
              <div className="block text-base font-light leading-relaxed text-inherit antialiased">
                <PortableText value={video.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="-z-10 h-[80vh] md:h-[100vh] absolute bottom-0 left-0 bg-black"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </div>
  );
}
