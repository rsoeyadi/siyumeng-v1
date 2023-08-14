"use client";
import { getGalleryImages } from "@/sanity/sanity-utils";
import useSWR from "swr";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway, ViewType } from "react-images";
import { useCallback, useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const openLightbox = useCallback((event: any, { photo, index }: any) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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

  const customStyles = {
    header: (base: any, state: { isFullscreen: any }) => ({
      ...base,
      "& svg": {
        fill: "white", // Change the fill color of SVGs to white
      },
    }),

    footer: (base: any, state: { interactionIsIdle: any }) => {
      const opacity = state.interactionIsIdle ? 0 : 1;
      const transition = "opacity 300ms";

      return { ...base, opacity, transition };
    },
  };

  return (
    <div className="shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset] mx-auto flex justify-center">
      <div className="w-full">
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
    </div>
  );
}
