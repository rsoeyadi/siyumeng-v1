import { PortableTextBlock } from "sanity";

export type job = {
    company: string;
    imageUrl: string;
    description: PortableTextBlock[];
}
    
export default event