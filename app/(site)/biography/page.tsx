import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Biography",
  description:
    "Hailing from Beijing, China, Siyumeng Wang is a 25-year-old pianist who enchants audiences with her heartfelt performances. Her genuine charm and captivating stage presence have made her a sought-after artist, known for her sincere and expressive interpretations.",
  metadataBase: new URL("https://siyumeng.com"),
  openGraph: {
    images: "https://siyumeng.com/images/preview.jpg",
  },
};

export default function Home() {
  return <Provider />;
}
