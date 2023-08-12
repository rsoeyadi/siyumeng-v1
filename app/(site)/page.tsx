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
        className="h-[80vh] landscape-sm:h-[125vh] md:h-[105vh] background-image"
        style={{
          backgroundImage: `url('${data.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >

        <div
          className="text-white text-center mb-[22vh] landscape-sm:mb-[32vh] md:mb-[30vh] text-content"
          style={{ position: "relative", zIndex: 1 }}
        >
          <p className="text-4xl px-2 text-white font-bold uppercase name">
            Siyumeng Wang, pianist
          </p>
          <p className="text-3xl text-white font-bold pt-6 pb-2 bio">
            Biography
          </p>
          <div className="border-b-2 border-white mx-auto w-10 divider landscape-sm:mb-5"></div>
        </div>
      </div>

      <div
        className="absolute inset-0 bg-black opacity-30 z-0 overlay"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      <div
        className="-z-20 before:-top-32 before:absolute before:left-0 before:right-0 before:h-64 before:bg-white -skew-y-6 sm:-top-12 shapes"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
}
