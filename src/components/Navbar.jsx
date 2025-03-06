import React from 'react'
import Login from './Login' 

const Navbar = () => {
  return (
    <>
    <div className="z-[1] -ml-[0rem] relative font-semibold flex justify-center items-center gap-[7rem] bg-[var(--fg-color)] w-[175vh] h-[5vh] rounded-[1rem]">
        <a href="#" class="relative group text-white text-sm font-semibold">
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-600 transition-all duration-300 group-hover:w-full"></span>
            <span class="transition-all duration-300 group-hover:text-emerald-300">
                home
            </span>
        </a>
        <a href="#" class="relative group text-white text-sm font-semibold">
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-600 transition-all duration-300 group-hover:w-full"></span>
            <span class="transition-all duration-300 group-hover:text-emerald-300">
                about
            </span>
        </a>
        <a href="#" class="relative group text-white text-sm font-semibold">
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-600 transition-all duration-300 group-hover:w-full"></span>
            <span class="transition-all duration-300 group-hover:text-emerald-300">
                pricing
            </span>
        </a>
        <a href="#" class="relative group text-white text-sm font-semibold">
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-600 transition-all duration-300 group-hover:w-full"></span>
            <span class="transition-all duration-300 group-hover:text-emerald-300">
                contact
            </span>
        </a>
        <a href="#" class="relative group text-white text-sm font-semibold">
            <span class="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-sky-600 transition-all duration-300 group-hover:w-full"></span>
            <span class="transition-all duration-300 group-hover:text-emerald-300">
                faq
            </span>
        </a>
        <div className='ml-[2rem] mt-[6rem]' ><Login /></div>
    </div>
    </>
  )
}

export default Navbar