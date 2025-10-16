
import { ImEnter } from "react-icons/im";
import Logo from '../src/images/SentientPFP.jpg'
import './Tailwind.custom.css'
import "./App.css"


export default function SideBar() {

  return(
    <>
      <div className="flex flex-col w-full h-[100%] p-3 rounded-lg box-border bg-glass-tick max-sm:h-full max-sm:rounded-none left-0 justify-beetween">
        {/* SIDEBAR TOP SECTION */}
        <div className="flex flex-col text-2xl text-white font-bold w-[100%] h-[55%] gap-5 py-2">
          {/* Sidebar logo */}
          <div className="flex w-full h-content items-center justify-center gap-2">
            <img src={Logo} alt="Sentient Logo" className="w-[25px] h-[25px] rounded-lg logo" />
            <p className="text-[#fd688e] font-bold text-[17px] expand max-sm:hidden">SentientAGI</p>
          </div>

          {/* Sidebar Navigation BTN */}
          <div className="flex flex-col gap-2 max-sm:gap-1 max-sm:w-[100%]  max-sm:p-0">
            <div className="flex w-full h-content items-center justify-between gap-2 rounded-md p-2">
              <ImEnter className=" max-sm:text-lg  " />
              <p className="text-white text-sm expand max-sm:hidden">Checkout AGI</p>
            </div>
            
            <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
              <ImEnter />
              <p className="text-white text-sm expand max-sm:hidden">Checkout AGI</p>
            </div>

            <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
              <ImEnter />
              <p className="text-white text-sm expand max-sm:hidden">Checkout AGI</p>
            </div>

            <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
              <ImEnter />
              <p className="text-white text-sm expand max-sm:hidden">Checkout AGI</p>
            </div>

            <div className="flex w-full h-content items-center justify-etween gap-2 rounded-md p-2">
              <ImEnter />
              <p className="text-white text-sm expand max-sm:hidden">Checkout AGI</p>
            </div>
          </div>
        </div>

        {/* SIDWBAR FOOTER */}
        <div className="flex w-full h-content items-center justify-etween gap-2">
          <ImEnter />
          <p className="text-white text-sm expand max-sm:hidden">Checkout AGI</p>
        </div>
      </div>
    </>
  )
}