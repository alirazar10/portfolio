import React from 'react'
import HTML from '@assets/html.png'
import MySQL from '@assets/mysql.png'
import JavaScript from '@assets/javascript.png'
import ReactImg from '@assets/react.png'
import Node from '@assets/node.png'
import GitHub from '@assets/github.png'
import Tailwind from '@assets/tailwind.png'
import Mongo from '@assets/mongo.png'
import Laravel from '@assets/laravel.png'
import PHP from '@assets/php.png'
import Title from '@utils/Title';
import Image from 'next/image'

const Skills = () => {
    Title('Skills - Ali Reza')
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
        {/* container */} 
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff5722]'>Skills</p>
                <p className='py-4'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <Image width={"100%"} height={"100%"} className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind.src} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript.src} alt="javaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg.src} alt="ReactJs icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub.src} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node.src} alt="Node icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MySQL.src} alt="MySQL icon" />
                    <p className='my-4'>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo.src} alt="Mongo icon" />
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-36 mx-auto' src={PHP.src} alt="PHP icon" />
                    <p className='my-4'>PHP</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Laravel.src} alt="Laravel icon" />
                    <p className='my-4'>Laravel</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills