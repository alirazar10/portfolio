import React from 'react'
import WorkImg from '@assets/projects/workImg.jpeg'
import Realestate from '@assets/projects/realestate.jpg'
import Title from '@utils/Title';

const Works = () => {
    Title('Works - Ali Reza')

  return (
    <div name='works'  className='w-full md:min-h-screen bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full text-gray-300'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff5722]'>Works</p>
                <p className='py-6'>Check out some of my recent works</p>
            </div>
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${WorkImg.src})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate.src})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg.src})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate.src})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg.src})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Realestate.src})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works