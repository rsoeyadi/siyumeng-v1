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
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30 z-0 overlay"
        style={{ mixBlendMode: "multiply" }}
      ></div>

      {/* Background Image Section */}
      <div
        className="h-[90vh] lg:h-[100vh] background-image"
        style={{
          ...backgroundImageStyle,
        }}
      >
        {/* Text Content */}
        <div
          className="text-white text-center mb-[15vh] md:mb-[9vh] text-content"
          style={{ position: "relative", zIndex: 1 }}
        >
          <p className="text-2xl px-2 text-white font-bold uppercase name">
            Siyumeng Wang, pianist
          </p>
        </div>
      </div>
    </div>
  );
}
