import { PortableTextBlock } from "sanity";

export type Biography = {
  _id: string;
  createdAt: Date;
  image: string;
  blockImages: string[];
  content: PortableTextBlock[];
};