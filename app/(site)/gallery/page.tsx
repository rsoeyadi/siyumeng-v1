import { Metadata } from "next";
import ProviderWrapper from "./ProviderWrapper";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Gallery",
  description: "View pianist Siyumeng Wang's photo gallery.",
  metadataBase: new URL("https://siyumeng.com"),
  openGraph: {
    images: "https://siyumeng.com/images/preview.jpg",
  },
};

export default function Home() {
  return <ProviderWrapper />;
}
