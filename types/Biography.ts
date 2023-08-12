import { PortableTextBlock } from "sanity";

export type Biography = {
  _id: string;
  createdAt: Date;
  image: string;
  blockImage1: string;
  blockImage2: string;
  content1: PortableTextBlock[];
  content2: PortableTextBlock[];

};