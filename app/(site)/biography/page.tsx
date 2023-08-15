"use client";
import { getBiography, getCoverPhotos } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import useSWR from "swr";
import styles from "./page.module.css";

export default function Home() {
  const { data, error, isLoading } = useSWR("biography", getBiography);
  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);
  if (error || coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (isLoading || coverPhotosIsLoading)
    return <div className="text-blue-500">loading...</div>;

  return (
    <div className="pb-10">
      <div>
        <div
          className="h-[80vh] md:h-[100vh] background-image relative"
          style={{
            backgroundImage: `url('${coverPhotos?.biographyImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white text-4xl font-bold uppercase">
              Biography
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto my-0">
        {data?.biographyHalf1 && (
          <div
            className={`${styles.biographyText} mt-10 px-6 text-lg bg-slate mx-auto my-0 max-w-4xl`}
          >
            <PortableText value={data.biographyHalf1}></PortableText>
          </div>
        )}
        <div className="relative mx-auto my-0 max-w-2xl">
          <div>
            <img src={data?.square1} alt="" />{" "}
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
