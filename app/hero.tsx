"use client";
import Image from "next/image"

export default function Hero(){
    return(
        <main className="flex gap-6 items-center mt- px-16 text-[50px] sm:text-[60px] font leading-tight  justify-center font-serif">
            <div className="flex-1 ">
                <p className="text-white hover:text-pink-600">Hi II&apos;mm Ni<span className="">d</span>a Noman</p>
                    <p className="text-white hover:text-pink-600">a frontened </p>
                    <p className="text-white hover:text-pink-600">developer</p>
            </div>
            <div className="flex-1 p-8 ">
             <Image src="/download (1).jpg" alt="pic" width={600} height={100} className="rounded-lg m-14 h-96 w-auto"/>
            </div>
            
        </main>
    )
}
