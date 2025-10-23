
import './App.css';
import Hero from './Hero';
import Header from './header'
import './Tailwind.custom.css'
import Footer from './footer';

function App() {

  return (
    <>
      <div className="flex max-w-[687px h-auto">
        {/* SIDEBAR SECTION */}
        {/* <div className="flex sidebar w-[200px] z-10">
          <SideBar />
        </div> */}
        {/* BODY */}
        <div className="body flex flex-col w-[100%] items-center overflow-x-hidden bg-[#000000]">
          {/* HEADER SECTION */}
         <div className="flex flex-col w-full bg-transparent">
          {/* HERO SECTION */}
          <div className="flex w-full h-[70px] justify-center fixed  max-md:h-[45px] m-autor">
            <Header />
          </div>
            <div className="flex w-full items-center justify-center  mt-10">
              <Hero />
            </div>
            {/* FOOTER SECTION */}
            <div className="flex bg-gray-1000 w-full h-[100vh] items-center justify-center">
              <Footer />
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default App
