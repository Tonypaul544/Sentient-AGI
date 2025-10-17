

import { ImEnter } from "react-icons/im";
import Logo from '../src/images/SentientPFP.jpg'
import './Tailwind.custom.css'
import "./App.css"


export default function SideBar() {

  return(
    <>
      {/* <div className="flex flex-col h-[100%] p-3 rounded-lg max-sm:h-full max-sm:rounded-none left-0 justify-beetween z-10"> */}
      <div className="flex flex-col sidebar w-[200px] z-10 justify-beetween bg-[#000000] p-3 box-border min-h-[100vh] max-h-[100vh] min-w-[100px] max-w-[175px] pb-10 gap-10">
        {/* SIDEBAR TOP SECTION */}
       <div className="flex flex-col h-full justify-beetween min-h-[83vh]">
          <div className="flex flex-col text-2xl text-white font-bold w-[100%] h-[55%]  gap-5 py-2">
            {/* Sidebar logo */}
            <div className="flex w-full h-content items-center justify-center gap-2">
              <img src={Logo} alt="Sentient Logo" className="w-[25px] h-[25px] rounded-lg logo" />
              <p className="text-[#fd688e] font-bold text-[17px] expand">SentientAGI</p>
            </div>

            {/* Sidebar Navigation BTN */}
            <div className="flex flex-col gap-4 max-sm:gap-1 max-sm:w-[100%]  max-sm:p-0 h-auto mt-3">
              <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
                <ImEnter />
                <p className="text-white text-sm expand">Checkout AGI</p>
              </div>
              
              <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
                <ImEnter />
                <p className="text-white text-sm expand">Checkout AGI</p>
              </div>

              <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
                <ImEnter />
                <p className="text-white text-sm expand">Checkout AGI</p>
              </div>

              <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
                <ImEnter />
                <p className="text-white text-sm expand">Checkout AGI</p>
              </div>

              <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
                <ImEnter />
                <p className="text-white text-sm expand">Checkout AGI</p>
              </div>
            </div>
          </div>
       </div>
          {/* SIDWBAR FOOTER */}
        <div className="flex w-full h-content items-center justify-etween gap-2 p-1 b-0 h-[40px] mb-0">
          <ImEnter />
          <p className="text-white text-sm expand">Checkout AGI</p>
        </div>
      </div>
    </>
  )
}