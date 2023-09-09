import cover from "@/public/images/cover-events.jpg";
import { getEvents } from "@/sanity/sanity-utils";
import CoverPhoto from "../components/CoverPhoto";
import CoverPhotoTitle from "../components/CoverPhotoTitle";
import EventsProvider from "./EventsProvider";

export default async function Home() {
  const data = await getEvents();

  return (
    <div className="pb-10">
      <div
        className="h-[80vh] md:h-[100vh] background-image relative"
        style={{
          width: "100vw",
          clipPath: "polygon(0 0, 100% 0, 100% 97%, 0  90.5%)",
        }}
      >
        <CoverPhoto
          coverPhoto={cover}
          objectPosition="top"
          brightnessClass="brightness-50"
        />
        <CoverPhotoTitle title="Performances" />
      </div>
      <EventsProvider data={data} />
    </div>
  );
}
