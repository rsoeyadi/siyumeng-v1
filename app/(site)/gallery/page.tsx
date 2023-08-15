"use client";
import { getCoverPhotos, getGalleryImages } from "@/sanity/sanity-utils";
import useSWR from "swr";
import Gallery from "react-photo-gallery";
/* @ts-ignore */
import Carousel, { Modal, ModalGateway, ViewType } from "react-images";
import { useCallback, useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { data, error, isLoading } = useSWR("gallery", getGalleryImages);
  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);
  if (error || coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || coverPhotosIsLoading)
    return <div className="text-blue-500">loading...</div>;

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
        class:
          "betterhover:hover:scale-90 betterhover:transition betterhover:duration-300",
      };
    }
    return { src: url, width: 4, height: 3 };
  });

  const customStyles = {
    header: (base: any, state: { isFullscreen: any }) => ({
      ...base,
      "& svg": {
        fill: "white",
      },
    }),

    footer: (base: any, state: { interactionIsIdle: any }) => {
      const opacity = state.interactionIsIdle ? 0 : 1;
      const transition = "opacity 300ms";

      return { ...base, opacity, transition };
    },
  };

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
            photos={
              photos as {
                src: string;
                srcSet?: string | string[] | undefined;
                sizes?: string | string[] | undefined;
                width: number;
                height: number;
                alt?: string | undefined;
                key?: string | undefined;
              }[]
            }
            onClick={openLightbox}
          />
        </div>
        {/* @ts-ignore */}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                styles={customStyles}
                views={
                  photos?.map((photo) => ({
                    ...photo,
                  })) as unknown as ViewType[]
                }
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>{" "}
     
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
