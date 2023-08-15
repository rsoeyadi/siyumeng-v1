import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Teaching",
  description:
    "Explore Siyumeng Wang's roles as a faculty member at institutions including The Juilliard School, Musart, and West Amadeus.",
};

export default function Home() {
  return <Provider />;
}
