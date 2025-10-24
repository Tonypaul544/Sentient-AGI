
import { BsFillBuildingsFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaPaintRoller } from "react-icons/fa6";
import { GiGroundSprout } from "react-icons/gi";

export default function RolesSection() {

  return(
    <>
      <div className="flex flex-col w-[60%] h-auto p-5 m-auto items-center justify-center gap-7 max-md:w-[100%] mt-10 max-md:mt-[30%] pb-10">
        <div className="flex flex-col">
        <h1 className="text-white font-bold text-xl slide-up">SentientAGI Contribution roles</h1>
        </div>

        <div className="flex w-content max-md:w-[100%] flex-wrap h-full justify-center items-center gap-2 max-md:gap-4  transistion-all duration-500 ">

          <div className="flex h-[80px] w-[120px] max-md:min-w-[150px] max-md:min-h-[90px] max-md:max-w-[40%] max-md:flex-1 max-md:h-[120px] max-md:m-auto  max-md:mb-2 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg hover:inner-shadow-xl hover:scale-[1.05] transistion-all duration-500 my-2">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <BsFillBuildingsFill />
            </div>
            <p className="text-white text-xs">Builder Role</p>
          </div>
          
          <div className="flex h-[80px] w-[120px] max-md:min-w-[150px] max-md:min-h-[90px] max-md:max-w-[40%] max-md:flex-1 max-md:h-[120px] m-auto  max-md:mb-2 bg-red-100 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg hover:scale-[1.05] transistion-all duration-500">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <PiStudentFill />
            </div>
            <p className="text-white text-xs">Educator Role</p>
          </div>

          <div className="flex h-[80px] w-[120px] max-md:min-w-[150px] max-md:min-h-[90px] max-md:max-w-[40%] max-md:flex-1 max-md:h-[120px] m-auto  max-md:mb-2 bg-red-100 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg hover:scale-[1.05] transistion-all duration-500">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <FaPaintRoller />
            </div>
            <p className="text-white text-xs">Artist Role</p>
          </div>

          <div className="flex h-[80px] w-[120px] max-md:min-w-[150px] max-md:min-h-[90px] max-md:max-w-[40%] max-md:flex-1 max-md:h-[120px] m-auto  max-md:mb-2 bg-red-100 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg hover:scale-[1.05] transistion-all duration-500">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <GiGroundSprout />
            </div>
            <p className="text-white text-xs">Helper Role</p>
          </div>
        </div>
      </div>
    </>
  )
}