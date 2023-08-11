"use client";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="absolute top-3 right-3 z-50">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={`top-0 right-0 w-[90vw] bg-pink-800 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h3>
      </div>
    </>
  );
}
