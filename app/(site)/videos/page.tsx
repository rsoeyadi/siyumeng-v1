import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Videos",
  description: "View pianist Siyumeng Wang's video performances on YouTube.",
};

export default function Home() {
  return <Provider />;
}
