import React from "react"
import picture from './img.png'

import { InfoHero } from "./InfoHero"

export function HeroHead(prop) {
  
    return(
        <>
         <section className="max-w-[1200px] w-full text-[#2E5F53] m-auto px-[22px] py-0 mt-4 uppercase bg-white">
            <div className="flex justify-between ">
             <InfoHero />
            <div>
                <img className="w-[94%] h-[94%]" src={picture} alt="" />
            </div>
            </div>
            </section>
        </>
        
        
    )
}