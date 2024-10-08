import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () => {

    return (
        <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top px-20">
            <header className="container justify-between max-w-6xl mx-auto md:flex">
                <Link href="/">
                    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        Rastler
                        <span className="text-secondary">
                            &nbsp;Dev
                        </span>
                    </h1>
                </Link>
                <div className="flex items-center justify-center gap-7">
                    {socialNetworks.map(({logo,src,id}) => (
                        <Link key={id} href={src} target="_blank" className="transition-all duration-300 hover:text-secondary">{logo}</Link>
                    ))}
                </div>
            </header>
        </MotionTransition>
    );
}

export default Header;