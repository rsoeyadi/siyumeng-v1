"use client";
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="lg:hidden absolute top-3 left-3">
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </div>
  );
}
