"use client";
import useHamburgerStore from "../store";

interface CoverPhotoTitleProps {
  title: string;
}

export default function CoverPhotoTitle({ title }: CoverPhotoTitleProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
      <div
        className={`text-white text-4xl font-bold uppercase ease-in-out duration-500 ${
          isOpen ? "blur-sm lg:blur-0" : ""
        }`}
      >
        {title}
      </div>
    </div>
  );
}
