"use client";
import Image from "next/image";
import useHamburgerStore from "../store";

interface coverPhotoProps {
  coverPhoto: any;
  objectPosition: string;
  brightnessClass?: string;
}
export default function CoverPhoto({
  coverPhoto,
  objectPosition,
  brightnessClass,
}: coverPhotoProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <Image
      src={coverPhoto.src}
      layout="fill"
      objectFit="cover"
      priority={true}
      alt="Photo of Siyumeng Wang"
      placeholder="blur"
      blurDataURL={coverPhoto.blurDataURL}
      objectPosition={objectPosition}
      className={`${
        brightnessClass ? brightnessClass : "brightness-50"
      } ease-in-out duration-500 ${isOpen ? "blur-sm lg:blur-0" : ""}`}
    />
  );
}
