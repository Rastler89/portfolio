"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home1.png" priority width="400" height="400" className="rounded-full mx-auto md:mx-auto" alt="Profile pic" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes imaginarlo,
                        <TypeAnimation 
                            sequence={[
                                "puedes diseñarlo",
                                1000,
                                "puedes estructurarlo",
                                1000,
                                "puedes desarrollarlo",
                                1000,
                                "puedes implementarlo",
                                1000,
                                "puedes crearlo",
                                1000,
                            ]}
                            wrapper="span"
                            repeat={Infinity}
                            speed={50}
                            className="block text-secondary font-bold"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Como desarrollador web, puedo ayudarte a crear tu sitio web o aplicación web, con las tecnologías mas actuales y escalables. Como también crear aplicaciones multiplataforma.
                    </p>

                    <div className="flex items-center gap-3 justify-center md:justify-start md:gap-10">
                        <Link href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:sadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link href="/?show=true" className="px-3 py-2 transition-all border-2 cursor-pointer text-tertiary border-tertiary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-tertiary/60">
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Introduction;
