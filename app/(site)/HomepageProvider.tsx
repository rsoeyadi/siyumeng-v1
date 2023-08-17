"use client";
import { getCoverPhotos } from "@/sanity/sanity-utils";
import useSWR from "swr";
import Loading from "./loading";
import Image from "next/image";

export default function HomepageProvider() {
  const { data, error, isLoading } = useSWR("coverPhotos", getCoverPhotos);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loading />;

  return (
    <div className="relative">
      <div className="h-[100vh]">
        {isLoading ? (
          <Loading />
        ) : (
          <Image
            src={data?.entryImage as any}
            layout="fill"
            objectFit="cover"
            objectPosition="left 38% top 24%"
            alt="Background Image"
            className="transition-opacity opacity-0 duration-100"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        )}
      </div>
    </div>
  );
}
