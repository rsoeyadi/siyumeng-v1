"use client";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import { Cormorant_Garamond } from "@next/font/google";
import useHamburgerStore from "./store";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["cyrillic"],
  weight: ["300", "700"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const setClose = useHamburgerStore((state) => state.setClose);

  const handleCloseMenu = () => {
    setClose();
  };

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className} mx-auto my-0`}>
        <p className="absolute top-0 left-0 lg:left-auto lg:right-10 z-[9999] text-2xl pt-5 pl-5 font-bold lg:ml-24 text-white">
          Siyumeng Wang
        </p>
        <div className="flex">
          <Nav></Nav>

          <div
            onClick={handleCloseMenu} // Add the click event handler
            className={`flex-grow mx-auto pl-20 transition-transform duration-1000 ${
              isOpen ? " lg:translate-x-[20vw]" : ""
            }`}
          >
            {children}
          </div>
        </div>
        {pathname !== "/" && <Footer />}
      </body>
    </html>
  );
}
