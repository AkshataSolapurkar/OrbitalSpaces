import React from "react";
import { Roadmap } from "./RoadMap";
import { Navbar } from "./NavBar";


export function Main(prop){
    const[roadmapnow,setroadmapnow]=React.useState(false)
    function loginnow(){
        setroadmapnow(true)
        console.log(roadmapnow)
    }
    return(
        <>
        {roadmapnow ? <Roadmap /> :
        <section>
        <Navbar loginnow={loginnow}/>
        <div className='bg-[#F9F4F4] h-[20px] relative'></div>
        <section className="max-w-[1200px] w-full text-[#2E5F53] m-auto px-[22px] py-0 mt-4 uppercase bg-white">
            <p className="text-left text-[22px] font-semibold mb-[18px]">Scroll Out the Opportunity Available for you</p>
            <div>
                <div className="border-[1px] border-black py-[21px] px-[29px] items-center mb-[36px]">
                    <div className="flex justify-between">
                        <h1 className="text-[22px] font-semibold">Title</h1>
                        <div className="xxl:hidden flex text-center items-center text-[18px] font-semibold text-black gap-[27px] justify-between">
                            <p>Stipend</p>
                            <p>Duration</p>
                        </div>
                    </div>
                    <div className="text-left mt-[5px] text-black font-semibold">
                    <p>Discription whatever the jobs discription is </p>
                    <p className="mt-[5px]">Key Skills</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="rounded-[10px] text-[18px] font-semibold bg-[#2E5F53] text-white px-[25px] py-[5px]" >Apply Now</button>
                    </div>
                    </div>
                    <div className="border-[1px] border-black py-[21px] px-[29px] items-center mb-[36px]">
                    <div className="flex justify-between">
                        <h1 className="text-[22px] font-semibold">Title</h1>
                        <div className="xxl:hidden flex text-center items-center text-[18px] font-semibold text-black gap-[27px] justify-between">
                            <p>Stipend</p>
                            <p>Duration</p>
                        </div>
                    </div>
                    <div className="text-left mt-[5px] text-black font-semibold">
                    <p>Discription whatever the jobs discription is </p>
                    <p className="mt-[5px]">Key Skills</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="rounded-[10px] text-[18px] font-semibold bg-[#2E5F53] text-white px-[25px] py-[5px]" >Apply Now</button>
                    </div>
                    </div>
                    <div className="border-[1px] border-black py-[21px] px-[29px] items-center mb-[36px]">
                    <div className="flex justify-between">
                        <h1 className="text-[22px] font-semibold">Title</h1>
                        <div className="xxl:hidden flex text-center items-center text-[18px] font-semibold text-black gap-[27px] justify-between">
                            <p>Stipend</p>
                            <p>Duration</p>
                        </div>
                    </div>
                    <div className="text-left mt-[5px] text-black font-semibold">
                    <p>Discription whatever the jobs discription is </p>
                    <p className="mt-[5px]">Key Skills</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="rounded-[10px] text-[18px] font-semibold bg-[#2E5F53] text-white px-[25px] py-[5px]" >Apply Now</button>
                    </div>
                    </div>
            </div>
        </section>
        </section>
        }
            </>
    )
}