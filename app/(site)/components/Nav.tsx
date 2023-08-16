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
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
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
    <div className="relative">
      {/* Top bar */}
      <div className="lg:z-50 block w-screen top-0 left-0 h-20 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-20 lg:skew-x-[0.0001deg] lg:skew-y-[0.0001deg] bg-black">
        <div className="absolute top-4 right-4 lg:right-auto lg:left-3  z-40 cursor-pointer">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            color="#FFFFFF"
            rounded
            label="Toggle Menu"
            size={48}
            hideOutline={false}
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`
      overflow-y-scroll overflow-x-hidden top-0 bottom-0 lg:left-20 w-[100vw] lg:w-[20vw]  bg-black p-10 pl-20 text-white fixed z-30 ease-in-out duration-500
      ${isOpen ? "translate-x-0 " : "translate-x-full lg:-translate-x-full"}
    `}
      >
        <ul className="text-right lg:text-left mt-14">
          {pages.map((page) => (
            <li key={page.route} className="pb-5 relative group">
              <div className="text-2xl">
                {/* Skew Backgrounds */}
                <div className="absolute top-0 right-0 lg:-left-3  w-20 h-2 pb-8 transform skew-y-[-28deg] lg:skew-y-[28deg]  opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0 bg-gray-500	"></div>
                {pathname === page.route && (
                  <div className="absolute top-0 right-0 lg:-left-3  w-20 h-2 pb-8 transform skew-y-[-28deg] lg:skew-y-[28deg]  bg-red-700 opacity-100  duration-150 z-0"></div>
                )}

                <Link
                  className="relative z-10 text-white"
                  href={page.route}
                  tabIndex={-1}
                >
                  <button onClick={closeMenu} tabIndex={isOpen ? 0 : -1}>
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
