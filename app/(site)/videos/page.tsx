"use client";
import { getCoverPhotos, getVideos } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import useSWR from "swr";

export default function Home() {
  const { data: videos, error, isLoading } = useSWR("videos", getVideos);
  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);

  if (error || coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || coverPhotosIsLoading)
    return <div className="text-blue-500">loading...</div>;

  return (
    <div className="pb-10">
      <div
        className="h-[80vh] md:h-[100vh] background-image relative flex items-center justify-center text-white text-4xl font-bold uppercase"
        style={{
          backgroundImage: `url('${coverPhotos?.videosImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center right -90px",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
        }}
      >
        {" "}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="text-white text-4xl font-bold uppercase">Videos</div>
        </div>
      </div>

      <div className="my-10">
        {videos?.map((video, index) => (
          <div
            key={index}
            className="max-w-3xl mb-20 mx-auto bg-white border border-gray-200 rounded-lg shadow"
          >
            <iframe
              className="w-full aspect-video rounded-t-lg"
              src={video.link}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-slate-700">
                {video.title}
              </h5>
              <PortableText value={video.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
