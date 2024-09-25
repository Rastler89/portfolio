"use client";
import Image from "next/image";
import Link from "next/link";
import Tecnologies from "./tecnologies";
import { Eye, Github, Info} from "lucide-react";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        type: string;
        withDescription: boolean;
        status: number;
        tecnologies: [{
            name:string;
        }];
        image: string;
        urlGithub: string;
        urlDemo: string;
        description: string;
        objective: string;
        public: string;
        caracteristicas: string;
        results: string;
        lecciones: string;
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const { id, title, tecnologies, image, urlGithub, urlDemo, withDescription } = props.data;

    return (
        <div key={id} className="p-4 border border-teal-50 rounded-xl text-center">
            <h3 className="text-xl mb-1">{title}</h3>
            <div className="flex gap-3 mb-5">
                {tecnologies.map((tecnology) => (
                    <Tecnologies key={tecnology.name} data={tecnology} />
                ))}
            </div>
            <Image src={image} width="200" height="200" className="w-full  md:w-[200px] rounded-2xl h-auto mb-5" alt="Image product" />
            <div className="flex justify-center rounded-lg text-lg" role="group">
                {urlGithub != "" &&<div className="group relative flex justify-center">
                     <Link href={urlGithub} target="_blank" className={`p-2 transition duration-160 bg-slate-500 hover:bg-slate-500/80 ${urlDemo != "" && !withDescription ? "rounded-lg" : "rounded-l-lg"}`}>
                        <Github />
                    </Link>
                    <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Código fuente</span>
                </div>}
                {withDescription && <div className="group relative flex justify-center">
                    <Link href={`/project/${id}`} className={`p-2 transition duration-160 bg-secondary hover:bg-secondary/80 ${urlGithub == "" ? "rounded-l-lg" : ""} ${urlDemo == "" ? "rounded-r-lg" : ""}`}>
                        <Info />
                    </Link>
                    <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Ver más</span>
                </div>}
                {urlDemo != "" && <div className="group relative flex justify-center">
                    <Link href={urlDemo} target="_blank" className={`p-2 transition duration-160 bg-tertiary hover:bg-tertiary/80 rounded-r-lg ${!withDescription && urlGithub == "" ? "rounded-l-lg" : ""}`}>
                        <Eye />
                    </Link>
                    <span className="absolute top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Ver web</span>
                </div>}
            </div>
        </div>
    )
}

export default PortfolioBox;