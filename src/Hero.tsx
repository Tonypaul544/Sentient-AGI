 

import { FaDoorOpen } from "react-icons/fa";
import './Tailwind.custom.css';

 export default function Hero() {
  document.title = "Sentient Open Source";
  // const year = new Date().getFullYear();

  // let BGImg = './images/sent2.jpg';

  return(
    <>
      <div className="hero flex flex-col w-full h-[100vh] items-center justify-center gap-15 p-10 bg-[url('./images/bg2.jpg')]  setbg fade-in">
        <div className="flex slide-down">
        <h1 className="text-white font-bold text-3xl text-shadow-md  fade-in">AGI</h1>
       </div>

        {/* TITLE DIV */}
        <div className="flex flex-col items-center justify-center flex-1 justify-between gap-3 slide-up">
          <div className="flex">
            <h1 className="text-white font-bold text-7xl text-shadow-md max-sm:text-md">Sentient Open Source</h1>
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
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-sm slide-up">Sentient AGI { year }</h1>
        </div>

        <div className="flex w-[100%] h-[100px] bg-gray-600"></div>
      </div>
    </>
  )
 }
