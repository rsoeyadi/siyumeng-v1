import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Contact",
  description: "Submit a form to get in touch with pianist Siyumeng Wang.",
};

export default function Home() {
  return <Provider />;
}
