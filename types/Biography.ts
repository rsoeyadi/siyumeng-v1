import { PortableTextBlock } from "sanity";

export type Biography = {
  _id: string;
  createdAt: Date;
  imageUrl: string;
  content: PortableTextBlock[];
};