"use client";
import { useState } from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import { useWindowSize } from "../components/Nav";
import useHamburgerStore from "../store";

interface galleryPhotosProps {
  galleryImages: { description: string; image: string }[];
}
export default function GalleryProvider({ galleryImages }: galleryPhotosProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);

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

  const galleryPhotos = galleryImages?.map((item) => {
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

  const lightboxPhotos = galleryPhotos?.map((photo: any) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    description: photo.description,
  }));

  return (
    <div>
      <div
        className={`mt-20 mx-auto flex justify-center ${
          isOpen ? "blur-sm md:blur-0" : ""
        }`}
      >
        <div className={`w-full lg:w-10/12 pb-10`}>
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
    </div>
  );
}
