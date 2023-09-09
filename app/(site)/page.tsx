import { Metadata } from "next";
import HomepageProvider from "./HomepageProvider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Pianist",
  description:
    "Pianist Siyumeng Wang | Biography, events, videos, and more",
  metadataBase: new URL("https://siyumeng.com"),
  openGraph: {
    images: "https://siyumeng.com/images/preview.jpg",
  },
};

export default function Home() {
  return <HomepageProvider />;
}
