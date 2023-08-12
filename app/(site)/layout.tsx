import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import { Cormorant_Garamond } from "@next/font/google";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Pianist",
  description:
    "Born in Beijing, China, 25-year-old pianist Siyumeng Wang is a rising young artist in constant demand known for her charm and charismatic performances.",
};

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: ["300", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className}`}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
