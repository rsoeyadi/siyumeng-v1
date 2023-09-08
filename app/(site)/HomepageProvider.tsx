"use client";
import { getCoverPhotos } from "@/sanity/sanity-utils";
import useSWR from "swr";
import Loading from "./loading";
import Image from "next/image";
import useHamburgerStore from "./store";
import { useWindowSize } from "./components/Nav";
import cover from "@/public/images/cover-home.jpg";

export default function HomepageProvider() {
  const { data, error, isLoading } = useSWR("coverPhotos", getCoverPhotos);
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const [width, height] = useWindowSize();
  const isMediumScreenUp = width >= 1024;
  if (error) return <div>failed to load</div>;
  if (isLoading) return <Loading />;
  return (
    <div className="relative">
      <div className={`h-[100vh]`}>
        {isLoading ? (
          <Loading />
        ) : (
          <Image
            priority
            // src={data?.entryImage as any}
            src={cover}
            layout="fill"
            objectFit="cover"
            objectPosition="left 38% top 24%"
            alt="Background Image"
            placeholder="blur"
            className={`ease-in-out duration-500 ${
              isOpen && !isMediumScreenUp ? "blur-sm" : ""
            }`}
          />
        )}
      </div>
    </div>
  );
}
