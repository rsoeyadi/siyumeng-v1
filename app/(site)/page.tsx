"use client";
import { getIndexPageImage } from "@/sanity/sanity-utils";
import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    "indexPageImage",
    getIndexPageImage
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const backgroundImageStyle = {
    backgroundImage: `url('${data.image}')`,
    backgroundSize: "cover",
    backgroundPosition: "center top", // Adjust this line
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "115vh",
    display: "flex", // Add this line
    alignItems: "flex-end", // Add this line
    justifyContent: "center", // Add this line
  };

  return (
    <div className="relative">
      <div className="uppercase" style={backgroundImageStyle}>
        <div
          className="text-white text-center"
          style={{ marginBottom: "30vh", position: "relative", zIndex: 1 }}
        >
          <p className="text-4xl text-white font-bold">
            Siyumeng Wang, pianist
          </p>
          <p className="text-3xl text-white font-bold pt-10">Biography</p>
          <div className="border-b-2 border-white mx-auto w-10 mt-2"></div>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-black opacity-30 z-0"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      <div
        className="-z-20 before:-top-32 before:absolute before:left-0 before:right-0 before:h-64 before:bg-white -skew-y-6 sm:-top-12"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
}
