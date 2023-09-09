import cover from "@/public/images/cover-gallery.jpg";
import { getGalleryImages } from "@/sanity/sanity-utils";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import CoverPhoto from "../components/CoverPhoto";
import GalleryProvider from "./GalleryProvider";

export default async function Home() {
  const data = await getGalleryImages();
  return (
    <div className="relative">
      <div
        className="h-[80vh] md:h-[70vh] relative bg-[position:60%_0%] lg:bg-[position:90%_20%]"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95.5%)",
        }}
      >
        <CoverPhoto coverPhoto={cover} objectPosition="60% center" />

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <div className="text-white text-4xl font-bold uppercase ease-in-out duration-500">
            Gallery
          </div>
        </div>
      </div>
      <GalleryProvider galleryImages={data} />

      <div
        className="-z-10 h-[60vh] md:h-[50vh] absolute bottom-0 left-0 bg-black"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
          transform: "skewY(0.001deg)",
        }}
      ></div>
    </div>
  );
}
