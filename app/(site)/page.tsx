"use client";
import { getCoverPhotos } from "@/sanity/sanity-utils";
import useSWR from "swr";
import Loading from "./loading";

export default function Home() {
  const { data, error, isLoading } = useSWR("coverPhotos", getCoverPhotos);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loading />;
  const backgroundImageStyle = {
    backgroundImage: `url('${data?.entryImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "left 38% top 24%",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  };
  return (
    <div className="relative">
      <div
        className="h-[100vh] background-image"
        style={{
          ...backgroundImageStyle,
        }}
      ></div>
    </div>
  );
}
