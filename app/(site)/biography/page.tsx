"use client";
import { getBiography } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR("biography", getBiography);

  console.log(data);

  if (error) return <div className="text-red-500">failed to load</div>;
  if (isLoading) return <div className="text-blue-500">loading...</div>;

  return (
    <div className="relative">
      <div className="w-full h-full relative flex items-end justify-center">
        <div
          className="h-[80vh] md:h-[100vh] background-image relative"
          style={{
            backgroundImage: `url('${data?.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-white text-4xl font-bold uppercase text-center">
              Biography
            </div>
          </div>
        </div>
      </div>
      {data?.content && (
        <div className="mt-10 px-6 text-lg bg-slate">
          <PortableText value={data.content}></PortableText>
        </div>
      )}
    </div>
  );
}
