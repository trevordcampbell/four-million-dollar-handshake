import { StaticImageData } from "next/image";

export interface Character {
    name: string;
    id: number;
    image: StaticImageData;
    class: {title: string, icon: StaticImageData};
    strengths:
        {title: string, icon: StaticImageData}[];
    weaknesses: 
        {title: string, icon: StaticImageData}[];
    strategy: string;
    revenue: number;
    votes?: number;
    leader?: boolean;
}