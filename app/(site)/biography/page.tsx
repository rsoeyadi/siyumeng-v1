"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const isRootPage = usePathname() === "/";
  if (!isRootPage) {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="relative">
      This is the biography pagThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageeis is the biography pagThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageeis is the biography pagThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageeis is the biography pagThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageeis is the biography pagThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageeis is the biography pagThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageeis is the biography pagThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageeis is the biography pagThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageeis is the biography
      pagThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageeis is the
      biography pagThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageeis is
      the biography pagThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageeis
      is the biography pagThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageeis is the biography pagThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageeis is the biography pagThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageeis is the biography pagThis is the biography pageThis
      is the biography pageThis is the biography pageThis is the biography
      pageThis is the biography pageThis is the biography pageThis is the
      biography pageThis is the biography pageThis is the biography pageThis is
      the biography pageThis is the biography pageThis is the biography pageThis
      is the biography pagee
    </div>
  );
}
