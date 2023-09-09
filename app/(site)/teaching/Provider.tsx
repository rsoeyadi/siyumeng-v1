import cover from "@/public/images/cover-teaching.jpg";
import { getJobs, getTeachingPhilosophy } from "@/sanity/sanity-utils";
import CoverPhoto from "../components/CoverPhoto";
import CoverPhotoTitle from "../components/CoverPhotoTitle";
import TeachingPhilosophy from "./TeachingPhilosophy";
import TeachingProvider from "./TeachingProvider";

export default async function Home() {
  const data = await getJobs();
  const teachingPhilosophy = await getTeachingPhilosophy();

  return (
    <div className="relative">
      <div
        className="h-[80vh] md:h-[100vh] background-image flex items-center justify-center text-white text-4xl font-bold uppercase relative"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 97%, 0 100%)",
        }}
      >
        <CoverPhoto coverPhoto={cover} objectPosition="18%" />
        <CoverPhotoTitle title="Teaching" />
      </div>
      <TeachingPhilosophy data={teachingPhilosophy} />
      <TeachingProvider data={data} />
      <div
        className="-z-10 h-[40vh] md:h-[50vh] absolute bottom-0 left-0 bg-black"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          clipPath: "polygon(0 0, 100% 97%, 100% 100%, 0 100%)",
          transform: "skewY(0.0001deg)",
        }}
      ></div>
    </div>
  );
}
