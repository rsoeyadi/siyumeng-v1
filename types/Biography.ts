import { PortableTextBlock } from "sanity";

export type Biography = {
  _id: string;
  createdAt: Date;
  image: string;
  content: PortableTextBlock[];
};