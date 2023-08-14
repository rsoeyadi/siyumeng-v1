"use client";
import { getGalleryImages } from "@/sanity/sanity-utils";
import useSWR from "swr";
import Gallery from "react-photo-gallery";

export default function Home() {
  const { data, error, isLoading } = useSWR("gallery", getGalleryImages);
  if (error) return <div className="text-red-500">failed to load</div>;
  if (isLoading) return <div className="text-blue-500">loading...</div>;

  const photos = data?.map((item) => {
    const url = item.image;
    const dimensionsMatch = url.match(/-(\d+)x(\d+)\./);
    if (dimensionsMatch) {
      const width = parseInt(dimensionsMatch[1]);
      const height = parseInt(dimensionsMatch[2]);
      return {
        src: url,
        width: width,
        height: height,
      };
    }
    return { src: url, width: 4, height: 3 };
  });

  return (
    <div className="my-10 mx-auto max-w-xl flex justify-center">
      <Gallery photos={photos}></Gallery>
    </div>
  );
}
