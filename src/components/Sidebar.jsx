import React from 'react'
import Login from './Login' 
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
    <div className="shadow-[2px_0_15px_rgba(16,185,129,1)] relative text-white flex flex-col items-center bg-[var(--fg-color)] w-[34vh] h-[110vh] rounded-[1rem]">
       <div className="-mt-[17rem]">
         <Login />
       </div>
       <div className='hover:scale-105 transition-all duration-300 ease-out z-10 -mt-[18rem] flex justify-center items-center '>
          <div id="card">
            <p className='flex justify-center items-center'>NEWER PRODUCTS</p>
            <p className='-mt-4 flex justify-center items-center text-gray-400 '>this week</p>
            <p className='hover:scale-110 transition-all duration-300 ease-out flex justify-center items-center text-fuchsia-500'>juizi</p>
          </div>
        </div>
        <section className='text-emerald-500 space-x-5 border-[2px] border-emerald-500 flex justify-center items-center w-[12rem] h-[3rem] rounded-[2rem] mt-[18rem]'>
          <a href='#' className="transition-all duration-150 ease-out hover:text-xl fa-brands fa-instagram"></a>
          <a href='#'  class="transition-all duration-150 ease-out hover:text-xl fa-brands fa-facebook"></a>
          <a href='#'  class="transition-all duration-150 ease-out hover:text-xl fa-brands fa-youtube"></a>
          <a href='#'  class="transition-all duration-150 ease-out hover:text-xl fa-brands fa-x-twitter"></a>
        </section>

      <div className='flex flex-col items-center gap-[2rem] -mt-[15rem]'>
        <a href='#' className='hover:text-emerald-400'>DASHBOARD</a>
        <a href='#' className='hover:text-emerald-400'>ALL PRODUCTS</a>
        <a href='#' className='hover:text-emerald-400'>OFFERS</a>
      </div>

   </div>
    
    </>
  )
}

export default Sidebar