"use client";
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { id, title, image, urlGithub, urlDemo } = props.data;

    return (
        <div className="p-4 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">{title}</h3>
            <Image src={image} width="200" height="200" className="w-full  md:w-[200px] rounded-2xl h-auto" alt="Image product" />
            <div className="flex gap-5 mt-5">
                <Link href={urlGithub} target="_blank" className="p-2 transition duration-160 rounded-lg bg-slate-500 hover:bg-slate-500/80">Github</Link>
                <Link href={urlGithub} target="_blank" className="p-2 transition duration-160 rounded-lg bg-secondary hover:bg-secondary/80">Demo</Link>
            </div>
        </div>
    )
}

export default PortfolioBox;