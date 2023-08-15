import { PortableTextBlock } from "sanity";

export type Video = {
    title: string;
    link: string;
    description: PortableTextBlock[];
}