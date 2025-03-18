import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import Timeline from "@/components/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rastler | Acerca de mi",
    description: "Trayectoria profesional de Rastler",
};

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi{' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>
                <CounterServices />
                <Timeline />
            </ContainerPage>
        </>
    )
}

export default PageAboutMe;