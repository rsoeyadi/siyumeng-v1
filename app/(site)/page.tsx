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
    height: "95vh",
  };

  return (
    <div>
      <div style={backgroundImageStyle}></div>
      <div className="before:-top-24 landscape-sm:before:-top-9 before:absolute before:left-0 before:right-0 before:h-56 landscape-sm:before:h-36 before:bg-white -skew-y-6 sm:-top-12"></div>

      <h1>BIOGRAPHY</h1>
    </div>
  );
}
