"use client";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  const Sidebar = () => {
    return (
      <div
        className={`top-0 right-0 w-[90vw] bg-pink-800 p-10 pl-20 text-white fixed h-full z-40 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
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
      <div className="absolute top-3 right-3 z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <Sidebar />
    </div>
  );
}
