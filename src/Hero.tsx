 

import { FaDoorOpen } from "react-icons/fa";
import './Tailwind.custom.css';
import RolesSection from './roles'


 export default function Hero() {
  document.title = "Sentient Open Source";

  return(
    <>
      <div className="hero flex flex-col w-full h-[100vh] items-center justify-center p-10  setbg fade-in">

       <div className="moon h-[100em] flex flex-col w-[75%] h-[30em] items-center gap-2">
        <div className="flex slide-down">
          <h1 className="text-white font-bold text-3xl text-shadow-md  fade-in">AGI</h1>
        </div>
           {/* TITLE DIV */}
          <div className="flex flex-col items-center justify-center flex-1 justify-between gap-3 slide-up h-[100em]">
            <div className="flex max-sm:w-[100%] justify-center">
              <h1 className="text-white font-bold text-6xl text-shadow-md max-sm:text-md max-sm:text-[28px]">Sentient Open Source</h1>
            </div>
            
            <div className="flex">
              <h1 className="text-white font-bold text-lg text-shadow-md">Empowering Developers, Creators, and Innovators</h1>
            </div>
            <div className="flex w-content h-[35px] rounded-lg items-center justify-center gap-2 bg-white p-1 pr-3 fade-in mt-2">
              <div className="flex w-[30px] h-[30px] bg-green-500 rounded-lg items-center justify-center">
                <FaDoorOpen className="text-white text-xl font-bold" />
              </div>
              <button type="button" className="text-black font-bold">Explore AGI</button>
            </div>
          </div>

          {/* SENTIENT AGI DIV */}
          <RolesSection />
        </div>
      </div>
    </>
  )
 }
