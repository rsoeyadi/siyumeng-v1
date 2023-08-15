import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Events",
  description: "View pianist Siyumeng Wang's performance calendar.",
};

export default function Home() {
  return <Provider />;
}
