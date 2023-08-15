import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Videos",
  description: "View pianist Siyumeng Wang's video performances on YouTube.",
  metadataBase: new URL("https://siyumeng.com"),
  openGraph: {
    images: "https://siyumeng.com/images/preview.jpg",
  },
};

export default function Home() {
  return <Provider />;
}
