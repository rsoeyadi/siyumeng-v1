import cover from "@/public/images/cover-videos.png";
import { getVideos } from "@/sanity/sanity-utils";
import CoverPhoto from "../components/CoverPhoto";
import CoverPhotoTitle from "../components/CoverPhotoTitle";
import VideosProvider from "./VideosProvider";

export default async function Home() {
  const data = await getVideos();

  return (
    <div className="relative">
      <div
        className="h-[80vh] md:h-[100vh] background-image relative flex items-center justify-center text-white text-4xl font-bold uppercase"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
        }}
      >
        <CoverPhoto coverPhoto={cover} objectPosition="center right" />
        <CoverPhotoTitle title="Videos" />
      </div>

      <VideosProvider data={data} />
      <div
        className="-z-10 h-[80vh] md:h-[100vh] absolute bottom-0 left-0 bg-black"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)",
        }}
      ></div>
    </div>
  );
}
