"use client";
import useSWR from "swr";
import { ContactForm } from "../components/Form";
import { getCoverPhotos } from "@/sanity/sanity-utils";
import Loading from "../loading";
import Image from "next/image"; // Import the Image component from Next.js

export default function Home() {
  const {
    data: coverPhotos,
    error: coverPhotosError,
    isLoading: coverPhotosIsLoading,
  } = useSWR("coverPhotos", getCoverPhotos);

  if (coverPhotosError)
    return <div className="text-red-500">failed to load</div>;
  if (coverPhotosIsLoading) return <Loading />;

  return (
    <>
      <div className="">
        <div
          className="h-[80vh] md:h-[100vh] relative"
          style={{
            width: "100vw",
            clipPath: "polygon(0 0, 100% 0, 100% 90.5%, 0 100%)",
          }}
        >
          {coverPhotosIsLoading ? (
            <Loading />
          ) : (
            <Image
              src={coverPhotos?.contactImage1 as any}
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              alt="Contact Image 1"
              className="transition-opacity opacity-0 duration-100"
              onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <div className="text-white text-4xl font-bold uppercase">
              Contact
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-20">
        <p className="text-4xl px-5 mx-2 lg:mx-auto lg:max-w-6xl">
          Contact Form
        </p>
        <ContactForm />
      </div>
      <div>
        <div
          className="h-[40vh] md:h-[60vh] relative"
          style={{
            width: "100vw",
            clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          {coverPhotosIsLoading ? (
            <Loading />
          ) : (
            <Image
              src={coverPhotos?.contactImage2 as any}
              layout="fill"
              objectFit="cover"
              objectPosition="right"
              alt="Contact Image 2"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70"></div>
        </div>
      </div>
    </>
  );
}
