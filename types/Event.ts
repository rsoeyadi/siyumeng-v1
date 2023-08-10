import { PortableTextBlock } from "sanity";

export type Event = {
    name: string;
    link?: string;
    imageUrl: string;
    date: Date;
    location: string;
    description: PortableTextBlock[];
}
    
export default event