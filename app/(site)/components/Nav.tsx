"use client";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import useHamburgerStore from "../store";
import SocialLinks from "./SocialLinks";

export default function Nav() {
  const pathname = usePathname();
  const isOpen = useHamburgerStore((state) => state.isOpen);
  const toggleMenu = useHamburgerStore((state) => state.toggleMenu);
  let isMediumScreenUp = true;
  if (typeof window !== "undefined") {
    const handleResize = () => {
      isMediumScreenUp = window.innerWidth >= 1024;
      console.log(isMediumScreenUp);
    };
    window.onresize = handleResize;
  }
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

  console.log(isMediumScreenUp);
  return (
    <div className="relative lg:absolute">
      {/* Top bar */}
      <div className="lg:z-50 block w-screen top-0 left-0 h-20 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-20 lg:skew-x-[0.0001deg] lg:skew-y-[0.0001deg] bg-black lg:hidden">
        <div className="absolute top-3 right-4 lg:right-auto lg:left-3  z-40 cursor-pointer">
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
      overflow-y-scroll overflow-x-hidden top-0 bottom-0 w-[100vw]  p-10 pl-20 text-white fixed lg:relative z-30 ease-in-out duration-500
      ${isOpen ? "translate-x-0" : "translate-x-full"}
      lg:translate-x-0 lg:bg-transparent bg-black
    `}
      >
        <ul className="relative lg:hidden text-right mt-14 lg:mt-0  lg:justify-end md:space-x-3 lg:space-x-8">
          {pages.map((page) => (
            <li key={page.route} className="pb-5 relative group">
              <div className={`text-2xl`}>
                <Link
                  className={`relative z-10  ${
                    pathname === page.route
                      ? "text-slate-400"
                      : "text-slate-100"
                  }  ease-in-out duration-300 hover:text-slate-400`}
                  href={page.route}
                  tabIndex={isOpen ? 0 : -1}
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
        <ul className="hidden lg:flex text-right mt-14 lg:mt-0 lg:justify-end md:space-x-3 lg:space-x-8">
          {pages.map((page) => (
            <li key={page.route} className="pb-5 relative group">
              <div className={`text-2xl`}>
                <Link
                  className={`relative z-10  ${
                    pathname === page.route
                      ? "text-slate-400"
                      : "text-slate-100"
                  }  ease-in-out duration-300 hover:text-slate-400`}
                  href={page.route}
                  tabIndex={isMediumScreenUp ? 0 : -1}
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
