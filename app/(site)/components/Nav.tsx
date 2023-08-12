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
      document.body.classList.add("overflow-y-hidden", "fixed");
    } else {
      document.body.classList.remove("overflow-y-hidden", "fixed");
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
    <div className="lg:hidden landscape-xs:hidden">
      <div className="block bg-slate-100 w-screen top-0 left-0 h-20">
        <p className="text-2xl pt-5 pl-5 text-rose-600 font-bold">
          SIYUMENG WANG
        </p>
        <div className="absolute top-3 right-3 z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div
        className={`
    overflow-y-scroll overflow-x-hidden top-20 bottom-0 w-[100vw] bg-slate-100 p-10 pl-20 text-white fixed z-40 ease-in-out duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
      >
        <ul className="text-right">
          {pages.map((page) => (
            <li key={page.route} className="pb-5 relative group">
              <div className="text-2xl">
                <div className="absolute top-0 right-0 w-20 h-2 pb-8 transform skew-y-[-28deg] bg-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0"></div>
                {pathname === page.route && (
                  <div className="absolute top-0 right-0 w-20 h-2 pb-8 transform skew-y-[-28deg] bg-rose-600 opacity-100  duration-150 z-0"></div>
                )}
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
