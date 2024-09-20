import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const PageServices = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px] mt-20">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
                        Mis 
                        <span className="font-bold text-secondary"> servicios</span>
                        <p className="mb-3 text-xl text-gray-300"> Ofrezco una amplia gama de servicios para satisfacer tus necesidades.</p>
                        <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
                    </h1>
                </div>
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    )
}

export default PageServices;