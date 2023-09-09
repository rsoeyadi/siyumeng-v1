"use client";
import Image from "next/image";
import { useWindowSize } from "../components/Nav";
import useHamburgerStore from "../store";

interface coverPhotoProps {
  coverPhoto: any;
  objectPosition: string;
}
export default function CoverPhoto({
  coverPhoto,
  objectPosition,
}: coverPhotoProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const [width, height] = useWindowSize();
  const isMediumScreenUp = width >= 1024;

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
      className={`ease-in-out duration-500 ${
        isOpen && !isMediumScreenUp ? "blur-sm" : ""
      }`}
    />
  );
}
