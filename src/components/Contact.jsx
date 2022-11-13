import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[500px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff5722] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - aliraza.r10@gmail.com</p>

            </div>
                <input type="text" className=' p-2 bg-[#ccd6f6] rounded-sm' placeholder='Name' name='name' />
                <input type="email" className='my-4 p-2 bg-[#ccd6f6] rounded-sm' placeholder='Email' name='email' />
                <textarea name="message" className=' p-2 bg-[#ccd6f6] rounded-sm' id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 border-[#ff5722] hover:border-[#ff5722] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact