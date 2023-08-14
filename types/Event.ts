import { PortableTextBlock } from "sanity";

export type Event = {
    formattedDate?: string;
    name: string;
    link?: string;
    date: Date;
    time: string;
    location: string;
    description: PortableTextBlock[];
}
    
export default event