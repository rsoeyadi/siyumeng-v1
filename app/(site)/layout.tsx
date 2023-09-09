import type { Metadata } from "next";
import Provider from "./Provider";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Siyumeng Wang | Pianist",
  description: "Siyumeng Wang's Website",
  generator: "Next.js",
  applicationName: "Siyumeng Wang | Pianist",
  referrer: "origin-when-cross-origin",
  category: "music",
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
        alt: "Siyumeng Wang | Pianist",
      },
    ],
  },
  twitter: {
    title: "Siyumeng Wang |  Pianist",
    description:
      "Hailing from Beijing, China, Siyumeng Wang is a 25-year-old pianist who enchants audiences with her heartfelt performances. Her genuine charm and captivating stage presence have made her a sought-after artist, known for her sincere and expressive interpretations.",
    images: [
      {
        url: "https://siyumeng.com/images/preview.jpg",
        alt: "Siyumeng Wang | Pianist",
      },
    ],
  },
  robots: {
    index: true, // Allow general indexing of your pages
    follow: true, // Allow general crawling of links
    nocache: false, // Allow caching of your pages

    googleBot: {
      index: true, // Instruct Google to index your pages
      follow: true, // Allow Google to follow links
      noimageindex: false, // Allow Google to index images
      "max-video-preview": "large", // Set a large video preview size
      "max-image-preview": "large", // Set a large image preview size
      "max-snippet": 200, // Limit text snippet length to a reasonable value
    },
  },
};

const nunito = Nunito({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"], // Add "bold" to the array
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} mx-auto my-0 overscroll-none`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
