
import './App.css';
import Hero from './Hero';
import SideBar from './sidebar';
import Header from './header'
import './Tailwind.custom.css'

function App() {

  return (
    <>
      <div className="flex max-w-[687px h-auto">
        {/* SIDEBAR SECTION */}
        <div className="flex sidebar w-[200px] z-10 hidden">
          <SideBar />
        </div>
        {/* BODY */}
        <div className="body flex flex-col w-[100%] items-center overflow-x-hidden bg-[#000000]">
          {/* HEADER SECTION */}
         <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <div className="flex w-full h-[70px] bg-[#000000] justify-center fixed  max-md:h-[45px] m-autor">
            <Header />
          </div>
            <div className="flex w-full items-center justify-center  mt-10">
              <Hero />
            </div>
            {/* FOOTER SECTION */}
            <div className="flex bg-gray-600 w-full h-[70vh] items-center justify-center">
              <h1 className="text-3xl flex">Footer</h1>
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
