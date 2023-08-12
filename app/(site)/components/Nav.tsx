"use client";
import { Spiral as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isOpen);
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
      document.body.classList.add("fixed");
    } else {
      document.body.classList.remove("overflow-y-hidden");
      document.body.classList.remove("fixed");
    }
  }, [isOpen]);
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
        <p className="text-2xl pt-5 pl-5">SIYUMENG WANG</p>
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
            <li key={page.route} className="pb-5">
              <p className="text-2xl">{page.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
