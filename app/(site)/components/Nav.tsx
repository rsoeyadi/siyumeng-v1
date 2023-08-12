"use client";
import { Spiral as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isOpen);
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
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
    <>
      <div className="block bg-slate-100 w-screen top-0 left-0 h-20">
        <div className="absolute top-3 right-3 z-50">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      <div
        className={`top-20 right-0 w-[100vw] bg-slate-100 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="text-right">
          {pages.map((page) => (
            <li key={page.route} className="pb-5">
              <p className="text-xl">{page.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
