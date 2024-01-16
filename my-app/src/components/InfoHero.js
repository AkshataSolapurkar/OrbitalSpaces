import React from "react";
import {Getstarted} from "./Getstarted"
export function InfoHero(prop){
    
return(
    <div className="max-w-[50%] flex flex-col mt-[100px] gap-[2%] text-left ">
                <h1 className="max-w-[95%] text-[45px] font-bold mb-[20px] ">Linking aspirations to job opportunities</h1>
                <p className="max-w-[92%] text-[14px] font-semibold">Effortlessly connect with promising career opportunities through our platform, where we streamline the path between job seekers and employers</p>
                <a href={<Getstarted/>} className="text-[16px] w-[40%] text-center font-semibold bg-[#2E5F53] mt-[50px] text-white py-[12px] px-[30px] rounded-[10px]">Get Started</a>
            </div>
)
}