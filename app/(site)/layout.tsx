import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "@next/font/google";
import Provider from "./Provider";

export const metadata = {
  title: {
    default: "Siyumeng Wang | Pianist",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
