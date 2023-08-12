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
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  };

  return (
    <div className="relative">
      <div
        className="h-[100vh] background-image"
        style={{
          ...backgroundImageStyle,
        }}
      ></div>
    </div>
  );
}
