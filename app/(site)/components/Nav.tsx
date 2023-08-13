"use client";
import { Spiral as Hamburger } from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  const closeMenu = () => {
    setOpen(false);
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
      <div className="lg:z-50  block w-screen top-0 left-0 h-20 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-20 bg-white">
        <div className="absolute top-3 right-3 lg:right-auto lg:left-3  z-40">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`
      overflow-y-scroll overflow-x-hidden top-0 bottom-0 w-[100vw]  lg:w-[75vw] bg-white p-10 pl-20 text-white fixed z-30 ease-in-out duration-300
      ${
        isOpen
          ? "translate-x-0  lg:left-20"
          : "translate-x-full lg:-translate-x-full"
      }
    `}
      >
        <ul className="text-right lg:text-left mt-14">
          {pages.map((page) => (
            <li key={page.route} className="pb-5 relative group">
              <div className="text-2xl">
                {/* Skew Backgrounds */}
                <div className="absolute top-0 right-0 lg:-left-3  w-20 h-2 pb-8 transform skew-y-[-28deg] lg:skew-y-[28deg]  opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0 bg-slate-300"></div>
                {pathname === page.route && (
                  <div className="absolute top-0 right-0 lg:-left-3  w-20 h-2 pb-8 transform skew-y-[-28deg] lg:skew-y-[28deg]  bg-rose-300 opacity-100  duration-150 z-0"></div>
                )}

                {/* Page Link */}
                <Link className="relative z-10" href={page.route}>
                  <button onClick={closeMenu}>{page.title}</button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
