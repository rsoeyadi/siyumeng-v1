"use client";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  const Sidebar = () => {
    return (
      <div
        className={`top-0 left-0 w-[90vw] bg-pink-800 p-10 pl-20 text-white fixed h-full z-40 transition ease-in-out duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h2 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar #0F171D
        </h2>
      </div>
    );
  };

  return (
    <div className="md:hidden">
      <div className="absolute top-3 left-3 z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <Sidebar />
    </div>
  );
}
