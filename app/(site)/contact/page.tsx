import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Contact",
  description: "Submit a form to get in touch with pianist Siyumeng Wang.",
  metadataBase: new URL("https://siyumeng.com"),
  openGraph: {
    images: "https://siyumeng.com/images/preview.jpg",
  },
};

export default function Home() {
  return <Provider />;
}
