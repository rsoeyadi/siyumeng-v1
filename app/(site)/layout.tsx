"use client";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import { Cormorant_Garamond } from "@next/font/google";
import useHamburgerStore from "./store";

// export const metadata: Metadata = {
//   title: "Siyumeng Wang | Pianist",
//   description:
//     "Born in Beijing, China, 25-year-old pianist Siyumeng Wang is a rising young artist in constant demand known for her charm and charismatic performances.",
// };

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: ["300", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const isOpen = useHamburgerStore((state) => state.isOpen);
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className} mx-auto my-0`}>
        <p className="absolute top-0 left-0 lg:left-auto lg:right-10 z-[9999] text-2xl pt-5 pl-5 text-rose-600 font-bold lg:ml-24 lg:text-white">
          Siyumeng Wang
        </p>
        <Nav></Nav>
        <div
          className={`transition-transform duration-1000 ${
            isOpen
              ? " lg:translate-x-[20vw]"
              : ""
          }`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
