import { PortableTextBlock } from "sanity";

export type Job = {
    company: string;
    imageUrl: string;
    description: PortableTextBlock[];
}
    
export default event