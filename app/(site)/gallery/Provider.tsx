"use client";
import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import Image from "next/image"; //
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
        description: item.description,
        class: "hover:brightness-125 transition ease-in-out duration-150",
      };
    }
    return { src: url, width: 4, height: 3 };
  });

  const lightboxPhotos = galleryPhotos?.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    description: photo.description,
  }));

  return (
    <div className="relative">
      <div
        className="h-[80vh] md:h-[70vh] relative bg-[position:60%_0%] lg:bg-[position:90%_20%]"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95.5%)",
        }}
      >
        <Image
          src={coverPhotos?.galleryImage as any}
          layout="fill"
          objectFit="cover"
          priority
          alt="Photo of Siyumeng Wang at the piano in China"
          objectPosition="60% center"
          className="transition-opacity opacity-0 duration-100"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <div className="text-white text-4xl font-bold uppercase">Gallery</div>
        </div>
      </div>
      <div className="mt-20 mx-auto flex justify-center">
        <div className="w-full lg:w-10/12 pb-10">
          <Gallery
            photos={galleryPhotos as any}
            onClick={(e, obj) => openLightbox(obj.index)}
          />
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={closeLightbox}
        index={currentSlide}
        slides={lightboxPhotos}
        plugins={[Captions]}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        captions={{
          descriptionTextAlign: "center",
          descriptionMaxLines: 3,
        }}
      />

      <div
        className="-z-10 h-[60vh] md:h-[50vh] absolute bottom-0 left-0 bg-black"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
          transform: "skewY(0.001deg)",
        }}
      ></div>
    </div>
  );
}
