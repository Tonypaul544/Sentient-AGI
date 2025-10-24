
import { Link, Element, scroller } from "react-scroll";

import { useState } from 'react';;
import Logo from '../src/images/sentient-logo-removebg-preview.png'
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import './Tailwind.custom.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {

  const [isOpen, setIsOpen] = useState(true);
  function toggleNav() {
    setIsOpen(prev => !prev);
  }
  return(
    <>
      <div className="flex items-center w-full justify-between px-5 bg-glass inner-shadow h-[100%] max-md:relative bg-transparent-sm">
        <div className="flex w-content h-content items-center justify-center">
          <img src={Logo} alt="Sentient Logo" className="w-[150px] h-[35px] rounded-lg logo mr-1" />
          {/* <p className="text-[#fff] font-bold text-[23px] expand">SentientAGI</p> */}
        </div>

        <nav id="navBar" className="flex gap-4 max-sm:gap-3 max-sm:w-[100%]  h-auto mt-1 max-md:flex-col max-md:w-[500px]  max-md:absolute  max-md:items-center max-md:bg-[#222623] max-md:mx-auto max-md:gap-5 right-0 top-9  max-md:py-3 max-md:hidden mr-17" style={isOpen ? {display: 'none'} : {display: 'flex'}}>

          <Link to="about" smooth duration={500} className="text-white text-sm expand font-bold px-5 py-1 rounded-md hover:bg-[#525653]  max-md:px-5  max-md:py-1  max-md:rounded-md  max-md:w-[200px]  max-md:text-center hover:inner-shadow hover:scale-[1.096] 
           active:bg-gray-500 transistion-all duration-300">About</Link>

          <Link to="about" smooth duration={500} className="text-white text-sm expand font-bold  px-5 py-1 rounded-md hover:bg-[#525653]  max-md:px-5  max-md:py-1  max-md:rounded-md  max-md:w-[200px]  max-md:text-center hover:scale-[1.096] 
           active:bg-gray-500 transistion-all duration-300">Roles</Link>

          <Link to="about" smooth duration={500} className="text-white text-sm expand font-bold  px-5 py-1 rounded-md hover:bg-[#525653]  max-md:px-5  max-md:py-1  max-md:rounded-md  max-md:w-[200px]  max-md:text-center hover:scale-[1.096] 
           active:bg-gray-500 transistion-all duration-300">Checkout</Link>
        </nav>

        {/* NAVIGATION & SOCIALS */}
        {/* <Element name="about"><about /></Element>
        <Element name="Roles"><Roles /></Element>
        <Element name="goal"><GoalSection /></Element> */}

        <div className="flex gap-5 items-center">
          <div className="flex w-content gap-3 justify-between">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg hover:scale-[1.096] hover:underline transistion-all duration-300">
              <FaDiscord />
            </div>
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg hover:scale-[1.096] hover:underline transistion-all duration-300">
              <BsTwitterX />
            </div>
          </div>
          <button onClick={toggleNav}>
            {!isOpen ? <IoMdClose className="text-2xl font-bold hidden max-md:show" /> : <GiHamburgerMenu className="text-2xl hidden font-bold hover:scale-[1.096] hover:underline transistion-all duration-300 max-md:show" />}
          </button>

          {/* <GiHamburgerMenu onClick={ toggleNav } className='text-[20px] max-md:flex' /> */}
        </div>
      </div>
    </>
  )
}
