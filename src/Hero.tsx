 

import { FaDoorOpen } from "react-icons/fa";
import './Tailwind.custom.css';
import RolesSection from './roles'


 export default function Hero() {
  document.title = "Sentient Open Source";

  return(
    <>
      <div className="hero flex flex-col w-[100%] h-[100vh] items-center justify-evenly fade-in mx-auto bg-green-600">

       <div className="flex flex-col w-full h-full justify-center items-center">
          <div className="flex flex-col w-full h-[80%] items-center justify-evenly p-5 pt-15 m-auto">
            {/* <div className="flex w-full h-content items-center justify-center gap-2 slide-down">
              <img src={Logo} alt="Sentient Logo" className="w-[25px] h-[25px] rounded-lg logo" />
              <p className="text-[#fd688e] font-bold text-[17px] expand max-sm:hidden">AGI</p>
            </div> */}
            {/* TITLE DIV */}
            <div className="flex flex-col items-center justify-evenly gap-3 slide-up w-full h-content">
              <div className="flex max-sm:w-[100%] justify-center">
                <h1 className="text-white font-bold text-7xl text-shadow-md max-sm:text-[37px]">Sentient Open Source</h1>
              </div>
              
              <div className="flex">
                <h1 className="text-white font-bold text-lg max-sm:text-sm text-center text-shadow-md">Empowering Developers, Creators, and Innovators</h1>
              </div>
              <div className="flex w-content h-[35px] rounded-lg items-center justify-center gap-2 bg-white p-1 pr-3 fade-in mt-2">
                <div className="flex w-[30px] h-[30px] rounded-lg items-center justify-center">
                  <FaDoorOpen className="text-white text-xl font-bold" />
                </div>
                <button type="button" className="text-black font-bold">Explore AGI</button>
              </div>
            </div>

            {/* SENTIENT AGI DIV */}
            <RolesSection />
          </div>
       </div>
      </div>
    </>
  )
 }
