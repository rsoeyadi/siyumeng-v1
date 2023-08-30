"use client";
import "./globals.css";
import Nav from "./components/Nav";
import { Nunito } from "next/font/google";
import useHamburgerStore from "./store";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"], // Add "bold" to the array
});

export default function Provider({ children }: { children: React.ReactNode }) {
  const setClose = useHamburgerStore((state) => state.setClose);

  const handleCloseMenu = () => {
    setClose();
  };

  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${nunito.className} mx-auto my-0 overscroll-none`}>
        <p
          onClick={handleCloseMenu}
          className="absolute top-0 left-0 text-[1.4em] xl:text-4xl pt-5 pl-3 font-bold lg:ml-5 lg:mt-4 text-white ease-in-out duration-300 hover:scale-105 z-[10000] uppercase"
        >
          <Link href="/">Siyumeng Wang</Link>
        </p>
        <div className="flex flex-col min-h-screen">
          <div>
            <Nav></Nav>
            <div
              onClick={handleCloseMenu}
              className={`lg:flex-grow mx-auto overflow-y-auto overflow-x-hidden transition-transform duration-500 `}
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
