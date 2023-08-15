import { PortableTextBlock } from "sanity";

export type Job = {
    company: string;
    link: string;
    image: string;
    description: PortableTextBlock[];
}
    
export default event