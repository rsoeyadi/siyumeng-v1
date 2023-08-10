import { PortableTextBlock } from "sanity";

export type Event = {
    name: string;
    link?: string;
    image: string;
    date: Date;
    time: string;
    location: string;
    description: PortableTextBlock[];
}
    
export default event