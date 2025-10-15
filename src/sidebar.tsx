
import { ImEnter } from "react-icons/im";
import Logo from '../src/images/SentientPFP.jpg'
import './Tailwind.custom.css'


export default function SideBar() {

  return(
    <>
      <div className="flex flex-col w-[300px] h-[100%] items-center justify-between p-3 rounded-lg box-border bg-glass-tick fixed">
        {/* SIDEBAR TOP SECTION */}
        <div className="flex flex-col text-2xl text-white font-bold w-[100%] h-[55%] justify-between py-2">
          {/* Sidebar logo */}
          <div className="flex w-full h-content items-center justify-center gap-2">
            <img src={Logo} alt="Sentient Logo" className="w-[25px] h-[25px] rounded-lg" />
            <p className="text-[#fd688e] font-bold text-md expand">SentientAGI</p>
          </div>

          {/* Sidebar Navigation BTN */}
          <div className="flex flex-col gap-5">
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

        {/* SIDWBAR FOOTER */}
        <div className="flex w-full h-content items-center justify-etween gap-2">
          <ImEnter />
          <p className="text-white text-sm expand">Checkout AGI</p>
        </div>
      </div>
    </>
  )
}