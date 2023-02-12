import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import Title  from '@utils/Title'

const Home = () => {
Title('Home - Ali Reza');
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192b]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ccd6f6] sm:text-4xl '>Hi, its</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ff5722]'>Ali Reza</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>A Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-7 max-w-[700px]'>&quot;Transforming ideas into innovative full-stack web solutions, one pixel at a time.&quot;</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ff5722] hover:border-[#ff5722]'>
                    View Works 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span>
                    </button>
            </div>
        </div>
    </div>
  )
}

export default Home