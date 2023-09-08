import { getGalleryImages } from "@/sanity/sanity-utils";
import React from "react";
import Provider from "./Provider";

export default async function ProviderWrapper() {
  const data = await getGalleryImages();

  const galleryPhotos = data?.map((item) => {
    const url = item.image;
    const dimensionsMatch = url.match(/-(\d+)x(\d+)\./);
    if (dimensionsMatch) {
      const width = parseInt(dimensionsMatch[1]);
      const height = parseInt(dimensionsMatch[2]);
      return {
        src: url,
        width: width,
        height: height,
        description: item.description,
        class: "hover:brightness-125 transition ease-in-out duration-150",
      };
    }
    return { src: url, width: 4, height: 3 };
  });

  return <Provider galleryPhotos={galleryPhotos} />;
}
