"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";
import useHamburgerStore from "./store";

export default function Provider({ children }: { children: React.ReactNode }) {
  const setClose = useHamburgerStore((state) => state.setClose);
  const handleCloseMenu = () => {
    setClose();
  };
  const pathname = usePathname();

  return (
    <>
      <p
        onClick={handleCloseMenu}
        className="absolute top-0 left-0 text-[1.5em] xl:text-4xl pt-5 pl-3 font-bold lg:ml-5 lg:mt-4 text-white ease-in-out duration-300 hover:scale-105 z-[10000] uppercase"
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
    </>
  );
}
