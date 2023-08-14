"use client";
import { getCoverPhotos, getVideos } from "@/sanity/sanity-utils";
import useSWR from "swr";
import styles from "./page.module.css";

export default function Home() {
  const { data, error, isLoading } = useSWR("videos", getVideos);
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
      <div>
        <div
          className="h-[80vh] md:h-[100vh] background-image relative"
          style={{
            backgroundImage: `url('${coverPhotos?.videosImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="text-white text-4xl font-bold uppercase">
              Videos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
