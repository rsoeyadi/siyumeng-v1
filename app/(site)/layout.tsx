import type { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Pianist",
  description: "Siyumeng Wang's Website",
  generator: "Next.js",
  applicationName: "Siyumeng Wang | Pianist",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Siyumeng Wang",
    "Classical Pianist",
    "Pianist",
    "Musician",
    "Classical Music",
    "Piano Performance",
    "Concert Pianist",
    "Chamber Music",
    "Solo Piano",
    "Music Performances",
    "Artistry",
  ],
  colorScheme: "light",
  creator: "Siyumeng Wang",
  publisher: "Siyumeng Wang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://siyumeng.com",
    title: "Siyumeng Wang | Classical Pianist",
    description:
      "Hailing from Beijing, China, Siyumeng Wang is a 25-year-old pianist who enchants audiences with her heartfelt performances. Her genuine charm and captivating stage presence have made her a sought-after artist, known for her sincere and expressive interpretations.",
    siteName: "Siyumeng Wang | Classical Pianist",
    images: [
      {
        url: "https://siyumeng.com/images/preview.jpg",
      },
    ],
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
