
import { BsFillBuildingsFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaPaintRoller } from "react-icons/fa6";
import { GiGroundSprout } from "react-icons/gi";

export default function RolesSection() {

  return(
    <>
      <div className="flex flex-col w-[60%] h-auto p-5 m-auto items-center justify-center gap-5 max-md:w-[100%] mt-20">
        <div className="flex flex-col">
        <h1 className="text-white font-bold text-lg slide-up">SentientAGI Contribution roles</h1>
        </div>

        <div className="flex  w-[100%] h-full justify-center gap-5 max-md:gap-1 max-md:flex">

          <div className="flex h-[80px] w-[120px] max-md:w-[100px] bg-red-100 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg hover:inner-shadow-xl">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <BsFillBuildingsFill />
            </div>
            <p className="text-white text-xs">Builder Role</p>
          </div>
          
          <div className="flex h-[80px] w-[120px] max-md:w-[100px] bg-red-100 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <PiStudentFill />
            </div>
            <p className="text-white text-xs">Educator Role</p>
          </div>

          <div className="flex h-[80px] w-[120px] max-md:w-[100px] bg-red-100 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg">
            <div className="flex p-2 bg-glass-tick inner-shadow rounded-lg">
              <FaPaintRoller />
            </div>
            <p className="text-white text-xs">Artist Role</p>
          </div>

          <div className="flex h-[80px] w-[120px] max-md:w-[100px] bg-red-100 bg-glass rounded-xl flex-col items-center justify-center gap-2 inner-shadow-lg">
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