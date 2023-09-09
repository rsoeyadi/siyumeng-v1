import cover from "@/public/images/cover-biography.jpg";
import { getBiography } from "@/sanity/sanity-utils";
import CoverPhoto from "../components/CoverPhoto";
import CoverPhotoTitle from "../components/CoverPhotoTitle";
import BiographyProvider from "./BiographyProvider";
import styles from "./page.module.css";

export default async function Home() {
  const data = await getBiography();

  return (
    <div className="pb-10">
      <div>
        <div
          className={`h-[90vh] md:h-[95vh] relative ${styles.backgroundImage}`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 93.5%)",
          }}
        >
          <CoverPhoto coverPhoto={cover} objectPosition="90% 0%" brightnessClass="brightness-30"/>
          <CoverPhotoTitle title="Biography" />
        </div>
      </div>
      <BiographyProvider data={data} />
    </div>
  );
}
