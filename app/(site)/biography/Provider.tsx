"use client";
import { getBiography, getCoverPhotos } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import useSWR from "swr";
import styles from "./page.module.css";
import Loading from "../loading";
import Image from "next/image";

export default function Home() {
  const { data, error, isLoading } = useSWR("biography", getBiography);
  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);

  if (error || coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || coverPhotosIsLoading) return <Loading />;

  return (
    <div className="pb-10">
      <div>
        <div
          className={`h-[90vh] md:h-[95vh] relative ${styles.backgroundImage}`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
          }}
        >
          <Image
            src={coverPhotos?.biographyImage as any}
            layout="fill"
            objectFit="cover"
            objectPosition="90% 0%"
            priority
            alt="Biography Background"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="text-white text-4xl font-bold uppercase">
              Biography
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto my-0">
        {data?.biographyHalf1 && (
          <div
            className={`${styles.biographyText} mt-10 px-6 text-lg bg-slate mx-auto my-0 max-w-4xl font-light leading-relaxed text-inherit antialiased`}
          >
            <PortableText value={data.biographyHalf1}></PortableText>
          </div>
        )}
        <div
          className="relative mx-auto my-0 max-w-2xl"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <div className="mb-4">
            <Image
              className="h-auto max-w-full rounded-full"
              src={data?.square1 as any}
              width={1000}
              height={500}
              alt="Pianist Siyumeng Wang Performance Photo"
            />
          </div>
        </div>
        {data?.biographyHalf2 && (
          <div
            className={`${styles.biographyText} mt-10 px-6 text-lg bg-slate mx-auto my-0 max-w-4xl`}
          >
            <PortableText value={data.biographyHalf2}></PortableText>
          </div>
        )}
      </div>
    </div>
  );
}
