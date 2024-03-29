import React, {useState} from 'react';
import {FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

// import Logo from "../assets/logo.png";


export default function Navbar () {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192b] text-gray-300'>
      <div>
        {/* <img src={Logo} alt="Logo" className='w-28'/> */}
        <h2 className='text-[#ff5722] text-2xl font-bold'> <span className='text-4xl font-extrabold '> {`<`}<span className='text-4xl font-normal text-[#8892b0]'>AR</span>{`/>`} </span></h2>
      </div>
      {/* menu */}
      <div>
        <ul className='hidden md:flex'>
          <li>
          <Link  to="home"  smooth={true}  duration={500} >
            Home
        </Link>
          </li>
          <li>
            <Link  to="about"  smooth={true}  duration={500} >
              About
            </Link>
          </li>
          <li>
            <Link  to="skills"  smooth={true}  duration={500} >
              Skills
            </Link>
          </li>
          <li>
            <Link  to="works"  smooth={true}  duration={500} >
              Works
            </Link>
          </li>
          <li>
            <Link  to="contact"  smooth={true}  duration={500} >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
        {/* Hamburger */}
      <div onClick={handleNavClick} className='md:hidden z-10'>
        { !nav ? <FaBars/> : <FaTimes/> }
      </div>
        {/* Mobile menu  */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192b] flex flex-col justify-center items-center '}>
          <li className='py-5 text-4xl'>
          <Link onClick={handleNavClick} to="home"  smooth={true}  duration={500} >
            Home
        </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleNavClick} to="about"  smooth={true}  duration={500} >
              About
            </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleNavClick} to="skills"  smooth={true}  duration={500} >
              Skills
            </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link  to="works"  smooth={true}  duration={500} >
              Works
            </Link>
          </li>
          <li className='py-5 text-4xl'>
            <Link onClick={handleNavClick} to="contact"  smooth={true}  duration={500} >
              Contact Me
            </Link>
          </li>
        </ul>
      {/* Social icon */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
            <a href="#" className='flex justify-between items-center w-full text-gray-300'>
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1877f2]'>
            <a href="#" className='flex justify-between items-center w-full text-gray-300'>
            Facebook <FaFacebook size={30}/>
            </a>
          </li>
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1DA1F2]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Twitter <FaTwitter size={30}/>
            </a>
          </li> */}
          <li className='w-[160px] h-[60px] flex justify-around items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0d1117]'>
            <a href="#" className='flex justify-between items-center w-full text-gray-300'>
              GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#212121]'>
            <a href="#" className='flex justify-between items-center w-full text-gray-300'>
              EMail<HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#424242]'>
            <a href="#" className='flex justify-between items-center w-full text-gray-300 '>
              Resume<BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
