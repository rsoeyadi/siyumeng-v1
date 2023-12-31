import { PortableTextBlock } from "sanity";

export type Biography = {
  _id: string;
  createdAt: Date;
  square1: string;
  biographyHalf1: PortableTextBlock[];
  biographyHalf2: PortableTextBlock[];
};