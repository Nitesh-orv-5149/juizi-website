import { useState } from 'react'
import './App.css'
import Sidebar from './components/Navbar'
import Navbar from './components/Sidebar'
import Title from './components/Title'
import Product from './components/Product'
import Prdname from './components/Prdname'
import Names from './components/Names'

function App() {
  return (
    <>
      <div className="roboto-regular grid grid-cols-11 grid-rows-8 gap-0 overflow-hidden">
          <div className="col-span-9 col-start-3 row-start-1">
            <Sidebar />
          </div>
          <div className="col-span-2 row-span-8 col-start-1 row-start-1">
            <Navbar />
          </div>
          <div className="col-span-9 col-start-3 row-start-2 -mt-[2.5rem]">
            <Title />
          </div>
          <div className="col-span-7 row-span-4 col-start-3 row-start-3">
            <Product />
          </div>
          <div className="ml-[2rem] col-span-4 row-span-4 col-start-9 row-start-3">
            <Names />
          </div>
          <div className="col-span-3 row-span-2 col-start-9 row-start-7"></div>
          <div className="-ml-[2rem] w-[35rem] col-span-3 row-span-2 col-start-6 row-start-7"><Prdname /></div>
      </div>
    </>
  )
}

export default App
