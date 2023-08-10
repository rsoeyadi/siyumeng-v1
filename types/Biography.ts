import { PortableTextBlock } from "sanity";

export type Biography = {
  _id: string;
  createdAt: Date;
  content: PortableTextBlock[];
};