'use client';

import Image from 'next/image';
import ContainerPage from '@/components/container';
import TransitionPage from '@/components/transition-page';
import { dataPortfolio } from '@/data';
import { useParams } from 'next/navigation';
import Tecnologies from '@/components/tecnologies';

const Project = () => {
    const params = useParams();
    const data = dataPortfolio.find((data) => data.id === Number(params.id));

    return (
        <ContainerPage>
            <TransitionPage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-5xl mb-5 font-bold text-secondary">{data?.title}</h1>
                <div className="flex flex-wrap gap-2 mb-3">
                        {data?.tecnologies.map((tecnology, index) => (
                            <Tecnologies key={tecnology.name} data={tecnology} />
                        ))}
                    </div>
                <div className="flex flex-col justify-center h-full">
                    {data?.image && <Image src={data?.image} alt={data?.title} width={1920} height={1080} className="w-full h-auto  md:h-auto rounded-lg shadow-lg mb-5" />}
                    {/* Secciones */}
                    {data?.description != "" && <p className="text-center text-sm md:text-lg mb-5">{data?.description}</p>}
                    {data?.objective != "" && <>
                        <h2 className="text-2xl leading-tight text-center md:text-3xl mb-5 font-bold text-secondary">Objetivo</h2>
                        <p className="text-center text-sm md:text-lg mb-5">{data?.objective}</p>
                    </>}
                    {data?.public != "" && <>
                        <h2 className="text-2xl leading-tight text-center md:text-3xl mb-5 font-bold text-secondary">Público</h2>
                        <p className="text-center text-sm md:text-lg mb-5">{data?.public}</p>
                    </>}
                    {data?.caracteristicas != "" && <>
                        <h2 className="text-2xl leading-tight text-center md:text-3xl mb-5 font-bold text-secondary">Características</h2>
                        <p className="text-center text-sm md:text-lg mb-5">{data?.caracteristicas}</p>
                    </>}
                    {data?.results != "" && <>
                        <h2 className="text-2xl leading-tight text-center md:text-3xl mb-5 font-bold text-secondary">Resultados</h2>
                        <p className="text-center text-sm md:text-lg mb-5">{data?.results}</p>
                    </>}
                    {data?.lecciones != "" && <>
                        <h2 className="text-2xl leading-tight text-center md:text-3xl mb-5 font-bold text-secondary">Lecciones aprendidas</h2>
                        <p className="text-center text-sm md:text-lg mb-5">{data?.lecciones}</p>
                    </>}
                </div>
                <div className="h-[100px]"></div>
            </div>
        </ContainerPage>

    )
}

export default Project;