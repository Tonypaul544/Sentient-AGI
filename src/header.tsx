import Logo from '../src/images/SentientPFP.jpg'
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import './Tailwind.custom.css';
import { GiHamburgerMenu } from "react-icons/gi";


// import { ImEnter } from "react-icons/im";

export default function Header() {
  return(
    <>
      <div className="flex items-center w-full justify-between px-10">
        <div className="flex w-content h-content items-center justify-center gap-2">
          <img src={Logo} alt="Sentient Logo" className="w-[25px] h-[25px] rounded-lg logo" />
          <p className="text-[#fd688e] font-bold text-[17px] expand">SentientAGI</p>
        </div>

        <div className="flex gap-4 max-sm:gap-3 max-sm:w-[100%]  h-auto mt-1 max-md:flex-col  max-md:w-[500px]  max-md:absolute  max-md:items-center max-md:bg-[#222623] max-md:mx-auto max-md:gap-5 right-0 top-9  max-md:py-3 max-md:hidden">

          <p className="text-white text-sm expand font-bold max-md:hover:bg-[#525653]  max-md:px-5  max-md:py-1  max-md:rounded-md  max-md:w-[200px]  max-md:text-center">Checkout</p>

          <p className="text-white text-sm expand font-bold max-md:hover:bg-[#525653]  max-md:px-5  max-md:py-1  max-md:rounded-md  max-md:w-[200px]  max-md:text-center">Checkout</p>

          <p className="text-white text-sm expand font-bold max-md:hover:bg-[#525653]  max-md:px-5  max-md:py-1  max-md:rounded-md  max-md:w-[200px]  max-md:text-center">Checkout</p>
        </div>

        <div className="flex gap-5 items-center">
          <div className="flex w-content gap-3 justify-between">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <FaDiscord />
            </div>
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <BsTwitterX />
            </div>
          </div>
          <GiHamburgerMenu className='text-[20px] hidden max-md:flex' />
        </div>
      </div>
    </>
  )
}