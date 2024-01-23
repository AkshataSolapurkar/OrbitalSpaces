import React from "react";
import Google from "./icons8-google-50 1.png";
import picture from "./img.png";
import Github from "./Github.png"
import { Signin } from "./Signin";
import { Navbar } from "./NavBar";

export function Getstarted(prop){
    const[clicked,setClicked]=React.useState(true)
   const logout =() =>{
     setClicked(false)
   }
    return(
    
        <>
        {clicked ? 
        <section> 
            <Navbar/>
            <div className='bg-[#F9F4F4] h-[20px] relative'></div>
            <section className="max-w-[1200px] w-full text-[#2E5F53] m-auto px-[22px] py-0 mt-4 uppercase bg-white">
            <div className="flex justify-around gap-[20%] ">

            <div className="max-w-[50%] flex flex-col gap-[2%] text-left ">
            <h1 className="font-bold text-[50px]">Get Started</h1>
                <p className="text-black font-semibold mb-5 text-[15px]">with your Multiple Career Opportunity with OrbitalSpace</p>
                <div>
                    <div className="flex justify-between gap-[46px]">
                            <button className="items-center gap-[5%] h-[10%] flex justify-center text-[16px] w-[70%] font-semibold bg-[#2E5F53] text-white py-[12px] px-[30px] rounded-[10px]">
                            <img className="w-[25px]" src={Google} alt="Google" />
                            <p>Sign Up</p></button>
                            <button className="text-center items-center h-[10%] gap-[5%] flex justify-center text-[16px] w-[70%] font-semibold bg-[#2E5F53] text-white py-[12px] px-[30px] rounded-[10px]">
                            <img className="w-[25px]" src={Github} alt="Github" />
                            <p className="text-center">Sign Up</p>
                            </button>
                            
                    </div>
                    <p className="text-center text-[18px] text-[#8E8E8E] font-black mt-[26px] mb-[16px]">OR</p>
                    <div className="text-black">

                    <div class="relative w-full h-[50px] border-b-[2px] border-solid border-grey my-[30px] mx-[0px]">
                    <input id="inputpassword" class="absolute top-[10px] py-0 px-[6px] font-semibold text-[1rem]  w-full h-full bg-transparent border-none outline-none" type="text" required />
                    <label class="absolute left-[5px] transition-transform translate-y-0 text-[1rem] font-semibold pointer-events-none">Email</label>
                    </div>

                    <div class="relative w-full h-[50px] border-b-[2px] border-solid border-grey my-[30px] mx-[0px]">
                    <span class="absolute right-[8px] text-[1.2rem] leading-[57px]"><ion-icon name="eye-off"></ion-icon></span>
                    <input id="inputpassword" class="absolute top-[10px] py-0 px-[6px] font-semibold text-[1rem]  w-full h-full bg-transparent border-none outline-none" type="Password" required />
                    <label for="inputpassword" class="absolute left-[5px] transition-transform translate-y-0 text-[1rem] font-semibold pointer-events-none">Password</label>
                    </div>

                    </div>
                    <div className="flex flex-col items-center">
                        <button className='text-[16px] mb-3 w-[40%] font-semibold bg-[#2E5F53] text-white py-[12px] px-[30px] rounded-[10px]'>Get Started</button>
                        <button onClick={logout} className="text-[16px] mb-[20px] font-semibold bg-[#2E5F53] text-white py-[12px] px-[30px] rounded-[10px]">Don't have a Account!!!Sign Up</button>
                    </div>

                </div>
            </div>

            <div className="hidden sm:block">
                <img className="" src={picture} alt="Picture" />
            </div>
            </div>
            </section>
            </section>
            : <Signin />} 
        </>
        
    )
}