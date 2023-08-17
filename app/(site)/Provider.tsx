"use client";
import "./globals.css";
import Nav from "./components/Nav";
import { Crimson_Text } from "next/font/google";
import useHamburgerStore from "./store";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import Link from "next/link";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add "bold" to the array
});

export default function Provider({ children }: { children: React.ReactNode }) {
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const setClose = useHamburgerStore((state) => state.setClose);

  const handleCloseMenu = () => {
    setClose();
  };

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${crimsonText.className} mx-auto my-0 overscroll-none`}>
        <p className="absolute top-0 left-0 lg:left-auto lg:right-10 z-50 text-2xl pt-5 pl-5 font-bold lg:ml-24 text-white">
          <Link href="/">Siyumeng Wang</Link>
        </p>
        <div className="flex flex-col min-h-screen">
          <div className="lg:flex">
            <Nav></Nav>
            <div
              onClick={handleCloseMenu}
              className={`lg:flex-grow mx-auto lg:pl-20 overflow-y-auto overflow-x-hidden transition-transform duration-500 ${
                isOpen ? " lg:translate-x-[20vw]" : ""
              }`}
            >
              {children}
            </div>
          </div>
          <footer className="mt-auto bg-black">
            {pathname !== "/" && <Footer />}
          </footer>
        </div>
      </body>
    </html>
  );
}
