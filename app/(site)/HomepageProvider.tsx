import cover from "@/public/images/cover-home.jpg";
import CoverPhoto from "./components/CoverPhoto";

export default function HomepageProvider() {
  return (
    <div className="relative">
      <div className={`h-[100vh]`}>
        <CoverPhoto coverPhoto={cover} objectPosition="left 38% top 24%" brightnessClass="brightness-30"/>
      </div>
    </div>
  );
}
