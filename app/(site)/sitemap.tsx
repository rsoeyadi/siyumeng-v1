import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://siyumeng.com",
      lastModified: new Date(),
    },
    {
      url: "https://siyumeng.com/biography",
      lastModified: new Date(),
    },
    {
      url: "https://siyumeng.com/events",
      lastModified: new Date(),
    },
    {
      url: "https://siyumeng.com/videos",
      lastModified: new Date(),
    },
    {
      url: "https://siyumeng.com/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://siyumeng.com/teaching",
      lastModified: new Date(),
    },
    {
      url: "https://siyumeng.com/contact",
      lastModified: new Date(),
    },
  ];
}
