 

// import { FaDoorOpen } from "react-icons/fa";
import './Tailwind.custom.css';
import RolesSection from './roles'
import { ImEnter } from "react-icons/im";


 export default function Hero() {
  document.title = "Sentient Open Source";

  return(
    <>
      <div className="hero flex flex-col w-[100%] h-full justify-evenly fade-in mx-auto ">

        <div className="flex flex-col w-full justify-between items-center h-[100vh] pt-12 max-md:pt-0 max-md:h-[100vh]">
          <div className="flex flex-col w-full h-auto items-center justify-between m-auto max-sm:h-auto max-sm:pt-[0] max-md:mb-30 max-md:mt-[20px] justify-etween">
            {/* <div className="flex w-full h-content items-center justify-center gap-2 slide-down">
              <img src={Logo} alt="Sentient Logo" className="w-[25px] h-[25px] rounded-lg logo" />
              <p className="text-[#fd688e] font-bold text-[17px] expand max-sm:hidden">AGI</p>
            </div> */}
            {/* TITLE DIV */}
            <div className="flex flex-col items-center justify-evenly gap-3 slide-up w-full h-content">
              <div className="flex w-content h-[35px] rounded-lg items-center justify-center gap-2 bg-transparent border border-1 p-1 pr-3 fade-in mt-1">
                <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
                  <ImEnter />
                  <p className="text-white text-sm expand text-[#000]">Checkout AGI</p>
                </div>
              </div>
              <div className="flex max-sm:w-[100%] justify-center">
                <h1 className="text-white font-bold text-7xl text-shadow-md max-sm:text-[37px]">Sentient Open Source</h1>
              </div>
              
              <div className="flex">
                <h1 className="text-white font-bold text-lg max-sm:text-sm text-center text-shadow-md">Empowering Developers, Creators, and Innovators</h1>
              </div>
            </div>

          </div>
            {/* SENTIENT AGI DIV */}
            <RolesSection />
        </div>
      </div>
    </>
  )
 }
