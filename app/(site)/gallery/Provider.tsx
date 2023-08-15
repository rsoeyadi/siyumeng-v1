"use client";
import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox"; // Import the Lightbox component
import "yet-another-react-lightbox/styles.css"; // Import the styles

import { getCoverPhotos, getGalleryImages } from "@/sanity/sanity-utils";
import useSWR from "swr";
import Loading from "../loading";

export default function Home() {
  const { data, error, isLoading } = useSWR("gallery", getGalleryImages);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentSlide(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentSlide(0);
  };

  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);
  if (error || coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || coverPhotosIsLoading) return <Loading />;

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
      };
    }
    return { src: url, width: 4, height: 3 };
  });

  // Transform photos into the format required by Lightbox
  const lightboxPhotos = galleryPhotos?.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
  }));

  return (
    <div className="relative">
      <div
        className="h-[80vh] md:h-[70vh] background-image relative"
        style={{
          backgroundImage: `url('${coverPhotos?.galleryImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95.5%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80">
          <div className="text-white text-4xl font-bold uppercase">Gallery</div>
        </div>
      </div>
      <div className="mt-20 mx-auto flex justify-center">
        <div className="w-9/12 pb-10">
          <Gallery
            photos={galleryPhotos as any}
            onClick={(e, obj) => openLightbox(obj.index)} // Open Lightbox on photo click
          />
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        slides={lightboxPhotos}
      />

      <div
        className="-z-10 h-[60vh] md:h-[50vh] background-image absolute bottom-0 left-0 bg-slate-700"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
          transform: "skewY(0.00001deg)",
        }}
      ></div>
    </div>
  );
}
