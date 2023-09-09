"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import useHamburgerStore from "../store";
import styles from "./page.module.css";

interface biographyProviderProps {
  data: any;
}

export default function BiographyProvider({ data }: biographyProviderProps) {
  const isOpen = useHamburgerStore((state) => state.isOpen);

  return (
    <div className="relative mx-auto my-0">
      {data?.biographyHalf1 && (
        <div
          className={`${
            styles.biographyText
          } mt-10 px-6 text-lg bg-slate mx-auto my-0 max-w-4xl font-light leading-relaxed text-inherit antialiased ${
            isOpen ? "blur-sm lg:blur-0" : ""
          }`}
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
  );
}
