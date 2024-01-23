import React from "react"

export function Navbar(prop) {
    
    return(
        <>
        <header className="max-w-[1200px] w-full m-auto px-[22px] py-0 mt-4 uppercase bg-white">
            <div className=" flex justify-between items-center">
                <div className="text-[24px] font-black">LOGO</div>
                
                        <button onClick={prop.loginnow} className='text-[16px] font-semibold' href="">Roadmap</button>
                        <a className='text-[16px] font-semibold' href="">ABOUT</a>
                        <a className='text-[16px] font-semibold' href="">Contact</a>
                        <button className='text-[16px] font-semibold' href="">
                          HIRE
                        </button>
                         
                <button onClick={prop.logout} className='text-[16px] font-semibold bg-[#2E5F53] text-white py-[12px] px-[30px] rounded-[10px]' href="">Get Started</button>
            </div>
        </header>
        <div className="border-b-2 border-gray-500 shadow-md mt-3"></div>
        </>
        
        
    )
}