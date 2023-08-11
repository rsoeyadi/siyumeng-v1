"use client"
import { Spiral as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return <Hamburger toggled={isOpen} toggle={setOpen} />;
}
