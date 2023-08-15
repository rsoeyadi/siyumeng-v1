import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Gallery",
  description: "View pianist Siyumeng Wang's photo gallery.",
};

export default function Home() {
  return <Provider />;
}
