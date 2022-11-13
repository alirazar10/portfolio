import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#0a192b]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#ff5722]'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ali</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-7 max-w-[700px]'>I am a Full Stack Developer specializing in building (and occasionally designing) 
                exceptional digital experiences. 
                Currently, I am focused on building responsive full-stack web application.</p>
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