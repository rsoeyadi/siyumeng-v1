"use client";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import useHamburgerStore from "../store";
import SocialLinks from "./SocialLinks";

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Nav() {
  const pathname = usePathname();
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const toggleMenu = useHamburgerStore((state) => state.toggleMenu);
  const [width, height] = useWindowSize();
  const isMediumScreenUp = width >= 1024;
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add(
        "overflow-hidden",
        "lg:overflow-y-auto"
      );
    } else {
      document.documentElement.classList.remove(
        "overflow-hidden",
        "lg:overflow-y-auto"
      );
    }
  }, [isOpen]);

  const closeMenu = () => {
    toggleMenu();
  };

  const pages = [
    { title: "Home", route: "/" },
    { title: "Biography", route: "/biography" },
    { title: "Events", route: "/events" },
    { title: "Videos", route: "/videos" },
    { title: "Gallery", route: "/gallery" },
    { title: "Teaching", route: "/teaching" },
    { title: "Contact", route: "/contact" },
  ];

  return (
    <div className="relative lg:absolute">
      {/* Top bar */}
      <div className="lg:z-50 block w-screen top-0 left-0 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-20 lg:skew-x-[0.0001deg] lg:skew-y-[0.0001deg]  lg:hidden">
        <div
          className={`        z-[1000]
absolute top-3 right-4 lg:right-auto lg:left-3  cursor-pointer`}
        >
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            color="#FFFFFF"
            rounded
            label="Toggle Menu"
            size={37}
            hideOutline={false}
          />
          <p
            className="ease-in-out duration-300 text-white absolute top-[40px] left-1 lg:left-1 lg:top-10 z-40 cursor-pointer text-sm"
            onClick={toggleMenu}
          >
            {isOpen ? "CLOSE" : "MENU"}
          </p>
        </div>
      </div>
      {/* Sidebar */}
      <div
        className={`
      overflow-y-scroll overflow-x-hidden top-0 bottom-0 w-[100vw]  p-10 pl-20 z-30 ease-in-out duration-300 fixed lg:relative
        ${isOpen && !isMediumScreenUp ? "bg-black bg-opacity-[70%]" : ""}  ${
          isOpen || isMediumScreenUp ? "opacity-90" : "opacity-0"
        } 
        ${isMediumScreenUp ? "z-[50]" : "z-[-50]"}
        ${isOpen ? "z-[50]" : "z-[-50]"}
    `}
      >
        <ul
          className={`relative text-right mt-14 lg:mt-0 lg:flex lg:justify-end lg:space-x-4 xl:space-x-9`}
        >
          {pages.map((page) => (
            <li key={page.route} className="pb-5 relative group">
              <div
                className={`text-2xl ease-in-out duration-300 hover:scale-[1.18]`}
              >
                <Link
                  className={`relative z-10  ${
                    pathname === page.route ? "text-slate-400" : "text-white"
                  } `}
                  href={page.route}
                  tabIndex={isOpen || isMediumScreenUp ? 0 : -1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      closeMenu();
                    }
                  }}
                >
                  <button onClick={closeMenu} tabIndex={-1}>
                    {page.title}
                  </button>
                </Link>
              </div>
            </li>
          ))}

          <div className="lg:hidden">
            <SocialLinks />
          </div>
        </ul>
      </div>
    </div>
  );
}
