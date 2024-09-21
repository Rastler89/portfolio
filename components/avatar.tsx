"use client";
import MotionTransition from "./transition-component";
import Image from "next/image";

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatar.png" width="300" height="300" className="w-full h-full" alt="Avatar" />
        </MotionTransition>
    )
}

export default Avatar;